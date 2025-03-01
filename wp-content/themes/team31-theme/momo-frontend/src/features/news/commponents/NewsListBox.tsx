/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from "@emotion/react";
import MJNewsList from "../../../components/MJNewsList";
import { useNavigate } from 'react-router-dom';

interface NewsListBoxProps {
    mjNewsList: any[];
    isLoading: boolean;
}
const NewsListBox: React.FC<NewsListBoxProps> = ({mjNewsList = [], isLoading}) => {

    const wpGenerateImage = (html) => {
        if (!html) return "https://placehold.jp/287x155.png"; // ① html が null/undefined の場合

        const match = html.match(/<img [^>]*src="([^"]+)"/);
        return match ? match[1] : "https://placehold.jp/287x155.png"; // ② match が null の場合
    }

    const navigate = useNavigate();
    const handleMovePage = (id: number) => {
        console.log('navigate');
        navigate(`/news/${id}`);
    }
    return (
        <ul css={newsListLayoutCss}>
                {mjNewsList?.map((news, index) => (
                    <li key={index}>
                        <MJNewsList skelton={isLoading} onClick={() => handleMovePage(news?.id)} title={news?.title?.rendered} date={new Date(news?.date)} imgUrl={wpGenerateImage(news?.content?.rendered)} />
                    </li>
                ))}
        </ul>
    )
}

const newsListLayoutCss = css`
    display: flex;
    flex-wrap: wrap;
    padding: 0 6px;
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
            flex: 0 0 calc(100%/2.06); /* Display 2 items per row */
        }
    }
`;

export default NewsListBox;