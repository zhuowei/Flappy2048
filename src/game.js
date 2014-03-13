(function (Ω) {

    "use strict";

    var OmegaGame = Ω.Game.extend({

        canvas: "#board",

        fps: false,
        best: 0,

        atlas: new Ω.SpriteAtlas("csv", "res/flappyAtlas/atlas"),

        init: function (w, h) {

            this._super(w, h);

            Ω.input.bind({
                "jump": ["space", "mouse1"] ,
                "touch": "touch",
                "escape": "escape",
                "left": "left",
                "right": "right",
                "up": "up",
                "down": "down"
            });

        },

        load: function () {

            this.setScreen(new TitleScreen());

        }

    });

    window.OmegaGame = OmegaGame;

}(Ω));
