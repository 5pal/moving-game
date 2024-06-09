class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.button = document.createElement("button");
        this.button.innerText = "시작";
        this.ctx = this.canvas.getContext("2d");

        document.body.appendChild(this.canvas);
        document.body.appendChild(this.button);

        window.addEventListener("resize", this.resize.bind(this), false);

        this.distance = 3;
        this.radius = 50;
        this.time = 0;
        this.isButtonClicked = false;

        this.resize();
        this.move(this.radius);

        this.button.addEventListener("click", () => {
            this.isButtonClicked = !this.isButtonClicked;
            this.isButtonClicked
                ? this.startTime()
                : clearInterval(this.intervalId);
        });
        // window.requestAnimationFrame(this.move.bind(this));

        document.addEventListener("keypress", e => {
            if (e.code === "Digit1") {
                this.moveLeft(this.radius);
            }

            if (e.code === "Digit2") {
                this.moveRight(this.radius);
            }
        });
    }

    startTime() {
        this.intervalId = setInterval(() => {
            if (this.timeSpan) {
                document.body.removeChild(this.timeSpan);
            }
            this.timeSpan = document.createElement("span");
            this.timeSpan.innerText = this.time + "";
            this.time += 1;
            document.body.appendChild(this.timeSpan);
            console.log(this.time);
        }, 1000);
    }

    clearTime() {}

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
        this.move(this.radius);
    }

    move(radius) {
        this.ctx.fillStyle = "cornflowerblue";
        this.ctx.beginPath();
        this.ctx.arc(
            (this.stageWidth - radius) / 2,
            (this.stageHeight - radius) / 2,
            radius,
            Math.PI * 2,
            false,
        );
        this.ctx.fill();
    }

    moveLeft(radius) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.distance += 20;

        this.ctx.fillStyle = "cornflowerblue";
        this.ctx.beginPath();
        this.ctx.arc(
            (this.stageWidth - radius) / 2 - this.distance,
            (this.stageHeight - radius) / 2 - this.distance,
            radius,
            Math.PI * 2,
            false,
        );
        this.ctx.fill();
    }

    moveRight(radius) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.distance -= 20;

        this.ctx.fillStyle = "cornflowerblue";
        this.ctx.beginPath();
        this.ctx.arc(
            (this.stageWidth - radius) / 2 - this.distance,
            (this.stageHeight - radius) / 2 - this.distance,
            radius,
            Math.PI * 2,
            false,
        );
        this.ctx.fill();
    }
}

window.onload = function () {
    new App();
};
