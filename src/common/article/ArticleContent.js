import React from 'react';
import Radium from 'radium';
/*Styles*/
import layout from '../../../settings/layout.js';

export default class ArticleContet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                    <textarea
                        className="u-full-width "
                        type="text"
                        style={styles.contentStyles}
                        placeholder="Article Content"
                        defaultValue={this.props.content}
                        onChange={this.updateLocal}>
                    </textarea>
            </div>
        )
    }
};

var styles = {
    contentStyles: {
        display: 'block',
        height: '100%',
        padding: layout.padding5,
        minHeight: 200
    },
};
