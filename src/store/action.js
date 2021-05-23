export default {
    addToCart(context,payload){
        return new Promise((resolve,reject)=>{
            let oldProduct = context.state.cartList.find(item=> item.iid===payload.iid);

            if(oldProduct){
                context.commit("addCount",oldProduct);
                resolve("购物车商品数量+1")
            }else{
                context.commit("addNewProduct",payload);
                resolve("成功添加购物车！");
            }
        })
    }
}