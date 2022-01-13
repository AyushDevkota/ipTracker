import styled from "styled-components";

export const StyledDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	color: black;
	width: 90%;
	max-width: 350px;
	inset: 60% 0 -40% 0;
	margin: 0 auto;
	position: absolute;
	z-index: 99;
	border-radius: 1em;
	padding: 1em 0;

	@media (min-width: 768px) {
		max-width: 1000px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2em;
		inset: 70% 0 -30% 0;
		padding: 0 2em;
		align-items: center;
	}
`;
