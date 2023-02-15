import React, {useState} from 'react';
import LoadingAnimation from '../components/loadingAnimation/LoadingAnimation';

const withLoading = loadingText => Component => props => {
  const [isLoading, setIsLoading] = useState(false);
  const setLoadingState = isComponentLoading => {
    setIsLoading(isComponentLoading);
  };
  return (
    <>
      <Component {...props} setLoading={setLoadingState} />
      {isLoading && <LoadingAnimation loadingText={loadingText} />}
    </>
  );
};

export default withLoading;
