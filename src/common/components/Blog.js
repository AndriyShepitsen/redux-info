import React, { Component } from 'react';
import Radium from 'radium';
import Button from './buttons/Button.js';

@Radium
export default class Blog extends Component {

    render() {
        return (
            <div className="posts">

                <Button size="sm" kind="primary">+ Article</Button>

                <h1 className="post-title">Blog</h1>
            </div>

        );
    }
}

