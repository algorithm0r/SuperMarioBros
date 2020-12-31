class WorldOneOne {
    constructor(game, width, mario) {
        this.width = width;
        this.mario = mario;
        this.game = game;
    };

    loadLevel() {
        this.x = 0;
        this.loadEnemies();
        this.loadBricks();
        this.loadBlocks();
        this.loadGround();
        this.loadBackground();
    };

    loadBackground() {
        var elements = [
            "bhil 0 11.5",
            "bush 11.5 13 3",
            "hill 16 12.75",
            "bush 23.5 13 1",
            "clou 8.5 4 1",
            "clou 19.5 3 1",
            "clou 27.5 4 3",
            "clou 36.5 3 2",
            "bush 41.5 13 2",
            "bhil 48 11.5",
            "clou 56.5 4 1",
            "bush 59.5 13 3",
            "hill 64 12.75",
            "clou 67.5 3 1",
            "bush 71.5 13 1",
            "clou 75.5 4 3",
            "clou 83.5 3 2",
            "bush 89.5 13 2",
            "hill 111 12.75",
            "clou 103.5 4 1",
            "bush 106.5 13 3",
            "bhil 95 11.5",
            "clou 114.5 3 1",
            "bush 118.5 13 1",
            "clou 122.5 4 3",
            "clou 131.5 3 2",
            "bush 136.5 13 2",
            "bhil 143 11.5",
            "clou 151.5 4 1",
            "bush 156.5 13 1",
            "hill 159 12.75",
            "clou 162.5 3 1",
            "bush 166.5 13 1",
            "clou 170.5 4 3",
            "clou 179.5 3 2",
        ];

        for (let i=0; i<elements.length; i++) {
            let element = elements[i].split(" ");
            switch(element[0]) {
                case 'bush':
                    this.game.addEntity(new Bush(this.game, element[1] * this.width, element[2] * this.width, element[3]));
                    break;
                case 'hill':
                    this.game.addEntity(new Hill(this.game, element[1] * this.width, element[2] * this.width));
                    break;
                case 'bhil':
                    this.game.addEntity(new BigHill(this.game, element[1] * this.width, element[2] * this.width));
                    break;
                case 'clou':
                    this.game.addEntity(new Cloud(this.game, element[1] * this.width, element[2] * this.width, element[3]));
                    break;
                default:
                    break;
            }
        }
    };

    loadGround() {
        var elements = [
            "grou 0 14 69",
            "grou 71 14 15",
            "grou 89 14 63",
            "grou 154 14 69",
        ];

        for (let i=0; i<elements.length; i++) {
            let element = elements[i].split(" ");
            this.game.addEntity(new Ground(this.game, element[1] * this.width, element[2] * this.width, element[3] * this.width));
        }
    };

    loadBricks() {
        var elements = [
            'bric 20 10 1 None',
            'bric 22 10 1 None',
            'bric 24 10 1 None',
            'bric 77 10 1 None',
            'bric 79 10 1 None',
            'bric 80 6 1 None',
            'bric 81 6 1 None',
            'bric 82 6 1 None',
            'bric 83 6 1 None',
            'bric 84 6 1 None',
            'bric 85 6 1 None',
            'bric 86 6 1 None',
            'bric 87 6 1 None',
            'bric 90 6 1 None',
            'bric 91 6 1 None',
            'bric 92 6 1 None',
            'bric 93 10 1 Coins',
            'bric 99 10 1 None',
            'bric 100 10 1 Star',
            'bric 117 10 1 None',
            'bric 120 6 1 None',
            'bric 121 6 1 None',
            'bric 122 6 1 None',
            'bric 127 6 1 None',
            'bric 128 10 1 None',
            'bric 129 10 1 None',
            'bric 130 6 1 None',
            'bric 167 10 1 None',
            'bric 168 10 1 None',
            'bric 170 10 1 None',
        ];

        for (let i=0; i<elements.length; i++) {
            let element = elements[i].split(" ");
            this.game.addEntity(new Brick(this.game, element[1] * this.width, element[2] * this.width, element[3], String(element[4])));
        }

        this.loadTubes();

        elements = [
            'bric 16 10 2 Coin',
            'bric 21 10 2 Growth',
            'bric 23 10 2 Coin',
            'bric 22 6 2 Coin',
            'bric 64 9 0 1up',
            'bric 78 10 2 Growth',
            'bric 93 6 2 Growth',
            'bric 105 10 2 Coin',
            'bric 108 10 2 Coin',
            'bric 108 6 2 Growth',
            'bric 111 10 2 Coin',
            'bric 128 6 2 Coin',
            'bric 129 6 2 Coin',
            'bric 169 10 2 Coin',
        ];

        for (let i=0; i<elements.length; i++) {
            let element = elements[i].split(" ");
            this.game.addEntity(new Brick(this.game, element[1] * this.width, element[2] * this.width, element[3], String(element[4])));
        }
    };

    loadBlocks() {
        var elements = [
            'bloc 133 13 4',
            'bloc 134 12 3',
            'bloc 135 11 2',
            'bloc 136 10 1',
            'bloc 139 13 4',
            'bloc 139 12 3',
            'bloc 139 11 2',
            'bloc 139 10 1',
            'bloc 147 13 5',
            'bloc 148 12 4',
            'bloc 149 11 3',
            'bloc 150 10 2',
            'bloc 154 13 4',
            'bloc 154 12 3',
            'bloc 154 11 2',
            'bloc 154 10 1',
            'bloc 178 13 9',
            'bloc 179 12 8',
            'bloc 180 11 7',
            'bloc 181 10 6',
            'bloc 182 9 5',
            'bloc 183 8 4',
            'bloc 184 7 3',
            'bloc 185 6 2',
        ];

        for (let i=0; i<elements.length; i++) {
            let element = elements[i].split(" ");
            this.game.addEntity(new Block(this.game, element[1] * this.width, element[2] * this.width, element[3] * this.width));
        }
    };

    loadTubes() {
        var elements = [
            'tube 28 12 1',
            'tube 38 11 2',
            'tube 46 10 3',
            'tube 57 10 3',
            'tube 162 12 1',
            'tube 176 12 1',
        ];

        for (let i=0; i<elements.length; i++) {
            let element = elements[i].split(" ");
            this.game.addEntity(new Tube(this.game, element[1] * this.width, element[2] * this.width, element[3]));
        }
    };

    loadEnemies() {
        var elements = [
            'koop 12 12.5 0',
            'goom 22 13',
            'goom 40 13',
            'goom 51 13',
            'goom 52.5 13',
            'goom 80 5',
            'goom 82 5',
            'goom 96 13',
            'goom 97.5 13',
            'goom 113 13',
            'goom 114.5 13',
            'goom 123 13',
            'goom 124.5 13',
            'goom 127 13',
            'goom 128.5 13',
        ];

        for (let i=0; i<elements.length; i++) {
            let element = elements[i].split(" ");
            switch(element[0]) {
                case 'koop':
                    this.game.addEntity(new Koopa(this.game, element[1] * this.width, element[2] * this.width, element[3] * this.width));
                    break;
                case 'goom':
                    this.game.addEntity(new Goomba(this.game, element[1] * this.width, element[2] * this.width));
                    break;
                default:
                    break;
            }
        }
    };
}