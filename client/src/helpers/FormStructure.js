import t from 'tcomb-form-native';

const PositiveNumber = t.refinement(t.Number, n => n > 0);

const Form = t.form.Form;

export const ingredient = t.struct({
  name: t.String,
  amount: PositiveNumber,
  amountUnit: t.maybe(t.String),
});

export const recipe = t.struct({
  title: t.String,
  preparationTime: PositiveNumber,
  servingCount: PositiveNumber,
  directions: t.maybe(t.String),
});

const textInputStyle = {
  ...Form.stylesheet,
  textbox: {
    ...Form.stylesheet.textbox,
    normal: {
      ...Form.stylesheet.textbox.normal,
      backgroundColor: '#ffffff',
    },
    error: {
      ...Form.stylesheet.textbox.error,
      backgroundColor: '#ffffff',
    },
  },
};

const textAreaStyle = {
  ...Form.stylesheet,
  textbox: {
    ...Form.stylesheet.textbox,
    normal: {
      ...Form.stylesheet.textbox.normal,
      height: 200,
    },
    error: {
      ...Form.stylesheet.textbox.error,
      height: 200,
    },
  },
};

export const ingredientOptions = {
  fields: {
    name: {
      error: 'Name can\'t be empty!',
      stylesheet: textInputStyle,
    },
    amount: {
      error: 'Amount needs to be positive number!',
      stylesheet: textInputStyle,
    },
    amountUnit: {
      stylesheet: textInputStyle,
    },
  },
};

export const options = {
  fields: {
    title: {
      error: 'Title can\'t be empty!',
    },
    preparationTime: {
      error: 'Preparation time needs to be positive number!',
      help: 'In minutes',
    },
    servingCount: {
      error: 'Serving count needs to be positive number!',
    },
    directions: {
      multiline: true,
      help: 'Markdown: *) divides lines',
      stylesheet: textAreaStyle,
    },
  },
};
