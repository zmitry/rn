import React, {
    Component,
    PropTypes,
} from 'react';
import { Container, Content, Tabs , Header, InputGroup, Input, Icon, Button, Badge, ListItem, List} from 'native-base';
import { Text } from 'native-base';
import styles  from '../shared/styles';




export default class SideList extends Component {
    renderList(){

      return  this.props.sideList.map(el=><ListItem iconRight>
                <Icon name={el.icon} style={{ color: '#007418' }} />
                <Text>{el.text}</Text>
            </ListItem>
        );
    }


    render() {
        return (
            <List>
                {this.renderList()}
            </List>
        );
    }
}
