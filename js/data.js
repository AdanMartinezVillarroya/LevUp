// Datos demo (PEC3): catálogo mínimo para demostrar flujo funcional

window.LEVUP_DATA = {
    domains: {
      programacion: {
        name: "Programación",
        capsules: [
          { id: "prog-1", title: "Ejemplo 1", info: "Información", tema: "Variables" },
          { id: "prog-2", title: "Ejemplo 2", info: "Información", tema: "Condicionales" },
          { id: "prog-3", title: "Ejemplo 3", info: "Información", tema: "Bucles" },
          { id: "prog-4", title: "Ejemplo 4", info: "Información", tema: "Funciones" },
          { id: "prog-5", title: "Ejemplo 5", info: "Información", tema: "Arrays" },
        ],
        temarioIntro: {
          title: "Programación · Temario",
          desc: "Breve introducción del temario de programación (demo)."
        },
        temas: [
          { id: "t1", title: "Tema 1", desc: "Introducción y conceptos base." },
          { id: "t2", title: "Tema 2", desc: "Variables y tipos de datos." },
          { id: "t3", title: "Tema 3", desc: "Condicionales y lógica." },
          { id: "t4", title: "Tema 4", desc: "Bucles y repetición." },
          { id: "t5", title: "Tema 5", desc: "Funciones y modularidad." },
        ],
        actividad: {
          title: "Ejemplo actividad",
          enunciado: "¿Cuál de estas opciones describe mejor una variable en programación?",
          answers: [
            { id: "a1", text: "Un espacio de memoria donde guardamos un valor.", correct: true,  why: "Una variable almacena datos que pueden cambiar." },
            { id: "a2", text: "Un tipo de archivo del sistema operativo.",     correct: false, why: "No es un archivo; es un elemento del lenguaje." },
            { id: "a3", text: "Un diseño visual de una interfaz.",            correct: false, why: "Eso corresponde a UI/UX, no a variables." },
          ]
        }
      },
  
      comunicacion: {
        name: "Comunicación",
        capsules: [
          { id: "com-1", title: "Ejemplo 1", info: "Información", tema: "Escucha activa" },
          { id: "com-2", title: "Ejemplo 2", info: "Información", tema: "Comunicación escrita" },
          { id: "com-3", title: "Ejemplo 3", info: "Información", tema: "Presentaciones" },
        ],
        temarioIntro: { title: "Comunicación · Temario", desc: "Breve introducción del temario (demo)." },
        temas: [
          { id: "t1", title: "Tema 1", desc: "Bases de comunicación efectiva." },
          { id: "t2", title: "Tema 2", desc: "Claridad y estructura del mensaje." },
          { id: "t3", title: "Tema 3", desc: "Comunicación digital profesional." },
        ],
        actividad: {
          title: "Ejemplo actividad",
          enunciado: "¿Qué mejora más la claridad en un mensaje digital?",
          answers: [
            { id: "a1", text: "Estructurar el texto con frases cortas y directas.", correct: true,  why: "La estructura reduce ambigüedad." },
            { id: "a2", text: "Usar muchas abreviaturas.",                         correct: false, why: "Puede generar confusión." },
            { id: "a3", text: "Mezclar varios temas a la vez.",                    correct: false, why: "Reduce la comprensión." },
          ]
        }
      },
  
      marketing: {
        name: "Marketing",
        capsules: [
          { id: "mkt-1", title: "Ejemplo 1", info: "Información", tema: "Embudo" },
          { id: "mkt-2", title: "Ejemplo 2", info: "Información", tema: "SEO básico" },
        ],
        temarioIntro: { title: "Marketing · Temario", desc: "Breve introducción del temario (demo)." },
        temas: [
          { id: "t1", title: "Tema 1", desc: "Fundamentos del marketing digital." },
          { id: "t2", title: "Tema 2", desc: "SEO y visibilidad." },
        ],
        actividad: {
          title: "Ejemplo actividad",
          enunciado: "¿Qué es un CTA en marketing digital?",
          answers: [
            { id: "a1", text: "Una llamada a la acción que guía al usuario.", correct: true,  why: "CTA = Call To Action." },
            { id: "a2", text: "Un tipo de anuncio offline.",                  correct: false, why: "No define el canal." },
            { id: "a3", text: "Una métrica de rendimiento.",                  correct: false, why: "No es una métrica, es un elemento." },
          ]
        }
      },
  
      creatividad: {
        name: "Creatividad",
        capsules: [
          { id: "cre-1", title: "Ejemplo 1", info: "Información", tema: "Ideación" },
          { id: "cre-2", title: "Ejemplo 2", info: "Información", tema: "Moodboard" },
        ],
        temarioIntro: { title: "Creatividad · Temario", desc: "Breve introducción del temario (demo)." },
        temas: [
          { id: "t1", title: "Tema 1", desc: "Procesos de ideación." },
          { id: "t2", title: "Tema 2", desc: "Referencias y exploración visual." },
        ],
        actividad: {
          title: "Ejemplo actividad",
          enunciado: "¿Qué es un moodboard?",
          answers: [
            { id: "a1", text: "Un panel visual de referencias e inspiración.", correct: true,  why: "Sirve para definir estilo y dirección." },
            { id: "a2", text: "Un documento legal de marca.",                  correct: false, why: "No tiene función legal." },
            { id: "a3", text: "Un código de programación.",                    correct: false, why: "No está relacionado con código." },
          ]
        }
      }
    }
  };
  