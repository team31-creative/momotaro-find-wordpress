/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import MJBlogList from '../../components/MJBlogList';

import { css, cx } from '@emotion/css';
import WPSupporter from '../../commons/wpSupporter';
import { useUser } from '../../context/UserContext';
import CoverProfile from './components/CoverProfile';
import ProfileDescription from './components/ProfileDescription';
import BlogListBox from '../blog/components/BlogListBox';
import MJTypography from '../../components/MJTypography';

interface WPTitleData {
    title: string;
    date: Date;
}

const ProfilePageContainer: React.FC = () => {
    const [member, setMember] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);
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
            let memberProfile = await wps.get(`users/${id}?roles=momotaro`);
            console.log(memberProfile);
            setMember(memberProfile);
            
            // setTitleData({title: news.title.rendered, date: news.date});
            // setDescriptionData(news.content.rendered);

            let blog = await wps.get('blog?per_page=24&_embed');
            if (blog) {
                setMjBlogs(blog);
            }

            setIsLoading(false);
        };
        fetchData();
    }, []);
    return (
        <div className={cx(profileCss)}>
            <CoverProfile name={member.name} />
            <ProfileDescription />
            <MJTypography variant='h3' bold={true} align='center' className={cx(pageTitleBlogCss)}>Name's BLOG</MJTypography>
            <div className={cx(pageRenderCss)}>
                <BlogListBox mjBlogs={mjBlogs} isLoading={isLoading} />
            </div>
        </div>
    );
};

const pageTitleBlogCss = css`
    padding: 3em 0 50px 0;
    color: white;

    @media screen and (max-width: 800px) {
        padding: 120px 0 80px 0;
    }
`;

const profileCss = css`
    position: relative;
    padding-top: 20px;
    width: 100%;
    height: auto;
`;

const pageRenderCss = css`
    margin-top: 50px;
    width: 100%;
`

export default ProfilePageContainer;