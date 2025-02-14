import { Meta, StoryObj } from '@storybook/react';

import MJBlogList from './MJBlogList.tsx';
import React from 'react';

const meta: Meta<typeof MJBlogList> = {
    title: "components/MJBlogList",
    component: MJBlogList,
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
type Story = StoryObj<typeof MJBlogList>;

export const Default: Story = {
    args: {
        title: "はじめまして！なんでもないです！",
        userName: "MJ User",
        date: new Date("2021-09-01"),
        imgUrl: "https://member.ard-online.jp/wp-content/uploads/2025/01/f5ee6437a1869864da132828b312f8c7-768x432.jpg"
    },
};

export const Loading: Story = {
    args: {
        skelton: true,
        title: "",
        userName: "",
        imgUrl: undefined
    },
};