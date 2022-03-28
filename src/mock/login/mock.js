let Mock = require("mockjs")
    // 登录页
Mock.mock("/api/login", "post", function(config) {
    console.log('mock数据', config.body); //参数
    let obj = JSON.parse(config.body) //后台拿到数据都是字符串
    let user = obj.user;
    let pass = obj.pass;
    if (user == "admin" && pass == "123456") {
        return {
            status: 200,
            message: "success",
            data: {
                user: "admin",
                pass: "123456",
                token: "syudew7r7s"
            }
        }
    } else {
        return {
            status: 200,
            message: "fail",
            data: {
                message: "用户密码错误"
            }
        }
    }
})