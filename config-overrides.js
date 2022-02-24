const {
  override,
  addWebpackAlias,
  addBundleVisualizer,
  fixBabelImports,
} = require('customize-cra')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

module.exports = override(
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
  }),
  isProd &&
    addBundleVisualizer({
      analyzerMode: 'disabled',
      generateStatsFile: true,
    }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
)
