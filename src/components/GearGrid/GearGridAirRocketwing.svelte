<script lang="ts">
  import { getSortedGear } from '$lib/gear';
  import { getGearStatInfoMap } from '$lib/stats';
  import GearGrid from '@/components/GearGrid.svelte';
  import GearItemAirRocketwing from '@/components/GearItem/GearItemAirRocketwing.svelte';
  import type { AirRocketwingSpecialization } from '@/types/specializations';

  export let specialization: AirRocketwingSpecialization;

  $: stats = getGearStatInfoMap(specialization.gear);
</script>

<GearGrid>
  {#each getSortedGear(specialization.gear) as gear}
    <GearItemAirRocketwing {gear} {specialization} {stats} />
  {/each}
</GearGrid>
