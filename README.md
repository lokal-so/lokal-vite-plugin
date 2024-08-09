# Lokal Vite Plugin

Vite Plugin for Lokal JS/TS client

## Installation

```sh
npm i lokal-vite-plugin
```

## Usage

```javascript
// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import lokalTunnel from 'lokal-vite-plugin';

export default defineConfig({
	plugins: [lokalTunnel({
        tunnelName: "my app",
		lanAddress: "my-app.local"
	})]
});
```

## License

MIT
