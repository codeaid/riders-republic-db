<script lang="ts">
  import { ownedGearStore, gearStoreToggleAsync } from '$lib/store';
  import GearLabel from '@/components/GearLabel.svelte';
  import GearScore from '@/components/GearScore.svelte';
  import type { GearEntity } from '@/types/gear';
  import type { SpecializationEntity } from '@/types/specializations';

  export let gear: GearEntity<any>;
  export let specialization: SpecializationEntity<any, any>;

  // Determine if the current item is owned (persisted to the store)
  $: isOwned = $ownedGearStore.has(gear.hash);

  // Event handler to mark gear as owned or not owned in the application store
  $: handlePersist = () => gearStoreToggleAsync(gear.hash);
</script>

<button
  class="bg-white relative rounded transition-all overflow-hidden shadow-gear-item cursor-pointer select-none drop-shadow-sm group hover:drop-shadow-lg outline-none focus-visible:outline-4 focus-visible:outline-brand focus-visible:drop-shadow-lg"
  tabindex="0"
  on:click={handlePersist}
>
  <div
    class="px-4 py-3 pt-7 flex items-center justify-between overflow-hidden transition-all relative after:absolute after:top-4 after:left-0 after:bottom-0 after:w-full after:bg-[length:150px]"
    class:after:opacity-40={!isOwned}
    class:after:bg-tiling={!isOwned}
    class:after:bg-tiling-brand={isOwned}
  >
    <div
      class="h-4 w-full absolute top-0 left-0 transition-colors opacity-80"
      class:bg-brand={isOwned}
      class:bg-brand-80={!isOwned}
    ></div>

    <div class="z-20 flex-1 relative overflow-hidden">
      <div class="text-sm font-semibold text-left uppercase">{gear.brand}</div>
      <div
        class="text-2xl text-left font-bold uppercase overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {gear.model}
        {#if gear.kind}
          <span class="ml-0.5 text-lg text-neutral-400 font-medium">{gear.kind}</span>
        {/if}
      </div>
    </div>

    <GearScore code={specialization.code} score={gear.score} />
  </div>

  <div class="relative">
    <div class="p-4 space-y-2.5">
      <slot />
    </div>

    <GearLabel visible={isOwned}>Owned</GearLabel>
  </div>
</button>
