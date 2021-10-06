import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { ONLINE, OFFLINE } from '../../store/actions/gamestatus';
import {connect} from 'react-redux';



class UserNav extends Component {

    state = {
        navExpanded: false,
        updateStatus: () => null
    }

    onToggleExpandHandler = () => {
        this.setState(state => {
            return {
                navExpanded: !state.navExpanded
            }
        })
    }

    onStatusChangeHandler = () => {
        this.props.statusChanged(!this.props.profile.online)
    }

    statusText = () => {
        return this.props.profile.online == 1 ? 'Offline' : 'Online';
    }

    render() {
        let dropdown = null;
        let containerBorder = 50;
        if(this.state.navExpanded) {
            containerBorder = 0;
            dropdown = (
                <View style={styles.dropdown}>
                    <View style={styles.dropdownItems}>
                        <Text style={styles.dropdownItemsText}>Points</Text>
                        <Text style={styles.dropdownItemsText}>{this.props.profile.points}</Text>
                    </View>
                    <View style={styles.dropdownItems}>
                        <Text style={styles.dropdownItemsText}>Rank</Text>
                        <Text style={styles.dropdownItemsText}>3</Text>
                    </View>
                    <View style={styles.dropdownItems}>
                        <Text style={styles.dropdownItemsText}>Wins</Text>
                        <Text style={styles.dropdownItemsText}>{this.props.profile.win}</Text>
                    </View>
                    <View style={styles.dropdownItems}>
                        <Text style={styles.dropdownItemsText}>Losts</Text>
                        <Text style={styles.dropdownItemsText}>{this.props.profile.lost}</Text>
                    </View>
                    <View style={styles.dropdownItems}>
                        <Text style={[styles.dropdownItemsText, styles.dropdownItemsTextLast]}>Online Time: 1h</Text>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity onPress={this.onStatusChangeHandler}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Go {this.statusText()}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }

        let arrowIcon = "ios-arrow-down";
        if(this.state.navExpanded) {
            arrowIcon = "ios-arrow-up";
        }
        return (
            <View style={[{ paddingTop: 20,  width: '80%', zIndex: 100}, this.props.style]}>
                <React.Fragment>
                    <View style={[styles.container]}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931309/restaurant/backgrounds/joseph-gonzalez-176749-unsplash.jpg"}}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.heading}>{this.props.profile.username}</Text>
                            <Text style={styles.subHeading}>{this.props.profile.email}</Text>
                        </View>
                        <TouchableOpacity onPress={this.onToggleExpandHandler}>
                            <Icon title="menu" name={arrowIcon} size={30} color="white"/>
                        </TouchableOpacity>
                    </View>
                    {dropdown}
                </React.Fragment>
            </View>
        )
    }
   
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: 70, 
      backgroundColor: '#007777',
      borderRadius: 50,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 20,
      zIndex: 100
    },
    imageContainer: {
        height: 52,
        width: 52,
        overflow: "hidden",
        borderRadius: 25
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    textContainer: {
        width: '70%'
    },
    heading: {
        fontSize: 20,
        color: '#ffffff'
    },
    subHeading: {
        fontSize: 10,
        color: '#ffffff'
    },
    dropdown: {
        height: 190,
        backgroundColor: '#007777',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        marginTop: -39,
        paddingTop: 39,
        zIndex: 99,
        padding: 20
    },
    dropdownItems: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dropdownItemsText: {
        color: 'white',
        paddingTop: 24,
        paddingBottom: 24
    },
    dropdownItemsTextLast: {
        textAlign: 'center',
        width: '100%'
    },
    buttonWrapper: {
        paddingTop: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        padding: 5,
        borderRadius: 2,
        width: '50%',
        backgroundColor: '#FFFFFF'
    },
    buttonText: {
        color: '#007777'
    }
  });


const mapStateToProps = state => {
    return {
        profile: state.profile,
        auth: state.auth
    }
}

const mapActionsToProps = dispatch => {
    return {
        UpdateAvatar: (image) => dispatch(UpdateAvatar(image))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(UserNav);
  
