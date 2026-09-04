import { Persona, MatchChatPreview, Testimonial, FeatureItem } from '../types';

export const PERSONAS: Persona[] = [
  {
    id: 'sofia',
    name: 'Sofia',
    age: 25,
    profession: 'Abogada',
    tagline: 'Mente afilada, cero paciencia para el aburrimiento',
    bio: 'Litigante de día, catadora de café de especialidad de noche. Si vas a abrir con un "hola perdida", ni lo intentes. Convénceme con humor inteligente o una buena polémica.',
    difficulty: 'Avanzado',
    archetype: 'La Intelectual Sarcástica',
    auraBonus: '+120 Carisma',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    badges: ['Argumentación', 'Pruebas de marco', 'Sarcasmo sutil'],
    chatSnippet: {
      user: '¿Siempre eres tan formal o solo cuando estás perdiendo un debate?',
      ai: 'Ja, depende de cuánto me divierta ver al otro intentar tener la razón. Tú qué crees? 😉',
      auraScore: 94,
      tip: 'Excelente toque lúdico que rompe su postura rígida sin ser irrespetuoso.'
    },
    samplePrompts: [
      {
        text: '¿Eres de las que demandan o de las que concilian en la primera cita?',
        type: 'alpha',
        auraImpact: 25,
        feedback: 'Calibración perfecta: juegas con su profesión con picardía y confianza.',
        reply: 'Concilio solo si el café es digno de un tratado de paz. ¿Cuál es tu mejor argumento para que no pida la cuenta en 10 minutos? 😏'
      },
      {
        text: 'Hola Sofia que guapa eres, cómo estás hoy?',
        type: 'simp',
        auraImpact: -15,
        feedback: 'Demasiado genérico. 40 chicos le dicen lo mismo cada hora. Pierdes su interés rápido.',
        reply: 'Hola. Bien gracias. (Responde en frío)'
      },
      {
        text: 'Apuesto a que fuera de los tribunales tienes gustos culposos imperdonables.',
        type: 'alpha',
        auraImpact: 20,
        feedback: 'Curiosidad y complicidad instantánea sin sonar adulador.',
        reply: 'Jajaja no tienes idea. Si te confieso mi playlist de reggaeton viejo me quitan la cédula profesional.'
      }
    ]
  },
  {
    id: 'sabine',
    name: 'Sabine',
    age: 25,
    profession: 'Instructora de yoga',
    tagline: 'Vibra tranquila, pero con detector de falsedad infalible',
    bio: 'Respiro hondo, practico vinyasa y huyo de las personas apresuradas. Busco conversaciones que fluyan sin esfuerzo, cero poses forzadas.',
    difficulty: 'Intermedio',
    archetype: 'La Zen Auténtica',
    auraBonus: '+90 Conexión',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
    badges: ['Conexión Emocional', 'Escucha Activa', 'Lifestyle'],
    chatSnippet: {
      user: 'Transmitir tanta paz debe ser agotador... ¿cuál es tu forma secreta de descontrolarte?',
      ai: 'Jajaja pizza de cuatro quesos a medianoche y rock pesado en el auto. No todo es incienso.',
      auraScore: 88,
      tip: 'Polarización positiva: contrastar su imagen zen con su lado divertido.'
    },
    samplePrompts: [
      {
        text: 'Transmitir tanta paz debe ser agotador... ¿cuál es tu forma secreta de descontrolarte?',
        type: 'alpha',
        auraImpact: 22,
        feedback: 'Cuestionas su etiqueta pública y creas intriga instantánea.',
        reply: 'Jajaja me descubriste. A veces pongo rock pesado en la ducha después de meditar una hora. ¿Tú también tienes dos personalidades?'
      },
      {
        text: 'Namaste! Qué linda foto, te ves súper tranquila.',
        type: 'neutral',
        auraImpact: 5,
        feedback: 'Aceptable pero predecible. No genera chispa de interacción.',
        reply: 'Gracias! Sí, intento mantener la calma.'
      }
    ]
  },
  {
    id: 'josephine',
    name: 'Joséphine',
    age: 23,
    profession: 'Enfermera',
    tagline: 'Turnos intensos, carcajadas fáciles y energía pura',
    bio: 'Si sobrevivo a guardias nocturnas en urgencias, puedo sobrevivir a tus chistes malos. Adicta a los memes, café doble y planes espontáneos.',
    difficulty: 'Principiante',
    archetype: 'La Divertida & Espontánea',
    auraBonus: '+105 Dinamismo',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop',
    badges: ['Humor Rápido', 'Banter Callejero', 'Espontaneidad'],
    chatSnippet: {
      user: 'Dicen que las enfermeras tienen el mejor sentido del humor negro... a ver si estás a la altura.',
      ai: 'Ten cuidado con lo que deseas, que mi paciencia con los pacientes dramáticos es de 2 segundos 😂',
      auraScore: 92,
      tip: 'Reto directo y desenfadado que activa su espíritu competitivo.'
    },
    samplePrompts: [
      {
        text: 'Dicen que las enfermeras tienen el mejor sentido del humor negro... a ver si estás a la altura.',
        type: 'alpha',
        auraImpact: 24,
        feedback: 'Provocación juguetona. A las mujeres con trabajos exigentes les encanta el juego de ingenio.',
        reply: 'Uff, con decirte que después de 12 horas en guardia me río hasta de las peores tragedias jaja. A ver, empieza tú a ver quién aguanta más!'
      },
      {
        text: 'Debe ser duro tu trabajo, pobrecita...',
        type: 'simp',
        auraImpact: -18,
        feedback: 'Victimización o condescendencia. Mata el atractivo.',
        reply: 'Es mi trabajo normal, no me quejo.'
      }
    ]
  },
  {
    id: 'yaritza',
    name: 'Yaritza',
    age: 22,
    profession: 'Enfermera',
    tagline: 'Mirada coqueta, pero difícil de impresionar',
    bio: 'Me gustan los hombres con iniciativa real y seguridad. Si vas a dudar tres días antes de invitarme a salir, ya perdiste tu turno.',
    difficulty: 'Modo Desafío',
    archetype: 'La Coqueta Exigente',
    auraBonus: '+140 Dominio',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop',
    badges: ['Filtro de Seguridad', 'Tensión Sexual', 'Iniciativa'],
    chatSnippet: {
      user: 'Me caes bien, pero te advierto que soy de los que piden postre antes de ver el menú.',
      ai: 'Atrevido... eso me gusta. Aunque tendrías que demostrar que tienes tan buen gusto como dices.',
      auraScore: 96,
      tip: 'Muestra alta audacia y desapego al resultado.'
    },
    samplePrompts: [
      {
        text: 'Tienes cara de que sabes exactamente qué quieres, pero te haces la difícil para ver si el otro aguanta.',
        type: 'alpha',
        auraImpact: 28,
        feedback: 'Lectura en frío impecable. Genera validación indirecta e intriga.',
        reply: 'Jajaja ¿me estás psicoanalizando tan temprano? Puede que tengas algo de razón... pero te va a costar descubrir el resto.'
      },
      {
        text: 'Hola hermosa, me encantas. ¿Cuándo salimos?',
        type: 'simp',
        auraImpact: -25,
        feedback: 'Acelerado, sin tensión previa ni calibración. Visto y bloqueo mental.',
        reply: 'Tranquilo vaquero, ni sé quién eres aún.'
      }
    ]
  }
];

export const MATCHES_PREVIEW: MatchChatPreview[] = [
  {
    id: '1',
    name: 'Lison',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop',
    time: 'ahora',
    lastMessage: 'Uy esa pregunta me encanta jaja. Me gusta mucho la foto de calle, gente en su día a día sin poses, y también...',
    unreadCount: 2,
    online: true,
    statusIcon: 'leaf'
  },
  {
    id: '2',
    name: 'Manon',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    time: '30m',
    lastMessage: '¿Tú qué clase de personas defiendes o qué problemas legales atiendes?',
    online: false,
    statusIcon: 'fire'
  },
  {
    id: '3',
    name: 'Giselle',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop',
    time: '31m',
    lastMessage: 'Es más de ventas, entonces sí salgo mucho, la verdad los fines de semana...',
    online: false,
    statusIcon: 'fire'
  },
  {
    id: '4',
    name: 'Odalys',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
    time: '1d',
    lastMessage: 'Te entiendo, el mero miércoles y ya con hambre ¿Y qué se te antoja hoy? Yo ando pensando en un pozolito...',
    online: true,
    statusIcon: 'leaf'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'zero-rejection',
    title: 'Cero Riesgo Social',
    subtitle: 'El gimnasio de labia sin consecuencias',
    description: 'En las apps reales, un mal mensaje te quema un match para siempre. En Trynder puedes probar 50 aperturas distintas, cometer errores tontos y descubrir qué frases realmente disparan la atracción.',
    metric: '100% Seguro',
    tag: 'Sin Juicios',
    iconName: 'ShieldCheck'
  },
  {
    id: 'aura-feedback',
    title: 'Medidor de Aura & Calibración',
    subtitle: 'Retroalimentación táctica en cada respuesta',
    description: 'Nuestra IA analiza si sonaste inseguro, necesitado ("simp"), aburrido o si proyectaste ingenio, marco masculino y carisma genuino. Sabrás exactamente por qué te responderían en la vida real.',
    metric: '+94% Precisión',
    tag: 'Algoritmo Real',
    iconName: 'Zap'
  },
  {
    id: 'diverse-archetypes',
    title: 'Perfiles con Personalidad Real',
    subtitle: 'No son bots genéricos, tienen criterio',
    description: 'Desde la abogada que te pone a prueba con sarcasmo hasta la enfermera extrovertida o la chica distante que solo responde a la originalidad. Aprende a adaptarte a cualquier dinámica femenina.',
    metric: '15+ Arquetipos',
    tag: 'Hiperrealismo',
    iconName: 'Users'
  },
  {
    id: 'date-closer',
    title: 'Especialización en Cierre de Citas',
    subtitle: 'Pasa del chat a la vida real con naturalidad',
    description: 'Aprende cuándo hacer la transición a WhatsApp o Instagram, cómo sugerir una salida sin sonar insistente y cómo identificar los momentos clave donde ella ya tiene interés confirmado.',
    metric: '3.8x Más Citas',
    tag: 'Resultados Reales',
    iconName: 'Flame'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mateo R.',
    handle: '@mateo_r98',
    age: 26,
    city: 'Madrid',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    headline: 'De tener 0 respuestas a no dar abasto en mi WhatsApp',
    story: 'Siempre me pasaba lo mismo: hacía match con chicas guapísimas y me quedaba en blanco o les ponía "hola linda qué tal tu día" y me dejaban en visto. Trynder me enseñó a crear intriga desde el primer mensaje.',
    statBefore: '5% tasa de respuesta',
    statAfter: '78% respuesta con risas',
    rating: 5
  },
  {
    id: '2',
    name: 'Ignacio G.',
    handle: '@nacho_tech',
    age: 29,
    city: 'Buenos Aires',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    headline: 'Es como hacer sparring antes de subir al ring',
    story: 'Soy tímido y sobrepensaba cada mensaje durante 40 minutos. Con Trynder chateé con Sofía y Sabine hasta que se me quitó la tensión. Ayer invité a salir a una chica que me gustaba y salió perfecto.',
    statBefore: 'Ansiedad al escribir',
    statAfter: 'Conversación fluida y natural',
    rating: 5
  },
  {
    id: '3',
    name: 'Carlos V.',
    handle: '@carlos_v22',
    age: 24,
    city: 'Ciudad de México',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop',
    headline: 'La métrica de Aura te abre los ojos de golpe',
    story: 'Creía que estaba siendo súper caballeroso y el simulador me demostró que sonaba completamente aburrido y adulador. Cambié el chip, empecé a usar más humor y la diferencia en el mundo real es brutal.',
    statBefore: 'Visto permanente',
    statAfter: '3 citas el primer mes',
    rating: 5
  }
];

export const FAQS = [
  {
    q: '¿Qué es exactamente Trynder?',
    a: 'Trynder es un simulador de citas y conversaciones impulsado por inteligencia artificial para hombres. Te permite interactuar con perfiles de mujeres hiperrealistas con distintas personalidades, poner a prueba tus abridores, practicar el flirteo y recibir feedback instantáneo de tu calibración social.'
  },
  {
    q: '¿Por qué las IAs no responden como un robot aburrido?',
    a: 'Están configuradas con personalidades humanas complejas: usan expresiones naturales, humor sutil, dobles sentidos, prueban tu seguridad (shit-tests) y evalúan tu congruencia tal como lo haría una chica en la vida real o en apps de citas.'
  },
  {
    q: '¿Qué mide el puntaje de Aura?',
    a: 'El Aura es tu índice de atractivo conversacional. Mide factores críticos: originalidad del mensaje, marco masculino, humor, calibración de tono (no sonar ni grosero ni arrastrado), e iniciativa para liderar la charla.'
  },
  {
    q: '¿Necesito pagar para empezar a entrenar?',
    a: 'No. Puedes entrar y probar la experiencia básica gratis para ver el nivel de realismo y empezar a pulir tu labia de inmediato.'
  }
];
