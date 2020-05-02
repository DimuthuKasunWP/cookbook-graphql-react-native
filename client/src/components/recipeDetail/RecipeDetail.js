import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import BasicLabel from '../common/BasicLabel';
import Directions from './Directions';
import InfoTeaser from './InfoTeaser';
import Ingredients from './Ingredients';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

class RecipeDetail extends Component {
  render() {
    const {
      title,
      ingredients,
      preparationTime,
      directions,
      servingCount,
    } = this.props.recipeData;

    return (
      <ScrollView style={styles.wrapper}>
        <BasicLabel label={title} />
        <InfoTeaser
          preparationTime={preparationTime}
          servingCount={servingCount}
        />
        <Ingredients ingredients={ingredients} />
        <Directions directions={directions} />
      </ScrollView>
    );
  }
}

export default RecipeDetail;
