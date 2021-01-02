import * as fs from 'fs';
import * as dotenv from 'dotenv';

const curDev = () =>{
    const lifecycle = process.env.npm_lifecycle_event;
    return lifecycle;
}

const loadDev = () =>{
    const dev = curDev()
    let devFile = ''
    if(dev==='dev'){
        devFile = `.env.development`
    }else if(dev==='build'){
        devFile = `.env.production`
    }
    console.log('当前环境:'+dev+',加载环境文件为:'+devFile)

    const envFiles = [`.env`,devFile];

    for (const file of envFiles) {
        const envConfig = dotenv.parse(fs.readFileSync(file));
        for (const k in envConfig) {
            process.env[k] = envConfig[k]
        }
    }
}

export {loadDev}