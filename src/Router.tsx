import { AppMaterial } from "./AppMaterial";
import { AppVanilla } from "./AppVanilla";
import { Index } from "./Index";
import type { PageType } from "./main";

export function Router(props: { type: PageType; }): React.ReactNode {
	console.log(props)
	switch (props.type) {
		case "INDEX":
			return <Index />;
		case "MUI":
			return <AppMaterial />;
		default:
			return <AppVanilla />;
	}
}
