const KEY_CODE = {
    LEFT: "37",
    RIGHT: "39",
    UP: "38",
    DOWN: "40",
};

class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");

        document.body.appendChild(this.canvas);

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();
        this.move();

        this.distance = 3;

        // window.requestAnimationFrame(this.move.bind(this));

        window.addEventListener("keypress", e => {
            console.log(e.code);
            if (e.code === "Digit1") {
                this.moveLeft();
            }
        });
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }

    move() {
        // window.requestAnimationFrame(this.move.bind(this));
        // 생성하기 전에 이전 프레임을 제거
        // this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.ctx.fillStyle = "cornflowerblue";
        this.ctx.beginPath();
        this.ctx.arc(
            (this.stageWidth - 50) / 2,
            (this.stageHeight - 50) / 2,
            30,
            Math.PI * 2,
            false,
        );
        this.ctx.fill();
    }

    moveLeft() {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.distance = this.distance + 20;

        this.ctx.fillStyle = "cornflowerblue";
        this.ctx.beginPath();
        this.ctx.arc(
            (this.stageWidth - 50 - this.distance) / 2,
            (this.stageHeight - 50 - this.distance) / 2,
            30,
            Math.PI * 2,
            false,
        );
        this.ctx.fill();
    }
}

window.onload = function () {
    new App();
};
