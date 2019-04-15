<style>
  html,body {
    width: 100%;
    height: 100%;
    background: url("../assets/background.jpg");
  }
  .from-wrap{
    width: 100%;
    height: 260px;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px 30px;
    margin-top: 60%;
  }
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  FormItem {
    margin-bottom: 30px;
  }
  .form-footer {
    text-align: right;
  }
</style>
<template>
    <Row>
      <Col :xs="{ span: 20, offset: 2 }" :md="{ span: 6, offset: 16 }">
        <div class="from-wrap">
          <h1>登录</h1>
          <Form ref="loginVo" :model="loginVo" :rules="ruleValidate" >
            <FormItem prop="username">
              <Input type="text" v-model="loginVo.username" placeholder="请输入用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="loginVo.password" placeholder="请输入密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem class="form-footer">
              <Button type="primary" @click="handleSubmit()">Submit</Button>
            </FormItem>
          </Form>
        </div>
      </Col>
    </Row>
</template>
<script>
  export default {
    data () {
      return {
        loginVo: {
          username:'',
          password:''
        },
        ruleValidate: {
          username: [
            { required: true, message: '账号不能为空', trigger: 'blur' },
            { min: 3, max: 16, message: '账号长度3-16个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { type: 'string', min: 6, max: 16, message: '密码长度6-16个字符', trigger: 'blur' }
          ]
        },
        responseResult: []
      }
    },
    methods: {
      handleSubmit () {
        this.$axios
          .post('/user/login', {
            username: this.loginVo.username,
            password: this.loginVo.password
          })
          .then(successResponse => {
            this.responseResult = JSON.stringify(successResponse.data);
            if (successResponse.data.code === 200) {
              this.$router.replace({path: '/manage/page1'})
            }else {
              alert(successResponse.data.message)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>
