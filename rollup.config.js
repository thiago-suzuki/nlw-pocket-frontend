// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  plugins: [
    resolve(),
    commonjs(),
    // outros plugins
  ],
}
