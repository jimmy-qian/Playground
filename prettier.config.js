// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  trailingComma: 'all',
  arrowParens: 'always',
  singleQuote: true,
  printWidth: 100,
  importOrder: [
    '^types$',
    '^(react|react-dom)$',
    '^next(.*)$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(src|vectors|images|services|hooks|queries|store|styles|config|navigators|screens|static)(/.*|$)',
    '^(pages|layouts|modules|common)(/.*|$)',
    '',
    '^[./]',
  ],
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  importOrderParserPlugins: ['typescript', 'jsx'],
  importOrderTypeScriptVersion: '5.3.3',
};
