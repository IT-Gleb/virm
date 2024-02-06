<script setup lang="ts">
import headerTop from "../components/PageParts/headerTop.vue";
import innerFooter from "../components/PageParts/innerFooter.vue";
import partGroup1 from "../components/PageParts/partGroup1.vue";
import partGroup2 from "../components/PageParts/partGroup2.vue";
import partGroup3 from "../components/PageParts/partGroup3.vue";
import partGroup4 from "../components/PageParts/partGroup4.vue";
import partGroup5 from "../components/PageParts/partGroup5.vue";
import partGroup6 from "../components/PageParts/partGroup6.vue";
</script>

<template>
  <header-top></header-top>
  <main class="relative">
    <part-group1></part-group1>
    <part-group2></part-group2>
    <part-group3></part-group3>
    <part-group4></part-group4>
    <part-group5></part-group5>
    <part-group6></part-group6>
  </main>
  <inner-footer> </inner-footer>
</template>
