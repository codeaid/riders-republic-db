<script lang="ts">
  import extend from 'just-extend';
  import { onMount } from 'svelte';
  import { MetaTags } from 'svelte-meta-tags';
  import type { LayoutData } from './$types';
  import { page } from '$app/stores';
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

  // Initialise loading gear data from the database on application load
  onMount(() => gearStoreSubscribe());

  // Enable extending meta tags through child pages
  $: metaTags = extend(true, {}, data.baseMetaTags, $page.data.pageMetaTags);
</script>

<MetaTags {...metaTags} />

{#if $ownedGearStoreReady}
  <div class="min-h-screen flex flex-col">
    <Header>
      <AppLogo />
      <AppTitle>Riders Republic: Elite Gear Database</AppTitle>
    </Header>

    <div class="flex flex-1 flex-grow relative">
      <Sidebar navigationEntries={data.navigationEntries} />

      <main class="flex flex-col flex-1">
        <div class="p-3 pb-6 md:p-6 md:pb-12 flex flex-1">
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
