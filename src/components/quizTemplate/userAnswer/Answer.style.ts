import styled from "styled-components";

type SItemsWrapperProps = { borderColor: string };
type SItemContainerProps = { borderColor: string };

const S = {
  AnswerRoot: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  ItemsWrapper: styled.div<SItemsWrapperProps>`
    display: flex;
    flex-direction: column;

    > * {
      margin-bottom: 8px;
      padding: 8px 4px;
      height: 56px;
    }

    margin-bottom: 16px;
    border: 1px solid ${({ borderColor }) => borderColor};
  `,
  DragIconWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  ItemContainer: styled.div<SItemContainerProps>`
    display: flex;
    border: 1px solid ${({ borderColor }) => borderColor};
  `,
};

export default S;
