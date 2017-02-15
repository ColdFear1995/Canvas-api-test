window.onload = () => {
    var canvas=document.getElementById("app") as HTMLCanvasElement;
    var ctx=canvas.getContext("2d");

    /*
    ctx.fillStyle="#FF0000";
    ctx.fillRect(0,0,150,75);
    */

    var stage = new DisplayObjectContainer();
    setInterval(() => {
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);//在显示图片之前先清屏，将之前帧的图片去掉,清屏范围最好设置成画布的宽与高
        stage.draw(ctx);

}, 1200)



     //文字
    var word1 = new TextField();
    word1.x = 20;
    word1.y = 60;
    word1.stroketext = "测试测试";
    word1.color = "#000000";
    word1.size = 60;
    word1.font = "kaiTi"
  
    //图片
    var image = document.createElement("img");
    image.src = "123.jpg";
    var bitmap=new Bitmap();
    bitmap.image=image;
    bitmap.x= 40;
    bitmap.y= 60
    image.onload = () => {

        stage.addChild(bitmap);
        stage.addChild(word1);
    }
};


interface Drawable{
    
    draw(context2D: CanvasRenderingContext2D);

}

class DisplayObject implements Drawable{

    x : number = 0;
    y : number = 0;
    
    draw(context2D: CanvasRenderingContext2D) {


    }
}

class DisplayObjectContainer implements Drawable {
    
    array: Drawable[] = [];
    
    draw(context2D : CanvasRenderingContext2D) {

        for (let drawable of this.array) {

            drawable.draw(context2D);
        }
    }

    addChild(displayObject : DisplayObject){

        this.array.push(displayObject);

    }
}

class Bitmap extends DisplayObject {
    
    image: HTMLImageElement;

    draw(context2D: CanvasRenderingContext2D) {
        
        context2D.drawImage(this.image, this.x, this.y);
    }
}


class TextField extends DisplayObject {
    
    text: string = "";                  //实心字
    stroketext : string = "";           //空心字
    color : string = "";
    size : number  ;
    font : string = ""; 
    draw(context2D: CanvasRenderingContext2D) {
        
        context2D.fillStyle = this.color;
        context2D.font = this.size+"px "+this.font;
        context2D.fillText(this.text, this.x, this.y);
        context2D.strokeText(this.stroketext, this.x, this.y)
    }

}