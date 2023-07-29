export default {
  global: {
    componenteFormativo: 'Proyección y requerimientos de compras',
    descripcionCurso:
      'Las compras son la necesidad de los actores del proceso logístico, por un lado están quienes necesitan comercializar y por otro quienes requieren cada producto, eso se entiende como un mercado y en este se pueden proyectar algunos de esos movimientos; como por ejemplo, proyectar el impacto que un producto va a tener en un respectivo mercado y cómo será su interacción con el cliente objetivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Proyectar la oferta y demanda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estimación de la demanda',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estimación de la oferta',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Métodos de proyección de oferta y demanda',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Datos históricos proyección de la demanda',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Regresión lineal',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Herramientas para la simulación de la oferta y la demanda',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Punto de equilibrio entre oferta y demanda',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Interpretación de pronósticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estadística descriptiva',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Planeación de pronósticos según políticas de la organización',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Evaluar el comportamiento de la empresa frente al mercado – <em>Benchmarking</em>',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Planeación, pronóstico y reabastecimiento colaborativo – CPFR',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Herramientas para la proyección de pronósticos de oferta y demanda',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.7. Punto de equilibrio entre oferta y demanda',
      referencia:
        'Acemoglu, D. Laibson, D. y List, J. A. (2017). <em>Economía</em>. Antoni Bosch editor.',
      tipo: 'Libro Digital Economía',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/129484',
    },
  ],
  glosario: [
    {
      termino: 'Bien normal',
      significado:
        'Bien cuya cantidad demandada aumenta cuando se produce un aumento en la renta del consumidor, manteniéndose todo lo demás constante. Su elasticidad renta es positiva.',
    },
    {
      termino: 'Bienes sustitutivos',
      significado:
        'Bienes que pueden ser utilizados alternativamente para satisfacer la misma necesidad y que presentan una elasticidad cruzada positiva.',
    },
    {
      termino: 'Demanda',
      significado:
        'Relación entre el precio de un bien y la cantidad demandada.',
    },
    {
      termino: 'Equilibrio',
      significado:
        'Situación en la que no existe ninguna tendencia al cambio porque se cumplen los planes de compra y venta de demandantes y oferentes, de modo que el mercado se vacía.',
    },
    {
      termino: 'Mercado competitivo',
      significado:
        'Mercado en el que concurren muchos compradores y vendedores de tal manera que la influencia que ejerce cada uno de ellos sobre los precios es insignificante.',
    },
    {
      termino: 'Oferta',
      significado:
        'Relación entre el precio de un bien y la cantidad que del mismo están dispuestos y pueden ofrecer los productores.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acemoglu, D., Laibson, D. & List, J. A. (2017). <em>Economía</em>. Madrid: Antoni Bosch editor.',
      link: '',
    },
    {
      referencia: 'Economipedia. (2021).',
      link: 'https://economipedia.com/',
    },
    {
      referencia: 'Escuela de Organización Industrial. (2012).',
      link:
        'https://www.eoi.es/blogs/scm/2012/12/18/tecnica-o-metodo-de-estimacion-de-demanda-mas-efectiva-4/',
    },
    {
      referencia:
        'FAO. (2005). <em>Formulación y Análisis detallado de proyectos</em>. Roma: FAO.',
      link: 'http://www.fao.org/3/a1421s/a1421s00.htm',
    },
    {
      referencia:
        'Hernández, R. C. & Cano, F. M. (2017). <em>La importancia del benchmarking como herramienta para incrementar la calidad en el servicio en las organizaciones</em>. 31 - 42.',
      link: '',
    },
    {
      referencia:
        'Hernández, S. (2015). <em>Análisis de Series de Tiempo</em>. CEPAL',
      link: '',
    },
    {
      referencia:
        'Revista Zona Logística. (2018). CPFR: <em>Un proceso colaborativo que se centra en el consumidor</em>.',
      link:
        'https://zonalogistica.com/cpfr-un-proceso-colaborativo-que-se-centra-en-el-consumidor/#:~:text=La%20planeaci%C3%B3n%2C%20pron%C3%B3stico%20y%20reabastecimiento,socios%20de%20la%20cadena%20de',
    },
    {
      referencia:
        'SERTA Marketing Intelligence Partner. (2019). <em>7 mejores métodos para pronosticar la demanda de un producto</em>.',
      link:
        'https://www.serta.com.mx/7-mejores-metodos-para-pronosticar-demanda-de-producto/',
    },
    {
      referencia:
        'Sevilla, A. A. (2015). <em>Ley de oferta y demanda</em>. Economipedia.',
      link: '',
    },
    {
      referencia:
        'Sy Corvo, Helmut. (2021). <em>Análisis de la oferta</em>. Lifeder',
      link: 'https://www.lifeder.com/analisis-oferta/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}