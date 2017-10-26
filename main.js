var mainVM = new Vue({
    el: "#app",
    data: {
        markers: [] //`<img class="marker" src="Micky_Mouse">`
    },
    methods: {
        makeAMouse: function($event) {
            //create marker at x and y
            this.markers.push({
                pageX: event.offsetX-10 + 'px',
                pageY: event.offsetY-30 + 'px',
            })
            // return this.marker
            // console.log($event)
            // $event.pageX
            // $event.page
            // $event.bubbles: false
        }
    }
})