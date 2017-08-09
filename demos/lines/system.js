// rotations

ds.setup({

    maxFrame : 75,

    lines : [

        // literal
        [0, 0, 12, 14, 22, 38],

        // generated
        (function () {

            let lineData = [],
            x,
            y,
            p = 0;
            while (p < 5) {

                x = 25 + 2 * p;
                y = 25 + Math.floor(Math.pow(1.5, p));

                lineData.push(x);
                lineData.push(y);

                p += 1;
            }

            return lineData;

        }
            ())

    ],

    // what to find an a for frame basis
    forFrame : function (state) {},

    // draw the state of the box to the canvas
    draw : function (canvas, ctx) {

        ds.cls();
        ctx.strokeStyle = '#ffffff';
        this.lines.forEach(function (lineData) {

            let i = 2;
            ctx.beginPath();
            ctx.moveTo(lineData[0], lineData[1]);
            while (i < lineData.length) {

                var x = lineData[i],
                y = lineData[i + 1];

                ctx.lineTo(x, y);

                i += 2;

            }
            ctx.stroke();

        });

    },

    // controls
    controls : {

        /*
        box_rx : function (e, sys) {

        sys.box.rx = e.target.value / 100 * sys.box.w;

        }
         */

    }

});
