import { TimeLapse } from '@/components';
import { defaultTheme, GlobalStyles } from '@/theme';
import { ThemeProvider } from 'styled-components';
import { Data } from '@/api/index'

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<TimeLapse data={Data} />
		</ThemeProvider>
	);
}

export default App;
