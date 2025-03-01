import React, {useEffect, useState} from 'react';
import MJTypography from '../../components/MJTypography';
import { css, cx } from '@emotion/css';
import WPSupporter from '../../commons/wpSupporter';
import NewsListBox from './commponents/NewsListBox';

const NewsPageContainer: React.FC = () => {
    const wps = WPSupporter();
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
    const getNews = async () => {
        const news = await wps.get('news');
        console.log(news);
        setMjNewsList(news);
        setIsLoading(false);
    }
    useEffect(() => {
        getNews();
    },[]);
    return (
        <div className={cx(newsListLayoutCss)}>
            <MJTypography variant='h3' bold={true} align='center' className={cx(pageTitleCss)}>NEWS</MJTypography>
            <NewsListBox mjNewsList={mjNewsList} isLoading={isLoading} />
        </div>
    );
};

const pageTitleCss = css`
    padding: 50px 0;
`;

const newsListLayoutCss = css`
    min-height: 100vh;
    height: auto;
    > .MuiTypography-root {
        color: #000000;
    }
`;

export default NewsPageContainer;