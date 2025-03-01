/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from "@emotion/react";
import MJBlogList from "../../../components/MJBlogList";

interface BlogListBoxProps {
    mjBlogs: any[];
    isLoading: boolean;
}

const BlogListBox: React.FC<BlogListBoxProps> = ({mjBlogs, isLoading}) => {

    const wpGenerateImage = (html) => {
        if (!html) return "https://placehold.jp/287x155.png"; // ① html が null/undefined の場合

        const match = html.match(/<img [^>]*src="([^"]+)"/);
        return match ? match[1] : "https://placehold.jp/287x155.png"; // ② match が null の場合
    }
    
    return (
        <ul css={blogListLayoutCss}>
            {mjBlogs.map((blog, index) => (
                <li key={index}>
                    <MJBlogList 
                        userName={blog?.author?.name ?? ''} 
                        skelton={isLoading} 
                        title={blog.title.rendered} 
                        date={new Date(blog.date)} 
                        imgUrl={wpGenerateImage(blog.content.rendered)} 
                    />
                </li>
            ))}
        </ul>
    )
}

const blogListLayoutCss = css`
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    gap: 10px;
    justify-content: start;
    max-width: 1200px;
    margin: 0 auto;
    li {
        flex: 0 0 calc(16.66% - 10px); /* Fixed to display 6 items per row */
        box-sizing: border-box;
    }
    list-style: none;
    @media (max-width: 600px) {
        li {
            flex: 0 0 calc(100%/2.06); /* Display 2 items per row */
        }
    }
`;

export default BlogListBox; 