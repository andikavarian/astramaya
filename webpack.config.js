const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

//pug setting
const pug = {
    test: /\.pug$/,
    use: ['html-loader?attrs=false', 'pug-html-loader'],
  };

//JS setting using babel loader, excluding /node_modules/ because it is unnecessary
const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader"}
  }

  //CSS setting using scss postcss and autoprefixer
const style ={
  test: /\.scss$/,
  use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
}

const fileloader={
        test: /\.(png|jpg|jfif|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: path.resolve(__dirname, '/src'),
              outputPath: 'dist/',
              publicPath: '../',
              useRelativePaths: true
            }
          }
        ]
      }

const image={
  test: /\.(gif|png|jfif|jpe?g|svg)$/i,
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true, // webpack@1.x
        disable: true, // webpack@2.x and newer
      },
    },
  ],
}


//meat of this config. 
  const config = {
    //configure entry as you add page
    entry: {
      'main':'./src/pages/main/main.js',
      'main_ina':'./src/pages/main_ina/main_ina.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },
    
    module: {
      rules: [pug, js, style, fileloader, image]
    },

    resolve: {
      alias: {
        'assets': path.resolve('./src/asset')
      }
    },
    plugins: [
      //this is to clean pre-made clean dist/ folder
      new CleanWebpackPlugin('dist', {} ),

      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/pages/main/main.pug',
        inject: false
      }),
      new HtmlWebpackPlugin({
        filename: 'index_ina.html',
        template: './src/pages/main_ina/main_ina.pug',
        inject: false
      }),
      
      // to create css, make sure you include import [filename].css in every page .css file in same directory as pug filename
      new MiniCssExtractPlugin({
        filename: '[name].css',
      })
   ]
  };
  
  module.exports = config;
