import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import apolloClient from '../helpers/connection';
import { CookbookTab } from '../navigation/router';

class AppScreen extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <CookbookTab />
      </ApolloProvider>
    );
  }
}

export default AppScreen;
