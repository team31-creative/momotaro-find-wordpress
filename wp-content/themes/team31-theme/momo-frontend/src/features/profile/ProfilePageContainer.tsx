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

interface ProfilePageContainerProps {
    slug: string;
    id: string;
}

const callColumn = [
    'id', 
    'name', 
    'avatar_urls',
    'old',
    'catch_copy',
    'vision',
    'your_comefrom',
    'your_humanity',
    'respect_people',
    'career',
    'play_vision',
    'situation',
    'your_strong_point',
    'seek_people',
    'refuse_people',
    'simple_local_avatar'
];

const ProfilePageContainer: React.FC<ProfilePageContainerProps> = ({slug, id}) => {
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
    const userContext = useUser();
    if (!userContext) {
            return null; // or handle the null case appropriately
    }
    const { user } = userContext;
    const role = user?.roles[0];
    const wps = WPSupporter(role === 'administrator');

    const convertArrayToString = (arr: any[]): string => {
        return arr.join(', ');
    };

    useEffect(() => {
        const fetchData = async () => {
            let memberProfile = await wps.get(`users/${id}?roles=${slug}&_fields=${convertArrayToString(callColumn)}`);
            console.log(memberProfile);
            setMember(memberProfile);
            
            // setTitleData({title: news.title.rendered, date: news.date});
            // setDescriptionData(news.content.rendered);

            let blog = await wps.get(`blog?author=${id}`);
            if (blog) {
                setMjBlogs(blog);
            }

            setIsLoading(false);
        };
        fetchData();
    }, []);
    return (
        <div className={cx(profileCss)}>
            <CoverProfile name={member?.name} old={member?.old} image={member?.simple_local_avatar?.full} />
            <ProfileDescription
                slug={'momotaro'}
                catchCopy={member?.catch_copy}
                vision={member?.vision}
                yourComefrom={member?.your_comefrom}
                yourHumanity={member?.your_humanity}
                respectPeople={member?.respect_people}
                career={member?.career}
                playVision={member?.play_vision}
                situation={member?.situation}
                yourStrongPoint={member?.your_strong_point}
                seekPeople={member?.seek_people}
                refusePeople={member?.refuse_people}
            />
            <MJTypography variant='h3' bold={true} align='center' className={cx(pageTitleBlogCss)}>{member?.name}'s BLOG</MJTypography>
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