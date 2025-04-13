import { css,cx } from "@emotion/css";
import React from "react";
import DecisionButton from "./components/DecisionButton";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MatchingList from "./components/MatchingList";
import MJTypography from "../../components/MJTypography";
import { Tracking } from "../../commons/commponents/Tracking";
import { useUser } from "../../context/UserContext";
import WPSupporter from "../../commons/wpSupporter";

const KibiPageContainer: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useUser();
    const role = user?.roles[0];
    const wps = WPSupporter(Boolean(role === 'administrator'));
    const currentPath = location.pathname;
    const extractSegment = currentPath.split("/kibi/")[1]?.split("/")[0] || "";
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState([]);
    const route = currentPath.split("/")[2] || "";

    React.useEffect(() => {
        const handleProcess = async () => {
            setData([]);
            console.log("request!!");
            if (route === "guest") {
                const apiData = await wps.get('kibidango/now_requests');
                setData(apiData);
                return;
            }
            if (route === "mine") {
                const apiData = await wps.get('kibidango/now_requests_mine');
                setData(apiData);
                return;
            }
        };
        handleProcess();
    }, []);
    
    return (
        <div className={fullSizeCss}>
            <DecisionButton 
                onClick1={() => navigate('/kibi/guest')} 
                onClick2={() => navigate('/kibi/mine')} 
                onClick3={() => setOpen(true)}
                constants={extractSegment} 
            />
            <MatchingList dataList={data} onLink={(name) => console.log(name)} />
            <Tracking open={open} onClose={() => setOpen(false)} />
        </div>
    )
}

const fullSizeCss = css`
    min-width: 200px;
    min-height: 94vh;
    height: auto;
    margin: 0;
`;
export default KibiPageContainer;