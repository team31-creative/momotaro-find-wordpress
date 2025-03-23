import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { KBSnackbarProvider } from '../../context/KBSnackbarContext';

interface KBLayoutProps {
    appName: string;
    children: React.ReactNode;
}

const KBLayout: React.FC<KBLayoutProps> = ({ appName, children }) => {
    return (
        <div>
            <KBSnackbarProvider>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Typography variant="h6" component="div">
                            {appName}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div style={{ padding: '16px' }}>
                    {children}
                </div>
            </KBSnackbarProvider>
        </div>
    );
};

export default KBLayout;