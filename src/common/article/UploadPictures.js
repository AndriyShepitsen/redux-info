import React from 'react';
import Radium from 'radium';

export default class UploadPictures extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="">
                <p>
                    <label htmlFor="picturesUpload">Upload Pictures</label>
                </p>
                <p>
                    <input
                        name="picturesUpload"
                        label="File input"
                        type="file"/>
                </p>
            </div>
        )
    }
};

