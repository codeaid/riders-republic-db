<script lang="ts">
  import GearStatIcon from './GearStat/GearStatIcon.svelte';
  import GearStatProgress from './GearStat/GearStatProgress.svelte';
  import { getGearStatName } from '$lib/stats';
  import type { GearStatType } from '@/types/stats';

  export let type: GearStatType;
  export let value: number;
  export let valueHighest: number;
  export let valueSecond: number;
  export let valueLowest: number;

  $: isHighest = value === valueHighest;
  $: isLowest = value === valueLowest;
  $: valueBonus = isHighest ? value - valueSecond : 0;
  $: percBonus = (valueBonus / value) * 100;

  $: statName = getGearStatName(type);
</script>

<div class="flex">
  <GearStatIcon class="mr-3" {type} />

  <div class="py-px flex flex-col flex-1 justify-between">
    <div class="mb-1.5 text-md flex justify-items-stretch justify-between leading-none">
      <div class="font-bold uppercase opacity-80">{statName}</div>
      <div
        class="font-bold transition-colors"
        class:text-brand={isHighest}
        class:text-red={isLowest}
      >
        {value}
      </div>
    </div>

    {#key type}
      <GearStatProgress {percBonus} {value} />
    {/key}
  </div>
</div>
