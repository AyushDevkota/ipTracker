import styled from "styled-components";
import bgImg from "../../images/pattern-bg.png";

export const StyledHeader = styled.header`
	padding: 1em 0 7.75em;
	color: #fff;
	background: url(${bgImg}) center;
	height: 30%;
	position: relative;

	h1 {
		font-size: 25px;
		padding-bottom: 1em;
	}

	@media (min-width: 768px) {
		padding: 1em 0 5em;
	}
`;
