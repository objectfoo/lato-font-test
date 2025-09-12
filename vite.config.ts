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
				"sample-google-latin-v13": "sample-google-latin-v13.html",
				"sample-google-latin-v24": "sample-google-latin-v24.html",
				"sample-lato-latin-upright-italic": "sample-lato-latin-upright-italic.html",
				"sample-lato-latin-upright": "sample-lato-latin-upright.html",
				"sample-lato-upright": "sample-lato-upright.html",
				"sample-lato-upright-italic": "sample-lato-upright-italic.html",
				"sample-mui-google-lato-latin-v13": "sample-mui-google-lato-latin-v13.html",
				"sample-mui-lato-latin-upright-italic": "sample-mui-lato-latin-upright-italic.html",
			}
		}
	}
});
