
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
import { View } from 'react-native';
import { setUser } from '../../actions/user';
import styles from './styles';
const Item = Picker.Item;
const {
  replaceAt,
} = actions;

const background = require('../../../images/shadow.png');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: [],
            },
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value,
        });
    }

  render() {
    return (
        <Container style={styles.content}>
            <Content>
                <View style={{width:400,marginTop:200}}>
                <List >
                    <ListItem>
                        <InputGroup>
                            <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                            <Input placeholder="EMAIL" />
                        </InputGroup>
                    </ListItem>
                    <ListItem>
                        <InputGroup>
                            <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                            <Input placeholder="PASSWORD" secureTextEntry />
                        </InputGroup>
                    </ListItem>
                </List>
                <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                    Sign Up
                </Button>
                </View>
            </Content>
        </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
    setUser: name => dispatch(setUser(name)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(Login);
