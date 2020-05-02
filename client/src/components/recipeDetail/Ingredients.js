import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import EmptyLabel from '../common/EmptyLabel';
import IngredientList from '../common/IngredientList';

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#ededed',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#bdbdbd',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '700',
  },
});

class Ingredients extends Component {
  renderIngredients = () => {
    const { ingredients } = this.props;

    if (!ingredients.length) {
      return <EmptyLabel label="Recipe does not have any ingredients" />;
    }

    return <IngredientList ingredients={ingredients} />;
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.label}>Ingredients</Text>
        {this.renderIngredients()}
      </View>
    );
  }
}

export default Ingredients;
