import {
  SafeAreaView,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useFavorites } from '../store/FavoritesContext';
import FavoriteCard from '../components/FavoriteCard';
import EmptyFavorites from '../components/EmptyFavorites';
import { COLORS } from '../styles/theme';

export default function FavoritesScreen() {
  const { favorites } = useFavorites();

  const safeFavorites = Array.isArray(favorites) ? favorites : [];

  return (
    <SafeAreaView style={styles.container}>
      {safeFavorites.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <FlatList
          data={safeFavorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <FavoriteCard movie={item} />
          )}
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
