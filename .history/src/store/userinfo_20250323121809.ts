import { defineStore } from "pinia";
import { getUserInfoAPI } from "../api/userinfo";

export const useUserInfo = defineStore("userinfo", {
  // 数据
  state: () => {
    return {
      imageUrl: "",
      name: "",
      sex: "",
      department: "",
      identity: "",
    };
  },
  // 逻辑
  actions: {
    // 获取用户信息
    async userInfo(id: any) {
      const res = await getUserInfoAPI(id);
      const data = res.data;
      console.log(data);
      this.imageUrl = data.image_url;
      this.name = data.name;
      this.sex = data.sex;
      this.department = data.department;
      this.identity = data.identity;
    },
  },
  persist: {
    enabled: true, // 启用持久化
    strategies: [
      {
        key: "userinfo", // 存储的键名
        storage: localStorage, // 存储方式
      },
    ],
  },
});
