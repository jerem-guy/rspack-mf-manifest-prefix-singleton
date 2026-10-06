import { rspack } from '@rspack/core'

export default {
  mode: 'production',
  entry: './src/index.js',
  output: { publicPath: 'auto', clean: true },
  plugins: [
    new rspack.container.ModuleFederationPlugin({
      name: 'remote',
      manifest: true,
      exposes: { './exposed': './src/exposed.js' },
      shared: {
        // prefix key: matches ds/Button, ds/Table
        'ds/': { singleton: false, requiredVersion: '^1.0.0' },
        // exact key, for comparison
        lib: { singleton: false, requiredVersion: '^1.0.0' },
      },
    }),
  ],
}
