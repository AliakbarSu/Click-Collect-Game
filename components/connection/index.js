import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Platform} from 'react-native';
import NavButonControll from '../services/navButtonsConroller'
import UserNav from '../../components/user-nav/index';
import MapView, {AnimatedRegion, Marker} from 'react-native-maps';
import {connect }from 'react-redux';
import { OpenPlayModal, OpenWonModal, OpenLostModal, OpenQuizeModal, OpenChallengeRequest } from '../services/modals';
import {AddChallengeRequest, UpdateLocation} from '../../services/store/actions/game';
import {FetchProfile} from '../../services/store/actions/profile';
import { UpdateGameStatus } from '../../services/store/actions/gamestatus';
import {socket} from '../../services/connection/connection'


class ConnectionComponent extends Component {
    
   

    componentDidMount = () => {
        socket.on('onNewRequest', function(data) {
            console.log('event', data)
        })
    }



    render() {
        return null
    }
}

const mapStateToProps = (state) => {
    return {
        gameStatus: state.gameStatus,
        profile: state.profile,
        game: state.game
    }
}


const mapActionsToProps = (dispatch) => {
    return {
        AddChallengeRequest: (challengeData) => dispatch(AddChallengeRequest(challengeData)),
        FetchProfile: () => dispatch(FetchProfile()),
        updateStatus: status => dispatch(UpdateGameStatus(status)),
        updateLocation: (location) => dispatch(UpdateLocation(location))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(HomeScreen);
  

const styles = StyleSheet.create({
    container: {
      height: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    map: {
        width: '100%',
        height: '100%',
        marginTop: -40,
        zIndex: -1
    }
  });

