<script lang="ts">
  import GearItem from '@/components/GearItem.svelte';
  import GearStat from '@/components/GearStat.svelte';
  import type { AirRocketwingGear } from '@/types/gear';
  import type { SpecializationEntity } from '@/types/specializations';
  import type { AirRocketwingGearStat, GearStatInfoMap } from '@/types/stats';

  export let gear: AirRocketwingGear;
  export let specialization: SpecializationEntity<string, AirRocketwingGearStat>;
  export let stats: GearStatInfoMap<AirRocketwingGearStat>;
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
    type="mobility"
    value={gear.stats.mobility}
    valueHighest={stats.mobility.highest}
    valueSecond={stats.mobility.secondHighest}
    valueLowest={stats.mobility.lowest}
  />
  <GearStat
    type="engine-boost"
    value={gear.stats['engine-boost']}
    valueHighest={stats['engine-boost'].highest}
    valueSecond={stats['engine-boost'].secondHighest}
    valueLowest={stats['engine-boost'].lowest}
  />
</GearItem>
