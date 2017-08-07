// circles 2

ds.setup({

    maxFrame : 75,

    radius : 20,
    radian : 0,
    cx : 160,
    cy : 120,

    // circles
    color : '#00ffff',
    size : 5,
    radiusAjust : 0,
    maxSize : 20,

    count : 1,

    // what to find an a for frame basis
    forFrame : function (state) {

        this.radian = Math.PI * 2 * state.per;
        this.radius = 40 + 80 * state.bias;

        this.radiusAjust = -this.radius * state.bias;
        this.size = 5 + (this.maxSize - 5) * state.bias;

    },

    // draw the state of the box to the canvas
    draw : function (canvas, ctx) {

        ds.cls();

        ctx.lineWidth = 3;
        ctx.strokeStyle = '#ffffff';

        // main circle
        ctx.beginPath();
        ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.stroke();

        //circles
        ctx.fillStyle = this.color;
        let c = this.count;
        while (c--) {

            let r = this.radian + Math.PI * 2 / this.count * c;

            ctx.beginPath();
            ctx.arc(
                Math.cos(r) * (this.radius + this.radiusAjust) + this.cx,
                Math.sin(r) * (this.radius + this.radiusAjust) + this.cy,
                this.size,
                0,
                Math.PI * 2);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();

        }

    },

    // controls
    controls : {

        // change start size
        count : function (e, sys, state) {

            sys.count = Math.floor(e.target.value / 100 * 9 + 1);

        },

        // size of circles
        size : function (e, sys) {

            sys.maxSize = 5 + e.target.value / 100 * 45;

        }

    }

});
