console.log("bär")

var canvasuno = document.getElementById("uno")
var context = canvasuno.getContext("2d")
var canvasdue = document.getElementById("due")
var contextbis = canvasdue.getContext("2d")
var canvastris = document.getElementById("tre")
var contexttris = canvastris.getContext("2d")
var canvasfour = document.getElementById("quattro")
var contextfour = canvasfour.getContext("2d")
var canvasfive = document.getElementById("cinque")
var contextfive = canvasfive.getContext("2d")
var canvassix = document.getElementById("sei")
var contextsei = canvassix.getContext("2d")

context.strokeStyle = "black";
context.lineWidth = 4;

//body left
context.beginPath()
context.moveTo(70,270)
context.lineTo(100,100)
context.stroke()
context.closePath()

//ears
context.beginPath()
context.arc(100, 90, 10, 20, Math.PI*2)
context.stroke()
context.arc(150, 85, 8, 20, Math.PI*2)
context.stroke()

//body right
context.lineTo(170,170)
context.lineTo(200,270)
context.stroke()
context.closePath()

//face
context.beginPath()
context.arc(140, 130, 15, 0, Math.PI*2)
context.stroke()
context.beginPath()
context.arc(120, 120, 5, 0, Math.PI*2)
context.fill()
context.arc(150, 110, 5, 0, Math.PI*2)
context.fill()

//nose
context.beginPath()
context.moveTo(140,130)
context.lineTo(134,121)
context.lineTo(142,123)
context.lineTo(140,125)
context.stroke()
context.closePath()

//body
context.beginPath()
context.moveTo(70,270)
context.lineTo(80,570)
context.stroke()
context.beginPath()
context.moveTo(70,270)
context.lineTo(100,310)
context.lineTo(110,290)
context.stroke()

canvasuno.addEventListener("mouseenter", function() {
    contextbis.drawImage(canvasuno, 10, 10, 600, 600, 10, 10, 600, 600)
    context.clearRect(0, 0, 600, 600)
    })

canvasdue.addEventListener("mouseenter", function() {
    contexttris.drawImage(canvasdue, 10, 10, 600, 600, 10, 10, 600, 600)
    contextbis.clearRect(0, 0, 600, 600)
})

canvastris.addEventListener("mouseenter", function() {
    contextfour.drawImage(canvastris, 10, 10, 600, 600, 10, 10, 600, 600)
    contexttris.clearRect(0, 0, 600, 600)
    })

canvasfour.addEventListener("mouseenter", function() {
    context.drawImage(canvasfour, 10, 10, 600, 600, 10, 10, 600, 600)
    contextfour.clearRect(0, 0, 600, 600)
    })

//flower
    contextfive.strokeStyle = "green";
    contextfive.lineWidth = 3;
    contextfive.beginPath()
    contextfive.moveTo(280,260)
    contextfive.lineTo(300,150)
    contextfive.stroke()
    contextfive.closePath()
            contextfive.beginPath()
            contextfive.fillStyle = "yellow"
            contextfive.arc(290, 145, 15, 0, Math.PI*2)
            contextfive.closePath()
            contextfive.arc(300, 130, 15, 0, Math.PI*2)
            contextfive.closePath()
            contextfive.arc(320, 145, 15, 0, Math.PI*2)
            contextfive.closePath()
            contextfive.arc(310, 160, 15, 0, Math.PI*2)
            contextfive.closePath()
            contextfive.fill()
            contextfive.beginPath()
            contextfive.fillStyle = "red"
            contextfive.arc(305, 145, 5, 0, Math.PI*2)
            contextfive.closePath()
            contextfive.fill()

//heart

contextsei.strokeStyle = "black";
contextsei.lineWidth = 4;

contextsei.beginPath()
contextsei.moveTo(40,270)
contextsei.lineTo(100,100)
contextsei.lineTo(150,70)
contextsei.lineTo(180,65)
contextsei.lineTo(190,75)
contextsei.lineTo(120,180)
contextsei.lineTo(250,30)
contextsei.lineTo(270,20)
contextsei.lineTo(340,20)
contextsei.lineTo(360,50)
contextsei.lineTo(380,80)
contextsei.lineTo(350,120)
contextsei.stroke()
contextsei.closePath()
contextsei.fill()

            