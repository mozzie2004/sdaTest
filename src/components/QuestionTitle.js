import React from "react";
import styled from "styled-components";

const QuestionTitleStyled = styled.div`
    font-size: 32px;
    font-weight: 500;
`;

const QuestionTitle = ({title}) => {
    return (
        <QuestionTitleStyled>{title}</QuestionTitleStyled>
    )
}

export default QuestionTitle;