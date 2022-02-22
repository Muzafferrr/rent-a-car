<template>
<div class="footer">
  <div class="linkGroup">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
  <div class="linkGroup">
    <a href="#">Link 4</a>
    <a href="#">Link 5</a>
    <a href="#">Link 6</a>
  </div>
  <div class="linkGroup">
    <a href="#">Link 7</a>
    <a href="#">Link 8</a>
    <a href="#">Link 9</a>
  </div>
</div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #555555;
  width: 100%;
  height: 200px;
}
.linkGroup{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: antiquewhite;
}
</style>