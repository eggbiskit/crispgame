title = "+ RAINBOW +";

description = `
Make the 

longest rainbow.`;

characters = [
`
 bb
bccc
cyyr
 rr
`
,
`
 yyyy
yyyyyy
yyyyyy
 yyyy
`
];

const G = {
   WIDTH: 150,
   HEIGHT: 100, 
   PLAYER_FIRE_RATE: 1,
   FBULLET_SPEED: 1000
}

/**
 * @type { Player }
 */
let player;

/**
 * @type { FBullet [] }
 */
let pencil;
let posx;
let posy;

options = {
   theme: "pixel",
   viewSize: {x: G.WIDTH, y: G.HEIGHT},
   isPlayingBgm: true,
   isReplayEnabled: true,
   seed: 77
};

function update() {
  if (!ticks) {
   player = {
      pos: vec(G.WIDTH * 0.5, G.HEIGHT * 0.5)};
      pencil = [];
   }

   player.pos = vec(input.pos.x, input.pos.y);
   player.pos.clamp(0, G.WIDTH, 0, G.HEIGHT);
   
   char("a", player.pos);
   if(input.isPressed) {
      pencil.push({
         pos: vec(player.pos.x, player.pos.y)
      });
      score++;
   }

   pencil.forEach((fb) => {   
      char("a", fb.pos);
   });

   oldTicks = ticks;
   if(oldTicks > ticks) {
      posx = player.pos.x;
      posy = player.pos.y;
   }

   if(!input.isPressed && posx != player.pos.x && posy != player.pos.y) {
      end();
   }
}
addEventListener("load", onLoad);