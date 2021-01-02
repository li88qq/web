import * as path from 'path'
import {loadDev} from './build/utils'

//获取当前环境
loadDev()

module.exports  = {
    alias: {
        '/@/': path.resolve(__dirname, './src')
    },
    port: process.env.VITE_PORT,

    cssPreprocessOptions: {
        less: {
            modifyVars: {},
            javascriptEnabled: true,
        },
    },
    optimizeDeps:{
        include:[]
    },
    proxy: {
    }
};