import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MJSquareImage from './MJSquareImage';

const meta: Meta<typeof MJSquareImage> = {
    title: "components/MJSquareImage",
    component: MJSquareImage,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <Story />
        ),
    ],
};
export default meta;

type Story = StoryObj<typeof MJSquareImage>;

export const Default: Story = {
    args: {
        src: "https://ltag-local-development-bucket.s3.ap-southeast-2.amazonaws.com/448060286_341156948788413_907370303099670209_n.jpg",
    },
};