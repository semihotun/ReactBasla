import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {increaseCounter} from '../redux/actions/counterActions';

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{this.props.dispatch(increaseCounter())}}>Arttır</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {action:bindActionCreators(increaseCounter,dispatch)}
}
export default connect(mapDispatchToProps)(IncreaseCounter);