import { Hourglass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{ margin: '0 auto' }}
      colors={['#3f51b5', '#3f51b5']}
    />
  );
};
