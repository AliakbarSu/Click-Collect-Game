import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'

class InputError extends Component {
    render () {
        return (
            <View style={[styles.inputWrapper, this.props.style]}>
                <Text style={styles.inputLabel}>{this.props.error}</Text>
            </View>
        )
    }
} 


const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    inputLabel: {
        padding: 3,
        paddingLeft: 10,
        fontSize: 13,
        color: 'red'
    }
});

export default InputError;