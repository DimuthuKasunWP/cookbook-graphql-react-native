import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' });
// TODO: if you want to run it on Android recplace localhost with your local IP address

networkInterface.use([{
  applyMiddleware(req, next) {
    setTimeout(next, 500);
  },
}]);

const apolloClient = new ApolloClient({
  networkInterface,
});

export default apolloClient;
