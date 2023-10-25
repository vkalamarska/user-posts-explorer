import { RotatingLines } from "react-loader-spinner";
import styled from "styled-components";

const LoadingPageWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-content: center;
`;

const LoadingPage = () => {
  return (
    <LoadingPageWrapper>
      <RotatingLines
        strokeColor="#0a65cd2c"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoadingPageWrapper>
  );
};

export default LoadingPage;
