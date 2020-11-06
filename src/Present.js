import React from 'react'
import './Present.css'
import virus from './imgs/1-removebg-preview.png'
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';

function Present() {
    return (
        <div className="present">
            <div className="present_img">
                <img src={ virus } alt="virus"/>
            </div>
            <div className="present_para">
                <h1>Covid-19 Corona Self Diagnosis</h1>
                <p>loremIrure Lorem ullamco ad culpa magna exercitation. Id velit in duis et pariatur sunt magna consectetur Lorem consequat. Excepteur laboris id deserunt adipisicing irure voluptate commodo nulla Lorem.</p>
                <div className="present_btn">
                    <div className="btn">
                        <PlayArrowOutlinedIcon />
                    </div>
                    <p>Play Video</p>
                </div>
            </div>
        </div>
    )
}

export default Present
