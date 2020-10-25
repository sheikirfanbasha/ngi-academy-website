<template>
   <div class="course">
       <h2> Course details </h2>
       <section class="name course-item">
           <div class="row">
                <div class="col-md-3">
                    <div class="column-name">
                        Name
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="column-value">
                        {{course.name}}
                    </div>
                </div>
           </div>
       </section>
       <section class="description course-item">
           <div class="row">
                <div class="col-md-3">
                    <div class="column-name">
                        Description
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="column-value">
                        {{course.description}}
                    </div>
                </div>
           </div>
       </section>
       <section class="duration course-item">
           <div class="row">
                <div class="col-md-3">
                    <div class="column-name">
                        Duration
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="column-value">
                        {{course.duration}}
                    </div>
                </div>
           </div>
       </section>
       <section class="syllabus course-item">
           <div class="row">
                <div class="col-md-3">
                    <div class="column-name">
                        Syllabus
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="column-value">
                        <b-list-group>
                            <b-list-group-item v-for="item in course.syllabus" :key="item">
                                    {{ item }}
                                </b-list-group-item>
                        </b-list-group>
                    </div>
                </div>
           </div>
       </section>
   </div>
</template>

<script>
import coursesPayload from "@/store.js"
export default {
    name: 'Course',
    data(){
        return {
            courseId: this.$route.params.id
        };
    },
    computed: {
        console: () => console,
        course(){
             var k = coursesPayload.courses.find((element) => element.id == this.courseId);
            return k;
        }
    }
    
}
</script>

<style scoped>
.course{
    display: block;
    text-align: left;
    margin-left: 15px;
}
.column-name{
    font-weight: bold;
}
.course-item{
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>