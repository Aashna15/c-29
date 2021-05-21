class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1=loadImage("sprites/sling1.png")
        this.image2=loadImage("sprites/sling2.png")
        this.image3=loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image (this.image1,200,35)
        image (this.image2,170,35)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
            stroke (48,22,8)
            if (pointA.x<200){
                strokeWeight(10);
                line (pointA.x-20,pointA.y+20,pointB.x-10,pointB.y+10)
                line (pointA.x-20,pointA.y+20,pointB.x+30,pointB.y+10)
                //line(pointA.x, pointA.y, pointB.x, pointB.y);
                image (this.image3,pointA.x-30,pointA.y-10,15,30)
             }
             else{
                strokeWeight(5);
                line (pointA.x+25,pointA.y+20,pointB.x-10,pointB.y+10)
                line (pointA.x+25,pointA.y+20,pointB.x+30,pointB.y+10)
                //line(pointA.x, pointA.y, pointB.x, pointB.y);
                image (this.image3,pointA.x+25,pointA.y-10,15,30)
             }
           
        }
    }
    
}