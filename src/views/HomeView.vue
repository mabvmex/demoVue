<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <ContadorComponent></ContadorComponent>
    <CuadradoComponent></CuadradoComponent>
    <BotonesComponent></BotonesComponent>
  </div>
</template>

<script>

import ContadorComponent from '../components/Contador-component'
import CuadradoComponent from '../components/Cuadrado-component'
import BotonesComponent from '../components/Botones-component'

export default {
  name: 'HomeView',
  components: { ContadorComponent, CuadradoComponent, BotonesComponent }
}
</script>

<style>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}

.cuadrado {
  font-size: 25px;
}
</style>
