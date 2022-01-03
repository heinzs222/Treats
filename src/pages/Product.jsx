import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
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
const FilterCcontainer = styled.span`
    font-weight: 1000;
    font-size: 40px;
`;
const Filter = styled.span`
    font-weight: 1000;
    font-size: 40px;
`;
const FilterTitle = styled.span`
    font-weight: 1000;
    font-size: 40px;
`;

const Product = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://m.media-amazon.com/images/I/71xCoqZkdkL._SL1500_.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Puppy food</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi dolorem excepturi est. Officia tempore nobis
                        eveniet eius necessitatibus voluptatum fugiat quam animi
                        amet, natus enim at beatae expedita atque maxime, sequi
                        deleniti numquam et. Ullam minima, eius aliquid
                        provident facilis esse mollitia a, sunt tenetur
                        inventore omnis distinctio perferendis tempore.
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterCcontainer>
                        <Filter>
                            <FilterTitle></FilterTitle>
                        </Filter>
                    </FilterCcontainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;
