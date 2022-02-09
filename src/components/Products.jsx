import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    filters
                        ? `http://localhost:5001/api/products?category=${filters}`
                        : "http://localhost:5001/api/products"
                );
                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    }, [filters]);

    // useEffect(() => {
    //     cat &&
    //         setFilteredProducts(
    //             products.filter((items) =>
    //                 Object.entries(filters).every(([key, value]) =>
    //                     items[key].includes(value)
    //                 )
    //             )
    //         );
    // }, [products, cat, filters]);

    // useEffect(() => {
    //     if (sort === "newest") {
    //         setFilteredProducts((prev) =>
    //             [...prev].sort((a, b) => a.createdAt - b.createdAt)
    //         );
    //     } else if (sort === "asc") {
    //         setFilteredProducts((prev) =>
    //             [...prev].sort((a, b) => a.price - b.price)
    //         );
    //     } else {
    //         setFilteredProducts((prev) =>
    //             [...prev].sort((a, b) => b.price - a.price)
    //         );
    //     }
    // }, [sort]);

    return (
        <Container>
            {filteredProducts.map((item) => (
                <Product item={item} key={item._id} />
            ))}
        </Container>
    );
};

export default Products;
