import React from 'react';
import {View, Text, Image, StyleSheet, Button, TouchableOpacity} from 'react-native'

export default (props) => {
    
    return <View style={[styles.playButton, props.style]}>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={[styles.playButtonText, props.textStyle]}>{props.children}</Text>
            </TouchableOpacity>
        </View>
    
}

const styles = StyleSheet.create({
    playButton: {
        backgroundColor: '#FFFFFF',
        padding: 17,
        borderRadius: 50,
        width: '80%'
    },
    playButtonText: {
        color: '#FF7400',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    }
  });
  
