ds.setup({

    maxFrame : 75,

    w : 32,
    h : 32,
    dy : 0,

    // what to find an a for frame basis
    forFrame : function (state) {

        // what will change for each frame
        this.x = (320 - this.w) * state.bias;
        this.y = 10 + this.dy * state.per;

    },

    // draw the state of the box to the canvas
    draw : function (canvas, ctx) {

        ds.cls();

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.x, this.y, this.w, this.h);

    },

    // controls
    controls : {

        // change start size
        dy : function (e, sys, state) {

            sys.dy = e.target.value / 100 * 190;

        }

    }

});
