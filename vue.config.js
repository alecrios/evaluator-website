const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
	configureWebpack: {
		plugins: [
			new PrerenderSPAPlugin(
				path.resolve(__dirname, 'dist'),
				['/'],
			),
		],
	},
};
