/** @jsxImportSource @emotion/react */
import React, { useState, useMemo } from 'react';
import { cx,css } from '@emotion/css';
import HomeBackground from './commponents/HomeBackground';
import { ImageListTypes } from './types/ImageListTypes';
import { useUser } from '../../context/UserContext';
import WPSupporter from '../../commons/wpSupporter';
import NewCommer from './commponents/NewCommer';
import NewsListBox from '../news/commponents/NewsListBox';
import MJTypography from '../../components/MJTypography';

const IndexPageContainer: React.FC = () => {
    const [mjNewsList, setMjNewsList] = useState<any[]>([
            {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
            {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
            {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
            {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
            {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
            {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
            {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
            {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
            {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
            {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
            {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
            {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
            {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
            {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
            {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
            {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true}
        ]);
    const [isLoading, setIsLoading] = useState(true);
    const userContext = useUser();
    if (!userContext) {
        return null; // or handle the null case appropriately
    }
    const { user } = userContext;
    const role = user?.roles[0];
    const wps = WPSupporter(Boolean(role === 'administrator'));
    
    
    // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/rules-of-hooks
    const [imageLists, setImageLists] = useState<ImageListTypes[]>([]);
    let hasAuth = wps.responseHasAuth();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMemo(async () => {
        if (!hasAuth) return;
        let fetchedImageLists = await wps.get('users?roles=momotaro');
        console.log(fetchedImageLists);
        setImageLists(fetchedImageLists);
        
        let news = await wps.get('news');
        console.log(news);
        setMjNewsList(news);
        setIsLoading(false);
    }, [user, hasAuth]);

    return (
        <>
            <div className={fullVisionCss}>
                <HomeBackground imageLists={imageLists} />
                <NewCommer />
                <MJTypography variant='h3' bold={true} align='center' className={cx(pageTitleCss)}>NEWS</MJTypography>
                <div css={css`width: 100%;`}>
                    <NewsListBox isLoading={isLoading} mjNewsList={mjNewsList} />
                </div>
                <div className={css`height:30vh;`}></div>
            </div>
        </>
    );
};

const pageTitleCss = css`
    padding: 50px 0;
    color: white;
`;

const fullVisionCss = css`
    background: linear-gradient(170deg, #FFFFFF 0%, #FF3ABD 35%, #6625ff 59%);
    // #210c52 87%, #000000 100%
    width: 100%;
    margin: 0;
    padding: 0;
`;

export default IndexPageContainer;