<template>
  <main class="bg-gray-800 pb-6">
    <div
      class="flex justify-center items-center gap-x-3 pt-7 pb-3 flex-wrap sm:flex-row flex-col"
    >
      <nuxt-link to="/" class=" ">
        <button
          class="flex flex-row justify-center items-center gap-x-1 bg-blue-700 px-6 py-2 outline-none focus:ring-2 ring-red-500 rounded-lg text-white font-mono text-2xl"
        >
          <span>Home</span>
          <font-awesome-icon :icon="['fas', 'house-user']" class="h-7 w-8 text-white" />
        </button>
      </nuxt-link>
      <nuxt-link to="/AddLaptop" class=" ">
        <button
          class="flex flex-row justify-center items-center gap-x-1 bg-blue-700 px-6 py-2 outline-none focus:ring-2 ring-red-500 rounded-lg text-white font-mono text-2xl"
        >
          <span>Add</span>
          <font-awesome-icon :icon="['fas', 'plus']" class="h-7 w-8 text-white" />
        </button>
      </nuxt-link>
      <nuxt-link to="/_id/EditLaptop" class=" ">
        <button
          class="flex flex-row justify-center items-center gap-x-1 bg-blue-700 px-6 py-2 outline-none focus:ring-2 ring-red-500 rounded-lg text-white font-mono text-2xl"
        >
          <span>Edit</span>
          <font-awesome-icon
            :icon="['fas', 'pen-to-square']"
            class="h-7 w-8 text-white"
          />
        </button>
      </nuxt-link>
    </div>
  </main>
</template>

<script>
export default {
  components: {},
};
</script>

<style></style>
