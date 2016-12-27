import React, {
    Component,
    PropTypes,
} from 'react';
import { Container, Content, Tabs , Header, InputGroup, Input, Icon, Button} from 'native-base';
import {  List, ListItem, Text, Radio, Card,CardItem } from 'native-base';
import  QuestionnaireForm  from './questionnaire-form';
import styles  from '../shared/styles';

const TABS=[
    'Document Check','Product Inspection','Features Checked'
]
export default class Questionnaire extends Component {

    renderInfo(){
        const label='Info';
        return   <Container tabLabel={label} style={[styles.container]}>
            <Content style={{width:500}}>
                <Card>
                    <CardItem>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Aliquid asperiores aspernatur est exercitationem magni minus
                             quibusdam quisquam similique suscipit tempore!
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Aliquid asperiores aspernatur est exercitationem magni minus
                             quibusdam quisquam similique suscipit tempore!
                        </Text>
                    </CardItem>
                    <CardItem >
                        <Button block success iconRight>     Next
                            <Icon name='ios-arrow-forward' /> </Button>
                    </CardItem>
                </Card>
            </Content>
        </Container>;
    }

    renderTabs(){
        let tabs=TABS.map((el,i)=>(
            <Container tabLabel={el}>
                <Content>
                    <QuestionnaireForm>
                    </QuestionnaireForm>
                </Content>
            </Container>
        ));
        return [this.renderInfo()].concat(tabs);
    }


    render() {
        return (
            <Container style={{marginTop:55}}>
                <Content>
                    <Tabs>
                        {this.renderTabs()}
                    </Tabs>
                </Content>
            </Container>
        );
    }
}
