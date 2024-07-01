<script lang="ts">
  import GearItem from '@/components/GearItem.svelte';
  import GearStat from '@/components/GearStat.svelte';
  import type { BikeGear } from '@/types/gear';
  import type { SpecializationEntity } from '@/types/specializations';
  import type { BikeGearStat, GearStatInfoMap } from '@/types/stats';

  export let gear: BikeGear;
  export let specialization: SpecializationEntity<string, BikeGearStat>;
  export let stats: GearStatInfoMap<BikeGearStat>;
</script>

<GearItem {gear} {specialization}>
  <GearStat
    type="sprint"
    value={gear.stats.sprint}
    valueHighest={stats.sprint.highest}
    valueSecond={stats.sprint.secondHighest}
    valueLowest={stats.sprint.lowest}
  />
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
    type="grip"
    value={gear.stats.grip}
    valueHighest={stats.grip.highest}
    valueSecond={stats.grip.secondHighest}
    valueLowest={stats.grip.lowest}
  />
  <GearStat
    type="absorption"
    value={gear.stats.absorption}
    valueHighest={stats.absorption.highest}
    valueSecond={stats.absorption.secondHighest}
    valueLowest={stats.absorption.lowest}
  />
</GearItem>
