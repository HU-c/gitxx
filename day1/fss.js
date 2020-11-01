var fs =require('fs')
//导入fs
//同步异步读写文件
/*
var fd=fs.openSync('he.txt','r')
console.log(fd)
//var buf=Buffer.alloc(20)
//同步的方式
var conent=fs.readFileSync('he.txt',{flag:'r',encoding:'utf-8'})//确定了编码后不要tostring
console.log(conent)
fs.readFile('he.txt',function (err,data){
    if(err){
        console.log(err)
    }else {
        console.log(data.toString())
    }

})
console.log(123)*/
//同步写入
/*
let fd=fs.openSync('he.txt','w')
console.log(fd)
fs.writeFileSync(fd,'hehh')
fs.closeSync(fd)*/

//异步写入

/*fs.open('he.txt','w',(err,fd)=>{
    if(err){
        console.log(err)
    }else {
        fs.writeFile(fd, 'qazxsw', (err)=>{
            if(err){
                console.log("失败")
            }else {
                fs.close(fd,(err)=>{
                    if(err){
                        console.log("关闭失败")
                    }else {
                        console.log("关闭成功")
                    }
                })
            }
        })


    }
})
*/
//文件流写入
/*
let ws=fs.createWriteStream('he.txt')
//once 监听一次

ws.once('open',()=>{
    console.log("通道打开")
    ws.write("what's your name1?\n");
    ws.write("what's your name?\n");
    ws.write("what's your name?\n");
    ws.write("what's your name?\n");
    ws.end()
})

ws.once('close',()=>{
    console.log("通道关闭")
})*/
//文件读取
/*
let ws =fs.readFile('he.txt',(err,data)=>{
    if(err){
        console.log(err)
    }else {
        console.log(data.toString())
    }
})*/
//文件复制
/*
fs.readFile('API常用.png',(err,data)=>{
    if(err){
        console.log(err)
    }else {
        fs.writeFile('a.png',data,(err,data)=>{
            if(err){
                console.log(err)
            }else {
                console.log("成功")
            }
        })
    }
})*/

//文件流复杂

/*
let readStream=fs.createReadStream('面向对象.png')
let writeStream=fs.createWriteStream("b.png")
readStream.once('open',()=>{
    console.log("read s")
})
readStream.once('close', () => {
    console.log('readstream closed');
})
writeStream.once('open', () => {
    console.log('writeStream opened');
})
writeStream.once('close', () => {
    console.log('writeStream closed');
})
//读入流操作
readStream.on('data', (data) => {
    console.log(data);
    //文件过大时分段读取
    //写入
    writeStream.write(data);
})*/

//简易写法
/*
let readStream=fs.createReadStream('面向对象.png')
let writeStream=fs.createWriteStream("b.png")
//创建管道
readStream.pipe(writeStream)*/
//删除文件

/*
fs.unlink('b.png',(err)=>{
    if(err){
        console.log(err)

    }else {
        console.log("删除成功")
    }
})*/
//读取文件夹下所有文件

/*
fs.readdir("./",(err,files)=>{
    if(err){
        console.log(err)

    }else {
        console.log(files)
    }
})*/
//创建文件夹
/*
fs.mkdir('./img',(err)=>{
    if(err){
        console.log("f")
    }else {
        console.log("s")
    }
})*/

//删除空文件夹
/*
fs.rmdir('img',(err)=>{
    if(err){
        console.log("shib")
    }else {
        console.log("chenggonyg")
    }
})
*/
//递归删除非空文件夹
/*
function delDir(dir){
    var fi=fs.readdirSync(dir)
    for(var i in fi){
        var path=dir+'/'+fi[i]
        var stat=fs.statSync(path)
        if(stat.isFile()){
            fs.unlinkSync(path)
        }else if(stat.isDirectory()){
            delDir(path)
        }
    }
    fs.rmdirSync(dir)
}

delDir('./aa')*/
//事件循环
/*
var events=require('events')
var evenE=new events.EventEmitter()
evenE.on('eventName',eventHandler)  //绑定
evenE.emit('eventName')             //触发
function eventHandler(){
    console.log("he")
}*/
//buffer缓冲区  读取操作二进制
//let buffer=require('buffer')
/*
let b1=Buffer.from('aaa')   //将字符串放入缓存区
console.log(b1)
console.log(b1.toString())

let b2=Buffer.alloc(10) //创建空间大小为10字节的缓存区，空的
console.log(b2)

let b3=Buffer.allocUnsafe(10)  //创建10字节空间，可能含有旧数据
console.log(b3)
b3[0]=4  //可以往里面存数据
console.log(b3)
console.log(b3[0].toString())*/

//进程


//path模块
/*
var path=require('path')
console.log(__dirname)    //当前正在运行脚本的文件夹名称E:\毕设\b\day1
console.log(__filename)  //当前正在运行脚本的文件名称E:\毕设\b\day1\fss.js
console.log(path.extname(__filename)) //得到文件扩展名.js
console.log(path.basename(__filename))//得到文件名fss.js
let str="e:/aa/b/c.txt"
console.log(path.normalize(str))  //e:/aa/b/c.txt/路径转换为本机路径格式
console.log(path.join(__dirname+'/aaa.png')) //路径合并 注意为“/”
*/
//网络模块
/*
let http=require('http')
let server=http.createServer()//创建服务器实例
server.on('request',(req,res)=>{   //处理请求
    console.log(req.url)
    if(req.url=='/'){//默认地址
        res.end("index")
    }else if(req.url=='/login'){
        res.end("hello")
    }else {
        res.end("not")
    }

})
server.listen(3000,()=>{   //监听3000端口
    console.log('服务器启动','http://127.0.0.1:3000')
})*/
//静态服务器
let http=require('http')
let server=http.createServer()
let path=require('path')

server.on('request',(req,res)=>{
//解析路径
    let urlobj=path.parse(req.url)
    console.log(urlobj)
    if(req.url=='/'){
        res.setHeader('content-type','text/html;charset=utf-8')
        res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>胡</h1>
<img src="./static/IO.png">
</body>
</html>`)
    }else if(urlobj.dir=='/static'){
        //设置 响应头告诉浏览器，返回的内容类型
        res.setHeader('content-type',getContentType(urlobj.ext))
        //读取文件到浏览器
        let rs=fs.createReadStream('./static/'+urlobj.base)
    rs.pipe(res)

    }else{
        res.end('not')
    }
})

function getContentType(extName){
    switch (extName){
        case '.png':
            return "image/png"
        case '.jpg':
            return 'image/jpg'
        case '.css':
            return 'text/css'
        case '.json':
            return 'text/json'
        case '.html':
            return 'text/html'
        case '.js':
            return 'text/js'
    }
}
server.listen(3001,()=>{
    console.log("服务器已经启动",'http://127.0.0.1:3001')
})