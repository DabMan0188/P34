const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine, world;

var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;

function setup()
{
    var canvas = createCanvas(windowWidth/2,windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;


    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
    
    pendulum1 = new Pendulum(50,50,"red");
    pendulum2 = new Pendulum(100,100,"blue");
    pendulum3 = new Pendulum(150,150,"green");
    pendulum4 = new Pendulum(200,200,"orange");
    pendulum5 = new Pendulum(250,250,"purple");


}

function draw() 
{
    Engine.update(engine);

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(pendulum1.body, {  x: mouseX, y:mouseY});
    Matter.Body.setPosition(pendulum2.body, {  x: mouseX, y:mouseY});
    Matter.Body.setPosition(pendulum3.body, {  x: mouseX, y:mouseY});
    Matter.Body.setPosition(pendulum4.body, {  x: mouseX, y:mouseY});
    Matter.Body.setPosition(pendulum5.body, {  x: mouseX, y:mouseY});

}