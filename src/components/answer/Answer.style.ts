import styled from "styled-components";

type TItemsWrapper = { height: number };

const S = {
  AnswerRoot: styled.div`
    display: flex;
    flex-direction: column;
  `,
  AnswerInputItemsWrapper: styled.div<TItemsWrapper>`
    display: flex;
    flex-direction: column;
    > * {
      margin-bottom: 8px;
    }
    height: ${({ height }) => `${height}px`};
    margin-bottom: 16px;
  `,
  DraggableInner: styled.div`
    display: flex;
    gap: 8px;
  `,
};

export default S;
