import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

const ResultBlockStyled = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ResultsItem = styled.div`
	margin: 10px 0;
	text-align: center;
	:first-child {
		margin-top: 0;
	}
`;

const Question = styled.div`
	font-size: 24px;
	font-weight: 500;
`;

const Answer = styled.div`
	margin-top: 10px;
	font-size: 18px;
	font-weight: 400;
`;

const ResultBlock = ({results, setResults, setShowResults}) => {

	const onRepeat = () => {
		setResults(state => state.map(item => ({...item, answer: ''})))
		setShowResults(false)
	}

	return (
		<ResultBlockStyled>
			{
				results.map((item, i) => (
					<ResultsItem key={i}>
						<Question>{item.question}</Question>
						<Answer>{item.answer}</Answer>
					</ResultsItem>
				))
			}
			<PrimaryButton title='Repeat' onClick={onRepeat} />
		</ResultBlockStyled>
	)
}

export default ResultBlock;