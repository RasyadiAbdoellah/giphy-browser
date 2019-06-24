import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom'

import {getGifById} from '../redux/selectors'

class Details extends React.Component{
    render(){
        return (
            <div id='detail'>
               Shows GIF Details
            </div>
        )
    }
}

function mapStateToProps(state, { match:{ params: { id } } }) {
    const gif = getGifById(state, id)
    return { gif }
}

export default connect(mapStateToProps, {  })(Details)
