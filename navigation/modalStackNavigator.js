import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RequestScreen from '../modals/request';
import LoadingScreen from '../modals/loading';
import WonScreen from '../modals/won';
import LostScreen from '../modals/lost';
import PlayScreen from '../modals/play';
import QuizeScreen from '../modals/quize';
import AwaitingResultScreen from '../modals/awaitingResult';
import ExpiredRequest from '../modals/expiredRequest';
import RejectRequestScreen from '../modals/rejectRequest';
import GameResultsScreen from '../modals/gameResults'



const Stack = createStackNavigator()

export const ModalNavigator = props => {
    return (
    <Stack.Navigator>
        <Stack.Screen name='request' component={RequestScreen}/>
        <Stack.Screen name='won' component={WonScreen}/>
        <Stack.Screen name='lost' component={LostScreen}/>
        <Stack.Screen name='loading' component={LoadingScreen}/>
        <Stack.Screen name='play' component={PlayScreen}/>
        <Stack.Screen name='quize' component={QuizeScreen}/>
        <Stack.Screen name='reject' component={RejectRequestScreen}/>
        <Stack.Screen name='awaiting' component={AwaitingResultScreen}/>
        <Stack.Screen name='expiredRequest' component={ExpiredRequest}/>
        <Stack.Screen name='gameResults' component={GameResultsScreen}/>
    </Stack.Navigator>)
}
