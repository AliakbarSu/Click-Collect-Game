import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert} from 'react-native';
import {connect} from 'react-redux';
import { FetchLeaderBoard } from '../../store/actions/gamestatus';




class LeaderboardScreen extends Component {
    state = {
        active: 'item3'
    }


    render() {
        return (
            <View style={styles.container}>
               
            {/* <FlatList 
                style={styles.flatlist}
                data={data.profiles.map(profile => ({...profile, key: profile.personal.username}))}
                renderItem={(info) => {
                    return (
                        <View   style={styles.wrapper}>
                            <View style={[styles.items, this.state.active === info.item.key ? styles.active : null]}>
                                <View style={styles.avatarWrapper}>
                                    <Image source={{uri: info.item.personal.avatar}} style={styles.avatar}/>
                                </View>
                                <View style={styles.detailsWrapper}>
                                    <Text style={styles.nameText}>{info.item.personal.username}</Text>
                                    <Text style={styles.pointsText}>{info.item.totalPoints} points</Text>
                                </View>
                                <View style={styles.positionWrapper}>
                                    <Text style={styles.positionText}>{info.item.gameStatus.level}</Text>
                                </View>
                            </View>
                        </View>)
                }}>
            </FlatList>) */}
                    
            </View>
        )
    }
}


const mapStateToProps = state => {
    return {
        gameStatus: state.gameStatus
    }
}

const mapActionsToProps = dispatch => {
    return {
        fetchLeaderboard: () => dispatch(FetchLeaderBoard())
    }
}

export default connect(mapStateToProps, mapActionsToProps)(LeaderboardScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    flatlist: {
        width: '100%'
    },
    wrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    }, 
    items: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '80%',
        marginTop: 10,
        padding: 12,
        borderRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#00DFDF'
    },
    avatarWrapper: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    avatar: {
        height: '100%',
        width: '100%',
        borderRadius: 40
    },
    detailsWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '40%'
    },
    nameText: {
        width: '100%',
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: "bold"   
    },
    pointsText: {
        width: '100%',
        color: '#FFFFFF'
    },
    positionWrapper: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    positionText: {
        color: '#EBFF09',
        fontSize: 40,
        fontWeight: "bold",
        textAlign: 'right'
    },
    active: {
        backgroundColor: "#FF821A"
    }
  });


  
