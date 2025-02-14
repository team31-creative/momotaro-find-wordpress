import React, {useEffect, useState} from 'react';
import MJTypography from '../../components/MJTypography';
import { css, cx } from '@emotion/css';
import MJNewsList from '../../components/MJNewsList';
import WPSupporter from '../../commons/wpSupporter';

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

    const wpGenerateImage = (html) => {
        return html.match(/<img [^>]*src="([^"]+)"/)[1];
    }
    useEffect(() => {
        getNews();
    });
    return (
        <div>
            <MJTypography variant='h3' bold={true} align='center' className={cx(pageTitleCss)}>NEWS</MJTypography>
            <ul className={newsListLayoutCss}>
                {mjNewsList.map((news, index) => (
                    <li key={index}>
                        <MJNewsList skelton={isLoading} title={news.title.rendered} date={new Date(news.date)} imgUrl={wpGenerateImage(news.content.rendered)} />
                    </li>
                ))}
            </ul>
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