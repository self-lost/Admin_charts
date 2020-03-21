<template>
  <div id="Login">
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <p class="Title">Login</p>
      <FormItem prop="user">
        <i-Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="md-contact" slot="prepend"/>
        </i-Input>
      </FormItem>
      <FormItem prop="password">
        <i-Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </i-Input>
      </FormItem>
      <FormItem></FormItem>
      <FormItem>
        <Button ghost :loading="loading" shape="circle" type="primary" @click="verifyUser">Signin</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },

  mounted() {
    let thz = this;
    this.$(document).keydown(function(event) { 
      if(event.keyCode == 13) {  
        thz.verifyUser ()
      }    
    })
  },

  methods: {
    verifyUser() {
      this.loading = true;
      this.$refs.formInline.validate(valid => {
        if (valid) {
          this.$router.push('/')
          sessionStorage.setItem("User", valid);
          this.$Message.success("Success!");
          this.loading = false;
        } else {
          this.$Message.error("Fail!");
          this.loading = false;
        }
      });
    }
  }
};
</script>
<style lang="less">
#Login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  background: url(../../static/img/Login-1.png) no-repeat 100% 100%;
  display: flex;
  text-align: center;
}

.Title {
  width: 60%;
  height: 100px;
  font-size: 30px;
  text-align: center;
  margin: auto; 
  display: flex;
  justify-content:center;
  align-items:Center;
}

.ivu-form {
  width: 500px;
  height: 300px;
  border: 1px #55619D solid;
  margin: auto;
  border-radius: 10px;
}

.ivu-input-group {
  width: 50% !important;
  margin: auto;
}

#Login .ivu-btn {
    width: 35%;
}

.ivu-form-item-error-tip {
  width: 85% !important;
  margin: auto;
}
</style>