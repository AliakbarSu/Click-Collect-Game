import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import DefaultInput from '../../components/input/index.component'
import {connect} from 'react-redux';
import { SendChallengeReq } from '../../store/actions/game';
import CustomInput from './components/input/index.component'
import DefaultButton from '../../components/button/index.component';
import { Entypo } from '@expo/vector-icons';
// import CustomButton from '../../../components/button/index.component';
var validate = require("validate.js");



export const challengeScreenOptions = {
    tabBarIcon: (props) => {
        return <Entypo name="game-controller" size={30} color={props.color}/>
    },
    title: "test1"
}




class ChallengeScreen extends Component {

    state = {
        suggestedUsernames: [],
        inputs: [
            {
                name: 'username',
                title: 'Player\' username',
                value: '',
                constrain: {
                    length: {
                        minimum: 2,
                        max: 10,
                        message: "username %{username} does not exist"
                    },
                    // format: {
                    //     message: (value, attribute, validatorOptions, attributes, globalOptions) => {
                    //       return validate.format("username ^%{username} does not exist", {
                    //         username: value
                    //       });
                    //     }
                    // },
                },
                valid: false,
                isTouched: false,
                message: '',
                placeholder: 'e.g ali.sul'
            },
            {
                name: 'level',
                title: 'Level',
                value: '',
                constrain: {
                    numericality: {
                        greaterThan: 1,
                        lessThan: 30
                    }
                },
                valid: false,
                isTouched: false,
                message: '',
                placeholder: 'e.g 2'
            },
            {
                name: 'points',
                title: 'Points to play',
                value: '',
                constrain: {
                    numericality: {
                        greaterThan: 1,
                        lessThan: 30
                    }
                },
                valid: false,
                isTouched: false,
                message: '',
                placeholder: 'e.g 20'
            }
        ]
    }
    constructor(props) {
        super(props)
    }


    onUsernameUpdateHandler = (value) => {
        // client.query({query: AUTO_POPULATE_USERNAME, variables: {username: value}}).then(res => {
        //     this.setState(prevState => {
        //         const data = res.data.usernames
        //         return {
        //             ...prevState,
        //             suggestedUsernames: Object.keys(data).map(key => data[key].personal.username) 
        //         }
        //     })
        // }).catch(err => {
        //     console.log(err)
        // })
        this.onInputUpdateHandler('username', value)
    }

   
    onInputUpdateHandler = (name, value) => {
        const inputsCopy = [...this.state.inputs];
        const field = this.state.inputs.find(each => each.name == name);
        const fieldIndex = this.state.inputs.find(each => each.name == name);
        field.value = String(value);
        field.isTouched = true

        // Validate input
        const result = validate({[name]: value}, {[name]: field.constrain})
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

    onChallengeHandler = () => {
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
            username: inputValues.username,
            points: Number(inputValues.points),
            level: Number(inputValues.level)
        }
       
        if(!validationResults.some(value => value == false)) {
            client.mutate({mutation: SEND_CHALLENGE_REQUEST, variables: variables}).then(res => {

            }).catch(err => {
                console.log(err)
            })
        }else {
            alert('Some of the fields are invalid')
        }
    }
    
    render() {

        const inputs = this.state.inputs.map(input => {
            return <View key={input.name} style={styles.inputWrapper}>
                        <CustomInput
                            value={input.value} 
                            placeholder={input.title} 
                            message={input.message}
                            invalid={input.isTouched ? !input.valid : false}
                            onChangeText={(event) => 
                            input.name == 'username' ? this.onUsernameUpdateHandler(event) : this.onInputUpdateHandler(input.name, event)}/>
                    </View>
        })


        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{flex: 1}}>
                    <View style={styles.wrapper}>

                       {inputs}

                        <View style={styles.buttonWrapper}>
                            <DefaultButton 
                                style={styles.button}
                                textStyle={styles.buttonText}
                                onPress={this.onChallengeHandler}>Send Challenge Request</DefaultButton>
                        </View>
                     </View>
               </ScrollView>
            </View>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        game: state.game,
        profile: state.profile,
        auth: state.auth
    }
}

const mapActionsToProps = dispatch => {
    return {
        sendChallengeReq: (username, level, points) => dispatch(SendChallengeReq(username, level, points))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(ChallengeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height: '100%'
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputWrapper: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    inputInputHalf: {
        width: '50%'
    },
    buttonWrapper: {
        paddingTop: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#FF821A'
    },
    buttonText: {
        color: '#FFFFFF'
    }
});


  
