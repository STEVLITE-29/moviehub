🎬 MovieHub
MovieHub is a simple, responsive React app that lets users search for movies using the OMDb API. It features a clean UI, dynamic search, and movie cards that display the title, poster, type, and release year.

🚀 Features
🔎 Search for any movie by title

🖼️ View movie posters, titles, types (movie/series/etc), and release years

📦 Fallback image when no poster is available

⚛️ Built with modern React (functional components + hooks)

🧼 Clean, minimal UI for a smooth user experience

📸 Preview

🛠️ Tech Stack
React (with hooks)

CSS (custom styles)

OMDb API for movie data

📂 File Structure
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js            # Main component with search logic and rendering
│   ├── MovieCard.jsx     # Reusable component for each movie card
│   ├── App.css           # Styling for the app
│   ├── search.svg        # Search icon for input
│   └── index.js          # React app entry point
└── README.md             # This file
🔧 Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/STEVLITE-29/moviehub.git
cd moviehub
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the app
bash
Copy
Edit
npm start
The app will run on http://localhost:3000

🔑 API Key
This project uses the OMDb API with a demo key.

If you want to use your own:

Get a free API key from OMDb

Replace the API_URL in App.js:

js
Copy
Edit
const API_URL = "http://www.omdbapi.com?apikey=your_api_key";

📄 License
StephenCodes

👨‍💻 Author
Stephen — Fullstack Web Developer