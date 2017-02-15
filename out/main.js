var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
window.onload = function () {
    var canvas = document.getElementById("app");
    var ctx = canvas.getContext("2d");
    /*
    ctx.fillStyle="#FF0000";
    ctx.fillRect(0,0,150,75);
    */
    var stage = new DisplayObjectContainer();
    setInterval(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height); //在显示图片之前先清屏，将之前帧的图片去掉,清屏范围最好设置成画布的宽与高
        stage.draw(ctx);
    }, 100);
    //文字
    var word1 = new TextField();
    word1.x = 20;
    word1.y = 20;
    word1.text = "TestTestTestTestTest";
    word1.color = "#FF0000";
    //图片
    var image = document.createElement("img");
    image.src = "123.jpg";
    image.onload = function () {
        var avater = new Bitmap();
        avater.image = image;
        stage.addChild(avater);
        stage.addChild(word1);
    };
};
var DisplayObject = (function () {
    function DisplayObject() {
        this.x = 0;
        this.y = 0;
    }
    DisplayObject.prototype.draw = function (context2D) {
    };
    return DisplayObject;
}());
var DisplayObjectContainer = (function () {
    function DisplayObjectContainer() {
        this.array = [];
    }
    DisplayObjectContainer.prototype.draw = function (context2D) {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var drawable = _a[_i];
            drawable.draw(context2D);
        }
    };
    DisplayObjectContainer.prototype.addChild = function (displayObject) {
        this.array.push(displayObject);
    };
    return DisplayObjectContainer;
}());
var Bitmap = (function (_super) {
    __extends(Bitmap, _super);
    function Bitmap() {
        _super.apply(this, arguments);
    }
    Bitmap.prototype.draw = function (context2D) {
        context2D.drawImage(this.image, this.x, this.y);
    };
    return Bitmap;
}(DisplayObject));
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        _super.apply(this, arguments);
        this.text = "";
        this.color = "";
    }
    TextField.prototype.draw = function (context2D) {
        context2D.fillStyle = this.color;
        context2D.fillText(this.text, this.x, this.y);
    };
    return TextField;
}(DisplayObject));
//# sourceMappingURL=main.js.map