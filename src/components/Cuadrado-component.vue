<template>
  <div class="cuadrado">
    {{ $store.state.contadora }} <sub>2</sub> = {{ $store.getters.cuadrado }}
  </div>
</template>

<script>
export default {
  name: 'CuadradoComponent'
}
</script>
