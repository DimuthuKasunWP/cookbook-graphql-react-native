import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  cellWrapper: {
    alignItems: 'center',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
  },
});

class RecipeCell extends Component {
  onCellPress = () => {
    const { onPress, recipeData } = this.props;

    onPress({ recipeData });
  }

  render() {
    const { recipeData } = this.props;
    const { title } = recipeData || {};

    return (
      <TouchableHighlight onPress={this.onCellPress}>
        <View style={styles.cellWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default RecipeCell;
