<template lang="">
  <div class="header">
    <h1 class="headerText">The Artisanal Combat Tracker</h1>
    <ul class="border-bottom">
      <li class="nav-item">
        <RouterLink to="/">Builder</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/encounter">Encounter</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/licensing">FAQ</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  components: {
    RouterLink
  },
  setup() {
    return {}
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap');

.logo-text {
  width: auto;
  max-height: 100px;
  margin-bottom: 0.25rem;
}

.headerText {
  font-family: 'MedievalSharp', cursive;
  font-size: 2rem;
  margin: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
}

header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
  border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

ul li,
ul > router-link {
  flex: 1 1 auto;
  text-align: center;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}
*,
:after,
:before {
  box-sizing: border-box;
}

a:hover,
a:active,
a.router-link-active {
  background-color: none;
  color: #000;
}

a {
  background-color: none;
  color: rgb(85, 85, 85);
  margin-right: 5px;
  padding: 3px 10px;
  flex: 1 1 auto;
  text-align: center;
}
a.router-link-active {
  font-weight: 700;
}

ul {
  flex: 1 1 auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 1rem;
  margin-top: 0;
  padding-bottom: 0.5rem;
}
</style>
