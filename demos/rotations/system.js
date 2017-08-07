// concentric


ds.setup({

    maxFrame : 75,

    box : {

        x : 0,
        y : 0,
        w : 128,
        h : 64,

        radian : 0,
        rx : 16,
        ry : 50

    },

    // what to find an a for frame basis
    forFrame : function (state) {

        this.box.radian = Math.PI * 2 * state.per;

        // rotation point
        this.box.rx = this.box.w * state.per;
		this.box.ry = Math.pow(2, Math.log(this.box.h) / Math.log(2) * state.per);

        // position
        this.box.x = (320 - this.box.w) * state.per;
        let base = 1.5;
        let pow = Math.log(240 - this.box.h) / Math.log(base);
        this.box.y = Math.pow(base, pow * state.per);

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

        };

        return function (canvas, ctx) {

            ds.cls();

            ctx.fillStyle = '#00af00';

            ctx.save();
            ctx.translate(this.box.x + this.box.rx, this.box.y + this.box.ry);
            ctx.rotate(this.box.radian);

            ctx.fillRect(-this.box.rx, -this.box.ry, this.box.w, this.box.h);

            markPoint(ctx, -this.box.rx, -this.box.ry, '#00ff00');
            markPoint(ctx, 0, 0, '#ff0000');
            ctx.restore();

        };
    }
        ()),

    // controls
    controls : {

        /*
        base : function (e, sys) {

        sys.base = 1 + e.target.value / 100 * 8;

        },
         */

    }

});
