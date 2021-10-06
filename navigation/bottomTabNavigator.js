// import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
// import { Ionicons, FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import React from 'react';
import { Text } from 'react-native'
import LeaderboardScreen from '../screens/leaderboard/index.screen';
import HomeScreen from '../screens/home/index.component';
import ProfileScreen from '../screens/profile/index.component';
import ChallengeScreen from '../screens/challenge/index.component';
// import TabBarBottom from '../components/tabBarBottom/index.component';
import { PointsNavigator } from './pointsStackNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { challengeScreenOptions } from '../screens/challenge/index.component'
import { createStackNavigator } from '@react-navigation/stack';
import { CustomHeaderButton } from '../components/headerButton/index.component';


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export const TabNavigator = props => {
  return (
    <Tab.Navigator 
      initialRouteName="Home">
      <Tab.Screen 
        name="Challenge" 
        component={ChallengeScreen} 
        initialParams={{headerTitle: 'Challenge1'}}
        options={challengeScreenOptions}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Points" component={PointsNavigator}/>
      <Tab.Screen name="LeaderBoard" component={LeaderboardScreen}/>
    </Tab.Navigator>
  )
}



const StackTabNavigatorOptions = {
  header: CustomHeaderButton,
  headerStyle: {
    height: 80, // Specify the height of your custom header
  },
  headerTitle: "Play"
}

export const StackTabNavigator = props => {
  return (
    <Stack.Navigator screenOptions={StackTabNavigatorOptions} headerTitle="Play1">
      <Stack.Screen name="init" component={TabNavigator}/>
    </Stack.Navigator>
  )
}


// export const BottomTabNavigator = createBottomTabNavigator({
//     Challenge: {
//       screen: ChallengeScreen,
//       navigationOptions: {
//         tabBarIcon: (tabInfo) => {
//           return <Entypo name="game-controller" size={30} color={tabInfo.tintColor}/>
//         }
//       },
//       params: {
//         headerTitle: 'Challenge'
//       }
//     },
//     Profile: {
//       screen: ProfileScreen,
//       navigationOptions: {
//         tabBarIcon: (tabInfo) => {
//           return <MaterialCommunityIcons name="account" size={30} color={tabInfo.tintColor}/>
//         }
//       },
//       params: {
//         headerTitle: 'Profile'
//       }
//     },
//     Home: {
//       screen: HomeScreen,
//       navigationOptions:  {
//             tabBarIcon: (tabInfo) => {
//                 return <FontAwesome5 name="home" size={30} color={tabInfo.tintColor}/>
//             }
//       },
//       params: {
//         headerTitle: 'Home'
//       }
//     },
//     Points: {
//       screen: PointsStackNavigator,
//       navigationOptions: {
//         tabBarIcon: (tabInfo) => {
//           return <FontAwesome5 name="award" size={30} color={tabInfo.tintColor}/>
//         }
//       },
//       params: {
//         headerTitle: 'Points'
//       }
//     },
//     Leaderboard: {
//       screen: LeaderboardScreen,
//       navigationOptions: {
//         tabBarIcon: (tabInfo) => {
//           return <Ionicons name="ios-list" size={30} color={tabInfo.tintColor}/>
//         }
//       },
//       params: {
//         headerTitle: 'Leaderboard'
//       }
//     }
//   }, {
//     initialRouteName: 'Home',
//     tabBarOptions: {
//       showLabel: false,
//       activeTintColor: "green",
//       inactiveTintColor: "orange"
//     },
//     tabBarComponent: props => {
//       return (<TabBarBottom {...props}/>)
//     }
//   })

// BottomTabNavigator.navigationOptions = ({navigation}) => {
//   let title = '';
//   if(navigation.state.routes[navigation.state.index]) {
//     title = navigation.state.routes[navigation.state.index].params.headerTitle
//   }
  
//   let tabBarVisible = true
//   if (navigation.state.index > 0) {
//     tabBarVisible = false;
//   }
//   return {
//     headerTitle: title,
//     tabBarVisible: true
//   }
// }