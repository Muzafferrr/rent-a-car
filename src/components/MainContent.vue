<template>
  <div>
    <b-carousel
        :interval="4000"
        controls
        indicators
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
    <ReservationForm></ReservationForm>
  </div>
</template>

<script>
import ReservationForm from "@/components/ReservationForm";
export default {
  data() {
    return {
      sliding: null
    }
  },
  components:{
    ReservationForm
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>
<style>
.imgSlideCarousel {
  width: 100%;
  height: 870px;
}

.imgMirror {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>