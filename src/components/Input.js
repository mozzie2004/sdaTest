import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
	margin: 50px 0;
	width: 100%;
	padding: 10px 20px;
	outline: none;
	border: 1px solid grey;
	border-radius: 8px;
	font-size: 24px;
	line-height: 30px;
`;

const Input = ({value, setValue}) => {

	const onChange = (e) => {
		setValue(e.target.value)
	}

	return (
		<InputStyled required type='text' value={value} onChange={onChange} placeholder='Answer' />
	)
}

export default Input;