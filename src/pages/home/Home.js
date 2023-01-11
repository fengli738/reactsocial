import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/Rightbar";
import "./Home.css";

export default function Home() {
    return (
        <>
        <Topbar/>
        <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <RightBar/>
        </div>
        </>
        
    );
}