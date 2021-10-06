import React, {Component, useState} from 'react';
import {View, Text, Image, StyleSheet, Button, ImageBackground, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native'
import { connect } from 'react-redux';
import { SignIn, SignUp } from '../../store/actions/auth';
import ValidationComponent from 'react-native-form-validator';
import InputError from '../../components/inputsError/index.component';
import { useDispatch, useSelect } from 'react-redux'

const LoginScreen = props => {

    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState(true)

    const onUsernameHandler = value => {
        setUsername(value)
    }
    const onPasswordHandler = value => {
        setPassword(value)
    }
    const onEmailHandler = value => {
        setEmail(value)
    }
    const toggleAuthModeHandle = () => {
        setLogin(!login)
    }

    const onLoginHandler = async () => {
        const authData = {
            username: email,
            password: password
        }
        if(!login) {
            setLogin(true)
            return
        }
        try {
            await dispatch(SignIn(authData))
        }catch(err) {
            Alert.alert("Error occured", "something went wrong please try again.", ["okay"])
        }
    }

    const onSignupHandler = async () => {
        const data = {
            username: username,
            email: email,
            password: password
        }
        if(login) {
            setLogin(false)
            return
        }
    
        try {
            await dispatch(SignUp(data))
            props.navigation.navigate('VerifyEmail')
        }catch(err) {
            Alert.alert("Error occured", "something went wrong please try again.", ["okay"])
        }
        
    }

    const onFacebookLoginHandler = () => {}

        
        return (
            <View style={styles.container}>
                <ImageBackground 
                    style={styles.imageBackground}
                    source={{uri: 'https://www.goodfreephotos.com/albums/other-photos/backgrounds/background-pattern-of-orange-mosaic.jpg'}}>
                    <ScrollView style={styles.wrapper}>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Click & Collect</Text>
                        </View>
                        <View style={styles.inputsWrapper}>
                            {!login && <View style={styles.inputWrapper}>
                                <TextInput
                                    onChangeText={onUsernameHandler} 
                                    style={styles.textInput} 
                                    placeholder="Username"
                                    value={username}/>
                            </View>}
                            {/* <View style={styles.errorWrapper}>
                                {this.isFieldInError('username') && <InputError key={this.getErrorsInField('username')[0]} error={this.getErrorsInField('username')[0]}/> }
                            </View> */}
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    onChangeText={onEmailHandler} 
                                    style={styles.textInput} 
                                    placeholder="Email Address"
                                    value={email}/>
                            </View>
                            {/* <View style={styles.errorWrapper}>
                                {this.isFieldInError('email') &&  <InputError key={this.getErrorsInField('email')[0]} error={this.getErrorsInField('email')[0]}/> }
                            </View> */}
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    onChangeText={onPasswordHandler} 
                                    style={styles.textInput} 
                                    placeholder="Password"
                                    value={password}/>
                            </View>
                            {/* <View style={styles.errorWrapper}>
                                {this.isFieldInError('password') && <InputError key={this.getErrorsInField('password')[0]} error={this.getErrorsInField('password')[0]} /> }
                            </View> */}
                        </View>
                        <View style={styles.buttons}>
                            <View style={styles.buttonWrapper}>
                                <View style={styles.buttonComponent}>
                                    <TouchableOpacity onPress={onLoginHandler}>
                                        <Text style={styles.buttonText}>Login</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.buttonWrapper}>
                                <View style={[styles.buttonComponent, styles.buttonColorSignup]}>
                                    <TouchableOpacity onPress={onSignupHandler}>
                                        <Text style={[styles.buttonText, styles.buttonTextColorSignup]}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.buttonWrapper}>
                                <View style={[styles.buttonComponent, styles.buttonColorFacebook]}>
                                    <TouchableOpacity onPress={onFacebookLoginHandler}>
                                        <Text style={styles.buttonText}>Facebook</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
            
        )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        auth: state.auth
    }
}

const mapActionsToProps = dispatch => {
    return {
        login: (authData) => dispatch(SignIn(authData)),
        // autoLogin: () => dispatch(autoLogin())
        autoLogin: () => null,
        signup: (data) => dispatch(SignUp(data))
    }
}



export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    wrapper: {
        height: '80%'
    },
    titleWrapper: {
        alignItems: 'center',
        padding: 20,
        marginTop: 50,
        marginBottom: 20
    },
    titleText: {
        textAlign: 'center',
        fontSize: 40,
        color: '#FFFFFF'
    },
    inputsWrapper: {
        width: '100%',
        alignItems: 'center'
    },
    inputWrapper: {
        width: '80%',
        borderRadius: 50,
        backgroundColor: '#FF7400',
        marginTop: 20
    },
    errorWrapper: {
        width: '80%'
    },
    textInput: {
        width: '100%',
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 12,
        paddingLeft: 12,
        color: '#FFFFFF'
    },
    buttonWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
    },
    buttonComponent: {
        padding: 20,
        borderRadius: 50,
        width: '80%',
        backgroundColor: '#FB7200',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonColorFacebook: {
        backgroundColor: '#3B5998'
    },
    buttonColorSignup: {
        backgroundColor: '#FFFFFF'
    },
    buttonTextColorSignup: {
        color: '#FB7200'
    }
  });
  
