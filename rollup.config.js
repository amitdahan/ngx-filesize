import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';
import uglify from 'rollup-plugin-uglify';

export default {
    input: './src/index.ts',
    output: {
        file: './dist/index.js',
        format: 'umd',
        sourcemap: 'inline',
        name: 'ngxFilesize'
    },
    plugins: [
        typescript(),
        angular(),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        alias({
            rxjs: __dirname + '/node_modules/rxjs-es',
        }),
        commonjs(),
        uglify()
    ],
    globals: {
        "filesize": "filesize"
    },
    externals: [
        '@angular/core'
    ]
};