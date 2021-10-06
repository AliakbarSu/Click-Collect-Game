import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import { Logout } from '../../store/actions/auth';





class LogoutScreen extends Component {

    componentDidMount = () => {
        this.props.logout()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Logging out....</Text>
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
        logout: () => dispatch(Logout())
    }
}

export default connect(mapStateToProps, mapActionsToProps)(LogoutScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });


  
