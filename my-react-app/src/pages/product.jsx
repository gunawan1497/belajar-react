import { Fragment, useState } from "react";
import Button from "../components/Elements/Button";
import CartProduct from "../components/Fragments/CardProduct";
// import Counter from "../components/Fragments/Counter";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: 1000000,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, voluptates.`,
        image: "/images/shoes-1.jpg",
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: 500000,
        description: `Lorem ipsum dolor sit amet.`,
        image: "/images/shoes-1.jpg",
    },
    {
        id: 3,
        name: "Sepatu Saya",
        price: 2000000,
        description: `Sepatu saya bundar.`,
        image: "/images/shoes-1.jpg",
    },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        }
    ]);

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = "/login";
    };

    const handleAddToCart = (id) => {
        // setCart([
        //     ...cart,
        //     {
        //         id,
        //         qty: 1,
        //     }
        // ])
        if(cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
            )
        } else {
            setCart([
                ...cart,
                {
                    id,
                    qty: 1,
                }
            ])
        }
    };

  return (
    <Fragment>
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            {email}
            <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
        </div>
        <div className="flex justify-center py-5">
            {/* <CartProduct>
                <CartProduct.Header image="/images/shoes-1.jpg" />
                <CartProduct.Body title="Sepatu baru">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, voluptates.
                </CartProduct.Body>
                <CartProduct.Footer price="Rp.1.000" />
            </CartProduct> */}
            <div className="w-4/6 flex flex-wrap">
                {products.map((product) => (
                    <CartProduct key={product.id}>
                        <CartProduct.Header image={product.image} />
                        <CartProduct.Body name={product.name}>
                            {product.description}
                        </CartProduct.Body>
                        <CartProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
                    </CartProduct>
                ))}
            </div>
            <div className="w-2/6">
                <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                {/* <ul>
                    {cart.map((item) => (
                        <li key={item}>{item.id}</li>
                    ))}
                </ul> */}
                <table className="text-left table-auto border-separate border-spacing-x-5">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => {
                            const product = products.find((product) => product.id === item.id);
                            return (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>Rp{" "}{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                    <td>{item.qty}</td>
                                    <td>Rp{" "}{(product.price * item.qty).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        {/* <div className="flex w-100 justify-center">
            <Counter />
        </div> */}
    </Fragment>
  );
};

export default ProductsPage;