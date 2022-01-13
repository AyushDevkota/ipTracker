import styled from "styled-components";

export const StyledDetailsInfo = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;

	.title {
		font-size: 11px;
		text-transform: uppercase;
		color: ${(props) => props.theme.colors.secondary};
		font-weight: ${(props) => props.theme.fontWeight.bold};
		letter-spacing: 1px;
	}
	.data {
		font-size: 20px;
		color: ${(props) => props.theme.colors.primary};
		font-weight: ${(props) => props.theme.fontWeight.semiBold};
	}

	@media (min-width: 768px) {
		height: 100%;
		align-items: flex-start;
		gap: 0.25em;
		text-align: start;

		.title {
			margin-top: 2em;
			font-size: 12px;
		}
	}
`;
