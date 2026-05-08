import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Search } from 'lucide-react-native';
import { COLORS } from '../styles/theme';

export default function SearchBar({
  search,
  setSearch,
  suggestions,
  onSuggestionPress,
}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Search color={COLORS.muted} size={20} />

        <TextInput
          placeholder="Search Movies"
          placeholderTextColor={COLORS.muted}
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {search.length > 0 && suggestions.length > 0 && (
        <View style={styles.suggestionsContainer}>
          <FlatList
            data={suggestions.slice(0, 5)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.suggestionItem}
                onPress={() => onSuggestionPress(item.title)}
              >
                <Text style={styles.suggestionText}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 999,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    paddingHorizontal: 15,
    borderRadius: 14,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    color: COLORS.text,
    padding: 15,
    fontSize: 16,
  },
  suggestionsContainer: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginBottom: 10,
    overflow: 'hidden',
  },
  suggestionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  suggestionText: {
    color: COLORS.text,
  },
});
