<template>
  <main class="min-h-screen text-white">
    <div class="max-w-7xl mx-auto px-6 py-10 text-center">
      <div class="bg-black/60 rounded-xl p-6 inline-block">
        <h1 class="text-4xl font-bold text-cyan-400">Cruise Finder</h1>

        <p class="mt-4 text-lg text-gray-300">
          Looking for a cruise? Find one that fits your next vacation!
        </p>
      </div>
      <RouterLink
        to="/search"
        class="mt-8 mx-auto flex h-40 w-80 items-center justify-center rounded-full bg-cyan-400 px-8 text-center text-xl font-bold text-black shadow-[0_0_35px_10px_rgba(34,211,238,0.7)]"
      >
        Click here for your next Dream Vacation!
      </RouterLink>
    </div>
  </main>
</template>
