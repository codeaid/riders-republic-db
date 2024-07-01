<script lang="ts">
  import { getSortedGear } from '$lib/gear';
  import { getGearStatInfoMap } from '$lib/stats';
  import GearGrid from '@/components/GearGrid.svelte';
  import GearItemBike from '@/components/GearItem/GearItemBike.svelte';
  import type { BikeCategory, BmxCategory } from '@/types/categories';
  import type { GetCategorySpecializations } from '@/types/utils';

  export let specialization: GetCategorySpecializations<BikeCategory | BmxCategory>;

  $: stats = getGearStatInfoMap(specialization.gear);
</script>

<GearGrid>
  {#each getSortedGear(specialization.gear) as gear}
    <GearItemBike {gear} {specialization} {stats} />
  {/each}
</GearGrid>
