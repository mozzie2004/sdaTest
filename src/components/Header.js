import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
	padding: 0 30px;
	height: 60px;
	background: ${p => p.theme.secondaryBg};
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const HeaderTitle = styled.div`
	color: ${p => p.theme.textColor};
	font-weight: 700;
	font-size: 24px;
`;

const ThemeToggle = styled.div`
	color: ${p => p.theme.textColor};
	font-weight: 700;
	font-size: 24px;
	cursor: pointer;
`;


const Header = ({onToggleTheme}) => {
	return (
		<HeaderStyled>
			<HeaderTitle>Questionnaire</HeaderTitle>
			<ThemeToggle onClick={onToggleTheme}>Theme</ThemeToggle>
		</HeaderStyled>
	)
}

export default Header;