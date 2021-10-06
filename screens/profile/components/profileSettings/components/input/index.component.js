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

        const textInput = <TextInput style={styles.textInput} autoFocus={this.state.autoFocus} value={this.props.value} onChangeText={this.onChangeHandler} placeholder={this.props.placeholder}/>
        const withValue = (
            <React.Fragment>
                <View style={styles.labelWrapper}>
                    <Text style={styles.labelPlaceholder}>{this.props.placeholder}</Text>
                </View>
                <View style={styles.textInputWrapper}>
                    {textInput}
                </View>
            </React.Fragment>
        )

        const withoutValue = (
            <View>
                {textInput}
            </View>
        )

        return (
            <View style={styles.container}>
                <View style={[styles.wrapper, this.props.value.length ? null : styles.bottomBorderOnly, this.props.invalid ? styles.errorBorder: null]}>
                    {this.props.value.length ? 
                        withValue: 
                        withoutValue
                    }
                    
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
    container: {
        padding: 12
    },
    textInputWrapper: {
        padding: 2
    }, 
    textInput: {

    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        borderColor: '#D1CCCC',
        borderWidth: 2,
        padding: 12
    },
    bottomBorderOnly: {
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0
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
        paddingTop: 3
    },
    errorLabel: {
        color: '#F84C4C'
    }
});


  
