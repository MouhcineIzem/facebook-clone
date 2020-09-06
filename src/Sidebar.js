import React from 'react';
import "./sidebar.css";
import SidebarRow from "./SidebarRow";
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ChatIcon from '@material-ui/icons/Chat';
import PeopleIcon from '@material-ui/icons/People';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';



function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="boy.png" title="Mouhcine Bannani" />
            <SidebarRow Icon={LocalHospitalIcon} title="Covide-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="MarketPlace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Markctplace"/>
        </div>
    )
}

export default Sidebar
