/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { css, cx } from '@emotion/css';
import WPSupporter from '../../commons/wpSupporter';
import { useUser } from '../../context/UserContext';
import NewsTitle from './components/NewsTitle';
import NewsDescription from './components/NewsDescription';

interface WPTitleData {
    title: string;
    date: Date;
}

const NewsListPageContainer: React.FC = () => {
    const [titleData, setTitleData] = useState<WPTitleData>({title: '', date: undefined});
    const [descriptionData, setDescriptionData] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const userContext = useUser();
    if (!userContext) {
            return null; // or handle the null case appropriately
    }
    const { user } = userContext;
    const role = user?.roles[0];
    const wps = WPSupporter(role === 'administrator');

    useEffect(() => {
        const fetchData = async () => {
            let news = await wps.get(`news/${id}`);
            setTitleData({title: news.title.rendered, date: news.date});
            setDescriptionData(news.content.rendered);
            setIsLoading(false);
        };
        fetchData();
    }, []);
    return (
        <div className={cx(newsListLayoutCss)}>
            <NewsTitle title={titleData.title} isLoading={isLoading} date={titleData.date} />
            <NewsDescription description={descriptionData} />
        </div>
    );
};

const pageTitleCss = css`
    padding: 50px 0;
`;

const newsListLayoutCss = css`
    max-width: 700px;
    margin: 0 auto;
    padding: 4em 0 0 0;
    min-height: 100vh;
    height: auto;
    > .MuiTypography-root {
        color: #000000;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export default NewsListPageContainer;

function setTitle(arg0: { title: any; date: any; }) {
    throw new Error('Function not implemented.');
}
