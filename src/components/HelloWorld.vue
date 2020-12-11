<template>
  <div>
    <h3>Count: {{ counter }}</h3>
    <h3>Computed: {{ computedValue }}</h3>
    <button @click="decreaseCounter">&dash;</button>
    <button @click="increaseCounter">&plus;</button>

    <p v-if="age > 100">Legend</p>
    <p v-else-if="age > 50">Usia paruh baya</p>
    <p v-else-if="age > 20">Usia produktif</p>
    <p v-else>Usia produktif</p>

    <p class="text-red">Ini akan jadi merah</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    counter: 1,
    age: 23,
  }),
  watch: {
    counter(val) {
      if (val < 0) {
        this.counter = 0;
      }
    },
  },
  computed: {
    computedValue() {
      return this.counter * this.age;
    },
  },
  beforeCreate() {
    console.log('MOUNTED!');
    this.counter = 100;
  },
  methods: {
    increaseCounter() {
      this.counter += 1;
    },
    decreaseCounter() {
      this.counter -= 1;
    },
  },
};
</script>
