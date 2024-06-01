// Available gear categories
const categories = ['air', 'bike', 'bmx', 'snow'] as const;
export type Category = (typeof categories)[number];

// Available category disciplines
const disciplines = [
  'bike:race',
  'bike:tricks',
  'snow:race',
  'snow:tricks',
] as const;
export type Discipline = (typeof disciplines)[number];

// Available discipline specializations
const specializations = [
  'air:rocketwing',
  'air:wingsuit',
  'bike:race:downhill',
  'bike:race:road',
  'bike:tricks:freeride',
  'bike:tricks:slopestyle',
  'bmx:dirt',
  'bmx:park',
  'snow:race:deep-snow',
  'snow:race:downhill',
  'snow:tricks:off-track',
  'snow:tricks:snow-park',
] as const;
export type Specialization = (typeof specializations)[number];

// Category entity
export type CategoryEntity<
  TCategory extends Category = Category,
  TDisciplineEntities extends DisciplineEntity[] | undefined = undefined,
> = {
  category: TCategory;
  name: string;
  slug: string;
} & (TDisciplineEntities extends DisciplineEntity[]
  ? {
      disciplines: TDisciplineEntities;
    }
  : {
      color: string;
      icon: string;
      specializations: SpecializationEntity[];
    });

export type DisciplineEntity<TDiscipline extends Discipline = Discipline> = {
  color: string;
  discipline: TDiscipline;
  icon: string;
  name: string;
  slug: string;
  specializations: SpecializationEntity[];
};

export type SpecializationEntity = {
  code: string;
  description: string;
  name: string;
  slug: string;
  specialization: Specialization;
};

export type AirCategoryEntity = CategoryEntity<'air'>;

export type BikeCategoryEntity = CategoryEntity<
  'bike',
  [DisciplineEntity<'bike:race'>, DisciplineEntity<'bike:tricks'>]
>;

export type BmxCategoryEntity = CategoryEntity<'bmx'>;

export type SnowCategoryEntity = CategoryEntity<
  'snow',
  [DisciplineEntity<'snow:race'>, DisciplineEntity<'snow:tricks'>]
>;

export type AnyCategoryEntity =
  | AirCategoryEntity
  | BikeCategoryEntity
  | BmxCategoryEntity
  | SnowCategoryEntity;
