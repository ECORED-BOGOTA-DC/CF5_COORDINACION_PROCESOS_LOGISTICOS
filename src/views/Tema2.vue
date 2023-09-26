<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 2
      h1 Interpretación de pronósticos
    
    p(data-aos="fade-right") La previsión se realiza siguiendo un orden de moda, casi todas las empresas necesitan estos elementos en la producción de cualquier material o incluso cambios en los precios de los productos, elementos que son necesarios cada vez desde la etapa económica hasta la de producción. Así como inteligencia, estos elementos necesitan estimar lo que sucederá en el futuro para ganar o perder la menor cantidad posible de cosas relacionadas con productos, tiempo y dinero; la comunidad empresarial suele decir que las buenas predicciones pueden eliminar la incertidumbre y sentar las bases de la empresa logrando grandes avances, sobre todo porque ayudan a los gerentes a tomar decisiones críticas.
    p.mt-4(data-aos="fade-right") El gerente de la empresa maneja implícita o explícitamente los pronósticos en función de estimaciones aleatorias. Estas estimaciones son inexactas, pero pueden ser capacitadas. Esto es lo que hacen los modelos desarrollados para estos fines. Se puede entender a partir de la gestión de datos que en la mayoría de los procesos cuantitativos el estudio de los números aporta elementos que explican lo que va a suceder. Si los datos son fiables se pueden desarrollar modelos cercanos a la realidad. Los más comunes son:

    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_2_1 2.1 Estadística descriptiva
    
    p(data-aos="fade-right") La estadística descriptiva es un campo de la ciencia estadística que se utiliza para resumir de forma clara y precisa los datos estadísticos de la encuesta utilizando ayudas gráficas como tablas y diagramas. Antes de realizar un análisis descriptivo, es recomendable volver a todos los propósitos del estudio e identificar los datos de la escala, junto con otras variables registradas en el trabajo. Hay dos tipos de variables de datos, las cuales son necesarias para las operaciones logísticas:

    AcordionA.acordion2.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.col-xl-11.m-auto(titulo="Variable cualitativa")
        p Generalmente se refiere a la calidad basada en atributos no numéricos. Estas variables son propiedades únicas de la condición (mutuamente excluyentes) y, si solo hay una posibilidad conocida (completa), un tipo nominal. Si el atributo solo acepta dos condiciones, las variables reciben el nombre de nominales dicotómicas, pero si hay más posibilidades se les denomina nominales politómicas, por ejemplo: el color de las frutas como la guayaba o manzana. 
      .row.col-xl-11.m-auto(titulo="Variable cuantitativa")
        p Está determinada por la presencia o ausencia de una unidad de medida. Las unidades de medida se pueden calcular, medir o ponderar de acuerdo con las propiedades físicas de cualquier dispositivo. De manera similar, si aceptamos fracciones, podemos clasificarlas como continúas, y si consideramos solo unidades enteras, podemos clasificarlas como discretas. Por ejemplo, la altura (en centímetros) o el peso (en kilogramos) de una persona.
    
    h4.mt-5(data-aos="fade-right" style="color:#1A0F91;") <i class="fas fa-globe fa-spin" style="color: #57DBD8; padding-left: 5px"></i>Medidas de tendencia central y de dispersión

    p.mt-4(data-aos="fade-right") Designado para proporcionar información sobre conjunto de datos:

    ul.fa-ul.mt-4
      li.mb-2(data-aos="fade-right")
        i.fas.fa-li.fa-circle(style="color:#FE7062;")
        | #[strong Promedio o media (aritmética):] calculada como la suma de todos los valores individuales entre la suma de los valores. Indique el punto de equilibrio de la distribución de datos.
      li.mb-2(data-aos="fade-right")
        i.fas.fa-li.fa-circle(style="color:#FE7062;")
        | #[strong Mediana:] representa la mitad. La muestra representa un número o valor dividido en dos mitades, es decir, la población es menor o mayor que ella.
      li.mb-2(data-aos="fade-right")
        i.fas.fa-li.fa-circle(style="color:#FE7062;")
        | #[strong Moda:] el valor observado con mayor frecuencia en la medida.
    
    p.mt-5(data-aos="fade-right") Las medidas y los datos son de varios tipos y la generalidad de la información igual, por eso se hace necesario presentar los datos de diferentes formas y entender que para su recepción también pueden venir tratados así. En el siguiente gráfico puede entender un poco más al respecto:

    h4.mt-5.text-center(data-aos="zoom-in") Tipos de datos en medidas de tendencia central y de dispersión

    .col-xl-10.m-auto.mt-5(data-aos="zoom-in")
      ImagenInfograficaB.color-primario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema2/1.svg' alt="Muestra gráfico dodne identifica ls medidas de tendencia central y de dispersión las cuales se describen en la parte inferior.")
        div(x="11.5%" y="70%" tooltip="Medidas de dispersión" numero="+")
          p(style="color:#12263F !important;") Esto le dará una idea de cómo escaparon los datos dentro del rango medido en términos de media y distribución. Hay tres formas de medir la varianza de una variable cuantitativa: la desviación estándar o desviación típica, los rangos intercuartílicos y los valores mínimo y máximo. 
        div(x="30.5%" y="25%" tooltip="Medidas de posición " numero="+")
          p(style="color:#12263F !important;") No son las más conocidas, pero se utilizan frecuentemente. Ejemplos de esto son porcentajes o minoría. Si algunos datos están en el percentil 90, significa que están por debajo del percentil 90. Hay medidas en otras ubicaciones, como los cuartiles, o en variaciones como los primeros cuartiles.
        div(x="50%" y="70%" tooltip="Distribución de frecuencias" numero="+")
          p(style="color:#12263F !important;") También es interesante ver cómo se distribuyen las frecuencias. Para ello, existen ciertos conceptos a tener en cuenta como lo son:
          ul.fa-ul.mt-3
            li.mb-2(style="color:#12263F !important;")
              i.fas.fa-check.fa-li(style="color:#00BCD4;")
              | #[strong Frecuencia absoluta:] número total de observaciones repetidas a lo largo del tiempo.
            li.mb-2(style="color:#12263F !important;")
              i.fas.fa-check.fa-li(style="color:#00BCD4;")
              | #[strong Frecuencia relativa:] es el porcentaje observaciones que se repite en un conjunto de ellas.
            li(style="color:#12263F !important;")
              i.fas.fa-check.fa-li(style="color:#00BCD4;")
              | #[strong Frecuencia acumulada:] puede ser relativa acumulada o absoluta acumulada. Muestra la cantidad acumulada hasta una observación específica.
        div(x="69%" y="25%" tooltip="Tablas" numero="+")
          p(style="color:#12263F !important;") Contiene una matriz de datos que le permite definir métricas específicas para las mediciones realizadas. Consta de tres partes básicas: el título, el cuerpo (encabezado de la tabla y matriz de datos) y restricciones o descripciones explícitas. 
          p.mt-3(style="color:#12263F !important;") El título proporciona información sobre el contenido de la tabla, las variables que se mostrarán, el número de sujetos y la unidad de investigación.
        div(x="89%" y="70%" tooltip="Gráficos" numero="+")
          p(style="color:#12263F !important;") Se utiliza para mostrar tendencias, no datos puntuales. También es muy útil comparar visualmente los resultados de los grupos. Se utilizan principalmente para destacar descubrimientos y hallazgos importantes. Ayudan a presentar la información de una manera más simple y restringida. Algunos ejemplos de gráficos y tablas frecuentemente utilizados:
          ul.fa-ul.mt-3
            li.mb-2(style="color:#12263F !important;")
              i.fas.fa-check.fa-li(style="color:#00BCD4;")
              | Histograma.
            li.mb-2(style="color:#12263F !important;")
              i.fas.fa-check.fa-li(style="color:#00BCD4;")
              | Gráfico de barras.
            li.mb-2(style="color:#12263F !important;")
              i.fas.fa-check.fa-li(style="color:#00BCD4;")
              | Gráfico de sectores.
            li.mb-2(style="color:#12263F !important;")
              i.fas.fa-check.fa-li(style="color:#00BCD4;")
              | Tablas de probabilidad.
            li.mb-2(style="color:#12263F !important;")
              i.fas.fa-check.fa-li(style="color:#00BCD4;")
              | Tablas bidimensionales.
            li.mb-2(style="color:#12263F !important;")
              i.fas.fa-check.fa-li(style="color:#00BCD4;")
              | Gráfico de cajas.
            li.mb-2(style="color:#12263F !important;")
              i.fas.fa-check.fa-li(style="color:#00BCD4;")
              | Infografía.
    
    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_2_2 2.2 Planeación de pronósticos según políticas de la organización
    
    p(data-aos="fade-right") La planeación es un proceso que toda empresa debe utilizar, ya que es el punto de partida para nuevos proyectos en diversas áreas como la fabricación y las ventas. Esto le permite identificar mejores estrategias para lograr objetivos como aumentar la demanda y optimizar el uso de recursos. 
    p.mt-4(data-aos="fade-right") Como todas las predicciones, existen límites para el error inevitable. Sin embargo, algunas técnicas pueden dar resultados precisos. Esto ayudará a la preparación para futuros desafíos y oportunidades.

    .col-xl-8.col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 2
        span Ciclo del pronóstico
      figure.mt-4
        img(src="@/assets/curso/tema2/2.svg" data-aos="zoom-in" alt="Imagen muestra ciclo y se describen en la parte inferior de la imagen.")
    
    p.mt-5(data-aos="fade-right") Se ha identificado una serie de beneficios clave para la medición de la exactitud del pronóstico y estos son:

    AcordionA.acordionb1.mt-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris" data-aos="fade-right")
      .row(titulo="Beneficios del servicio") 
        p Además del impacto obvio en el servicio al cliente, un proceso formal de planificación de la demanda ayuda a las empresas a responder rápidamente a los eventos del mercado.
      .row(titulo="Beneficios económicos") 
        p Esto incluye menos desperdicio, mayor precisión de producción, menor gestión de inventario y una mejor planificación de la capacidad.
      .row(titulo="Beneficios en los ingresos") 
        p Mayor disponibilidad en los estantes de las tiendas y más cerca de los planes comerciales.
      .row(titulo="Beneficios organizacionales") 
        p Mayor responsabilidad, mayores capacidades de control de procesos, menor ambigüedad, mejor colaboración interna, etc. 
    
    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_2_3 2.3  Evaluar el comportamiento de la empresa frente al mercado - #[em benchmarking]
    
    p(data-aos="fade-right") El mercado es el mismo para varias empresas, cada empresa que comparte nicho puede aportar a las otras de su nicho a pesar de ser considerada como competencia, esto evidencia que en realidad no hay competencias, son empresas con diferentes niveles de servicio que comparten un grupo de clientes potenciales y eso sirve para mucho como se puede ver en el siguiente recurso:

    .tarjeta.tarjeta--azul.p-4.p-md-5.mt-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row
          .col-md-6.col-lg-5.mb-4.mb-md-0
            h5 Calidad del servicio
            p.mt-5 La calidad del servicio es uno de los factores más importantes de una organización, esta trabaja en función de la satisfacción del cliente, los clientes pueden decidir quedarse con la empresa, fidelizarse por un periodo de tiempo o cambiar a un lugar que brinde una mejor calidad de servicio.
          .col-md-6.col-lg-7
            figure
              img(src='@/assets/curso/tema2/3.png' alt="Imagen decorativa")
        .row
          .col-md-6.col-lg-5.mb-4.mb-md-0
            h5 Adopción de los datos
            p.mt-5 El mercado actual es un mercado global, competitivo y llenos de datos de información válida para cada empresa, estos datos requieren de un gran trato y métodos organizativos que le permitan estar adaptada al nivel de la competencia y no sucumbir ante los rápidos cambios de la tecnología o en procesos más eficientes. En esa realidad, las empresas deben ir más allá de los puntos clave para obtener una ventaja sobre sus segmentos de mercado.
          .col-md-6.col-lg-7
            figure
              img(src='@/assets/curso/tema2/4.png' alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-right") Con estos desafíos en mente han surgido #[em benchmarks] para detectar y aplicar los mejores procesos con los más altos estándares de calidad y mayor productividad, basados en la experiencia de empresas líderes en el mercado. En una empresa pequeña o en crecimiento esta debería ser su herramienta principal, a continuación, se define los conceptos básicos e importancia del #[em Benchmarking]:

    TabsC.color-acento-contenido.mt-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="<em>Benchmarking</em>")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.col-lg-5.mb-md-0
            figure
              img(src='@/assets/curso/tema2/5.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-7
            p El #[em Benchmarking] es el proceso de evaluación de productos, servicios y procesos entre las empresas que busca analizar cómo funcionan las cosas exitosas y de cambio para igualarlas o mejorarlas. La aplicación de esta técnica permite a las organizaciones alcanzar mayor calidad en sus productos, servicios y procesos, a partir de la cooperación, colaboración y el intercambio de información.
      .py-3.py-md-4(titulo="Objetivo general")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.col-lg-5.mb-md-0
            figure
              img(src='@/assets/curso/tema2/6.png' alt="Imagen decorativa")
          .col-md-6.col-lg-7
            p Su objetivo es corregir errores e identificar oportunidades, para aprender a solucionar problemas y tomar decisiones según los patrones de los líderes; por lo tanto, la calidad en el servicio es una de sus aplicaciones. 
            p.mt-4 Esta clase de estudios se realiza en contacto directo con los competidores o no competidores y, al finalizar, se comparten los resultados para que cada organización cree su propio sistema de mejoras.
      .py-3.py-md-4(titulo="Objetivos específicos")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.col-lg-5.mb-md-0
            figure
              img(src='@/assets/curso/tema2/7.png' alt="Imagen decorativa")
          .col-md-6.col-lg-7
            p Los objetivos específicos, evidentemente, dependen de qué tipo de proyecto se está elaborando y en qué sector. Pero en la mayoría, coinciden con los que a continuación se exponen:
            ol.lista-ol.fa-ul.mt-3
              li 
                span.text-bold.fa-li 1. 
                | Establecer la fase de planificación estratégica.
              li 
                span.text-bold.fa-li 2. 
                | Descubrir cuáles son las mejores prácticas para alcanzar los resultados deseados.
              li 
                span.text-bold.fa-li 3. 
                | Analizar la situación económica y en qué posición en el mercado está nuestra compañía de estudio.
              li 
                span.text-bold.fa-li 4. 
                | Aplicar herramientas novedosas y de última generación del sector en la compañía.
              li 
                span.text-bold.fa-li 5. 
                | Entablar relación con aquellas empresas que deseamos analizar, para facilitar el intercambio de información.
      .py-3.py-md-4(titulo="<em>Benchmarking</em> beneficios")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.col-lg-5.mb-md-0
            figure
              img(src='@/assets/curso/tema2/8.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-7
            p El #[em Benchmarking] nace con la necesidad de definir objetivos que sean razonables y alcanzables, para ello es necesario que se centren en el entorno externo de la empresa, dejando a un lado el entorno interno y las tendencias pasadas de la compañía.
            p.mt-4 El beneficio que podemos obtener del #[em Benchmarking] es la ayuda que nos proporciona para poder ampliar las expectativas y la confianza de nuestros clientes. Para poder llegar hasta ese punto, las empresas competitivas deben estar continuamente cambiando y adaptándose al mercado. Por ello es necesario motivar al personal para que confíen en una organización, y por lo tanto, conseguir los nuevos objetivos trazados.
    
    p.mt-5(data-aos="fade-right") Elaborar el proceso del #[em benchmarking] no es complicado, pero si tiene un orden, revisar todo lo que hacen las otras empresas puede tomar mucho tiempo y por eso es necesario ordenarlo en busca de resultados más objetivos. Se recomienda el siguiente proceso a la hora de elaborar el #[em benchmarking]:

    .col-xl-10.m-auto.mt-5
      figure(data-aos="zoom-in")
        img(src="@/assets/curso/tema2/9.svg" data-aos="zoom-in-up" alt="Muestra diagrama con proceso de benchmarking que se describe abajo la imagen.")
    
    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_2_4 2.4  Planeación, pronóstico y reabastecimiento colaborativo - CPFR
    
    p(data-aos="fade-right") Esta es la definición que comparte la Revista Zona Logística (2018) al respecto “el proceso #[em Collaborative Planning Forecasting and Replenishment] (CPFR) por sus siglas en inglés, (Planeamiento Participativo, Pronóstico y Reabastecimiento), es un proceso de planificación de ventas y reabastecimiento para varios actores en la cadena de suministro para obtener una imagen más precisa de la empresa en su conjunto para identificar áreas de oportunidad” y su propósito es construir una asociación en el marco de una filosofía de "ganar/ganar" “#[em win/win]” entre proveedores y clientes a través de la planificación comercial conjunta y el intercambio de información así se puede reducir los costos de inventario mientras aumenta la rentabilidad del producto en toda la cadena. Se puede decir entonces que se ahorra dinero y se acelera el servicio para los usuarios finales.
    p.mt-4(data-aos="fade-right") La planificación de ventas integrada le permite realizar un seguimiento de las operaciones de manera más eficiente y reducir las desviaciones de los pronósticos al proporcionar un mayor control sobre los problemas de inventario al visualizar optimización de la demanda real en todo su suministro, para mejorar la atención en el punto de venta físico o digital.
    p.mt-4(data-aos="fade-right") El CPFR presenta una serie de fundamentos que rigen y benefician el enfoque de la estrategia:

    TabsA.color-acento-botones.mt-5(data-aos="zoom-in")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Relaciones con los aliados")
        ul.fa-ul
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Facilita la construcción de relaciones flexibles.
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Facilita la colaboración profunda entre dependencias, sistemas y procesos comunes. 
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Fortalecimiento de las relaciones de confianza: intercambio de información entre socios comerciales. 
          li(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Mide las metas, estrategias, tácticas y métricas juntas para lograr organizaciones exitosas y ágiles en un mercado cambiante.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Inventarios")
        ul.fa-ul
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Disminución de existencias y niveles de seguridad actuales. 
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Reduce los costos financieros y de inventario. 
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Mejora la rentabilidad del producto en toda su cadena de suministro al tiempo que reduce los costos de inventario. 
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Reduce el envejecimiento.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Rentabilidad")
        ul.fa-ul
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Incrementa las ventas evitando el agotamiento, tanto estacional como promocional. 
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Reduce el costo de oportunidad al reducir el inventario agotado o en exceso.
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Mejora el rendimiento publicitario.
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Aumenta los niveles de servicio al cliente y aumento de las ventas.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Eficiencias en el proceso")
        ul.fa-ul
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Enfoque común del consumidor: establezca un proceso de escucha con los consumidores finales en cada eslabón de la cadena de suministro. 
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Mejora la precisión de la predicción. 
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Simplifica la gestión de pedidos y compras. 
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Optimiza la economía de las fábricas, especialmente el tamaño de la mano de obra.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Gestión del transporte")
        ul.fa-ul
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Gestión estratégica y táctica de fletes. 
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Pedidos a granel inferiores a la capacidad del camión o contenedor. (LTL-LCL). 
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Optimiza de interrupciones y retrasos de flota. Dificultad en la implementación.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Dificultades en <br> la implementación")
        ul.fa-ul
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Política de privacidad comercial para ciertos tipos de información. 
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Dificultad para cambiar los procesos internos (alto compromiso e implicación de la dirección).
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Aspectos técnicos (integración de sistemas e interoperabilidad en tiempo real). 
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Actitudes que limitan la confianza en los socios (respeto a las promesas, alta rotación de empleados, etc.). 
          li.mb-2(style="color:#12263F !important;")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Costos de inversión e implementación.
    
    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_2_5 2.5  Herramientas para la proyección de pronósticos de oferta y demanda
    
    p(data-aos="fade-right") Las predicciones de la oferta y demanda futura del mercado, conseguida de los pronósticos de ventas o del mercado potencial, puede basarse en métodos que abarcan desde conjeturas infundadas hasta complejos modelos estadísticos. 
    p.mt-4(data-aos="fade-right") A continuación, se describen algunos métodos que se emplean comúnmente en la predicción de la oferta y la demanda:

    AcordionA.acordion2.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="zoom-in")
      .row.col-xl-11.m-auto(titulo="Análisis de los factores del mercado")
        p Generalmente, la demanda futura de un producto está relacionada con el comportamiento de ciertos factores de mercado. Si es así, puede predecir las ventas futuras estudiando ese comportamiento. Básicamente, el análisis de los impulsores del mercado se trata de determinar cuáles son esos impulsores y medir su relación con el desempeño de las ventas. 
        p.mt-2 Para utilizar este tipo de análisis correctamente, necesita: 
        ol.lista-ol
          li 
            span.text-bold 1. 
            | Seleccione el factor de mercado apropiado. 
          li 
            span.text-bold 2. 
            | Minimícelos. Cuantos más factores tenga, más probabilidades tendrá de obtener una estimación incorrecta, lo que dificulta determinar cómo afecta cada factor a la demanda.
      .row.col-xl-11.m-auto(titulo="Encuesta de las intenciones del comprador")
        p Un aspecto básico de una encuesta de intención del comprador es preguntar a una muestra de clientes actuales o potenciales cuánto comprarán de un producto durante un período de tiempo específico en el futuro a un precio específico. Seleccionar una muestra representativa de compradores potenciales puede resultar complicado. Muchos productos de consumo requieren muestras bastante grandes. Por lo tanto, la investigación es un método costoso y que requiere mucho tiempo. 
        p.mt-2 Este método le permite pronosticar con precisión la demanda cuando: 
        ol.lista-ol
          li 
            span.text-bold 1. 
            |  Hay relativamente pocos compradores en el mercado objetivo. 
          li 
            span.text-bold 2. 
            |  Intención de compra. 
          li 
            span.text-bold 3. 
            |  La historia muestra que existe una cierta relación entre el comportamiento de compra y la voluntad de expresar.
      .row.col-xl-11.m-auto(titulo="Pruebas de mercado")
        p En la prueba de mercado, una empresa vende nuevos productos en un área limitada, mide las ventas y predice las ventas en un área geográfica más grande basándose en una muestra. Ésta es una técnica que se utiliza para determinar si hay suficiente demanda de un nuevo producto. También es la base para evaluar características y otras estrategias de #[em marketing].
      .row.col-xl-11.m-auto(titulo="Análisis de ventas anteriores y de tendencias")
        p Este es un método de pronóstico muy utilizado y se basa completamente en las ventas históricas. Utilizado por los minoristas con el propósito de "superar las cifras del año pasado". Los pronósticos en los análisis de ventas anteriores son solo un aumento porcentual simple aplicado a la cantidad lograda en el año anterior o la cantidad promedio durante varios años. 
        p.mt-2 Esta es una tecnología simple, barata y fácil de aplicar. Las ventas pasadas se pueden utilizar para predecir las ventas de una empresa que opera en un mercado confiable donde la participación de mercado permanece constante a lo largo de los años. 
        p.mt-2 El análisis de tendencias también se basa en datos históricos de ventas, pero es un método de pronóstico más complejo. Un tipo son los pronósticos de ventas a largo plazo, que generalmente se calculan mediante un método estadístico llamado regresión. La complejidad estadística del análisis de tendencias a largo plazo no compensa la debilidad inherente de las estimaciones futuras basadas únicamente en el desempeño de las ventas pasadas. 
        p.mt-2 El segundo tipo de análisis requiere una previsión a corto plazo utilizando indicadores de ventas estacionales. El análisis de tendencias a corto plazo es aceptable si las ventas siguen un patrón estacional confiable.
      .row.col-xl-11.m-auto(titulo="Participación de la fuerza de ventas")
        p Este método ascendente se utiliza para pronosticar las ventas o estimar el potencial del mercado. El equipo de ventas involucrado en la previsión de ventas debe recopilar cotizaciones de todos los representantes de ventas que hacen referencia a un área para ese período de tiempo futuro.
        p.mt-2 La suma de las estimaciones define el pronóstico de ventas de la empresa. 
        p.mt-2 Este método generará pronósticos precisos si el vendedor tiene conocimiento y experiencia porque:
        ol.lista-ol
          li 
            span.text-bold 1. 
            | Se puede aprovechar la experiencia del mercado de vendedores. 
          li 
            span.text-bold 2. 
            | Este método puede limitar las expectativas de tiempo y recompensas del vendedor al realizar este pronóstico.
      .row.col-xl-11.m-auto(titulo="Juicio de los ejecutivos")
        p Incluye la obtención de comentarios de una o más direcciones con respecto a las ventas futuras. Uno de estos métodos, llamado Delphi, fue iniciado por un grupo de entusiastas que evaluaban de forma anónima las ventas futuras. Adivina cómo reaccionan los demás miembros de cada grupo sin saber cómo. Las siguientes estimaciones se resumen y los promedios se comparten con los participantes junto con un conjunto de predicciones.
        p.mt-2 La ventaja de este enfoque es que evita que una persona influya en otra, pero la desventaja es que el participante puede no tener la información necesaria para basar la evaluación. 


</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass">
.acordion2.acordion .tarjeta.tarjeta--azul
  background-color: #EFF4FF
.acordion2 .tarjeta.tarjeta--azul.acordion__activo
  background-color: #D8E4FD
.img-infografica-b__modal
  background-color: rgba(229, 242, 244, .94)
  border-radius: 20px
.img-infografica-b__modal__btn-cerrar i
  color: #000
.slyder-a__bullets__item
  background-color: #C6C0F4
  border: none
.slyder-a__bullets__item--active
  background-color: #7E5EE3 !important
  border-color: #7E5EE3 !important
.tabs-c__tab.py-3.tabs-c__tab--active span
  font-weight: bold
.tabs-a__tab
  background-color: #E8E8E8
</style>
