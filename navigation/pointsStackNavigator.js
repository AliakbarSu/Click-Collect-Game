import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PointsScreen from '../screens/points/index.component';
import BuyPointsScreen from '../screens/buy-points/index.component';
import SendPointsScreen from '../screens/send-points/index.component';
import RedeemScreen from '../screens/redeem/index.component';


const Stack = createStackNavigator()


export const PointsNavigator = props => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="points" component={PointsScreen}/>
            <Stack.Screen name="sendPoints" component={SendPointsScreen}/>
            <Stack.Screen name="buyPoints" component={BuyPointsScreen}/>
            <Stack.Screen name="Redeem" component={RedeemScreen}/>
        </Stack.Navigator>
    )
}
