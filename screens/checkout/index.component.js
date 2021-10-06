import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import NavButtonsConroller from '../services/navButtonsConroller'
import DefaultInput from '../../components/input/index.component'

class CheckoutScreen extends Component {
    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = (event) => {
        NavButtonsConroller(event, this.props)
    }

    onCardNumberHandler = (value) => {
        alert(value)
    }

    onCardExpiryHandler = (field, value) => {

    }

    onCardCvvHandler = (field, value) => {

    }

    onSubmitHandler = () => {
        alert('success')
    }

    

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.wrapper}>
                        <View style={styles.valueWrapper}>
                            <View style={styles.valueWrapperCircle}>
                                <View style={styles.valueInnerWrapper}>
                                    <Text style={styles.valueText}>$300</Text>
                                    <Text style={styles.labels}>nzd</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.inputsWrapper}>
                            <View style={styles.inputWrapper}>
                                <DefaultInput 
                                    placeholder="e.g. 424242424242424242"
                                    label="Card Number" 
                                    onChangeText={this.onCardNumberHandler}/>
                            </View>
                            <View style={[styles.inputWrapper, styles.inputWrapperHalf]}>
                                <DefaultInput 
                                    placeholder="e.g. 09"
                                    style={styles.inputHalf}
                                    label="Month" 
                                    onChangeText={(value) => this.onCardExpiryHandler('month', value)}/>
                                <DefaultInput 
                                    placeholder="e.g. 23"
                                    style={styles.inputHalf}
                                    label="Year" 
                                    onChangeText={(value) => this.onCardExpiryHandler('year', value)}/>
                            </View>
                            <View style={[styles.inputWrapper, styles.inputWrapperHalf]}>
                                <DefaultInput 
                                    placeholder="e.g. 123"
                                    style={styles.inputHalf}
                                    label="CVV" 
                                    onChangeText={(value) => this.onCardCvvHandler('cvv', value)}/>
                                <DefaultInput 
                                    placeholder="e.g. 9289"
                                    style={styles.inputHalf}
                                    label="Zip Code" 
                                    onChangeText={(value) => this.onCardCvvHandler('zipCode', value)}/>
                            </View>
                        </View>
                        
                        <View style={styles.buttonWrapper}>
                            <View style={styles.button}>
                                <TouchableOpacity onPress={this.onSubmitHandler}>
                                    <Text style={styles.buttonText}>Pay Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </View>
                </ScrollView>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      wrapper: {
          paddingTop: 10,
          paddingBottom: 10,
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center'
      },
      valueWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    valueWrapperCircle: {
        width: 150,
        height: 150,
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00DFDF'
    },
    valueInnerWrapper: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    valueText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 50
    },
    labels: {
        fontSize: 20,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        width: '100%',
        textAlign: "right",
        paddingRight: 10
    },  
    inputsWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    inputWrapper: {
        width: '80%',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    inputWrapperHalf: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },    
    inputInput: {
        width: '100%',
        height: 40,
        paddingLeft: 20,
        color: '#A8A8A8'
    },
    inputHalf: {
        width: '45%'
    },
    buttonWrapper: {
        paddingTop: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        paddingTop: 15,
        paddingBottom: 15,
        width: '60%',
        borderRadius: 10,
        backgroundColor: '#00DFDF',
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
  
export default CheckoutScreen;
