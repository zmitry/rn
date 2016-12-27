import React, {
    Component,
    PropTypes,
} from 'react';
import { Container, Content, Tabs , Header, InputGroup, Input, Icon, Button, Badge, ListItem, List} from 'native-base';
import { Text, Radio, Card,CardItem } from 'native-base';
import { Dimensions } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Form from '../form/form';
import SideList from './side-list';
import styles  from '../shared/styles';
const { height,width} =Dimensions.get("window");

const sideList={
    1:[{icon:'md-checkmark',text:'Airplane Mode'},{icon:'md-checkmark',text:'Airplane Mode'},{icon:'md-checkmark',text:'Airplane Mode'}],
2:[{icon:'md-checkmark',text:'Airplane Mode'},{icon:'md-checkmark',text:'Airplane Mode'},{icon:'md-checkmark',text:'Airplane Mode'}],
3:[{icon:'md-checkmark',text:'Airplane Mode'},{icon:'md-checkmark',text:'Airplane Mode'},{icon:'md-checkmark',text:'Airplane Mode'}]
}

export default class QuestionnaireForm extends Component {
    render() {
        return (
                <Grid style={{height:height-55}} >
                    <Col size={1} style={{backgroundColor:'#f6f6f6'}}>
                        <List>
                            <SideList sideList={sideList[1]} />
                        </List>
                    </Col>
                    <Col size={3}>
                        <Form></Form>
                    </Col>
                </Grid>
    );
    }
}
