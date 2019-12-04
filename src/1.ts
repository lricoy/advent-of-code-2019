import * as R from "ramda";

const inputs = [
  120183,
  105169,
  58942,
  105283,
  100729,
  57778,
  59601,
  86011,
  148930,
  76533,
  132625,
  79105,
  66334,
  87695,
  148836,
  129384,
  71225,
  96010,
  67221,
  139037,
  90010,
  72531,
  145543,
  137983,
  63687,
  131307,
  62602,
  129223,
  76717,
  98896,
  58484,
  127996,
  128840,
  60723,
  149932,
  141443,
  96997,
  96196,
  104670,
  104055,
  129552,
  54426,
  104507,
  80241,
  91570,
  140053,
  106108,
  119792,
  133703,
  66387,
  129594,
  144794,
  91962,
  134610,
  97937,
  111599,
  77667,
  133644,
  89207,
  121935,
  80434,
  147413,
  94091,
  110244,
  59255,
  53071,
  133121,
  55972,
  122369,
  95605,
  142303,
  120242,
  113412,
  107519,
  88325,
  85243,
  104752,
  85418,
  101515,
  145236,
  107302,
  142970,
  87763,
  112798,
  105469,
  88303,
  91668,
  129187,
  115297,
  56238,
  69358,
  109148,
  99943,
  96480,
  98344,
  77777,
  98973,
  138814,
  106194,
  128739
];
const reverseMap = R.flip(R.map);

const fuelForMass = R.pipe(
  R.divide(R.__, 3),
  Math.floor,
  R.subtract(R.__, 2)
);

const pointFreeSeed = R.ifElse(
  R.lte(0),
  R.compose(
    reverseMap(R.pair(R.identity, fuelForMass)),
    R.unary(R.applyTo)
  ),
  R.F
) 
const seed = (n: number) => (n <= 0 
  ? false 
  : ([n, fuelForMass(n)] as [number, number]));

R.transduce(
  R.map(R.compose(R.sum, R.unfold(seed), fuelForMass)),
  R.add,
  0,
  inputs
); // ?. $

R.transduce(
  R.map(R.compose(R.sum, R.unfold(pointFreeSeed), fuelForMass)),
  R.add,
  0,
  inputs
); // ?. $
