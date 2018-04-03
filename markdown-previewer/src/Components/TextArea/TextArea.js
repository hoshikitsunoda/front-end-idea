import React, { Component } from 'react';
import marked from 'marked'

import classes from './TextArea.css'

class TextArea extends Component {
    state = {
        value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n'
    }

    textChangeHandler = () => {
        this.setState(
            {
                value: this.refs.textarea.value
            }
        );
      }
      
    markupHandler = () => {
        let markdown = marked(this.state.value);
        return {
            __html: markdown
        }
    }

    render() {
        let { value } = this.state;
        return (
            <div className={classes.Row}>
                <div className={classes.TextArea}>
                    <textarea
                        className={classes.TextField}
                        onChange={this.textChangeHandler}
                        ref="textarea"
                        defaultValue={value}></textarea>
                </div>
                <div 
                    className={classes.Output} 
                    dangerouslySetInnerHTML={this.markupHandler()}></div>
            </div>
        )
    }
}

export default TextArea