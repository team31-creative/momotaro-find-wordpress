import React from 'react';
import MJButton from '../../../components/MJButton';
import { css } from '@emotion/css';

interface DecisionButtonProps {
    onClick1: () => void;
    onClick2: () => void;
    onClick3: () => void;
    constants: string;
}

const buttonContainerCss = css`
    display: flex;
    gap: 8px;
    position: fixed;
    justify-content: center;
    width: 100%;
    top: 100px;
    left: 0;
    @media (max-width: 500px) {
        top: 60px;
    }
`;

const buttonCss = css`
    width: 20%;
    @media (max-width: 500px) {
        width: 29%;
    }
`;

const DecisionButton: React.FC<DecisionButtonProps> = ({ onClick1, onClick2, onClick3, constants }) => {
    return (
        <div className={buttonContainerCss}>
            <MJButton onClick={onClick1} color={constants === 'guest' ? 'secondary' : 'primary'}  className={buttonCss} label='相手から' />
            <MJButton onClick={onClick2} color={constants === 'mine' ? 'secondary' : 'primary'} className={buttonCss} label='自分から' />
            <MJButton onClick={onClick3} className={buttonCss} label='足あと' />
        </div>
    );
};

export default DecisionButton;