import Announcement from "../components/Announcement";
import styled from "styled-components";
import Navbar from "../components/Navbar";

import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import Vets from "../components/Vets";
const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const TalkToVet = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>TALK TO A VET</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>ONLINE ONLY/ALL :</FilterText>
                    <Select>
                        <Option selected>ONLINE ONLY</Option>
                        <Option>ALL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>FILTER BY REGION:</FilterText>
                    <Select>
                        <Option disabled selected>
                            PICK YOUR REGION
                        </Option>
                        <Option>Ariana</Option>
                        <Option>Béja</Option>
                        <Option>Ben Arous</Option>
                        <Option>Bizerte</Option>
                        <Option>Gabès</Option>
                        <Option>Nabeul</Option>
                        <Option>Jendouba</Option>
                        <Option>Kairouan</Option>
                        <Option>Kasserine</Option>
                        <Option>Kebili</Option>
                        <Option>Kef</Option>
                        <Option>Mahdia</Option>
                        <Option>Manouba</Option>
                        <Option>Medenine</Option>
                        <Option>Monastir</Option>
                        <Option>Gafsa</Option>
                        <Option>Sfax</Option>
                        <Option>Sidi Bouzid</Option>
                        <Option>Siliana</Option>
                        <Option>Sousse</Option>
                        <Option>Tataouine</Option>
                        <Option>Tozeur</Option>
                        <Option>Tunis</Option>
                        <Option>Zaghouan</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Vets />
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default TalkToVet;
