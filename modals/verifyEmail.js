import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Platform, Alert, Modal, ScrollView, Button, TextInput} from 'react-native';
import { connect } from 'react-redux';

import DefaultButton from '../components/button/index.component';
import { RejectChallengeRequest, AcceptChallengeRequest } from '../store/actions/game'
import { VerifyEmail } from '../store/actions/auth'



class VerifyEmailComponent extends Component {
    state = {
        verificationCode: null
    }

    onTextChangeHandle(code) {
        console.log(this.props)
        this.setState(prevState => {
            return {
                ...prevState,
                verificationCode: code
            }
        })
    }

    onVerifyEmailHandle() {
        this.props.verifyEmail()
    }


    render() {
        return (
            // <Modal visible={this.props.modals.awaitingResults.status}>
            <View style={styles.container}>
                <Text>Enter the verification code sent to your email</Text>
                <TextInput onChangeText={this.onTextChangeHandle}/>
                <Button title="Verify" onPress={this.onVerifyEmailHandle}/>
            </View>
            // </Modal>
        )
    }

}





const mapStateToProps = state => {
    return {
        game: state.game,
        gameStatus: state.gameStatus,
        user: state.user,
        modals: state.modals
    }
}

const mapActionsToProps = dispatch => {
    return {
        rejectRequest: () => dispatch(RejectChallengeRequest()),
        acceptRequest: () => dispatch(AcceptChallengeRequest()),
        verifyEmail: () => dispatch(VerifyEmail())
    }
}

export default connect(mapStateToProps, mapActionsToProps)(VerifyEmailComponent)

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
  
