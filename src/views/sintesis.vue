<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="zoom-in") La proyección y los requerimientos de compras son dos aspectos esenciales en la gestión de adquisiciones. La proyección implica estimar las necesidades futuras, mientras que los requerimientos establecen las condiciones de compra. Ambos son fundamentales para garantizar un abastecimiento eficiente.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Imagen que muestra síntesis del componente de formación  en la identificación de los componentes del mercado y las necesidades del cliente donde da a conocer las variables del marketing, ciclo del vida del producto, oferta y demanda permitiendo conocer las necesidades de los clientes dentro de sus niveles y las formas de pronosticar la proyección de la oferta y la demanda.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
