import React from "react";
// import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import QuestionTitle from "./QuestionTitle";

const QuestionForm = styled.form`
    margin-top: 40px;
`;

const QuestionSection = ({question, value, setValue, onNext, buttonTitle='Next'}) => {

    const onSubmit = (e) => {
        e.preventDefault();
        onNext()
    }

    return (
        <QuestionForm onSubmit={onSubmit}>
            <QuestionTitle title={question} />
            <Input value={value} setValue={setValue} />
            <PrimaryButton title={buttonTitle} />
        </QuestionForm>
    )
}

export default QuestionSection;