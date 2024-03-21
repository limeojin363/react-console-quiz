import styled from "styled-components";

const S = {
  CodeExecutionRoot: styled.div`
    display: flex;
    flex-direction: column;

    gap: 20px;
  `,
  ListContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 12px 4px;

    border: 1px solid transparent;
  `,
  ItemContainer: styled.div`
    height: 50px;
    border: 1px solid black;

    display: flex;
    align-items: center;
  `,
};

export default S;
