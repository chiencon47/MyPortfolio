<template>
  <div>
    <h1>Personal Projects</h1>

    <div class="intro">
      These are my <strong>personal projects</strong> — games and prototypes I built on my own time, outside of my company work.
      On each one I handled the gameplay programming, UI, effects and level design myself.
      <br />Click any project to watch the gameplay video and grab the APK.
    </div>

    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import personalProjectsData from "@/data/PersonalProjectsData.ts";

export default Vue.extend({
  name: "PersonalProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: personalProjectsData,
    };
  },
});
</script>

<style scoped>
.intro {
  max-width: 800px;
  margin-bottom: 30px;
}
</style>
