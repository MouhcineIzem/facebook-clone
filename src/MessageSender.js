import React, {useState} from 'react';
import "./messagesender.css";
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
    }

    // some clever db stuff

    /* setInput(''); */
    /* setImageUrl(''); */
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/14141789_1165740856832870_5558366138713260472_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=p4o9JDGZVXEAX9oFt2n&_nc_ht=scontent-cdg2-1.xx&oh=ef1b9b22e1621c1cb55f43805ed85777&oe=5F7A8762"/>
                <form>
                    <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="messageSender__input" placeholder="What's on your mind, Mouhcine Bannani?"/>
                    <input  
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    placeholder="Image URL (Optional)"/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
                </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
            
        </div>
    )
}

export default MessageSender
