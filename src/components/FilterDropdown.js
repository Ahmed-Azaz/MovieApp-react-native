import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { COLORS } from '../styles/theme';

const filters = [
  {
    label: 'Popularity',
    value: 'popularity',
  },
  {
    label: 'Most Voted',
    value: 'voted',
  },
  {
    label: 'Release Date',
    value: 'release',
  },
  {
    label: 'Rating',
    value: 'rating',
  },
];

export default function FilterDropdown({ selected, setSelected }) {
  const [open, setOpen] = useState(false);

  const selectedLabel = filters.find(f => f.value === selected)?.label || 'Filter';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setOpen(!open)}
      >
        <Text style={styles.buttonText}>{selectedLabel} ▽</Text>
      </TouchableOpacity>

      {open && (
        <View style={styles.menu}>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter.value}
              style={styles.option}
              onPress={() => {
                setSelected(filter.value);
                setOpen(false);
              }}
            >
              <Text
                style={[
                  styles.optionText,
                  selected === filter.value && {
                    color: COLORS.primary,
                  },
                ]}
              >
                {filter.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    zIndex: 500,
  },
  button: {
    backgroundColor: COLORS.card,
    padding: 14,
    borderRadius: 12,
  },
  buttonText: {
    color: COLORS.text,
    fontWeight: '600',
  },
  menu: {
    backgroundColor: COLORS.card,
    marginTop: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  optionText: {
    color: COLORS.text,
  },
});
