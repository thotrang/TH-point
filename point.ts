export class Point{
    x:number;
    y:number;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }
    distance(b:Point){
        let dx=this.x-b.x;
        let dy=this.y-b.y;
        return Math.hypot(dx, dy);//hàm trả về căn bậc 2 tổng bình phương các tham số
    }
}


