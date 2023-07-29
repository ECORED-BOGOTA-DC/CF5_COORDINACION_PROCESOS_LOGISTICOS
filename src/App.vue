<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>
<style lang="sass">
.banner-interno
  height: 150px
.banner-interno__fondo
  background-image: url(assets/curso/fondo_tema.png) !important
.banner-principal .tarjeta
  background-position: inherit !important
.titulo-principal__numero
  background-color: #57DBD8 !important
.curso-main-container > .container
  overflow-x: clip !important
.titulo-segundo:after
  border-left-color: #57DBD8 !important
.banner-principal p, .banner-principal h1, .banner-principal h2, .banner-principal h3, .banner-principal h4, .banner-principal h5, .banner-principal h6
  color: #12263F !important
.banner-interno__titulo h1, .banner-interno__titulo h2, .banner-interno__titulo h3, .banner-interno__titulo h4, .banner-interno__titulo h5, .banner-interno__titulo h6
  color: #12263F !important
.banner-interno__titulo__icono
  background-color: #12263F !important
.titulo-principal.color-acento-contenido .titulo-principal__numero span
  color: #fff !important
.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
  padding-left: 4rem !important
  padding-right: 0px !important
  padding-top: 5rem !important
  padding-bottom: 0px !important
.banner-principal .tarjeta
  background-color: transparent !important
.banner-principal-decorativo-1
  animation: agrandar1 2s ease-in-out infinite alternate !important
  top: 55% !important
  right: 81% !important
.banner-principal-decorativo-2
  animation: agrandar1 2s ease-in-out infinite alternate !important
  top: 45% !important
  right: 81% !important
.banner-principal-decorativo-3
  animation: agrandar1 2s ease-in-out infinite alternate !important
  position: absolute !important
  top: 46% !important
  right: 72% !important
.banner-principal-decorativo-4
  animation: agrandar1 2s ease-in-out infinite alternate !important
  position: absolute !important
  top: 21% !important
  right: 62% !important
.banner-principal-decorativo-5
  animation: agrandar1 2s ease-in-out infinite alternate !important
  position: absolute !important
  top: 30% !important
  right: 36% !important
.banner-principal-decorativo-6
  animation: agrandar1 2s ease-in-out infinite alternate !important
  position: absolute !important
  top: 37% !important
  right: 4% !important
@media (min-width: 576px)
  .banner-principal__info
    padding-right: 6rem !important
@media screen and (max-width: 992px)
  .cont_responsive1
    right: 0 !important
    width: 100% !important
  .cont_responsive2
    left: 0 !important
    width: 100% !important
</style>
