<script lang="ts">
  import GearItem from '@/components/GearItem.svelte';
  import GearStat from '@/components/GearStat.svelte';
  import type { SkateboardGear } from '@/types/gear';
  import type { SpecializationEntity } from '@/types/specializations';
  import type { GearStatInfoMap, SkateboardGearStat } from '@/types/stats';

  export let gear: SkateboardGear;
  export let specialization: SpecializationEntity<string, SkateboardGearStat>;
  export let stats: GearStatInfoMap<SkateboardGearStat>;
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
    type="board-tricks"
    value={gear.stats['board-tricks']}
    valueHighest={stats['board-tricks'].highest}
    valueSecond={stats['board-tricks'].secondHighest}
    valueLowest={stats['board-tricks'].lowest}
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
