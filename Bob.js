class bob{
    constructor(x,y,r){
     var options = {
         isStatic:false,
         restitution: 0.3,
         friction: 0.5,
         density:1.2
       }
       this.x=x;
       this.y=y;
       this.r=r;
       this.body = Bodies.circle(this.x,this.y,this.r/2, options);
       World.add(myworld,this.body);
      
    }
 
    display(){
   
  //  var paperpos=this.body.position;

     push()
   //  translate(paperpos.x,paperpos.y)
      fill("purple")
     pop()
    }
 
 }