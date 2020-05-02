import React, { Component } from 'react';

import RecipeListContainer from '../containers/RecipeList';

class RecipeListScreen extends Component {
  render() {
    const { navigation } = this.props;

    return <RecipeListContainer navigation={navigation} />;
  }
}

export default RecipeListScreen;
