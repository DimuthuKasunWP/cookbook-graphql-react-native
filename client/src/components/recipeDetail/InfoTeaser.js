import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#bdbdbd',
    flexDirection: 'row',
  },
  label: {
    color: 'gray',
    flex: 1,
    fontSize: 15,
    paddingVertical: 5,
    textAlign: 'center',
  },
});

class InfoTeaser extends Component {
  render() {
    const { preparationTime, servingCount } = this.props;

    return (
      <View style={styles.wrapper}>
        <Text style={styles.label}>{preparationTime || 0} min</Text>
        <Text style={styles.label}>{servingCount || 0} servings</Text>
      </View>
    );
  }
}

export default InfoTeaser;
