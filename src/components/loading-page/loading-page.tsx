import { RotatingLines } from "react-loader-spinner";
import { LoadingPageWrapper } from "./loading-page.styles";

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
