module.exports={
    configureWebpack:{
        resolve:{
            // 给经常引用的路径起别名
            alias:{
                "assets":"@/assets",
                "common":"@/common",
                "components":"@/components",
                "network":"@/network",
                "views":"@/views"
            }
        }
    }   
}