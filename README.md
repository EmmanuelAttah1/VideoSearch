# YouTube Video Search

This project uses the YouTube Data API to fetch details and comments from a specified YouTube video. Built with Vite and ReactJS, the app fetches video details and loads all top-level comments in a scalable manner, gracefully handling API rate limits and errors.

## Live Demo

Check out the live version of the project here: [YouTube Video Search - Live](http://54.196.207.94:3000/)

## Features

1. **Video Details Fetching**: Retrieves video details like title, description, view count, and like count.
2. **Comments Loading**: Fetches all top-level comments (ignoring replies), supporting large volumes of data.
3. **Scalability**: Designed to handle large comment volumes efficiently.
4. **User Interface**: Simple UI for entering a YouTube video ID and viewing video details and comments.

## Tech Stack

- **Frontend**: ReactJS, Vite
- **API**: YouTube Data API v3
- **Error Handling & Logging**: Integrated error handling and logging to ensure reliability
- **Pagination Support**: To handle large comment volumes effectively

## Getting Started

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed (v14 or higher is recommended).
2. **YouTube Data API Key**: Obtain an API key from the [Google Cloud Console](https://console.cloud.google.com/).

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/EmmanuelAttah1/VideoSearch.git
   cd VideoSearch
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the root directory and add your API key:
     ```env
     VITE_YOUTUBE_KEY=YOUR_YOUTUBE_API_KEY
     ```

4. **Run the Application**
   Start the development server:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

### Build for Production

To build the app for production, run:
```bash
npm run build
```
This will create a `dist` folder with optimized production-ready files.

## Usage

1. Enter a YouTube Video ID in the input field.
2. Click **Search** to retrieve video details and comments.
3. The UI will display video information and list all top-level comments.

## Project Structure

- **src/**
  - **components/**: Contains UI components (e.g., Comment, MyIcon).
  - **pages/**: Contains the video search page and video details page.
  - **api.js**: Handles API integration with the YouTube Data API.

## API Rate Limiting and Error Handling

- **Rate Limits**: The app includes handling for API rate limits to stay within the YouTube Data API’s request quotas.
- **Error Handling**: Errors from the YouTube API are logged, and the user receives feedback if data cannot be fetched.

## Known Limitations

- **Comment Replies**: Only top-level comments are fetched; replies to comments are not included as per the task requirements.

## Contact

For any questions or feedback, feel free to contact me at [attahzuzu@gmail.com].
