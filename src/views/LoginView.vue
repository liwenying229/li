<template>
  <div class="login">
    <h3>后台管理系统</h3>
    <el-form :model="myform" :rules="rules" class="form">
      <el-form-item  prop="user">
        <el-input v-model="myform.user" placeholder="请输入用户名" ></el-input>
      </el-form-item>
      <el-form-item  prop="pass">
        <el-input v-model="myform.pass" placeholder="请输入密码" ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitfn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import instance from '@/api/index'
import plugin from "@/plugin/myplugin"
export default {
  name: "LoginView",
  data() {
    //自定义正则验证
    var userfn=function(rules,value,callback){
        let rg=/^[a-z]\w{2,8}\w$/  //^[a-z] 开头a-z字母  w{2,6} 中间任意2-6个字符、下划线、数字  w$结尾任意字符、下划线
        // console.log(rg.test(value));
        if(rg.test(value)){//判断这个value 是否符合效验规则   符合true，不符合false
            return;
        }else {
            return callback(new Error('用户名格式不对'))
        }
    }
    var passfn=function(rules,value,callback){
        let rg=/\d{2,8}/ //数字2-8
        if(rg.test(value)){
            return;
        }else {
            return callback(new Error("密码格式不对"))
        }
    }
    return {
      myform: {
        //上面模板中 动态绑定的myform
        user: "", //v-model="myform.user"
        pass: "", //v-model="myform.pass"
      },
       //模板中 :rules="rules"
      rules: {
        user: [{ validator: userfn, trigger: "blur" }],
        pass: [{ validator: passfn, trigger: "blur" }],
      },
      //newdebouncefn:null //用户接收防抖封装后的业务函数
    };
  },
  created(){
      this.newdebouncefn=plugin(this.getUser,2000)
  },
  methods:{
      // 点击提交事件
      submitfn(){ 
          this.newdebouncefn() //this一下  用于接收防抖封装后的业务函数
      },
      //登录业务函数
      async getUser(){
          let user=this.myform.user
          let pass=this.myform.pass
          console.log(user,pass);
          let {data}=await instance.post("/login",{user,pass})
          console.log("登录页数据请求",data);

          // 存token
          if(data.message==="fail"){
              return this.$message.error("登录失败")
          }
          if(data.message==="success"){
              localStorage.setItem("token",data.data.token)
              this.$message({
                  type:"success",
                  message:"登录成功",
                  duration:2000,//登录上 两秒后跳转
                  onClose:()=>{
                      this.$router.push({name:"home"})
                  }
              })
          }
      }
  },
  
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background:#FFAFBD;
  padding-top: 20px;
}
.login h3 {
  color: #fff;
  font-size: 34px;
  text-align: center;
}
.form {
  width: 400px;
  margin: 0 auto;
  padding: 20px 40px 20px;
  border-radius: 10px;
  background:#ffc3a0;
}
.form button {
  width: 100%;
  background: #FFAFBD;
  border: none;
}
</style>