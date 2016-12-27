import React, {
    Component,
    PropTypes,
} from 'react';
import { Container, Content, Card, CardItem, Text, CheckBox } from 'native-base';
import { Actions } from 'react-native-router-flux'

import styles  from '../shared/styles';
export default class InpectionsItem extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Card style={styles.card}>
                        <CardItem button onPress={()=>Actions.inspectionsItem()} style={styles.cardItem}>
                            <Text>
                                Part: 0063168-005
                                Pending

                                Casting manifold, M1D Turbine
                            </Text>
                            <CheckBox checked={false} />
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem button onPress={()=>Actions.questionnaire()} style={styles.cardItem}>
                            <Text>
                                Part: 0063168-005
                                Pending

                                Casting manifold, M1D Turbine
                            </Text>
                            <CheckBox checked={true} />
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
