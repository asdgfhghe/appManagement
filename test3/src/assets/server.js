// 开启 nodemon server.js
let express = require('express')
let qs = require('qs')
let mysql = require('mysql')
let app = express()

let db = mysql.createPool({
    host: '127.0.0.1',     //数据库IP地址
    user: 'root',          //数据库登录账号
    password: '123456',      //数据库登录密码
    database: 'test3'       //要操作的数据库
})

// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', '*')
//     res.append('Access-Control-Allow-headers', '*')
//     next()
// }) 
app.get('/',(request, response)=>{
    // console.log(request.query['id']);
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体 
    const result = [
        {
            account: "client",
            phone: "18369147621",
            password: "123asd",
        },
        {
            account: "client2",
            phone: "18623455673",
            password: "test",
        },
        {
            account: "client3",
            phone: "18797432256",
            password: "bunihao",
        }
    ]

    // 请求数据库
    // let sql = 'select * from commentdetail where id=2'
    // db.query(sql, (err, data) => {
    //     if(err) {
    //         console.log('错误：' + err.message);
    //     }
    //     console.log(data[0]);
    //     let str = JSON.stringify(data[0]);
    //     response.send(str);
    // })
    let str = JSON.stringify(data);
    response.send(str);
});

app.all('/id',(request, response)=>{
    // console.log(request);
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');//用于app.all 来将不属于请求头的信息放入
    //设置响应体 
    const result = {
        name: 'LiLy',
        age: 999,
    }   

    let data = "";
    // data: 当服务端接收到数据时触发
    request.on('data', function(chunk){
        // chunk默认是一个二进制数数据，拼接在一起自动 toString
        data += chunk;
    });
    // end: 数据接收完时触发
    request.on('end', function(){
        // 将urlencoded 形式参数转换为json类型参数
        data = qs.parse(data);
        // console.log(data);
    })
    let str = JSON.stringify(result);
    response.send(str);
});

app.listen(3000, () => {
    console.log('http://localhost:3000')
})
