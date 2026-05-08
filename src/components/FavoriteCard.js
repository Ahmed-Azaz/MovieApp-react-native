import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Trash2 } from 'lucide-react-native';
import { COLORS } from '../styles/theme';
import { IMAGE_BASE_URL } from '../utils/constants';
import { useFavorites } from '../store/FavoritesContext';

export default function FavoriteCard({ movie }) {
  const { dispatch } = useFavorites();

  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: `${IMAGE_BASE_URL}${movie.poster_path}`,
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>

        <Text style={styles.text}>
          Release: {movie.release_date}
        </Text>

        <Text style={styles.text}>
          Rating: ⭐ {movie.vote_average}
        </Text>

        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => dispatch({ type: 'REMOVE_FAVORITE', payload: movie.id })}
        >
          <Trash2 size={18} color="white" />
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 15,
  },
  image: {
    width: 120,
    height: 180,
  },
  content: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: COLORS.muted,
    marginTop: 6,
  },
  removeButton: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  removeText: {
    color: 'white',
    marginLeft: 6,
    fontWeight: '600',
  },
});
