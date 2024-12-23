import React, { useState } from 'react';
import './styles.css'; // Link to the updated CSS file

const App = () => {
  const [movies, setMovies] = useState([
    { name: 'Murari', actor: 'Mahesh Babu', year: 2010 },
    { name: 'Happy Days', actor: 'Varun', year: 2014 },
    { name: 'Pushpa2', actor: 'Allu Arjun', year: 2024 },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    actor: '',
    year: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.actor && formData.year) {
      setMovies((prevMovies) => [...prevMovies, formData]);
      setFormData({ name: '', actor: '', year: '' });
      setShowForm(false);
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="container">
      <h1>Movie Management Tool</h1>

      <div className="movie-list">
        <h2>Movie List</h2>
        {movies.length === 0 ? (
          <p>No movies available. Please add some!</p>
        ) : (
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>
                <strong>{movie.name}</strong> - {movie.actor} ({movie.year})
              </li>
            ))}
          </ul>
        )}
      </div>

      <button className="add-movie-btn" onClick={() => setShowForm(true)}>
        Add Movie
      </button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <h2>Add a New Movie</h2>
          <div>
            <label>Movie Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter movie name"
            />
          </div>
          <div>
            <label>Actor:</label>
            <input
              type="text"
              name="actor"
              value={formData.actor}
              onChange={handleChange}
              placeholder="Enter actor name"
            />
          </div>
          <div>
            <label>Year:</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Enter release year"
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default App;
