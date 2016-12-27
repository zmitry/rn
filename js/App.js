
import React, { Component } from 'react';
import CodePush from 'react-native-code-push';
import {Scene, Router} from 'react-native-router-flux';
import Login from './components/login';
import InspectionsList from './components/inspections-list/instections-list';
import InspectionsItem from  './components/ispections-item/inspections-item';
import Questionnaire from './components/questionnaire-form/questionnaire';


export default class App extends React.Component {
    componentDidMount() {
        CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE },
            (status) => {
                switch (status) {
                    case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                        this.setState({ showDownloadingModal: true });
                        this._modal.open();
                        break;
                    case CodePush.SyncStatus.INSTALLING_UPDATE:
                        this.setState({ showInstalling: true });
                        break;
                    case CodePush.SyncStatus.UPDATE_INSTALLED:
                        this._modal.close();
                        this.setState({ showDownloadingModal: false });
                        break;
                    default:
                        break;
                }
            },
            ({ receivedBytes, totalBytes }) => {
                this.setState({ downloadProgress: (receivedBytes / totalBytes) * 100 });
            }
        );
    }
    render() {
        return <Router>
            <Scene key="root">
                <Scene key="inspectionsList" component={InspectionsList} title="Inspections"/>
                <Scene key="questionnaire" component={Questionnaire} title="Questionnaire"/>
                <Scene key="inspectionsItem" component={InspectionsItem} title="Inspections Item"/>
                <Scene key="login" component={Login} title="Login"/>
            </Scene>
        </Router>
    }
}