import styled from 'styled-components';

export const Container = styled.div<any>`
  width: max-content; // ${(props) => props.width};
  height: max-content;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
`;

export const Image = styled.img<any>`
  width: ${(props) => props.width || '40px'};
  height: auto;
`;

export const Label = styled.div<any>`
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: 300;
  margin-left: 8px;
`;
