import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	body {
		background:white;
	}

	html {
		font-family: 'Roboto';
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	*:focus {
		outline: none;
	}

`;
