import { CreateWhsTheme } from "./CreateWhsTheme";
import { SampleViewMui } from "./SampleViewMui";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


export function AppMaterial() {
	return (
		<ThemeProvider theme={CreateWhsTheme()}>
			<CssBaseline />
			<SampleViewMui />
		</ThemeProvider>
	);
}
