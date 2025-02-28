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
        <div>
            <MJTypography variant='h3' bold={true} align='center' className={cx(pageTitleCss)}>NEWS</MJTypography>
            <NewsListBox mjNewsList={mjNewsList} isLoading={isLoading} />
        </div>
    );
};

const pageTitleCss = css`
    padding: 50px 0;
`;

const newsListLayoutCss = css`
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    gap: 10px;
    justify-content: start;
    max-width: 1200px;
    margin: 0 auto;
    li {
        flex: 0 0 calc(25% - 10px); /* Fixed to display 4 items per row */
        box-sizing: border-box;
    }
    list-style: none;
    @media (max-width: 600px) {
        li {
            flex: 0 0 calc(50% - 10px); /* Display 2 items per row */
        }
    }
`;

export default NewsPageContainer;