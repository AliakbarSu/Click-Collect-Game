import React, {Component} from 'react';
import websocket from './websocket'
import * as Permissions from 'expo-permissions';
import {connect } from 'react-redux';
import { UpdateLocation } from '../store/actions/game'
import eventHandler from './handleMessages'

const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

class UpdateLocationService extends Component {
    state = {
        latitude: LATITUDE,
        longitude: LONGITUDE
    }

    constructor(props) {
        super(props)
        // this.websocket = new websocket(props.auth.token, eventHandler).getConnection()
    }

    watchID = null
    componentDidMount = () => {
        Permissions.askAsync(Permissions.LOCATION).then(result => {
            if(result.status == 'granted') {
                this.watchID = navigator.geolocation.watchPosition(
                    position => {
                      const { latitude, longitude } = position.coords;
        
                      this.props.updateLocation({latitude: latitude, longitude: longitude})
        
                      // Update location
                      const message = {
                          message: "updateLocation",
                          data: {
                              latitude,
                              longitude
                          }
                      }
                    //   this.websocket.emit(message)
                      
                    },
                    error => console.log(error),
                    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
                 );
            }else {
                Alert.alert('You need to give permission to use this app')
            }
        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)
        // this.websocket.closeConnection()
    }

    render() {return null}
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        updateLocation: (location) => dispatch(UpdateLocation(location))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(UpdateLocationService)
