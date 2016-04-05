Lowrez.Preloader = function(game) {
    this.ready = false;
    game.CONST = {
        BALL_BOUNCE: 0.95,
        BALL_MAX_VEL_Y: 120,
        BACKGROUND_SPEED: 0.5
    }
};

Lowrez.Preloader.prototype = {

    preload: function() {
        this.load.image('font', 'images/font.png');
        this.load.image('ground', 'images/ground.png');
        this.load.image('goal', 'images/goal.png');
        this.load.image('opponent', 'images/opponent.png');
        this.load.image('ball', 'images/ball_new.png');
    },

    create: function() {
        this.game.stage.backgroundColor = '#ffffff';

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 250;

        var logo = this.add.sprite(this.world.width/2, this.world.height/2, 'appsbude');
        logo.anchor.set(0.5, 0.5);
        logo.scale.set(0.25, 0.25);

        /*this.game.time.events.add(Phaser.Timer.SECOND * 2.0, function() {

            var tween = this.add.tween(logo)
                .to({alpha: 0}, 750, Phaser.Easing.Linear.none);

            tween.onComplete.add(function() {
                logo.destroy();
                this.startGame();
            }, this);

            tween.start();
        }, this);*/
        this.startGame();
    },

    startGame: function() {
        this.state.start('MainMenu');
    },

    render: function() {
        pixelcontext.drawImage(this.game.canvas, 0, 0, 64, 64, 0, 0, pixelwidth, pixelheight);
    }

};
