var mainVM = new Vue({
    el: "#app",
    data: {
        curser: `<img class="marker" src="Micky_Mouse">`
    },
    methods: {
        startToLoveView: function() {
            mainVM.title = this.newTitle
        }
    }
})