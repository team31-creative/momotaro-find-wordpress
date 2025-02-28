/* eslint-disable react-hooks/exhaustive-deps */
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
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
    useEffect(() => {
        const fetchData = async () => {
            if (!hasAuth) return;
            let fetchedImageLists = await wps.get('users?roles=momotaro');
            console.log(fetchedImageLists);
            setImageLists(fetchedImageLists);
            
            let news = await wps.get('news');
            if (news) {
                setMjNewsList(news);
            }
            hasAuth = false;
            setIsLoading(false);
        };
        fetchData();
    }, [user, hasAuth]);

    return (
        <>
            <div className={fullVisionCss}>
                <HomeBackground imageLists={imageLists} />
                <NewCommer />
                <MJTypography variant='h3' bold={true} align='center' className={cx(pageTitleCss)}>NEWS</MJTypography>
                <div css={newsCss}>
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

    @media screen and (max-width: 800px) {
        padding: 120px 0 80px 0;
    }
`;

const newsCss = css`
    width: 100%;
`;

const fullVisionCss = css`
    background: linear-gradient(170deg, #FFFFFF 0%, #FF3ABD 35%, #6625ff 59%);
    // #210c52 87%, #000000 100%
    width: 100%;
    margin: 0;
    padding: 0;
`;

export default IndexPageContainer;