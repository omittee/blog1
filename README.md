# Omittee个人博客!
## 网站效果
  [omittee.cn](http://omittee.cn)
## 项目结构
```txt
.
├── be                                #后端文件夹
│   ├── dist                          
│   │   ├── be
│   │   └── fe
│   ├── package.json
│   ├── package-lock.json
│   ├── src
│   │   ├── app.ts                    #koa入口文件
│   │   ├── config                    #配置mongo
│   │   ├── controllers               #控制器
│   │   ├── models                    #模型
│   │   ├── routes                    #路由
│   │   └── schema                    #数据库表结构
│   ├── tsconfig.json
│   └── tsconfig.paths.json
├── fe
│   ├── build
│   │   ├── asset-manifest.json
│   │   ├── favicon.ico
│   │   ├── image
│   │   ├── index.html
│   │   ├── robots.txt
│   │   └── static
│   ├── craco.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── public                        #静态资源文件夹
│   │   ├── favicon.ico
│   │   ├── image
│   │   ├── index.html                #主html文件
│   │   └── robots.txt
│   ├── README.md
│   ├── src
│   │   ├── App.test.tsx
│   │   ├── App.tsx                   #顶层组件
│   │   ├── assets                    #主要存放CSS文件
│   │   ├── components                #React组件
│   │   ├── constants                 #存常量文件
│   │   ├── GlobalContext             #存React Context
│   │   ├── index.tsx                 #主文件
│   │   ├── network                   #存放网络请求相关文件
│   │   ├── react-app-env.d.ts
│   │   ├── reportWebVitals.ts
│   │   ├── setupTests.ts
│   │   ├── shared                    #前后端共享的类型定义
│   │   └── utils                     #工具函数
│   ├── tsconfig.json
│   └── tsconfig.paths.json
└── README.md
```
## 技术栈
* 前端
  * React
  * ts
  * scss
* 后端
  * Koa
  * mongoose
## 启动
1. 在mongodb中建立数据库"blog1"
2. git clone https://github.com/omittee/blog1
3. cd blog1/be
4. npm install
5. cd dist/be/src
6. 创建.env文件，添加jwt secretKey环境变量: `JWT_SECRET_KEY = "your_secret_key"`
7. 执行`node app.js`
8. 访问`localhost:3060`
