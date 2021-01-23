class rope {

    constructor(b1, b2){
    
        var options = {
            bodyA: b1,
            bodyB: b2,
            length:50,
            stiffness:0.08
          }
        this.sling = Constraint.create(options)
        World.add(myworld, this.sling)  
    
        
    }
    
    display(){
        
       var posA = this.sling.bodyA.position
       var posB = this.sling.bodyB.position
       push()
       stroke("black")
       strokeWeight(6)
       line(posA.x,posA.y,posB.x,posB.y)
       pop()
    
    }
    }