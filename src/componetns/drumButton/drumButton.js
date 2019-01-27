import React from 'react';
import {bankOne, bankTwo} from '../../data/data';

class DrumButton extends React.Component {
    render () {
    return (
<div>
<p>{this.props.keyTrigger}</p>
<audio></audio>
</div>
    )

    }
}
export default DrumButton;