<template>
  <main class="min-h-screen search-background text-white">
    <div class="mx-auto max-w-7xl px-6 py-10 text-center">
      <div class="rounded-xl bg-black/60 p-6">
        <h1 class="text-4xl font-bold text-cyan-400">Cruise Details</h1>
        <img
          src="/images/caribbean.jpg"
          alt="Caribbean Cruise"
          class="mx-auto mt-6 w-full max-w-lg rounded-xl"
        />
        <h2 class="mt-4 text-2xl font-bold">Caribbean Cruise</h2>
        <p class="mt-2">Destination: Caribbean</p>
        <p>Duration: 5 Nights</p>
        <p>Departure Port: Miami, FL</p>
        <button
          class="mt-4 rounded-lg bg-purple-600 px-6 py-3 text-white hover:bg-purple-500"
        >
          Save Cruise
        </button>
        <a
          href="https://www.royalcaribbean.com"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 ml-3 inline-block rounded-lg bg-cyan-400 px-6 py-3 text-black hover:bg-cyan-300"
        >
          Official Website
        </a>
      </div>
      <RouterLink
        to="/"
        class="mt-4 block w-fit mx-auto rounded-lg bg-gray-600 px-6 py-3 text-white hover:bg-purple-500"
      >
        Back to Search
      </RouterLink>
    </div>
  </main>
</template>
