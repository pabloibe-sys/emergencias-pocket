// data/protocolos_cardio.js
// CARDIO – Emergencias Pocket Perú (v2)

export const CARDIO = [
  {
    id: "sca",
    nombre: "Síndrome coronario agudo (SCA) – enfoque inicial",
    categoria: "Cardio",
    tags: ["dolor torácico", "opresivo", "sudoración", "infarto", "angina"],
    cie10: ["I21.- (Infarto agudo de miocardio)", "I20.0 (Angina inestable)", "R07.4 (Dolor torácico)"],

    clinica: {
      sintomas: [
        "Dolor torácico opresivo >20 min (puede irradiar a brazo/mandíbula)",
        "Disnea, diaforesis, náuseas/vómitos",
        "Fatiga intensa/síncope (más en ancianos/DM)"
      ],
      signos: [
        "Inestabilidad hemodinámica (TA baja, piel fría)",
        "Taquicardia/bradicardia",
        "Estertores / signos de IC"
      ],
      rojos: [
        "Hipotensión / shock",
        "Dolor persistente o recurrente",
        "Cambios ECG sugestivos (ST↑/ST↓/T invertida) o arritmia",
        "SatO₂ baja o edema agudo pulmonar"
      ]
    },

    diagnostico: {
      perlas: [
        "ECG en <10 min + repetir si persiste dolor",
        "Troponina seriada si disponible",
        "Tratar como SCA hasta descartar"
      ],
      diferenciales: ["Disección aórtica", "TEP", "Pericarditis", "Neumotórax", "ERGE"],
      ekg: [
        {
          titulo: "Ejemplo: elevación del ST (IAMCEST)",
          // Si luego subes una imagen, ponla en assets/ekg/ y descomenta:
          // src: "assets/ekg/iam_st.png",
          texto: "Elevación ST en derivaciones contiguas (según territorio)"
        }
      ]
    },

    manejo: {
      algoritmo: [
        { paso: "1", accion: "ABCDE + monitor + 2 vías + ECG inmediato (<10 min)." },
        { paso: "2", accion: "Oxígeno SOLO si SatO₂ <90% o distrés respiratorio." },
        { paso: "3", accion: "AAS 300 mg VO masticable (si no alergia/CI)." },
        { paso: "4", accion: "Nitroglicerina SL si PAS >100 y no uso PDE5 / no sospecha VD." },
        { paso: "5", accion: "Analgesia si dolor intenso (según disponibilidad y protocolos locales)." },
        { paso: "6", accion: "Referencia/derivación inmediata según ECG y riesgo (IAMCEST: reperfusión)." }
      ],
      seguridad: [
        "Evitar nitratos si PAS baja, infarto de VD, bradicardia severa o uso reciente de PDE5.",
        "Si sospecha disección (dolor desgarrante + asimetría PA), NO dar anticoagulación hasta descartar."
      ],
      referir: [
        "ECG con ST↑ o cambios dinámicos",
        "Dolor persistente/recidivante",
        "Inestabilidad hemodinámica/arrítmica",
        "Troponina positiva o alto riesgo clínico"
      ]
    },

    rp: {
      texto: [
        "CIE10: I21.- / I20.0 / R07.4",
        "IMP Dx: Síndrome coronario agudo probable.",
        "Conducta: ABCDE + monitor + ECG inmediato (<10 min).",
        "AAS 300 mg VO masticable (si no CI).",
        "O₂ solo si SatO₂ <90% o distrés.",
        "Nitroglicerina SL si PAS >100 y sin CI.",
        "Referencia inmediata a centro con capacidad de reperfusión según hallazgos."
      ],
      copy: true
    },

    calculadoras: [],

    bibliografia: [
      { tipo: "Guía", titulo: "AHA/ACC Chest Pain Guideline", año: "2021" },
      { tipo: "Guía", titulo: "ESC Guidelines for ACS", año: "2023" }
    ]
  },

  {
    id: "tsv",
    nombre: "Taquicardia supraventricular (TSV) – manejo",
    categoria: "Cardio",
    tags: ["palpitaciones", "taquicardia", "qrs estrecho", "regular"],
    cie10: ["I47.1 (Taquicardia supraventricular)"],

    clinica: {
      sintomas: ["Palpitaciones súbitas", "Mareo", "Disnea", "Opresión torácica"],
      signos: ["FC 150–250", "Ritmo regular", "QRS estrecho (<120 ms)"],
      rojos: ["Hipotensión", "Alteración conciencia", "Dolor torácico severo", "Edema agudo pulmón"]
    },

    diagnostico: {
      perlas: [
        "TSV típica: regular + QRS estrecho",
        "Si irregular → pensar en FA/Flutter con respuesta variable",
        "Si QRS ancho → considerar TV o TSV con aberrancia"
      ],
      diferenciales: ["Flutter auricular", "FA", "Taquicardia sinusal", "TV monomórfica"],
      ekg: [
        {
          titulo: "Ejemplo TSV",
          texto: "Regular, QRS estrecho, P no visible o retrógrada"
        }
      ]
    },

    manejo: {
      algoritmo: [
        { paso: "1", accion: "Evaluar estabilidad: TA, conciencia, dolor, EAP." },
        { paso: "2", accion: "Inestable → Cardioversión sincronizada 50–100 J (sedación si posible)." },
        { paso: "3", accion: "Estable → Maniobras vagales (Valsalva modificada)." },
        { paso: "4", accion: "Si no revierte → Adenosina 6 mg EV bolo rápido + flush 20 ml." },
        { paso: "5", accion: "Si falla → Adenosina 12 mg EV bolo rápido + flush (puede repetir 12 mg una vez)." },
        { paso: "6", accion: "Si persiste o diagnóstico incierto → considerar antiarrítmico/derivación según recursos." }
      ],
      seguridad: [
        "Adenosina: rubor, disnea breve, broncoespasmo (precaución en asma severa).",
        "Monitor ECG y desfibrilador disponible."
      ],
      referir: ["Inestable", "Recurrencias frecuentes", "Cardiopatía estructural", "Duda diagnóstica (QRS ancho)"]
    },

    rp: {
      texto: [
        "CIE10: I47.1",
        "IMP Dx: Taquicardia supraventricular probable.",
        "Conducta: Evaluar estabilidad hemodinámica. Monitor ECG continuo.",
        "Estable: maniobras vagales.",
        "Adenosina 6 mg EV bolo rápido + flush 20 ml; si no revierte 12 mg EV + flush."
      ],
      copy: true
    },

    calculadoras: [
      {
        id: "adenosina_ped",
        titulo: "Adenosina (Pediatría)",
        inputs: [{ id: "peso", label: "Peso (kg)", type: "number", min: 0.5, step: 0.1, required: true }],
        outputs: [
          { id: "dosis1", label: "Dosis 1 (0.1 mg/kg, máx 6 mg)" },
          { id: "dosis2", label: "Dosis 2 (0.2 mg/kg, máx 12 mg)" }
        ],
        compute: ({ peso }) => {
          const d1 = Math.min(peso * 0.1, 6);
          const d2 = Math.min(peso * 0.2, 12);
          return {
            dosis1: `${d1.toFixed(2)} mg`,
            dosis2: `${d2.toFixed(2)} mg`
          };
        }
      }
    ],

    bibliografia: [
      { tipo: "Guía", titulo: "AHA ACLS Guidelines", año: "2020" },
      { tipo: "Guía", titulo: "ESC Supraventricular Tachycardia Guidelines", año: "2019" }
    ]
  }
];
