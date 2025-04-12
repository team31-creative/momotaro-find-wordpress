import React, {useState} from 'react';
import { css } from '@emotion/css';
import MJButton from '../../../components/MJButton';
import { mdiAccount, mdiStar, mdiShoePrint } from '@mdi/js';
import MJTypography from '../../../components/MJTypography';
import { Tracking } from '../../../commons/commponents/Tracking';



const CoverButton: React.FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={containerCss}>
            <div className={appIconCss}>
                <MJButton icon={mdiAccount} onClick={() => window.location.href = "/wp-admin/profile.php"} />
                <MJTypography variant="body2" align='center'>プロフィール</MJTypography>
            </div>
            <div className={appIconCss}>
                <MJButton icon={mdiShoePrint} onClick={() => setOpen(true)} />
                <MJTypography variant="body2" align='center'>足あと</MJTypography>
            </div>
            <div className={appIconCss}>
                <MJButton icon={mdiStar} />
                <MJTypography variant="body2" align='center'>お気に入り</MJTypography>
            </div>
            <Tracking open={open} onClose={() => setOpen(false)} />
        </div>
    );
}

const appIconCss = css`
    width: 72px;
    height: 60px;

    .MuiTypography-root {
        font-size: 12px;
    }

    .MuiButtonBase-root {
        padding: 17px;
        font-size: 20px;
        margin-left: 5px;
        margin-bottom: 6px;
    }
`;



const containerCss = css`
    background-color: rgba(255, 255, 255, 0.7);
    padding: 5px 20px 13px 20px;
    border-radius: 15px;
    width: 80%;
    height: 110px;
    margin: 0 auto;
    margin-top: 10px;
    gap: 10px;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: left;
    align-items: center;
`;


export default CoverButton;