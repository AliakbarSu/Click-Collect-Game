import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'
import NavButonControll from '../../../../screens/services/navButtonsConroller'
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'

class WonModal extends Component {
    constructor(props){
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = (event) => {
        NavButonControll(event, this.props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.iconWrapper}>
                        <View style={styles.iconGreenBorder}>
                            <View style={styles.icon}>
                                <Icon name="md-checkmark" color="#00EF00" size={100}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.congratulationWrapper}>
                        <Text style={styles.congratulationText}>Congratulations!</Text>
                    </View>
                    <View style={styles.addedPointsWrapper}>
                        <Text style={styles.addedPoints}>{this.props.game.currentGame.results.points}</Text>
                    </View>
                    <View style={styles.addedPointsTextWrapper}>
                        <Text style={styles.addedPointsText}>Points Were added</Text>
                    </View>
                </View>
            </View>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(WonModal);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    wrapper: {
        height: '55%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    iconWrapper: {
        flex: 7,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    },
    iconGreenBorder: {
        width: 160,
        height: 160,
        borderRadius: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#00EF00'
    },
    icon: {
        height: '85%',
        width: '85%',
        borderRadius: 80,
        borderWidth: 10,
        borderColor: '#00EF00',
        justifyContent: 'center',
        alignItems: 'center'
    },
    congratulationWrapper: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    congratulationText: {
        color: '#00EF00',
        fontSize: 30
    },
    addedPointsWrapper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addedPoints: {
        color: '#FB7200',
        fontSize: 40
    },
    addedPointsTextWrapper: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addedPointsText: {
        color: '#00EF00',
        fontSize: 30
    }
  });
  

