import styled from "styled-components";

type TItemsWrapper = { height: number; borderColor?: string };
type TItemInner = { borderColor?: string };

const S = {
  AnswerRoot: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  ItemsWrapper: styled.div<TItemsWrapper>`
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
  DragIconWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  ItemInner: styled.div<TItemInner>`
    display: flex;
    border: 1px solid ${({ borderColor }) => borderColor ?? "black"};
  `,
};

export default S;
