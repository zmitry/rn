import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { TextInput, View, TouchableHighlight, Text, Alert } from 'react-native';
import { Container, Content, InputGroup, Input, Icon } from 'native-base';
import { connect } from 'react-redux';


class TextField extends React.Component {
  render() {
    const { input } = this.props;

    return (
      <InputGroup iconRight error>
        <Icon name="ios-close-circle" />
        <Input placeholder="Textbox with Error Input" onChangeText={value => input.onChange(value)} underlineColorAndroid="transparent" selectTextOnFocus {...this.props} />
      </InputGroup>
    );
  }
}


class LoginForm extends React.Component {


  onSubmit(email) {
    console.log('value', email);
    Alert.alert(`<e></e>mail: ${JSON.stringify(email)} `);
  }

  render() {
      const {error, handleSubmit, pristine, reset, submitting} = this.props;
      return (
      <View>
        <Field
          name="email"
          component={TextField}
          placeholder="Email"
        />
        <Field
          name="password"
          component={TextField}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight onPress={handleSubmit(pr => this.onSubmit(pr))} >
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number';
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }
  return errors;
};

const warn = (values) => {
  const warnings = {};
  warnings.email = 'Hmm, you seem a bit young...';
  return warnings;
};


export default reduxForm({
  form: 'loginForm',
})(LoginForm);

// const selector = formValueSelector('loginForm');

