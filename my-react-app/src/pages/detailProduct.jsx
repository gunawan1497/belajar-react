import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";

const DetailProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getDetailProduct(id, (data) => {
            setProduct(data);
        });
    }, [id]);
    // console.log(product.rating.rate);
    
    return (
        <div className="w-100 min-h-screen flex justify-center items-center">
            {/* render dulu jika tidak ada product */}
            {Object.keys(product).length > 0 && (
                <div className="flex font-sans max-w-xl">
                    <div className="flex-none w-48 relative">
                        <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <form className="flex-auto p-6">
                        <div className="flex flex-wrap">
                        <h1 className="flex-auto text-xl font-semibold">
                            {product.title}
                        </h1>
                        <div className="text-xl font-semibold text-gray-500">
                            ${product.price}
                        </div>
                        <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                            Review {product.rating.rate}/5 ({product.rating.count})
                        </div>
                        </div>
                        <div className="flex items-baseline mt-4 mb-6">
                        <div className="space-x-2 flex">
                            {product.description}
                        </div>
                        <div className="ml-auto text-sm text-gray-500 underline">Size Guide</div>
                        </div>
                        <div className="flex space-x-3 mb-4 text-sm font-medium">
                        <div className="flex-auto flex space-x-3">
                            <button className="w-1/2 flex items-center justify-center rounded-md bg-black text-white" type="submit">Buy now</button>
                            <button className="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Add to bag</button>
                        </div>
                        <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
                            <svg width="20" height="20" fill="currentColor">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>
                        </div>
                        <p className="text-sm text-gray-500">
                        Free shipping on all continental US orders.
                        </p>
                    </form>
                </div>
            )}
        </div>
    );
}

export default DetailProductPage;