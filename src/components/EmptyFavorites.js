import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../styles/theme';

export default function EmptyFavorites() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/empty-favorites.png')}
        style={styles.image}
      />

      <Text style={styles.title}>
        Your Favorite List is Empty
      </Text>

      <Text style={styles.subtitle}>
        Pick up your Favorite Movies
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    color: COLORS.text,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.muted,
    marginTop: 10,
    fontSize: 16,
  },
});
