import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; //変更お願いします
import MJTypography from '../../components/MJTypography';
import { css } from '@emotion/css';
import WPSupporter from '../../commons/wpSupporter';

const NewsDetail: React.FC = () => {
    const { news_id } = useParams();
    const wps = WPSupporter();
    const [newsDetail, setNewsDetail] = useState<any>(null);

    const [isLoading, setIsLoading] = useState(true);

    const getNewsDetail = async () => {
        const news = await wps.get(`news/${news_id}`);
        console.log(news);
        setNewsDetail(news);
        setIsLoading(false);
    };

    useEffect(() => {
        if (news_id) {
            getNewsDetail();
        }
    }, [news_id]);

    const wpGenerateImage = (html: string) => {
        const match = html.match(/<img [^>]*src="([^"]+)"/);
        return match ? match[1] : '';
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!newsDetail) {
        return <div>ニュースが見つかりませんでした。</div>;
    }

    return (
        <main className={mainCss}>
            <section className={newsSectionCss}>
                <div className="l_contents">
                    <div className="l_container-sm">
                        <div className={newsSectionImgWrapperCss}>
                            <img
                                src={wpGenerateImage(newsDetail.content.rendered)}
                                width="1534"
                                height="880"
                                alt={newsDetail.title.rendered}
                                className="news_section_img"
                            />
                        </div>
                        <h2 className={newsSectionTitleCss}>{newsDetail.title.rendered}</h2>
                        <div className={newsSectionMetaCss}>
                            <time dateTime={newsDetail.date} className="news_section_meta-date">
                                {new Date(newsDetail.date).toLocaleDateString()}
                            </time>
                        </div>
                        <p className={newsSectionTxtCss} dangerouslySetInnerHTML={{ __html: newsDetail.content.rendered }} />
                    </div>
                </div>
            </section>
        </main>
    );
};


const newsSectionTitleCss = css`
    font-size: 20px;
    font-weight: bold;
    position: relative;

    @media screen and (min-width: 768px) {
        font-size: 28px;
    }
`;

const newsSectionMetaCss = css`
    margin-top: 16px;
    text-align: right;
`;

const newsSectionImgWrapperCss = css`
    margin-top: 32px;
    margin-bottom: 32px;
`;

const newsSectionTxtCss = css`
    margin-top: 32px;
`;

const mainCss = css`
    padding: 20px;
`;

const newsSectionCss = css`
    max-width: 800px;
    margin: auto;
`;

const globalCss = css`
    :root {
        --content-width-sm: 720px;
    }

    body {
        color: #000;
        font-size: 16px;
        font-family: "Noto Sans JP", sans-serif;
        line-height: 1.8;
        letter-spacing: 0.1em;
    }

    .l_container-sm{
        width: 100%;
        padding: 0 16px;
        margin: 0 auto;
        max-width: calc(var(--content-width-sm) + 32px);
    }

    .l_contents {
        padding: 120px 0;
    }
`;

export default NewsDetail;