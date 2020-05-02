const typeDefs = `
  type Query {
   recipes: [Recipe]
   recipe(id: String!): Recipe
  }

  type Recipe {
    _id: ID!
    title: String
    preparationTime: Int
    servingCount: Int
    sideDish: String
    directions: String
    ingredients: [Ingredient]
  }

  type Ingredient {
    _id: ID!
    name: String
    amount: Int
    amountUnit: String
  }

  input RecipeInput {
    title: String
    preparationTime: Int
    servingCount: Int
    sideDish: String
    directions: String
    ingredients: [IngredientInput]
  }

  input IngredientInput {
    name: String
    amount: Int
    amountUnit: String
  }

  type Mutation {
    addRecipe(input: RecipeInput): Recipe
  }
`;

export { typeDefs };
