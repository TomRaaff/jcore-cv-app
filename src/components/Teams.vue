<template>
  <section>
    <h2>Onze JCorians</h2>
    <hr class="left black">
    <article v-for="(team, index) in teams" :key="index">
      <h3>Team {{ team }}</h3>
      <ul>
        <li v-for="jCorian in getJCoriansByTeam(team)" :key="jCorian.id">
          <JCorianOverview :jcorian="jCorian"></JCorianOverview>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
import JCorianOverview from "@/components/JCorianOverview";
import {JCoriansServiceFactory} from "@/services/JCoriansService";

export default {
  name: "JCorians",
  components: {JCorianOverview},
  data() {
    return {
      jcorians: [],
      teams: []
    }
  },
  methods: {
    getJCoriansByTeam(teamName) {
      return JCoriansServiceFactory().getJcoriansByTeam(teamName)
    }
  },
  created() {
    this.jcorians = JCoriansServiceFactory().getJcorians();
    this.teams = JCoriansServiceFactory().getTeams();
  }
}
</script>

<style scoped>

ul {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-around;
}

.black {
  border-color: black;
}
</style>
