
// 전역 컴포넌트 등록
Vue.component('todo-footer',{
    template:'<p>this is another global child component</p>'
});

// 지역 컴포넌트 등록
var etc ={
    template:'<p>this is another local child component</p>'
}

new Vue({
    el: '#app', 
    data:{
        message: 'This is a parent component'
    },
    components:{ //지역 컴포넌트 등록
        'todo-list': etc
    }
});

new Vue({
    el:'#app2',
    data:{
        message: 'This is a parent component'
    }
})

