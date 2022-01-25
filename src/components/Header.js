import styled from "styled-components";

const Title = styled.header`
  text-align: center;
  padding: 2rem 0;
`;

const Header = (props) => {
  return (
    <Title>
      { props.title }
    </Title>
  )
}

export default Header;