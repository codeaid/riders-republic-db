import airRocketwing from './air/roketwing';
import airWingsuit from './air/wingsuit';
import bikesRaceDownhill from './bikes/race-downhill';
import bikesRaceRoad from './bikes/race-road';
import bikesTricksFreeride from './bikes/tricks-freeride';
import bikesTricksSlopestyle from './bikes/tricks-slopestyle';
import snowRaceDeepSnow from './snow/race-deep-snow';
import snowRaceDownhill from './snow/race-downhill';
import snowTricksOffTrack from './snow/tricks-off-track';
import snowTricksSnowpark from './snow/tricks-snowpark';

export const gear = [
  ...airRocketwing,
  ...airWingsuit,
  ...bikesRaceDownhill,
  ...bikesRaceRoad,
  ...bikesTricksFreeride,
  ...bikesTricksSlopestyle,
  ...snowRaceDeepSnow,
  ...snowRaceDownhill,
  ...snowTricksOffTrack,
  ...snowTricksSnowpark,
];
