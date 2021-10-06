import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native';




class Input extends Component {
    
    // static propTypes = {
    //     containerStyle: PropTypes.style,
    //     style: PropTypes.style,
    //     autoFocus: PropTypes.bool,
    //     editbale: PropTypes.bool,
    //     textColor: PropTypes.string,
    //     onChangeText: PropTypes.func,
    //     value: PropTypes.string,
    //     placeholder: PropTypes.string,
    // }

    state = {
        autoFocus: false
    }


    onChangeHandler = (value) => {
        this.setState(prevState => {
            return {
                autoFocus: true
            }
        }, () => {
            this.props.onChangeText(value)
        })
    }
    

    render() {

        return (
        
            <View style={[styles.inputWrapper, this.props.style]}>
                <Text style={styles.inputLabel}>{this.props.label}</Text>
                <View style={[styles.input, this.props.invalid ? styles.errorBorder: null]}>
                    <TextInput 
                        {...this.props} 
                        style={styles.inputInput} ></TextInput>
                </View>
                {this.props.invalid && 
                    <View style={styles.errorLabelWrapper}>
                        <Text style={styles.errorLabel}>{this.props.message}</Text>
                    </View>
                }
            </View>
        )
    }
}



export default Input;

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        borderColor: '#D1CCCC',
        borderWidth: 2,
        padding: 12
    },
    errorBorder: {
        borderColor: '#F84C4C'
    },
    labelWrapper: {
        backgroundColor: '#F5FCFF',
        paddingBottom: 0,
        marginBottom: 5,
        marginTop: -22,
        width: 'auto',
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    labelPlaceholder: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 0,
        color: '#A1A1A1',
        width: 'auto'
    },
    errorLabelWrapper: {
        paddingTop: 3,
        paddingLeft: 7
    },
    errorLabel: {
        color: '#F84C4C'
    },
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


  
