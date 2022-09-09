<template>
  <main class="bg-gray-900 py-5">
    <div class="bg-gray-700 p-3 pt-6 max-w-3xl mx-auto rounded-md">
      <h2
        class="flex justify-center items-center gap-x-2 p-4 text-xl text-white uppercase font-mono"
      >
        Add Laptop
      </h2>
      <form
        action="#"
        @submit.prevent="addLaptop"
        class="flex justify-center items-center gap-y-2 flex-col max-w-4xl mx-auto h-auto"
      >
        <input
          type="text"
          class="outline-none border border-blue-600 py-2 w-3/4 rounded-md p-2"
          v-model="LaptopName"
          placeholder="Enter the Name of the Laptop:"
        />
        <input
          type="text"
          class="outline-none border border-blue-600 py-2 w-3/4 rounded-md p-2"
          v-model="CompanyName"
          placeholder="Enter the Name of the Company:"
        />
        <input
          type="submit"
          value="Add Laptop"
          class="w-32 h-auto py-3 rounded-lg focus:ring-2 ring-black p-1 bg-blue-800 text-white font-mono"
        />
      </form>
    </div>
  </main>
</template>

<script>
import colRefLaptops from "../firebase";
import { addDoc } from "@firebase/firestore";
export default {
  data() {
    return {
      LaptopName: null,
      CompanyName: null,
    };
  },
  methods: {
    async addLaptop() {
      let addedLaptop = addDoc(colRefLaptops, this.$data);
      console.log(addedLaptop);
      alert("document added successfully in a database!");
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
