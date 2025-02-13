import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

const TableCart = (props) => {
    const { products } = props;
    const cart = useSelector((state) => state.cart.data);
    // const [totalPrice, setTotalPrice] = useState(0);
    const { isDarkMode } = useContext(DarkMode);
    const dispatch = useTotalPriceDispatch();
    const { total } = useTotalPrice();    

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            // setTotalPrice(sum);
            dispatch({
                type: "UPDATE",
                payload: {
                    total: sum,
                },
            });
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, products]);

    const totalPriceRef = useRef(null);

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);

    return (
        <table className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode && "text-white"}`}>
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
                        {/* {total.toLocaleString('en-US', { style: 'currency', currency: 'USD', })} */}
                        {total && total.total ? total.total.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : 'N/A'}
                        </b>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableCart;