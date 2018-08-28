var gulp = require('gulp');     // 加载gulp包
var sass = require('gulp-sass')     // sass编译
var browserSync = require('browser-sync')    // 浏览器自动刷新
var autoprefixer = require('gulp-autoprefixer')    // 内核css前缀
var sourcemaps = require('gulp-sourcemaps');    // 将压缩文件恢复到源文件原始位置的映射代码
var del = require('del');   // 删除旧文件
var runSequence = require('run-sequence');  // 按顺序执行
const babel = require('gulp-babel');    // ES6转ES5

// 自动删除旧文件
gulp.task('clean:build',function(){
    del('build');
});
gulp.task('clean:dist',function(){
    del('dist');
});

// 编译sass
gulp.task('sass', function(){
    return gulp.src('src/styles/**/*.scss')    // 入口
    .pipe(sass())   // 编译
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('build/styles'))    // 出口
});

// 编译js
gulp.task('js', function(){
    gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('build/js'))
});

// 浏览器自动刷新
gulp.task('browserSync',function(){
    browserSync({
        server:{
            baseDir: 'src'  // 路径
        },
    })
});

//  监听代码变更
gulp.task('watch', function(){
    gulp.watch('src/view/**/*.html', ['html']).on("change", browserSync.reload);    // 监听html
    gulp.watch('src/styles/**/*.scss', ['sass']).on("change", browserSync.reload);    // 监听sass
    gulp.watch('src/js/**/*.js', ['js']).on("change", browserSync.reload);    // 监听js
});

// 开发
gulp.task('dev', function(done){
    runSequence(
        'clean:build',
        ['sass', 'js', 'browserSync', 'watch'],
        done
    )
});

// 生产
// gulp.task('build', function(done){
//     runSequence(
//         'clean:dist',
//         ['sass', 'browserSync', 'watch'],
//         done
//     )
// });