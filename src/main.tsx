import "./index.css";
import { App } from './App.tsx';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

declare global {
	interface Window {
		IsIndex?: boolean;
		MUI?: boolean;
	}
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App mui={window.MUI ?? false} isIndex ={window.IsIndex ?? false} />
	</StrictMode>,
);
