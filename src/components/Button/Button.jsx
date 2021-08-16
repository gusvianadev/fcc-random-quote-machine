import ButtonSty from './Button.styles';

const Button = ({ id, content, onClick }) => (
	<ButtonSty id={id} onClick={onClick}>
		{content}
	</ButtonSty>
);

export default Button;
