import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import React from 'react';
import MJFooterNav from './MJFooterNav';

const meta: Meta<typeof MJFooterNav> = {
    title: "components/MJFooterNav",
    component: MJFooterNav,
    decorators: [
        (Story) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof MJFooterNav>;

export const Default: Story = {
    args: {},
};