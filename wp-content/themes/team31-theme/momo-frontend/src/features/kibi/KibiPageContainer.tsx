import { css } from "@emotion/css";
import React from "react";
import DecisionButton from "./components/DecisionButton";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MatchingList from "./components/MatchingList";

const KibiPageContainer: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;
    const extractSegment = currentPath.split("/kibi/")[1]?.split("/")[0] || "";

    const mockData = [
        {
            id: "1",
            name: "イエロー ミニオン",
            icon: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Description for Matching 1",
        },
        {
            id: "2",
            name: "シベハスキー",
            icon: "https://plus.unsplash.com/premium_photo-1666229410352-c4686b71cea2?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Description for Matching 2",
        },
        {
            id: "3",
            name: "猿猿",
            icon: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Description for Matching 3",
        },
    ];
    return (
        <div className={fullSizeCss}>
            <DecisionButton 
                onClick1={() => navigate('/kibi/guest')} 
                onClick2={() => navigate('/kibi/mine')} 
                onClick3={() => console.log('足あと')}
                constants={extractSegment} 
            />
            <MatchingList dataList={mockData} onLink={(name) => console.log(name)} />
        </div>
    )
}

const fullSizeCss = css`
    min-width: 200px;
    min-height: 94vh;
    height: auto;
    margin: 0;
`

export default KibiPageContainer;