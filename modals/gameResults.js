import React, {Component} from 'react';
import { connect } from 'react-redux';

import RequestModal from './request';
import WonModal from './won';
import LostModal from './lost';
import PlayModal from './play';
import QuizeModal from './quize';
import LoadingModal from './loading';
import AwaitingResults from './awaitingResult';



class ModalSetup extends Component {

    render() {
        return <React.Fragment>
                    {this.props.modals.won.status ? <WonModal {...this.props}/> : null}
                    {this.props.modals.lost.status ? <LostModal {...this.props}/> : null}
                </React.Fragment>
    }

}





const mapStateToProps = state => {
    return {
        modals: state.modals
    }
}

const mapActionsToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapActionsToProps)(ModalSetup)

