/** @jsxImportSource @emotion/react */
import { useParams } from 'react-router-dom';
import KBLayout from '../../../../components/externalApp/KBLayout';
import KibiPageContainer from '../../../../features/externalApp/kibi/KibiPageContainer';
import { Container } from '@mui/material';

function KibiBankModals() {
    const { monkeydog_id } = useParams(); 
  return (
    <KBLayout appName='きびだんご申請状況'>
        <Container>
            <KibiPageContainer monkeydog_id={monkeydog_id} />
        </Container>
    </KBLayout>
  );
}

export default KibiBankModals;