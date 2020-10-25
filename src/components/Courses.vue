<template>
    <div class="courses">
        <b-list-group>
            <b-list-group-item v-for="course in courses" :key="course.name" >
                <router-link :to="{name: 'courseDetails', params: {id: course.id}}">{{course.name}}</router-link>
                </b-list-group-item>
        </b-list-group>
        <router-view :key="$route.path" />
    </div>
</template>

<script>
 import store from "@/store.js";
  export default {
    name: 'Courses',
    data: function(){
      var data = {
        courses: store.courses
      }
      return data;
    }
  }
</script>
<style scoped>
.courses{
    display: inline;
}
</style>