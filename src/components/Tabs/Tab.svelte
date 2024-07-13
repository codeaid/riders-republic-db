<script lang="ts">
  export let active = false;
  export let href: string;
</script>

<li
  class="text-xl font-medium uppercase leading-5 flex-1 md:flex-none border border-b-0 rounded-tl rounded-tr overflow-hidden"
  class:border-brand={active}
  class:border-neutral-200={!active}
  role="tab"
>
  <a
    class="px-4 flex items-baseline justify-center leading-11 cursor-pointer md:min-w-40 text-center focus-visible:outline-none focus-visible:underline"
    class:bg-brand={active}
    class:shadow-lg={active}
    class:z-[1]={active}
    class:bg-white={!active}
    class:bg-opacity-80={!active}
    class:z-0={!active}
    {href}
    tabindex="0"
  >
    <slot />
  </a>
</li>
