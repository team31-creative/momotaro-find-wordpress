import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import MJHeader from './MJHeader';
import React from 'react';

const meta: Meta<typeof MJHeader> = {
    title: "components/MJHeader",
    component: MJHeader,
    decorators: [
        (Story) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof MJHeader>;

export const Default: Story = {
    args: {},
};