<script lang="ts">
  import { getSpecializationGearCounts } from '$lib/gear';
  import { ownedGearStore } from '$lib/store';
  import Tab from '@/components/Tabs/Tab.svelte';
  import Tabs from '@/components/Tabs.svelte';
  import type { CategoryEntity, MultiCategoryEntity } from '@/types/categories';
  import type { SpecializationEntity, SpecializationId } from '@/types/specializations';

  export let category: CategoryEntity<any, SpecializationEntity<any, any>[]>;
  export let parent: MultiCategoryEntity<any, CategoryEntity<any, any[]>[]> | undefined = undefined;
  export let specialization: SpecializationEntity<SpecializationId, any>;

  // Generate a map of specialization ids and the number of gear items owned in each of them
  $: counts = getSpecializationGearCounts($ownedGearStore, category.specializations);

  // Build base URL to use in each tab
  $: baseUrl = parent ? `/${parent.slug}/${category.slug}` : `/${category.slug}`;
</script>

<Tabs>
  {#each category.specializations as spec}
    {@const active = spec.id === specialization.id}
    {@const href = `${baseUrl}/${spec.slug}`}
    {@const [owned, total] = counts[spec.id]}

    <Tab {active} {href}>
      {spec.name}

      <span class="ml-0.5 text-lg" class:text-white={active} class:text-neutral-500={!active}
        >({owned}/{total})</span
      >
    </Tab>
  {/each}
</Tabs>

<div class="p-2 mb-3 text-base leading-6 font-medium cursor-default">
  {specialization.description}
</div>
