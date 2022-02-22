<template>
  <b-form class="formReservation">
    <label>Pick Location</label>
    <b-form-select v-model="pickLocationValue"
                   :options="pickLocation"
                   class="mt-1"></b-form-select>

    <label class="mt-3">Return Location</label>
    <b-form-select v-model="returnLocationValue"
                   :options="returnLocation"
                   class="mt-1"></b-form-select>

    <label class="mt-3">Pick Date</label>
    <div class="timeClass">
      <b-form-datepicker v-model="pickDate"
                         class="mr-2"></b-form-datepicker>
      <b-form-timepicker v-model="pickTime"></b-form-timepicker>
    </div>

    <label class="mt-3">Return Date</label>
    <div class="timeClass">
      <b-form-datepicker v-model="returnDate"
                         class="mr-2"></b-form-datepicker>
      <b-form-timepicker v-model="returnTime"></b-form-timepicker>
    </div>
    <b-button class="mt-3"
              block variant="outline-dark"
              @click="goToRent()">Search
    </b-button>
  </b-form>
</template>

<script>
export default {
  name: "ReservationForm",
  data() {
    return {
      sliding: null,
      pickLocation: [
        'İstanbul', 'İzmir', 'Antalya', 'Eskişehir'
      ],
      returnLocation: [
        'İstanbul', 'İzmir', 'Antalya', 'Eskişehir'
      ],
      pickLocationValue: 'İstanbul',
      returnLocationValue: 'İstanbul',
      pickDate: '',
      pickTime: '',
      returnDate: '',
      returnTime: '',
      userSelect: []
    }
  },
  methods:{
    goToRent() {
      this.userSelect.push(this.pickLocationValue,
          this.returnLocationValue,
          this.pickDate,
          this.pickTime,
          this.returnDate,
          this.returnTime);

      const userSelect = this.userSelect;
      this.$router.push({name: 'Rent', params: {userData: userSelect}});
    }
  }
}
</script>

<style>

.formReservation {
  position: absolute;
  min-height: 360px;
  max-height: 420px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 15px;
  margin-top: -700px;
  margin-left: 200px;
  z-index: 999;
}

.timeClass {
  display: flex;
  flex-direction: row;
}
</style>