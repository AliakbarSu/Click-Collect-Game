import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

class BuyPointsScreen extends Component {
    
    state = {
        pointsToBuy: {
            value: 0
        }
    }

    constructor(props) {
        super(props)
    }

    onInputHandler = (value) => {
        this.setState({pointsToBuy: {value: value}})
    }

    onBuyHandler = () => {
        alert('buy')
    }

    render() {
        return (
            <View style={styles.container}>
                 <View style={styles.wrapper}>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputLabel}>Number of Points</Text>
                        <View style={styles.input}>
                            <TextInput 
                                value={this.state.pointsToBuy.value} 
                                style={styles.inputInput} 
                                onChangeText={(value) => this.onInputHandler(value)} 
                                placeholder="e.g. 12"></TextInput>
                        </View>
                    </View>
                    <View style={styles.valueWrapper}>
                        <Text style={styles.valueText}>$300</Text>
                        <Text style={styles.labels}>nzd</Text>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={this.onBuyHandler}>
                                <Text style={styles.buttonText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
               </View>
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
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
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
    valueWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        paddingTop: 20,
        paddingBottom: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#E8E8E8',
        borderBottomColor: '#E8E8E8',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    valueText: {
        color: '#A8A8A8',
        textAlign: 'center',
        fontSize: 65
    },
    labels: {
        fontSize: 20,
        color: '#A8A8A8',
        textAlign: 'center',
        textTransform: 'uppercase'
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

export default BuyPointsScreen;
  
