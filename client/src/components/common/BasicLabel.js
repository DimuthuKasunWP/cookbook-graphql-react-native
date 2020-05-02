import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontWeight: '700',
  },
});

function BasicLabel({ label }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

export default BasicLabel;
