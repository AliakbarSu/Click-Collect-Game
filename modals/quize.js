import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Modal} from 'react-native'
import { connect } from 'react-redux';
import { SubmitAnswers, GiveUp } from '../store/actions/game';
import { OPEN_WON_MODAL, OPEN_LOST_MODAL } from '../store/actions/modal';


class QuizeModal extends Component {
    state = {
        currentQuestion: 0,
        selectedAnswer: {
            id: '',
            text: ''
        },
        answers: []
    }
   

    componentDidMount = () => {
        // this.setState(prevState => {
        //     return {
        //         ...prevState,
        //         currentQuestion: 
        //     }
        // })
    }

    onGiveUpHandler = () => {
        this.props.navigation.navigate('lost')
        this.props.giveUp()
    }

    componentDidUpdate = (props) => {
        if(this.props.game.currentGame.status === 'Completed') {
            if(this.props.game.currentGame.results.won) {
                this.props.openWonModal()
            }else {
                this.props.openLostModal()
            }
        }
    }


    answerSelectHandler = (answer) => {
        if(this.state.answers.length + 1 >= this.props.game.currentGame.questions.length) {
            this.props.submitAnswers([...this.state.answers, answer])
            this.props.navigation.navigate('awaiting')
            return;
        }
        this.setState(prevState => {
            return {
                ...prevState,
                currentQuestion: prevState.currentQuestion + 1,
                selectedAnswer: answer,
                answers: [...prevState.answers, answer]
            }
        })
    }

    isActive = (answerId) => {
        return answerId.toUpperCase() === this.state.selectedAnswer.id.toUpperCase();
    }

    render() {
        let answers = null;
        if (this.props.game.currentGame.questions.length) {
            answers = this.props.game.currentGame.questions[this.state.currentQuestion].answers.map(answer => {
                return (
                    <View key={answer.id} style={[styles.answerWrapper, this.isActive(answer.id) ? styles.activeAnswer : null]}>
                        <TouchableOpacity onPress={() => this.answerSelectHandler(answer)}>
                            <Text style={[styles.answerText, this.isActive(answer.id) ? styles.activeAnswer : null]}>{answer.text}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })
        }
       
        return (
            // <Modal visible={this.props.modal.status}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.questionWrapper}>
                        <Text style={styles.questionText}>{
                            this.props.game.currentGame.questions.length ?
                            this.props.game.currentGame.questions[this.state.currentQuestion].question : null}</Text>
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
            // </Modal>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        game: state.game,
        modal: state.modals.quize
    }
}

const mapActionsToProps = dispatch => {
    return {
        submitAnswers: (answers) => dispatch(SubmitAnswers(answers)),
        giveUp: () => dispatch(GiveUp()),
        openWonModal: () => dispatch({type: OPEN_WON_MODAL}),
        openLostModal: () => dispatch({type: OPEN_LOST_MODAL})
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
  
