import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
    input: path.resolve(__dirname, '../src/lib/index.ts'),
    output: {
        file: path.resolve(__dirname, '../rollup-dist/lib.js'),
        format: 'cjs',
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript()
    ]
}