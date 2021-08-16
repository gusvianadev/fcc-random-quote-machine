import { useEffect, useState } from 'react';
import { FaTwitter, FaQuoteLeft } from 'react-icons/fa';
import QuoteBoxSty from './QuoteBox.styles';
import Button from '../Button/Button';

const QuoteBox = ({ quote, setQuote }) => {
	const [getQuote, setGetQuote] = useState(true);

	useEffect(async () => {
		if (getQuote) {
			const res = await fetch('https://api.quotable.io/random');
			const data = await res.json();
			setTimeout(() => {
				setQuote(data);
				setGetQuote(false);
			}, 300);
		}
	}, [getQuote]);

	return (
		<QuoteBoxSty
			id="quote-box"
			opacity={quote ? 1 : 0}
			quoteChange={getQuote ? 0 : 1}
		>
			<blockquote id="text">
				<FaQuoteLeft id="quote-icon" />
				{quote && quote.content}
			</blockquote>
			<cite id="author">{quote && quote.author}</cite>
			<div id="btn-row">
				<Button
					content={
						<a
							id="tweet-quote"
							className="twitter-share-button"
							href={`https://www.twitter.com/intent/tweet?hashtags=${encodeURIComponent(
								quote && quote.author.replaceAll(' ', '')
							)},quotes&text=${encodeURIComponent(
								quote && quote.content
							)}`}
							target="_blank"
							rel="noreferrer"
						>
							<FaTwitter />
						</a>
					}
				/>
				<Button
					id="new-quote"
					content="New quote"
					onClick={() => setGetQuote(true)}
				/>
			</div>
		</QuoteBoxSty>
	);
};

export default QuoteBox;
