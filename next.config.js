const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  distDir: 'build',
  output: 'export'
})

/*const nextConfig = {
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  distDir: 'build',
  output: 'export'
}*/

module.exports = withNextra()
