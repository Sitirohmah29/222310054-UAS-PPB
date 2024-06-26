import React, { Component } from 'react';
class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <Text style={styles.text}>Lupa.Inc</Text>
                    <Header style={styles.header}/>
                </View>
        );
    }
}

const styles = StyleSheet.create({

    header: {
        marginBottom: 20,
        width: '100%',
        paddingHorizontal: 20, // Add horizontal padding if needed
    },
    
});

export default Index;

