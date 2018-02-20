const path = require('path')
const webpack = require('webpack')
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js')

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env)

  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, './tsconfig.json'),
          },
        },
      ],
    },
  ]

  config.resolve.extensions = ['.tsx', '.ts', '.js', '.jsx', '.png', '.jpg']
  config.resolve.modules = [
    ...config.resolve.modules,
    path.resolve('./src'),
    path.resolve('./node_modules'),
  ]

  return config
}
