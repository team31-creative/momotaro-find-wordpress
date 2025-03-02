import React from 'react';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

interface MJAvatarProps {
    src?: string;
    alt?: string;
    children?: React.ReactNode;
    size?: 'S' | 'M' | 'L';
    skelton?: boolean;
    onClick?: () => void;
}

const MJAvatar: React.FC<MJAvatarProps> = ({ src, alt, size,skelton, children, onClick }) => {
    return (
        <CustomAvatar src={src} size={size} skeleton={skelton} alt={alt} onClick={() => onClick()}>
            {children}
        </CustomAvatar>
    );
};

const CustomAvatar = styled(Avatar)<{ size?: 'S' | 'M' | 'L'; skeleton?: boolean }>(({ theme, size = 'M', skeleton = false }: any) => {
    const sizes = {
        S: theme.spacing(4),
        M: theme.spacing(7),
        L: theme.spacing(10),
    };

    return {
        width: sizes[size],
        height: sizes[size],
        backgroundColor: skeleton ? theme.palette.grey[300] : theme.palette.primary.main,
        color: skeleton ? theme.palette.grey[500] : theme.palette.common.white,
    };
});

export default MJAvatar;