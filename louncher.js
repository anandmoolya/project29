class louncher {
    constructor(bodyA,pointB){
    var options={
    bodyA:bodyA,
    pointB:pointB,
    length:10
    
    }
     this.lounch=Matter.Constraint.create(options)
     this.pointB=pointB   
    
    
    
    }
    display(){
        if(this.lounch.bodyA){
    line (this.lounch. bodyA.position.x,this.lounch.bodyA.position.y,this. pointB.x,this.pointB.y)
        }
    }
    fly(){
      this.lounch.bodyA=null  
    }
    }