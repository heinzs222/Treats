import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #f3f7f7;
`;
const Title = styled.h1`
    font-weight: 1000;

    color: #383b3d;
    font-size: 70px;
    margin-bottom: 20px;
`;

const PopularContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>MOST SELLING PRODUCTS</Title>
            </TitleContainer>
            <PopularContainer>
                {popularProducts.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </PopularContainer>
        </Container>
    );
};

export default Products;
