import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import { mobile } from "../responsive";
import { CallOutlined } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    width: 100%;
    height: 100%;
`;

const Image = styled.img`
    width: 75%;
    height: 75%;
    object-fit: cover;
    ${mobile({ height: "40%" })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 1000;
    font-size: 40px;
`;
// const FilterCcontainer = styled.span`
//     font-weight: 1000;
//     font-size: 40px;
// `;
// const Filter = styled.span`
//     font-weight: 1000;
//     font-size: 40px;
// `;
// const FilterTitle = styled.span`
//     font-weight: 1000;
//     font-size: 40px;
// `;
const Bythis = styled.a`
    color: #589ff0;
    text-decoration: none;
    :hover {
        text-decoration: underline;
        font-weight: 300;
    }

    :active {
        text-decoration: none;
    }
    font-weight: 200;
`;

const AddContainer = styled.div`
    width: 50%;
    margin: 40px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Ammount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    font-size: 20px;
    padding: 15px;
    margin: 24px;
    border: none;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #e9f0e6;
    }
`;

const Adress = styled.h1`
    padding: 15px;
`;
const PhoneNumber = styled.h1`
    padding: 15px;
`;

const VetInfo = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://weu-az-web-cdnep.azureedge.net/mediacontainer/medialibraries/adamsvets/images/gallery/gallery1.jpg?ext=.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Doc Name </Title>
                    <Desc>
                        <Adress>15 rue cap bon bizerte</Adress>
                        <PhoneNumber>+216 24 530 662</PhoneNumber>
                    </Desc>
                    <Price>$ 30</Price>
                    <Button>
                        <CallOutlined />
                        Call
                    </Button>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default VetInfo;
