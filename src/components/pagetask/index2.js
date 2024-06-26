import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Content from './components/create/Content';



class Index2 extends Component {
    render() {
        return (
            <View style={styles.content}>
                <Content/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 100,
    }
})

export default Index2;
