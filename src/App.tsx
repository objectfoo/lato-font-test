import { AppMaterial } from "./AppMaterial";
import { AppVanilla } from "./AppVanilla";
import { Samples } from "./Samples";

export function App(props: { mui: boolean; isIndex: boolean; }): React.ReactNode {
	return props.isIndex
		? <Samples />
		: props.mui
			? <AppMaterial />
			: <AppVanilla />;
}
