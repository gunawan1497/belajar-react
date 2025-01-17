import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button";
import CartProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";
import { getProduct } from "../services/product.service";
// import Counter from "../components/Fragments/Counter";

// const products = [
//     {
//         id: 1,
//         name: "Sepatu Baru",
//         price: 1000000,
//         description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, voluptates.`,
//         image: "/images/shoes-1.jpg",
//     },
//     {
//         id: 2,
//         name: "Sepatu Lama",
//         price: 500000,
//         description: `Lorem ipsum dolor sit amet.`,
//         image: "/images/shoes-1.jpg",
//     },
//     {
//         id: 3,
//         name: "Sepatu Saya",
//         price: 2000000,
//         description: `Sepatu saya bundar.`,
//         image: "/images/shoes-1.jpg",
//     },
// ];

const email = localStorage.getItem('email');

const ProductsPage = () => {
    const [cart, setCart] = useState([
        // {
        //     id: 1,
        //     qty: 1,
        // }
    ]);

    const [totalPrice, setTotalPrice] = useState(0);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // setCart([{ id: 1, qty: 1 }]);
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    }, []);

    useEffect(() => {
        getProduct((data) => {
        setProducts(data);       
        });
    },[]);

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, products]);

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

    // useRef
    // const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []);

    // const handleAddToCartRef = (id) => {
    //     cartRef.current = [ ...cartRef.current, { id, qty: 1 } ];
    //     localStorage.setItem('cart', JSON.stringify(cartRef.current));
    // };

    // document.getElementById;
    const totalPriceRef = useRef(null);

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);

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
                {products.length > 0 && products.map((product) => (
                    // <CartProduct key={product.id}>
                    //     <CartProduct.Header image={product.image} />
                    //     <CartProduct.Body name={product.name}>
                    //         {product.description}
                    //     </CartProduct.Body>
                    //     <CartProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCartRef} />
                    // </CartProduct>
                    <CartProduct key={product.id}>
                        <CartProduct.Header image={product.image} />
                        <CartProduct.Body name={product.title}>
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
                        {/* {cartRef.current.map((item) => {
                            const product = products.find((product) => product.id === item.id);
                            return (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                    <td>{item.qty}</td>
                                    <td>{(product.price * item.qty).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                </tr>
                            );
                        })} */}
                        {products.length > 0 && cart.map((item) => {
                            const product = products.find((product) => product.id === item.id);
                            return (
                                <tr key={product.id}>
                                    <td>{product.title.substring(0,10)}...</td>
                                    <td>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                                    <td>{item.qty}</td>
                                    <td>{(product.price * item.qty).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                                </tr>
                            );
                        })}
                        <tr ref={totalPriceRef}>
                            <td colSpan={3}><b>Total Price</b></td>
                            <td>
                                <b>
                                {totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD', })}
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        {/* <div className="flex w-100 justify-center">
            <Counter />
        </div> */}
        {/* <div className="mt-5 flex justify-center mb-5">
            <Counter />
        </div> */}
    </Fragment>
  );
};

export default ProductsPage;