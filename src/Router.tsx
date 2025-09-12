import { AppMaterial } from "./AppMaterial";
import { AppVanilla } from "./AppVanilla";
import { Index } from "./Index";
import type { PageType } from "./main";

export function Router(props: { type: PageType; }): React.ReactNode {
	switch (props.type) {
		case "INDEX":
			return <Index />;
		case "MUI_OPTIMIZED":
		case "MUI":
			return <AppMaterial type={props.type} />;
		default:
			return <AppVanilla />;
	}
}
