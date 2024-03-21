import styled from "styled-components";

type SItemsWrapperProps = { borderColor: string };
type SItemContainerProps = { borderColor: string };

const S = {
  UserAnswerRoot: styled.div`
    display: flex;
    flex-direction: column;

    gap: 20px;
  `,
  ListContainer: styled.div<SItemsWrapperProps>`
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 12px 4px;
    border: 1px solid ${({ borderColor }) => borderColor};
  `,
  ItemContainer: styled.div<SItemContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    height: 50px;
    padding: 4px;

    border: 1px solid ${({ borderColor }) => borderColor};
  `,
};

export default S;
