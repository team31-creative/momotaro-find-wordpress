/** @jsxImportSource @emotion/react */
import React, { useState, useMemo } from 'react';
import { css } from '@emotion/css';
import HomeBackground from './commponents/HomeBackground';
import { ImageListTypes } from './types/ImageListTypes';
import { useUser } from '../../context/UserContext';
import WPSupporter from '../../commons/wpSupporter';

const IndexPageContainer: React.FC = () => {
    const userContext = useUser();
    if (!userContext) {
        return null; // or handle the null case appropriately
    }
    const { user } = userContext;
    const wps = WPSupporter();
    
    
    // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/rules-of-hooks
    const [imageLists, setImageLists] = useState<ImageListTypes[]>([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMemo(async () => {
        console.log("User:", user);
        const role = user?.roles[0];
        const fetchedImageLists = await wps.get('users?roles=momotaro', { role });
        setImageLists(fetchedImageLists);
    }, []);

    return (
        <>
            <div className={fullVisionCss}>
                <HomeBackground imageLists={imageLists} />
            </div>
        </>
    );
};

const fullVisionCss = css`
    width: 100%;
    margin: 0;
    padding: 0;
`;

export default IndexPageContainer;