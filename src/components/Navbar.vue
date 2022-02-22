<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="navbarClass" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/"><b-icon-house-door></b-icon-house-door> Home</b-nav-item>
          <b-nav-item href="/rent">Rent</b-nav-item>
          <b-nav-item href="#">Agreement</b-nav-item>
          <b-nav-item href="#">Blog</b-nav-item>
          <b-nav-item href="#">About Us</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.navbarClass{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>