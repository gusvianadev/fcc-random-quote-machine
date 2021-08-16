import styled from 'styled-components';

const ButtonSty = styled.button`
	border: none;
	border-radius: 3px;
	outline: none;
	padding: 0.6rem;
	margin-right: 0.3rem;
	color: white;
	cursor: pointer;

	& a {
		all: unset;
		display: flex;
		font-size: 1.3rem;
	}
`;

export default ButtonSty;
