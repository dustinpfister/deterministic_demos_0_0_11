// grid

var distance = function (x1, y1, z1, x2, y2, z2) {

    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));

};

ds.setup({

    maxFrame : 75,

    cam : {

        x : 0,
        y : 0,

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

        // figure grid
        while (y < this.grid.h) {

            x = 0;
            while (x < this.grid.w) {

                g = {

                    aw : this.grid.cw, // actual width
                    ah : this.grid.ch

                };

                g.vp = ((this.cam.vd - Math.abs(this.grid.z - this.cam.z)) / this.cam.vd);
                g.w = g.aw * g.vp;
                g.h = g.ah * g.vp;

                g.x = x * g.w + this.cam.x;
                g.y = y * g.h + this.cam.y;

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

        cam_x : function (e, sys) {

            sys.cam.x = e.target.value / 100 * 1000;

        },

        cam_y : function (e, sys) {

            sys.cam.y = e.target.value / 100 * 1000;

        },

        cam_z : function (e, sys) {

            sys.cam.z = e.target.value / 100 * 1000;

        }

    }

});
