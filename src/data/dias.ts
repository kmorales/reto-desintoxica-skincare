export interface Ingrediente {
  etiqueta: string
  encuentraEn: string
}

export interface Receta {
  tipo: 'casera' | 'compra'
  titulo: string
  descripcion?: string
  ingredientes?: string[]
  pasos?: string[]
  combinaciones?: { nombre: string; formula: string }[]
  alternativas?: string[]
  nota?: string
  dondeConseguir?: string
  porQueEsMejor?: string[]
}

export interface Dia {
  numero: number
  emoji: string
  ingrediente: string
  subtitulo: string
  mensaje: string
  queEs: string
  identificacion: Ingrediente[]
  tarea: string
  receta: Receta
  ctaTexto: string
  frase: string
}

export const dias: Dia[] = [
  {
    numero: 1,
    emoji: '🌿',
    ingrediente: 'Parabenos',
    subtitulo: 'Los conservantes que tu piel no necesita',
    mensaje:
      'Bienvenida al Reto Desintoxica tu Skincare. Durante los próximos 7 días vas a aprender a leer etiquetas, identificar lo que te pasa desapercibido y reemplazarlo por alternativas que realmente nutren tu piel. Empezamos con uno de los más conocidos.',
    queEs:
      'Los parabenos son conservantes sintéticos que se usan en cosmética para alargar la vida útil de los productos. El problema es que el cuerpo los absorbe a través de la piel y los reconoce como estrógenos artificiales, lo que puede alterar el equilibrio hormonal con el uso prolongado.',
    identificacion: [
      { etiqueta: 'Methylparaben', encuentraEn: 'Cremas corporales, lociones, maquillaje' },
      { etiqueta: 'Propylparaben', encuentraEn: 'Productos de cuidado facial, BB creams' },
      { etiqueta: 'Butylparaben', encuentraEn: 'Shampoos, acondicionadores, cremas' },
      { etiqueta: 'Ethylparaben', encuentraEn: 'Protectores solares, bases de maquillaje' },
    ],
    tarea:
      'Toma una crema o loción que uses habitualmente y busca en la lista de ingredientes si alguno termina en -paraben. Anota lo que encuentres.',
    receta: {
      tipo: 'casera',
      titulo: 'Crema corporal express sin parabenos',
      descripcion:
        'Perfecta para empezar porque solo necesitas dos ingredientes. No requiere conservantes porque tiene muy poca agua.',
      ingredientes: [
        '50 g de manteca de karité (en barra o en frasco)',
        '2 cucharadas de aceite de coco extra virgen',
        'Unas gotas de aceite esencial de lavanda (opcional)',
      ],
      pasos: [
        'Derrite la manteca de karité al baño maría o en microondas a temperatura baja (30 segundos, revuelve, repite hasta que esté líquida).',
        'Mezcla con el aceite de coco fuera del fuego.',
        'Agrega el aceite esencial si decides usarlo.',
        'Vierte en un frasco limpio y deja enfriar a temperatura ambiente. No refrigeres.',
        'Aplica en pequeña cantidad sobre piel seca. Rinde bastante.',
      ],
      nota: 'Esta mezcla no tiene agua, por eso no necesita conservantes. Si tu piel es muy grasa, usa solo el aceite de karité sin el coco.',
    },
    ctaTexto:
      'Si esta receta te abrió el apetito por aprender a hacer más productos para tu piel, en mi ebook de jabonería para principiantes hay 10 recetas más con el mismo nivel de detalle y sin complicaciones. Escríbeme si quieres saber más.',
    frase:
      '"Recuerda: el objetivo de estos 7 días no es que lo cambies todo de golpe. Es que empieces a leer lo que pones en tu piel con otros ojos."',
  },
  {
    numero: 2,
    emoji: '🫧',
    ingrediente: 'Sulfatos (SLS / SLES)',
    subtitulo: 'La espuma que irrita más de lo que limpia',
    mensaje:
      'Llegamos al día 2 y hoy hablamos de algo que probablemente tienes en la ducha en este momento.',
    queEs:
      'El Sodium Lauryl Sulfate (SLS) y el Sodium Laureth Sulfate (SLES) son detergentes que generan espuma abundante. El problema es que limpian de forma tan agresiva que eliminan el manto hidrolipídico de la piel: esa capa protectora natural que regula la humedad y protege de las bacterias. El resultado es piel tensa, cuero cabelludo reactivo o cabello reseco que parece pedir más producto.',
    identificacion: [
      { etiqueta: 'Sodium Lauryl Sulfate', encuentraEn: 'Geles de ducha, champús, pasta dental' },
      { etiqueta: 'Sodium Laureth Sulfate', encuentraEn: 'Shampoo, jabón líquido, espuma facial' },
      { etiqueta: 'Ammonium Lauryl Sulfate', encuentraEn: 'Productos para el cabello' },
      {
        etiqueta: 'Sodium Coco Sulfate',
        encuentraEn: "Productos 'naturales' (versión menos agresiva)",
      },
    ],
    tarea:
      'Busca hoy tu champú o gel de ducha y revisa si tiene SLS o SLES en los primeros 5 ingredientes. Mientras más arriba en la lista, mayor concentración.',
    receta: {
      tipo: 'compra',
      titulo: 'Jabón artesanal de glicerina',
      descripcion:
        'Para sustituir el gel de ducha con sulfatos la alternativa más accesible y efectiva es un jabón artesanal de glicerina. A diferencia de los jabones industriales, el jabón artesanal conserva la glicerina natural que se produce durante el proceso de saponificación, lo que lo hace suavizante en lugar de agresivo.',
      porQueEsMejor: [
        'Limpia sin eliminar el manto hidrolipídico',
        'La glicerina atrae la humedad hacia la piel',
        'Sin SLS, SLES ni detergentes sintéticos',
        'Los aromas vienen de aceites esenciales, no de fragancias artificiales',
      ],
      dondeConseguir:
        'En mi tienda encuentras jabones artesanales de glicerina hechos con ingredientes naturales. Escríbeme por DM o al número de contacto y te cuento las opciones disponibles.',
    },
    ctaTexto:
      'Los jabones artesanales también puedes aprenderlos a hacer tú misma. Es más sencillo de lo que parece y el resultado es un producto completamente personalizado para tu piel.',
    frase:
      '"La espuma abundante no es sinónimo de limpieza profunda. Eso es algo que la industria cosmética nos enseñó, no la ciencia."',
  },
  {
    numero: 3,
    emoji: '🌸',
    ingrediente: 'Fragancias Sintéticas',
    subtitulo: 'El aroma que esconde más de lo que muestra',
    mensaje:
      'Día 3. Hoy tocamos uno de los ingredientes más problemáticos precisamente porque es el más escondido.',
    queEs:
      "Cuando en la lista de ingredientes ves la palabra 'Fragrance' o 'Parfum', esa sola palabra puede representar una mezcla de hasta 200 químicos distintos que el fabricante no está obligado a declarar por separado, ya que se protegen como secreto comercial. Entre esos químicos puede haber ftalatos, almizcles sintéticos y otras sustancias que se acumulan en el organismo con el tiempo. Si tienes piel sensible, alergias o dermatitis, las fragancias sintéticas suelen ser el primer sospechoso.",
    identificacion: [
      {
        etiqueta: 'Fragrance / Parfum',
        encuentraEn: 'Casi todos los productos: cremas, jabón, champú, desodorante',
      },
      {
        etiqueta: 'Linalool (sintético)',
        encuentraEn: 'Cremas, perfumes, productos para el cabello',
      },
      { etiqueta: 'Limonene (sintético)', encuentraEn: 'Productos con aroma cítrico' },
      { etiqueta: 'Musk / Almizcle sintético', encuentraEn: 'Perfumes, lociones corporales' },
    ],
    tarea:
      "Revisa hoy 3 productos que uses: uno facial, uno corporal y uno para el cabello. ¿Cuántos tienen 'Fragrance' o 'Parfum' en la lista?",
    receta: {
      tipo: 'casera',
      titulo: 'Roll-on de aroma natural con aceites esenciales',
      descripcion:
        'Un roll-on de aroma personal hecho con aceites esenciales puros te da fragancia sin ningún químico oculto, y puedes personalizarlo completamente según lo que te gusta oler.',
      ingredientes: [
        '1 frasco roll-on de vidrio de 10 ml (tiendas naturistas o Mercado Libre)',
        'Aceite base: jojoba, almendras dulces o girasol (llena el frasco hasta 3/4)',
        '15 a 20 gotas de aceites esenciales a elección',
      ],
      combinaciones: [
        { nombre: 'Relajante', formula: 'lavanda (10) + ylang ylang (5) + naranja dulce (5)' },
        { nombre: 'Fresca', formula: 'menta (8) + limón (7) + eucalipto (5)' },
        { nombre: 'Sensual', formula: 'rosa (8) + pachulí (7) + bergamota (5)' },
        { nombre: 'Energizante', formula: 'naranja (10) + jengibre (5) + pomelo (5)' },
      ],
      pasos: [
        'Agrega el aceite base al frasco hasta 3/4 de su capacidad.',
        'Agrega las gotas de aceites esenciales.',
        'Coloca la bolita y la tapa y agita suavemente.',
        'Aplica en muñecas, cuello o detrás de las orejas.',
        'Espera al menos 24 horas antes de usar para que se integren los aromas.',
      ],
      nota: 'Los aceites esenciales son activos concentrados. No los apliques directo sobre la piel sin diluir. Esta fórmula ya está diluida a una concentración segura.',
    },
    ctaTexto:
      'Trabajar con aceites esenciales es una de las bases de la cosmética natural. Si quieres aprender a incorporarlos en más recetas como jabones y cremas, eso es exactamente lo que enseño en mi ebook para principiantes.',
    frase:
      '"Un producto que huele natural no necesariamente lo es. Aprende a distinguir aroma natural de aroma idéntico al natural: son cosas muy distintas."',
  },
  {
    numero: 4,
    emoji: '⚗️',
    ingrediente: 'Formaldehído y sus liberadores',
    subtitulo: 'El conservante que se esconde con otros nombres',
    mensaje:
      'Día 4. Hoy hablamos de uno de los ingredientes más complicados de identificar porque rara vez aparece con su nombre propio.',
    queEs:
      'El formaldehído es un conservante potente clasificado como carcinógeno por la Agencia Internacional para la Investigación del Cáncer (IARC). En cosmética no siempre aparece como "formaldehyde" en la etiqueta. En cambio, se usan compuestos que lo liberan lentamente dentro del producto para que actúe como conservante. Estos se llaman liberadores de formaldehído y son los que hay que aprender a reconocer.',
    identificacion: [
      {
        etiqueta: 'DMDM Hydantoin',
        encuentraEn: 'Champús, acondicionadores, productos para el cabello',
      },
      { etiqueta: 'Quaternium-15', encuentraEn: 'Cremas, lociones, algunos maquillajes' },
      {
        etiqueta: 'Imidazolidinyl Urea',
        encuentraEn: 'Cremas hidratantes, productos de bebé',
      },
      { etiqueta: 'Diazolidinyl Urea', encuentraEn: 'Productos faciales, cremas corporales' },
      {
        etiqueta: 'Bronopol (2-Bromo-2-Nitropropane)',
        encuentraEn: 'Champús, acondicionadores',
      },
    ],
    tarea:
      'Revisa hoy tu champú o acondicionador. Son los productos donde más frecuentemente aparecen los liberadores de formaldehído. Busca cualquiera de los nombres de la lista.',
    receta: {
      tipo: 'compra',
      titulo: 'Busca estas etiquetas: conservantes naturales',
      descripcion:
        'Recomiendo ir directamente a alternativas ya formuladas por marcas naturales, porque reemplazar conservantes en casa requiere conocimiento técnico específico. Lo que puedes hacer es elegir productos que usen conservantes naturales.',
      alternativas: [
        'Ácido benzoico o benzoato de sodio (de origen natural)',
        'Extracto de semilla de toronja (GSE)',
        'Vitamina E (tocoferol) como antioxidante',
        'Alcohol natural (en concentraciones adecuadas)',
        'Aceites esenciales conservantes: tea tree, romero, lavanda',
      ],
      dondeConseguir:
        'Al buscar champú o productos para el cabello sin estos ingredientes, prioriza marcas de cosmética natural certificada o emprendimientos artesanales que declaren sus conservantes. Siempre puedes escribirle directamente a la marca para preguntar.',
    },
    ctaTexto:
      'Esto que aprendes hoy también te sirve cuando eliges qué ingredientes usar en recetas caseras. En mi ebook explico qué ingredientes son seguros para fórmulas sin agua y cuáles necesitan conservación especial.',
    frase:
      '"No necesitas memorizar todos estos nombres. Con que copies esta lista y la tengas a mano cuando compres ya tienes una ventaja enorme."',
  },
  {
    numero: 5,
    emoji: '🔬',
    ingrediente: 'Ftalatos',
    subtitulo: 'Los invisibles que viajan en el aroma',
    mensaje:
      'Día 5. Este es uno de los más difíciles de detectar porque viajan escondidos bajo otro nombre.',
    queEs:
      "Los ftalatos son un grupo de químicos usados para que los aromas sintéticos duren más tiempo sobre la piel. Son disruptores endocrinos: interfieren con el sistema hormonal y pueden afectar la reproducción y el desarrollo. En muchos países no están obligados a declararse por separado en la etiqueta cosmética, por lo que viajan camuflados dentro de la palabra 'Fragrance' o 'Parfum' que vimos el día 3. Si ya eliminaste los productos con fragancias sintéticas, ya estás reduciendo tu exposición a ftalatos sin saberlo.",
    identificacion: [
      {
        etiqueta: 'DEP (Diethyl phthalate)',
        encuentraEn: "Perfumes, colonias, productos con 'Fragrance'",
      },
      {
        etiqueta: 'DBP (Dibutyl phthalate)',
        encuentraEn: 'Esmaltes de uñas, algunos fijadores del cabello',
      },
      { etiqueta: 'DEHP', encuentraEn: 'Envases plásticos que contactan el producto' },
      {
        etiqueta: 'Fragrance / Parfum',
        encuentraEn: 'Puede contener ftalatos no declarados',
      },
    ],
    tarea:
      'Hoy revisa tus perfumes, colonias o sprays corporales. Si tienen "Fragrance" o "Parfum" en la lista, ya sabes que puede incluir ftalatos. Anota cuántos productos de este tipo usas en una semana.',
    receta: {
      tipo: 'casera',
      titulo: 'Perfume sólido de cera de abeja y aceites esenciales',
      descripcion:
        'Un perfume sólido es una alternativa elegante, práctica y 100% libre de ftalatos. Al ser anidro (sin agua) tampoco necesita conservantes.',
      ingredientes: [
        '10 g de cera de abeja en pastillas o rallada',
        '20 ml de aceite de jojoba o almendras dulces',
        '20 a 30 gotas de aceites esenciales de tu elección',
        'Envase pequeño: cajita de aluminio o frasco de vidrio de tapa rosca',
      ],
      combinaciones: [
        { nombre: 'Floral', formula: 'rosa + geranio + ylang ylang' },
        { nombre: 'Cítrica y limpia', formula: 'bergamota + limón + vetiver' },
        { nombre: 'Madera y misterio', formula: 'sandalwood + pachulí + naranja' },
      ],
      pasos: [
        'Derrite la cera de abeja al baño maría hasta que esté completamente líquida.',
        'Fuera del fuego, agrega el aceite base y mezcla bien.',
        'Cuando la mezcla baje un poco de temperatura (ya no queme), agrega los aceites esenciales.',
        'Vierte rápidamente en el envase porque la cera solidifica rápido.',
        'Deja enfriar sin mover durante 30 minutos.',
        'Para usarlo: frota levemente la superficie con el dedo y aplica en muñecas o cuello.',
      ],
      nota: 'La proporción de cera determina la dureza. Si queda muy duro, la próxima vez usa menos cera. Si queda muy blando, aumenta un poco.',
    },
    ctaTexto:
      'Esta receta es una de las que más les gusta a las personas cuando empiezan con cosmética natural porque el resultado es inmediato y muy satisfactorio. En mi ebook de jabonería para principiantes doy la misma lógica paso a paso.',
    frase:
      '"Tu piel absorbe lo que le pones. Y lo que pones en tu piel entra a tu sangre. Eso no es alarmismo: es fisiología básica."',
  },
  {
    numero: 6,
    emoji: '🧼',
    ingrediente: 'Triclosan',
    subtitulo: 'El antibacterial que hace más daño que bien',
    mensaje:
      'Día 6. Hoy hablamos de un ingrediente que durante años se vendió como beneficioso y que resultó ser todo lo contrario.',
    queEs:
      'El triclosan es un agente antibacterial sintético que se incluyó en jabones, pastas de dientes, desodorantes e incluso ropa. El problema es que los estudios mostraron que no es más efectivo que el jabón común para prevenir infecciones, pero sí altera la microbiota de la piel (el ecosistema de bacterias buenas que nos protegen), contribuye a la resistencia bacteriana y actúa como disruptor hormonal. En muchos países ya está prohibido o restringido en productos de cuidado personal, pero todavía circula.',
    identificacion: [
      {
        etiqueta: 'Triclosan',
        encuentraEn: 'Jabones antibacteriales líquidos, pastas dentales, desodorantes',
      },
      { etiqueta: 'Triclocarban', encuentraEn: 'Jabones de barra antibacteriales' },
      {
        etiqueta: 'Chloroxylenol (PCMX)',
        encuentraEn: 'Algunos jabones líquidos antibacteriales',
      },
    ],
    tarea:
      'Revisa hoy tu pasta dental y tu jabón de manos o de ducha. Son los dos productos donde más frecuentemente aparece el triclosan.',
    receta: {
      tipo: 'compra',
      titulo: 'Jabón artesanal natural',
      descripcion:
        'El jabón artesanal de glicerina es la alternativa más directa al jabón antibacterial con triclosan. Limpia efectivamente sin alterar la microbiota de la piel, que es lo que realmente nos protege de las bacterias patógenas.',
      porQueEsMejor: [
        'Limpieza efectiva sin eliminar la flora bacteriana benéfica',
        'La glicerina humecta mientras limpia',
        'Formulado con aceites esenciales de propiedades naturales (tea tree, lavanda, romero)',
        'Sin triclosan, triclocarban ni cloroxylenol',
        'Biodegradable y menos contaminante para el agua',
      ],
      dondeConseguir:
        'Si quieres conocer las opciones disponibles escríbeme directamente y te cuento según lo que buscas para tu piel.',
    },
    ctaTexto:
      'Y si lo que quieres es aprender a hacerlos tú misma: eso es exactamente de lo que trata mi ebook de jabonería para principiantes. Escríbeme con la palabra EBOOK y te cuento cómo acceder.',
    frase:
      '"La piel sana no necesita que la esterilices. Necesita que la cuides. Hay una diferencia enorme entre las dos cosas."',
  },
  {
    numero: 7,
    emoji: '🌙',
    ingrediente: 'Petrolatos y aceites minerales',
    subtitulo: 'Lo que no nutre pero parece que sí',
    mensaje:
      'Día 7. Llegamos al último día y cerramos con uno de los ingredientes más polémicos del mundo cosmético porque durante décadas se vendió como el mejor hidratante del mercado.',
    queEs:
      'La vaselina (petrolatum), el aceite mineral (mineral oil) y la parafina son derivados del petróleo. Funcionan creando una película oclusiva sobre la piel que frena la pérdida de agua, lo que genera la sensación de hidratación. El problema es que esa película no aporta ningún nutriente real a la piel: no tiene vitaminas, ácidos grasos esenciales ni activos que la alimenten. Solo la sella. En pieles muy secas esa oclusión puede ser útil a corto plazo, pero no resuelve la causa de la resequedad.',
    identificacion: [
      {
        etiqueta: 'Petrolatum / Petroleum Jelly',
        encuentraEn: 'Vaselina, bálsamos de labios, cremas para bebés',
      },
      {
        etiqueta: 'Mineral Oil / Aceite mineral',
        encuentraEn: 'Cremas corporales, desmaquillantes, aceites de bebé',
      },
      {
        etiqueta: 'Paraffinum Liquidum',
        encuentraEn: 'Cremas, lociones, productos capilares',
      },
      { etiqueta: 'Ceresin / Ozokerite', encuentraEn: 'Bálsamos, cremas de consistencia firme' },
    ],
    tarea:
      'El mejor producto para revisar hoy es tu bálsamo de labios o tu vaselina. Son los productos donde el petrolato aparece casi con certeza. Revisa la etiqueta.',
    receta: {
      tipo: 'casera',
      titulo: 'Bálsamo de labios natural con cera de abeja',
      descripcion:
        'El cierre perfecto del reto: una receta muy sencilla, muy satisfactoria y que reemplaza directamente uno de los productos con petrolato más comunes. Al hacerlo tú misma sabes exactamente qué le pones a tu boca.',
      ingredientes: [
        '5 g de cera de abeja en pastillas',
        '10 ml de aceite de almendras dulces (o aceite de coco)',
        '5 ml de manteca de karité',
        '3 gotas de aceite esencial de menta o vainilla (opcional)',
        'Tubos o recipientes pequeños de bálsamo (tiendas naturistas)',
      ],
      pasos: [
        'Derrite la cera de abeja al baño maría.',
        'Agrega el aceite de almendras y la manteca de karité. Mezcla bien hasta integrar.',
        'Retira del fuego y agrega el aceite esencial si decides usarlo.',
        'Vierte rápidamente en los tubos o recipientes porque solidifica pronto.',
        'Deja enfriar completamente (al menos 1 hora) antes de usar o tapar.',
        'Listo. Dura hasta 12 meses guardado en lugar fresco.',
      ],
      nota: 'Si quieres un bálsamo más suave reduce la cera a 4 g. Si lo quieres más firme y sólido para tubo, usa 6 g.',
    },
    ctaTexto:
      'Si este reto te generó ganas de ir más allá y empezar a crear tus propios productos, el camino más accesible para comenzar es la jabonería artesanal con técnica melt & pour. Escríbeme con la palabra EBOOK y te cuento cómo acceder.',
    frase: '"Cuidarte bien empieza por saber qué te estás poniendo."',
  },
]
