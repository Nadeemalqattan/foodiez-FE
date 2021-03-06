import styled from "styled-components";
import { Link } from "react-router-dom";

//Home styling
export const Title = styled.h1`
  text-align: center;
`;
export const HomeImage = styled.img`
  position: fixed;
  right: 0;
  width: 500px;
`;
export const HomeText = styled.h1`
  position: absolute;
  top: 7em;
  left: 2em;
  color: #85d28e;
  p {
    color: #1e535f;
  }
`;
export const HomeTB = styled.p`
  position: absolute;
  top: 24em;
  left: 6.1em;
  color: #1e535f;
`;
export const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
`;

export const Description = styled.h2`
  text-align: center;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: block;
`;
export const ItemWrapper = styled.div`
  margin: 20px;
  align-items: center;
  img {
    width: 110px;
    height: 110px;
  }

  p {
    text-align: center;

    &.product-price {
      color: ${(props) => props.theme.pink};
    }
  }
  h3 {
    text-align: left;
    margin: 5px;
  }
`;
export const CardDiv = styled.div`
  maxwidth: 100px;
`;
export const Imagecard = styled.img`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 20s;
  border-radius: 15px;
  display: flex;
`;
export const NavColor = styled(Link)`
  color: #569f87;
  &.hover {
    color: black;
  }
`;
