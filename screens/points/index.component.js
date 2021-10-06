import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux';
import { SendPoints } from '../../store/actions/points';


class PointsScreen extends Component {
    constructor(props) {
        super(props)
    }

    onRedeemHandler = () => {
        this.props.navigation.navigate({routeName: 'Redeem'})
    }

    onPointSendHandler = () => {
        this.props.navigation.navigate({routeName: 'SendPoints'})
    }

    onBuyPointsHandler = () => {
        this.props.navigation.navigate({routeName: 'BuyPoints'})
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <View style={styles.wrapper}>
                    <View style={styles.pointsWrapper}>
                        <Text style={styles.pointsText}>{data.profile.totalPoints}</Text>
                        <Text style={styles.labels}>points</Text>
                    </View>
                    <View style={styles.valueWrapper}>
                        <Text style={styles.valueText}>$300</Text>
                        <Text style={styles.labels}>nzd</Text>
                    </View>
                    <View style={styles.buttonsWrapper}>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity onPress={this.onRedeemHandler}>
                                <Text style={styles.buttonText}>Redeem</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.buttonWrapper, styles.buttonWrapperBlue]}>
                            <TouchableOpacity onPress={this.onPointSendHandler}>
                                <Text style={styles.buttonText}>Send</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.buttonWrapper, styles.buttonWrapperGreen]}>
                            <TouchableOpacity onPress={this.onBuyPointsHandler}>
                                <Text style={styles.buttonText}>Buy More Points</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> */}
            </View>)
    }
    
}

const mapStateToProps = state => {
    return {
        profile: state.profile,
        auth: state.auth
    }
}

const mapActionsToProps = dispatch => {
    return {
        sendPoints: (username, points) => dispatch(SendPoints(username, points))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(PointsScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    wrapper: {
        height: '90%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    pointsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        paddingTop: 20,
        paddingBottom: 20,
        borderTopWidth: 1,
        borderTopColor: '#E8E8E8',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    pointsText: {
        color: '#A8A8A8',
        textAlign: 'center',
        fontSize: 65
    },
    valueWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        paddingTop: 20,
        paddingBottom: 20,
        borderTopWidth: 1,
        borderTopColor: '#E8E8E8',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    valueText: {
        color: '#A8A8A8',
        textAlign: 'center',
        fontSize: 65
    },
    labels: {
        fontSize: 20,
        color: '#A8A8A8',
        textAlign: 'center',
        textTransform: 'uppercase'
    },  
    buttonsWrapper: {
        height: '50%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    buttonWrapper: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF821A'
    },
    buttonText: {
        fontSize: 25,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    buttonWrapperBlue: {
        backgroundColor: '#00DFDF'
    },
    buttonWrapperGreen: {
        backgroundColor: '#00EF00'
    }
  });
  

