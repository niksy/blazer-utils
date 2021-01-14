'use strict';

const path = require('path');
const del = require('del');
const globby = require('globby');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const atImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const dartSass = require('sass');
const Fiber = require('fibers');

module.exports = async () => {
	const port = 0;

	await del(['./test-dist']);

	const files = await globby([
		'./test/manual/**/*.js',
		'!./test/manual/webpack.config.js'
	]);

	const entries = files
		.map((file) => {
			const extname = path.extname(file);
			const key = path.basename(file, extname);
			const object = {};
			object[
				`${file
					.replace('./test/manual/', '')
					.replace(path.basename(file), '')}${key}`
			] = file;
			return object;
		})
		.reduce((previous, next) => {
			return Object.assign(previous, next);
		}, {});

	return {
		entry: entries,
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, '../../test-dist')
		},
		mode: 'none',
		devtool: 'cheap-module-inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, '../../test-dist'),
			port: port,
			open: true
		},
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								import: false
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								postcssOptions: {
									config: false,
									plugins: [atImport(), postcssPresetEnv()]
								}
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
								implementation: dartSass,
								sassOptions: {
									fibers: Fiber
								}
							}
						}
					]
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[id].css'
			}),
			...Object.keys(entries).map((key) => {
				return new HtmlWebpackPlugin({
					title: key,
					chunks: [key],
					filename: `${key}.html`,
					template: `./test/manual/${key}.html`
				});
			})
		]
	};
};
