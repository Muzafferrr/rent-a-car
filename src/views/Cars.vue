<template>
  <div class="cardContainer">
    <CarCard :item="item" class="carCardClass" v-for="i in 12" :key="i"></CarCard>
  </div>
</template>

<script>
import CarCard from "@/components/CarCard";

export default {
  name: "Cars",
  data() {
    return {
      item:['Renault Clio 1.2', 'About AboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAbout car......', 130 ]
    }
  },
  components: {
    CarCard
  }
}
</script>

<style scoped>
.cardContainer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.carCardClass{
  margin: 20px 10px 20px 10px;
}
</style>