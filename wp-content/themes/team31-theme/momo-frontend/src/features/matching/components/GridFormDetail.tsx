import React from 'react';
import MJTypography from '../../../components/MJTypography';

interface GridFormDetailProps {
    title: string;
    answer: string;
    endLine?: boolean;
}

const GridFormDetail: React.FC<GridFormDetailProps> = ({ title, answer, endLine }) => {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <MJTypography variant='body2' style={{ color: '#210099',marginRight: '10px', marginTop: '0.3px', fontSize: '13px' }}>{title}</MJTypography>
                    <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #bcbcbc' }} />
                </div>
                <div style={{ whiteSpace: 'pre-wrap' }}>
                    <MJTypography variant='body2' style={{ color: '#000', fontSize: '14px', marginTop: '-1px', marginBottom: '7px' }}>{answer}</MJTypography>
                </div>
                { endLine && (
                    <div>
                        <hr style={{ flex: 1, border: 'none', marginTop: '6px', borderTop: '1px solid #bcbcbc' }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default GridFormDetail;