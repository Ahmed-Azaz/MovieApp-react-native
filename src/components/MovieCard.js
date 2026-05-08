import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Heart } from 'lucide-react-native';
import { COLORS } from '../styles/theme';
import { IMAGE_BASE_URL } from '../utils/constants';
import { useFavorites } from '../store/FavoritesContext';

export default function MovieCard({ movie }) {
  const { favorites, dispatch } = useFavorites();

  const isFavorite = favorites.some((item) => item.id === movie.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: movie.id });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: movie });
    }
  };

  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: `${IMAGE_BASE_URL}${movie.poster_path}`,
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>
          {movie.title}
        </Text>

        <TouchableOpacity onPress={toggleFavorite}>
          <Heart
            size={24}
            color={isFavorite ? COLORS.primary : COLORS.text}
            fill={isFavorite ? COLORS.primary : 'transparent'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
    marginRight: 10,
  },
});
