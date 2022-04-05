
<template>
  <div class="buttons">
    <!-- <button @click="$store.commit('bajarContador')">-</button>
      <button @click="$store.commit('subirContador')">+</button>
    -->
    <button @click="$store.dispatch('bajarContador')">-</button>
    <button @click="$store.dispatch('subirContador')">+</button>
  </div>
</template>

<script>
export default {
  name: 'BotonesComponent'
}
</script>
