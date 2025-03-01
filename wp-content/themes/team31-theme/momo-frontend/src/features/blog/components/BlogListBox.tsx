/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MJBlogList from "../../../components/MJBlogList";

interface BlogListBoxProps {
    mjBlogs: any[];
    isLoading: boolean;
}

const BlogListBox: React.FC<BlogListBoxProps> = ({mjBlogs, isLoading}) => {

    const wpGenerateImage = (html) => {
        return html.match(/<img [^>]*src="([^"]+)"/)[1];
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

export default BlogListBox; 