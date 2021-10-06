import React from 'react';
import {Plateform} from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native'


export const CustomHeaderButton = ({ scene, previous, navigation }) => {
    const headerHeight = scene.descriptor.options.headerStyle.height
    const { options } = scene.descriptor;
    const title = options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
    return (
        <View 
            style={{...styles.container, height: headerHeight}}>
            <View style={styles.menuBars}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                   <Ionicons name='md-menu' size={24} color={'grey'}/>
                </TouchableOpacity>
                <Text>{title}</Text>
            </View>
        </View>    
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    menuBars: {
        width: '100%',
        height: 50,
        padding: 5
    }
})