<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="zoom-in") El presente componente formativo se enfoca en la presentación de las ventas y las compras, todo en el marco del mercado de clientes potenciales reales, se da la bienvenida a este contenido que pone en relación a  los aprendices con el avance del desarrollo académico en logística:

    figure.mt-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
