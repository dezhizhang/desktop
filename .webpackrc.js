
export default {
  "entry": 'src/index.js',
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true}],
  ],
  "alias": {
    "routes": `${__dirname}/src/routes/`,
    "models": `${__dirname}/src/models/`,
    "services": `${__dirname}/src/services/`,
    "utils": `${__dirname}/src/utils/`,
    "components": `${__dirname}/src/components/`,
    "assets": `${__dirname}/src/assets/`
  },
  publicPath: process.env.API_ENV !=='dev'?'/':'/',
  "theme": "./src/theme.js", //用于自定义样式
  "proxy": {
    "/": {
      'target':'http://www.xiaozhi.shop/',
      "changeOrigin": true,
      "pathRewrite": { "^/": "" }
    }   
  },
  define: {  'API_ENV': process.env.API_ENV }
} 