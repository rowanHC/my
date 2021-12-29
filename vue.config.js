const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
// Vue.config.js
module.exports = {
  // 基本路径
  publicPath: "./",
  // 构建的输出目录
  outputDir: "dist",
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.symlinks(true);
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("@img", resolve("src/assets/images"))
      .set("@css", resolve("src/assets/styles/css"))
      .set("@scss", resolve("src/assets/styles/scss"));
  },
  devServer: {
    host: "0.0.0.0",
    // port: 8888,  // 端口
    open: true, // 自动开启浏览器
    compress: false, // 开启压缩
    // hotUpdate: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    // proxy: {
      // "": {
      //   target: "",
      //   changOrigin: true,
      // },
    // },
  },
};
