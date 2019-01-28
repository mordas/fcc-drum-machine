import React from 'react';
import {bankOne, bankTwo} from '../../data/data';
import displayAction from '../../action/displayAction'

class DrumButton extends React.Component {
    render () {
    return (
<div
onClick={()=>dispatch(displayAction('abc')) 
}>
<p>{this.props.keyTrigger}</p>
<audio>{this.props.url}</audio>
</div>
    )

    }
}
export default DrumButton;