import React from 'react';
import Icon from '@mdi/react';
import { IconProps } from '@mdi/react/dist/IconProps';

interface MJIconProps extends IconProps {
    path: string;
}

const MJIcon: React.FC<MJIconProps> = ({ path, size = 1, color = 'currentColor', ...props }) => {
    return <Icon path={path} size={size} color={color} {...props} />;
};

export default MJIcon;