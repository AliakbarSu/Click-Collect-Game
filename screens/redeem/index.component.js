import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux';
import DefaultButton from '../../components/button/index.component'
import {Redeem} from '../../store/actions/redeem'

class RedeemScreen extends Component {
    
    state = {
        input: {
            value: ''
        }
    }
    

    onInputHandler = (value) => {
        this.setState(prevState => {
            return {
                ...prevState,
                input: {
                    value: value
                }
            }
        })
    }

    onRedeemHandler = () => {
        if((this.props.profile.points - this.state.input.value) <= 0) {
            return alert('You don\'t have enough points to redeem');
        }
        this.props.redeem(this.state.input.value)
    }

    render() {
        return (
            <View style={styles.container}>
               <View style={styles.wrapper}>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.infoText}>
                            Please note that it can take up to two working 
                            days for the amount to be deposit to your account
                        </Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputLabel}>Amount to Redeem</Text>
                        <View style={styles.input}>
                            <TextInput value={this.state.input.value} style={styles.inputInput} onChangeText={this.onInputHandler} placeholder="e.g. 54"></TextInput>
                        </View>
                    </View>
                    <View style={styles.buttonWrapper}>
                       <DefaultButton onPress={this.onRedeemHandler} style={styles.button} textStyle={{color: '#FFFFFF'}}>Redeem</DefaultButton>
                    </View>
               </View>
            </View>
        )
    }
    
}


const mapStateToProps = state => {
    return {
        profile: state.profile
    }
}

const mapActionsToProps = dispatch => {
    return {
        redeem: (numOfPoints) => dispatch(Redeem(numOfPoints))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(RedeemScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    wrapper: {
        paddingTop: 40,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    infoWrapper: {
        width: '80%',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#E1E1E1',
        borderRadius: 5
    },
    infoText: {
        fontSize: 17,
        color: '#868686',
        lineHeight: 25
    },
    inputWrapper: {
        width: '80%',
        paddingTop: 40,
        paddingBottom: 40,
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
    },
    buttonWrapper: {
        paddingTop: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        paddingTop: 20,
        paddingBottom: 20,
        width: '75%',
        borderRadius: 10,
        backgroundColor: '#FF821A',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF'
    },
    buttonText: {
        color: '#FFFFFF',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20
    }
  });
  
