import Toast from 'components/common/toast/Toast'

const obj={};

obj.install=function(Vue){
    // 1.创建组件构造器
    const toastContrustor = Vue.extend(Toast);

    // 2. new的方式，根据组件构造器，可以创建出一个组件对象
    const toast = new toastContrustor();

    // 3. 将组件对象手动的挂载到某一元素上；
    toast.$mount(document.createElement('div'));

    // 4. 将组件对象添加到DOM结构中
    document.body.appendChild(toast.$el);

    // 5. 将插件绑定到vue原型上
    Vue.prototype.$toast = toast;
}

export default obj;