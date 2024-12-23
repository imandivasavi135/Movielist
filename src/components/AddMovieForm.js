import React, { useState, useContext } from 'react';
import MovieContext from '../context/MovieContext';

const AddMovieForm = () => {
  const { addMovie } = useContext(MovieContext);
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && genre && year) {
      addMovie({ title, genre, year });
      setTitle('');
      setGenre('');
      setYear('');
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Movie</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Movie Title"
        />
      </div>
      <div>
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Genre"
        />
      </div>
      <div>
        <label>Release Year:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
        />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
