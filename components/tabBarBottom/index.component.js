import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {BottomTabBar} from 'react-navigation-tabs';






const TabBarComponent = (props) => {
    return (
        <View style={styles.container}><BottomTabBar {...props} style={styles.bottomTabBar}/></View>
    )
}

export default connect(null, null)(TabBarComponent)



const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      width: Dimensions.get("window").width * 0.8
    },
    container: {
      backgroundColor: '#F5FCFF',
      borderTopColor: "orange",
      borderTopWidth: 5,
      paddingTop: 15,
      paddingBottom: 15
    },
    bottomTabBar: {
        borderTopColor: "transparent",
        backgroundColor: '#F5FCFF',
    }
  });


  
