import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});

function LoadingIndicator() {
  const isAnimating = true;

  return (
    <ActivityIndicator
      animating={isAnimating}
      style={styles.indicator}
      size="small"
    />
  );
}

export default LoadingIndicator;
