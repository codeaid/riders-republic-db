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
  | 'marin'
  | 'santa-cruz'
  | 'specialized'
  | 'subrosa'
  | 'tallorder'
  | 'trek'
  | 'wethepeople'
  | 'yt';

type GenericBrand = 'rr' | 'shackdaddys';

type SkateboardBrand = 'blind-spot' | 'mini-logo' | 'pizza' | 'powell-peralta';

type SnowBrand =
  | 'armada'
  | 'atomic'
  | 'burton'
  | 'faction'
  | 'gilson'
  | 'kemper'
  | 'lobster'
  | 'nidecker'
  | 'nitro'
  | 'prada'
  | 'rossignol'
  | 'salomon'
  | 'yes';

export type Brand = AirBrand | BikeBrand | GenericBrand | SkateboardBrand | SnowBrand;
