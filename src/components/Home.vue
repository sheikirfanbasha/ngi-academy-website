<template>
<div class="home">
  <b-nav>
    <b-nav-item active>Home</b-nav-item>
    <b-nav-item>
        <router-link to="/about">About</router-link>
    </b-nav-item>
     <b-nav-item>
        <router-link to="/courses">Computer Courses</router-link>
    </b-nav-item>
    <!-- <b-nav-item-dropdown text="Computer Courses" right>
      <b-dropdown-item v-for="course in courses" :key="course.name" >
        <router-link :to="{name: 'Course', params: {id: course.id}}">{{course.name}}</router-link>
      </b-dropdown-item>
    </b-nav-item-dropdown> -->
    <b-nav-item>Tuitions</b-nav-item>
    <b-nav-item disabled>Student Corner</b-nav-item>
    <b-nav-item><router-link to="/admin">Admin Corner</router-link></b-nav-item>
  </b-nav>
  <router-view :key="$route.path" />
</div>
</template>
<script>
 import store from "@/store.js";
  export default {
    name: 'Home',
    props: {
      msg: String
    },
    data: function(){
      var data = {
        courses: store.courses
      }
      return data;
    }
  }
</script>

<style scoped>
a.router-link-exact-active{
  color: red;
}
</style>