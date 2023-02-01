/**
 * eslint + prettier + vscode 自动保存配置
 * https://juejin.cn/post/6844904194336358407
 */
module.exports = {
  plugins: ['prettier'],
  env: { esnext: true, browser: true },
  rules: {
    'prettier/prettier': 'error',
  },
  extends: ['plugin:prettier/recommended'],
};
