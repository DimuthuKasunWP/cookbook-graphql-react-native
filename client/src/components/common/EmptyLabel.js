import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
  },
});

function EmptyLabel({ label }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

export default EmptyLabel;
