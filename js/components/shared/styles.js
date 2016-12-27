const React = require('react-native');

const {StyleSheet, Dimensions} = React;
module.exports = StyleSheet.create({
    info:{
        width:500
    },
    container: {
        backgroundColor: '#f2f2f2',
        paddingTop: 55,
        flex: 1,
        alignItems: 'center',
    },
    card: {
        width: 300
    },
    marginHeader:{
        marginTop:55
    },
    cardItem: {flex: 1, flexDirection: 'row', alignItems: 'center'}
});
