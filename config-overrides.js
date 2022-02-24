const { override, addWebpackAlias, addBundleVisualizer, fixBabelImports } = require('customize-cra')
const path = require('path')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

const isProd = process.env.NODE_ENV === 'production'

const HTMLSpriteLoader = () => config => {
  const svgSpriteLoader = {
    test: /\.svg$/,
    loader: 'svg-sprite-loader',
    include: path.resolve(__dirname, './src/assets/images'),
    options: {
      symbolId: 'icon-[name]',
    },
  }
  
  const oneOf = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf
  oneOf.unshift(svgSpriteLoader)
  return config
}

const spriteLoaderPlugin = () => config => {
  config.plugins.push(new SpriteLoaderPlugin())
  return config
}

module.exports = override(
  HTMLSpriteLoader(),
  spriteLoaderPlugin(),
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
