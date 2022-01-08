import {
    Facebook,
    Instagram,
    LocalPhone,
    LocationOn,
    MailOutline,
    Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>TREATS.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam quas eveniet adipisci velit placeat at, quae fugiat
                    sit nisi fugit rerum nobis beatae necessitatibus corporis
                    deserunt voluptate consectetur voluptas nulla asperiores
                    assumenda laudantium officia, reiciendis eius soluta? Quo
                    porro, molestiae sit consectetur eos amet repellendus,
                    assumenda quasi earum commodi aliquid?
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Usful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Food</ListItem>
                    <ListItem>Toys And Accessories</ListItem>
                    <ListItem>Talk To Vet</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <LocationOn style={{ marginRight: "10px" }} />
                    15 Rue Cap Bon Jarzona Sa7bi
                </ContactItem>
                <ContactItem>
                    <LocalPhone style={{ marginRight: "10px" }} />
                    +216 56310400
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} />
                    Hatemmdhaouadiii@gmail.com
                </ContactItem>
                <Payment src="https://makeupschoolsydney.com.au/wp-content/uploads/2020/11/visa-mastercard-paypal.jpg" />
            </Right>
        </Container>
    );
};

export default Footer;
