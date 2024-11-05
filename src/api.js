const API_KEY = 'AIzaSyBc_ypkHYMOvgRIK9MmDCgxsfKjzW24kpg';

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