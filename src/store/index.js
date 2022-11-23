/**
 * 存储配置pinia区域
 */
import { defineStore } from "pinia";
import WebStorageCache from "web-storage-cache";

// 创建存储对象
const cache = new WebStorageCache({
    storage: window.localStorage
})


export const mainStore = defineStore("main", {
    state() {
        return {
           
        }
    },
    // pinia里面没有mutations
    actions: {
        
    },
    // 配置状态持久化
    persist: {
        key: "easybuy_client",
        storage: {
            getItem: key => cache.get(key),
            // 到期时间以秒为单位
            setItem: (key, value) => cache.set(key, value, { exp: 60 * 60 * 24 }),
            removeItem: key => cache.delete(key),
            clear: () => cache.clear()
        },
        // 配置需要持久化的字段
        paths: []
    }
})