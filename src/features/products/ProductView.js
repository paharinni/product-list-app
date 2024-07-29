import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductView = () => {
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((product) => product.id === parseInt(productId, 10))
  );

  if (!product) {
    return <div>Product not found</div>;
  }
};

export default ProductView;
