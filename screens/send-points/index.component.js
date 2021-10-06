import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux';
import { SendPoints } from '../../store/actions/points';

class SendPointsScreen extends Component {

    state = {
        inputs: {
            reciep: {
                value: ''
            },
            points: {
                value: ''
            }
        }
    }


    onInputHandler = (field, value) => {
        this.setState(prevState => {
            return {
                ...prevState,
                inputs: {
                    ...prevState.inputs,
                    [field]: {
                        value: value
                    }
                }
            }
        })
    }

    onSendHandler = () => {
        this.props.sendPoints(this.state.inputs.reciep.value, this.state.inputs.points.value)
    }

    render() {
        return (
            <View style={styles.container}>
               <View style={styles.wrapper}>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputLabel}>Reciepitent’s username</Text>
                        <View style={styles.input}>
                            <TextInput 
                                value={this.state.inputs.reciep.value} 
                                style={styles.inputInput} 
                                onChangeText={(value) => this.onInputHandler('reciep', value)} 
                                placeholder="e.g. ali.su"></TextInput>
                        </View>
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputLabel}>Amount to Send</Text>
                        <View style={styles.input}>
                            <TextInput 
                                value={this.state.inputs.points.value} 
                                style={styles.inputInput} 
                                onChangeText={(value) => this.onInputHandler('points', value)} 
                                placeholder="e.g. 54"></TextInput>
                        </View>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={this.onSendHandler}>
                                <Text style={styles.buttonText}>Send!</Text>
                            </TouchableOpacity>
                        </View>
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
        sendPoints: (username, points) => dispatch(SendPoints(username, points))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(SendPointsScreen);

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    },
    wrapper: {
        paddingTop: 70,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    inputWrapper: {
        width: '80%',
        paddingTop: 20,
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
        width: '60%',
        borderRadius: 10,
        backgroundColor: '#FF821A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20
    }
  });


  
