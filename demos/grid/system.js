// grid


ds.setup({

    maxFrame : 75,

    cam : {

        x : 320,
        y : 240,

        z : 0,
        vd : 1000, // view distance


        w : 128,
        h : 128

    },

    grid : {

        z : 0,

        cw : 32,
        ch : 32,
        w : 8,
        h : 8,
        cells : []

    },

    // what to find an a for frame basis
    forFrame : function (state) {

        this.grid.cells = [];
        let y = 0,
        x,
        g;
        while (y < this.grid.h) {

            x = 0;
            while (x < this.grid.w) {

                g = {

                    x : x * this.grid.cw,
                    y : y * this.grid.ch,
                    aw : this.grid.cw, // actual width
                    ah : this.grid.ch,
                    vp : 1 // view percent

                };

                g.w = g.aw;
                g.h = g.ah;

                this.grid.cells.push(g);

                x += 1;

            }

            y += 1;

        }

    },

    // draw the state of the box to the canvas
    draw : (function () {

        let markPoint = function (ctx, x, y, color) {

            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.closePath();
            ctx.stroke();

        },

        drawGrid = function (sys, ctx) {

            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 3;

            let i = sys.grid.cells.length;
            while (i--) {

                let c = sys.grid.cells[i];

                ctx.strokeRect(c.x, c.y, c.w, c.h);

            }

        };

        return function (canvas, ctx) {

            ds.cls();

            drawGrid(this, ctx);
        };
    }
        ()),

    // controls
    controls : {

        /*
        box_rx : function (e, sys) {

        sys.box.rx = e.target.value / 100 * sys.box.w;

        },
         */

    }

});
