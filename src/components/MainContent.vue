<template>
  <div>
    <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template #img>
          <img
              class="imgSlideCarousel imgMirror"
              src="https://m.atcdn.co.uk/ect/media/w1920/brand-store/volkswagen/tiguan/hero.jpg"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
              class="imgSlideCarousel"
              src="https://electrek.co/wp-content/uploads/sites/3/2019/12/SX3Semi-Family-e1534526883239.jpg?quality=82&strip=all&w=1600"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
              class="imgSlideCarousel"
              src="https://az749841.vo.msecnd.net/sitesencom/alv1/731e092e-cc42-4fab-9a11-22fb3cac036e/skoda-scala-m20-gallery-01.bf0af9547dc8f97dd082b0f964ef8749.fit-1450x760.jpg"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
              class="imgSlideCarousel imgMirror"
              src="https://binekarac.vw.com.tr/content/dam/onehub_pkw/importers/tr/modeller/passat-alltrack/dis-tasarim/1920x1080_passat_alltrack_galeri_dis_beyaz.jpg"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
    <b-form class="formReservation">
      <label class="mr-sm-2">Pick Location</label>
      <b-form-select v-model="pickLocationValue" :options="pickLocation" size="sm" class="mt-1"></b-form-select>
      <label class="mr-sm-2 mt-2">Return Location</label>
      <b-form-select v-model="returnLocationValue" :options="returnLocation" size="sm" class="mt-1"></b-form-select>
      <label class="mt-3">Choose a pick date</label>
      <div class="timeClass">
        <b-form-datepicker v-model="pickDate" class="mr-2"></b-form-datepicker>
        <b-form-timepicker v-model="pickTime"></b-form-timepicker>
      </div>

      <label class="mt-3">Choose a return date</label>
      <div class="timeClass">
        <b-form-datepicker v-model="returnDate" class="mr-2"></b-form-datepicker>
        <b-form-timepicker v-model="returnTime"></b-form-timepicker>
      </div>
      <b-button class="mt-3" block variant="outline-dark" @click="goToRent()">Search</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliding: null,
      pickLocation:[
        'İstanbul','İzmir','Antalya','Eskişehir'
      ],
      returnLocation:[
        'İstanbul','İzmir','Antalya','Eskişehir'
      ],
      pickLocationValue:'İstanbul',
      returnLocationValue:'İstanbul',
      pickDate:'',
      pickTime:'',
      returnDate:'',
      returnTime:'',
      userSelect:[]
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
    goToRent(){
      this.userSelect.push(this.pickLocationValue, this.returnLocationValue,
          this.pickDate, this.pickTime, this.returnDate, this.returnTime);
      const userSelect = this.userSelect;
      this.$router.push({name:'Rent', params:{userData: userSelect}});
    }
  }
}
</script>
<style>
.imgSlideCarousel {
  width: 100%;
  height: 870px;
}
.formReservation{
  position: absolute;
  min-height: 360px;
  max-height: 420px;
  background-color: rgba(255,255,255,0.7);
  padding: 15px;
  margin-top: -700px;
  margin-left: 200px;
  z-index: 999;
}
.timeClass{
  display: flex;
  flex-direction: row;
}
.imgMirror{
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>