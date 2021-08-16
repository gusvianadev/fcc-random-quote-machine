import styled from 'styled-components';

const AppSty = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	background-color: ${({ color }) => color};
	color: ${({ color }) => color};
	transition: background-color 1s ease;

	& button {
		background-color: ${({ color }) => color};
		transition: background-color 1s ease;
	}
`;

export default AppSty;
