import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers';
import { typeDefs } from './schema';

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
