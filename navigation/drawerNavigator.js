import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import LogoutScreen from '../screens/logout/index.screen';
import { TabNavigator, StackTabNavigator } from './bottomTabNavigator';
// import {HeaderButtons, Item, HeaderButton} from 'react-navigation-header-buttons';
// import HomeScreen from '../screens/home/index.component';
import { CustomHeaderButton } from '../components/headerButton/index.component';
import SideDrawer from '../components/sideDrawer/index.component';
import ProfileSettings from '../screens/profile/components/profileSettings/index.component';



const navigatorOptions = {
  tabBarVisible: true,
  headerLeft: CustomHeaderButton
}

const Drawer = createDrawerNavigator()

export const DrawerNavigator = props => {
  return (
    <Drawer.Navigator 
      hideStatusBar={false}
      drawerContent={SideDrawer}
      navigationOptions={navigatorOptions} 
      initialRouteName="Main">
      <Drawer.Screen name="Main" component={StackTabNavigator} options={{drawerLabel: 'Home'}}/>
      <Drawer.Screen name="Logout" component={LogoutScreen} options={{ drawerLabel: 'Log Out'}}/>
      <Drawer.Screen name="ProfileSettings" component={ProfileSettings} options={{ headerTitle: 'Profile Settings' }}/>
    </Drawer.Navigator>
  )
}

// const MainStackNavigator = createStackNavigator({
//     Main: {
//         screen: BottomTabNavigator
//     },
//     ...GeneralStackNavigator
// }, {
//     defaultNavigationOptions: navData => {
//         return {
//           headerLeft: (
//             <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//               <Item title="Menu" iconName="ios-menu" onPress={() => {
//                 navData.navigation.toggleDrawer()
//               }}></Item>
//             </HeaderButtons>
//           ),
//           headerTitle: "title"
//         }
//     },
//     headerMode: 'screen'
// })

// MainStackNavigator.navigationOptions = ({navigation}) => {
//   const title = navigation.state.routes[navigation.state.index].title
//   let tabBarVisible = navigation.state.routes[navigation.state.index].tabBarVisible
//   return {
//     title: title,
//     tabBarVisible: tabBarVisible
//   }
// }


