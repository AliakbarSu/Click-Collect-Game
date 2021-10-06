import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'

class DefaultInput extends Component {
    render () {
        return (
            <View style={[styles.inputWrapper, this.props.style]}>
                <Text style={styles.inputLabel}>{this.props.label}</Text>
                <View style={styles.input}>
                    <TextInput 
                        {...this.props} 
                        style={styles.inputInput} ></TextInput>
                </View>
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
        padding: 5,
        paddingLeft: 10,
        fontSize: 15,
        color: '#A8A8A8'
    },
    input: {
        width: '100%',
        borderWidth: 2,
        borderColor: '#00DFDF',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputInput: {
        width: '100%',
        height: 40,
        paddingLeft: 20,
        color: '#A8A8A8'
    }
});

export default DefaultInput;