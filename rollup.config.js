// rollup.config.js
const env = process.env.DEVELOPMENT ? 'development' : 'production';
const devMode = process.env.NODE_ENV === 'development';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    output: {
      format: 'es',
      // sourcemap: devMode ? 'inline' : false,
      sourcemap: false,
      inlineDynamicImports: true,
    },
    plugins: [
      // Resolve bare module specifiers to relative paths
      resolve(),
      // Enable import assertions for top-level CSS and JSON modules.
      // importAssertionsPlugin(),
      // Minify HTML template literals
      // minifyHTML(),
      // Minify JS
      terser({
        ecma: 2020,
        // mangle: { toplevel: true },
        compress: {
          module: true,
          warnings: true,
          // toplevel: true,
          // unsafe_arrows: true,
          drop_console: !devMode,
          drop_debugger: !devMode,
        },
        output: { quote_style: 1 },
      }),
      // replace({
      //   'process.env.NODE_ENV': JSON.stringify(env),
      // }),
      // analyze({ summaryOnly: true }),
    ],
  },
];
