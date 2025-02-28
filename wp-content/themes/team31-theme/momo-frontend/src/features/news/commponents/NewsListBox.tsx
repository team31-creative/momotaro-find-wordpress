/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MJNewsList from "../../../components/MJNewsList";

interface NewsListBoxProps {
    mjNewsList: any[];
    isLoading: boolean;
}
const NewsListBox: React.FC<NewsListBoxProps> = ({mjNewsList, isLoading}) => {

    const wpGenerateImage = (html) => {
        return html.match(/<img [^>]*src="([^"]+)"/)[1];
    }
    return (
        <ul css={newsListLayoutCss}>
                {mjNewsList?.map((news, index) => (
                    <li key={index}>
                        <MJNewsList skelton={isLoading} title={news?.title?.rendered} date={new Date(news?.date)} imgUrl={wpGenerateImage(news?.content?.rendered)} />
                    </li>
                ))}
        </ul>
    )
}

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

export default NewsListBox;