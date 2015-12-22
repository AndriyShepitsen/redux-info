import React from 'react';
import Radium from 'radium';
/*App Components*/
import ArticleTitle from './ArticleTitle';
import ArticleContent from './ArticleContent';
import UploadPictures from './UploadPictures';
import AddVideo from './AddVideo';
import Button from '../components/buttons/Button';
/*Styles*/
import typography from '../../../settings/typography.js';

export default class ArticleForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="ArticleForm">
                <Radium.Style
                    scopeSelector="#ArticleForm"
                    rules={{
                textarea:{fontFamily:typography.fontFamilyComic},
                }}/>
                <h2>New Article</h2>
                <form >
                    <Button size="m" kind="primary">Submit</Button>
                    <ArticleTitle/>
                    <ArticleContent/>
                    <UploadPictures/>
                    <AddVideo/>
                </form>
            </div>
        )
    }
};
