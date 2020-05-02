import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import ErrorLabel from '../components/common/ErrorLabel';
import LoadingIndicator from '../components/common/LoadingIndicator';
import RecipeDetail from '../components/recipeDetail/RecipeDetail';

class RecipeDetailContainer extends Component {
  render() {
    const { data } = this.props || {};
    const { error, loading, recipe } = data || {};

    if (error) {
      return <ErrorLabel text="An unexpected error occurred" />;
    }

    if (loading) {
      return <LoadingIndicator />;
    }

    if (!recipe) {
      return <ErrorLabel text="Recipe does not have a detail" />;
    }

    return (
      <RecipeDetail recipeData={recipe} />
    );
  }
}

const RecipeDetailQuery = gql`
  query RecipeDetailQuery($recipeID: String!) {
    recipe(id: $recipeID) {
      title
      preparationTime
      directions
      servingCount
      ingredients {
        _id
        name
        amountUnit
        amount
      }
    }
  }
`;

const RecipeDetailWithData = graphql(RecipeDetailQuery, {
  options: props => ({
    variables: { recipeID: props.navigation.state.params._id },
  }),
})(RecipeDetailContainer);

export default RecipeDetailWithData;
