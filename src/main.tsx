import { createRoot } from 'react-dom/client';
import { Router } from './Router.tsx';
import { StrictMode } from 'react';

export type PageType = "MUI" | "INDEX" | "SAMPLES";
declare global {
	interface Window {
		type?: PageType;
	}
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router type={window.type ?? "SAMPLES"} />
	</StrictMode>,
);
