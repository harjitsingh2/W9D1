document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    canvas.width = 500;
    canvas.height = 500;
  
    const ctx = canvas.getContext("2d");
  
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 400, 400);
});