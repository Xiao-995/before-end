<template>
  <div class="common-layout">
    <el-row>
      <el-col :span="4"></el-col>
      <el-col :span="16">
        <div class="login-content">
          <el-tabs v-model="activeName" class="demo-tabs" :stretch="true">
            <!-- 登录 -->
            <el-tab-pane label="登录" name="login">
              <el-form :model="loginData" class="login-form">
                <el-form-item>
                  <el-input
                    placeholder="请输入账号"
                    v-model="loginData.account"
                  />
                </el-form-item>
                <el-form-item>
                  <el-input
                    type="password"
                    placeholder="请输入密码"
                    v-model="loginData.password"
                    show-password
                  />
                </el-form-item>
                <!-- 忘记密码 -->
                <div class="footer-wrapped">
                  <div class="forget-password">
                    <span class="forget-password-button" @click="forPassword"
                      >忘记密码</span
                    >
                  </div>
                  <!-- 登录按钮 -->
                  <div class="footer-button">
                    <el-button type="primary" @click="login">登录</el-button>
                  </div>
                  <!-- 注册账号 -->
                  <div class="footer-go-register">
                    还没有账号?<span class="go-register" @click="goRegiste"
                      >马上注册</span
                    >
                  </div>
                </div>
              </el-form>
            </el-tab-pane>
            <!-- 注册 -->
            <el-tab-pane label="注册" name="register">
              <el-form :model="registerData" class="register-form">
                <el-form-item>
                  <el-input
                    placeholder="账号长度为6-12位"
                    v-model="registerData.account"
                  />
                </el-form-item>
                <el-form-item>
                  <el-input
                    type="password"
                    show-password
                    placeholder="密码长度为6-12位含字母和数字"
                    v-model="registerData.password"
                  />
                </el-form-item>
                <el-form-item>
                  <el-input
                    type="password"
                    show-password
                    placeholder="请确认输入密码"
                    v-model="registerData.repassword"
                  />
                </el-form-item>
                <!-- 忘记密码 -->
                <div class="footer-wrapped">
                  <!-- 登录按钮 -->
                  <div class="footer-button">
                    <el-button type="primary" @click="register">注册</el-button>
                  </div>
                </div>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
  <forgetPassword ref="forgerP" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { registerAPI, loginAPI } from "../../api/login";
import forgetPassword from "./components/forget-password.vue";
import type { loginForm } from "./type";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();
const activeName = ref("login");
// 登录表单数据
const loginData: loginForm = reactive({
  account: "1423747022",
  password: "admin123",
});
// 注册表单数据
let registerData: loginForm = reactive({
  account: "",
  password: "",
  repassword: "",
});
// 跳转注册页面
const goRegiste = () => {
  activeName.value = "register";
};
// 打开忘记密码页面
const forgerP = ref();
const forPassword = () => {
  forgerP.value.open();
};

/**
 * 登录
 */
const login = async () => {
  const res = await loginAPI(loginData);
  if (res.data.status == 0) {
    ElMessage({
      message: res.data.message,
      type: "success",
    });
    router.push("/home");
  } else {
    ElMessage({
      message: res.data.message,
      type: "error",
    });
  }
};

/**
 * 注册
 */
const register = async () => {
  if (registerData.password === registerData.repassword) {
    const res = await registerAPI(registerData);
    if (res.data.message === "注册账号成功") {
      ElMessage({
        message: "注册成功",
        type: "success",
      });
    }
  } else {
    ElMessage.error("二次密码输入不一致,请重新输入!");
  }
};
</script>

<style lang="scss" scoped>
.common-layout {
  background: url("@/assets/images/bg.jpg") no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;

  .login-content {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    // 卡片样式
    .demo-tabs {
      background: white;
      padding: 30px;
      width: 500px;
      height: 400px;
      border-radius: 20px;

      .login-form {
        .footer-wrapped {
          display: flex;
          flex-direction: column;
          // 忘记密码
          .forget-password {
            display: flex;
            justify-content: flex-end;
            margin: 8px 20px;

            .forget-password-button {
              font-size: 14px;
              color: #409eff;
              cursor: pointer;
            }
          }

          // 登录注册按钮
          .footer-go-register {
            font-size: 14px;
            margin: 40px 0;
            display: flex;
            justify-content: center;
            .go-register {
              color: #409eff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
.el-form {
  margin-top: 30px;
  height: 80%;
}
// 登录按钮
.footer-button {
  .el-button {
    width: 100%;
    height: 40px;
    margin-top: 10px;
  }
}
// 样式穿透
// 输入框
:deep(.el-input__inner) {
  height: 40px;
}
// 输入框label
:deep(.el-form-item__label) {
  height: 40px;
  line-height: 40px;
}
</style>
