<script lang="ts">
  import { getSortedGear } from '$lib/gear';
  import { getGearStatInfoMap } from '$lib/stats';
  import GearGrid from '@/components/GearGrid.svelte';
  import GearItemAirWingsuit from '@/components/GearItem/GearItemAirWingsuit.svelte';
  import type { AirWingsuitSpecialization } from '@/types/specializations';

  export let specialization: AirWingsuitSpecialization;

  $: stats = getGearStatInfoMap(specialization.gear);
</script>

<GearGrid>
  {#each getSortedGear(specialization.gear) as gear}
    <GearItemAirWingsuit {gear} {specialization} {stats} />
  {/each}
</GearGrid>
