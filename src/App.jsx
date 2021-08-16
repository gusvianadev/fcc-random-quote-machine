import { useEffect, useState } from 'react';
import GlobalStyles from './styles/Global.styles';
import AppSty from './styles/App.styles';
import QuoteBox from './components/QuoteBox/QuoteBox';

const App = () => {
	const [quote, setQuote] = useState(null);
	const colors = [
		'#16a085',
		'#27ae60',
		'#2c3e50',
		'#f39c12',
		'#e74c3c',
		'#9b59b6',
		'#FB6964',
		'#342224',
		'#472E32',
		'#77B1A9',
		'#73A857',
	];
	const [color, setColor] = useState('');

	useEffect(() => {
		quote && setColor(colors[Math.floor(Math.random() * colors.length)]);
	}, [quote]);

	return (
		<AppSty color={color}>
			<GlobalStyles />
			<QuoteBox quote={quote} setQuote={setQuote} />
		</AppSty>
	);
};

export default App;
