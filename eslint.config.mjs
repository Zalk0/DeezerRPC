import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';


export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.eslintRecommended, //this one doesn't work
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
);
