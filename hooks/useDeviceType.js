import { useSelector } from 'react-redux';

const useDeviceType = () => {
  return useSelector((state) => state.deviceFn.deviceType);
};

export default useDeviceType;
