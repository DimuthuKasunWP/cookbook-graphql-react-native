import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
  },
});

function ErrorLabel({ text }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{text}</Text>
    </View>
  );
}

export default ErrorLabel;
