# gulp
gulp基础配置
本配置参考https://w3ctrain.com/2015/12/22/gulp-for-beginners/?utm_source=tuicool&utm_medium=referral

# 功能
    
    搭建本地web服务
    编译Sass
    每当修改内容时，自动刷新页面
    优化&压缩资源

# 规范目录结构

    build           - 存放开发环境的内容
    dist            - 存放生产环境的内容
    
    src             - 开发
        assets      - 静态文件（如图片、视频）
        common      - 存放公共文件（如全局样式、iconfont）
        components  - 组件
        js          - 脚本
        mock        - 模拟数据
        plugins     - 插件
        style       - 样式
        view        - 入口

# 指令
    
    安装node.js（稳定版）
    全局安装gulp
        - npm install gulp -g (Windows用户)
        - sudo npm install gulp -g (Mac用户)
    初始化
        - npm init
    局部安装gulp（在package.json添加gulp依赖）
        - npm install gulp --save-dev

    开发    - gulp dev
    生产    - gulp build