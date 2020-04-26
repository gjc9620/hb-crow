import babel from "rollup-plugin-babel";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'lib/index.js',
  output: {
    file: 'lib/index.js',
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    commonjs({
      include: "node_modules/**"
    }),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ]
};
