import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.vue', '**/*.ts'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'no-console': 'off',
      'vue/no-multiple-template-root': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/require-v-for-key': 'error',
      'vue/no-use-v-if-with-v-for': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      'indent': ['error', 4, 'tab'],
      'no-tabs': 0,
    },
  },
  {
    ignores: [
      '.mjs',
      '.vscode',
      '/src/public',
    ],
  },
)
