/* eslint-disable react-hooks/exhaustive-deps */
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { cx,css } from '@emotion/css';
import HomeBackground from './commponents/HomeBackground';
import { ImageListTypes } from './types/ImageListTypes';
import { useUser } from '../../context/UserContext';
import WPSupporter from '../../commons/wpSupporter';
import NewsListBox from '../news/commponents/NewsListBox';
import MJTypography from '../../components/MJTypography';
import BlogListBox from '../blog/components/BlogListBox';
import { useLayout } from '../../context/LayoutContext';

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

    const [mjBlogs, setMjBlogs] = useState<any[]>([
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
    ]);

    const { handleProcess } = useLayout();
    const [isLoading, setIsLoading] = useState(true);
    const [imageLists, setImageLists] = useState<ImageListTypes[]>([]);
    const userContext = useUser();
    if (!userContext) {
        return null; // or handle the null case appropriately
    }
    const { user } = userContext;
    const role = user?.roles[0];
    const wps = WPSupporter(Boolean(role === 'administrator'));
    
    let hasAuth = wps.responseHasAuth();


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchData = async () => {
            if (!hasAuth) return;

            handleProcess(0,"トップ画像を読み込んでいます。");

            // 1
            let fetchedImageLists = await wps.get('users?roles=momotaro&_field=id,simple_local_avatar,name');
            setImageLists(fetchedImageLists);

            handleProcess((100/3),"ニュースを読み込んでいます。");
            
            // 2
            let news = await wps.get('news?per_page=16');   
            if (news) {
                setMjNewsList(news);
            }

            handleProcess((100/3),"ブログを読み込んでいます。");

            // 3
            let blog = await wps.get('blog?per_page=24&_embed');
            if (blog) {
                setMjBlogs(blog);
            }

            handleProcess((101),"まもなく表示されます。　");

            hasAuth = false;
            setIsLoading(false);
        };
        fetchData();
    }, [user, hasAuth]);

    return (
        <>
            <div className={fullVisionCss}>
                <HomeBackground imageLists={imageLists} />
                <MJTypography variant='h3' bold={true} align='center' className={cx(pageTitleNewsCss)}>NEWS</MJTypography>
                <div css={newsCss}>
                    <NewsListBox isLoading={isLoading} mjNewsList={mjNewsList} />
                </div>
                <MJTypography variant='h3' bold={true} align='center' className={cx(pageTitleBlogCss)}>BLOG</MJTypography>
                <div css={blogCss}>
                    <BlogListBox isLoading={isLoading} mjBlogs={mjBlogs} />
                </div>
                <div className={css`height:30vh;`}></div>
            </div>
        </>
    );
};

const pageTitleNewsCss = css`
    padding: 50px 0;
    color: white;

    @media screen and (max-width: 800px) {
        padding: 120px 0 80px 0;
    }
`;

const pageTitleBlogCss = css`
    padding: 4em 0 50px 0;
    color: white;

    @media screen and (max-width: 800px) {
        padding: 120px 0 80px 0;
    }
`;

const newsCss = css`
    width: 100%;
    padding: 15vh 0;
`;

const blogCss = css`
    width: 100%;
`;

const fullVisionCss = css`
    background: linear-gradient(170deg, #000000 0%, #000055 35%, #aa0088 80%);
    // #210c52 87%, #000000 100%
    width: 100%;
    margin: 0;
    padding: 0;
`;

export default IndexPageContainer;