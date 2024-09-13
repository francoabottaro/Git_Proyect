import globals from 'globals';
import pluginJs from '@eslint/js';
import 'eslint-config-prettier';

export default [
	{
		files: ['**/*.js', 'main.js'],
		languageOptions: { sourceType: 'module' },
	},
	{
		languageOptions: { globals: globals.es2021 },
		extends: ['eslint-config-prettier'],
	},
	...pluginJs.configs.recommended,
];
