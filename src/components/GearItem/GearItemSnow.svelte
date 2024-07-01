<script lang="ts">
  import GearItem from '@/components/GearItem.svelte';
  import GearStat from '@/components/GearStat.svelte';
  import type { SnowCategoryId } from '@/types/categories';
  import type { SnowGear } from '@/types/gear';
  import type { SpecializationEntity } from '@/types/specializations';
  import type { GearStatInfoMap, SnowGearStat } from '@/types/stats';

  export let category: SnowCategoryId;
  export let gear: SnowGear;
  export let specialization: SpecializationEntity<string, SnowGearStat>;
  export let stats: GearStatInfoMap<SnowGearStat>;
</script>

<GearItem {gear} {specialization}>
  <GearStat
    type="speed"
    value={gear.stats.speed}
    valueHighest={stats.speed.highest}
    valueSecond={stats.speed.secondHighest}
    valueLowest={stats.speed.lowest}
  />
  <GearStat
    type="air-rotation"
    value={gear.stats['air-rotation']}
    valueHighest={stats['air-rotation'].highest}
    valueSecond={stats['air-rotation'].secondHighest}
    valueLowest={stats['air-rotation'].lowest}
  />
  <GearStat
    type={category === 'snow:race' ? 'deep-snow-race' : 'deep-snow-tricks'}
    value={gear.stats['deep-snow']}
    valueHighest={stats['deep-snow'].highest}
    valueSecond={stats['deep-snow'].secondHighest}
    valueLowest={stats['deep-snow'].lowest}
  />
  <GearStat
    type="absorption"
    value={gear.stats.absorption}
    valueHighest={stats.absorption.highest}
    valueSecond={stats.absorption.secondHighest}
    valueLowest={stats.absorption.lowest}
  />
</GearItem>
