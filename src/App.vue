<template>
  <div class="container">
    <p class="page-title">TODO<span class="text-light">List</span></p>

    <template v-if="todoList.length">
      <div
        v-for="(item, index) in todoList"
        :key="index"
        :class="`list-card ${item.isChecked && 'border-red'}`">
        <div class="input-wrapper">
          <input type="checkbox" :checked="item.isChecked">
          <p>{{ `${item.activity} - ${item.name}` }}</p>
        </div>
        <i class="btn-delete ti-trash" @click="removeFromList(item)"></i>
      </div>
    </template>

    <p v-else>List is empty!</p>

    <hr>

    <p class="font-weight-medium">Activity</p>
    <input type="text" v-model="activityName">
    <p class="font-weight-medium">Name</p>
    <input type="text" v-model="personName">
    <center>
      <button type="button" class="btn-submit" @click="addToList">Add to list</button>
    </center>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    personName: null,
    activityName: null,
    todoList: [
      {
        activity: 'Menyapu lantai',
        name: 'Hartono',
        isChecked: true
      }
    ]
  }),
  methods: {
    addToList() {
      this.todoList.push({
        activity: this.activityName,
        name: this.personName
      });

      this.activityName = null;
      this.personName = null;
    },
    removeFromList(index) {
      this.todoList.splice(index, 1);
    }
  }
};
</script>

<style lang="css" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;550;700&display=swap');

  @import url('https://cdn.jsdelivr.net/themify-icons/0.1.2/css/themify-icons.css');

  .border-red {
    border-color: #e74c3c !important;
  }
</style>
