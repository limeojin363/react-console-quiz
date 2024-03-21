import styled from "styled-components";

const S = {
  QuizTemplateRoot: styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 8px;
  `,
  TopArea: styled.div``,
  BottomArea: styled.div`
    display: flex;
    gap: 16px;
  `,
  BottomLeftArea: styled.div`
    flex: 1;
  `,
  BottomRightArea: styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
  `,
};

export default S;
