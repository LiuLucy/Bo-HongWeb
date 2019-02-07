<template>
    <div class="login-wrap d-flex align-items-center justify-content-center">
        <div class="card row m-0 d-flex justify-content-center mb-5 p-5">
            <div class="col-md-12">
                <div class="mb-2">
                    <label for="">帳號</label>
                    <el-input v-model="ruleForm.username"  placeholder="请输入内容"></el-input>
                </div>
                <div>
                    <label for="">密碼</label>
                    <el-input type="password" v-model="ruleForm.password"  placeholder="请输入内容"></el-input>
                </div>
                <div class="d-flex justify-content-center my-2">
                    <span class="my-2" style="color:red">{{ errorMessage }}</span>                    
                </div>
                <div class="mt-3 d-flex justify-content-center">
                    <el-button type="primary" @click="submitForm(ruleForm)">登入</el-button>
                </div>                
            </div>            
        </div>        
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: '',                   
                },
                imageUrl:'',
                errorMessage: '',
                rules: {
                    username: [
                        { required: true, message: '請輸入用戶帳號', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '請輸入用戶密碼', trigger: 'blur' }
                    ]
                },
                showErrorMessage:''
            }
        },
        methods: {
            
            submitForm(formName) {               
                if (this.ruleForm.username == 'admin' && this.ruleForm.password == 'admin') {
                    // localStorage.setItem('ms_username',this.ruleForm.username);
                    this.$router.push('/admin-home');
                } else {
                    this.errorMessage = '帳號或密碼錯誤'
                    return false;
                }        
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100vh;
        background-color: rgb(219, 211, 211);
        background-size: 100%;
    }
    .ms-title{
        width:100%;
        line-height: 50px;
        text-align: center;
        font-size:20px;
        color: #fff;
        border-bottom: 1px solid #ddd;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:350px;
        margin:-190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255,255,255, 0.3);
        overflow: hidden;
    }
    .ms-content{
        padding: 30px 30px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        color:#fff;
    }
</style>