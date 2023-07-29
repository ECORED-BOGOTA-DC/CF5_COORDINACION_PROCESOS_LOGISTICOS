<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 1
      h1 Proyectar la oferta y demanda
    
    p(data-aos="zoom-in") La proyección de oferta y demanda es una fase importante en el estudio de mercado, que tiene la finalidad de determinar la situación conveniente del mercado al que se quiere ingresar con determinado bien o servicio. 
    p.mt-4(data-aos="zoom-in") Este análisis se realiza a través de métodos de proyección de consumo aparente, como el de extrapolación de tendencia, ecuación exponencial y por número de habitantes o clientes. Para estos métodos se debe tener en cuenta las siguientes variables:

    ul.fa-ul.mt-4
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-li.fa-angle-right(style="color:#FE7062;")
        | La información debe presentarse de la forma que más le convenga al proyecto (por zonas, por producto, por tipo o atributo del cliente, etc.).
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-li.fa-angle-right(style="color:#FE7062;")
        | La calidad de la información determina la validez de los resultados de la proyección.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-li.fa-angle-right(style="color:#FE7062;")
        | La elección del método correcto depende de la cantidad y calidad de los antecedentes disponibles.
      li(data-aos="zoom-in")
        i.fas.fa-li.fa-angle-right(style="color:#FE7062;")
        | La efectividad del método se evaluará en función de:
    
    ul.fa-ul.mt-4
      li.mb-2(data-aos="zoom-in-right")
        i.lista-ul__vineta
        | #[strong Precisión:] cualquier error tendrá asociado un costo.
      li.mb-2(data-aos="zoom-in-right")
        i.lista-ul__vineta
        | #[strong Sensibilidad:] debe ser lo suficientemente dinámico o estable para afrontar las discontinuidades del mercado.
      li.mb-2(data-aos="zoom-in-right")
        i.lista-ul__vineta
        | #[strong Objetividad:] la información base para la proyección debe garantizar su validez y oportunidad en una situación histórica.
    
    ul.fa-ul.mt-4
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-li.fa-angle-right(style="color:#FE7062;")
        | La medición de estas proyecciones se hace por medio de métodos cualitativos, series de tiempo y por causales.
    
    p.mt-5(data-aos="zoom-in") Todo esto ayudará a conocer el mercado objetivo, su comportamiento con los cambios y lanzamientos que se hagan.

    Separador.mt-5

    .titulo-segundo
      h2#t_1_1 1.1 Estimación de la demanda
    
    .col-xl-10.m-auto
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/1.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La estimación de la demanda es la predicción de la forma futura de la demanda de un producto. La información con respecto a la demanda futura variará según el producto o servicio ofrecido, y “es esencial para la planificación y programación de la producción, la compra de materias primas, adquisición de las finanzas y la publicidad, y también nos ayuda a ajustar los precios al ofertar un nuevo producto o al iniciar un nuevo negocio; durante un período definido de tiempo” Escuela de Organización Industrial (2012).
    
    p.mt-5(data-aos="zoom-in") La medida de la demanda para un producto o servicio será la cantidad de personas que lo compran o hacen uso del mismo.
    p.mt-4(data-aos="zoom-in") Se hace necesario encontrar un balance entre lo que se produce y lo que se requiere para evitar pérdidas por mal gasto de stock y más cuando se trata de productos perecederos o de rotación baja como por ejemplo los productos que se presentan para compras cada largo periodo de tiempo, es ahí donde se debe estimar el nivel de impacto que puede tener un producto o servicio en el mercado y la cantidad a producir.

    .col-xl-8.m-auto.col-lg-10.mt-5
      .cajon.color-acento-contenido.p-4(style="background-color:#D5F6F5;" data-aos="flip-up")
        p.mb-0(data-aos="zoom-in-up") La FAO, (2005) define su relevancia como “la evaluación de la demanda (existente o potencial) para un servicio o producto propuesto, debe, por lo tanto, ser el primer paso que se tome para determinar si una inversión es factible o no. No determina únicamente la factibilidad general de la inversión y con frecuencia la magnitud de la producción, sino que además puede tener un impacto importante en las características del producto a ser generado, la tecnología aplicada, los insumos que se pueden utilizar y la programación de actividades”.
    
    p.mt-5(data-aos="zoom-in") Los métodos de estimación son variados y sus características acercan a las empresas a relatarlos como medios de trabajo para estimar lo que el mercado requiere, la estimación se hace constantemente, no es viable hacer una sola estimación y creer que el mercado es estático porque no es así, el mercado es dinámico como se ha podido revisar en varios momentos de su formación. 
    p.mt-4(data-aos="zoom-in") Las tareas necesarias para evaluar la demanda del mercado varían, dependiendo del tipo de producto o servicio analizados. Se pueden identificar cuatro categorías generales de bienes y servicios, cada una presenta sus propias características y requiere un enfoque distinto para evaluar la demanda. Estas categorías son:

    h4.mt-5(data-aos="fade-right" style="color:#1A0F91;") Productos básicos no perceptibles

    p.mt-4(data-aos="zoom-in") Esta es la categoría más simple de los productos en términos de evaluación. Las características principales de los productos básicos no perecibles son tres (3) y s muestran en el siguiente recurso:

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.col-xl-11.m-auto(titulo="Primera")
        .col-md-6.mb-4.mb-md-0.col-lg-7
          p Cuentan con mercados establecidos y bien desarrollados con múltiples puntos de compra y venta. En otras palabras, es sencillo encontrar tanto compradores como vendedores, y existen precios estándar para los productos, por lo general a disposición del público.
        .col-md-6.col-lg-5
          figure
            img(src='@/assets/curso/tema1/3.svg')
      .row.col-xl-11.m-auto(titulo="Segunda")
        .col-md-6.mb-4.mb-md-0.col-lg-7
          p Su calidad no sufre un deterioro rápido después de la cosecha o producción; así, un producto que no se vende hoy puede venderse mañana, sin que su calidad se vea afectada. Debido a esto, su almacenamiento es relativamente sencillo y los precios normalmente cambian lentamente de mes a mes.
        .col-md-6.col-lg-5
          figure
            img(src='@/assets/curso/tema1/4.svg')
      .row.col-xl-11.m-auto(titulo="Tercera")
        .col-md-6.mb-4.mb-md-0.col-lg-7
          p Las variaciones de precio al interior de un mercado en particular, reflejan características ampliamente apreciadas del producto (tamaño, color, variedad, calidad, etc.) y no hace distinción acerca del origen del producto. En ocasiones, se establecen parámetros de calidad específicos y a veces legales, que permiten comprender a calidad y otras características afectan los precios, por ejemplo, no más del 5% de los granos rotos.
        .col-md-6.col-lg-5
          figure
            img(src='@/assets/curso/tema1/2.svg')
    
    h4.mt-5(data-aos="fade-right" style="color:#1A0F91;") Productos innovadores o especializados

    p.mt-4(data-aos="zoom-in") Los productos innovadores (por definición) no cuentan con un precio de mercado existente, pues son nuevos, pero se pueden determinar precios posibles basándose en los precios de los productos de la competencia, o basándose en la relación de precios del mercado en donde el producto no existe.

    .col-xl-10.m-auto.mt-5
      .bloque2.bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/5.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los productos especializados pueden incluir productos con ventas limitadas (en donde no hay muchos competidores debido al tamaño reducido del mercado) o pueden ser productos que cuenten con mercados bastante sustanciales. En este caso, a diferencia de los productos básicos, los compradores se fijan en las diferencias en el sabor, calidad y durabilidad que existe entre los productos que están en competencia.
    
    h4.mt-5(data-aos="fade-right" style="color:#1A0F91;") Servicios

    p.mt-4(data-aos="zoom-in") El estudio de la demanda y de las características del mercado aplicado a servicios presenta problemáticas completamente distintas a las del estudio realizado para productos. Los servicios se caracterizan por, sobre todo, por la naturaleza transitoria de su oferta.

    Separador.mt-5

    .titulo-segundo
      h2#t_1_2 1.2 Estimación de la oferta
    
    p(data-aos="zoom-in") Es un elemento fundamental que se requiere para determinar las cantidades, calidad y condición de los recursos ofertados en el mercado para evitar sobreinversión y pérdida de mercancía. Los siguientes son algunos de los factores a tener en cuenta según Sy Corvo (2021) en su destacado artículo ‘Análisis de la oferta’:

    TabsA.color-acento-botones.mt-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Precio del producto")
        p La cantidad que se ofrece de un producto crece acorde a su incremento de precio. Precios más elevados generan mayores ganancias, haciéndolos más interesantes para los oferentes. Sin embargo, los consumidores pueden disminuir la cantidad demandada, generando un exceso de oferta.
        p.mt-4 Esto crea una fuerte competencia, haciendo que el precio disminuya hasta llegar a un punto de equilibrio con un precio determinado. 
        p.mt-4 Si el precio del producto se rebaja, las cantidades ofrecidas se reducen y la demanda aumenta. Esto puede conducir a incrementos en el precio hasta un nuevo equilibrio.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Tecnología")
        p La incorporación de tecnología lleva a la reducción de costos e incrementos en la cantidad producida, dado que se logra una mayor eficiencia.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Disponibilidad de insumos y sus precios")
        p Cuando los insumos son escasos se limita la cantidad de bienes producidos. Igualmente, si su precio aumenta habrá un incremento en el coste del producto del cual forman parte.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Intromisión en el mercado")
        p Al aplicar subsidios e impuestos, el Estado perturba la oferta de los productos. Cualquier impuesto incrementa los costos y por consiguiente, la oferta se contrae. Un subsidio crea el efecto contrario: reduce el costo de producción y aumenta la oferta.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Competencia")
        p En la medida en que aumente la cantidad de empresas en una industria, cada una de estas va a tender a disminuir su oferta.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ambiente competitivo")
        p Un competidor directo es toda empresa que comercialice un producto similar al nuestro en la misma área geográfica. Un competidor indirecto es la empresa que ofrece un producto diferente o sustituto con relación al nuestro.
        p.mt-4 El ambiente competitivo para el análisis de la oferta puede ser uno de los siguientes:
        ol.lista-ol.mt-3
          li 
            span.text-bold 1. 
            | #[strong Oferta competitiva:] los oferentes están en libre competencia. Es tal la cantidad de oferentes del mismo artículo, que su participación en el mercado está determinada por la calidad, el precio y el servicio ofrecido al consumidor.
          li 
            span.text-bold 2. 
            | #[strong Oferta oligopólica:] unos pocos oferentes dominan el mercado y determinan la oferta y los precios. 
          li 
            span.text-bold 3. 
            | #[strong Oferta monopólica:] solo existe un oferente del servicio o producto. Domina el mercado completamente implantando precio, calidad y cantidad. El caso clásico son los monopolios estatales. 

    Separador.mt-5

    .titulo-segundo
      h2#t_1_3 1.3  Métodos de proyección de oferta y demanda
    
    p(data-aos="zoom-in") La proyección de demanda y oferta es un requisito del estudio de los mercados que busca ver la oportunidad y la conveniencia del lanzamiento de un producto a un mercado especial en el que se quiere ingresar con riesgo moderado.
    p.mt-4(data-aos="zoom-in") Es un análisis que se puede hacer por medios de proyección de consumo que aparentemente pronostican el futuro, como el de extrapolación de tendencia, ecuación exponencial que se genera por medio del tamaño de habitantes de un sector que se considera como población objetivo. Los métodos para pronosticar la oferta y la demanda de servicios o de un producto son varios, lo que hace recomendable iniciar por definir cuál es ese mercado objetivo que será el más adecuado, de acuerdo con las características empresariales del producto o servicio antes de hacer la elección de las diferentes opciones. 
    p.mt-4(data-aos="zoom-in") Con este fin y tal como lo dice SERTA #[em Marketing Intelligence Partner] (2019) se dice que se “asegurará una correcta selección del método a fin de continuar con una buena aplicación y un posterior análisis que arroje las prospecciones y pronósticos más acertados a fin de alinear nuestras estrategias y lograr los mejores resultados” y gracias a esto a continuación se presentan los métodos más comunes:

    .col-xl-9.m-auto.mt-5
      ImagenInfografica.infografia1.color-acento-contenido
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/6.svg')
        .tarjeta.color-acento-botones.bg-white.p-3(x="25.5%" y="16%" numero="" style="background-color:#F6F9FF;box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          h5.mb-0(style="color:inherit;") Método 1: Análisis de series temporales
          p.mt-3 El primero de los métodos para pronosticar la oferta y la demanda de un producto es aquel que se basa en el análisis de datos históricos que sirvan para predecir el futuro del mismo, incluyendo:
          ul.lista-ul.mt-3
            li
              i.lista-ul__vineta
              | Tendencias.
            li
              i.lista-ul__vineta
              | Estadísticas.
            li
              i.lista-ul__vineta
              | Factores cíclicos y estacionales.
        .tarjeta.color-acento-botones.bg-white.p-3(x="58.5%" y="16%" numero="" style="background-color:#F6F9FF;box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          h5.mb-0(style="color:inherit;") Método 2: Análisis estadístico
          p.mt-3 Este se distingue porque en lugar de medir la relación entre tiempo y venta, mide la relación entre venta y factores que la pueden afectar. Por lo tanto, este método puede utilizar diferentes sistemas con distintos números de variables, aunque siempre siguiendo un análisis matemático estricto que nos va a arrojar datos duros. Los cuales, a pesar de su naturaleza, suelen ser bastante intuitivos para darnos caminos de acción.
        .tarjeta.color-acento-botones.bg-white.p-3(x="92%" y="16%" numero="" style="background-color:#F6F9FF;box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          h5.mb-0(style="color:inherit;") Método 3: Pruebas de mercado 
          p.mt-3 Este es uno de los métodos para pronosticar la demanda de un producto que no debe confundirse con las investigaciones de mercado iniciales. Pues en este caso las pruebas se realizan con los nuevos productos o servicios ya puestos en sitios de ventas representativos para así, literalmente, probarlos con los compradores potenciales. De esta forma, los resultados que se obtienen suelen ser de los más acertados y valiosos de forma cualitativa, pues acercan nuestro producto a las reacciones reales de su mercado. 
          p.mt-3 Se deberá tener especial cuidado con los cambios en la demanda (pues puede variar bastante entre la inicial y la que se vaya desarrollando). Además de que representa un esfuerzo importante en cuanto a recursos materiales, económicos y humanos.
        .tarjeta.color-acento-botones.bg-white.p-3(x="92%" y="56%" numero="" style="background-color:#F6F9FF;box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          h5.mb-0(style="color:inherit;") Método 4: Opiniones y expectativas de los consumidores
          p.mt-3 Este es otro de los métodos para pronosticar la oferta y la demanda de un producto que se basa en el comportamiento de los usuarios al analizar directamente las respuestas de los clientes en cuanto a:
          ul.fa-ul.mt-3
            li
              i.fas.fa-li.fa-angle-right(style="color:#00BCD4;")
              | Necesidades anticipadas o esperadas.
            li
              i.fas.fa-li.fa-angle-right(style="color:#00BCD4;")
              | Usos proyectados del producto o servicio.
            li
              i.fas.fa-li.fa-angle-right(style="color:#00BCD4;")
              | Deseos de mejora.
            li
              i.fas.fa-li.fa-angle-right(style="color:#00BCD4;")
              | Dependiendo, en gran medida, de la exactitud y honestidad de las respuestas, así como de la experiencia y pericia del personal que lo realice para interpretarlas y usarlas.
        .tarjeta.color-acento-botones.bg-white.p-3(x="92%" y="93%" numero="" style="background-color:#F6F9FF;box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          h5.mb-0(style="color:inherit;") Método 5: Consulta a fuerza de ventas 
          p.mt-3 El quinto de los métodos para pronosticar la oferta y la demanda de un producto es uno que se basa en un grupo completamente distinto de los que ya hemos visto. La propia fuerza de ventas, consultándolos sobre sus estimaciones de venta en períodos específicos. 
          p.mt-3 Eso sí es sumamente importante que estos datos sean ajustados, combinados, comparados y discutidos para así llegar a pronósticos veraces. Pues suelen ser exagerados por el positivismo o las expectativas de los propios vendedores; e, igualmente, se recomienda revalorarlos al menos cada seis (6) meses.
        .tarjeta.color-acento-botones.bg-white.p-3(x="59%" y="93%" numero="" style="background-color:#F6F9FF;box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          h5.mb-0(style="color:inherit;") Método 6: Panel de ejecutivos y directivos
          p.mt-3 El siguiente de los métodos para pronosticar la oferta y la demanda de un producto es otro que también considera la opinión y los datos internos de la empresa. Pero esta vez de parte de sus directivos y ejecutivos, y suele hacerse a través de cuestionarios que incluyen:
          ul.lista-ul.mt-3
            li
              i.fas.fa-check(style="color:#00BCD4;")
              | Información formal y profunda.
            li
              i.fas.fa-check(style="color:#00BCD4;")
              | Opiniones.
            li
              i.fas.fa-check(style="color:#00BCD4;")
              | Intuiciones o corazonadas. 
          p.mt-3 Pues en lo que justamente se basan, es en la experiencia de este tipo de personal, ya que, por lo regular, resulta bastante esclarecedor e indicativo.
        .tarjeta.color-acento-botones.bg-white.p-3(x="25%" y="93%" numero="" style="background-color:#F6F9FF;box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          h5.mb-0(style="color:inherit;") Método 7: Técnica Delphi 
          p.mt-3 Se basa en la opinión de expertos, pero confrontándola mediante una retroalimentación controlada, la cual a grandes rasgos consiste en seis (6) pasos:
          ul.lista-ul.mt-3
            li
              i.fas.fa-check(style="color:#00BCD4;")
              | Definir el tema o problema y el tiempo de aplicación del método.
            li
              i.fas.fa-check(style="color:#00BCD4;")
              | Elaborar el cuestionario (deberá hacerlo un intermediario o moderador).
            li
              i.fas.fa-check(style="color:#00BCD4;")
              | Definir el panel de expertos con características adecuadas de competencia, experiencia, capacidad de análisis, disponibilidad y cualquier otro criterio necesario. 
            li
              i.fas.fa-check(style="color:#00BCD4;")
              | Distribuir el cuestionario e iniciar la primera vuelta. 
            li
              i.fas.fa-check(style="color:#00BCD4;")
              | Obtener respuestas, tabularlas y emplear estadística según las necesidades (promedio, rango, desviación estándar, máximos, mínimos, etc.) para luego socializar y comparar los resultados.
            li
              i.fas.fa-check(style="color:#00BCD4;")
              | Realizar segunda vuelta, en la cual, se puede elaborar y aplicar un nuevo cuestionario más específico basado en las respuestas de la primera.
    
    p.mt-5(data-aos="zoom-in") De esta forma, se trata de obtener una realidad acertada, buscando la famosa “media” que con una buena proyección de expertos puede ser cercana a la realidad.

    Separador.mt-5

    .titulo-segundo
      h2#t_1_4 1.4  Datos históricos proyección de la demanda

    p(data-aos="zoom-in") El objetivo de hacer una demanda histórica es prever por medio de estadística un comportamiento del consumo con los datos que se dieron en tiempo anterior; es decir, cómo fue el comportamiento previo de la demanda del producto o servicio, inclusive funciona saber si sirven las intenciones de compra. Este análisis funciona para productos que ya estén en el mercado y para productos por salir.
    p.mt-4(data-aos="zoom-in") La base de esto es pensar que la historia se puede repetir en el tiempo y se puede pronosticar por ese medio gracias a esos eventos previos, el tiempo y la estadística pueden funcionar para predecir el futuro. Es necesario entender que este es un análisis de naturaleza cuantitativa y los tiempos dan para el uso de los modelos matemáticos y estadísticos, como las herramientas de pronósticos. Se tiene por experiencia que estos elementos sirven mejor en periodos menores a los 6 meses siempre y cuando haya sido medido un espacio de tiempo promedio normal sin alteraciones sociales como lo son las pandemias y los paros o algún evento extraordinario, se requiere tener periodos de tiempo casi homogéneos para facilitar el pronóstico por este medio. 
    p.mt-4(data-aos="zoom-in") Existen varios métodos de series de tiempo o modelos que se pueden trabajar, son por general los modelos constantes, de tendencia y estacional, que dependiendo de los datos históricos y los fundamentos de los procesos son mejor vistos y más fáciles de usar. Para cada modelo, se cuenta con uno o varios tipos de uso o pronóstico, que incluyen promedios, promedios móviles, suavizado exponencial, doble suavizado exponencial, etc., tal como se muestra a continuación:
        
    .cont_1_1.mt-5.pt-5.pb-5
      .col-xl-10.m-auto
        figure
          img(src="@/assets/curso/tema1/7.svg" data-aos="zoom-in-up")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_5 1.5 Regresión lineal
    
    p(data-aos="zoom-in") Se puede definir como regresión lineal la relación funcional entre dos o más variables correlacionadas y en este caso es usada para predecir una variable que depende de la otra al estilo de la regla de tres, la relación se desarrolla a partir de una variable o constante que se tiene en observación y se debe representar primero gráficamente para observar con mayor facilidad el alza o la baja de los datos, inclusive funciona para ver si los datos se cruzan en algún momento. La regresión lineal hace referencia al tipo especial de regresión en la que se relacionan varias variables entre sí y casi en todos los casos se puede usar esta fórmula para expresarla:

    .col-lg-4.col-md-10.m-auto
      .mt-5.text-center.p-3.m-auto(style="background-color:#C8D9FC;border-radius:10px;" data-aos="flip-up")
        span(style="font-size:32px;font-weight:bold;") Y= a +bX
      
      p.mt-5.mb-0(data-aos="zoom-in") Donde:
      p.mb-0(data-aos="zoom-in") #[strong Y:] es el valor de la variable dependiente a resolver 
      p.mb-0(data-aos="zoom-in") #[strong a:] es la ordenada en el origen de Y (una variable o constante)
      p.mb-0(data-aos="zoom-in") #[strong b:] inclinación 
      p.mb-0(data-aos="zoom-in") #[strong X:] variable independiente

    p.mt-5(data-aos="zoom-in") La regresión lineal es útil en proyecciones a largo plazo en planeaciones y se puede usar tanto para la proyección de serie de tiempos como en relaciones de proyección causal. Se debe tener en cuenta que si la variable dependiente (normalmente el eje vertical de la gráfica) cambia como resultado del tiempo (representado como eje horizontal de la gráfica) se trata de análisis de la serie de tiempos. Mientras que, si la variable cambia debido a la variación de otra, se trata de relación causal.

    Separador.mt-5

    .titulo-segundo
      h2#t_1_6 1.6 Herramientas para la simulación de la oferta y la demanda
    
    p(data-aos="zoom-in") Debido a la dinámica propia del mercado, varios de los modelos de pronóstico desarrollados en relación a la predicción de la oferta y la demanda presentan herramientas tecnológicas que facilitan la simulación en los procesos de oferta y demanda.
    p.mt-4(data-aos="zoom-in") Entre los simuladores más representativos se tiene:

    .row.mt-5
      .col-lg.mb-4.mb-lg-0.pe-lg-0
        .h-100.p-4.p-md-5(style="background-color:#1A0F91;border-radius:15px 0px 0px 15px;")
          h3.text-white.text-center(data-aos="zoom-in") #[em Sales and Operations Planning (S&OP)]
          p.mt-5.text-white(data-aos="zoom-in") Integra componentes operacionales del negocio, buscando un enfoque en el consumidor que esté alineado con las estrategias de los gerentes. El propósito de esto es balancear el abastecimiento y la demanda gracias a la comunicación y toma de decisiones.
          p.mt-4.text-white(data-aos="zoom-in") El objetivo principal de S&OP, es facilitar el alineamiento organizacional dentro de las empresas entre las metas y los planes de negocio, y a su vez permitir atención rápida a los movimientos del mercado.
      .col-lg.mb-4.mb-lg-0.ps-lg-0
        .h-100.p-4.p-md-5(style="background-color:#FE7062;border-radius:0px 15px 15px 0px;")
          h3.text-white.text-center(data-aos="zoom-in") Patrón de diseño modelo, vista, controlador (MVC)
          p.mt-5.text-white(data-aos="zoom-in") Este patrón de diseño de #[em.text-white software] tiene como objetivo crear un puente entre el modelo que existe en la mente de las personas y el modelo digital que existe en los datos o computadores de las empresas. El patrón MVC divide el #[em.text-white software] en 3 categorías, 1) el modelo principal del #[em.text-white software], 2) la interacción con el usuario y 3) la presentación de la información dentro del modelo principal.
          p.mt-4.text-white(data-aos="zoom-in") MVC como patrón asigna responsabilidades a los individuos y grupo de personas que están inmersas en las categorías mencionadas con anterioridad es por eso que se definen los siguientes roles para estas personas y equipos:
          ul.fa-ul.mt-3
            li.mb-2.text-white(data-aos="zoom-in-right")
              i.lista-ul__vineta.fa-li
              | #[strong.text-white Desarrolladores:] quienes se encargan de realizar la lógica (modelo) de la herramienta #[em.text-white software].
            li.mb-2.text-white(data-aos="zoom-in-right")
              i.lista-ul__vineta.fa-li
              | #[strong.text-white Diseñadores:] responsables de la forma o apariencia (visual) que tendrá el #[em.text-white software] (programa) ante los suscriptores y usuarios.
            li.mb-2.text-white(data-aos="zoom-in-right")
              i.lista-ul__vineta.fa-li
              | #[strong.text-white Integradores:] serán los encargados de revisar la lógica con la apariencia y funcionamiento del programa (#[em.text-white software]). #[br] Deben establecer la relación entre el modelo y la interfaz de usuario, es decir que se revisa a manera de controlador de la (controlador).
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_7 1.7 Punto de equilibrio entre oferta y demanda
    
    p(data-aos="zoom-in") Tal como lo expresa Acemoglu, Laibson & List (2017) los mercados competitivos convergen hacia el precio en el que coinciden la cantidad ofrecida y la demandada, es decir, la oferta y la demanda; como la curva de la demanda es descendente y la de la oferta es ascendente, se cruzan en un solo punto, al que llaman #[strong equilibrio]. El precio correspondiente al punto de cruce se denomina #[strong precio de equilibrio], que es el precio en que coinciden la oferta y la demanda. A ese precio hay un comprador para cada unidad que se ofrece en el mercado. La cantidad correspondiente al punto de cruce se denomina #[strong cantidad de equilibrio]. 
    p.mt-4(data-aos="zoom-in") Hay un punto en donde se cruzan las curvas de oferta y demanda, a ese punto se le conoce como #[strong punto de equilibrio del mercado] y muestra cuando el precio coincide entre la oferta y la demanda, se puede entender que la cantidad ofrecida y la cantidad demandada del bien es la misma. Tal como lo dice Sevilla (2015) “el precio correspondiente a ese punto que es llamado precio de equilibrio. La cantidad que se ofrece y se demanda, en otras palabras, la cantidad del bien que se intercambia, es llamada cantidad de equilibrio”. Una figura como la siguiente sirve como referencia de esa relación y punto de equilibrio:

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 1
      span Representación gráfica de la ley de oferta y demanda

    .col-xl-4.m-auto.col-lg-6.mt-5
      figure
        img(src="@/assets/curso/tema1/8.svg" data-aos="zoom-in-up")
    
    p.mt-5(data-aos="zoom-in") Con la revisión de estos conceptos los empresarios entienden que controlar estas variables es la teoría del trabajo proyectual y nace la pregunta que abre un gran debate: ¿Es posible alcanzar el punto de equilibrio? Y la respuesta es sí, ese es el sueño de cada empresa y en el mejor de los casos sacar ventaja de este punto de equilibrio con relación al tiempo; pero se debe hablar de dos elementos que se presentan al mismo tiempo y  que requieren tener relación, estos elementos son:

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.col-xl-11.m-auto(titulo="I. Oferta en exceso")
        p Este fenómeno conocido como exceso de oferta, es un proceso en el que se los productos con precios por encima del precio de equilibrio y pasa por lo general cuando la cantidad de producto ofrecida es mayor a la que el mercado requiere o demandada, los empresarios por lo general intentan controlar este fenómeno bajando los precios a los que están sus productos para así aumentar ventas.
      .row.col-xl-11.m-auto(titulo="II. Demanda en exceso")
        p Por otro lado, se tiene el exceso de la demanda y se conoce como la escasez de productos, significa que el precio del bien ofrecido está por debajo del precio de equilibrio, la cantidad requerida es mayor que la cantidad ofertada de este modo se tiene que los productos tienden a aumentar los precios hasta un punto que equilibre el mercado. El ejemplo más común de esto es cuando los tapabocas escasearon en el momento del inicio de la pandemia del 2020, llegando a precios altos por la escases y la necesidad por parte de las personas de estos artículos.




   



      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.bloque-texto-g--inverso .bloque-texto-g__img
  background-color: #9AE9E7
  background-size: 400px
  background-repeat: no-repeat
.acordion .tarjeta.tarjeta--azul
  background-color: #E6FAF9
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #CCF4F3
.bloque2.bloque-texto-g--inverso .bloque-texto-g__img
  background-color: #D3E1FD
.tabs-a__tab
  background-color: #E8E8E8
.infografia1 .img-infografica__item__dot
  padding: 1.8rem
  left: -25px
.cont_1_1
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background-color: #F4FCFF
</style>
