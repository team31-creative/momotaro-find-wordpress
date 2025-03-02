/** @jsxImportSource @emotion/react */
import { useParams } from 'react-router-dom';
import MJLayout from '../../../components/MJLayout';
import ProfilePageContainer from '../../../features/profile/ProfilePageContainer';

function MonkeyDog() {
  const { id } = useParams<{ id: string }>();
  return (
    <MJLayout>
        <ProfilePageContainer slug={'monkeydog'} id={id} />
    </MJLayout>
  );
}

export default MonkeyDog;