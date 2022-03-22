import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
	padding: 0 20px;
	margin: 0 auto;
	width: 100%;
	max-width: 640px;
`;

const Container = ({children}) => {
	return (
		<ContainerStyled>
			{children}
		</ContainerStyled>
	)
}

export default Container;