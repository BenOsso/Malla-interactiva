
const malla = {
  "Semestre 1": [
    { nombre: "Introducción a la terapia ocupacional", requisitos: [] },
    { nombre: "Ética en salud", requisitos: [] },
    { nombre: "Integrado químico biológico", requisitos: [] },
    { nombre: "Habilidades de comunicación oral y escrita", requisitos: [] },
    { nombre: "Introducción al trabajo comunitario en salud", requisitos: [] },
    { nombre: "Inglés 1", requisitos: [] },
    { nombre: "Psicología de la comunicación", requisitos: [] },
    { nombre: "Práctica curricular 1", requisitos: [] }
  ],
  "Semestre 2": [
    { nombre: "Fundamentos para la terapia ocupacional", requisitos: ["Introducción al trabajo comunitario en salud"] },
    { nombre: "Integrado morfología humana", requisitos: [] },
    { nombre: "Socio antropología", requisitos: [] },
    { nombre: "Inglés 2", requisitos: [] },
    { nombre: "Inclusión social 1", requisitos: [] },
    { nombre: "Curso transversal institucional 1", requisitos: [] },
    { nombre: "Electivo formación general", requisitos: [] },
    { nombre: "Práctica curricular 2", requisitos: ["Introducción al trabajo comunitario en salud", "Práctica curricular 1"] }
  ],
  "Semestre 3": [
    { nombre: "Modelos de intervención en terapia ocupacional 1", requisitos: ["Fundamentos para la terapia ocupacional"] },
    { nombre: "Integrado de fisiología humana", requisitos: ["Integrado químico biológico"] },
    { nombre: "Educación en salud", requisitos: ["Introducción al trabajo comunitario en salud"] },
    { nombre: "Integrado anatomía funcional y biomecánica del aparato locomotor", requisitos: ["Integrado morfología humana"] },
    { nombre: "Habilidades y actividades terapéuticas 1", requisitos: ["Fundamentos para la terapia ocupacional"] },
    { nombre: "Inclusión social 2", requisitos: ["Inclusión social 1"] },
    { nombre: "Curso de vida 1", requisitos: [] },
    { nombre: "Práctica curricular 3", requisitos: ["Fundamentos para la terapia ocupacional", "Práctica curricular 2"] }
  ],
  "Semestre 4": [
    { nombre: "Modelos de intervención en terapia ocupacional 2", requisitos: ["Modelos de intervención en terapia ocupacional 1"] },
    { nombre: "Integrado de neurociencias", requisitos: ["Integrado de fisiología humana"] },
    { nombre: "Integrado salud pública", requisitos: ["Introducción al trabajo comunitario en salud"] },
    { nombre: "Habilidades y actividades terapéuticas 2", requisitos: ["Habilidades y actividades terapéuticas 1"] },
    { nombre: "Curso de vida 2", requisitos: [] },
    { nombre: "Inclusión social 3", requisitos: ["Inclusión social 1"] },
    { nombre: "Curso transversal institucional 2", requisitos: [] },
    { nombre: "Práctica curricular 4", requisitos: ["Modelos de intervención en terapia ocupacional 1", "Práctica curricular 3"] }
  ],
  "Semestre 5": [
    { nombre: "Examen de competencias tramo básico", requisitos: [] },
    { nombre: "Integrado terapia ocupacional en niños/as y adolescentes 1", requisitos: ["Modelos de intervención en terapia ocupacional 2"] },
    { nombre: "Integrado terapia ocupacional en adultos 1", requisitos: ["Modelos de intervención en terapia ocupacional 2"] },
    { nombre: "Integrado terapia ocupacional en personas mayores 1", requisitos: ["Modelos de intervención en terapia ocupacional 2"] },
    { nombre: "Gestión en salud", requisitos: ["Integrado salud pública"] },
    { nombre: "Introducción al análisis de datos", requisitos: [] },
    { nombre: "Metodología de la investigación 1", requisitos: [] },
    { nombre: "Práctica curricular 5", requisitos: ["Modelos de intervención en terapia ocupacional 2", "Práctica curricular 4"] }
  ],
  "Semestre 6": [
    { nombre: "Integrado terapia ocupacional en niños/as y adolescentes 2", requisitos: ["Integrado terapia ocupacional en niños/as y adolescentes 1"] },
    { nombre: "Integrado terapia ocupacional en adultos 2", requisitos: ["Integrado terapia ocupacional en adultos 1"] },
    { nombre: "Integrado terapia ocupacional en personas mayores 2", requisitos: ["Integrado terapia ocupacional en personas mayores 1"] },
    { nombre: "Nuevas tecnologías aplicadas a la terapia ocupacional", requisitos: [] },
    { nombre: "Gestión y liderazgo en salud comunitaria", requisitos: [] },
    { nombre: "Metodología de la investigación 2", requisitos: ["Metodología de la investigación 1"] },
    { nombre: "Salud ocupacional y ergonomía 1", requisitos: ["Integrado anatomía funcional y biomecánica del aparato locomotor"] },
    { nombre: "Práctica curricular 6", requisitos: ["Práctica curricular 5"] }
  ],
  "Semestre 7": [
    { nombre: "Integrado terapia ocupacional en niños/as y adolescentes 3", requisitos: ["Integrado terapia ocupacional en niños/as y adolescentes 2"] },
    { nombre: "Integrado terapia ocupacional en adultos 3", requisitos: ["Integrado terapia ocupacional en adultos 2"] },
    { nombre: "Integrado terapia ocupacional en personas mayores 3", requisitos: ["Integrado terapia ocupacional en personas mayores 2"] },
    { nombre: "Salud ocupacional y ergonomía 2", requisitos: ["Salud ocupacional y ergonomía 1"] },
    { nombre: "Proyecto de inclusión social 1", requisitos: ["Gestión y liderazgo en salud comunitaria"] },
    { nombre: "Ortótica 1", requisitos: ["Integrado anatomía funcional y biomecánica del aparato locomotor"] },
    { nombre: "Proyecto de investigación 1", requisitos: ["Metodología de la investigación 2"] },
    { nombre: "Práctica curricular 7", requisitos: ["Práctica curricular 6"] }
  ],
  "Semestre 8": [
    { nombre: "Integrado terapia ocupacional en niños/as y adolescentes 4", requisitos: ["Integrado terapia ocupacional en niños/as y adolescentes 3"] },
    { nombre: "Integrado terapia ocupacional en adultos 4", requisitos: ["Integrado terapia ocupacional en adultos 3"] },
    { nombre: "Integrado terapia ocupacional en personas mayores 4", requisitos: ["Integrado terapia ocupacional en personas mayores 3"] },
    { nombre: "Ortótica 2", requisitos: ["Ortótica 1"] },
    { nombre: "Proyecto de inclusión social 2", requisitos: ["Proyecto de inclusión social 1"] },
    { nombre: "Proyecto de investigación 2", requisitos: ["Proyecto de investigación 1"] },
    { nombre: "Bioética", requisitos: ["Ética en salud"] },
    { nombre: "Práctica curricular 8", requisitos: ["Práctica curricular 7"] }
  ],
  "Semestre 9": [
    { nombre: "Examen de competencias tramo especialización", requisitos: [] },
    { nombre: "Práctica profesional 1", requisitos: ["Práctica curricular 8"] },
    { nombre: "Práctica profesional 2", requisitos: ["Práctica curricular 8"] },
    { nombre: "Práctica profesional 3", requisitos: ["Práctica curricular 8"] }
  ],
  "Semestre 10": [
    { nombre: "Examen de competencias profesionales", requisitos: ["Práctica profesional 1", "Práctica profesional 2", "Práctica profesional 3"] }
  ]
};
