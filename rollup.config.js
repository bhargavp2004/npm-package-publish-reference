import { defineConfig } from "rollup";
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
    input: "./src/index.js", 
    output: [
        {
            dir: "dist",
            format: "es", 
            name: "my-rjsf9",
            exports: "named"
        }
    ],
    external: [
      'react',
      'react-dom',
      'bootstrap/dist/css/bootstrap.min.css',
      'bootstrap/dist/js/bootstrap.js',
      '@coreui/react',
      '@mui/material',
      '@rjsf/core',
      '@rjsf/validator-ajv8',
      'ajv',
      'axios',
      'bootstrap',
      'date-fns',
      'jodit-react',
      'lucide-react',
      'moment',
      'primereact',
      'react-datepicker',
      'react-datetime-picker',
      'react-icons',
      'react-photo-album',
      'react-querybuilder',
      'react-redux',
      'react-scripts',
      'react-select',
      'sass',
      'sass-loader',
      'web-vitals',
      'yet-another-react-lightbox',
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-react'],
            babelHelpers: 'bundled',
            extensions: ['.js', '.jsx'],
        }),
        nodeResolve({
            extensions: ['.js', '.jsx'],
        }),
        commonjs(),
        postcss({
            extract: true,
            minimize: true,
        }),
    ],
});
