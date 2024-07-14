<script lang="ts">
  import extend from 'just-extend';
  import { onMount } from 'svelte';
  import { MetaTags } from 'svelte-meta-tags';
  import type { LayoutData } from './$types';
  import { page } from '$app/stores';
  import { gearStoreSubscribe, ownedGearStoreReady } from '$lib/store';
  import AppLogo from '@/components/AppLogo.svelte';
  import AppTitle from '@/components/AppTitle.svelte';
  import Header from '@/components/Header.svelte';
  import LoadingOverlay from '@/components/LoadingOverlay.svelte';
  import Page from '@/components/Page.svelte';
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

      <Page>
        <slot />
      </Page>
    </div>
  </div>
{:else}
  <LoadingOverlay />
{/if}
