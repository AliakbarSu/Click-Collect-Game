import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Platform, Alert, Modal, ScrollView, Button} from 'react-native';
import { connect } from 'react-redux';

import DefaultButton from '../components/button/index.component';
import { RejectChallengeRequest, AcceptChallengeRequest, UPDATE_TIME } from '../store/actions/game';
import { ACCEPTED } from '../store/reducers/game';




let interval = null;
let timeout = null;

class RequestModal extends Component {


    componentDidMount = () => {
       interval = setInterval(() => {
        this.props.updateTime(this.props.game.challengeRequest.time - 1000)
        if(this.props.game.challengeRequest.time <= 0 && this.props.game.challengeRequest.status !== ACCEPTED) {
            clearInterval(interval)
        }
        }, 1000)

        timeout = setTimeout(() => {
            if(this.props.game.challengeRequest.status !== ACCEPTED) {
                this.props.navigation.navigate('expiredRequest')
                this.props.rejectRequest()
            }
        },
        this.props.game.challengeRequest.time)
    }

    componentWillUnmount = () => {
        clearInterval(interval)
        clearTimeout(timeout)
    }
     
   
    onAcceptHandler = () => {
        clearInterval(interval)
        clearTimeout(timeout)
        this.props.navigation.push('loading')
        this.props.acceptRequest()
        
    }

    onRejectHandler = () => {
        clearInterval(interval)
        clearTimeout(timeout)
        this.props.navigation.goBack()
        this.props.rejectRequest()
    }

    render() {
        return (
            // <Modal visible={this.props.modals.request.status}>
            <View style={styles.container}>
            {/* <Query query={GET_PROFILE} variables={{id: this.props.auth.id}}>
                    {({loading, error, data}) => {
                        if(loading) {
                            return <Text>Loading</Text>
                        }
                        if(error) {
                            console.log(error)
                            return <Text>Something went wrong</Text>
                        }

                return <ScrollView contentContainerStyle={{flexGrow : 1}} style={{width: '100%'}}>
                    <View style={styles.wrapper}>
                        <View style={styles.header}>
                            <View style={styles.gamePointsWrapper}>
                                <Text style={styles.gamePointsHeader}>Points</Text>
                                <Text style={styles.gamePointsText}>{this.props.game.challengeRequest.points}</Text>
                            </View>
                            <View style={styles.counterWrapper}>
                                <View style={styles.counterRoundBorder}>
                                    <View style={styles.counter}>
                                        <Text style={styles.counterText}>{this.props.game.challengeRequest.time / 1000}</Text>
                                    </View>
                                </View>
                                <Text style={styles.counterCaption}>MIN</Text>
                            </View>
                            <View style={styles.gameLevelWrapper}>
                                <Text style={styles.gameLevelHeader}>Level</Text>
                                <Text style={styles.gameLevelText}>{this.props.game.challengeRequest.level}</Text>
                            </View>
                        </View>
                        
                        <View style={styles.players}>
                            <View style={styles.playersPlayer}>
                                <Text style={styles.playersName}>{data.profile.personal.username}</Text>
                                <View style={styles.playersAvatarWrapper}>

                                    {data.profile.personal.avatar.length > 0 && <Image style={styles.playersAvatar} source={{uri: data.profile.personal.avatar}}/>}
                                </View>
                                <View style={styles.playersScoreWrapper}>
                                    <Text style={styles.playersScoreText}>Win: {data.profile.gameStatus.win}</Text>
                                    <Text style={styles.playersScoreText}>Lost: {data.profile.gameStatus.lost}</Text>
                                </View>
                            </View>
                            <Text style={styles.vsText}>VS</Text>
                            <View style={styles.playersPlayer}>
                                <Text style={styles.playersName}>{this.props.game.challengeRequest.opponent.name}</Text>
                                <View style={styles.playersAvatarWrapper}>
                                    {this.props.game.challengeRequest.opponent.avatar.length > 0 && <Image style={styles.playersAvatar} source={{uri: this.props.game.challengeRequest.opponent.avatar}}/>}
                                </View>
                                <View style={styles.playersScoreWrapper}>
                                    <Text style={styles.playersScoreText}>Win: {this.props.game.challengeRequest.opponent.win}</Text>
                                    <Text style={styles.playersScoreText}>Lost: {this.props.game.challengeRequest.opponent.lost}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.infoWrapper}>
                            <Text style={styles.infoText}>
                                {this.props.game.challengeRequest.opponent.name} has challenged you.
                            </Text>
                        </View>
                        <View style={styles.playButtonWrapper}>
                            <DefaultButton 
                                style={[styles.playButton, styles.playButtonGreen]} 
                                textStyle={{color: '#FFFFFF'}}
                                onPress={this.onAcceptHandler}>Accept</DefaultButton>    
                            <DefaultButton style={styles.playButton} onPress={this.onRejectHandler}>Reject</DefaultButton>
                        </View>
                    </View>
                </ScrollView>}}
                </Query> */}
            </View>
            // </Modal>
        )
    }

}





const mapStateToProps = state => {
    return {
        game: state.game,
        gameStatus: state.gameStatus,
        profile: state.profile,
        modals: state.modals,
        auth: state.auth
    }
}

const mapActionsToProps = dispatch => {
    return {
        rejectRequest: () => dispatch(RejectChallengeRequest()),
        acceptRequest: () => dispatch(AcceptChallengeRequest()),
        updateTime: (time) => dispatch({type: UPDATE_TIME, payload: {time}})
    }
}

export default connect(mapStateToProps, mapActionsToProps)(RequestModal)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFAE6B'
    },
    wrapper: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 10
    },
    gamePointsWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "30%"
    },
    gamePointsHeader: {
        textTransform: 'uppercase',
        color: '#FFFFFF'
    },
    gamePointsText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 19
    },
    gameLevelWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "30%"
    },
    gameLevelHeader: {
        textTransform: 'uppercase',
        color: '#FFFFFF'
    },
    gameLevelText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 19
    },
    counterWrapper: {
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3
    },
    counterRoundBorder: {
        borderWidth: 10,
        borderColor: '#FFFFFF',
        borderRadius: 60,
        width: 120,
        height: 120
    },
    counter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#FF7400',
        width: '100%',
        height: '100%'
    },
    counterText: {
        fontSize: 70,
        color: '#FFFFFF',
        textAlign: 'center',
        width: '100%',
        fontWeight: 'bold'
    },
    counterCaption: {
        color: '#FFFFFF',
        paddingTop: 10
    },
    players: {
        flex: 3,
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    playersPlayer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    playersAvatarWrapper: {
        borderWidth: 5,
        borderColor: '#FFFFFF',
        width: 100,
        height: 100,
        borderRadius: 50,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    playersAvatar: {
        width: '100%',
        height: '100%',
        borderRadius: 45.25
    },
    playersName: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        padding: 5
    },
    playersScoreWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    playersScoreText: {
        color: '#FFFFFF',
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
        padding: 5,
        fontWeight: 'bold'
    },
    vsText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 25,
        padding: 5,
        fontWeight: 'bold'
    },
    infoWrapper: {
        width: '70%',
        paddingTop: 10,
        justifyContent: 'center'
    },
    infoText: {
        width: '100%',
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold'
    },
    playButtonWrapper: {
        flex: 4,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    playButton: {
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    playButtonGreen: {
        backgroundColor: '#1AFD1A'
    }
  });
  
