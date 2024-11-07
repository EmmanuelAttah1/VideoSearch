// I Know its bad practice to plainely api keys in your code,
// I left it here so you can easily pull and execute my code with minimal setup


const API_KEY = import.meta.env.VITE_YOUTUBE_KEY

// Function to get video details
export async function getVideoDetails(videoId) {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch video details');
        }
        
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
            const video = data.items[0];
            // console.log('Video Details:', video);
            return {
                name:video.snippet.title,
                description:video.snippet.description,
                views:video.statistics.viewCount,
                likes:video.statistics.likeCount
            };;
        } else {
            console.error('Video not found');
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
        return null
    }
}


export async function getVideoComments(videoId, pageToken = '', maxResults = 10) {
    const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}&maxResults=${maxResults}&pageToken=${pageToken}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch comments');
        }

        const data = await response.json();

        // console.log(data);
        

        // Extract comments and pagination details
        const comments = data.items.map(item => {
            const comment = item.snippet.topLevelComment.snippet;
            // console.log(comment);
            
            return {
                author: comment.authorDisplayName,
                pic:comment.authorProfileImageUrl,
                text: comment.textDisplay,
                likeCount: comment.likeCount,
                publishedAt: comment.publishedAt.split("T")[0],
            };
        });


        return {
            comments: comments,
            nextPageToken: data.nextPageToken || null,  // For pagination
        };
    } catch (error) {
        console.error('Error fetching comments:', error);
        return null;
    }
}