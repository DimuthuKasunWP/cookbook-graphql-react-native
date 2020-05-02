import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  buttonWrapper: {
    marginHorizontal: 15,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonLabel: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10,
  },
});

class BasicButton extends Component {
  render() {
    const { backgroundColor, borderColor, color, onPress, text } = this.props;

    return (
      <TouchableOpacity
        style={[styles.buttonWrapper, { backgroundColor, borderColor }]}
        onPress={onPress}
      >
        <Text style={[styles.buttonLabel, { color }]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default BasicButton;
