import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useEffect, useState } from 'react';
import { COLORS } from '../styles/theme';
import { fetchMovies } from '../api/tmdb';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import Loading from '../components/Loading';

export default function HomeScreen() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('popularity');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovies();
  }, [filter]);

  const loadMovies = async () => {
    setLoading(true);

    try {
      const data = await fetchMovies(filter);
      const movieData = data || [];
      setMovies(movieData);
      setFilteredMovies(movieData);
    } catch (error) {
      console.error("Error loading movies:", error);
      setMovies([]);
      setFilteredMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!movies || !Array.isArray(movies)) {
      setFilteredMovies([]);
      return;
    }

    const filtered = movies.filter((movie) =>
      movie.title?.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredMovies(filtered);
  }, [search, movies]);

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <SearchBar
          search={search}
          setSearch={setSearch}
          suggestions={filteredMovies}
          onSuggestionPress={setSearch}
        />

        <FilterDropdown
          selected={filter}
          setSelected={setFilter}
        />

        <FlatList
          data={filteredMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MovieCard movie={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  inner: {
    flex: 1,
    padding: 16,
  },
});
