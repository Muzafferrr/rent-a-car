<template>
  <div class="cardContainer">
    <CarCard :item="data.data[index]"
             class="carCardClass"
             v-for="(item,index) in data.data.length"
             :key="index">
    </CarCard>
  </div>
</template>

<script>
import CarCard from "@/components/CarCard";
import data from "../assets/data.json"

export default {
  name: "Cars",
  data() {
    return {
      item: ['Renault Clio 1.2', 'About car......', 130],
      data: data
    }
  },
  props: {
    userData: Array
  },
  components: {
    CarCard
  }
}
</script>

<style scoped>
.cardContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.carCardClass {
  margin: 20px 10px 20px 10px;
}
</style>