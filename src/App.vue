<template>
  <div class="container">
    <p class="page-title">TODO<span class="text-light">List</span></p>

    <div class="list-card">
      <div class="input-wrapper">
        <input type="checkbox">
        <p>Keren</p>
      </div>
      <i class="btn-delete ti-trash"></i>
    </div>

    <hr>

    <p class="font-weight-medium">Task</p>
    <input type="text">
    <p class="font-weight-medium">Name</p>
    <input type="text">
    <center>
      <button type="button" class="btn-submit">Add to list</button>
    </center>
  </div>
</template>

<script>

export default {
  name: 'App'
};
</script>

<style lang="css">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;550;700&display=swap');

  @import url('https://cdn.jsdelivr.net/themify-icons/0.1.2/css/themify-icons.css');
</style>
