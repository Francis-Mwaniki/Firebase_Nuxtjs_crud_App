<template>
  <main class="bg-gray-900 py-5">
    <div class="bg-gray-700 p-3 pt-6 max-w-3xl mx-auto rounded-md">
      <h2
        class="flex justify-center items-center gap-x-2 p-4 text-xl text-white uppercase font-mono"
      >
        Edit Laptop
      </h2>
      <form
        action="#"
        @submit.stop="updateLap"
        class="flex justify-center items-center gap-y-2 flex-col max-w-4xl mx-auto h-auto"
      >
        <input
          type="text"
          class="outline-none border border-blue-600 py-2 w-3/4 rounded-md p-2"
          v-model="LaptopInfo.LaptopName"
          placeholder="Enter the Name of the Laptop:"
        />
        <input
          type="text"
          class="outline-none border border-blue-600 py-2 w-3/4 rounded-md p-2"
          v-model="LaptopInfo.CompanyName"
          placeholder="Enter the Name of the Company:"
        />
        <input
          type="submit"
          @click="callLater"
          value="Update Laptop"
          class="w-36 h-auto py-3 rounded-lg focus:ring-2 ring-black p-1 bg-blue-800 text-white font-mono"
        />
      </form>
    </div>
  </main>
</template>
<script>
import { getDoc, doc, setDoc } from "@firebase/firestore";
import colRefLaptops from "../../firebase";
export default {
  data() {
    return {
      lapid: null,
      selectedCity: {},
      docRef: null,
      LaptopInfo: {
        LaptopName: null,
        CompanyName: null,
      },
    };
  },
  methods: {
    async getLaps() {
      let lapRef = doc(colRefLaptops, this.lapid);
      this.docRef = lapRef;
      let lap = await getDoc(this.docRef);
      let lapsData = lap.data();
      this.LaptopInfo.LaptopName = lapsData.LaptopName;
      this.LaptopInfo.CompanyName = lapsData.CompanyName;
      console.log(lap.data());
    },
    async updateLap() {
      await setDoc(this.docRef, this.LaptopInfo);
      alert(
        `${this.LaptopInfo.name} with id of ${this.lapid} has been updated successfully`
      );
      this.$router.push("/");
    },
    callLater() {
      alert("coming soon!");
    },
  },
  created() {
    let lapid = this.$route.params.lapid;
    this.lapid = lapid;
    this.getLaps();
  },
};
</script>

<style></style>
