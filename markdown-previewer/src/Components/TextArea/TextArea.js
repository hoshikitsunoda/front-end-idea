import React, { Component } from 'react';

class TextArea extends Component {
    state = {
        value: 'test'
    }

    render() {
        return (
            <div>
                {this.state.value}
            </div>
        )
    }
}

export default TextArea