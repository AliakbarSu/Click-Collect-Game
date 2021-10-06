import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Modal} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import DefaultButton from '../components/button/index.component';
import { CloseAllModals, ResetGame } from '../store/actions/game';


class LostModal extends Component {

   
    onCloseHandler = () => {
        this.props.closeModal()
        this.props.navigation.navigate('Main')
    }

    render() {
        return (
            // <Modal visible={this.props.modal.status}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.iconWrapper}>
                        <View style={styles.iconRedBorder}>
                            <View style={styles.icon}>
                                <Icon name="md-close" color="#FF0000" size={100}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.disappointmentWrapper}>
                        <Text style={styles.disappointmentText}>Better luck next time!</Text>
                    </View>
                    <View style={styles.lostPointsWrapper}>
                        <Text style={styles.lostPoints}>{this.props.game.currentGame.results.points}</Text>
                    </View>
                    <View style={styles.lostPointsTextWrapper}>
                        <Text style={styles.lostPointsText}>Points Were removed</Text>
                    </View>
                    <View style={styles.ButtonWrapper}>
                        <DefaultButton style={styles.Button} onPress={this.onCloseHandler}>Close</DefaultButton>
                    </View>
                </View>
            </View>
            // </Modal>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        game: state.game,
        modal: state.modals.lost
    }
}

const mapActionsToProps = dispatch => {
    return {
        closeModal: () => dispatch(ResetGame())
    }
}

export default connect(mapStateToProps, mapActionsToProps)(LostModal);

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
    iconRedBorder: {
        width: 160,
        height: 160,
        borderRadius: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#FF0000'
    },
    icon: {
        height: '85%',
        width: '85%',
        borderRadius: 80,
        borderWidth: 10,
        borderColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    disappointmentWrapper: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    disappointmentText: {
        color: '#FB7200',
        fontSize: 30
    },
    lostPointsWrapper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lostPoints: {
        color: '#FF0000',
        fontSize: 40
    },
    lostPointsTextWrapper: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lostPointsText: {
        color: '#FB7200',
        fontSize: 30
    }
  });
  

