title = "RAINBOW";

description = `
[Move] to draw.`;

characters = [
`
 bb
bccc
cyyr
 rr
`
];

const G = {
   WIDTH: 120,
   HEIGHT: 100, 
   PLAYER_FIRE_RATE: 1,
   //PLAYER_GUN_OFFSET: 3,
   FBULLET_SPEED: 0.5
}

/**
 * @typedef {{
 * pos: Vector,
 * firingCooldown: number,
 * isFiringLeft: boolean
 * }} Player
 */

/**
 * @type { Player }
 */
let player;

/**
 * @typedef {{
 * pos: Vector
 * }} FBullet
 */

/**
 * @type { FBullet [] }
 */
let pencil;
let isPressed;

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
      
      player = {
         pos: vec(G.WIDTH * 0.5, G.HEIGHT * 0.5),
      };
      pencil = [];
   }

   player.pos = vec(input.pos.x, input.pos.y);
   player.pos.clamp(0, G.WIDTH, 0, G.HEIGHT);
   
   char("a", player.pos);
   if(`${input.isPressed}`) {
         pencil.push({
            pos: vec(player.pos.x, player.pos.y)
         });
      }

      pencil.forEach((fb) => {   
         char("a", fb.pos);
      });

      if(!`${input.isPressed}`) {
         
      }
   }
addEventListener("load", onLoad);