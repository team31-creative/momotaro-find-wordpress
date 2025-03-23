/** @jsxImportSource @emotion/react */
import { useParams } from 'react-router-dom';
import KBLayout from '../../components/externalApp/KBLayout';
import KibiPageContainer from '../../features/externalApp/kibi/KibiPageContainer';
import { Container } from '@mui/material';

function KibiBank() {
    const { id } = useParams(); 
  return (
    <KBLayout appName='きびだんご申請状況'>
        <Container>
            <KibiPageContainer />
        </Container>
    </KBLayout>
  );
}

export default KibiBank;