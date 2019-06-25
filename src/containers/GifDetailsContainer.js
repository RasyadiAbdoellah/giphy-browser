import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import {getGifById} from '../redux/selectors'

export class Details extends React.Component{
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
