import React, { useEffect, useState } from 'react';
import MJTypography from '../../components/MJTypography';
import { css,cx } from '@emotion/css';
import WPSupporter from '../../commons/wpSupporter';
import BlogListBox from './components/BlogListBox';

const pageTitleCss = css`
    padding: 50px 0;
`;

const blogListLayoutCss = css`
    min-height: 100vh;
    height: auto;
    > .MuiTypography-root {
        color: #000000;
    }
`;

const BlogPageContainer: React.FC = () => {
    const wps = WPSupporter(false);
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
    const [isLoading, setIsLoading] = useState(true);

    const getBlogs = async () => {
        const blogs = await wps.forceGet('blog', 'author');
        console.log(blogs);
        setMjBlogs(blogs);
        setIsLoading(false);
    }

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <div className={cx(blogListLayoutCss)}>
            <MJTypography variant='h3' bold={true} align='center' className={pageTitleCss}>BLOG</MJTypography>
            <BlogListBox mjBlogs={mjBlogs} isLoading={isLoading} />
        </div>
    );
};

export default BlogPageContainer;