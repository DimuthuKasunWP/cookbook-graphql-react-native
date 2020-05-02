import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import NewRecipeScreen from '../screens/NewRecipeScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';

export const RecipeStack = StackNavigator({
  RecipeList: {
    screen: RecipeListScreen,
    navigationOptions: {
      title: 'Recipe List',
    },
  },
  RecipeDetail: {
    screen: RecipeDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title.toUpperCase()}`,
    }),
  },
});

export const CookbookTab = TabNavigator({
  RecipeList: {
    screen: RecipeStack,
    navigationOptions: {
      tabBarLabel: 'Recipe List',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  NewRecipe: {
    screen: NewRecipeScreen,
    navigationOptions: {
      tabBarLabel: 'New Recipe',
      tabBarIcon: ({ tintColor }) => <Icon name="note-add" size={35} color={tintColor} />,
    },
  },
});
