import toast from 'react-hot-toast';
import CustomToast from '@/components/CustomToast';

const notify = ({ product, quantity, adding, removing }) => {
  toast.custom(
    (t) => (
      <CustomToast
        product={product}
        quantity={quantity}
        adding={adding}
        removing={removing}
      />
    ),
    {
      duration: 2000,
    }
  );
};

export default notify;
