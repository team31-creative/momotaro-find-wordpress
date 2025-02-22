/** @jsxImportSource @emotion/react */
import IndexPageContainer from '../../features/index/IndexPageContainer';
import { css } from '@emotion/react';
import MJFullLayout from '../../components/MJFullLayout';

// これだけHPレイアウトMJFullLayoutを採用
function Home() {
  return (
    <MJFullLayout>
        <IndexPageContainer />
    </MJFullLayout>
  );
}

export default Home;
