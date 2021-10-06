import React, {Component} from 'react';
import {View, ScrollView, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import {takeImage} from '../../../../services/imagePicker';
import {connect} from 'react-redux';
import {UpdateAvatar} from '../../../../store/actions/profile'
import CustomInput from './components/input/index.component'
import CustomButton from '../../../../components/button/index.component';
var validate = require("validate.js");




class ProfileSettings extends Component {
    
    state = {
        userDetails: {
            avatar: {
                uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560800161/restaurant/backgrounds/louis-hansel-1160001-unsplash.jpg"
            }
        },
        inputs: [
            {
                name: 'notificationEmail',
                title: 'Notifications Email',
                value: '',
                constrain: {
                    format: {
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: (value, attribute, validatorOptions, attributes, globalOptions) => {
                          return validate.format("^%{email} is not a valid email address", {
                            email: value
                          });
                        }
                    },
                },
                valid: false,
                isTouched: false,
                message: ''
            },
            {
                name: 'phoneNumber',
                title: 'Phone Number',
                value: '024 45242 535',
                constrain: {
                    format: {
                        pattern: /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{6})$/,
                        message: (value, attribute, validatorOptions, attributes, globalOptions) => {
                          return validate.format("^%{num} is not a valid phone number", {
                            num: value
                          });
                        }
                    }
                },
                valid: false,
                isTouched: false,
                message: ''
            },
            {
                name: 'country',
                title: 'Country',
                value: '',
                constrain: [],
                valid: false,
                isTouched: false,
                message: ''
            },
            {
                name: 'accountNumber',
                title: 'Bank Account Number',
                value: '',
                constrain: {
                    format: {
                        pattern: /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{6})$/,
                        message: (value, attribute, validatorOptions, attributes, globalOptions) => {
                          return validate.format("^%{num} is not a valid account number", {
                            num: value
                          });
                        }
                    }
                },
                valid: false,
                isTouched: false,
                message: ''
            },
            {
                name: 'accountName',
                title: 'Bank Account Name',
                value: '',
                constrain: {
                    format: {
                        pattern: /^[a-zA-Z ]+$/,
                        message: (value, attribute, validatorOptions, attributes, globalOptions) => {
                          return validate.format("^%{num} is not a valid account name", {
                            num: value
                          });
                        }
                    }
                },
                valid: false,
                isTouched: false,
                message: ''
            },
            {
                name: 'newPassword',
                title: 'New Password',
                value: '',
                constrain: {
                    format: {
                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                        message: (value, attribute, validatorOptions, attributes, globalOptions) => {
                          return validate.format("^%{num} is not a valid password", {
                            num: value
                          });
                        }
                    }
                },
                valid: false,
                isTouched: false,
                message: ''
            }
        ]
    }


    onInputUpdateHandler = (name, value) => {
        const inputsCopy = [...this.state.inputs];
        const field = this.state.inputs.find(each => each.name == name);
        const fieldIndex = this.state.inputs.find(each => each.name == name);
        field.value = String(value);
        field.isTouched = true

        // Validate input
        const result = validate(value.length ? {[name]: value} : {}, {[name]: field.constrain})
        if(result) {
            if(result[name].length) {
                field.valid = false;
                field.message = result[name][0]
            }else {
                field.valid = true
            }
        }else {
            field.valid = true
        }
        
        


        inputsCopy[fieldIndex] = field
        this.setState(prevState => {
            return {
                ...prevState,
                inputs: inputsCopy
            }
        })


    }

    onSaveChangesHandler = () => {
        const validationResults = []
        const inputsCopy = this.state.inputs.map(input => {
             // Validate input
            const result = validate({[input.name]: input.value}, input.isTouched ? {[input.name]: input.constrain} : null)
            if(result) {
                if(result[input.name].length) {
                    input.valid = false;
                    input.message = result[input.name][0]
                    validationResults.push(false)
                }else {
                    input.valid = true
                }
            }else {
                input.valid = true
                validationResults.push(true)
            }
            return input
        })

        const inputValues = {}
        this.state.inputs.forEach(input => {
            inputValues[input.name] = input.value.length > 0 ? input.value : null
        })

        const variables = {
            id: this.props.auth.id,
            phoneNumber: inputValues.phoneNumber,
            notificationEmail: inputValues.notificationEmail,
            country: inputValues.country,
            bankAccountNumber: inputValues.bankAccountNumber,
            bankAccountName: inputValues.bankAccountName
        }
       
        if(!validationResults.some(value => value == false)) {
            client.mutate({mutation: UPDATE_PROFILE, variables: variables}).catch(err => {
                console.log(err)
            })
        }else {
            alert('Some of the fields are invalid')
        }
    }



    onEditPhotoHandler = () => {
        takeImage().then(result => {
            console.log(result)
            // this.props.UpdateAvatar(res)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{justifyContent: 'flex-start', alignItems: 'center',}}>
                {/* <View style={styles.User}>
                    <View style={styles.UserAvatarWrapper}>
                        <Image style={styles.UserAvatar} source={{uri: data.profile.personal.avatar}}/>
                    </View>
                    <TouchableOpacity onPress={this.onEditPhotoHandler}>
                        <Text style={styles.UserAvatarEditText}>Edit Photo</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.userDetailsWrapper}>
                    {this.state.inputs.map(input => 
                        <View key={input.name} style={styles.userDetailsInputs}>
                            <CustomInput 
                                value={input.value} 
                                placeholder={input.title} 
                                message={input.message}
                                invalid={input.isTouched ? !input.valid : false}
                                onChangeText={(event) => this.onInputUpdateHandler(input.name, event)}/>
                        </View>)}
                    <View>
                        <CustomButton onPress={this.onSaveChangesHandler}>Save Changes</CustomButton>
                    </View>
                </View>  */}
            </ScrollView>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        profile: state.profile,
        auth: state.auth
    }
}

const mapActionsToProps = dispatch => {
    return {
        UpdateAvatar: (image) => dispatch(UpdateAvatar(image))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(ProfileSettings);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      paddingTop: 25
    }, 
    User: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    UserAvatarWrapper: {
        borderWidth: 5,
        borderColor: '#FF821A',
        width: 120,
        height: 120,
        borderRadius: 60,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    UserAvatar: {
        width: '100%',
        height: '100%',
        borderRadius: 55
    },
    UserAvatarEditText: {
        color: '#00DFDF',
        paddingTop: 5
    },
    userDetailsWrapper: {
        width: '80%',
        alignItems: 'center'
    },
    userDetailsInputs: {
        width: '100%',
        marginTop: 7
    },
    userDetailsInputHeader: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#E8E8E8',
        padding: 2
    },
    userDetailsInputHeaderText: {
        fontSize: 19,
        color: '#A8A8A8'
    },
    userDetailsInputField: {
        padding: 5
    },
    userDetailsInputFieldText: {
        color: '#A8A8A8',
        fontSize: 15
    }
  });


  
