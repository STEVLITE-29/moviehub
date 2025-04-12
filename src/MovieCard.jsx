import React from 'react'

// Functional component that receives a movie object as a prop
const MovieCard = ({ movie }) => {
  return (
    // Wrapper div with a class for styling
    <div className="movie">

        {/* Display the movie's release year */}
        <div>
            <p>{movie.Year}</p>
        </div>

        {/* Display the movie poster image */}
        <div>
            <img 
                // If the poster URL is not available, show a placeholder image
                src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/400"} 
                alt={movie.Title} // Provide alt text for accessibility
            />
        </div>

        {/* Display the movie type (e.g., movie, series) and title */}
        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
  )
}

// Export the component to be used in other parts of the app
export default MovieCard;
