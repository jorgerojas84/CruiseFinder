<template>
  <div class="min-h-screen text-white">
    <nav class="flex gap-6 bg-slate-900 px-6 py-4">
      <RouterLink to="/" class="text-cyan-400 hover:text-white">
        Home
      </RouterLink>

      <RouterLink to="/search" class="text-cyan-400 hover:text-white">
        Search Cruises
      </RouterLink>

      <RouterLink to="/saved" class="text-cyan-400 hover:text-white">
        Saved Cruises
      </RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
