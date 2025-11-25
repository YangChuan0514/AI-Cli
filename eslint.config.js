import tseslint from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'
import vueParser from 'vue-eslint-parser'

export default [
  { ignores: ['.nuxt/**', 'dist/**', 'node_modules/**'] },
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: { parser: tseslint.parser },
    },
  },
  ...tseslint.configs.recommended.map((c) => ({ ...c, files: ['**/*.{ts,js}'] })),
  { rules: { 'vue/multi-word-component-names': 'off' } },
  prettier,
]
