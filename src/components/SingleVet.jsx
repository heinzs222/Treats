import {
    Call,
    FavoriteBorderOutlined,
    SearchOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const VetName = styled.h1`
    font-size: 32px;
    font-weight: 400;
    color: #c0dcee;
    -webkit-text-stroke: 0.2px #000000;
`;
const VetLastname = styled.h1`
    font-size: 32px;
    font-weight: 400;
    color: #c0dcee;
    -webkit-text-stroke: 0.2px #000000;
`;
const VetNameContainer = styled.div`
    position: absolute;
    text-align: center;
    z-index: 2;

    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
`;
const Info = styled.div`
    opacity: 0;

    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: end;
    justify-content: center;
    align-content: center;
    transition: all 0.5s ease;
    cursor: pointer;

    text-align: center;
`;

const Container = styled.div`
    flex: 3;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fdf5;
    position: relative;
    &:hover ${Info} {
        opacity: 1;
    }
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img`
    width: 75%;
    height: 75%;
    object-fit: cover;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover {
        background-color: #c6ffc4;
        transform: scale(1.1);
    }
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(3, 3, 3, 0.2));
    color: white;
    cursor: pointer;
    font-weight: 600;
    border-radius: 5%;
`;
const SingleVet = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.imge} />
            <VetNameContainer>
                <Button>
                    <VetName>{item.name}</VetName>
                    <VetLastname>{item.lastname}</VetLastname>
                </Button>
            </VetNameContainer>
            <Info>
                <Icon>
                    <Call />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    );
};

export default SingleVet;
