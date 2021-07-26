const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
 
module.exports = {
 
    mode: 'development',

    output:{
        clean: true, // lo limpia todo y lo vuelve a crear

    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false,
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/,// evalua si son png, jpe o jpg o gif
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',// es el archivo del cual queremos que se base
            filename: './index.html',// es el nombre del archivo html que crea
        }),
        new MiniCssExtractPlugin({
            // filename: '[name].[fullhash].css',// cada vez que se haga crea un nuevo hash y hace que no se mantenga en cache este archivo
            filename: '[name].css',
            ignoreOrder: false,// le digo qie ignore el orden  
        }),
        new CopyPlugin({
            patterns:[
               {from: 'src/assets/', to: 'assets/'}
            ]
            
        })
    ]

 
    
}