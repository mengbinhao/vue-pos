# vue-pos

## Project setup
```
npm install
npm run serve
npm run build
npm run test
npm run lint
```

## knowledge point
1. mockplus draw prototype
![](./doc/images/page.png)
2. vue
3. axios
   1. created hook to fetch data
   2. axios all
   ```javascript
    axios.all([this.getOftenGoods(), this.getTypeGoods()]).then(
        axios.spread((acct, perms) => {
          //...
        })
      )
   ```
   3. build tabObjs after sync fetch data from server
4. [阿里巴巴矢量图](https://www.iconfont.cn/)
  - **sysmbol**
  - font class
5. element-ui for vue-cli 3
   1. vue add element(commite before install, it will change app.vue、main.js、babel.config.js)
   2. mounted hook to reset el-column height
   3. el-table
      1. scope.row
      2. getSummaries
6. [sm图床](https://sm.ms/)
7. [easy-mock](https://www.easy-mock.com)
8.  build
    1. 打包公共资源路径`assetsPublicPath:'./'`
    2. serve
    ```bash
    npm i -g serve
    # -s 参数的意思是将其架设在 Single-Page Application 模式下
    # 这个模式会处理即将提到的路由问题
    serve -s dist
    ```
    3. `webpack-bundle-analyzer`