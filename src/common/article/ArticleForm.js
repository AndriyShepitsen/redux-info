import React from 'react';
import Radium from 'radium';
/*App Components*/
import ArticleTitle from './ArticleTitle';
import ArticleContent from './ArticleContent';
import UploadPictures from './UploadPictures';
import AddVideo from './AddVideo';
import Button from '../components/buttons/Button.js';
/*Styles*/
import typography from '../../../settings/typography.js';


class ArticleForm extends React.Component {
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
                    <Button size="md">Submit</Button>
                    <ArticleTitle/>
                    <ArticleContent/>
                    <UploadPictures/>
                    <AddVideo/>
                </form>
            </div>
        )
    }
}
;

export default Radium(ArticleForm);
