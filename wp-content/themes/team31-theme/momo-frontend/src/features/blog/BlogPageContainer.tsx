import React, { useEffect, useState } from 'react';
import MJTypography from '../../components/MJTypography';
import { css, cx } from '@emotion/css';
import WPSupporter from '../../commons/wpSupporter';
import MJBlogList from '../../components/MJBlogList';

const pageTitleCss = css`
    padding: 50px 0;
`;

const blogListLayoutCss = css`
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

const BlogPageContainer: React.FC = () => {
    const wps = WPSupporter();
    const [mjBlogs, setMjBlogs] = useState<any[]>([
        {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
        {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
        {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true},
        {title: {rendered: ''}, date: undefined, content: {rendered: '<img src="https://placehold.jp/287x155.png">'}, skelton: true}
    ]);
    const [isLoading, setIsLoading] = useState(true);
    const getBlogs = async () => {
        const blogs = await wps.get('blog', 'author');
        console.log(blogs);
        setMjBlogs(blogs);
        setIsLoading(false);
    }

    const wpGenerateImage = (html) => {
        return html.match(/<img [^>]*src="([^"]+)"/)[1];
    }
    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <div>
            <MJTypography variant='h3' bold={true} align='center' className={pageTitleCss}>BLOG</MJTypography>
            <ul className={blogListLayoutCss}>
                {mjBlogs.map((blog, index) => (
                    <li key={index}>
                        <MJBlogList userName={blog?.author?.name ?? ''} skelton={isLoading} title={blog.title.rendered} date={new Date(blog.date)} imgUrl={wpGenerateImage(blog.content.rendered)} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPageContainer;