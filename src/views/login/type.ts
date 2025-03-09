// 登录接口参数类型
export interface loginForm {
    account: string; // 账号
    password: string; // 密码
    repassword?: string; // 确认密码
}

// 忘记密码接口参数
export interface forgetForm {
    account: string; // 账号
    email: string; // 邮箱
    password: string, // 密码
    repassword: string, // 确认密码
}
