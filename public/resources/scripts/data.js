"use strict";
// Raw data from Mario Wiki (mariowiki.com/Mario_Kart_8_Deluxe_in-game_statistics), licensed under CC-BY-SA

// "stats" are unique per class (there are no exceptions for invcb or size)
// "group" is used to highlight parts in the grids. they correspond to the class but ignore invcb and size.

const comboPartsS = [ "driver", "body", "tire", "glider" ];
const comboPartsP = [ "drivers", "bodies", "tires", "gliders" ];

const gameStats = {
  classes: {
    drivers: {
      mario: {
        weigt: 6,
        accel: 2,
        trctnOn: 4,
        trctn: 2,
        mintb: 3,
        spdGr: 7,
        spdWt: 7,
        spdAg: 7,
        spdAr: 7,
        hndGr: 4,
        hndWt: 4,
        hndAg: 4,
        hndAr: 4,
        invcb: 3,
        size: 1
      },
      luigi: {
        weigt: 6,
        accel: 2,
        trctnOn: 5,
        trctn: 1,
        mintb: 3,
        spdGr: 7,
        spdWt: 7,
        spdAg: 7,
        spdAr: 7,
        hndGr: 5,
        hndWt: 5,
        hndAg: 5,
        hndAr: 5,
        invcb: 3,
        size: 1
      },
      peach: {
        weigt: 4,
        accel: 3,
        trctnOn: 3,
        trctn: 3,
        mintb: 4,
        spdGr: 6,
        spdWt: 6,
        spdAg: 6,
        spdAr: 6,
        hndGr: 5,
        hndWt: 5,
        hndAg: 5,
        hndAr: 5,
        invcb: 1,
        size: 1
      },
      rosalina: {
        weigt: 7,
        accel: 1,
        trctnOn: 9,
        trctn: 3,
        mintb: 2,
        spdGr: 8,
        spdWt: 8,
        spdAg: 8,
        spdAr: 8,
        hndGr: 3,
        hndWt: 3,
        hndAg: 3,
        hndAr: 3,
        invcb: 4,
        size: 2
      },
      petey: {
        weigt: 10,
        accel: 1,
        trctnOn: 8,
        trctn: 1,
        mintb: 1,
        spdGr: 8,
        spdWt: 8,
        spdAg: 8,
        spdAr: 8,
        hndGr: 3,
        hndWt: 3,
        hndAg: 3,
        hndAr: 3,
        invcb: 6,
        size: 2
      },
      marioTan: {
        weigt: 5,
        accel: 3,
        trctnOn: 7,
        trctn: 1,
        mintb: 4,
        spdGr: 6,
        spdWt: 6,
        spdAg: 6,
        spdAr: 6,
        hndGr: 5,
        hndWt: 5,
        hndAg: 5,
        hndAr: 5,
        invcb: 1,
        size: 1
      },
      peachCat: {
        weigt: 3,
        accel: 4,
        trctnOn: 2,
        trctn: 3,
        mintb: 4,
        spdGr: 5,
        spdWt: 5,
        spdAg: 5,
        spdAr: 5,
        hndGr: 6,
        hndWt: 6,
        hndAg: 6,
        hndAr: 6,
        invcb: 3,
        size: 1
      },
      toad: {
        weigt: 3,
        accel: 4,
        trctnOn: 3,
        trctn: 4,
        mintb: 4,
        spdGr: 4,
        spdWt: 4,
        spdAg: 4,
        spdAr: 4,
        hndGr: 7,
        hndWt: 7,
        hndAg: 7,
        hndAr: 7,
        invcb: 3,
        size: 0
      },
      koopa: {
        weigt: 2,
        accel: 4,
        trctnOn: 1,
        trctn: 5,
        mintb: 4,
        spdGr: 3,
        spdWt: 3,
        spdAg: 3,
        spdAr: 3,
        hndGr: 8,
        hndWt: 8,
        hndAg: 8,
        hndAr: 8,
        invcb: 4,
        size: 0
      },
      toadette: {
        weigt: 2,
        accel: 5,
        trctnOn: 4,
        trctn: 2,
        mintb: 4,
        spdGr: 3,
        spdWt: 3,
        spdAg: 3,
        spdAr: 3,
        hndGr: 7,
        hndWt: 7,
        hndAg: 7,
        hndAr: 7,
        invcb: 3,
        size: 0
      },
      marioBb: {
        weigt: 1,
        accel: 5,
        trctnOn: 2,
        trctn: 4,
        mintb: 5,
        spdGr: 2,
        spdWt: 2,
        spdAg: 2,
        spdAr: 2,
        hndGr: 8,
        hndWt: 8,
        hndAg: 8,
        hndAr: 8,
        invcb: 5,
        size: 0
      },
      peachBb: {
        weigt: 0,
        accel: 4,
        trctnOn: 3,
        trctn: 5,
        mintb: 5,
        spdGr: 1,
        spdWt: 1,
        spdAg: 1,
        spdAr: 1,
        hndGr: 10,
        hndWt: 10,
        hndAg: 10,
        hndAr: 10,
        invcb: 6,
        size: 0
      },
      rosalinaBb: {
        weigt: 0,
        accel: 5,
        trctnOn: 4,
        trctn: 3,
        mintb: 5,
        spdGr: 1,
        spdWt: 1,
        spdAg: 1,
        spdAr: 1,
        hndGr: 9,
        hndWt: 9,
        hndAg: 9,
        hndAr: 9,
        invcb: 6,
        size: 0
      },
      marioMetal: {
        weigt: 10,
        accel: 1,
        trctnOn: 8,
        trctn: 1,
        mintb: 1,
        spdGr: 8,
        spdWt: 8,
        spdAg: 8,
        spdAr: 8,
        hndGr: 3,
        hndWt: 3,
        hndAg: 3,
        hndAr: 3,
        invcb: 3,
        size: 1
      },
      wiggler: {
        weigt: 8,
        accel: 1,
        trctnOn: 10,
        trctn: 0,
        mintb: 1,
        spdGr: 9,
        spdWt: 9,
        spdAg: 9,
        spdAr: 9,
        hndGr: 2,
        hndWt: 2,
        hndAg: 2,
        hndAr: 2,
        invcb: 4,
        size: 1
      },
      wario: {
        weigt: 9,
        accel: 0,
        trctnOn: 5,
        trctn: 1,
        mintb: 0,
        spdGr: 10,
        spdWt: 10,
        spdAg: 10,
        spdAr: 10,
        hndGr: 1,
        hndWt: 1,
        hndAg: 1,
        hndAr: 1,
        invcb: 5,
        size: 2
      },
      waluigi: {
        weigt: 8,
        accel: 1,
        trctnOn: 10,
        trctn: 0,
        mintb: 1,
        spdGr: 9,
        spdWt: 9,
        spdAg: 9,
        spdAr: 9,
        hndGr: 2,
        hndWt: 2,
        hndAg: 2,
        hndAr: 2,
        invcb: 4,
        size: 2
      },
      bowser: {
        weigt: 10,
        accel: 0,
        trctnOn: 6,
        trctn: 0,
        mintb: 0,
        spdGr: 10,
        spdWt: 10,
        spdAg: 10,
        spdAr: 10,
        hndGr: 0,
        hndWt: 0,
        hndAg: 0,
        hndAr: 0,
        invcb: 6,
        size: 2
      }
    },
    bodies: {
      std: {
        weigt: 2,
        accel: 4,
        trctnOn: 3,
        trctn: 3,
        mintb: 5,
        spdGr: 3,
        spdWt: 3,
        spdAg: 3,
        spdAr: 3,
        hndGr: 3,
        hndWt: 2,
        hndAg: 3,
        hndAr: 3,
        invcb: 3
      },
      gla300: {
        weigt: 2,
        accel: 4,
        trctnOn: 3,
        trctn: 3,
        mintb: 5,
        spdGr: 3,
        spdWt: 3,
        spdAg: 3,
        spdAr: 3,
        hndGr: 3,
        hndWt: 2,
        hndAg: 3,
        hndAr: 3,
        invcb: 4
      },
      pipe: {
        weigt: 1,
        accel: 6,
        trctnOn: 3,
        trctn: 4,
        mintb: 6,
        spdGr: 2,
        spdWt: 3,
        spdAg: 1,
        spdAr: 1,
        hndGr: 5,
        hndWt: 4,
        hndAg: 4,
        hndAr: 2,
        invcb: 3
      },
      varmint: {
        weigt: 1,
        accel: 6,
        trctnOn: 3,
        trctn: 4,
        mintb: 6,
        spdGr: 2,
        spdWt: 3,
        spdAg: 1,
        spdAr: 1,
        hndGr: 5,
        hndWt: 4,
        hndAg: 4,
        hndAr: 2,
        invcb: 2
      },
      mach: {
        weigt: 3,
        accel: 3,
        trctnOn: 2,
        trctn: 4,
        mintb: 5,
        spdGr: 3,
        spdWt: 3,
        spdAg: 5,
        spdAr: 4,
        hndGr: 2,
        hndWt: 2,
        hndAg: 4,
        hndAr: 2,
        invcb: 3
      },
      ink: {
        weigt: 3,
        accel: 3,
        trctnOn: 2,
        trctn: 4,
        mintb: 5,
        spdGr: 3,
        spdWt: 3,
        spdAg: 5,
        spdAr: 4,
        hndGr: 2,
        hndWt: 2,
        hndAg: 4,
        hndAr: 2,
        invcb: 1
      },
      steel: {
        weigt: 4,
        accel: 1,
        trctnOn: 1,
        trctn: 3,
        mintb: 3,
        spdGr: 4,
        spdWt: 5,
        spdAg: 2,
        spdAr: 0,
        hndGr: 1,
        hndWt: 5,
        hndAg: 1,
        hndAr: 1,
        invcb: 6
      },
      rattler: {
        weigt: 4,
        accel: 1,
        trctnOn: 1,
        trctn: 3,
        mintb: 3,
        spdGr: 4,
        spdWt: 5,
        spdAg: 2,
        spdAr: 0,
        hndGr: 1,
        hndWt: 5,
        hndAg: 1,
        hndAr: 1,
        invcb: 5
      },
      cat: {
        weigt: 2,
        accel: 5,
        trctnOn: 4,
        trctn: 3,
        mintb: 6,
        spdGr: 2,
        spdWt: 2,
        spdAg: 3,
        spdAr: 4,
        hndGr: 4,
        hndWt: 2,
        hndAg: 3,
        hndAr: 4,
        invcb: 3
      },
      comet: {
        weigt: 2,
        accel: 5,
        trctnOn: 4,
        trctn: 3,
        mintb: 6,
        spdGr: 2,
        spdWt: 2,
        spdAg: 3,
        spdAr: 4,
        hndGr: 4,
        hndWt: 2,
        hndAg: 3,
        hndAr: 4,
        invcb: 3
      },
      yoshi: {
        weigt: 2,
        accel: 5,
        trctnOn: 4,
        trctn: 3,
        mintb: 6,
        spdGr: 2,
        spdWt: 2,
        spdAg: 3,
        spdAr: 4,
        hndGr: 4,
        hndWt: 2,
        hndAg: 3,
        hndAr: 4,
        invcb: 2
      },
      teddy: {
        weigt: 2,
        accel: 5,
        trctnOn: 4,
        trctn: 3,
        mintb: 6,
        spdGr: 2,
        spdWt: 2,
        spdAg: 3,
        spdAr: 4,
        hndGr: 4,
        hndWt: 2,
        hndAg: 3,
        hndAr: 4,
        invcb: 1
      },
      circuit: {
        weigt: 3,
        accel: 1,
        trctnOn: 3,
        trctn: 1,
        mintb: 3,
        spdGr: 5,
        spdWt: 1,
        spdAg: 4,
        spdAr: 2,
        hndGr: 1,
        hndWt: 1,
        hndAg: 2,
        hndAr: 0,
        invcb: 6
      },
      wagon: {
        weigt: 4,
        accel: 0,
        trctnOn: 2,
        trctn: 5,
        mintb: 3,
        spdGr: 5,
        spdWt: 2,
        spdAg: 3,
        spdAr: 1,
        hndGr: 0,
        hndWt: 1,
        hndAg: 1,
        hndAr: 0,
        invcb: 7
      },
      atvStd: {
        weigt: 4,
        accel: 0,
        trctnOn: 2,
        trctn: 5,
        mintb: 3,
        spdGr: 5,
        spdWt: 2,
        spdAg: 3,
        spdAr: 1,
        hndGr: 0,
        hndWt: 1,
        hndAg: 1,
        hndAr: 0,
        invcb: 6
      },
      prancer: {
        weigt: 1,
        accel: 2,
        trctnOn: 1,
        trctn: 2,
        mintb: 4,
        spdGr: 4,
        spdWt: 3,
        spdAg: 3,
        spdAr: 3,
        hndGr: 3,
        hndWt: 3,
        hndAg: 2,
        hndAr: 3,
        invcb: 5
      },
      bikeSport: {
        weigt: 1,
        accel: 2,
        trctnOn: 1,
        trctn: 2,
        mintb: 4,
        spdGr: 4,
        spdWt: 3,
        spdAg: 3,
        spdAr: 3,
        hndGr: 3,
        hndWt: 3,
        hndAg: 2,
        hndAr: 3,
        invcb: 3
      },
      biddy: {
        weigt: 0,
        accel: 7,
        trctnOn: 1,
        trctn: 4,
        mintb: 7,
        spdGr: 0,
        spdWt: 1,
        spdAg: 2,
        spdAr: 1,
        hndGr: 5,
        hndWt: 4,
        hndAg: 5,
        hndAr: 4,
        invcb: 0
      },
      sneeker: {
        weigt: 2,
        accel: 2,
        trctnOn: 1,
        trctn: 0,
        mintb: 4,
        spdGr: 4,
        spdWt: 2,
        spdAg: 3,
        spdAr: 3,
        hndGr: 3,
        hndWt: 2,
        hndAg: 3,
        hndAr: 2,
        invcb: 5
      },
      gold: {
        weigt: 2,
        accel: 2,
        trctnOn: 1,
        trctn: 0,
        mintb: 4,
        spdGr: 4,
        spdWt: 2,
        spdAg: 3,
        spdAr: 3,
        hndGr: 3,
        hndWt: 2,
        hndAg: 3,
        hndAr: 2,
        invcb: 4
      },
      master: {
        weigt: 2,
        accel: 2,
        trctnOn: 1,
        trctn: 0,
        mintb: 4,
        spdGr: 4,
        spdWt: 2,
        spdAg: 3,
        spdAr: 3,
        hndGr: 3,
        hndWt: 2,
        hndAg: 3,
        hndAr: 2,
        invcb: 3
      },
      gla25: {
        weigt: 1,
        accel: 5,
        trctnOn: 3,
        trctn: 5,
        mintb: 5,
        spdGr: 2,
        spdWt: 2,
        spdAg: 4,
        spdAr: 3,
        hndGr: 4,
        hndWt: 3,
        hndAg: 4,
        hndAr: 3,
        invcb: 4
      },
      bikeStd: {
        weigt: 1,
        accel: 5,
        trctnOn: 3,
        trctn: 5,
        mintb: 5,
        spdGr: 2,
        spdWt: 2,
        spdAg: 4,
        spdAr: 3,
        hndGr: 4,
        hndWt: 3,
        hndAg: 4,
        hndAr: 3,
        invcb: 4
      },
      wiggler: {
        weigt: 1,
        accel: 5,
        trctnOn: 3,
        trctn: 5,
        mintb: 5,
        spdGr: 2,
        spdWt: 2,
        spdAg: 4,
        spdAr: 3,
        hndGr: 4,
        hndWt: 3,
        hndAg: 4,
        hndAr: 3,
        invcb: 4
      },
      falcon: {
        weigt: 0,
        accel: 3,
        trctnOn: 1,
        trctn: 3,
        mintb: 4,
        spdGr: 4,
        spdWt: 2,
        spdAg: 4,
        spdAr: 3,
        hndGr: 2,
        hndWt: 3,
        hndAg: 5,
        hndAr: 1,
        invcb: 4
      },
      splat: {
        weigt: 0,
        accel: 3,
        trctnOn: 1,
        trctn: 3,
        mintb: 4,
        spdGr: 4,
        spdWt: 2,
        spdAg: 4,
        spdAr: 3,
        hndGr: 2,
        hndWt: 3,
        hndAg: 5,
        hndAr: 1,
        invcb: 3
      },
      tanooki: {
        weigt: 3,
        accel: 2,
        trctnOn: 4,
        trctn: 7,
        mintb: 5,
        spdGr: 3,
        spdWt: 4,
        spdAg: 3,
        spdAr: 3,
        hndGr: 4,
        hndWt: 4,
        hndAg: 3,
        hndAr: 3,
        invcb: 4
      },
      koopa: {
        weigt: 3,
        accel: 2,
        trctnOn: 4,
        trctn: 7,
        mintb: 5,
        spdGr: 3,
        spdWt: 4,
        spdAg: 3,
        spdAr: 3,
        hndGr: 4,
        hndWt: 4,
        hndAg: 3,
        hndAr: 3,
        invcb: 3
      },
      streetle: {
        weigt: 0,
        accel: 6,
        trctnOn: 0,
        trctn: 6,
        mintb: 6,
        spdGr: 2,
        spdWt: 5,
        spdAg: 0,
        spdAr: 2,
        hndGr: 4,
        hndWt: 5,
        hndAg: 2,
        hndAr: 3,
        invcb: 3
      },
      landship: {
        weigt: 0,
        accel: 6,
        trctnOn: 0,
        trctn: 6,
        mintb: 6,
        spdGr: 2,
        spdWt: 5,
        spdAg: 0,
        spdAr: 2,
        hndGr: 4,
        hndWt: 5,
        hndAg: 2,
        hndAr: 3,
        invcb: 2
      }
    },
    tires: {
      std: {
        weigt: 2,
        accel: 4,
        trctnOn: 2,
        trctn: 5,
        mintb: 4,
        spdGr: 2,
        spdWt: 3,
        spdAg: 2,
        spdAr: 3,
        hndGr: 3,
        hndWt: 3,
        hndAg: 3,
        hndAr: 3,
        invcb: 4
      },
      gla: {
        weigt: 2,
        accel: 4,
        trctnOn: 2,
        trctn: 5,
        mintb: 4,
        spdGr: 2,
        spdWt: 3,
        spdAg: 2,
        spdAr: 3,
        hndGr: 3,
        hndWt: 3,
        hndAg: 3,
        hndAr: 3,
        invcb: 5
      },
      monster: {
        weigt: 4,
        accel: 2,
        trctnOn: 3,
        trctn: 7,
        mintb: 3,
        spdGr: 3,
        spdWt: 2,
        spdAg: 2,
        spdAr: 1,
        hndGr: 0,
        hndWt: 1,
        hndAg: 0,
        hndAr: 1,
        invcb: 6
      },
      ancient: {
        weigt: 4,
        accel: 2,
        trctnOn: 3,
        trctn: 7,
        mintb: 3,
        spdGr: 3,
        spdWt: 2,
        spdAg: 2,
        spdAr: 1,
        hndGr: 0,
        hndWt: 1,
        hndAg: 0,
        hndAr: 1,
        invcb: 5
      },
      roller: {
        weigt: 0,
        accel: 6,
        trctnOn: 0,
        trctn: 4,
        mintb: 6,
        spdGr: 0,
        spdWt: 3,
        spdAg: 0,
        spdAr: 3,
        hndGr: 4,
        hndWt: 4,
        hndAg: 4,
        hndAr: 4,
        invcb: 0
      },
      slim: {
        weigt: 2,
        accel: 2,
        trctnOn: 4,
        trctn: 1,
        mintb: 3,
        spdGr: 3,
        spdWt: 2,
        spdAg: 4,
        spdAr: 2,
        hndGr: 4,
        hndWt: 4,
        hndAg: 3,
        hndAr: 4,
        invcb: 5
      },
      slick: {
        weigt: 3,
        accel: 1,
        trctnOn: 4,
        trctn: 0,
        mintb: 2,
        spdGr: 4,
        spdWt: 0,
        spdAg: 4,
        spdAr: 0,
        hndGr: 2,
        hndWt: 0,
        hndAg: 2,
        hndAr: 1,
        invcb: 5
      },
      metal: {
        weigt: 4,
        accel: 0,
        trctnOn: 1,
        trctn: 2,
        mintb: 2,
        spdGr: 4,
        spdWt: 3,
        spdAg: 1,
        spdAr: 2,
        hndGr: 2,
        hndWt: 2,
        hndAg: 1,
        hndAr: 0,
        invcb: 6
      },
      gold: {
        weigt: 4,
        accel: 0,
        trctnOn: 1,
        trctn: 2,
        mintb: 2,
        spdGr: 4,
        spdWt: 3,
        spdAg: 1,
        spdAr: 2,
        hndGr: 2,
        hndWt: 2,
        hndAg: 1,
        hndAr: 0,
        invcb: 5
      },
      button: {
        weigt: 0,
        accel: 5,
        trctnOn: 1,
        trctn: 3,
        mintb: 5,
        spdGr: 1,
        spdWt: 2,
        spdAg: 2,
        spdAr: 2,
        hndGr: 3,
        hndWt: 3,
        hndAg: 4,
        hndAr: 2,
        invcb: 3
      },
      offroad: {
        weigt: 3,
        accel: 3,
        trctnOn: 3,
        trctn: 6,
        mintb: 3,
        spdGr: 3,
        spdWt: 4,
        spdAg: 2,
        spdAr: 1,
        hndGr: 1,
        hndWt: 1,
        hndAg: 2,
        hndAr: 2,
        invcb: 6
      },
      cushion: {
        weigt: 1,
        accel: 4,
        trctnOn: 2,
        trctn: 6,
        mintb: 5,
        spdGr: 1,
        spdWt: 1,
        spdAg: 1,
        spdAr: 4,
        hndGr: 2,
        hndWt: 1,
        hndAg: 2,
        hndAr: 3,
        invcb: 6
      },
      sponge: {
        weigt: 1,
        accel: 4,
        trctnOn: 2,
        trctn: 6,
        mintb: 5,
        spdGr: 1,
        spdWt: 1,
        spdAg: 1,
        spdAr: 4,
        hndGr: 2,
        hndWt: 1,
        hndAg: 2,
        hndAr: 3,
        invcb: 4
      }
    },
    gliders: {
      super: {
        weigt: 1,
        accel: 1,
        trctnOn: 1,
        trctn: 1,
        mintb: 1,
        spdGr: 1,
        spdWt: 1,
        spdAg: 0,
        spdAr: 2,
        hndGr: 1,
        hndWt: 0,
        hndAg: 1,
        hndAr: 1,
        invcb: 1
      },
      cloud: {
        weigt: 0,
        accel: 2,
        trctnOn: 1,
        trctn: 1,
        mintb: 2,
        spdGr: 0,
        spdWt: 1,
        spdAg: 1,
        spdAr: 1,
        hndGr: 1,
        hndWt: 0,
        hndAg: 1,
        hndAr: 2,
        invcb: 0
      },
      parafoil: {
        weigt: 1,
        accel: 2,
        trctnOn: 2,
        trctn: 0,
        mintb: 2,
        spdGr: 0,
        spdWt: 0,
        spdAg: 1,
        spdAr: 1,
        hndGr: 1,
        hndWt: 1,
        hndAg: 0,
        hndAr: 2,
        invcb: 0
      },
      gold: {
        weigt: 2,
        accel: 1,
        trctnOn: 2,
        trctn: 0,
        mintb: 1,
        spdGr: 1,
        spdWt: 0,
        spdAg: 1,
        spdAr: 2,
        hndGr: 1,
        hndWt: 1,
        hndAg: 0,
        hndAr: 1,
        invcb: 1
      }
    }
  },
  parts: {
    drivers: {
      mario: {
        stats: "mario",
        group: "mario"
      },
      luigi: {
        stats: "luigi",
        group: "luigi"
      },
      peach: {
        stats: "peach",
        group: "peach"
      },
      daisy: {
        stats: "peach",
        group: "peach"
      },
      rosalina: {
        stats: "rosalina",
        group: "rosalina"
      },
      marioTan: {
        stats: "marioTan",
        group: "marioTan"
      },
      peachCat: {
        stats: "peachCat",
        group: "peachCat"
      },
      birdo: {
        stats: "peach",
        group: "peach"
      },
      yoshi: {
        stats: "peach",
        group: "peach"
      },
      toad: {
        stats: "toad",
        group: "toad"
      },
      koopa: {
        stats: "koopa",
        group: "koopa"
      },
      shyguy: {
        stats: "toad",
        group: "toad"
      },
      lakitu: {
        stats: "koopa",
        group: "koopa"
      },
      toadette: {
        stats: "toadette",
        group: "toadette"
      },
      kingboo: {
        stats: "rosalina",
        group: "rosalina"
      },
      petey: {
        stats: "petey",
        group: "marioMetal"
      },
      marioBb: {
        stats: "marioBb",
        group: "marioBb"
      },
      luigiBb: {
        stats: "marioBb",
        group: "marioBb"
      },
      peachBb: {
        stats: "peachBb",
        group: "peachBb"
      },
      daisyBb: {
        stats: "peachBb",
        group: "peachBb"
      },
      rosalinaBb: {
        stats: "rosalinaBb",
        group: "rosalinaBb"
      },
      marioMetal: {
        stats: "marioMetal",
        group: "marioMetal",
        folder: "marioMetal"
      },
      marioGold: {
        stats: "marioMetal",
        group: "marioMetal",
        folder: "marioMetal"
      },
      peachGold: {
        stats: "marioMetal",
        group: "marioMetal"
      },
      wiggler: {
        stats: "wiggler",
        group: "waluigi"
      },
      wario: {
        stats: "wario",
        group: "wario"
      },
      waluigi: {
        stats: "waluigi",
        group: "waluigi"
      },
      dk: {
        stats: "waluigi",
        group: "waluigi"
      },
      bowser: {
        stats: "bowser",
        group: "bowser"
      },
      drybones: {
        stats: "marioBb",
        group: "marioBb"
      },
      bowserJr: {
        stats: "koopa",
        group: "koopa"
      },
      bowserDry: {
        stats: "wario",
        group: "wario"
      },
      kamek: {
        stats: "luigi",
        group: "luigi"
      },
      lemmy: {
        stats: "rosalinaBb",
        group: "rosalinaBb"
      },
      larry: {
        stats: "toad",
        group: "toad"
      },
      wendy: {
        stats: "toadette",
        group: "toadette"
      },
      ludwig: {
        stats: "mario",
        group: "mario"
      },
      iggy: {
        stats: "luigi",
        group: "luigi"
      },
      roy: {
        stats: "waluigi",
        group: "waluigi"
      },
      morton: {
        stats: "bowser",
        group: "bowser"
      },
      peachette: {
        stats: "peach",
        group: "peach"
      },
      inklingF: {
        stats: "peachCat",
        group: "peachCat",
        folder: "inkling"
      },
      inklingM: {
        stats: "marioTan",
        group: "marioTan",
        folder: "inkling"
      },
      villagerM: {
        stats: "marioTan",
        group: "marioTan",
        folder: "villager"
      },
      villagerF: {
        stats: "peachCat",
        group: "peachCat",
        folder: "villager"
      },
      isabelle: {
        stats: "toadette",
        group: "toadette"
      },
      link: {
        stats: "rosalina",
        group: "rosalina",
        folder: "link"
      },
      linkBOTW: {
        stats: "rosalina",
        group: "rosalina",
        folder: "link"
      },
      ddk: {
        stats: "peachCat",
        group: "peachCat"
      },
      fk: {
        stats: "wario",
        group: "wario"
      },
      pauline: {
        stats: "rosalina",
        group: "rosalina"
      },
      miiS: {
        stats: "marioBb",
        group: "marioBb",
        folder: "mii"
      },
      miiM: {
        stats: "mario",
        group: "mario",
        folder: "mii"
      },
      miiL: {
        stats: "wario",
        group: "wario",
        folder: "mii"
      }
    },
    bodies: {
      std: {
        type: "kart",
        stats: "std",
        group: "std"
      },
      pipe: {
        type: "kart",
        stats: "pipe",
        group: "pipe"
      },
      mach: {
        type: "kart",
        stats: "mach",
        group: "mach"
      },
      steel: {
        type: "kart",
        stats: "steel",
        group: "steel"
      },
      cat: {
        type: "kart",
        stats: "cat",
        group: "cat"
      },
      circuit: {
        type: "kart",
        stats: "circuit",
        group: "circuit"
      },
      trispeed: {
        type: "kart",
        stats: "steel",
        group: "steel"
      },
      wagon: {
        type: "kart",
        stats: "wagon",
        group: "wagon"
      },
      prancer: {
        type: "kart",
        stats: "prancer",
        group: "bikeSport"
      },
      biddy: {
        type: "kart",
        stats: "biddy",
        group: "biddy"
      },
      landship: {
        type: "kart",
        stats: "landship",
        group: "streetle"
      },
      sneeker: {
        type: "kart",
        stats: "sneeker",
        group: "sneeker"
      },
      coupe: {
        type: "kart",
        stats: "mach",
        group: "mach"
      },
      gold: {
        type: "kart",
        stats: "gold",
        group: "sneeker"
      },
      bikeStd: {
        type: "bike",
        stats: "bikeStd",
        group: "bikeStd"
      },
      bikeSport: {
        type: "sport",
        stats: "bikeSport",
        group: "bikeSport"
      },
      comet: {
        type: "sport",
        stats: "comet",
        group: "cat"
      },
      duke: {
        type: "bike",
        stats: "std",
        group: "std"
      },
      flame: {
        type: "bike",
        stats: "bikeStd",
        group: "bikeStd"
      },
      varmint: {
        type: "bike",
        stats: "varmint",
        group: "pipe"
      },
      scooty: {
        type: "bike",
        stats: "biddy",
        group: "biddy"
      },
      jet: {
        type: "sport",
        stats: "bikeSport",
        group: "bikeSport"
      },
      yoshi: {
        type: "sport",
        stats: "yoshi",
        group: "cat"
      },
      atvStd: {
        type: "atv",
        stats: "atvStd",
        group: "wagon"
      },
      wiggler: {
        type: "atv",
        stats: "wiggler",
        group: "bikeStd"
      },
      teddy: {
        type: "atv",
        stats: "teddy",
        group: "cat"
      },
      gla: {
        type: "kart",
        stats: "wagon",
        group: "wagon"
      },
      gla25: {
        type: "kart",
        stats: "gla25",
        group: "bikeStd"
      },
      gla300: {
        type: "kart",
        stats: "gla300",
        group: "std"
      },
      falcon: {
        type: "kart",
        stats: "falcon",
        group: "falcon"
      },
      tanooki: {
        type: "kart",
        stats: "tanooki",
        group: "tanooki"
      },
      dasher: {
        type: "kart",
        stats: "circuit",
        group: "circuit"
      },
      master: {
        type: "sport",
        stats: "master",
        group: "sneeker"
      },
      streetle: {
        type: "kart",
        stats: "streetle",
        group: "streetle"
      },
      pwing: {
        type: "kart",
        stats: "circuit",
        group: "circuit"
      },
      city: {
        type: "bike",
        stats: "varmint",
        group: "pipe"
      },
      rattler: {
        type: "atv",
        stats: "rattler",
        group: "steel"
      },
      koopa: {
        type: "kart",
        stats: "koopa",
        group: "tanooki"
      },
      splat: {
        type: "atv",
        stats: "splat",
        group: "falcon"
      },
      ink: {
        type: "atv",
        stats: "ink",
        group: "mach"
      },
      masterZero: {
        type: "bike",
        stats: "koopa",
        group: "tanooki"
      }
    },
    tires: {
      std: {
        stats: "std",
        group: "std"
      },
      monster: {
        stats: "monster",
        group: "monster"
      },
      roller: {
        stats: "roller",
        group: "roller"
      },
      slim: {
        stats: "slim",
        group: "slim"
      },
      slick: {
        stats: "slick",
        group: "slick"
      },
      metal: {
        stats: "metal",
        group: "metal"
      },
      button: {
        stats: "button",
        group: "button"
      },
      offroad: {
        stats: "offroad",
        group: "offroad"
      },
      sponge: {
        stats: "sponge",
        group: "cushion",
      },
      wood: {
        stats: "slim",
        group: "slim"
      },
      cushion: {
        stats: "cushion",
        group: "cushion"
      },
      stdBlue: {
        stats: "std",
        group: "std"
      },
      monsterHot: {
        stats: "monster",
        group: "monster"
      },
      rollerBlue: {
        stats: "roller",
        group: "roller"
      },
      slimRed: {
        stats: "slim",
        group: "slim"
      },
      slickPurple: {
        stats: "slick",
        group: "slick"
      },
      offroadRetro: {
        stats: "offroad",
        group: "offroad"
      },
      gold: {
        stats: "gold",
        group: "metal"
      },
      gla: {
        stats: "gla",
        group: "std"
      },
      triforce: {
        stats: "offroad",
        group: "offroad"
      },
      leaf: {
        stats: "button",
        group: "button"
      },
      ancient: {
        stats: "ancient",
        group: "monster"
      }
    },
    gliders: {
      super: {
        stats: "super",
        group: "super"
      },
      cloud: {
        stats: "cloud",
        group: "cloud"
      },
      wario: {
        stats: "gold",
        group: "gold"
      },
      squirrel: {
        stats: "super",
        group: "super"
      },
      parasol: {
        stats: "parafoil",
        group: "parafoil"
      },
      parachute: {
        stats: "cloud",
        group: "cloud"
      },
      parafoil: {
        stats: "parafoil",
        group: "parafoil"
      },
      flower: {
        stats: "cloud",
        group: "cloud"
      },
      bowser: {
        stats: "parafoil",
        group: "parafoil"
      },
      plane: {
        stats: "gold",
        group: "gold"
      },
      parafoilTV: {
        stats: "parafoil",
        group: "parafoil"
      },
      gold: {
        stats: "gold",
        group: "gold"
      },
      hylian: {
        stats: "super",
        group: "super"
      },
      paper: {
        stats: "cloud",
        group: "cloud"
      },
      paraglider: {
        stats: "gold",
        group: "gold"
      }
    }
  }
};

const bodyVariants = {
  std: {
    luigi: "green",
    peach: "pink",
    daisy: "daisy",
    rosalina: "rosalina",
    marioTan: "marioTan",
    peachCat: "peachCat",
    birdo: "toadette",
    yoshi: "yoshi",
    toad: "toad",
    koopa: "koopa",
    shyguy: "shyguy",
    lakitu: "lightblue",
    toadette: "toadette",
    kingboo: "kingboo",
    petey: "green",
    luigiBb: "green",
    peachBb: "pink",
    daisyBb: "daisy",
    rosalinaBb: "rosalina",
    marioMetal: "marioMetal",
    marioGold: "marioMetal",
    peachGold: "peachGold",
    wiggler: "daisy",
    wario: "wario",
    waluigi: "waluigi",
    dk: "dk",
    bowser: "bowser",
    drybones: "drybones",
    bowserJr: "bowserJr",
    bowserDry: "bowserDry",
    kamek: "lightblue",
    lemmy: "lemmy",
    larry: "larry",
    wendy: "wendy",
    ludwig: "ludwig",
    iggy: "iggy",
    roy: "roy",
    morton: "morton",
    inklingM: "inklingM",
    inklingF: "inklingF",
    villagerM: "villagerM",
    villagerF: "villagerF",
    isabelle: "isabelle",
    link: "link",
    linkBOTW: "link",
    peachette: "toadette",
    fk: "lightblue",
    miiS: "lightblue",
    miiM: "blue",
    miiL: "purple"
  },
  pipe: {
    luigi: "green",
    peach: "pink",
    daisy: "orange",
    rosalina: "lightblue",
    marioTan: "orange",
    peachCat: "pink",
    birdo: "birdo",
    yoshi: "green",
    toad: "blue",
    koopa: "yellow",
    shyguy: "black",
    lakitu: "lightblue",
    toadette: "pink",
    kingboo: "black",
    petey: "green",
    luigiBb: "green",
    peachBb: "pink",
    daisyBb: "orange",
    rosalinaBb: "lightblue",
    marioMetal: "marioMetal",
    marioGold: "marioMetal",
    peachGold: "peachGold",
    wiggler: "orange",
    wario: "purple",
    waluigi: "waluigi",
    dk: "yellow",
    bowser: "bowser",
    drybones: "lightblue",
    bowserJr: "green",
    bowserDry: "black",
    kamek: "lightblue",
    lemmy: "lemmy",
    larry: "larry",
    wendy: "wendy",
    ludwig: "ludwig",
    iggy: "iggy",
    roy: "roy",
    morton: "morton",
    inklingM: "blue",
    inklingF: "yellow",
    villagerM: "bowser",
    villagerF: "pink",
    isabelle: "lightgreen",
    link: "blue",
    linkBOTW: "yellow",
    peachette: "pink",
    fk: "lightblue",
    miiS: "lightblue",
    miiM: "blue",
    miiL: "purple"
  },
  circuit: {
    luigi: "green",
    peach: "orange",
    daisy: "orange",
    marioTan: "orange",
    peachCat: "orange",
    yoshi: "green",
    koopa: "green",
    shyguy: "black",
    toadette: "orange",
    kingboo: "black",
    petey: "green",
    luigiBb: "green",
    peachBb: "orange",
    daisyBb: "orange",
    marioMetal: "black",
    marioGold: "black",
    peachGold: "orange",
    wiggler: "orange",
    wario: "black",
    dk: "orange",
    bowser: "black",
    bowserJr: "green",
    bowserDry: "black",
    lemmy: "green",
    larry: "orange",
    wendy: "black",
    iggy: "green",
    roy: "black",
    morton: "black",
    inklingF: "orange",
    villagerM: "green",
    villagerF: "orange",
    isabelle: "orange",
    linkBOTW: "green",
    peachette: "orange",
    pauline: "black",
    miiS: "orange",
    miiL: "black"
  },
  biddy: {
    luigi: "green",
    peach: "pink",
    daisy: "yellow",
    rosalina: "blue",
    peachCat: "pink",
    birdo: "pink",
    yoshi: "green",
    toad: "blue",
    koopa: "green",
    lakitu: "blue",
    toadette: "pink",
    petey: "green",
    luigiBb: "green",
    peachBb: "pink",
    daisyBb: "yellow",
    rosalinaBb: "blue",
    peachGold: "pink",
    wiggler: "yellow",
    wario: "yellow",
    waluigi: "blue",
    bowser: "yellow",
    drybones: "blue",
    bowserJr: "green",
    bowserDry: "yellow",
    kamek: "blue",
    lemmy: "blue",
    larry: "yellow",
    wendy: "pink",
    ludwig: "blue",
    iggy: "green",
    roy: "pink",
    inklingM: "blue",
    villagerF: "pink",
    isabelle: "green",
    link: "green",
    peachette: "pink",
    fk: "blue",
    miiS: "green",
    miiM: "blue"
  },
  landship: {
    lemmy: "lemmy",
    larry: "larry",
    wendy: "wendy",
    ludwig: "ludwig",
    iggy: "iggy",
    roy: "roy",
    morton: "morton"
  },
  sneeker: {
    peach: "pink",
    daisy: "yellow",
    rosalina: "pink",
    marioTan: "yellow",
    peachCat: "pink",
    birdo: "pink",
    koopa: "yellow",
    shyguy: "grey",
    toadette: "pink",
    kingboo: "grey",
    petey: "grey",
    peachBb: "pink",
    daisyBb: "yellow",
    rosalinaBb: "pink",
    marioMetal: "grey",
    marioGold: "grey",
    peachGold: "pink",
    wiggler: "yellow",
    wario: "yellow",
    waluigi: "yellow",
    bowser: "grey",
    drybones: "grey",
    bowserJr: "grey",
    bowserDry: "grey",
    lemmy: "yellow",
    larry: "yellow",
    wendy: "pink",
    ludwig: "grey",
    iggy: "grey",
    roy: "yellow",
    morton: "grey",
    inklingM: "yellow",
    inklingF: "yellow",
    villagerF: "pink",
    isabelle: "pink",
    linkBOTW: "grey",
    peachette: "pink",
    miiS: "pink",
    miiL: "yellow"
  },
  gla: {
    luigi: "blue",
    peach: "red",
    daisy: "red",
    rosalina: "grey",
    marioTan: "red",
    peachCat: "white",
    birdo: "red",
    yoshi: "white",
    toad: "blue",
    koopa: "lightblue",
    shyguy: "black",
    lakitu: "white",
    toadette: "white",
    kingboo: "purple",
    petey: "red",
    luigiBb: "blue",
    peachBb: "red",
    daisyBb: "red",
    rosalinaBb: "grey",
    marioMetal: "grey",
    marioGold: "grey",
    peachGold: "brown",
    wiggler: "brown",
    wario: "purple",
    waluigi: "blue",
    dk: "brown",
    bowser: "black",
    drybones: "lightblue",
    kamek: "white",
    lemmy: "brown",
    larry: "lightblue",
    wendy: "red",
    ludwig: "blue",
    roy: "purple",
    morton: "white",
    inklingM: "blue",
    inklingF: "red",
    villagerM: "blue",
    villagerF: "white",
    isabelle: "white",
    link: "blue",
    linkBOTW: "grey",
    peachette: "white",
    ddk: "red",
    fk: "white",
    pauline: "red",
    miiS: "lightblue",
    miiM: "blue",
    miiL: "purple"
  },
  koopa: {
    lemmy: "lemmy",
    larry: "larry",
    wendy: "wendy",
    ludwig: "ludwig",
    iggy: "iggy",
    roy: "roy",
    morton: "morton"
  },
  bikeStd: {
    luigi: "green",
    peach: "pink",
    daisy: "orange",
    rosalina: "rosalina",
    marioTan: "marioTan",
    peachCat: "peachCat",
    birdo: "toadette",
    yoshi: "yoshi",
    toad: "toad",
    koopa: "lightgreen",
    shyguy: "shyguy",
    lakitu: "lightblue",
    toadette: "toadette",
    kingboo: "kingboo",
    petey: "green",
    luigiBb: "green",
    peachBb: "pink",
    daisyBb: "orange",
    rosalinaBb: "rosalina",
    marioMetal: "marioMetal",
    marioGold: "marioMetal",
    peachGold: "peachGold",
    wiggler: "orange",
    wario: "yellow",
    waluigi: "waluigi",
    dk: "dk",
    bowser: "bowser",
    drybones: "drybones",
    bowserJr: "bowserJr",
    bowserDry: "bowserDry",
    kamek: "lightblue",
    lemmy: "lemmy",
    larry: "larry",
    wendy: "wendy",
    ludwig: "ludwig",
    iggy: "iggy",
    roy: "roy",
    morton: "morton",
    inklingM: "inklingM",
    inklingF: "inklingF",
    villagerM: "villagerM",
    villagerF: "villagerF",
    isabelle: "isabelle",
    link: "link",
    linkBOTW: "link",
    peachette: "toadette",
    fk: "lightblue",
    miiS: "lightblue",
    miiM: "blue",
    miiL: "purple"
  },
  city: {
    mario: "white",
    luigi: "green",
    peach: "pink",
    daisy: "orange",
    rosalina: "lightblue",
    marioTan: "red",
    peachCat: "brown",
    birdo: "pink",
    toad: "blue",
    koopa: "green",
    shyguy: "red",
    toadette: "pink",
    kingboo: "black",
    petey: "green",
    marioBb: "white",
    luigiBb: "green",
    peachBb: "pink",
    daisyBb: "orange",
    rosalinaBb: "lightblue",
    marioMetal: "black",
    marioGold: "black",
    peachGold: "brown",
    wiggler: "orange",
    wario: "yellow",
    waluigi: "blue",
    dk: "red",
    bowser: "black",
    drybones: "lightblue",
    bowserJr: "black",
    bowserDry: "black",
    kamek: "purple",
    lemmy: "yellow",
    larry: "lightblue",
    wendy: "purple",
    ludwig: "blue",
    iggy: "green",
    roy: "purple",
    morton: "black",
    inklingM: "blue",
    inklingF: "red",
    villagerM: "red",
    villagerF: "pink",
    link: "blue",
    linkBOTW: "red",
    peachette: "pink",
    ddk: "white",
    fk: "black",
    pauline: "red",
    miiS: "lightblue",
    miiM: "blue",
    miiL: "purple"
  },
  bikeSport: {
    luigi: "green",
    peach: "orange",
    daisy: "orange",
    rosalina: "orange",
    marioTan: "orange",
    peachCat: "orange",
    birdo: "orange",
    yoshi: "green",
    koopa: "green",
    lakitu: "green",
    toadette: "orange",
    petey: "green",
    luigiBb: "green",
    peachBb: "orange",
    daisyBb: "orange",
    rosalinaBb: "orange",
    peachGold: "orange",
    wiggler: "orange",
    dk: "orange",
    drybones: "green",
    bowserJr: "green",
    kamek: "green",
    lemmy: "green",
    wendy: "orange",
    ludwig: "green",
    iggy: "green",
    inklingF: "orange",
    villagerM: "green",
    villagerF: "orange",
    isabelle: "green",
    peachette: "orange",
    miiS: "green",
    miiL: "orange"
  },
  atvStd: {
    luigi: "green",
    peach: "peach",
    daisy: "orange",
    rosalina: "rosalina",
    marioTan: "marioTan",
    peachCat: "peachCat",
    birdo: "pink",
    yoshi: "lightgreen",
    toad: "blue",
    koopa: "koopa",
    shyguy: "black",
    lakitu: "lightblue",
    toadette: "pink",
    kingboo: "kingboo",
    petey: "green",
    luigiBb: "green",
    peachBb: "peach",
    daisyBb: "orange",
    rosalinaBb: "rosalina",
    marioMetal: "marioMetal",
    marioGold: "marioMetal",
    peachGold: "peachGold",
    wiggler: "orange",
    wario: "purple",
    waluigi: "waluigi",
    dk: "dk",
    bowser: "bowser",
    drybones: "drybones",
    bowserJr: "bowserJr",
    bowserDry: "bowserDry",
    kamek: "lightblue",
    lemmy: "lemmy",
    larry: "yellow",
    wendy: "wendy",
    ludwig: "ludwig",
    iggy: "iggy",
    roy: "roy",
    morton: "morton",
    inklingM: "inklingM",
    inklingF: "inklingF",
    villagerM: "villagerM",
    villagerF: "villagerF",
    isabelle: "isabelle",
    link: "link",
    linkBOTW: "link",
    peachette: "pink",
    fk: "lightblue",
    miiS: "lightblue",
    miiM: "blue",
    miiL: "purple"
  },
  splat: {
    inklingF: "inklingF",
    inklingM: "inklingM"
  },
  ink: {
    inklingF: "inklingF",
    inklingM: "inklingM"
  }
}

function getBodyVariant(body, driver) {
  const variant = bodyVariants[body]?.[driver];
  if (variant != undefined) return "-" + variant;
  return "";
}

const gliderVariants = {
  super: {
    luigi: "green",
    peach: "pink",
    daisy: "orange",
    rosalina: "rosalina",
    marioTan: "marioTan",
    peachCat: "peachCat",
    birdo: "toadette",
    yoshi: "yoshi",
    toad: "toad",
    koopa: "koopa",
    shyguy: "shyguy",
    lakitu: "lakitu",
    toadette: "toadette",
    kingboo: "kingboo",
    petey: "green",
    luigiBb: "green",
    peachBb: "pink",
    daisyBb: "orange",
    rosalinaBb: "rosalina",
    marioMetal: "marioMetal",
    marioGold: "marioMetal",
    peachGold: "peachGold",
    wiggler: "orange",
    wario: "wario",
    waluigi: "waluigi",
    dk: "dk",
    bowser: "bowser",
    drybones: "drybones",
    bowserJr: "bowserJr",
    bowserDry: "bowserDry",
    kamek: "lightblue",
    lemmy: "lemmy",
    larry: "larry",
    wendy: "wendy",
    ludwig: "ludwig",
    iggy: "iggy",
    roy: "roy",
    morton: "morton",
    inklingM: "inklingM",
    inklingF: "inklingF",
    villagerM: "villagerM",
    villagerF: "villagerF",
    isabelle: "isabelle",
    link: "link",
    linkBOTW: "link",
    peachette: "toadette",
    miiS: "lightblue",
    miiM: "blue",
    miiL: "purple"
  },
  parasol: {
    daisy: "daisy",
    daisyBb: "daisy",
    wiggler: "daisy",
    rosalina: "rosalina",
    rosalinaBb: "rosalina",
    kamek: "rosalina",
    fk: "rosalina",
  }
};

function getGliderVariant(glider, driver) {
  const variant = gliderVariants[glider]?.[driver];
  if (variant != undefined) return "-" + variant;
  return "";
}

// Free codes:
//   H   O
// fgh n o q
const driverCodes = {
  mario: "M",
  luigi: "L",
  peach: "P",
  daisy: "J",
  rosalina: "R",
  marioTan: "N",
  peachCat: "C",
  birdo: "y",
  yoshi: "Y",
  toad: "T",
  koopa: "k",
  shyguy: "s",
  lakitu: "u",
  toadette: "t",
  kingboo: "K",
  petey: "Q",
  marioBb: "m",
  luigiBb: "l",
  peachBb: "p",
  daisyBb: "j",
  rosalinaBb: "r",
  marioMetal: "S",
  marioGold: "A",
  peachGold: "a",
  wiggler: "G",
  wario: "W",
  waluigi: "w",
  dk: "D",
  bowser: "B",
  drybones: "x",
  bowserJr: "b",
  bowserDry: "X",
  kamek: "E",
  lemmy: "0",
  larry: "1",
  wendy: "2",
  ludwig: "3",
  iggy: "4",
  roy: "5",
  morton: "6",
  inklingM: "I",
  inklingF: "i",
  villagerM: "V",
  villagerF: "v",
  isabelle: "e",
  link: "z",
  linkBOTW: "Z",
  peachette: "c",
  ddk: "d",
  fk: "F",
  pauline: "U",
  miiS: "7",
  miiM: "8",
  miiL: "9"
};

// Free codes:
//          J   NO Q      X
//           klmno q      x  01  456789
const bodyCodes = {
  std: "A",
  pipe: "P",
  mach: "M",
  steel: "R",
  cat: "C",
  circuit: "e",
  trispeed: "3",
  wagon: "w",
  prancer: "H",
  biddy: "B",
  landship: "L",
  sneeker: "U",
  coupe: "i",
  gold: "u",
  bikeStd: "E",
  bikeSport: "h",
  comet: "c",
  duke: "D",
  flame: "f",
  varmint: "V",
  scooty: "s",
  jet: "j",
  yoshi: "y",
  atvStd: "a",
  wiggler: "W",
  teddy: "T",
  gla: "g",
  gla25: "2",
  gla300: "d",
  falcon: "F",
  tanooki: "t",
  dasher: "b",
  master: "z",
  streetle: "S",
  pwing: "p",
  city: "v",
  rattler: "r",
  koopa: "K",
  splat: "Y",
  ink: "I",
  masterZero: "Z"
};

// Free codes:
//    DEF HIJ   N PQ   UV XY
//  b def hij l n pq  tuvwxy  012 456789
const tireCodes = {
  std: "A",
  monster: "M",
  roller: "R",
  slim: "S",
  slick: "K",
  metal: "T",
  button: "B",
  offroad: "O",
  sponge: "c",
  wood: "W",
  cushion: "C",
  stdBlue: "a",
  monsterHot: "m",
  rollerBlue: "r",
  slimRed: "s",
  slickPurple: "k",
  offroadRetro: "o",
  gold: "g",
  gla: "G",
  triforce: "z",
  leaf: "L",
  ancient: "Z"
};

// Free codes:
//    DE  HIJKLMNO QR  UVWXY
// ab de ghijklmnopqr tuv xy 0123456789
const gliderCodes = {
  super: "A",
  cloud: "C",
  wario: "W",
  squirrel: "S",
  parasol: "s",
  parachute: "c",
  parafoil: "f",
  flower: "F",
  bowser: "B",
  plane: "w",
  parafoilTV: "T",
  gold: "G",
  hylian: "z",
  paper: "P",
  paraglider: "Z"
};
