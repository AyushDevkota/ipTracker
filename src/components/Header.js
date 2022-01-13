import { StyledContainer } from "./styled/container.styled";
import { StyledHeader } from "./styled/header.styled";
import Form from "./Form";

const Header = (props) => {
	return (
		<StyledHeader>
			<StyledContainer>
				<h1>IP Address Tracker</h1>
				<Form />
				{props.children}
			</StyledContainer>
		</StyledHeader>
	);
};

export default Header;
