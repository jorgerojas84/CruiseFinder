<template>
  <main class="min-h-screen search-background text-white">
    <div class="mx-auto max-w-7xl px-6 py-10 text-center">
      <div class="bg-black/60 rounded-xl p-6 inline-block">
        <h1 class="text-4xl font-bold text-cyan-400">Search Cruises</h1>

        <p class="mt-4 text-lg text-gray-300">
          Browse the Cruises and find one that will work for you and your family
          vacation!
        </p>
        <div class="mt-6">
          <input
            type="text"
            placeholder="Search cruises by destination"
            class="w-full max-w-lg rounded-lg p-3 text-black bg-white"
          />
          <select
            class="mt-4 w-full max-w-lg rounded-lg bg-purple-600 p-3 text-white"
          >
            <option value="">Select Destination</option>
            <option value="caribbean">Caribbean</option>
            <option value="bahamas">Bahamas</option>
            <option value="mexico">Mexico</option>
            <option value="puertorico">Puerto Rico</option>
          </select>
          <p class="mt-4 text-white">
            No Cruises were found for this destination. Please try one from the
            dropdown options.
          </p>
          <select
            class="mt-4 w-full max-w-lg rounded-lg bg-cyan-400 p-3 text-black"
          >
            <option value="">Select Departure Port</option>
            <option value="miami">Miami, FL</option>
            <option value="galveston">Galveston, TX</option>
            <option value="portcanaveral">Port Canaveral, FL</option>
            <option value="sanjuan">San Juan, PR</option>
          </select>
          <div class="mt-6 rounded-xl bg-black/60 p-6 text-white">
            <img
              src="/images/caribbean.jpg"
              alt="Caribbean Cruise"
              class="w-full max-w-lg mx-auto rounded-lg"
            />
            <h2 class="text-2xl font-bold text-cyan-400">Caribbean Cruise</h2>
            <p class="mt-2">Destination: Caribbean</p>
            <p>Duration: 5 Nights</p>
            <p>Departure Port: Miami, FL</p>
            <RouterLink
              to="/details"
              class="mt-4 inline-block rounded-lg bg-purple-600 px-6 py-3 text-white hover:bg-purple-500"
            >
              View Details
            </RouterLink>
            <a
              href="https://www.royalcaribbean.com"
              target="blank"
              rel="noopener noreferrer"
              class="mt-4 ml-3 inline-block rounded-lg bg-cyan-400 px-6 py-3 text-black hover:bg-cyan-300"
            >
              Official Website
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
