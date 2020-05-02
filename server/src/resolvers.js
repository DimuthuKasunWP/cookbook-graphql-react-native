import { db } from './conectors';
import { recipeModel } from './model';

export const resolvers = {
  Query: {
    recipes: () => {
      return db.model('recipe').find().then(recipes =>
        recipes.map(recipe => recipe)
      );
    },
    recipe: (_, { id }) => {
      return db.model('recipe').findOne({ "_id": id }).then(recipe => recipe);
    },
  },

  Mutation: {
    addRecipe: (root, args) => {
      const { input } = args || {};
      const recipe = new recipeModel({ ...input });

      recipe.save().then(newRecipe => {
        console.log('saved', newRecipe)
      }).catch((err) => {
        console.log('err', err)
      });

      return recipe;
    },
  },
};
