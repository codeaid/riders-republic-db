<script lang="ts">
  import { base } from '$app/paths';
</script>

<a href="{base}/">
  <h1 class="p-2.5 text-xl text-white font-medium overflow-hidden text-ellipsis whitespace-nowrap">
    <slot />
  </h1>
</a>
