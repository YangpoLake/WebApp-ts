<template>
  <div class="bg-container">
    <div class="login-container">
      <el-card class="login-card">
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          class="login-form"
          auto-complete="on"
          label-position="left"
        >
          <div class="title-container">
            <h3 class="title">登录</h3>
          </div>

          <el-form-item prop="username">
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder="用户名"
              name="username"
              type="text"
              tabindex="1"
              auto-complete="on"
            >
              <span slot="prefix" class="svg-container">
                <svg-icon icon-class="user" />
              </span>
            </el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              ref="password"
              v-model="loginForm.password"
              type="password"
              placeholder="密码"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
            >
              <span slot="prefix" class="svg-container">
                <svg-icon icon-class="password" />
              </span>
            </el-input>
          </el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            style="width:100%;margin-bottom:30px;"
            @click.native.prevent="handleLogin"
          >登录</el-button>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate.ts";

export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [{ required: true, trigger: "blur" }],
        password: [{ required: true, trigger: "blur" }]
      },
      loading: false,
      passwordType: "password",
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("login", this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
}

.bg-container {
  width: 100vw;
  height: 100vh;
  background: url("/login_images/login_bg.jpeg") no-repeat center;
  background-size: cover;
}
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/login_images/poster-drop-animate1.png") center;
  background-size: cover;
}

.login-card {
  width: 360px;
  background-color: #cbe1f6;
}


</style>
