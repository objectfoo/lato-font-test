import { CreateWhsTheme } from "./CreateWhsTheme";
import { SampleViewMui } from "./SampleViewMui";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type { PageType } from "./main";


export function AppMaterial(props: { type: PageType; }) {
	return (
		<ThemeProvider theme={CreateWhsTheme({
			fontFamily: props.type === "MUI_OPTIMIZED" ? "ALTERNATE" : "STD",
		})}>
			<CssBaseline />
			<SampleViewMui />
		</ThemeProvider>
	);
}
