const React = require('react-native');

const {StyleSheet, Dimensions} = React;

const deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FBFAFA',
    },
    shadow: {
        flex: 1,
        width: null,
        height: null,
    },
    bg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
    },
    content:{
        backgroundColor:'#ebeef0',
        flex:1,
        alignItems:'center'     //<-----
    },
    input: {
        marginBottom: 20,
    },
    btn: {
        marginTop: 20,
        alignSelf: 'center',
    },
});
