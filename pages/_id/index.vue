<template>
  <main class="bg-gray-700 p-3">
    <h2
      class="flex justify-center items-center gap-x-2 p-4 text-xl text-white uppercase font-mono"
    >
      All Laptops
    </h2>
    <div
      class="flex justify-center items-center gap-x-2"
      v-for="lap in allLaptops"
      :key="lap.id"
    >
      <div
        class="flex justify-center items-center sm:flex-row flex-col flex-wrap bg-white rounded-lg border border-gray-200 w-96 text-gray-900"
      >
        <a
          href="#"
          aria-current="true"
          class="block px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-blue-600 text-white cursor-pointer"
        >
          {{ lap.LaptopName }}
        </a>
      </div>
      <div
        class="flex justify-center items-center sm:flex-row flex-col flex-wrap bg-white rounded-lg border border-gray-200 w-96 text-gray-900"
      >
        <a
          href="#"
          aria-current="true"
          class="block px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-blue-600 text-white cursor-pointer"
        >
          {{ lap.CompanyName }}
        </a>
      </div>
      <router-link :to="{ path: `/_id/${lap.id}` }">
        <button
          class="flex flex-row justify-center items-center gap-x-1 bg-blue-700 px-4 py-1 outline-none focus:ring-2 ring-red-500 rounded-lg text-white font-mono text-xl"
        >
          <span>Edit</span>
          <font-awesome-icon
            :icon="['fas', 'pen-to-square']"
            class="h-7 w-8 text-white"
          />
        </button>
      </router-link>
      <button
        class="flex flex-row justify-center items-center gap-x-1 bg-blue-700 px-4 py-1 outline-none focus:ring-2 ring-red-500 rounded-lg text-white font-mono text-xl"
      >
        <span>Delete</span>
        <font-awesome-icon :icon="['fas', 'trash']" class="h-7 w-8 text-white" />
      </button>
    </div>
  </main>
  <!--  
    Font awesome guide
    <div class=" flex justify-center items-center gap-3">
      <p>Icons</p>
      <font-awesome-icon :icon="['fab', 'linkedin']" />
      <font-awesome-icon :icon="['fab', 'github']" />
      <font-awesome-icon :icon="['fab', 'facebook']" />
      <font-awesome-icon :icon="['fas', 'coffee']" />
    </div> -->
</template>

<script>
import colRefLaptops from "../../firebase";
import { getDocs, doc } from "@firebase/firestore";
export default {
  name: "IndexPage",
  data() {
    return {
      allLaptops: [],
    };
  },
  components: {},
  methods: {
    async fetchAllLaptops(context) {
      let fetchAllLaps = await getDocs(colRefLaptops);
      let allLaptops = [];
      fetchAllLaps.forEach((lap) => {
        let singleLap = lap.data();
        singleLap.id = lap.id;
        allLaptops.push(singleLap);
        this.allLaptops = allLaptops;
        console.log(allLaptops);
      });
      this.allLaptops.find((el) => el.id == context.params.id);
    },
  },
  created() {
    this.fetchAllLaptops();
  },
};
</script>
