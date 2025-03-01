/** @jsxImportSource @emotion/react */
import React, { createContext, useState, useEffect, useContext } from "react";
import { css } from "@emotion/react";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import MJTypography from "../components/MJTypography";

interface LayoutContextType {
    user: any;
    loading: boolean;
}

// LayoutContext を作成
const LayoutContext = createContext<LayoutContextType | null>(null);

export const LayoutProvider = ({ children }) => {

    const [splashScreen, setSplashScreen] = useState(true);
    const [shouldRender, setShouldRender] = useState(true); // 実際に描画するか
    const [message, setMessage] = useState("Loading...");
    const [percentage, setPercentage] = useState(0);

    const handleProcess = (currentPercentage: number, msg: string) => {
        setMessage(msg);
        if (percentage + currentPercentage >= 100) {
            setTimeout(() => {
                setSplashScreen(false);
                setTimeout(() => setShouldRender(false), 500); // 0.5秒後に完全削除
            }, 500);
        };
        setPercentage(prevPercentage => prevPercentage + currentPercentage);
    }
    return (
        <LayoutContext.Provider value={{ handleProcess }}>
            {shouldRender && 
                <div css={whiteSplashScreenCss(splashScreen)}>
                    <img src="/FIND_MOMOTARO.svg" alt="loading" />
                    <svg width={0} height={0}>
                        <defs>
                            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ff3385" />
                                <stop offset="100%" stopColor="#ff3385" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
                    <MJTypography variant="h6" align="center" style={{marginTop: "50px"}}>{message}</MJTypography>
                </div>
            }
            {children}
        </LayoutContext.Provider>
    );
};

const whiteSplashScreenCss = (splashScreen: boolean) => css`
    background: #fff;
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Ensure it's on top */
    touch-action: none; /* Prevent touch scrolling */
    overscroll-behavior: contain; /* Prevent overscroll */
    flex-direction: column;

    transition: opacity 0.5s ease-in-out;
    opacity: ${splashScreen ? 1 : 0};
    pointer-events: ${splashScreen ? 'auto' : 'none'};

    > img {
        width: 500px;
    }
`;

// Context を簡単に使えるようにするカスタムフック
export const useLayout = () => useContext(LayoutContext);