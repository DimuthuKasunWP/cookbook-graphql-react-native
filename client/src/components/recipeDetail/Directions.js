import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import EmptyLabel from '../common/EmptyLabel';

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '700',
  },
  direction: {
    marginBottom: 5,
  },
});

class Directions extends Component {
  renderDirections = () => {
    const { directions } = this.props;

    if (!directions) {
      return <EmptyLabel label="Recipe does not have any directions" />;
    }

    return directions.split('*)').map((direction, index) => {
      return index
        ? <Text key={index} style={styles.direction}>{index} {direction}</Text>
        : null;
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.label}>Directions</Text>
        {this.renderDirections()}
      </View>
    );
  }
}

export default Directions;
