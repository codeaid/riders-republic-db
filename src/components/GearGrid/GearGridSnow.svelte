<script lang="ts">
  import { getSortedGear } from '$lib/gear';
  import { getGearStatInfoMap } from '$lib/stats';
  import GearGrid from '@/components/GearGrid.svelte';
  import GearItemSnow from '@/components/GearItem/GearItemSnow.svelte';
  import type { SnowCategory, SnowRaceCategory, SnowTricksCategory } from '@/types/categories';
  import type { GetCategorySpecializations } from '@/types/utils';

  export let category: SnowRaceCategory | SnowTricksCategory;
  export let specialization: GetCategorySpecializations<SnowCategory>;

  $: stats = getGearStatInfoMap(specialization.gear);
</script>

<GearGrid>
  {#each getSortedGear(specialization.gear) as gear}
    <GearItemSnow category={category.id} {gear} {specialization} {stats} />
  {/each}
</GearGrid>
