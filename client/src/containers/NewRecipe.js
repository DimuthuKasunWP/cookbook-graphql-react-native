import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import t from 'tcomb-form-native';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import BasicLabel from '../components/common/BasicLabel';
import BasicButton from '../components/common/BasicButton';
import IngredientForm from '../components/newRecipe/IngredientForm';
import StatusBar from '../components/common/StatusBar';
import { RecipeListQuery } from './RecipeList';
import { options, recipe } from '../helpers/FormStructure';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
    marginBottom: 15,
  },
  formWrapper: {
    marginHorizontal: 15,
  },
});

const Form = t.form.Form;

class NewRecipeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      value: null,
      ingredients: [],
    };
  }

  onChange = (value) => {
    this.setState({ value });
  }

  clearForm = () => {
    this.setState({
      value: null,
      ingredients: [],
    });
  }

  setVisibility = (visibility) => {
    this.setState({ visible: visibility });
  }

  onIngredientPress = (ingredient) => {
    const { ingredients } = this.state;

    this.setState({ ingredients: [...ingredients, ingredient] });
  }

  onPress = () => {
    const validate = this.refs.recipeForm.validate();

    if (validate.errors.length === 0) {
      this.setVisibility(true);
      setTimeout(() => { this.setVisibility(false); }, 1000);
      const value = this.refs.recipeForm.getValue();

      const {
        title,
        preparationTime,
        servingCount,
        directions,
      } = value || {};

      const { ingredients } = this.state;

      this.props.mutate({
        variables: {
          recipe: {
            title,
            preparationTime,
            servingCount,
            directions,
            ingredients,
          },
        },
        refetchQueries: [{ query: RecipeListQuery }],
      });

      this.clearForm();
    }
  }

  render() {
    const { ingredients } = this.state;

    return (
      <View style={styles.wrapper}>
        <StatusBar
          visible={this.state.visible}
          text="Your recipe has been saved!"
        />
        <ScrollView>
          <BasicLabel label="Recipe details" />
          <View style={styles.formWrapper}>
            <Form
              ref="recipeForm"
              type={recipe}
              options={options}
              value={this.state.value}
              onChange={this.onChange}
            />
          </View>
          <IngredientForm
            ingredients={ingredients}
            onIngredientPress={this.onIngredientPress}
          />
          <BasicButton
            backgroundColor={'#fff'}
            borderColor={'#007aff'}
            color={'#007aff'}
            text={'Save Recipe'}
            onPress={this.onPress}
          />
        </ScrollView>
      </View>
    );
  }
}

const NewRecipeMutation = gql`
  mutation addRecipe($recipe: RecipeInput!) {
    addRecipe(input: $recipe) {
      title
    }
  }
`;

const NewRecipeWithMutation = graphql(NewRecipeMutation)(NewRecipeContainer);

export default NewRecipeWithMutation;
