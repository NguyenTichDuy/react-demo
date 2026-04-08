const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const pexelsApiKey =
  process.env.PEXELS_API_KEY ||
  '563492ad6f91700001000001b61382187ea546f0a1587d00d525bdca';

module.exports = {
  mode: "production",
  entry: {
    index: './src/index.tsx',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/i,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    }),
    new webpack.DefinePlugin({
      'process.env.PEXELS_API_KEY': JSON.stringify(pexelsApiKey),
    }),
    ...(process.env.ANALYZE
      ? [new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false })]
      : []),
  ],
  devServer: {
    static: './dist',
    hot: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Pages: path.resolve(__dirname, "src/pages/"),
      Themes: path.resolve(__dirname, "src/themes/"),
      Assets: path.resolve(__dirname, "src/assets/"),
      Config: path.resolve(__dirname, "src/config/"),
      Hooks: path.resolve(__dirname, "src/hooks/"),
    }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};