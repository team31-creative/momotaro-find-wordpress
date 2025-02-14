import { Meta, StoryObj } from '@storybook/react';

import MJNewsList from './MJNewsList.tsx';
import React from 'react';

const meta: Meta<typeof MJNewsList> = {
    title: "components/MJNewsList",
    component: MJNewsList,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: "242px", minWidth: "242px" }}>
                <Story />
            </div>
        ),
    ],
};
export default meta;
type Story = StoryObj<typeof MJNewsList>;

export const Default: Story = {
    args: {
        title: "牧野銀土氏、桃太郎参戦！！",
        date: new Date("2021-09-01"),
        category: "News Category",
        imgUrl: "https://member.ard-online.jp/wp-content/uploads/2025/01/f5ee6437a1869864da132828b312f8c7-768x432.jpg"
    },
};
export const Loading: Story = {
    args: {
        skelton: true,
        title: "",
        category: "",
        imgUrl: "https://member.ard-online.jp/wp-content/uploads/2025/01/f5ee6437a1869864da132828b312f8c7-768x432.jpg"
    },
};