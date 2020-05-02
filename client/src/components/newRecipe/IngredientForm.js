import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import t from 'tcomb-form-native';

import BasicButton from '../common/BasicButton';
import BasicLabel from '../common/BasicLabel';
import IngredientList from '../common/IngredientList';
import { ingredient, ingredientOptions } from '../../helpers/FormStructure';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    marginBottom: 15,
    backgroundColor: '#ededed',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#bdbdbd',
  },
  formWrapper: {
    paddingHorizontal: 15,
  },
  ingredientList: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});

const Form = t.form.Form;

class IngredientForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredientValue: null,
    };
  }

  onIngredientChange = (ingredientValue) => {
    this.setState({ ingredientValue });
  }

  clearIngredientForm = () => {
    this.setState({ ingredientValue: null });
  }

  onPress = () => {
    const { ingredientForm } = this.refs;
    const { onIngredientPress } = this.props;

    const validate = ingredientForm.validate();

    if (validate.errors.length === 0) {
      const ingredientValue = ingredientForm.getValue();

      onIngredientPress(ingredientValue);
      this.clearIngredientForm();
    }
  }

  render() {
    const { ingredientValue } = this.state;
    const { ingredients } = this.props;

    return (
      <View style={styles.wrapper}>
        <BasicLabel label="Ingredients" />
        <View style={styles.ingredientList}>
          <IngredientList ingredients={ingredients} />
        </View>
        <View style={styles.formWrapper}>
          <Form
            ref="ingredientForm"
            type={ingredient}
            options={ingredientOptions}
            value={ingredientValue}
            onChange={this.onIngredientChange}
          />
        </View>
        <BasicButton
          backgroundColor={'#ffffff'}
          text={'Add Ingredient'}
          onPress={this.onPress}
        />
      </View>
    );
  }
}

export default IngredientForm;
