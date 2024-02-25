import styled from "styled-components";

type TItemsWrapper = { height: number; borderColor?: string };

const S = {
  Root: styled.div`
    display: flex;
    flex-direction: column;

    gap: 20px;
  `,
  ExecutionItemsWrapper: styled.div<TItemsWrapper>`
    display: flex;
    flex-direction: column;

    > * {
      margin-bottom: 8px;
      padding: 8px 4px;
      height: 56px;
    }

    height: ${({ height }) => height}px;
    margin-bottom: 16px;
    border: 1px solid ${({ borderColor }) => borderColor ?? "black"};
  `,
  ExecutionItemContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    border: 1px solid black;
  `,
};

export default S;
