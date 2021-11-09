var app = new Vue({
    el:'#app',
    data: {
        message:'Hello Vue.js',
        text: 'hi',
        uid: '20',
        flag: false
    },
    methods: {
        clickBtn(){
            console.log("hi");
        },
        newClickBtn(){
            alert("clicked")
        }
    }
});