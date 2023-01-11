import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/Rightbar";
import "./profile.css";

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                        <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                        <img src="assets/person/1.jpeg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Demo User</h4>
                            <span className="profileInfoDesc">Hello this is Demo User!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightBar profile/>
                    </div>
                </div>
            </div>
        </>
    );
}