import Button from "../components/Elements/Button";
import CartProduct from "../components/Fragments/CardProduct";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: "Rp.1.000.000",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, voluptates.`,
        image: "/images/shoes-1.jpg",
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: "Rp.500.000",
        description: `Lorem ipsum dolor sit amet.`,
        image: "/images/shoes-1.jpg",
    },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
        {/* <CartProduct>
            <CartProduct.Header image="/images/shoes-1.jpg" />
            <CartProduct.Body title="Sepatu baru">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, voluptates.
            </CartProduct.Body>
            <CartProduct.Footer price="Rp.1.000" />
        </CartProduct> */}
        {products.map((product) => (
            <CartProduct>
                <CartProduct.Header image={product.image} />
                <CartProduct.Body name={product.name}>
                    {product.description}
                </CartProduct.Body>
                <CartProduct.Footer price={product.price} />
            </CartProduct>
        ))}
    </div>
  );
};

export default ProductsPage;