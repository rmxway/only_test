import { Header } from '@/components';
import { defaultTheme, GlobalStyles } from '@/theme';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<Header />
			<h1>TIME LINE</h1>
		</ThemeProvider>
	);
}

export default App;
