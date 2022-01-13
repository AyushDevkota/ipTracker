import { ThemeProvider } from "styled-components";
import Details from "./components/Details";
import Header from "./components/Header";
import Map from "./components/Map";
import { GlobalStyle } from "./components/styled/global.styled";

const theme = {
	colors: {
		primary: "hsl(0, 0%, 17%)",
		secondary: "hsl(0, 0%, 59%)",
	},
	fontWeight: {
		light: 400,
		normal: 500,
		semiBold: 700,
		bold: 800,
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header>
				<Details />
			</Header>
			<Map />
		</ThemeProvider>
	);
}

export default App;
