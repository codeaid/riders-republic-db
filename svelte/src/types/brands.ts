type AirBrand = 'victory';

type BikeBrand =
  | 'bmc'
  | 'canyon'
  | 'commencal'
  | 'cube'
  | 'cult'
  | 'devinci'
  | 'evil-bikes'
  | 'federal'
  | 'gt'
  | 'kink'
  | 'kona'
  | 'santa-cruz'
  | 'specialized'
  | 'subrosa'
  | 'tallorder'
  | 'trek'
  | 'wethepeople'
  | 'yt';

type GenericBrand = 'rr';

type SnowBrand =
  | 'armada'
  | 'atomic'
  | 'burton'
  | 'faction'
  | 'kemper'
  | 'lobster'
  | 'nidecker'
  | 'nitro'
  | 'prada'
  | 'rossignol'
  | 'salomon'
  | 'yes';

export type Brand = AirBrand | BikeBrand | GenericBrand | SnowBrand;
