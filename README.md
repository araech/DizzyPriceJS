# DizzyPriceJS

Many years ago, NetHack 3.4.3 was finally superceded by a new release, NetHack 3.6. In the new version, the calculations for prices in shops were performed *slightly* differently, resulting in price identification calculators no longer functioning properly. At the time, I wrote [the original DizzyPrice](https://github.com/araech/dizzyprice) as a Python script, with a janky PHP front-end. I never finished the project, since it worked "well enough", and I stopped playing NetHack for a while so it lay abandoned. 

Now NetHack 3.7 is being actively developed, so I decided to rework my codebase into a new Javascript format to make for speedier changes and a more modular design, as well as implement features I always meant to include.

## Features

+ Item sets for NetHack 3.4.3, 3.6.*, and 3.7-dev
+ Calculation methods for 3.4.3 and 3.6+
+ Svelte responsive web interface that works on desktop and mobile
+ Vague mildly inaccurate probability calculations to help players get an idea of how likely a naturally generated object is to be a given item.
+ Description filter, so "dagg" or "buckled boot" filters results
+ Enchantment expansion, so you can tell how enchanted this random elven dagger is by price, or whether this shop's studded leather armor is actually +1.
+ Options for if the player is wearing a dunce cap or hawaiian shirt
+ Option for credit offers by broke shopkeepers.

## Notes

I'm going to be keeping an eye on the git commits for NetHack 3.7 to make any changes to objects or price calculation for upcoming versions, but in the meantime, you can use this live [over at my website](https://raech.net/dizzyjs/).

I hang out in the Roguelikes discord server in the #nethack channel with username **Aubses**, and in the Libera IRC #nethack channel as **aubses**. Feel free to send me feature requests or bug reports and I'll see what I can do. The TODO file has existing goals, so take a gander over there.