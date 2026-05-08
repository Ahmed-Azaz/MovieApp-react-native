import { View, Text, StyleSheet, Image } from 'react-native';
import { useEffect } from 'react';
import { COLORS } from '../styles/theme';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/splash-logo.png')}
        style={styles.logo}
      />

      <Text style={styles.text}>MOVIES</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  text: {
    color: COLORS.primary,
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    letterSpacing: 4,
  },
});
