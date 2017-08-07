// concentric


ds.setup({

    maxFrame : 75,

    base : 1.5,
    circles_count : 8,
    circles : [],

    // what to find an a for frame basis
    forFrame : function (state) {

        this.circles = [];
        let c = this.circles_count;
        while (c--) {

            this.circles.push({

                x : 160,
                y : 120,
                r : 10 + Math.pow(this.base, c * state.bias)

            });

        }

    },

    // draw the state of the box to the canvas
    draw : function (canvas, ctx) {

        ds.cls();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#ffffff';
        let c = this.circles_count;
        while (c--) {

            ctx.beginPath();
            ctx.arc(
                this.circles[c].x,
                this.circles[c].y,
                this.circles[c].r,
                0,
                Math.PI * 2);
            ctx.closePath();
            ctx.stroke();

        }

    },

    // controls
    controls : {

        base : function (e, sys) {

            sys.base = 1 + e.target.value / 100 * 8;

        }

    }

});
