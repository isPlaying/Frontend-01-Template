# 每周总结可以写在这里


#### 解析步骤

- webpack解析自定义后缀文件

~~~javascript
{
    test: /\.view/,
    use:{
        loader: require.resolve("./myLoader.js")
    }
}
~~~

- myLoader

~~~javascriopt
let tree = parser.parseHTML(source);
~~~

- babel-loader解析jsx

~~~javascript
use: {
    loader: 'babel-loader',
    options: {
        presets: ['@babel/preset-env'],
        plugins: [
            ["@babel/plugin-transform-react-jsx", { pragma:"create" }]
        ]
    }
}
~~~