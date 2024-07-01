<script lang="ts">
  export let colorClass: string;
  export let iconClass: string;
</script>

<div class="rounded-sm overflow-hidden border border-white group-hover:drop-shadow-md {colorClass}">
  <div class="h-8 w-8 bg-center bg-no-repeat bg-cover {iconClass}"></div>
</div>
