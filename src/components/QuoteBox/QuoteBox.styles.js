import styled from 'styled-components';

const QuoteBoxSty = styled.div`
	opacity: ${({ opacity }) => opacity};
	margin: auto;
	max-width: 450px;
	background-color: white;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	transition: opacity 1s ease;

	& #quote-icon {
		margin-right: 0.5rem;
		opacity: ${({ quoteChange }) => quoteChange};
		transition: opacity 1s ease;
	}

	& #text {
		font-size: 1.75em;
		margin: 0;
		opacity: ${({ quoteChange }) => quoteChange};
		transition: opacity 1s ease;
	}

	& #author {
		margin: 1rem 0 1rem auto;
		text-transform: capitalize;
		opacity: ${({ quoteChange }) => quoteChange};
		transition: opacity 1s ease;
	}

	& #btn-row {
		display: flex;
		justify-content: space-between;
	}
`;

export default QuoteBoxSty;
