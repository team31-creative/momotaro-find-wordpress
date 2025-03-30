import React from 'react';
import MJTypography from '../../components/MJTypography';
import { css,cx } from '@emotion/css';
import MatchingList from './components/MatchingList';
import MJButton from '../../components/MJButton';
import MJModal from '../../components/MJModal';
import GridFormDetail from './components/GridFormDetail';
import { Dialog } from '@mui/material';

const blogListLayoutCss = css`
    min-height: 100vh;
    padding-bottom: 60px;
    height: auto;
    > .MuiTypography-root {
        color: #ffffff;
    }
`;

const marginCss = css`
    padding: 50px 0 25px 0;
`;

const marginDescriptCss = css`
    padding: 0 0 20px 0;
    margin: 0;
`;

const buttonCss = css`
    display: flex; 
    justify-content: center; 
    padding-top: 50px;
    padding-bottom: 50px;

    > .MuiButtonBase-root {
        width: 100%;
        max-width: 300px;
    }
`;

const confirmButtonCss = css`
    display: flex; 
    justify-content: center; 
    gap: 10px;
    > .MuiButtonBase-root {
        width: 100%;
        max-width: 300px;
    }
`;

interface ConfirmDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmDiaglog: React.FC<ConfirmDialogProps> = ({ open, onClose, onConfirm}) => {
    
    return (
        <Dialog
            open={open}
            onClose={() => onClose()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div style={{ padding: '20px', textAlign: 'center' }}>
            <MJTypography variant="h6" bold={true} align="center" style={{ marginBottom: '8px' }}>
                確認
            </MJTypography>
            <MJTypography variant="body1" align="center" style={{ marginBottom: '40px' }}>
                本当にマッチングを取消しますか？
            </MJTypography>
            <div className={confirmButtonCss}>
                <MJButton label="キャンセル" color='secondary' onClick={() => onClose()} />
                <MJButton label="確認" onClick={() => onConfirm()} />
            </div>
            </div>
        </Dialog>
    );
}

const MatchingPageContainer: React.FC = () => {

    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [descriptionModal, setDescriptionModal] = React.useState(false);

    const deleteMatching = () => {
        // Handle delete action
        console.log("Matching deleted");
        setOpen(false);
        setDescriptionModal(false);
    }

    const setDisplay = (name: string) => {
        setName(name);
        setDescriptionModal(true);
    }

    const mockData = [
        {
            id: "1",
            name: "イエロー ミニオン",
            icon: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Description for Matching 1",
        },
        {
            id: "2",
            name: "シベハスキー",
            icon: "https://plus.unsplash.com/premium_photo-1666229410352-c4686b71cea2?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Description for Matching 2",
        },
        {
            id: "3",
            name: "猿猿",
            icon: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Description for Matching 3",
        },
    ]

    return (
        <div className={cx(blogListLayoutCss)}>
            <MJTypography variant='h3' bold={true} align='center' className={cx(marginCss)}>Matching</MJTypography>
            <MJTypography variant='h5' bold={true} align='center' className={cx(marginDescriptCss)}>文面？？？</MJTypography>
            <MatchingList dataList={mockData} onLink={setDisplay} />
            <MJModal 
                open={descriptionModal} 
                onClose={() => setDescriptionModal(false)}
                title={name + ' の情報'}
                body={
                    <div>
                        <MJTypography variant='h6' bold={true} align='center' style={{marginBottom: '15px'}}>リクエスト条件</MJTypography>
                        <GridFormDetail title={'きびだんご'} answer='3,000個' endLine={true} />
                        <MJTypography variant='h6' bold={true} align='center' style={{marginBottom: '15px', marginTop: '15px'}}>連絡先情報</MJTypography>
                        <GridFormDetail title={'名前'} answer='Japanese' />
                        <GridFormDetail title={'メールアドレス'} answer='Japanese' />
                        <GridFormDetail title={'電話番号'} answer='Japanese' />
                        <GridFormDetail title={'LINE ID'} answer='Japanese' />
                        <GridFormDetail title={'メッセージ'} answer={"japanese\naaaa"} endLine={true} />
                        <div className={buttonCss}>
                            <MJButton onClick={() => setOpen(true)} label='マッチング取消' />
                        </div>
                        <ConfirmDiaglog open={open} onClose={() => setOpen(false)} onConfirm={() => deleteMatching()} />
                    </div>
                }
            />
        </div>
    );
};

export default MatchingPageContainer;