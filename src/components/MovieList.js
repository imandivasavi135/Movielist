import React, { useContext } from 'react';
import MovieContext from '../context/MovieContext';

const [movies, setMovies] = useState([
  { name: 'Murari', actor: 'Mahesh Babu', year: 2010 },
  { name: 'Happy Days', actor: 'Varun', year: 2014 },
  { name: 'Pushpa2', actor: 'Allu Arjun', year: 2024 },
]);


export default MovieList;
