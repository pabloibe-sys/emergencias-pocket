// ===============================
// EMERGENCIAS POCKET PERÚ
// PROTOCOLOS CLÍNICOS
// ===============================

const PROTO = [
  // ===================== ALERGIA =====================
  {
    id:"anafilaxia",
    nombre:"Anafilaxia",
    categoria:"Alergia",
    cie10:["T78.2 (Shock anafiláctico, no especificado)","T78.4 (Alergia, no especificada)"],
    sinonimos:["anafilaxia","anfilaxia","shock alergico","angioedema"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["Disnea/estridor, edema lengua/laringe","Hipotensión/síncope","Inicio rápido tras exposición"],
      clave:"Adrenalina IM inmediata. No esperar exámenes."
    },
    pasos:[
      {t:"0–1 min", a:["Supino con piernas elevadas (si tolera).","O₂ si SatO₂ <94% o distrés.","Monitor + 2 vías si severa."]},
      {t:"1–3 min", a:["Dx clínico. Retirar desencadenante si posible.","Adrenalina IM inmediata."]},
      {t:"3–10 min", a:["Fluidos EV si hipotensión.","Antihistamínico + corticoide (coadyuvantes).","Salbutamol si broncoespasmo."]},
      {t:"Observación", a:["Observar por rebote (más si severa).","Referir si severa o mala respuesta."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:15,
      rules:[
        {label:"Adrenalina IM (1 mg/mL): 0.01 mg/kg (máx 0.5 mg)", group:"both", mgkg:0.01, max_mg:0.5, concentration_mg_ml:1, notes:"IM muslo; repetir 5–15 min si persiste."},
        {label:"Cetirizina VO: 0.25 mg/kg (máx 10 mg)", group:"peds", mgkg:0.25, max_mg:10, notes:"Coadyuvante."},
        {label:"Hidrocortisona EV: 4 mg/kg (máx 200 mg)", group:"peds", mgkg:4, max_mg:200, notes:"Coadyuvante; NO reemplaza adrenalina."},
        {label:"Hidrocortisona EV: 200 mg (adulto)", group:"adult", mgkg:0, max_mg:200, notes:"Dosis fija habitual."}
      ],
      fluids:[
        {label:"Bolo cristaloide si hipotensión: 20 mL/kg (máx 1000 mL)", group:"both", mlkg:20, max_ml:1000, notes:"Reevaluar; cuidado IC/IRC."}
      ]
    },
    rp:`CIE10: T78.2 / T78.4
IMP Dx: Anafilaxia probable.
Conducta: Adrenalina IM inmediata (0.01 mg/kg, máx 0.5 mg), O₂ si precisa, monitor. Fluidos EV si hipotensión. Antihistamínico + corticoide como coadyuvantes. Neb salbutamol si broncoespasmo. Observación y referencia si mala respuesta o compromiso vía aérea.`,
    referir:["2+ dosis adrenalina","Estridor/angioedema progresivo","Hipotensión persistente","Peds: letargia/apneas"],
    seguridad:["Adrenalina IM es lo clave; antihistamínicos no reemplazan adrenalina."]
  },

  // ===================== CARDIO =====================
  {
    id:"sca",
    nombre:"Síndrome coronario agudo (SCA)",
    categoria:"Cardio",
    cie10:["I21.- (Infarto agudo de miocardio)","I20.0 (Angina inestable)","R07.4 (Dolor torácico)"],
    sinonimos:["infarto","iam","angina inestable","dolor toracico opresivo"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["Dolor opresivo >20 min","Disnea/diaforesis/náuseas","Inestabilidad o cambios ECG"],
      clave:"ECG + AAS + P2Y12 + referencia. O₂ solo si SatO₂ <90%."
    },
    pasos:[
      {t:"0–5 min", a:["ABCDE, monitor, 2 vías.","ECG ASAP.","O₂ SOLO si SatO₂ <90% o distrés."]},
      {t:"0–10 min", a:["AAS 300 mg VO masticado.","Clopidogrel 300 mg VO (si no CI).","Nitro SL si PAS >100 y sin PDE5.","Referencia inmediata."]},
    ],
    rp:`CIE10: I21.- / I20.0 / R07.4
IMP Dx: SCA probable.
Conducta: ECG + monitor. AAS 300 mg + Clopidogrel 300 mg. Nitro SL si PAS>100 y sin contraindicaciones. O₂ si Sat<90%. Referencia inmediata.`,
    referir:["Siempre."],
    seguridad:["Evitar nitro si hipotensión/IAM VD/uso PDE5."]
  },

  {
    id:"eap",
    nombre:"Edema agudo de pulmón (EAP) / IC descompensada",
    categoria:"Cardio",
    cie10:["I50.9 (Insuficiencia cardiaca, no especificada)","J81 (Edema pulmonar)"],
    sinonimos:["eap","ic descompensada","ortopnea","estertores","disnea paroxistica"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["SatO₂ baja, espuma rosada","HTA severa o hipotensión","Alteración conciencia"],
      clave:"O₂/CPAP si disponible + furosemida + nitro si PA lo permite + referencia."
    },
    pasos:[
      {t:"0–5 min", a:["Sentar al paciente, monitor.","O₂; CPAP si disponible y tolera."]},
      {t:"5–15 min", a:["Furosemida EV (según protocolo).","Nitroglicerina si PA elevada y sin CI.","Buscar desencadenante (SCA, HTA, arritmia)."]},
      {t:"Decisión", a:["Referir si Sat baja persistente, hipotensión, fatiga, SCA sospecha."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:20,
      rules:[
        {label:"Furosemida EV: 1 mg/kg (máx 40 mg) (peds)", group:"peds", mgkg:1, max_mg:40, notes:"Si indicación clara; cautela."},
        {label:"Furosemida EV: 20–40 mg (adulto)", group:"adult", mgkg:0, max_mg:40, notes:"Ajustar según uso previo/función renal."}
      ],
      fluids:[]
    },
    rp:`CIE10: I50.9 / J81
IMP Dx: EAP/IC descompensada.
Conducta: Posición sentada, O₂/CPAP si disponible. Furosemida EV. Nitro si PA elevada y sin CI. Monitor y referencia según respuesta/gravidad.`,
    referir:["Sat baja persistente, hipotensión, SCA sospecha, no respuesta."],
    seguridad:["Cuidado con sobre-diuresis si hipotenso o deshidratado."]
  },

  {
    id:"hta_emergencia",
    nombre:"Crisis hipertensiva (urgencia/emergencia)",
    categoria:"Cardio",
    cie10:["I16.0 (Urgencia hipertensiva)","I16.1 (Emergencia hipertensiva)","I10 (HTA esencial)"],
    sinonimos:["crisis hipertensiva","hta severa","cefalea intensa + hta"],
    triangulo:{
      tipo:"URGENCIA/EMERGENCIA",
      rojos:["Dolor torácico, disnea, déficit neurológico","Encefalopatía, convulsión","EAP, disección, IRA"],
      clave:"Buscar daño a órgano blanco. Emergencia = bajar PA controlado + referencia."
    },
    pasos:[
      {t:"0–10 min", a:["Confirmar PA, repetir medición.","Evaluar daño a órgano blanco (neuro, cardio, renal, fondo de ojo si posible)."]},
      {t:"Decisión", a:["Emergencia (daño órgano): referencia y manejo IV según protocolo local.","Urgencia (sin daño): descenso gradual con VO y seguimiento cercano."]}
    ],
    rp:`CIE10: I16.0 / I16.1 / I10
IMP Dx: Crisis hipertensiva (definir si emergencia).
Conducta: Reconfirmar PA, evaluar daño a órgano blanco. Emergencia: referencia para manejo IV y descenso controlado. Urgencia: ajuste VO y control cercano.`,
    referir:["Cualquier sospecha de daño a órgano blanco."],
    seguridad:["No bajar PA bruscamente en urgencia sin daño."]
  },

  // ===================== RESPIRATORIO =====================
  {
    id:"asma",
    nombre:"Crisis asmática",
    categoria:"Resp",
    cie10:["J45.- (Asma)","J46 (Estado asmático)"],
    sinonimos:["asma aguda","broncoespasmo","sibilancias"],
    triangulo:{
      tipo:"URGENCIA/EMERGENCIA",
      rojos:["SatO₂ <92%","Habla entrecortada/tiraje","Silencio auscultatorio","Fatiga"],
      clave:"Salbutamol repetido + ipratropio (mod-sev) + corticoide precoz."
    },
    pasos:[
      {t:"0–5 min", a:["Evaluar severidad.","O₂ meta SatO₂ 92–96%."]},
      {t:"0–20 min", a:["Salbutamol repetido (neb o MDI+espaciador).","Ipratropio si mod-sev.","Reevaluar."]},
      {t:"<1 h", a:["Corticoide precoz (VO o EV)."]},
      {t:"Decisión", a:["Referir si mala respuesta, agotamiento, Sat baja persistente."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:20,
      rules:[
        {label:"Prednisona VO: 1 mg/kg (máx 50 mg)", group:"both", mgkg:1, max_mg:50, notes:"Dar precoz si puede VO."},
        {label:"Hidrocortisona EV: 2 mg/kg (máx 100 mg)", group:"both", mgkg:2, max_mg:100, notes:"Alternativa si no tolera VO."}
      ],
      fluids:[]
    },
    rp:`CIE10: J45.- / J46
IMP Dx: Crisis asmática.
Conducta: O₂ meta 92–96%. Salbutamol repetido ± ipratropio. Corticoide precoz. Reevaluar y referir si criterios de severidad.`,
    referir:["Sat <92% persistente, agotamiento, silencio auscultatorio, no respuesta."],
    seguridad:["Evitar sedantes; reevaluar frecuente."]
  },

  {
    id:"crup",
    nombre:"Crup (laringotraqueítis) – pediatría",
    categoria:"Resp",
    cie10:["J05.0 (Laringotraqueítis aguda)"],
    sinonimos:["crup","tos perruna","estridor inspiratorio","laringitis obstructiva"],
    triangulo:{
      tipo:"URGENCIA/EMERGENCIA",
      rojos:["Estridor en reposo","Tiraje marcado","Cianosis o fatiga"],
      clave:"Dexametasona + nebulización según severidad + observar/derivar si grave."
    },
    pasos:[
      {t:"Inicial", a:["Mantener calma; evitar procedimientos innecesarios.","Evaluar estridor en reposo, tiraje, SatO₂."]},
      {t:"Tratamiento", a:["Dexametasona VO/IM/EV.","Si moderado-severo: nebulización (según protocolo local y disponibilidad)."]},
      {t:"Decisión", a:["Observar respuesta y referir si estridor persiste en reposo o compromiso."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:12,
      rules:[
        {label:"Dexametasona: 0.6 mg/kg (máx 10 mg)", group:"peds", mgkg:0.6, max_mg:10, notes:"VO/IM/EV según disponibilidad."}
      ],
      fluids:[]
    },
    rp:`CIE10: J05.0
IMP Dx: Crup probable.
Conducta: Minimizar agitación. Dexametasona 0.6 mg/kg (máx 10 mg). Si moderado/severo: nebulización según protocolo. Observar y referir si estridor en reposo persistente o deterioro.`,
    referir:["Estridor en reposo persistente, cianosis, fatiga, mala respuesta."],
    seguridad:["Evitar manipulación excesiva si severo."]
  },

  {
    id:"bronquiolitis",
    nombre:"Bronquiolitis (pediatría) – enfoque inicial",
    categoria:"Resp",
    cie10:["J21.9 (Bronquiolitis aguda, no especificada)"],
    sinonimos:["bronquiolitis","sibilancias lactante","dificultad respiratoria lactante"],
    triangulo:{
      tipo:"URGENCIA/EMERGENCIA",
      rojos:["Apneas o cianosis","SatO₂ baja persistente","Tiraje severo/quejido","Deshidratación o no alimenta"],
      clave:"Soporte: O₂ si Sat baja + hidratación + aspiración nasal."
    },
    pasos:[
      {t:"0–5 min", a:["Evaluar FR, tiraje, SatO₂, apneas, alimentación.","Aspiración nasal si obstrucción."]},
      {t:"5–15 min", a:["O₂ si hipoxemia.","Hidratación VO fraccionada o EV si no tolera.","Evitar antibióticos salvo sospecha bacteriana."]},
      {t:"Decisión", a:["Referir/hospitalizar si apneas, hipoxemia persistente, tiraje severo o <3 meses con compromiso."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:8,
      rules:[],
      fluids:[
        {label:"Bolo si hipoperfusión/deshidratación severa: 20 mL/kg (máx 500 mL)", group:"peds", mlkg:20, max_ml:500, notes:"Reevaluar cada bolo."}
      ]
    },
    rp:`CIE10: J21.9
IMP Dx: Bronquiolitis probable.
Conducta: Aspiración nasal, O₂ si hipoxemia, hidratación según tolerancia. Referir si apneas, hipoxemia persistente, tiraje severo o no alimenta.`,
    referir:["Apneas/cianosis, hipoxemia persistente, tiraje severo, <3 meses con compromiso."],
    seguridad:["Base es soporte; evitar sobretratamiento."]
  },

  {
    id:"nac_peds",
    nombre:"Neumonía pediátrica – enfoque inicial",
    categoria:"Resp",
    cie10:["J18.9 (Neumonía, no especificada)"],
    sinonimos:["neumonia pediatrica","taquipnea niño","fiebre + tiraje"],
    triangulo:{
      tipo:"URGENCIA/EMERGENCIA",
      rojos:["Tiraje severo/quejido","Cianosis o Sat baja persistente","No alimenta/letargia","<3 meses con compromiso"],
      clave:"O₂ si hipoxemia + ATB según severidad/guía + referencia si grave."
    },
    pasos:[
      {t:"0–10 min", a:["Evaluar gravedad (tiraje, SatO₂, alimentación, sensorio).","O₂ si hipoxemia."]},
      {t:"0–60 min", a:["ATB según protocolo local si sospecha bacteriana.","Hidratación y antipirético."]},
      {t:"Decisión", a:["Referir si criterios de gravedad o lactante pequeño."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:18,
      rules:[
        {label:"Amoxicilina VO: 45 mg/kg/dosis c/12h (máx 1000 mg/dosis)", group:"peds", mgkg:45, max_mg:1000, notes:"Orientativo; ajustar a guía local."},
        {label:"Ceftriaxona IM/EV: 50 mg/kg/día (máx 2000 mg)", group:"peds", mgkg:50, max_mg:2000, notes:"Si requiere parenteral (según criterio)."}
      ],
      fluids:[]
    },
    rp:`CIE10: J18.9
IMP Dx: Neumonía pediátrica probable.
Conducta: Evaluar gravedad, O₂ si hipoxemia, ATB según guía/severidad, hidratación y control fiebre. Referir si grave o lactante pequeño.`,
    referir:["Hipoxemia persistente, tiraje severo, letargia, no alimenta, <3 meses con compromiso."],
    seguridad:["No retrasar referencia si grave."]
  },

  // ===================== TEP / NEUMOTÓRAX (para los Síndromes) =====================
  {
    id:"tromboembolismo",
    nombre:"Tromboembolismo pulmonar (TEP) – sospecha",
    categoria:"Resp",
    cie10:["I26.9 (Embolia pulmonar sin mención de cor pulmonale agudo)"],
    sinonimos:["tep","embolia pulmonar","disnea súbita","dolor pleuritico","hemoptisis"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["Shock/hipotensión","SatO₂ baja severa","Síncope","Dolor pleurítico súbito + taquicardia"],
      clave:"Soporte + oxígeno + referencia urgente. No demorar si inestable."
    },
    pasos:[
      {t:"Inicial", a:["ABCDE, monitor, O₂ si hipoxemia.","Buscar signos TVP, riesgo (cirugía, inmovilización, cáncer)."]},
      {t:"Decisión", a:["Si inestable: referencia inmediata.","Si estable: derivación/estudio según capacidad."]}
    ],
    rp:`CIE10: I26.9
IMP Dx: TEP probable.
Conducta: ABCDE, O₂ si hipoxemia, monitor. Identificar riesgo y signos de TVP. Referencia urgente si inestable o alta sospecha.`,
    referir:["Inestabilidad hemodinámica o hipoxemia severa."],
    seguridad:["Evitar demoras en referencia si shock/síncope."]
  },

  {
    id:"neumotorax_tension",
    nombre:"Neumotórax a tensión – sospecha",
    categoria:"Resp",
    cie10:["J93.0 (Neumotórax espontáneo a tensión)","J93.9 (Neumotórax, no especificado)"],
    sinonimos:["neumotorax tension","mv unilateral disminuido","hipotension + disnea"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["Hipotensión/shock","Desviación traqueal (tardío)","MV unilateral ↓ + distensión yugular (variable)"],
      clave:"Si alta sospecha clínica: descompresión inmediata según entrenamiento y recursos + referencia."
    },
    pasos:[
      {t:"0–2 min", a:["ABCDE, O₂ alto flujo si disponible.","Clínico: NO esperar Rx si shock y alta sospecha."]},
      {t:"Acción", a:["Descompresión según protocolo local (si entrenado y con material).","Luego drenaje/derivación según capacidad."]},
      {t:"Decisión", a:["Referencia urgente."]}
    ],
    rp:`CIE10: J93.0 / J93.9
IMP Dx: Neumotórax a tensión probable.
Conducta: ABCDE + O₂. Si shock y alta sospecha clínica: descompresión inmediata según protocolo/competencia. Referencia urgente.`,
    referir:["Siempre."],
    seguridad:["No retrasar por imagen si shock y sospecha alta."]
  },

  // ===================== SHOCK/INFECC =====================
  {
    id:"sepsis",
    nombre:"Sepsis / Shock séptico – inicial",
    categoria:"Shock/Infecc",
    cie10:["A41.9 (Sepsis, no especificada)","R57.2 (Shock séptico)"],
    sinonimos:["sepsis","shock septico","infeccion grave","qsofa"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["Hipotensión/confusión","Taquipnea","Oliguria/hipoperfusión"],
      clave:"Cristaloides + antibiótico precoz + control foco + referencia."
    },
    pasos:[
      {t:"0–10 min", a:["ABCDE, monitor, 2 vías.","Perfusión: llenado capilar/diuresis/sensorio."]},
      {t:"0–60 min", a:["Cristaloides EV guiados por respuesta.","Antibiótico EV precoz según foco (no demorar)."]},
      {t:"Reevaluación", a:["Si persiste hipotensión: referencia/UCI.","Control de foco y muestras si no retrasan ATB."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:15,
      rules:[],
      fluids:[
        {label:"Adulto (marco sepsis): 30 mL/kg (máx 3000 mL)", group:"adult", mlkg:30, max_ml:3000, notes:"Ajustar en IC/IRC; reevaluar."},
        {label:"Peds (bolo): 20 mL/kg (máx 1000 mL)", group:"peds", mlkg:20, max_ml:1000, notes:"Reevaluar perfusión tras cada bolo."}
      ]
    },
    rp:`CIE10: A41.9 / R57.2
IMP Dx: Sepsis probable.
Conducta: Monitor + 2 vías. Fluidos guiados por respuesta (adulto 30 mL/kg; peds bolos 20 mL/kg). ATB precoz según foco. Reevaluar y referir si shock o falla orgánica.`,
    referir:["Hipotensión persistente, alteración conciencia, falla orgánica, peds sin respuesta a bolos."],
    seguridad:["Reevaluar para evitar sobrecarga; vigilar pulmón (IC)."]
  },

  {
    id:"shock_hipovolemico",
    nombre:"Shock hipovolémico/hemorrágico – inicial",
    categoria:"Shock/Infecc",
    cie10:["R57.1 (Shock hipovolémico)","T79.4 (Shock traumático)"],
    sinonimos:["shock hipovolemico","hemorragia","hipotension","taquicardia"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["Hipotensión + piel fría","Alteración conciencia","Sangrado activo"],
      clave:"Control sangrado + fluidos guiados + referencia."
    },
    pasos:[
      {t:"0–5 min", a:["ABCDE, control de hemorragia externa.","2 vías gruesas si posible.","Abrigar (evitar hipotermia)."]},
      {t:"5–15 min", a:["Cristaloides en bolos y reevaluar perfusión.","Buscar fuente de sangrado."]},
      {t:"Decisión", a:["Referencia urgente si inestable o sangrado no controlable."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:20,
      rules:[],
      fluids:[
        {label:"Bolo cristaloide: 20 mL/kg (máx 1000 mL)", group:"both", mlkg:20, max_ml:1000, notes:"Reevaluar tras cada bolo."}
      ]
    },
    rp:`CIE10: R57.1 / T79.4
IMP Dx: Shock hipovolémico/hemorrágico.
Conducta: ABCDE, control de sangrado, 2 vías, abrigo. Fluidos en bolos con reevaluación. Referencia urgente si inestable.`,
    referir:["Inestabilidad persistente, sospecha hemorragia interna."],
    seguridad:["Hipotermia empeora coagulopatía: abrigar siempre."]
  },

  {
    id:"shock_pediatrico",
    nombre:"Shock (pediatría) – paquete inicial",
    categoria:"Shock/Infecc",
    cie10:["R57.9 (Shock, no especificado)"],
    sinonimos:["shock pediatrico","mala perfusion niño","llenado capilar lento"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["Letargia/alteración sensorio","Llenado capilar >3s","Extremidades frías o muy calientes + taquicardia","Oliguria"],
      clave:"ABCDE + bolos 20 mL/kg con reevaluación + tratar causa + referencia."
    },
    pasos:[
      {t:"0–5 min", a:["ABCDE, O₂ si precisa.","Vía EV/IO si disponible.","Evaluar perfusión."]},
      {t:"5–15 min", a:["Cristaloides 20 mL/kg y reevaluar.","Si sepsis sospecha: antibiótico precoz."]},
      {t:"Decisión", a:["Referir urgente si no mejora tras bolos o deterioro."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:15,
      rules:[],
      fluids:[
        {label:"Bolo cristaloide: 20 mL/kg (máx 1000 mL)", group:"peds", mlkg:20, max_ml:1000, notes:"Reevaluar tras cada bolo."}
      ]
    },
    rp:`CIE10: R57.9
IMP Dx: Shock pediátrico probable.
Conducta: ABCDE, O₂, vía EV/IO. Bolos 20 mL/kg con reevaluación. Si sepsis: ATB precoz. Referencia urgente si no mejora.`,
    referir:["No respuesta a bolos, hipotensión, distress respiratorio."],
    seguridad:["Si cardiogénico sospecha, bolos con cautela y referencia inmediata."]
  },

  // ===================== NEURO =====================
  {
    id:"acv",
    nombre:"ACV (ictus) – sospecha",
    categoria:"Neuro",
    cie10:["I63.- (Infarto cerebral)","I61.- (Hemorragia intracerebral)","G45.9 (AIT, no especificado)"],
    sinonimos:["acv","ictus","derrame","debilidad hemicuerpo","disartria","fas"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["Déficit focal súbito","Alteración de conciencia","Convulsión nueva"],
      clave:"Tiempo es cerebro: ABC, glucosa, y referencia inmediata a centro con TC."
    },
    pasos:[
      {t:"0–5 min", a:["ABCDE, SatO₂, PA, glucosa capilar.","Determinar hora de inicio (última vez bien)."]},
      {t:"Decisión", a:["Referencia inmediata a centro con TC y manejo ACV.","Evitar hipoglicemia/hipoxia/hipertermia."]}
    ],
    rp:`CIE10: I63.- / I61.- / G45.9
IMP Dx: ACV/AIT probable.
Conducta: ABC, glucosa capilar, soporte, documentar hora de inicio. Referencia inmediata a centro con TC y manejo especializado.`,
    referir:["Siempre."],
    seguridad:["No retrasar traslado por exámenes no disponibles."]
  },

  {
    id:"status_convulsivo",
    nombre:"Convulsión / Status convulsivo",
    categoria:"Neuro",
    cie10:["G40.9 (Epilepsia, no especificada)","R56.8 (Otras convulsiones)"],
    sinonimos:["status","crisis prolongada","convulsion"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:[">5 min o repetidas sin recuperación","Cianosis/apnea","Trauma asociado"],
      clave:"BZD primero, luego carga antiepiléptica + ABC."
    },
    pasos:[
      {t:"0–2 min", a:["Seguridad, lateralizar, vía aérea.","O₂, monitor, glucosa capilar."]},
      {t:"2–5 min", a:["BZD según protocolo/disponibilidad."]},
      {t:"5–20 min", a:["Carga antiepiléptica según protocolo (p.ej. fenitoína).","Buscar causa (hipoglicemia, fiebre, tóxicos)."]},
      {t:">20 min", a:["Referir/soporte avanzado si persiste o compromiso respiratorio."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:20,
      rules:[
        {label:"Diazepam EV: 0.15 mg/kg (máx 10 mg)", group:"both", mgkg:0.15, max_mg:10, notes:"Administrar lento; vigilar depresión respiratoria."},
        {label:"Fenitoína carga: 20 mg/kg (máx 1500 mg)", group:"both", mgkg:20, max_mg:1500, notes:"Infundir según protocolo; monitor ECG si posible."}
      ],
      fluids:[]
    },
    rp:`CIE10: G40.9 / R56.8
IMP Dx: Convulsión / status convulsivo.
Conducta: ABC + glucosa. Si >5 min: diazepam 0.15 mg/kg (máx 10 mg). Carga fenitoína 20 mg/kg. Buscar causa y referir si persiste/compromiso ventilatorio.`,
    referir:["Status refractario, necesidad vía aérea avanzada."],
    seguridad:["Vigilar depresión respiratoria por BZD."]
  },

  {
    id:"convulsion_febril",
    nombre:"Convulsión febril (pediatría)",
    categoria:"Neuro",
    cie10:["R56.0 (Convulsiones febriles)"],
    sinonimos:["convulsion febril","fiebre + convulsion","crisis febril"],
    triangulo:{
      tipo:"URGENCIA/EMERGENCIA",
      rojos:[">5 min","Recurrente en 24h","Déficit focal o recuperación lenta","<6 meses o >5 años"],
      clave:"ABCDE + glucosa. Si persiste >5 min: BZD. Luego control fiebre y evaluar foco."
    },
    pasos:[
      {t:"0–5 min", a:["ABCDE, posición lateral, SatO₂.","Glucosa capilar.","Si dura >5 min: BZD."]},
      {t:"Luego", a:["Buscar foco infeccioso.","Antipirético y líquidos VO si tolera.","Referir si convulsión compleja."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:12,
      rules:[
        {label:"Diazepam EV: 0.15 mg/kg (máx 10 mg)", group:"peds", mgkg:0.15, max_mg:10, notes:"Si convulsión activa/prolongada."},
        {label:"Paracetamol VO: 15 mg/kg/dosis (máx 1000 mg)", group:"peds", mgkg:15, max_mg:1000, notes:"Cada 6–8 h según necesidad."}
      ],
      fluids:[]
    },
    rp:`CIE10: R56.0
IMP Dx: Convulsión febril probable.
Conducta: ABC, glucosa. Si >5 min o activa: diazepam EV 0.15 mg/kg (máx 10 mg). Control fiebre con paracetamol, buscar foco. Referir si convulsión compleja o criterios de alarma.`,
    referir:[">5 min, recurrente, focal, recuperación lenta, extremos de edad, sospecha meningitis."],
    seguridad:["No forzar VO si somnoliento; vigilar vía aérea."]
  },

  // ===================== ENDO =====================
  {
    id:"hipoglicemia",
    nombre:"Hipoglicemia",
    categoria:"Endocrino",
    cie10:["E16.2 (Hipoglicemia, no especificada)"],
    sinonimos:["hipoglucemia","hgt baja","somnolencia","temblor"],
    triangulo:{
      tipo:"URGENCIA",
      rojos:["Alteración conciencia","Convulsión","HGT muy baja"],
      clave:"Glucosa inmediata: VO si puede, EV si no."
    },
    pasos:[
      {t:"0–2 min", a:["HGT si posible; si clínica fuerte, tratar sin retraso.","Asegurar vía aérea si compromiso."]},
      {t:"2–5 min", a:["Consciente: 15–20 g glucosa VO; re-chequear 15 min.","Inconsciente: dextrosa EV según disponibilidad."]},
      {t:"5–30 min", a:["Repetir HGT, buscar causa.","Al recuperar: carbohidrato complejo."]}
    ],
    rp:`CIE10: E16.2
IMP Dx: Hipoglicemia.
Conducta: Confirmar con HGT. Consciente: 15–20 g VO y control 15 min. Inconsciente: dextrosa EV según disponibilidad, monitorizar, repetir HGT y tratar causa.`,
    referir:["Recurrente, sulfonilureas, alteración persistente de conciencia."],
    seguridad:["Vigilar extravasación si soluciones hipertónicas."]
  },

  {
    id:"cetoacidosis",
    nombre:"Cetoacidosis diabética (CAD) – sospecha",
    categoria:"Endocrino",
    cie10:["E10.1 (DM1 con cetoacidosis)","E11.1 (DM2 con cetoacidosis)"],
    sinonimos:["cad","cetoacidosis","respiracion kussmaul","dolor abdominal + cetonas"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["Deshidratación severa","Alteración conciencia","Kussmaul","Vómitos persistentes"],
      clave:"Fluidos + electrolitos + referencia; insulina IV según capacidad."
    },
    pasos:[
      {t:"Inicial", a:["ABCDE, glucosa, signos deshidratación.","Fluidos EV (según protocolo)."]},
      {t:"Luego", a:["Evaluar cetonas/AG si disponible.","Referencia para manejo completo y control K+."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:25,
      rules:[],
      fluids:[
        {label:"Bolo inicial si hipoperfusión: 10–20 mL/kg (máx 1000 mL)", group:"both", mlkg:10, max_ml:1000, notes:"Reevaluar; peds con cautela y referencia."}
      ]
    },
    rp:`CIE10: E10.1 / E11.1
IMP Dx: CAD probable.
Conducta: ABC, glucosa, iniciar fluidos EV, evaluar cetonas/electrolitos si disponible. Referencia para manejo con insulina IV y control de potasio.`,
    referir:["Siempre (especialmente peds)."],
    seguridad:["En peds, riesgo edema cerebral: manejo protocolizado y referencia."]
  },

  // ===================== GI / PEDIATRÍA =====================
  {
    id:"deshidratacion_diarrea",
    nombre:"Diarrea aguda / deshidratación (pediatría)",
    categoria:"Infecc",
    cie10:["A09 (Diarrea y gastroenteritis de presunto origen infeccioso)","E86.0 (Deshidratación)"],
    sinonimos:["diarrea","gastroenteritis","vomitos diarrea","deshidratacion niño"],
    triangulo:{
      tipo:"URGENCIA",
      rojos:["Letargia, shock","No tolera VO","Ojos hundidos + pliegue lento marcado","Sangre en heces / sospecha sepsis"],
      clave:"SRO (Plan A/B) si tolera; EV (Plan C) si severa o shock."
    },
    pasos:[
      {t:"Evaluar", a:["Clasificación clínica de deshidratación (ninguna / alguna / severa).","Valorar tolerancia VO."]},
      {t:"Tratar", a:["SRO fraccionada si tolera.","Si severa o shock: EV con bolos y referencia según respuesta."]},
      {t:"Adyuvante", a:["Zinc según programa local (si aplica).","Alimentación temprana si tolera."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:12,
      rules:[
        {label:"Ondansetrón VO: 0.15 mg/kg (máx 8 mg)", group:"peds", mgkg:0.15, max_mg:8, notes:"Si vómitos dificultan SRO (según criterio)."},
        {label:"Paracetamol VO: 15 mg/kg/dosis (máx 1000 mg)", group:"peds", mgkg:15, max_mg:1000, notes:"Si fiebre/dolor."}
      ],
      fluids:[
        {label:"Bolo si shock: 20 mL/kg (máx 1000 mL)", group:"peds", mlkg:20, max_ml:1000, notes:"Reevaluar tras cada bolo."}
      ]
    },
    rp:`CIE10: A09 / E86.0
IMP Dx: Diarrea aguda con deshidratación (clasificar).
Conducta: SRO fraccionada si tolera. Si deshidratación severa o shock: bolos EV 20 mL/kg y referencia según evolución. Considerar ondansetrón si vómitos impiden SRO. Educación de signos de alarma.`,
    referir:["Shock, deshidratación severa, no tolera VO, sangre en heces, letargia."],
    seguridad:["Reevaluar perfusión y diuresis; evitar sobrecarga."]
  },

  // ===================== INFECC / DENGUE (Perú frecuente) =====================
  {
    id:"dengue_alarma",
    nombre:"Dengue – sospecha (con/sin signos de alarma)",
    categoria:"Infecc",
    cie10:["A90 (Dengue clásico)","A91 (Dengue hemorrágico)"],
    sinonimos:["dengue","fiebre + mialgias","dolor retroocular","plaquetas bajas"],
    triangulo:{
      tipo:"URGENCIA/EMERGENCIA",
      rojos:["Dolor abdominal intenso","Vómitos persistentes","Sangrado","Letargia/hipotensión","Hto sube + plaquetas bajan"],
      clave:"Hidratación guiada + vigilancia estrecha. Referir si alarma o shock."
    },
    pasos:[
      {t:"Inicial", a:["Evaluar signos de alarma.","Control signos vitales y perfusión.","Laboratorio si disponible (Hto/plaquetas)."]},
      {t:"Tratamiento", a:["Hidratación según estado clínico.","Antitérmico: paracetamol. Evitar AINEs/ASA."]},
      {t:"Decisión", a:["Referir/hospitalizar si signos de alarma, sangrado importante o shock."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:20,
      rules:[
        {label:"Paracetamol VO: 15 mg/kg/dosis (máx 1000 mg)", group:"both", mgkg:15, max_mg:1000, notes:"Evitar ibuprofeno/ASA en sospecha dengue."}
      ],
      fluids:[
        {label:"Bolo si shock: 20 mL/kg (máx 1000 mL)", group:"both", mlkg:20, max_ml:1000, notes:"Reevaluar. Manejo protocolizado si dengue grave."}
      ]
    },
    rp:`CIE10: A90 / A91
IMP Dx: Dengue probable (clasificar con/sin signos de alarma).
Conducta: Evaluar signos de alarma, hidratación guiada, paracetamol; evitar AINEs/ASA. Control seriado. Referir si alarma, sangrado importante o shock.`,
    referir:["Cualquier signo de alarma, shock, sangrado significativo."],
    seguridad:["No AINEs/ASA; vigilar hemoconcentración."]
  },

  // ===================== ADULTO RESP / INFECC =====================
  {
    id:"nac_grave",
    nombre:"Neumonía – sospecha grave (adulto)",
    categoria:"Resp",
    cie10:["J18.9 (Neumonía, no especificada)"],
    sinonimos:["nac grave","neumonia severa","fiebre + disnea"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["SatO₂ baja","Hipotensión","Confusión","FR muy alta"],
      clave:"O₂ + antibiótico precoz + fluidos si sepsis + referencia."
    },
    pasos:[
      {t:"0–10 min", a:["O₂ según SatO₂, monitor.","Evaluar sepsis/perfusión."]},
      {t:"0–60 min", a:["ATB EV precoz según guía local.","Fluidos si hipotensión/hipoperfusión."]},
      {t:"Decisión", a:["Referir/hospitalizar por gravedad."]}
    ],
    rp:`CIE10: J18.9
IMP Dx: Neumonía probable (grave).
Conducta: O₂, monitorización, evaluar sepsis. ATB EV precoz según guía local. Fluidos si hipoperfusión. Referir/hospitalizar por gravedad.`,
    referir:["SatO₂ baja, hipotensión, confusión, falla orgánica."],
    seguridad:["No demorar antibiótico si grave."]
  },

  // ===================== TRAUMA =====================
  {
    id:"trauma_abcde",
    nombre:"Trauma – evaluación inicial ABCDE",
    categoria:"Emerg",
    cie10:["T14.9 (Lesión no especificada)"],
    sinonimos:["politrauma","accidente","traumatismo"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["Vía aérea comprometida","Choque hemorrágico","Glasgow bajo"],
      clave:"ABCDE + control sangrado + prevenir hipotermia."
    },
    pasos:[
      {t:"A", a:["Vía aérea + control cervical."]},
      {t:"B", a:["Ventilación, SatO₂, tratar causas letales si sospecha."]},
      {t:"C", a:["Control hemorragia, 2 vías, reanimación."]},
      {t:"D", a:["Glasgow, pupilas, glucosa si alteración."]},
      {t:"E", a:["Exposición + abrigo."]}
    ],
    rp:`CIE10: T14.9
IMP Dx: Trauma.
Conducta: ABCDE + control de sangrado + abrigo. Reevaluación y referencia según hallazgos.`,
    referir:["Inestabilidad, lesión interna sospecha, TCE mod-severo, fractura expuesta."],
    seguridad:["Hipotermia empeora coagulación: abrigar siempre."]
  },
      // ===================== GI / ABDOMEN AGUDO =====================
  {
    id:"abdomen_agudo",
    nombre:"Abdomen agudo – enfoque inicial",
    categoria:"Emerg",
    cie10:["R10.0 (Abdomen agudo)","R10.4 (Dolor abdominal, otros)"],
    sinonimos:["abdomen agudo","dolor abdominal severo","peritonismo","rebound"],
    triangulo:{
      tipo:"URGENCIA/EMERGENCIA",
      rojos:["Rigidez/defensa marcada","Inestabilidad/hemodinámica","Sangrado digestivo","Embarazo/ectópico sospecha"],
      clave:"ABCDE + analgésico + líquidos si hipoperfusión + descartar quirúrgico/ectópico + referencia."
    },
    pasos:[
      {t:"0–10 min", a:["ABCDE, signos vitales, perfusión.","Descartar embarazo en mujer fértil (si posible).","Explorar peritonismo (defensa, rebote)."]},
      {t:"10–30 min", a:["Analgesia + antiemético.","Hidratación EV si vómitos/hipoperfusión.","Orina (tira) si posible; evaluar dolor lumbar/ITU."]},
      {t:"Decisión", a:["Si peritonismo, shock, sangrado, ectópico sospecha: referencia urgente.","Si dolor controlado y sin red flags: manejo y reevaluación."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:20,
      rules:[
        {label:"Paracetamol VO/EV: 15 mg/kg/dosis (máx 1000 mg)", group:"both", mgkg:15, max_mg:1000, notes:"Cada 6–8h según necesidad."},
        {label:"Ondansetrón VO/EV: 0.15 mg/kg (máx 8 mg)", group:"both", mgkg:0.15, max_mg:8, notes:"Si vómitos importantes."}
      ],
      fluids:[
        {label:"Bolo si hipoperfusión: 20 mL/kg (máx 1000 mL)", group:"both", mlkg:20, max_ml:1000, notes:"Reevaluar tras cada bolo."}
      ]
    },
    rp:`CIE10: R10.0 / R10.4
IMP Dx: Abdomen agudo (evaluar quirúrgico).
Conducta: ABCDE, evaluar peritonismo y estabilidad. Analgesia + antiemético. Hidratación EV si hipoperfusión/vómitos. Descartar embarazo/ectópico si corresponde. Referencia urgente si peritonismo, shock o sangrado.`,
    referir:["Peritonismo, shock, sangrado, ectópico sospecha, dolor progresivo."],
    seguridad:["Analgésicos NO enmascaran quirúrgico: dar analgesia y reevaluar."]
  },

  {
    id:"apendicitis",
    nombre:"Apendicitis aguda – sospecha",
    categoria:"Emerg",
    cie10:["K35.9 (Apendicitis aguda, no especificada)"],
    sinonimos:["apendicitis","dolor fosa iliaca derecha","migracion dolor","defensa"],
    triangulo:{
      tipo:"URGENCIA",
      rojos:["Peritonismo","Fiebre alta/toxicidad","Vómitos incoercibles"],
      clave:"Ayuno + analgesia + antiemético + referencia cirugía si sospecha moderada/alta."
    },
    pasos:[
      {t:"Evaluación", a:["Dolor migratorio, anorexia, náuseas/vómitos, fiebre.","Defensa/rebote, McBurney/Rovsing (orientativos)."]},
      {t:"Manejo", a:["Ayuno, hidratación si vómitos.","Analgesia + antiemético.","Referencia para evaluación quirúrgica/imagen."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:25,
      rules:[
        {label:"Paracetamol: 15 mg/kg/dosis (máx 1000 mg)", group:"both", mgkg:15, max_mg:1000, notes:"Cada 6–8h."},
        {label:"Ondansetrón: 0.15 mg/kg (máx 8 mg)", group:"both", mgkg:0.15, max_mg:8, notes:"Si vómitos."}
      ],
      fluids:[
        {label:"Bolo si deshidratación/hipoperfusión: 20 mL/kg (máx 1000 mL)", group:"both", mlkg:20, max_ml:1000, notes:"Reevaluar."}
      ]
    },
    rp:`CIE10: K35.9
IMP Dx: Apendicitis aguda probable.
Conducta: Ayuno, analgesia + antiemético, hidratación si vómitos. Referencia para evaluación quirúrgica/imagen.`,
    referir:["Sospecha moderada/alta o peritonismo."],
    seguridad:["No dar laxantes; reevaluar si empeora."]
  },

  {
    id:"colecistitis",
    nombre:"Colecistitis/cólico biliar – sospecha",
    categoria:"Emerg",
    cie10:["K81.9 (Colecistitis, no especificada)","K80.2 (Cálculo vesícula sin colecistitis)"],
    sinonimos:["colico biliar","dolor hipocondrio derecho","murphy","vomitos grasos"],
    triangulo:{
      tipo:"URGENCIA",
      rojos:["Fiebre + Murphy + dolor persistente","Ictericia/colangitis (Charcot)","Hipotensión/confusión"],
      clave:"Analgesia + antiemético + ayuno; referencia si sospecha colecistitis/colangitis."
    },
    pasos:[
      {t:"Evaluación", a:["Dolor HCD postprandial, vómitos.","Fiebre, Murphy, ictericia.","Pensar colangitis si fiebre+ictericia+dolor (Charcot)."]},
      {t:"Manejo", a:["Ayuno, hidratación EV si vómitos.","Analgésico + antiemético.","Referencia si colecistitis/colangitis sospecha."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:25,
      rules:[
        {label:"Paracetamol: 15 mg/kg/dosis (máx 1000 mg)", group:"both", mgkg:15, max_mg:1000, notes:"Cada 6–8h."},
        {label:"Ondansetrón: 0.15 mg/kg (máx 8 mg)", group:"both", mgkg:0.15, max_mg:8, notes:"Si vómitos."}
      ],
      fluids:[
        {label:"Bolo si hipoperfusión/deshidratación: 20 mL/kg (máx 1000 mL)", group:"both", mlkg:20, max_ml:1000, notes:"Reevaluar."}
      ]
    },
    rp:`CIE10: K81.9 / K80.2
IMP Dx: Cólico biliar / colecistitis probable.
Conducta: Ayuno, hidratación si vómitos, analgesia + antiemético. Referir si fiebre, dolor persistente, ictericia o sospecha colangitis.`,
    referir:["Fiebre, ictericia, dolor persistente, sepsis."],
    seguridad:["Colangitis = emergencia: referencia urgente."]
  },

  {
    id:"pancreatitis",
    nombre:"Pancreatitis aguda – sospecha",
    categoria:"Emerg",
    cie10:["K85.9 (Pancreatitis aguda, no especificada)"],
    sinonimos:["pancreatitis","dolor epigastrico a dorso","vomitos","alcohol","litiasis"],
    triangulo:{
      tipo:"URGENCIA/EMERGENCIA",
      rojos:["Inestabilidad, hipoxemia","Alteración conciencia","Dolor severo refractario"],
      clave:"Ayuno + hidratación EV + analgesia + referencia si grave."
    },
    pasos:[
      {t:"Inicial", a:["Evaluar dolor epigástrico irradiado a dorso, vómitos.","Buscar causa (alcohol/litiasis)."]},
      {t:"Manejo", a:["Ayuno, hidratación EV (guiada), analgesia, antiemético.","Referir si signos de gravedad."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:25,
      rules:[
        {label:"Paracetamol: 15 mg/kg/dosis (máx 1000 mg)", group:"both", mgkg:15, max_mg:1000, notes:"Analgésico base."},
        {label:"Ondansetrón: 0.15 mg/kg (máx 8 mg)", group:"both", mgkg:0.15, max_mg:8, notes:"Antiemético."}
      ],
      fluids:[
        {label:"Bolo si hipoperfusión: 20 mL/kg (máx 1000 mL)", group:"both", mlkg:20, max_ml:1000, notes:"Reevaluar."}
      ]
    },
    rp:`CIE10: K85.9
IMP Dx: Pancreatitis aguda probable.
Conducta: Ayuno, hidratación EV guiada, analgesia + antiemético. Referir si signos de gravedad o mala respuesta.`,
    referir:["Inestabilidad, hipoxemia, dolor refractario, vómitos incoercibles."],
    seguridad:["Evitar sobrecarga de fluidos; reevaluar."]
  },

  // ===================== ITU / PIELONEFRITIS =====================
  {
    id:"itu_no_complicada",
    nombre:"ITU baja (cistitis) – manejo inicial",
    categoria:"Infecc",
    cie10:["N30.9 (Cistitis, no especificada)","N39.0 (Infección urinaria, sitio no especificado)"],
    sinonimos:["cistitis","disuria","polaquiuria","urgencia miccional"],
    triangulo:{
      tipo:"URGENCIA",
      rojos:["Fiebre/dolor lumbar (pielonefritis)","Embarazo","Varón/niño pequeño","Sepsis"],
      clave:"Confirmar con tira/uroanálisis si posible. Derivar si complicada o pielonefritis."
    },
    pasos:[
      {t:"Evaluación", a:["Síntomas urinarios, sin fiebre ni dolor lumbar.","Tira reactiva si disponible."]},
      {t:"Manejo", a:["Antibiótico según guía local y alergias.","Hidratación VO y analgesia."]},
      {t:"Decisión", a:["Referir si pielonefritis, embarazo, varón, niños pequeños o signos sistémicos."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:18,
      rules:[
        {label:"Paracetamol: 15 mg/kg/dosis (máx 1000 mg)", group:"both", mgkg:15, max_mg:1000, notes:"Si dolor/fiebre."}
      ],
      fluids:[]
    },
    rp:`CIE10: N30.9 / N39.0
IMP Dx: ITU baja probable.
Conducta: Uroanálisis/tira si disponible. ATB según guía local. Hidratación VO + analgesia. Referir si criterios de ITU complicada.`,
    referir:["Fiebre, dolor lumbar, embarazo, varón, niño pequeño, sepsis."],
    seguridad:["Si embarazo o peds: seguir guía específica y vigilar."]
  },

  {
    id:"pielonefritis",
    nombre:"Pielonefritis aguda – sospecha",
    categoria:"Infecc",
    cie10:["N10 (Pielonefritis aguda)"],
    sinonimos:["pielonefritis","fiebre + dolor lumbar","puñopercusion positiva","escalofrios"],
    triangulo:{
      tipo:"URGENCIA/EMERGENCIA",
      rojos:["Sepsis/shock","Vómitos incoercibles","Embarazo","Obstrucción sospecha"],
      clave:"ATB precoz + hidratación + referencia si grave o no tolera VO."
    },
    pasos:[
      {t:"Inicial", a:["Evaluar fiebre, dolor lumbar, náuseas/vómitos.","Uroanálisis si disponible (no retrasar ATB si grave)."]},
      {t:"Manejo", a:["ATB según guía local (parenteral si grave/no tolera).","Hidratación EV si vómitos o hipoperfusión."]},
      {t:"Decisión", a:["Referir si sepsis, embarazo, obstrucción, mala tolerancia VO."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:18,
      rules:[
        {label:"Ceftriaxona IM/EV: 50 mg/kg/día (máx 2000 mg)", group:"peds", mgkg:50, max_mg:2000, notes:"Si requiere parenteral (según criterio)."},
        {label:"Paracetamol: 15 mg/kg/dosis (máx 1000 mg)", group:"both", mgkg:15, max_mg:1000, notes:"Fiebre/dolor."}
      ],
      fluids:[
        {label:"Bolo si deshidratación/hipoperfusión: 20 mL/kg (máx 1000 mL)", group:"both", mlkg:20, max_ml:1000, notes:"Reevaluar."}
      ]
    },
    rp:`CIE10: N10
IMP Dx: Pielonefritis aguda probable.
Conducta: ATB precoz según guía local (parenteral si grave/no tolera VO). Hidratación EV si precisa. Referir si sepsis, embarazo, obstrucción o mala tolerancia.`,
    referir:["Sepsis/shock, embarazo, obstrucción, vómitos incoercibles."],
    seguridad:["No retrasar ATB si grave."]
  },

  // ===================== RENAL / HIPERKA / IRA =====================
  {
    id:"hiperK",
    nombre:"Hiperpotasemia – sospecha/manejo inicial",
    categoria:"Emerg",
    cie10:["E87.5 (Hiperpotasemia)"],
    sinonimos:["hiperkalemia","k alto","debilidad","arritmia","tfg baja"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["Cambios ECG","Bradicardia/arritmia","Debilidad marcada/parálisis"],
      clave:"ECG + estabilizar membrana + desplazar K + referencia/HD según recursos."
    },
    pasos:[
      {t:"0–5 min", a:["Monitor + ECG ASAP.","Buscar causa: IRC, IECA/ARA2, espironolactona, acidosis."]},
      {t:"5–15 min", a:["Si cambios ECG o alta sospecha: estabilizar (calcio EV según protocolo y disponibilidad).","Medidas de desplazamiento (insulina+glucosa, beta-agonista) según recursos."]},
      {t:"Decisión", a:["Referencia urgente para manejo completo/diálisis si severa o refractaria."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:20,
      rules:[
        {label:"Dextrosa (orientativo): 0.5 g/kg (máx 25 g)", group:"both", mgkg:0, max_mg:0, notes:"Calcular gramos (no mg): usar protocolo local (D10/D25/D50)."},
        {label:"Salbutamol neb (coadyuvante): 0.15 mg/kg (máx 5 mg)", group:"peds", mgkg:0.15, max_mg:5, notes:"Como medida de desplazamiento si se usa en tu protocolo."}
      ],
      fluids:[]
    },
    rp:`CIE10: E87.5
IMP Dx: Hiperpotasemia probable.
Conducta: Monitor + ECG. Si cambios ECG: estabilización con calcio EV según protocolo, medidas de desplazamiento (insulina+glucosa/beta-agonista) según recursos. Referencia urgente para manejo completo/diálisis si severa.`,
    referir:["Cambios ECG, arritmia, K severo, IRA/IRC avanzada."],
    seguridad:["Usar protocolos institucionales para calcio/insulina; vigilar hipoglicemia."]
  },

  {
    id:"ira",
    nombre:"Insuficiencia renal aguda (IRA) – enfoque inicial",
    categoria:"Emerg",
    cie10:["N17.9 (Insuficiencia renal aguda, no especificada)"],
    sinonimos:["ira","creatinina alta","oliguria","tfg baja"],
    triangulo:{
      tipo:"URGENCIA/EMERGENCIA",
      rojos:["Anuria/oliguria severa","HiperK/edema pulmonar","Uremia con alteración conciencia"],
      clave:"Identificar prerrenal/renal/posrenal. Corregir hipovolemia si aplica y referir si complicaciones."
    },
    pasos:[
      {t:"Inicial", a:["Evaluar volumen: mucosas, PA, edema, diuresis.","Suspender nefrotóxicos si posible (AINEs, etc.)."]},
      {t:"Buscar causa", a:["Prerrenal (deshidratación/sepsis), posrenal (retención/obstrucción).","Si signos obstrucción: derivar para evaluación."]},
      {t:"Decisión", a:["Referir si hiperK, EAP, anuria, encefalopatía urémica o sepsis."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:20,
      rules:[],
      fluids:[
        {label:"Bolo si hipovolemia: 20 mL/kg (máx 1000 mL)", group:"both", mlkg:20, max_ml:1000, notes:"Solo si hipovolemia; reevaluar."}
      ]
    },
    rp:`CIE10: N17.9
IMP Dx: IRA probable.
Conducta: Evaluar volemia y diuresis, suspender nefrotóxicos, buscar causa prerrenal/posrenal. Fluidos si hipovolemia. Referir si complicaciones (hiperK, EAP, anuria, sepsis).`,
    referir:["HiperK, EAP, anuria/oliguria severa, uremia sintomática."],
    seguridad:["No sobrehidratar si sospecha congestión/IC."]
  },

  // ===================== HEMORRAGIA DIGESTIVA ALTA =====================
  {
    id:"hda",
    nombre:"Hemorragia digestiva alta (HDA) – enfoque inicial",
    categoria:"Emerg",
    cie10:["K92.0 (Hematemesis)","K92.1 (Melena)","K92.2 (Hemorragia GI no especificada)"],
    sinonimos:["hda","hematemesis","melena","vomito con sangre"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["Shock/hipotensión","Hematemesis activa","Síncope","Comorbilidad severa"],
      clave:"ABCDE + 2 vías + fluidos y hemoderivados según disponibilidad + referencia."
    },
    pasos:[
      {t:"0–5 min", a:["ABCDE, monitor, oxígeno si precisa.","2 vías gruesas si posible.","Valorar perfusión y sangrado activo."]},
      {t:"5–15 min", a:["Cristaloides guiados por respuesta.","Ayuno estricto.","Preparar referencia/derivación."]},
      {t:"Decisión", a:["Referir urgente (endoscopía/ UCI si shock)."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:20,
      rules:[
        {label:"Bolo cristaloide si shock: 20 mL/kg (máx 1000 mL)", group:"both", mgkg:0, max_mg:0, notes:"Usar sección de fluidos abajo."}
      ],
      fluids:[
        {label:"Bolo si shock: 20 mL/kg (máx 1000 mL)", group:"both", mlkg:20, max_ml:1000, notes:"Reevaluar. Considerar transfusión según protocolo."}
      ]
    },
    rp:`CIE10: K92.0 / K92.1 / K92.2
IMP Dx: Hemorragia digestiva alta probable.
Conducta: ABCDE, monitor, 2 vías. Fluidos guiados por respuesta. Ayuno. Preparar referencia urgente para endoscopía/manejo definitivo.`,
    referir:["Siempre si hematemesis/melena con inestabilidad o sangrado activo."],
    seguridad:["No retrasar referencia; vigilar vía aérea si vómitos con sangre."]
  },

  // ===================== ASMA SEVERA (MgSO4) =====================
  {
    id:"asma_severa",
    nombre:"Asma severa (peds/adulto) – escalamiento",
    categoria:"Resp",
    cie10:["J46 (Estado asmático)","J45.- (Asma)"],
    sinonimos:["asma severa","estado asmatico","silencio auscultatorio","fatiga respiratoria"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["SatO₂ <92% persistente","Agotamiento/somnolencia","Silencio auscultatorio","Pico flujo muy bajo si disponible"],
      clave:"Broncodilatadores + ipratropio + corticoide + considerar MgSO4 IV (peds) + referencia."
    },
    pasos:[
      {t:"Inicial", a:["O₂ meta 92–96% (EPOC no aplica).","Salbutamol repetido + ipratropio.","Corticoide precoz."]},
      {t:"Escalar", a:["Si mala respuesta: considerar MgSO4 IV (especialmente peds) según protocolo.","Preparar referencia/hospitalización."]},
      {t:"Decisión", a:["Referir urgente si fatiga respiratoria, Sat baja persistente o no respuesta."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:20,
      rules:[
        {label:"MgSO4 IV (peds): 50 mg/kg (máx 2000 mg)", group:"peds", mgkg:50, max_mg:2000, notes:"Infundir según protocolo local; monitor si posible."},
        {label:"Prednisona VO: 1 mg/kg (máx 50 mg)", group:"both", mgkg:1, max_mg:50, notes:"Si VO posible."},
        {label:"Hidrocortisona EV: 2 mg/kg (máx 100 mg)", group:"both", mgkg:2, max_mg:100, notes:"Alternativa EV."}
      ],
      fluids:[]
    },
    rp:`CIE10: J46 / J45.-
IMP Dx: Asma severa / estado asmático.
Conducta: O₂ meta 92–96%, salbutamol repetido + ipratropio, corticoide precoz. Si mala respuesta: considerar MgSO4 IV (peds 50 mg/kg máx 2 g) según protocolo. Referencia urgente.`,
    referir:["Fatiga, Sat persistente baja, no respuesta al manejo inicial."],
    seguridad:["Vigilar hipotensión/efectos con MgSO4; usar protocolo."]
  },

  // ===================== OBSTETRICIA (ECLAMPSIA) =====================
  {
    id:"eclampsia",
    nombre:"Eclampsia / convulsión en gestante – inicial",
    categoria:"Emerg",
    cie10:["O15.9 (Eclampsia, no especificada)","O14.9 (Preeclampsia, no especificada)"],
    sinonimos:["eclampsia","convulsion gestante","preeclampsia severa"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["Convulsión en gestante","HTA severa","Cefalea intensa/alteración visual","Dolor epigástrico"],
      clave:"ABCDE + MgSO4 + controlar PA + referencia obstétrica urgente."
    },
    pasos:[
      {t:"0–5 min", a:["ABCDE, posición lateral, O₂ si precisa.","Tomar PA, buscar signos de severidad.","Canalizar vía EV."]},
      {t:"Tratamiento", a:["MgSO4 según protocolo institucional (carga + mantenimiento).","Control PA con esquema local (si disponible)."]},
      {t:"Decisión", a:["Referencia obstétrica urgente (manejo definitivo/parto según caso)."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:20,
      rules:[
        {label:"MgSO4 (carga orientativa): 50 mg/kg (máx 4000 mg)", group:"adult", mgkg:50, max_mg:4000, notes:"Usar esquema obstétrico institucional (p.ej. 4 g IV carga)."}
      ],
      fluids:[]
    },
    rp:`CIE10: O15.9 / O14.9
IMP Dx: Eclampsia probable.
Conducta: ABCDE, lateralizar, O₂ si precisa. Iniciar MgSO4 según protocolo institucional y controlar PA según esquema local. Referencia obstétrica urgente.`,
    referir:["Siempre."],
    seguridad:["MgSO4 requiere vigilancia clínica; usar protocolo obstétrico."]
  },

  // ===================== TOXICOLOGÍA (OP / PARACETAMOL) =====================
  {
    id:"intoxicacion_op",
    nombre:"Intoxicación por organofosforados – sospecha",
    categoria:"Emerg",
    cie10:["T60.0 (Toxicidad por insecticidas organofosforados y carbamatos)"],
    sinonimos:["organofosforados","op","colinergico","salivacion","miosis","broncorrea"],
    triangulo:{
      tipo:"EMERGENCIA",
      rojos:["Broncorrea/broncoespasmo","Bradicardia/hipotensión","Alteración conciencia/convulsión"],
      clave:"Descontaminación + ABC + atropina según clínica + referencia."
    },
    pasos:[
      {t:"Seguridad", a:["Protección personal (guantes/mascarilla).","Retirar ropa contaminada, lavado piel."]},
      {t:"ABCDE", a:["Asegurar vía aérea; aspiración si broncorrea.","O₂, monitor."]},
      {t:"Tratamiento", a:["Atropina titulada a secreciones/broncorrea (según protocolo local).","BZD si convulsión.","Referencia."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:20,
      rules:[
        {label:"Diazepam EV: 0.15 mg/kg (máx 10 mg)", group:"both", mgkg:0.15, max_mg:10, notes:"Si convulsión/agitación."}
      ],
      fluids:[
        {label:"Bolo si shock: 20 mL/kg (máx 1000 mL)", group:"both", mlkg:20, max_ml:1000, notes:"Reevaluar."}
      ]
    },
    rp:`CIE10: T60.0
IMP Dx: Intoxicación por organofosforados probable.
Conducta: Protección personal y descontaminación. ABCDE, O₂, aspiración si broncorrea. Atropina titulada según protocolo local. Diazepam si convulsión. Referencia urgente.`,
    referir:["Siempre (moderada/severa)."],
    seguridad:["Evitar exposición del personal; descontaminación es clave."]
  },

  {
    id:"intoxicacion_paracetamol",
    nombre:"Intoxicación por paracetamol – sospecha",
    categoria:"Emerg",
    cie10:["T39.1 (Envenenamiento por 4-aminofenol derivados – paracetamol)"],
    sinonimos:["sobredosis paracetamol","acetaminofen","ingesta masiva"],
    triangulo:{
      tipo:"URGENCIA/EMERGENCIA",
      rojos:["Ingesta grande o tiempo incierto","Vómitos persistentes","Alteración conciencia","Hepatopatía previa"],
      clave:"Determinar dosis/tiempo. Referir para N-acetilcisteína (NAC) si indicado."
    },
    pasos:[
      {t:"Inicial", a:["Determinar dosis total y hora de ingesta.","Evaluar vómitos/síntomas.","Referencia a centro con NAC/lab si sospecha significativa."]},
      {t:"Soporte", a:["Antiemético si precisa.","No retrasar referencia si dosis alta o tiempo incierto."]}
    ],
    calc:{
      adultKgDefault:70,
      pedsKgDefault:15,
      rules:[
        {label:"Ondansetrón: 0.15 mg/kg (máx 8 mg)", group:"both", mgkg:0.15, max_mg:8, notes:"Si vómitos."}
      ],
      fluids:[]
    },
    rp:`CIE10: T39.1
IMP Dx: Intoxicación por paracetamol probable.
Conducta: Estimar dosis (mg/kg) y tiempo. Soporte + antiemético. Referir a centro con laboratorio/NAC si dosis alta, tiempo incierto o síntomas.`,
    referir:["Dosis alta, tiempo incierto, hepatopatía, síntomas significativos."],
    seguridad:["NAC es tiempo-dependiente; no demorar referencia."]
  }
];
// ===============================
// UI + BUSCADOR (engancha con index.html)
// ===============================

const $ = (id) => document.getElementById(id);

function norm(s) {
  return (s || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function matches(proto, q) {
  const nq = norm(q);
  if (!nq) return false;

  const nombre = norm(proto.nombre);
  const cat = norm(proto.categoria);
  const sin = (proto.sinonimos || []).map(norm).join(" ");
  const cie = (proto.cie10 || []).map(norm).join(" ");

  return (
    nombre.includes(nq) ||
    cat.includes(nq) ||
    sin.includes(nq) ||
    cie.includes(nq) ||
    norm(proto.id).includes(nq)
  );
}

function renderList(items) {
  const list = $("list");
  if (!list) return;

  if (!items.length) {
    list.innerHTML = `<div class="empty">Sin resultados</div>`;
    return;
  }

  list.innerHTML = items
    .map((p) => {
      const cie = (p.cie10 || []).join(" · ");
      return `
        <button class="card" data-id="${p.id}">
          <div class="card-title">${p.nombre || p.id}</div>
          <div class="card-sub">${p.categoria || ""}</div>
          <div class="card-cie">${cie}</div>
        </button>
      `;
    })
    .join("");

  // abrir modal al tocar una tarjeta
  list.querySelectorAll(".card").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const p = PROTO.find((x) => x.id === id);
      if (p) openModal(p);
    });
  });
}

function openModal(p) {
  const back = $("modalBack");
  const title = $("mTitle");
  const content = $("mContent");
  if (!back || !title || !content) return;

  title.textContent = p.nombre || p.id;

  const cie = (p.cie10 || []).join(" · ");
  const rojos = (p.triangulo?.rojos || []).map((x) => `<li>${x}</li>`).join("");
  const pasos = (p.pasos || [])
    .map((st) => `<li><b>${st.t}</b>: ${(st.a || []).join(" · ")}</li>`)
    .join("");

  const calc = p.calc?.rules?.length
    ? `<h4>Calculadora</h4><ul>${
        p.calc.rules
          .map((r) => `<li>${r.label}${r.notes ? ` — ${r.notes}` : ""}</li>`)
          .join("")
      }</ul>`
    : "";

  content.innerHTML = `
    <div class="modal-block">
      <div><b>CIE-10:</b> ${cie || "-"}</div>
      <div style="margin-top:8px"><b>Triángulo:</b> ${p.triangulo?.tipo || "-"}</div>
      ${rojos ? `<div style="margin-top:8px"><b>Alertas (rojos):</b><ul>${rojos}</ul></div>` : ""}
      <div style="margin-top:8px"><b>Clave:</b> ${p.triangulo?.clave || "-"}</div>
      ${pasos ? `<h4>Pasos</h4><ul>${pasos}</ul>` : ""}
      ${calc}
      <h4>RP</h4>
      <pre class="rp">${p.rp || "—"}</pre>
    </div>
  `;

  back.style.display = "block";

  const btnClose = $("btnClose");
  if (btnClose) btnClose.onclick = () => (back.style.display = "none");

  back.onclick = (e) => {
    if (e.target === back) back.style.display = "none";
  };

  const btnCopy = $("btnCopyRP");
  if (btnCopy) {
    btnCopy.onclick = async () => {
      try {
        await navigator.clipboard.writeText(p.rp || "");
        btnCopy.textContent = "Copiado ✅";
        setTimeout(() => (btnCopy.textContent = "Copiar RP"), 1200);
      } catch {
        alert("No se pudo copiar. (Permisos del navegador)");
      }
    };
  }
}

function buildChips() {
  const chips = $("chips");
  if (!chips) return;

  const cats = Array.from(
    new Set(PROTO.map((p) => p.categoria).filter(Boolean))
  ).sort();

  chips.innerHTML = `<button class="chip" data-cat="__all">Todo</button>` +
    cats.map((c) => `<button class="chip" data-cat="${c}">${c}</button>`).join("");

  chips.querySelectorAll(".chip").forEach((b) => {
    b.addEventListener("click", () => {
      const cat = b.getAttribute("data-cat");
      const q = $("q")?.value?.trim() || "";
      const base = q ? PROTO.filter((p) => matches(p, q)) : PROTO.slice();
      const filtered = (cat === "__all") ? base : base.filter((p) => p.categoria === cat);
      renderList(filtered.slice(0, 80));
    });
  });
}

function initUI() {
  const input = $("q");
  const btnClear = $("btnClear");

  buildChips();
  renderList(PROTO.slice(0, 60));

  if (input) {
    input.addEventListener("input", () => {
      const q = input.value.trim();
      const items = q ? PROTO.filter((p) => matches(p, q)) : PROTO.slice();
      renderList(items.slice(0, 80));
    });
  }

  if (btnClear && input) {
    btnClear.addEventListener("click", () => {
      input.value = "";
      renderList(PROTO.slice(0, 60));
      input.focus();
    });
  }
}

document.addEventListener("DOMContentLoaded", initUI);
