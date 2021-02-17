import styled from "styled-components";

//Home styling
export const Title = styled.h1`
  text-align: center;
`;
export const HomeImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
export const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 15%;
`;

export const Description = styled.h2`
  text-align: center;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const ItemWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.product-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;
