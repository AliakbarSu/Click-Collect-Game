import React, {Component} from 'react'
import { useDispatch } from 'react-redux'
import {View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Feather, Entypo, MaterialIcons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';

const sideDrawer = ({navigation}) => {
        const onLogoutHandle = () => {
            navigation.navigate('Logout')
        }
        return (
            <ScrollView style={styles.scrollView}>
                <View>
                    <TouchableOpacity onPress={() => navigation.closeDrawer()}>
                        <Ionicons name="md-arrow-back" size={30}/>
                    </TouchableOpacity>
                    
                </View>
                {/* <SafeAreaView
                style={styles.container}
                forceInset={{ top: 'always', horizontal: 'never' }}
                > */}
                <View style={styles.container}>
                    <View style={[styles.items, styles.itemsHeading]}>
                        <Text style={styles.itemText}>Settings</Text>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <MaterialCommunityIcons name="account-settings" size={30} color="grey"/>
                        </View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProfileSettings') }}>
                            <Text style={styles.itemText}>Profile Settings</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Feather name="settings" size={30} color="grey"/>
                        </View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('GameSettings') }}>
                            <Text style={styles.itemText}>Game Settings</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <MaterialIcons name="settings-applications" size={30} color="grey"/>
                        </View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('AppSettings')}}>
                            <Text style={styles.itemText}>App Settings</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.items, styles.itemsHeading]}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Support')}}>
                            <Text style={styles.itemText}>Support</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-document" size={30} color="grey"/>
                        </View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('TermsConditions') }}>
                            <Text style={styles.itemText}>Terms & Conditions</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-alert" size={30} color="grey"/>
                        </View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Report')}}>
                            <Text style={styles.itemText}>Report a Problem</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-lock" size={30} color="grey"/>
                        </View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Policy') }}>
                            <Text style={styles.itemText}>Privacy Policy</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-log-out" size={30} color="grey"/>
                        </View>
                        <TouchableOpacity onPress={onLogoutHandle}>
                            <Text style={styles.itemText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* </SafeAreaView> */}
            </ScrollView>
        )
    
}

const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      width: '100%'
    },
    container: {
      flex: 1,
      paddingTop: 60,
      backgroundColor: '#F5FCFF',
      width: '100%'
    },
    items: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'flex-start'
    },
    itemsHeading: {
        backgroundColor: '#eeeeee'
    },
    itemText: {
        color: 'grey'
    },
    itemsIcon: {
        marginRight: 20
    }
  });

export default sideDrawer
  
