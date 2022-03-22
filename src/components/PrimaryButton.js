import React from "react";
import styled from "styled-components";

const PrimaryButtonStyled = styled.button`
	display: block;
	padding: 10px 24px;
	background: #000046;
	color: #FFF;
	border: none;
	outline: none;
	font-size: 20px;
	font-weight: 500;
	border-radius: 8px;
	cursor: pointer;
`;

const PrimaryButton = ({title, onClick}) => {
  return (
		<PrimaryButtonStyled onClick={onClick}>{title}</PrimaryButtonStyled>
	)
}

export default PrimaryButton;