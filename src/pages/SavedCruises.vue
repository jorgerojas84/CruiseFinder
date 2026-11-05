<template>
  <main class="min-h-screen bg-slate-950 text-white">
    <div class="mx-auto max-w-7xl px-6 py-10">
      <h1 class="text-4xl font-bold text-cyan-400">Saved Cruises</h1>

      <p class="mt-4 text-lg text-gray-300">
        Your saved cruises will appear here.
      </p>
      <div class="mt-6 rounded-xl bg-black/60 p-6 text-white text-center">
        <img
          src="/images/caribbean.jpg"
          alt="Caribbean Cruise"
          class="mx-auto w-full max-w-lg rounded-xl"
        />
        <h2 class="mt-4 text-2xl font-bold text-cyan-400">Caribbean Cruise</h2>
        <p class="mt-2">Destination: Caribbean</p>
        <p>Duration: 5 Nights</p>
        <p>Departure Port: Miami, FL</p>
      </div>
      <router
        link
        to="/details"
        class="mt-4 block w-fit mx-auto rounded-lg bg-purple-600 px-6 py-3 text-white hover:bg-purple-500"
      >
        View Details
      </router>
      <button
        class="mt-4 block w-fit mx-auto rounded-lg bg-gray-600 px-6 py-3 text-white hover:bg-purple-500"
      >
        Back to Search
      </button>
    </div>
  </main>
</template>
