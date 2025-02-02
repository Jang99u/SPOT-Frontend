import {useState} from 'react';
import * as S from './FinishSpot.styled';
import Parking from '../../components/Parking';
import Layout from '@/components/Common/Layout/Layout';
import Box from '@/components/Box';
import Find_1 from '@/components/Common/Find_1';

const FindKickSpot = () => {
  const [showParking, setShowParking] = useState(false);
  const [step, setStep] = useState(1);

  const handleNextClick = () => {
    setShowParking(true);
    setStep(step + 1);
  };

  const handlePrevClick = () => {
    if (step === 2) {
      setStep(step - 1);
    }
  };

  const greyBoxStyle = {
    width: '70%',
    height: '65%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-between',
    backgroundColor: '#EDEDED',
    borderRadius: '20px',
    padding: '1rem',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  };

  return (
    <Layout showHeader={true} headerItem="arrow">
      <S.Container>
        <h2>주차 인증하기</h2>
        {showParking ? (
          <S.AdditionalText>주차 사진 업로드</S.AdditionalText>
        ) : (
          <Box margin="18px" />
        )}
        <Box style={greyBoxStyle}>
          {showParking ? (
            <>
              {step === 1 && <Find_1 onNextClick={handleNextClick} />}
              {step === 2 && <Parking onPrevClick={handlePrevClick} />}
            </>
          ) : (
            <Find_1 onNextClick={handleNextClick} />
          )}
        </Box>
      </S.Container>
    </Layout>
  );
};
export default FindKickSpot;
