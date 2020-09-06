import React from 'react';
import "./post.css";
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>timestamp...</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
                <div className="post__image">
                <img src={image} alt=""/>
                </div>
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    )
}

export default Post
