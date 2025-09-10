import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	base: "/lato-font-test",
  plugins: [react()],
	build: {
		rollupOptions: {
			input: {
				main: "index.html",
				"sample-google-latin-v24": "sample-google-latin-v24.html",
				"sample-lato-latin-regular-italic": "sample-lato-latin-regular-italic.html",
				"sample-lato-latin-regular": "sample-lato-latin-regular.html",
				"sample-lato-regular-italic": "sample-lato-regular-italic.html",
				"sample-lato-regular": "sample-lato-regular.html",
			}
		}
	}
});
