<template>
  <div>
    <h3>Count: {{ counter }}</h3>
    <button @click="decreaseCounter">&dash;</button>
    <button @click="increaseCounter">&plus;</button>

    <p v-if="age > 100">Legend</p>
    <p v-else-if="age > 50">Usia paruh baya</p>
    <p v-else-if="age > 20">Usia produktif</p>
    <p v-else>Usia produktif</p>

  </div>
</template>

<script>
export default {
  data: () => ({
    counter: 1,
    age: 23,
  }),
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
