import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {View, Text, Image, StyleSheet, Button, ImageBackground, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { verifyEmail } from '../../store/actions/auth'



export default props => {
    const dispatch = useDispatch()
    const [verificationCode, setVerificationCode] = useState("")

    const verifyEmailHandler = async () => {
        dispatch(verifyEmail(verificationCode))
    }

    onVerificationCodeHandle = value => {
        setVerificationCode(value)
    }

    return (
        <View style={styles.container}>
                <ImageBackground 
                    style={styles.imageBackground}
                    source={{uri: 'https://i.pinimg.com/originals/51/17/90/5117908f2bd3aa0e0aaf4f2655cd8bfa.jpg'}}>
                    <ScrollView style={styles.wrapper}>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Verify Your Email Address</Text>
                            <Text>A verification code was sent to your email address.</Text>
                        </View>
                        <View style={styles.inputsWrapper}>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    onChangeText={onVerificationCodeHandle} 
                                    style={styles.textInput} 
                                    placeholder="Verification Code"
                                    value={verificationCode}/>
                            </View>
                            {/* <View style={styles.errorWrapper}>
                                {this.isFieldInError('username') && <InputError key={this.getErrorsInField('username')[0]} error={this.getErrorsInField('username')[0]}/> }
                            </View> */}
                        </View>
                        <View style={styles.buttons}>
                            <View style={styles.buttonWrapper}>
                                <View style={styles.buttonComponent}>
                                    <TouchableOpacity onPress={verifyEmailHandler}>
                                        <Text style={styles.buttonText}>Verify</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
    )
}


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
  
