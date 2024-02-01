import styled from "styled-components";

type TItemsWrapper = { height: number; borderColor?: string };
type TItemInner = { borderColor?: string };

const S = {
  AnswerRoot: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ItemsWrapper: styled.div<TItemsWrapper>`
    display: flex;
    flex-direction: column;
    > * {
      margin-bottom: 8px;
    }
    height: ${({ height }) => `${height}px`};
    margin-bottom: 16px;
    border: 2px solid ${({ borderColor }) => borderColor ?? "black"};
  `,
  ItemInner: styled.div<TItemInner>`
    display: flex;
    gap: 8px;
    border: 2px solid ${({ borderColor }) => borderColor ?? "black"};
  `,
};

export default S;
