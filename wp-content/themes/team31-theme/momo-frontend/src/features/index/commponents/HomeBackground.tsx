/** @jsxImportSource @emotion/react */
import React, {useMemo} from 'react';
import { css } from '@emotion/css';
import MJSquareImage from '../../../components/MJSquareImage';
import { ImageListTypes } from '../types/ImageListTypes';

interface HomeBackgroundProps {
    imageLists: ImageListTypes[];
}

const HomeBackground: React.FC<HomeBackgroundProps> = ({imageLists}) => {

    const dummyImageList = {
        simple_local_avatar:{
            full: 'path/to/dummy/image.jpg',
        }, 
        name: 'Coming Soon!!'
    };

    const updatedImageLists = useMemo(() => {
        const newList = [...(imageLists ?? [])];
        if (newList.length === 0) {
            return [];
        }
        while (newList.length < 8) {
            newList.push(dummyImageList);
        }
        return newList;
    }, [imageLists]);


    return (
        <>
            <div className={homeBackgroundImageCss}>
                {updatedImageLists?.map((imageList) => 
                        <MJSquareImage key={imageList?.name} src={imageList?.simple_local_avatar?.full ?? 'path/to/dummy/image.jpg'} account_name={imageList?.name} />
                )}
            </div>
        </>
    );
};

const homeBackgroundImageCss = css`
    width: 100%;
    margin: 0;
    padding: 0;
    height: auto; /* Full screen height */
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: 800px) {
        & > div {
            width: calc(100%/4); /* 4 items per row */
        }
    }

    @media (max-width: 800px) {
        & > div {
            width: calc(100%/2); /* 2 items per row */
        }
    }
`;

export default HomeBackground;