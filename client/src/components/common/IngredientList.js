import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  ingredientWrapper: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  ingredientLabel: {
    marginLeft: 5,
  },
});

class IngredientList extends Component {
  render() {
    const { ingredients } = this.props;

    if (!ingredients) {
      return null;
    }

    return (
      <View>
        {ingredients.map((ingredient) => {
          const { amount, amountUnit, name } = ingredient || {};

          const customizedUnit = amountUnit && amountUnit.toLowerCase();
          const customizedID = `${name}${amount}${amountUnit}`;

          return (
            <View style={styles.ingredientWrapper} key={customizedID}>
              <Text>{`\u2022 ${amount}`}</Text>
              <Text>{customizedUnit}</Text>
              <Text style={styles.ingredientLabel}>{name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

export default IngredientList;
