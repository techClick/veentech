import styled from 'styled-components';

export const Container = styled.div<any>`
  width: ${(props) => props.width};
  height: max-content;
  margin-bottom: 0px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Label = styled.div`
  font-size: 18px;
  font-weight: 300;
`;
