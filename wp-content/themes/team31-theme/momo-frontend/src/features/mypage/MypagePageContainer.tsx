// Auto-generated file
import React, { useEffect } from 'react';
import { css } from '@emotion/css';
import CoverProfile from './components/CoverProfile';
import CoverButton from './components/CoverButton';
import { useUser } from '../../context/UserContext';

const MypagePageContainer: React.FC = () => {
    const { user } = useUser();
    
    useEffect(() => {
        console.log(user);
    }, [user])
    return <>
        <div className={fullSizeCss}>
            <CoverProfile id={user?.id} name={user?.name} old={user?.old} />
            <CoverButton />
        </div>
    </>;
};

const fullSizeCss = css`
    min-width: 200px;
    min-height: 94vh;
    height: auto;
    margin: 0;
    padding-top: 50px;

    @media (max-width: 500px) {
        padding-top: 30px;
    }
`;

export default MypagePageContainer;
