<template>
  <section>
    <h2>Developer details</h2>
    <article class="page-content">
      <header>
        <aside>
          <img src="@/assets/john_doe.jpg" class="portrait" :alt="jcorian.name">
        </aside>
        <article class="dev-info">
          <h1 class="dev-name">{{ jcorian.name }}</h1>
          <h4>Team {{ jcorian.teamName }}</h4>
          <div class="quote">
            <q>{{ jcorian.quote }}</q>
          </div>
          <hr class="white right">
          <h2>Technical proficiency</h2>
          <hr class="white left">
          <ul>
            <li v-for="tag in jcorian.tags" :key="jcorian.id + tag" class="tech-item">
              <img :src="getIcon(tag)" :alt="tag" class="tech-icon">
            </li>
          </ul>
        </article>
      </header>
      <article>
        <h2>Wie is {{ jcorian.name }}?</h2>
        <hr class="white left">
        <p>{{ jcorian.introStory }} {{ jcorian.introStory }}</p>
      </article>
      <article>
        <h2>War Stories</h2>
        <hr class="white left">
        <p>{{ jcorian.introStory }}</p>
        <hr class="white right">
        <p>{{ jcorian.introStory }}</p>
      </article>
    </article>
  </section>
</template>

<script>
import {JCoriansServiceFactory} from "@/services/JCoriansService";
import getTechIcon from "@/services/TechIconsService";

export default {
  name: "JCorianDetails",
  data() {
    return {
      jcorian: {}
    }
  },
  created() {
    const jcorianId = parseInt(this.$route.params.id);
    this.jcorian = JCoriansServiceFactory().getJcorianById(jcorianId);
  },
  methods: {
    getIcon(iconName) {
      return getTechIcon(iconName)
    }
  }
}
</script>

<style scoped>
aside {
  padding: 1rem;
  display: inline-block;
  width: 40%;
}

.portrait {
  width: 100%;
}

article h2 {
  margin-top: 0;
}

.dev-info {
  display: inline-block;
  vertical-align: top;
  width: 60%;
}

.dev-name {
  font-size: 3rem;
}

.tech-item {
  display: inline-block;
  padding: 1rem;
}

.tech-icon {
  height: 10vh;
  max-height: 100px;
}
</style>
