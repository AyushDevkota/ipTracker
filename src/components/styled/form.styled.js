import styled from "styled-components";

export const StyledForm = styled.form`
	display: flex;

	input {
		padding: 1em 1.5em;
		font-size: 18px;
		width: 100%;
		border: none;
		outline: none;
		border-radius: 1em 0 0 1em;
		color: ${(props) => props.theme.colors.primary};
		font-weight: ${(props) => props.theme.fontWeight.normal};
	}

	input::placeholder {
		font-size: 14px;
	}

	button {
		padding: 1.25em 1.6em;
		border: none;
		background-color: ${(props) => props.theme.colors.primary};
		border-radius: 0 1em 1em 0;
	}
`;
