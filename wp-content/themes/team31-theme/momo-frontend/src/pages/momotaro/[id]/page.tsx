/** @jsxImportSource @emotion/react */
import { useParams } from 'react-router-dom';
import MJLayout from '../../../components/MJLayout';
import ProfilePageContainer from '../../../features/profile/ProfilePageContainer';

function Momotaro() {
    const { id } = useParams(); 
  return (
    <MJLayout>
        <ProfilePageContainer slug={'momotaro'} id={id} />
    </MJLayout>
  );
}

export default Momotaro;