/** @jsxImportSource @emotion/react */
import React from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

interface MenuItemLists {
    text: string;
    href: string;
}

interface MJMenuItemRowProps {
    items: MenuItemLists[];
    height: number;
    className?: any;
}

const MJMenuItemRow: React.FC<MJMenuItemRowProps> = ({ items, height, className }) => {
    const navigate = useNavigate();
    const onLink = (link: string) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        navigate(link);
    }
    return (
        <div css={[className]}>
            <List css={ListCss}>
                {items.map((item, index) => (
                    <ListItemButton key={index} css={ListItemButtonCss(height)} onClick={onLink(item.href)}>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                ))}
            </List>
        </div>
    );
};

const ListCss = css`
    display: flex;
    flex-direction: row;
`;

const ListItemButtonCss = (height: number) => css`
    flex: 1 1 auto;
    height: ${height}px;
    text-align: center;
`;

export default MJMenuItemRow;
