import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
    position: fixed; 
    width: 100%; 
    height: 60px;
    left: 0; 
    top: 0; 
    background: #0D0D0D;
    display: flex; 
    justify-content: space-between; 
    box-shadow: 0px 0px 20px rgba(0, 0, 0, .15);
`
const List = styled.ul`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
`;
const Item = styled.li`
    height: 100%; 
    line-height: 60px;
    border-bottom: 5px solid ${ props => props.current ? "#73706F" : "transparent"}; 
    transition: .15s;
`
const Slink = styled(Link)`
    display: inline-block; 
    height: 100%;
    padding: 0 40px; 
`
const HeaderComponent = ({location:{pathname}}) => (
    <Header>
        <List>
            <Item current={pathname === "/"}><Slink to="/">Movies</Slink></Item>
            <Item current={pathname === "/Tv"}><Slink to="/Tv">Tv</Slink></Item>
            <Item current={pathname === "/Search"}><Slink to="/Search">Search</Slink></Item>
        </List>
    </Header>
);

export default withRouter(HeaderComponent)