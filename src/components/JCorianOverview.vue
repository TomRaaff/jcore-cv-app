<template>
  <div class="jcorian">
    <h3>{{ jcorian.name }}</h3>
    <hr class="left">
    <img src="@/assets/john_doe.jpg" class="portrait" :alt="jcorian.name">
    <ul class="tags">
      <li class="tag" v-for="tag in jcorian.tags" :key="jcorian.id + tag">{{ tag }}</li>
    </ul>
    <div class="quote">
      <q>{{ jcorian.quote }}</q>
    </div>
    <hr class="right">
    <button @click="navToJcorian">Learn more</button>
  </div>
</template>

<script>
import JCorian from "@/models/JCorian.model";

export default {
  name: "JCorianOverview",
  props: {
    jcorian: {
      type: JCorian,
      required: true
    }
  },
  methods: {
    navToJcorian() {
      this.$router.push({ name: 'jcorianDetails', params: {id: this.jcorian.id}});
    }
  }
}
</script>

<style scoped>
.jcorian {
  background-color: #d66104;
  padding: 2rem;
  color: white;
  margin: 1rem 0;
}

.jcorian h3 {
  padding-left: 0;
}

.portrait {
  width: calc(100% + 4rem);
  margin: 1rem -2rem;
}

.quote {
  text-align: right;
}

</style>
