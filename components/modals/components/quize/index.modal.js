import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import NavButonControll from '../../../../screens/services/navButtonsConroller'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
import { SubmitAnswers } from '../../../../services/store/actions/game';
import { OpenWonModal, OpenLostModal } from '../../../../screens/services/modals';

class QuizeModal extends Component {
    state = {
        currentQuestion: {
            question: '',
            answers: []
        },
        selectedAnswer: {
            id: '',
            text: ''
        },
        answers: []
    }
    constructor(props){
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    componentDidMount = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                currentQuestion: this.props.game.currentGame.questions[0]
            }
        })

    }

    componentDidUpdate = (props) => {
        if(this.props.game.currentGame.status === 'Completed') {
            if(this.props.game.currentGame.results.won) {
                OpenWonModal(this.props)
            }else {
                OpenLostModal(this.props)
            }
        }
    }

    onNavigatorEvent = (event) => {
        NavButonControll(event, this.props)
    }

    answerSelectHandler = (answer) => {
        if(this.state.answers.length + 1 >= this.props.game.currentGame.questions.length) {
            alert('Game is over')
            this.props.submitAnswers([...this.state.answers, answer])
            return;
        }
        this.setState(prevState => {
            return {
                ...prevState,
                currentQuestion: this.props.game.currentGame.questions[prevState.answers.length + 1],
                selectedAnswer: answer,
                answers: [...prevState.answers, answer]
            }
        })
    }

    isActive = (answerId) => {
        return answerId.toUpperCase() === this.state.selectedAnswer.id.toUpperCase();
    }

    render() {
        const answers = this.state.currentQuestion.answers.map(answer => {
            return (
                <View key={answer.id} style={[styles.answerWrapper, this.isActive(answer.id) ? styles.activeAnswer : null]}>
                    <TouchableOpacity onPress={() => this.answerSelectHandler(answer)}>
                        <Text style={[styles.answerText, this.isActive(answer.id) ? styles.activeAnswer : null]}>{answer.answer}</Text>
                    </TouchableOpacity>
                </View>
            )
        })
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.questionWrapper}>
                        <Text style={styles.questionText}>{this.state.currentQuestion.question}</Text>
                    </View>
                    <View style={styles.answersWrapper}>
                       {answers}
                    </View>
                    <View style={styles.scoreWrapper}>
                        <View style={styles.scoreItems}>
                            <Text style={styles.scoreText}>Correct: 4</Text>
                        </View>
                        <View style={styles.scoreItems}>
                            <Text style={[styles.scoreText, styles.scoreTextWrong]}>Wrong: 3</Text>
                        </View>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <View style={styles.buttonComponent}>
                            <TouchableOpacity onPress={this.onGiveUpHandler}>
                                <Text style={styles.buttonText}>Give Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.counterWrapper}>
                        <Text style={styles.counterText}>{this.state.answers.length + 1} of {this.props.game.currentGame.questions.length}</Text>
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

const mapActionsToProps = dispatch => {
    return {
        submitAnswers: (answers) => dispatch(SubmitAnswers(answers))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(QuizeModal);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    wrapper: {
        width: '80%'
    },
    questionWrapper: {
        paddingBottom: 40
    },
    questionText: {
        color: '#A8A8A8',
        fontSize: 25,
        fontWeight: 'bold'
    },
    answersWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: "#E8E8E8",
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden'
    },
    answerWrapper: {
        width: '100%',
        padding: 18
    },
    answerText: {
        color: '#A8A8A8',
        fontSize: 17
    },
    activeAnswer: {
        backgroundColor: '#1AFD1A',
        color: '#FFFFFF'
    },
    scoreWrapper: {
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    scoreItems: {
        width: '50%',
        alignItems: 'center'
    },
    scoreText: {
        fontSize: 20,
        color: '#1AFD1A',
        textAlign: 'center'
    },
    scoreTextWrong: {
        color: '#FF0000'
    },
    buttonWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
    },
    buttonComponent: {
        padding: 12,
        borderRadius: 50,
        width: '80%',
        backgroundColor: '#FB7200',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    counterWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40
    },
    counterText: {
        color: '#00DFDF',
        fontSize: 20,
        fontWeight: 'bold'
    }
  });
  
