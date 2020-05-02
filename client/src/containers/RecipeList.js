import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import ErrorLabel from '../components/common/ErrorLabel';
import LoadingIndicator from '../components/common/LoadingIndicator';
import RecipeCell from '../components/recipeList/RecipeCell';

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

class RecipeListContainer extends Component {
  keyExtractor = item => item._id;

  onRecipePress = ({ recipeData }) => {
    this.props.navigation.navigate('RecipeDetail', { ...recipeData });
  };

  renderRecipeCell = ({ item }) =>
    <RecipeCell recipeData={item} onPress={this.onRecipePress} />;


  render() {
    const { data } = this.props || {};
    const { error, loading, recipes } = data || {};

    if (error) {
      return <ErrorLabel text="An unexpected error occurred" />;
    }

    if (loading) {
      return <LoadingIndicator />;
    }

    if (!recipes) {
      return <ErrorLabel text="Recipe list is empty" />;
    }

    return (
      <View style={styles.listWrapper}>
        <FlatList
          data={recipes}
          renderItem={this.renderRecipeCell}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

export const RecipeListQuery = gql`
  query RecipeListQuery {
    recipes {
      _id
      title
    }
  }
`;

const RecipeListWithData = graphql(RecipeListQuery)(RecipeListContainer);

export default RecipeListWithData;
