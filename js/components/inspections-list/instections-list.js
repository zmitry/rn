import React, {
    Component,
    PropTypes,
} from 'react';
import { Container, Content, Card, CardItem, Text } from 'native-base';
import styles  from './styles';
import { Actions } from 'react-native-router-flux'

export default class InpectionsList extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Card style={styles.card} >
                        <CardItem button onPress={()=>{Actions.inspectionsItem()}}>
                            <Text>
                                Inspections:22.09.15
                            </Text>
                        </CardItem>
                    </Card>
                    <Card style={styles.card} >
                        <CardItem button onPress={()=>{Actions.inspectionsItem()}}>
                            <Text>
                                Inspections:22.09.15
                            </Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
