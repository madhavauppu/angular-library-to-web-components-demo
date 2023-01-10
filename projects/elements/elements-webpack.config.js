const uuidv1 = require('uuid/v1');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    output: {
        jsonpFunction: 'myElements-' + uuidv1(),
        library: 'elements',
    },
    // optimization: {
    //     minimize: true,
    //     // mangleWasmImports: true,
    //     // mergeDuplicateChunks: false,
    //     // removeAvailableModules: true,
    //     // minimizer: [
    //     //     new TerserPlugin({
    //     //         minify: TerserPlugin.uglifyJsMinify,
    //     //         // `terserOptions` options will be passed to `uglify-js`
    //     //         // Link to options - https://github.com/mishoo/UglifyJS#minify-options
    //     //         terserOptions: {},
    //     //       }),
    //     // ],
    //   },
    optimization: {
        minimize: true
      },
};
