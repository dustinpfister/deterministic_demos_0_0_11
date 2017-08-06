// circles

ds.setup({

    maxFrame : 75,

    radius : 100,
    radian : 0,
    cx : 160,
    cy : 120,
    count : 1,

    // what to find an a for frame basis
    forFrame : function (state) {

        this.radian = Math.PI * 2 * state.per;

    },

    // draw the state of the box to the canvas
    draw : function (canvas, ctx) {

        ds.cls();

        ctx.strokeStyle = '#ffffff';

        // main circle
        ctx.beginPath();
        ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.stroke();

        //circles
        let c = this.count;
        while (c--) {

            let r = this.radian + Math.PI * 2 / this.count * c;

            ctx.beginPath();
            ctx.arc(Math.cos(r) * this.radius + this.cx, Math.sin(r) * this.radius + this.cy, 20, 0, Math.PI * 2);
            ctx.closePath();
            ctx.stroke();

        }

    },

    // controls
    controls : {

        // change start size
        count : function (e, sys, state) {

            sys.count = Math.floor(e.target.value / 100 * 9 + 1);

        }

    }

});
