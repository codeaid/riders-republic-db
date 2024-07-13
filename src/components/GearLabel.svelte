<script lang="ts">
  import { onMount } from 'svelte';
  import { quadInOut } from 'svelte/easing';
  import { scale } from 'svelte/transition';

  export let visible = false;
  let mounted = false;
  onMount(() => (mounted = true));
</script>

{#if mounted && visible}
  <div
    class="flex items-center justify-center absolute top-0 left-0 h-full w-full blur-[1px] opacity-30"
  >
    <div
      class="masked px-6 py-2 text-brand text-[60px] uppercase leading-none font-extrabold inline-block bg-paper bg-neutral-600 bg-blend-multiply transition-all bg-no-repeat bg-[50%_80%] bg-[length:250%] -rotate-15"
      transition:scale={{ delay: 50, duration: 100, easing: quadInOut, opacity: 0, start: 0 }}
    >
      <slot />
    </div>
  </div>
{/if}

<style>
  .masked {
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 229 71'%3E%3Cpath d='M210.5 69.1c5.6 0 11.1.1 16.6.1.2 0 .7-.1.7-.1.3-.7.7-1.4.8-2.1.1-.6 0-1.2 0-1.7-.1-2.5-.2-4.9-.2-7.4 0-.6-.8-1.4-1-2-.2-.6-.5-1.2-.7-1.8 0-.1.1-.2.1-.4.2-.6 1.7-2.3 1.7-2.8 0-3.7-.6-6.3-.7-10-.2-5.8-.4-11.7-.6-17.5-.2-5.9-.4-11.7-.6-17.6 0-1.5-.1-3-.1-4.5h-10.6L202.4 1h-33.5c-2 0-4 .1-6 .2-.8 0-1.5.2-2.3.2-2-.1-4-.3-6-.3h-107c-2.4 0-4.9.7-7.3.8-1 0-2-.3-2.8-.5-1.1-.2-2.3-.3-3.5-.3H4c-1.2 0-1.6.3-1.6 1s.1 1.3.1 2v1.7c-.1 1.4-.3 2.8-.3 4.2.1 4.3.2 8.6.4 12.8.2 5.5 1.8 11.1 2 16.5.2 5.3-1.1 10.4-1 15.7.1 4.2.3 8.4.4 12.6 0 .3.2.5.8.6 2 .2 4 .7 6.1.7 2.8.1 5.6 0 8.5 0 1.1 0 2.3-.3 3.4-.2 2.7.1 5.4.4 8 .3h67.8c1.6 0 3.3 0 4.9-.1 1.6-.1 3.1-.2 4.7-.2.5 0 1 .1 1.4 0 .9-.2 1.9-.1 2.8 0 1.4 0 2.7.2 4.1.3h74c2.8 0 5.6.1 8.3-.3.7-.1 1.5 0 2.3 0 1 0 1.9.2 2.9.2 2.5.1 3.9.2 6.5.2z' fill='%23fff'/%3E%3C/svg%3E");
    mask-size: 100% 100%;
  }
</style>
