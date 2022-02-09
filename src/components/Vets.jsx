import styled from "styled-components";
import { vetsOnline } from "../data";

import SingleVet from "./SingleVet";

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

const Vets = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>I NEED A VET</Title>
            </TitleContainer>
            <PopularContainer>
                {vetsOnline.map((item) => (
                    <SingleVet item={item} key={item.id} />
                ))}
            </PopularContainer>
        </Container>
    );
};

export default Vets;
