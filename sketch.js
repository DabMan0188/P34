const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;

function setup()
{
    var canvas = createCanvas(windowWidth/2,windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;

    mouseDragged();

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
    
    var pendulum1 = new Pendulum(50,50,red);
    var pendulum2 = new Pendulum(100,100,blue);
    var pendulum3 = new Pendulum(150,150,green);
    var pendulum4 = new Pendulum(200,200,orange);
    var pendulum5 = new Pendulum(250,250,purple);


}

function draw() 
{
    Engine.update(engine);

    pendulum1.diaplay();
    pendulum2.diaplay();
    pendulum3.diaplay();
    pendulum4.diaplay();
    pendulum5.diaplay();
}

function mouseDragged()
{
    Matter.body.setPosition(pendulum1.body, {  x: mouseX, y:mouseY});
    Matter.body.setPosition(pendulum2.body, {  x: mouseX, y:mouseY});
    Matter.body.setPosition(pendulum3.body, {  x: mouseX, y:mouseY});
    Matter.body.setPosition(pendulum4.body, {  x: mouseX, y:mouseY});
    Matter.body.setPosition(pendulum5.body, {  x: mouseX, y:mouseY});

}