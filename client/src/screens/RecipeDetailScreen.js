import React, { Component } from 'react';

import RecipeDetailContainer from '../containers/RecipeDetail';

class RecipeDetailScreen extends Component {
  render() {
    const { navigation } = this.props;

    return <RecipeDetailContainer navigation={navigation} />;
  }
}

export default RecipeDetailScreen;
