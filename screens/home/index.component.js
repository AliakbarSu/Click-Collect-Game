import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Platform, Alert} from 'react-native';
import UserNav from '../../components/user-nav/index';
import MapView, {AnimatedRegion, Marker} from 'react-native-maps';
import {connect } from 'react-redux';
import {AddChallengeRequest, UpdateLocation, UPDATE_GAME_TOKEN, StartGame, SetGameResults, RejectChallengeRequest} from '../../store/actions/game';
import {FetchProfile} from '../../store/actions/profile';
import { UpdateGameStatus } from '../../store/actions/gamestatus';
// import * as Permissions from 'expo-permissions';
import { OPEN_EXPIRED_REQUEST_MODAL } from '../../store/actions/modal';



const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

class HomeScreen extends Component {
    marker = null;
    watchID = null;

    state = {
        focusedLocation: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: 
                Dimensions.get('window').width /
                Dimensions.get('window').height * LATITUDE_DELTA
        },
        latitude: LATITUDE,
        longitude: LONGITUDE,
        prevLatLng: {},
        coordinate: new AnimatedRegion({
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: 0,
            longitudeDelta: 0
        })
    }

    constructor(props) {
        super(props)
    }


    registerSubscription = () => {
        // client.subscribe({query: REQUEST_EXPIRE, variables: {id: this.props.auth.id}}).subscribe(res => {
        //     this.props.requestExpired()
        //     this.props.navigation.navigate('expiredRequest')
        // })


        
        // client.subscribe({query: ON_ACTIVITY_RESPONSE, variables: {id: this.props.auth.id}}).subscribe(res => {
        //     const sender = res.data.onActivityResponse.sender
        //     client.mutate({mutation: UPDATE_ACTIVITY, variables: {id: this.props.auth.id, sender}}).then(res => {
        //     }).catch(err => console.log(err))
        // })

        // client.subscribe({query: ON_GANE_STARTED, variables: {id: this.props.auth.id, token: this.props.game.challengeRequest.token}}).subscribe(res => {
        //     const result = {
        //         id: res.data.onGameStarted._id, 
        //         questions: res.data.onGameStarted.questions, 
        //         time: res.data.onGameStarted.time};
        //     this.props.startGame(result)
        //     this.props.navigation.navigate('quize')
        // })

        // client.subscribe({query: ON_GAME_ENDS, variables: {id: this.props.auth.id}}).subscribe(res => {
        //     const result = res.data.onGameEnds;
        //     this.props.setGameResults(result)
        //     this.props.navigation.navigate('gameResults')
        // })

        // client.subscribe({query: ON_REQUEST_REJECTED, variables: {id: this.props.auth.id}}).subscribe(res => {
        //     this.props.rejectRequest()
        //     this.props.navigation.navigate('reject')
        // })

        // client.subscribe({query: PLAYERS_FOUND, variables:{id: this.props.auth.id, level: 1, points: 22}}).subscribe((res) => {
        //     const data = res.data.onChallengeFound;
        //     if(res.data.onChallengeFound) {
        //         this.props.AddChallengeRequest({
        //             points: res.data.onChallengeFound.points,
        //             level: res.data.onChallengeFound.level,
        //             opponent: {
        //                 name: data.opponents.personal.username,
        //                 win: data.opponents.gameStatus.win,
        //                 lost: data.opponents.gameStatus.lost,
        //                 avatar: data.opponents.personal.avatar,
        //                 level: data.opponents.gameStatus.level
        //             },
        //             time: data.time,
        //             token: data.token,
        //             status: true
        //         })
        //         this.props.navigation.navigate('request')
        //     }
            // console.log(res.data)
            
        // })
    }


    componentDidMount = () => {
        this.props.FetchProfile()
        this.registerSubscription()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.gameStatus.location.latitude !== this.props.gameStatus.location.latitude ||
           prevProps.gameStatus.location.longitude !== this.props.gameStatus.location.longitude) {
            const newCoordinates = {
                latitude: this.props.gameStatus.location.latitude,
                longitude: this.props.gameStatus.location.longitude
            }

            // if (Platform.OS === "android") {
            //     if (this.marker) {
            //         this.marker._component.animateMarkerToCoordinate(newCoordinate, 500);
            //     }
            // } else {
            //     this.state.coordinate.timing(newCoordinates).start()
            // }

            this.state.coordinate.timing(newCoordinates).start()

            this.setState({
                prevLatLng: newCoordinates
            })
        }
    }

    getMapRegion = () => ({
        latitude: this.props.gameStatus.location.latitude,
        longitude: this.props.gameStatus.location.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });

    onStatusChangeHandler = (status) => {
        this.props.updateStatus(status)
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
        this.marker = null;
        console.log('unmounting')
    }

    

    render() {
        return (
              <View style={styles.container}>
                    <UserNav 
                        style={styles.topNav} 
                        profile={this.props.profile} 
                        gameStatus={this.props.gameStatus}
                        statusChanged={this.onStatusChangeHandler}/>
                    <MapView 
                        showUserLocation
                        followUserLocation
                        loadingEnabled
                        region={this.getMapRegion()} style={StyleSheet.absoluteFill}>
                        <Marker.Animated
                            ref={marker => this.marker = marker}
                            coordinate={this.state.coordinate}/>
                    </MapView>
                </View>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gameStatus: state.gameStatus,
        profile: state.profile,
        game: state.game,
        auth: state.auth
    }
}


const mapActionsToProps = (dispatch) => {
    return {
        AddChallengeRequest: (challengeData) => dispatch(AddChallengeRequest(challengeData)),
        FetchProfile: () => dispatch(FetchProfile()),
        updateStatus: status => dispatch(UpdateGameStatus(status)),
        updateLocation: (location) => dispatch(UpdateLocation(location)),
        updateGameToken: (token) => dispatch({type: UPDATE_GAME_TOKEN, payload: {token}}),
        startGame: (questions) => dispatch(StartGame(questions)),
        setGameResults: (results) => dispatch(SetGameResults(results)),
        rejectRequest: () => dispatch(RejectChallengeRequest()),
        requestExpired: () => dispatch({type: OPEN_EXPIRED_REQUEST_MODAL})
    }
}

HomeScreen.navigationOptions = {
    params: {
        test: 'fksjf'
    }
}

export default connect(mapStateToProps, mapActionsToProps)(HomeScreen);
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    map: {
        
    },
    topNav: {
        flex: 1,
        position: 'absolute',
        left: 'auto',
        right: 'auto',
        top: 10,
        zIndex: 10
    }
  });

