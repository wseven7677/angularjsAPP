var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {
	srcPath: 'src/',//源目录
	devPath: 'build/',//开发目录
	prdPath: 'dist/',//生产目录
};
//创建gulp的task：
gulp.task('lib',function(){
	gulp.src('bower_components/**/*.js')//读入文件
	.pipe(gulp.dest(app.devPath + 'vendor'))//简单拷贝文件
	.pipe(gulp.dest(app.prdPath + 'vendor'))//简单拷贝文件
	.pipe($.connect.reload());
});

gulp.task('html',function(){
	gulp.src(app.srcPath + '**/*.html')
	.pipe(gulp.dest(app.devPath))
	.pipe(gulp.dest(app.prdPath))
	.pipe($.connect.reload());//构建后通知浏览器重新加载
});

gulp.task('json',function(){
	gulp.src(app.srcPath + 'data/**/*.json')//深度遍历目录
	.pipe(gulp.dest(app.devPath + 'data'))
	.pipe(gulp.dest(app.prdPath + 'data'))
	.pipe($.connect.reload());
});

gulp.task('less',function(){
	gulp.src(app.srcPath + 'style/index.less')
	.pipe($.less())
	.pipe(gulp.dest(app.devPath + 'css'))
	.pipe($.cssmin())//css最小化
	.pipe(gulp.dest(app.prdPath + 'css'))
	.pipe($.connect.reload());
});

gulp.task('js',function(){
	gulp.src(app.srcPath + 'script/**/*.js')
	.pipe($.concat('index.js'))
	.pipe(gulp.dest(app.devPath + 'js'))
	.pipe($.uglify())//js压缩
	.pipe(gulp.dest(app.prdPath + 'js'))
	.pipe($.connect.reload());
});

gulp.task('image',function(){
	gulp.src(app.srcPath + 'image/**/*')
	.pipe(gulp.dest(app.devPath + 'image'))
	.pipe($.imagemin())//图片压缩
	.pipe(gulp.dest(app.prdPath + 'image'))
	.pipe($.connect.reload());
});
//执行上述所有任务，相当于构建工程：
gulp.task('build',['image','js','json','less','html','lib']);
//清除文件：
gulp.task('clean',function(){
	gulp.src([app.devPath,app.prdPath])
	.pipe($.clean());
});
//建立本地服务器用于调试：
gulp.task('serve',['build'],function(){
	$.connect.server({
		root:[app.devPath],
		livereload:true,
		port:1234
	})

	open('http://localhost:1234');
	//监视变化，执行特定任务：
	gulp.watch('bower_components/**/*',['lib']);
	gulp.watch(app.srcPath + '**/*.html',['html']);
	gulp.watch(app.srcPath + 'data/**/*.json',['json']);
	gulp.watch(app.srcPath + 'style/**/*.less',['less']);
	gulp.watch(app.srcPath + 'script/**/*.js',['js']);
	gulp.watch(app.srcPath + 'image/**/*',['image']);
});

gulp.task('default',['serve']);//设置默认任务（直接输入gulp就执行这个任务）