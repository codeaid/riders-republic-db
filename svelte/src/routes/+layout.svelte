<script lang="ts">
  import { onMount } from 'svelte';
  import type { LayoutData } from './$types';
  import { gearStoreSubscribe, ownedGearStoreReady } from '$lib/store';
  import AppLogo from '@/components/AppLogo.svelte';
  import AppTitle from '@/components/AppTitle.svelte';
  import Footer from '@/components/Footer.svelte';
  import Header from '@/components/Header.svelte';
  import LoadingOverlay from '@/components/LoadingOverlay.svelte';
  import Sidebar from '@/components/Sidebar.svelte';
  import '@/styles/core.css';
  import '@/styles/fonts.css';

  export let data: LayoutData;

  onMount(() => gearStoreSubscribe());
</script>

{#if $ownedGearStoreReady}
  <div class="min-h-screen flex flex-col">
    <Header>
      <AppLogo />
      <AppTitle>Riders Republic: Elite Gear Database</AppTitle>
    </Header>

    <div class="flex flex-1 flex-grow relative">
      <Sidebar navigationEntries={data.navigationEntries} />

      <main class="flex flex-col flex-1">
        <div class="p-4 pb-20 flex flex-1">
          <div class="max-w-screen-xl mx-auto flex-1">
            <slot />
          </div>
        </div>

        <Footer />
      </main>
    </div>
  </div>
{:else}
  <LoadingOverlay />
{/if}
