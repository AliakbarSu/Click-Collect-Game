import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button, TouchableOpacity} from 'react-native'
import NavButonControll from '../../../../screens/services/navButtonsConroller'

class PlayModal extends Component {
    
    constructor(props){
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = (event) => {
        NavButonControll(event, this.props)
    }

    onPlayButtonHandler = () => {
        alert('play');
    }

    render() {
        const PlayButton = (
            <View style={styles.playButton}>
                <TouchableOpacity onPress={this.onPlayButtonHandler}>
                    <Text style={styles.playButtonText}>Play</Text>
                </TouchableOpacity>
            </View>
        )
        return (
            <View style={styles.container}>
    
                <View style={styles.counterWrapper}>
                    <View style={styles.counterRoundBorder}>
                        <View style={styles.counter}>
                            <Text style={styles.counterText}>3</Text>
                        </View>
                    </View>
                    <Text style={styles.counterCaption}>MIN</Text>
                </View>
                <View style={styles.players}>
                    <View style={styles.playersPlayer}>
                        <Text style={styles.playersName}>Aliakbar Sultani</Text>
                        <View style={styles.playersAvatarWrapper}>
                            <Image style={styles.playersAvatar} source={{uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931309/restaurant/backgrounds/joseph-gonzalez-176749-unsplash.jpg"}}/>
                        </View>
                        <View style={styles.playersScoreWrapper}>
                            <Text style={styles.playersScoreText}>Win: 22</Text>
                            <Text style={styles.playersScoreText}>Lost: 23</Text>
                        </View>
                    </View>
                    <Text style={styles.vsText}>VS</Text>
                    <View style={styles.playersPlayer}>
                        <Text style={styles.playersName}>John Doe</Text>
                        <View style={styles.playersAvatarWrapper}>
                            <Image style={styles.playersAvatar} source={{uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560800161/restaurant/backgrounds/louis-hansel-1160001-unsplash.jpg"}}/>
                        </View>
                        <View style={styles.playersScoreWrapper}>
                            <Text style={styles.playersScoreText}>Win: 22</Text>
                            <Text style={styles.playersScoreText}>Lost: 23</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.playButtonWrapper}>
                    {PlayButton}
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFAE6B',
      width: '100%'
    },
    counterWrapper: {
        width: '100%',
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
    playButtonWrapper: {
        flex: 4,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    playButton: {
        backgroundColor: '#FFFFFF',
        padding: 22,
        borderRadius: 50,
        width: '80%'
    },
    playButtonText: {
        color: '#FF7400',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    }
  });
  
export default PlayModal;
