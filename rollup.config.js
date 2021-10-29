import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import litcss from 'rollup-plugin-lit-css';

const pkg = require('./package.json');

export default {
  input: `src/index.ts`,
  output: [{ dir: 'dist', format: 'es', sourcemap: true }],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash-es')
  external: [/lit/, 'lodash-es'],
  watch: {
    include: 'src/**',
  },
  plugins: [litcss({}), typescript({}), resolve(), commonjs()],
};
