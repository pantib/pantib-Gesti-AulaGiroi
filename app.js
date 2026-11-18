/**
 * AulaViva - Gestió d'Aula Inclusiva de Primària
 * Llenguatge inclusiu i no sexista en català.
 * Dades 100% locals (localStorage).
 * Adaptat al Currículum d'Educació Primària (Decret 175/2022) - Generalitat de Catalunya.
 */

// Clau per a localStorage personalitzada per a l'Escola Giroi (La Garriga)
const STORAGE_KEY = 'aulaviva_escola_giroi_v2';

// DICCIONARI OFICIAL DEL CURRÍCULUM DE CATALUNYA (Decret 175/2022)
const CURRICULUM_CATALUNYA = {
  'mates': {
    id: 'mates',
    name: 'Matemàtiques',
    shortName: 'Mates',
    icon: 'calculator',
    color: 'emerald',
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    description: 'Resolució de problemes, connexions i raonament matemàtic estructurat en sentits.',
    sabers: [
      'Sentit numèric (conteo, càlcul, fraccions, estimació)',
      'Sentit de la mesura (magnituds, temps, longitud, unitats)',
      'Sentit espacial (formes geomètriques, patrons, orientació)',
      'Sentit algebraic (patrons, relacions i pensament computacional)',
      'Sentit estocàstic (gràfics, estadística i interpretació de dades)',
      'Sentit socioafectiu (perseverança, esforç i treball col·laboratiu)'
    ]
  },
  'catala': {
    id: 'catala',
    name: 'Llengua Catalana i Literatura',
    shortName: 'Català',
    icon: 'book-open',
    color: 'sky',
    badgeClass: 'bg-sky-50 text-sky-800 border-sky-200',
    description: 'Àmbit lingüístic: comunicació oral, comprensió lectora, expressió escrita i gaudi literari.',
    sabers: [
      'Comunicació oral: parlar, escoltar i conversar',
      'Comprensió lectora i alfabetització informacional',
      'Expressió escrita i producció de textos coherents',
      'Educació literària i gaudi de la lectura',
      'Reflexió sobre la llengua i normes gramaticals'
    ]
  },
  'medi': {
    id: 'medi',
    name: 'Coneixement del Medi',
    shortName: 'Medi',
    icon: 'sprout',
    color: 'amber',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
    description: 'Coneixement del Medi Natural, Social i Cultural: mètode científic, natura, societat i sostenibilitat.',
    sabers: [
      'Cultura científica: investigació i mètode científic',
      'Éssers vius, biodiversitat i ecosistemes',
      'Matèria, forces i energia',
      'Tecnologia, digitalització i pensament de disseny',
      'Societats en el temps i patrimoni històric',
      'Geografia, canvi climàtic i desenvolupament sostenible'
    ]
  },
  'angles': {
    id: 'angles',
    name: 'Llengua Estrangera (Anglès)',
    shortName: 'Anglès',
    icon: 'languages',
    color: 'indigo',
    badgeClass: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    description: 'Competència plurilingüe, comunicació activa oral i escrita en llengua anglesa.',
    sabers: [
      'Oral communication: listening and speaking',
      'Reading comprehension and visual literacy',
      'Written production and creative expression',
      'Plurilingual and intercultural awareness'
    ]
  },
  'artistica': {
    id: 'artistica',
    name: 'Educació Artística',
    shortName: 'Artística',
    icon: 'palette',
    color: 'purple',
    badgeClass: 'bg-purple-50 text-purple-800 border-purple-200',
    description: 'Arts plàstiques i visuals, expressió musical i dansa.',
    sabers: [
      'Percepció i anàlisi d\'obres artístiques i musicals',
      'Creació i expressió plàstica i visual (tècniques mixtes)',
      'Interpretació musical, ritme i expressió vocal',
      'Dansa, expressió corporal i moviment'
    ]
  },
  'ef': {
    id: 'ef',
    name: 'Educació Física',
    shortName: 'Ed. Física',
    icon: 'activity',
    color: 'rose',
    badgeClass: 'bg-rose-50 text-rose-800 border-rose-200',
    description: 'Vida activa, hàbits saludables, habilitats motrius i joc cooperatiu.',
    sabers: [
      'Vida activa, salut corporal i benestar físic',
      'Habilitats motrius i resolució en situacions de joc',
      'Treball cooperatiu, inclusió i respecte a les normes',
      'Expressió corporal i manifestacions de la cultura motriu'
    ]
  },
  'valors': {
    id: 'valors',
    name: 'Valors Cívics i Ètics',
    shortName: 'Valors',
    icon: 'heart-handshake',
    color: 'teal',
    badgeClass: 'bg-teal-50 text-teal-800 border-teal-200',
    description: 'Autoconeixement, convivència democràtica, igualtat i compromís ètic.',
    sabers: [
      'Autoconeixement, autoestima i gestió emocional',
      'Convivència pacífica, empatia i resolució dialogada',
      'Igualtat de gènere, drets de la infància i diversitat',
      'Ètica ambiental i sostenibilitat'
    ]
  }
};

const TRIMESTERS = [
  { id: 't1', name: '1r Trimestre', period: 'Setembre - Desembre' },
  { id: 't2', name: '2n Trimestre', period: 'Gener - Març' },
  { id: 't3', name: '3r Trimestre', period: 'Abril - Juny' }
];

// Estat per defecte personalitzat per a l'Escola Giroi (La Garriga)
const DEFAULT_STATE = {
  currentGroupId: 'g-4a',
  groups: [
    { id: 'g-4a', name: '4t A de Primària - Escola Giroi', stage: 'Cicle Mitjà', academicYear: '2026-2027' },
    { id: 'g-4b', name: '4t B de Primària - Escola Giroi', stage: 'Cicle Mitjà', academicYear: '2026-2027' },
    { id: 'g-3a', name: '3r de Primària - Escola Giroi', stage: 'Cicle Mitjà', academicYear: '2026-2027' }
  ],
  students: [
    {
      id: 's-01',
      groupId: 'g-4a',
      code: 'Alumnat 01',
      adaptations: ['Altes Capacitats'],
      notes: 'Gran curiositat científica i resolució ràpida de problemes lògics. Molt motivat pel projecte d\'entorn del Montseny.',
      createdAt: '2026-09-10'
    },
    {
      id: 's-02',
      groupId: 'g-4a',
      code: 'Alumnat 02',
      adaptations: ['Pla Individualitzat (PI)', 'Reforç de Lectoescriptura'],
      notes: 'Molt bona predisposició en tasques cooperatives i a l\'hort escolar del Giroi. Convé acompanyar enunciats amb suport visual.',
      createdAt: '2026-09-10'
    },
    {
      id: 's-03',
      groupId: 'g-4a',
      code: 'Alumnat 03',
      adaptations: ['Suport Lingüístic (Aula d\'Acollida)'],
      notes: 'Avanç molt positiu en expressió oral en català. Participa activament en els jocs de pati i a les assemblees de classe.',
      createdAt: '2026-09-10'
    },
    {
      id: 's-04',
      groupId: 'g-4a',
      code: 'Alumnat 04',
      adaptations: [],
      notes: 'Lideratge positiu i empatia en la mediació i l\'assemblea de l\'Escola Giroi.',
      createdAt: '2026-09-10'
    },
    {
      id: 's-05',
      groupId: 'g-4a',
      code: 'Alumnat 05',
      adaptations: ['Reforç de Lectoescriptura'],
      notes: 'Evolució constant en comprensió de textos curts i lectura acompanyada a la biblioteca d\'aula.',
      createdAt: '2026-09-10'
    },
    {
      id: 's-06',
      groupId: 'g-4a',
      code: 'Alumnat 06',
      adaptations: [],
      notes: 'Treball sistemàtic, puntual i molt ordenat en el quadern d\'aprenentatge.',
      createdAt: '2026-09-10'
    },
    {
      id: 's-07',
      groupId: 'g-4a',
      code: 'Alumnat 07',
      adaptations: ['Dificultat Específica (Dislèxia)'],
      notes: 'Utilitzar tipografies clares i espaiades. Donar temps addicional en lectures i valorar respostes orals.',
      createdAt: '2026-09-10'
    },
    {
      id: 's-08',
      groupId: 'g-4a',
      code: 'Alumnat 08',
      adaptations: [],
      notes: 'Destaca en expressió artística i en les composicions de Land Art amb materials naturals dels patis del Giroi.',
      createdAt: '2026-09-10'
    },
    {
      id: 's-09',
      groupId: 'g-4a',
      code: 'Alumnat 09',
      adaptations: ['Pla Individualitzat (PI)'],
      notes: 'Coordinació periòdica amb l\'EAP i docent d\'educació especial de l\'escola. Bona resposta a rutines visuals.',
      createdAt: '2026-09-10'
    },
    {
      id: 's-10',
      groupId: 'g-4a',
      code: 'Alumnat 10',
      adaptations: [],
      notes: 'Gran entusiasme per les sortides a l\'entorn natural de la Garriga (riera del Congost i bosc de Malhivern).',
      createdAt: '2026-09-10'
    },
    {
      id: 's-11',
      groupId: 'g-3a',
      code: 'Alumnat 01 (3r)',
      adaptations: ['Suport Lingüístic (Aula d\'Acollida)'],
      notes: 'Bona adaptació al grup classe a l\'Escola Giroi.',
      createdAt: '2026-09-12'
    }
  ],
  attendance: {
    'g-4a': {
      '2026-11-17': {
        's-01': 'present', 's-02': 'present', 's-03': 'retard', 's-04': 'present',
        's-05': 'present', 's-06': 'present', 's-07': 'justificat', 's-08': 'present',
        's-09': 'present', 's-10': 'present'
      },
      '2026-11-16': {
        's-01': 'present', 's-02': 'present', 's-03': 'present', 's-04': 'present',
        's-05': 'present', 's-06': 'absent', 's-07': 'present', 's-08': 'present',
        's-09': 'present', 's-10': 'present'
      },
      '2026-11-13': {
        's-01': 'present', 's-02': 'present', 's-03': 'present', 's-04': 'present',
        's-05': 'retard', 's-06': 'present', 's-07': 'present', 's-08': 'present',
        's-09': 'present', 's-10': 'present'
      }
    }
  },
  // Estructura per Matèria i Trimestre
  gradebookBySubject: {
    'g-4a': {
      'mates': {
        't1': {
          columns: [
            { id: 'col-m-1', title: 'Mesura i plànol del pati del Giroi', saber: 'Sentit de la mesura (magnituds, temps, longitud, unitats)', type: 'numeric', date: '2026-10-15' },
            { id: 'col-m-2', title: 'Fraccions i càlcul en problemes reals', saber: 'Sentit numèric (conteo, càlcul, fraccions, estimació)', type: 'numeric', date: '2026-11-04' },
            { id: 'col-m-3', title: 'Resolució cooperativa de reptes', saber: 'Sentit socioafectiu (perseverança, esforç i treball col·laboratiu)', type: 'qualitative', date: '2026-11-12' }
          ],
          grades: {
            's-01': { 'col-m-1': 9.5, 'col-m-2': 9.0, 'col-m-3': 'AS' },
            's-02': { 'col-m-1': 7.0, 'col-m-2': 6.5, 'col-m-3': 'AS' },
            's-03': { 'col-m-1': 7.5, 'col-m-2': 8.0, 'col-m-3': 'AS' },
            's-04': { 'col-m-1': 8.5, 'col-m-2': 8.5, 'col-m-3': 'AS' },
            's-05': { 'col-m-1': 6.5, 'col-m-2': 6.0, 'col-m-3': 'EP' },
            's-06': { 'col-m-1': 9.0, 'col-m-2': 8.5, 'col-m-3': 'AS' },
            's-07': { 'col-m-1': 7.5, 'col-m-2': 7.0, 'col-m-3': 'AS' },
            's-08': { 'col-m-1': 8.0, 'col-m-2': 8.5, 'col-m-3': 'AS' },
            's-09': { 'col-m-1': 6.0, 'col-m-2': 6.5, 'col-m-3': 'EP' },
            's-10': { 'col-m-1': 8.5, 'col-m-2': 8.0, 'col-m-3': 'AS' }
          }
        },
        't2': {
          columns: [
            { id: 'col-m-4', title: 'Geometria a l\'arquitectura de la Garriga', saber: 'Sentit espacial (formes geomètriques, patrons, orientació)', type: 'numeric', date: '2027-01-22' },
            { id: 'col-m-5', title: 'Estadística d\'hàbits sostenibles al Giroi', saber: 'Sentit estocàstic (gràfics, estadística i interpretació de dades)', type: 'qualitative', date: '2027-02-10' }
          ],
          grades: {
            's-01': { 'col-m-4': 9.5, 'col-m-5': 'AS' },
            's-02': { 'col-m-4': 7.0, 'col-m-5': 'AS' },
            's-04': { 'col-m-4': 8.5, 'col-m-5': 'AS' },
            's-06': { 'col-m-4': 9.0, 'col-m-5': 'AS' }
          }
        },
        't3': { columns: [], grades: {} }
      },
      'catala': {
        't1': {
          columns: [
            { id: 'col-c-1', title: 'Crònica: Sortida a la riera del Congost', saber: 'Expressió escrita i producció de textos coherents', type: 'numeric', date: '2026-10-18' },
            { id: 'col-c-2', title: 'Llegenda del Montseny', saber: 'Comprensió lectora i alfabetització informacional', type: 'qualitative', date: '2026-11-08' },
            { id: 'col-c-3', title: 'Assemblea: propostes per al pati del Giroi', saber: 'Comunicació oral: parlar, escoltar i conversar', type: 'qualitative', date: '2026-11-14' }
          ],
          grades: {
            's-01': { 'col-c-1': 9.0, 'col-c-2': 'AS', 'col-c-3': 'AS' },
            's-02': { 'col-c-1': 6.5, 'col-c-2': 'EP', 'col-c-3': 'AS' },
            's-03': { 'col-c-1': 6.0, 'col-c-2': 'EP', 'col-c-3': 'AS' },
            's-04': { 'col-c-1': 8.5, 'col-c-2': 'AS', 'col-c-3': 'AS' },
            's-05': { 'col-c-1': 6.5, 'col-c-2': 'EP', 'col-c-3': 'AS' },
            's-06': { 'col-c-1': 8.5, 'col-c-2': 'AS', 'col-c-3': 'AS' },
            's-07': { 'col-c-1': 7.0, 'col-c-2': 'AS', 'col-c-3': 'AS' },
            's-08': { 'col-c-1': 9.0, 'col-c-2': 'AS', 'col-c-3': 'AS' },
            's-09': { 'col-c-1': 6.0, 'col-c-2': 'EP', 'col-c-3': 'AS' },
            's-10': { 'col-c-1': 8.0, 'col-c-2': 'AS', 'col-c-3': 'AS' }
          }
        },
        't2': {
          columns: [
            { id: 'col-c-4', title: 'Recital poètic a l\'escola', saber: 'Educació literària i gaudi de la lectura', type: 'qualitative', date: '2027-01-29' }
          ],
          grades: {
            's-01': { 'col-c-4': 'AS' },
            's-04': { 'col-c-4': 'AS' }
          }
        },
        't3': { columns: [], grades: {} }
      },
      'medi': {
        't1': {
          columns: [
            { id: 'col-med-1', title: 'Projecte: La biodiversitat del Congost i Montseny', saber: 'Éssers vius, biodiversitat i ecosistemes', type: 'qualitative', date: '2026-10-25' },
            { id: 'col-med-2', title: 'Investigació a l\'hort escolar del Giroi', saber: 'Cultura científica: investigació i mètode científic', type: 'numeric', date: '2026-11-10' }
          ],
          grades: {
            's-01': { 'col-med-1': 'AS', 'col-med-2': 9.5 },
            's-02': { 'col-med-1': 'AS', 'col-med-2': 7.5 },
            's-03': { 'col-med-1': 'AS', 'col-med-2': 7.0 },
            's-04': { 'col-med-1': 'AS', 'col-med-2': 9.0 },
            's-05': { 'col-med-1': 'AS', 'col-med-2': 7.0 },
            's-06': { 'col-med-1': 'AS', 'col-med-2': 8.5 },
            's-07': { 'col-med-1': 'AS', 'col-med-2': 7.5 },
            's-08': { 'col-med-1': 'AS', 'col-med-2': 9.0 },
            's-09': { 'col-med-1': 'EP', 'col-med-2': 6.5 },
            's-10': { 'col-med-1': 'AS', 'col-med-2': 8.5 }
          }
        },
        't2': {
          columns: [
            { id: 'col-med-3', title: 'Patrimoni modernista i rural de la Garriga', saber: 'Societats en el temps i patrimoni històric', type: 'qualitative', date: '2027-02-15' }
          ],
          grades: {
            's-01': { 'col-med-3': 'AS' },
            's-04': { 'col-med-3': 'AS' }
          }
        },
        't3': { columns: [], grades: {} }
      },
      'angles': {
        't1': {
          columns: [
            { id: 'col-ang-1', title: 'Oral interaction: Animals in our environment', saber: 'Oral communication: listening and speaking', type: 'qualitative', date: '2026-11-05' },
            { id: 'col-ang-2', title: 'My school day at Escola Giroi', saber: 'Written production and creative expression', type: 'numeric', date: '2026-11-15' }
          ],
          grades: {
            's-01': { 'col-ang-1': 'AS', 'col-ang-2': 9.0 },
            's-02': { 'col-ang-1': 'AS', 'col-ang-2': 6.5 },
            's-04': { 'col-ang-1': 'AS', 'col-ang-2': 8.5 }
          }
        },
        't2': { columns: [], grades: {} },
        't3': { columns: [], grades: {} }
      },
      'artistica': {
        't1': {
          columns: [
            { id: 'col-art-1', title: 'Land Art amb elements dels jardins del Giroi', saber: 'Creació i expressió plàstica i visual (tècniques mixtes)', type: 'qualitative', date: '2026-11-02' }
          ],
          grades: {
            's-08': { 'col-art-1': 'AS' },
            's-01': { 'col-art-1': 'AS' }
          }
        },
        't2': { columns: [], grades: {} },
        't3': { columns: [], grades: {} }
      },
      'ef': {
        't1': {
          columns: [
            { id: 'col-ef-1', title: 'Cursa d\'orientació al bosc de Malhivern', saber: 'Habilitats motrius i resolució en situacions de joc', type: 'qualitative', date: '2026-10-30' }
          ],
          grades: {
            's-04': { 'col-ef-1': 'AS' },
            's-01': { 'col-ef-1': 'AS' }
          }
        },
        't2': { columns: [], grades: {} },
        't3': { columns: [], grades: {} }
      },
      'valors': {
        't1': {
          columns: [
            { id: 'col-val-1', title: 'Cercle de convivència i resolució dialogada', saber: 'Convivència pacífica, empatia i resolució dialogada', type: 'qualitative', date: '2026-11-11' }
          ],
          grades: {
            's-04': { 'col-val-1': 'AS' },
            's-03': { 'col-val-1': 'AS' }
          }
        },
        't2': { columns: [], grades: {} },
        't3': { columns: [], grades: {} }
      }
    }
  }
};

// Variable d'estat global
let AppState = null;

// Subpàgina i navegació del quadern
let activeSubjectId = 'mates'; // 'mates', 'catala', 'medi', 'angles', 'artistica', 'ef', 'valors', o 'all'
let activeTrimesterId = 't1';  // 't1', 't2', 't3', o 'annual'

// Estat temporal per al modal d'edició d'alumnat
let currentEditingStudentId = null;
let currentEditingAdaptations = [];

// Estat temporal per a la importació massiva d'alumnat per CSV
let parsedCsvStudents = [];

// Inicialització en carregar la pàgina
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initDateInput();
  setupEventListeners();
  renderApp();
});

// ==========================================
// PERSISTÈNCIA DE DADES (localStorage)
// ==========================================

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      AppState = JSON.parse(raw);
    } else {
      // Revisa si hi havia dades antigues a v1 i migra-les
      const oldRaw = localStorage.getItem('aulaviva_docent_data_v1');
      if (oldRaw) {
        try {
          const oldData = JSON.parse(oldRaw);
          AppState = migrateV1toV2(oldData);
        } catch (err) {
          AppState = JSON.parse(JSON.stringify(DEFAULT_STATE));
        }
      } else {
        AppState = JSON.parse(JSON.stringify(DEFAULT_STATE));
      }
      saveState();
    }
  } catch (e) {
    console.error('Error en carregar de localStorage:', e);
    AppState = JSON.parse(JSON.stringify(DEFAULT_STATE));
  }
}

function migrateV1toV2(old) {
  const v2 = JSON.parse(JSON.stringify(DEFAULT_STATE));
  v2.groups = old.groups || v2.groups;
  v2.currentGroupId = old.currentGroupId || v2.currentGroupId;
  v2.students = old.students || v2.students;
  v2.attendance = old.attendance || v2.attendance;
  return v2;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(AppState));
  } catch (e) {
    console.error('Error en desar a localStorage:', e);
    showToast('No s\'han pogut desar les dades al navegador.', 'error');
  }
}

// ==========================================
// RENDERITZACIÓ GENERAL
// ==========================================

function renderApp() {
  renderGroupSelector();
  renderDashboard();
  renderAttendance();
  renderStudents();
  renderGradebook();
  
  // Refresca les icones Lucide
  if (window.lucide) {
    lucide.createIcons();
  }
}

// ==========================================
// GESTIÓ DE GRUPS CLASSE
// ==========================================

function renderGroupSelector() {
  const select = document.getElementById('group-select');
  if (!select) return;

  select.innerHTML = '';
  AppState.groups.forEach(g => {
    const option = document.createElement('option');
    option.value = g.id;
    option.textContent = g.name;
    if (g.id === AppState.currentGroupId) {
      option.selected = true;
    }
    select.appendChild(option);
  });

  const currentGroup = getCurrentGroup();
  const dashGroupName = document.getElementById('dash-group-name');
  if (dashGroupName && currentGroup) {
    dashGroupName.textContent = currentGroup.name;
  }
}

function getCurrentGroup() {
  return AppState.groups.find(g => g.id === AppState.currentGroupId) || AppState.groups[0];
}

function getCurrentGroupStudents() {
  return AppState.students.filter(s => s.groupId === AppState.currentGroupId);
}

// Helper per accedir a l'estructura del quadern
function ensureGroupGradebook(groupId) {
  if (!AppState.gradebookBySubject) {
    AppState.gradebookBySubject = {};
  }
  if (!AppState.gradebookBySubject[groupId]) {
    AppState.gradebookBySubject[groupId] = {};
  }
  Object.keys(CURRICULUM_CATALUNYA).forEach(subjId => {
    if (!AppState.gradebookBySubject[groupId][subjId]) {
      AppState.gradebookBySubject[groupId][subjId] = {
        't1': { columns: [], grades: {} },
        't2': { columns: [], grades: {} },
        't3': { columns: [], grades: {} }
      };
    } else {
      ['t1', 't2', 't3'].forEach(trimId => {
        if (!AppState.gradebookBySubject[groupId][subjId][trimId]) {
          AppState.gradebookBySubject[groupId][subjId][trimId] = { columns: [], grades: {} };
        }
      });
    }
  });
  return AppState.gradebookBySubject[groupId];
}

// ==========================================
// TAULER D'INICI (DASHBOARD)
// ==========================================

function renderDashboard() {
  const students = getCurrentGroupStudents();
  
  // Total Alumnat
  document.getElementById('stat-total-students').textContent = students.length;

  // Suports a la inclusió
  const studentsWithAdaptations = students.filter(s => s.adaptations && s.adaptations.length > 0);
  document.getElementById('stat-adaptations-count').textContent = studentsWithAdaptations.length;

  // Activitats al quadern (sumem totes les matèries i trimestres del grup)
  const groupGb = ensureGroupGradebook(AppState.currentGroupId);
  let totalActivities = 0;
  Object.values(groupGb).forEach(subjectData => {
    ['t1', 't2', 't3'].forEach(t => {
      if (subjectData[t] && subjectData[t].columns) {
        totalActivities += subjectData[t].columns.length;
      }
    });
  });
  document.getElementById('stat-activities-count').textContent = totalActivities;

  // Assistència d'avui
  const todayStr = getSelectedDate();
  const todayAttendance = (AppState.attendance && AppState.attendance[AppState.currentGroupId] && AppState.attendance[AppState.currentGroupId][todayStr]) || {};
  
  const presentCount = Object.values(todayAttendance).filter(st => st === 'present').length;
  const totalMarked = Object.values(todayAttendance).length;
  
  const statTodayAttendance = document.getElementById('stat-today-attendance');
  const statTodayDetail = document.getElementById('stat-today-detail');
  
  if (totalMarked > 0 && students.length > 0) {
    const pct = Math.round((presentCount / students.length) * 100);
    statTodayAttendance.textContent = `${pct}%`;
    statTodayDetail.textContent = `${presentCount} de ${students.length} presents avui`;
  } else {
    statTodayAttendance.textContent = '--%';
    statTodayDetail.textContent = 'Pendent de passar llista avui';
  }

  renderDashboardAttendanceHistory();
}

function renderDashboardAttendanceHistory() {
  const container = document.getElementById('dashboard-attendance-history');
  if (!container) return;

  const groupAttendance = (AppState.attendance && AppState.attendance[AppState.currentGroupId]) || {};
  const dates = Object.keys(groupAttendance).sort().reverse().slice(0, 4);
  const students = getCurrentGroupStudents();

  if (dates.length === 0) {
    container.innerHTML = `
      <div class="text-center py-6 text-slate-400 text-xs">
        Encara no s'ha registrat cap dia d'assistència per a aquest grup.
      </div>
    `;
    return;
  }

  container.innerHTML = dates.map(dateStr => {
    const dayData = groupAttendance[dateStr] || {};
    const present = Object.values(dayData).filter(s => s === 'present').length;
    const retard = Object.values(dayData).filter(s => s === 'retard').length;
    const absent = Object.values(dayData).filter(s => s === 'absent').length;
    const total = students.length || 1;
    const pct = Math.round((present / total) * 100);

    const formattedDate = formatDateCatalan(dateStr);

    return `
      <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100/80 transition-colors">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
            <i data-lucide="calendar" class="w-4 h-4"></i>
          </div>
          <div>
            <h4 class="text-xs font-bold text-slate-700">${formattedDate}</h4>
            <div class="flex items-center gap-2 mt-0.5 text-[11px] text-slate-500">
              <span class="text-emerald-700 font-medium">${present} presents</span> •
              <span class="text-amber-700 font-medium">${retard} retards</span> •
              <span class="text-rose-700 font-medium">${absent} absències</span>
            </div>
          </div>
        </div>
        <div class="text-right">
          <span class="text-xs font-extrabold ${pct >= 90 ? 'text-emerald-600' : pct >= 75 ? 'text-amber-600' : 'text-rose-600'}">
            ${pct}%
          </span>
          <p class="text-[10px] text-slate-400">Assoliment</p>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// PASSAR LLISTA (CONTROL D'ASSISTÈNCIA)
// ==========================================

function initDateInput() {
  const dateInput = document.getElementById('attendance-date-input');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    updateDayLabel(today);
  }
}

function getSelectedDate() {
  const dateInput = document.getElementById('attendance-date-input');
  return dateInput ? dateInput.value : new Date().toISOString().split('T')[0];
}

function updateDayLabel(dateStr) {
  const label = document.getElementById('attendance-day-label');
  if (label) {
    label.textContent = formatDateCatalan(dateStr, true);
  }
}

function renderAttendance() {
  const dateStr = getSelectedDate();
  const students = getCurrentGroupStudents();
  const container = document.getElementById('attendance-list-container');
  if (!container) return;

  if (!AppState.attendance) AppState.attendance = {};
  if (!AppState.attendance[AppState.currentGroupId]) AppState.attendance[AppState.currentGroupId] = {};
  const currentDayData = AppState.attendance[AppState.currentGroupId][dateStr] || {};

  updateAttendanceStats(students, currentDayData);

  if (students.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center text-slate-400 text-xs">
        No hi ha alumnat registrat en aquest grup classe. Afegeix el primer registre a la pestanya "Fitxes de l'alumnat".
      </div>
    `;
    return;
  }

  container.innerHTML = students.map((student, index) => {
    const status = currentDayData[student.id] || 'unmarked';
    const numDisplay = String(index + 1).padStart(2, '0');

    return `
      <div class="p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors">
        
        <!-- Identificador de l'alumnat -->
        <div class="flex items-center gap-3">
          <span class="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center shrink-0">
            ${numDisplay}
          </span>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-sm font-bold text-slate-800 cursor-pointer hover:text-brand-600 transition-colors" onclick="openStudentModal('${student.id}')">
                ${escapeHtml(student.code)}
              </span>
              ${student.adaptations && student.adaptations.length > 0 ? `
                <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
                  ${student.adaptations.length} suport${student.adaptations.length > 1 ? 's' : ''}
                </span>
              ` : ''}
            </div>
            ${student.notes ? `
              <p class="text-[11px] text-slate-400 truncate max-w-xs sm:max-w-md">${escapeHtml(student.notes)}</p>
            ` : ''}
          </div>
        </div>

        <!-- Botons ràpids d'estat -->
        <div class="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
          <button onclick="setAttendanceStatus('${student.id}', 'present')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
            status === 'present' 
              ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-600 ring-offset-1' 
              : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200/60'
          }">
            <i data-lucide="check" class="w-3.5 h-3.5"></i>
            <span>Present</span>
          </button>

          <button onclick="setAttendanceStatus('${student.id}', 'retard')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
            status === 'retard' 
              ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-500 ring-offset-1' 
              : 'bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200/60'
          }">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i>
            <span>Retard</span>
          </button>

          <button onclick="setAttendanceStatus('${student.id}', 'justificat')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
            status === 'justificat' 
              ? 'bg-sky-600 text-white shadow-sm ring-2 ring-sky-600 ring-offset-1' 
              : 'bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200/60'
          }">
            <i data-lucide="file-check" class="w-3.5 h-3.5"></i>
            <span>Justificat</span>
          </button>

          <button onclick="setAttendanceStatus('${student.id}', 'absent')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
            status === 'absent' 
              ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-600 ring-offset-1' 
              : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200/60'
          }">
            <i data-lucide="x" class="w-3.5 h-3.5"></i>
            <span>Absent</span>
          </button>
        </div>

      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function setAttendanceStatus(studentId, status) {
  const dateStr = getSelectedDate();
  if (!AppState.attendance[AppState.currentGroupId]) {
    AppState.attendance[AppState.currentGroupId] = {};
  }
  if (!AppState.attendance[AppState.currentGroupId][dateStr]) {
    AppState.attendance[AppState.currentGroupId][dateStr] = {};
  }

  AppState.attendance[AppState.currentGroupId][dateStr][studentId] = status;
  saveState();
  renderAttendance();
  renderDashboard();
}

function markAllPresent() {
  const dateStr = getSelectedDate();
  const students = getCurrentGroupStudents();
  if (!AppState.attendance[AppState.currentGroupId]) {
    AppState.attendance[AppState.currentGroupId] = {};
  }
  if (!AppState.attendance[AppState.currentGroupId][dateStr]) {
    AppState.attendance[AppState.currentGroupId][dateStr] = {};
  }

  students.forEach(s => {
    AppState.attendance[AppState.currentGroupId][dateStr][s.id] = 'present';
  });

  saveState();
  renderAttendance();
  renderDashboard();
  showToast('S\'ha marcat tot l\'alumnat com a present per a aquesta data.', 'success');
}

function updateAttendanceStats(students, dayData) {
  const total = students.length;
  const present = Object.values(dayData).filter(s => s === 'present').length;
  const retard = Object.values(dayData).filter(s => s === 'retard').length;
  const justificat = Object.values(dayData).filter(s => s === 'justificat').length;
  const absent = Object.values(dayData).filter(s => s === 'absent').length;

  document.getElementById('count-present').textContent = present;
  document.getElementById('count-retard').textContent = retard;
  document.getElementById('count-justificat').textContent = justificat;
  document.getElementById('count-absent').textContent = absent;

  const pct = total > 0 ? Math.round((present / total) * 100) : 0;
  document.getElementById('attendance-summary-percent').textContent = `${pct}% Present (${present}/${total})`;

  if (total > 0) {
    document.getElementById('bar-present').style.width = `${(present / total) * 100}%`;
    document.getElementById('bar-retard').style.width = `${(retard / total) * 100}%`;
    document.getElementById('bar-justificat').style.width = `${(justificat / total) * 100}%`;
    document.getElementById('bar-absent').style.width = `${(absent / total) * 100}%`;
  } else {
    document.getElementById('bar-present').style.width = '0%';
    document.getElementById('bar-retard').style.width = '0%';
    document.getElementById('bar-justificat').style.width = '0%';
    document.getElementById('bar-absent').style.width = '0%';
  }
}

// ==========================================
// FITXES DE L'ALUMNAT
// ==========================================

function renderStudents() {
  const container = document.getElementById('students-grid-container');
  if (!container) return;

  const query = (document.getElementById('search-student-input')?.value || '').toLowerCase();
  const filterAdaptation = document.getElementById('filter-adaptation-select')?.value || 'all';

  let students = getCurrentGroupStudents();

  if (query) {
    students = students.filter(s => {
      const matchCode = s.code.toLowerCase().includes(query);
      const matchNotes = (s.notes || '').toLowerCase().includes(query);
      const matchAdapt = (s.adaptations || []).some(a => a.toLowerCase().includes(query));
      return matchCode || matchNotes || matchAdapt;
    });
  }

  if (filterAdaptation === 'with-adaptations') {
    students = students.filter(s => s.adaptations && s.adaptations.length > 0);
  } else if (filterAdaptation === 'without-adaptations') {
    students = students.filter(s => !s.adaptations || s.adaptations.length === 0);
  }

  if (students.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center bg-white rounded-2xl border border-slate-200 p-8">
        <div class="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
          <i data-lucide="users" class="w-6 h-6"></i>
        </div>
        <h3 class="text-sm font-bold text-slate-700">No s'ha trobat cap fitxa d'alumnat</h3>
        <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
          Pots canviar els criteris de cerca o crear una nova fitxa per a aquest grup classe.
        </p>
        <div class="mt-4 flex flex-wrap items-center justify-center gap-2">
          <button onclick="openImportStudentsCsvModal()" class="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-sm">
            <i data-lucide="file-up" class="w-4 h-4 text-emerald-700"></i>
            Importar alumnat (CSV)
          </button>
          <button onclick="openNewStudentModal()" class="inline-flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-sm">
            <i data-lucide="user-plus" class="w-4 h-4"></i>
            Afegir fitxa manualment
          </button>
        </div>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = students.map((student, idx) => {
    const stats = calculateStudentSummary(student.id);
    const initialCode = student.code.replace(/[^0-9a-zA-Z]/g, '').slice(-2) || String(idx + 1).padStart(2, '0');

    return `
      <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-brand-300 transition-all cursor-pointer flex flex-col justify-between" onclick="openStudentModal('${student.id}')">
        
        <div>
          <div class="flex items-start justify-between gap-3 mb-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-sky-500 text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                ${initialCode}
              </div>
              <div>
                <h3 class="text-sm font-bold text-slate-800 hover:text-brand-700 transition-colors">
                  ${escapeHtml(student.code)}
                </h3>
                <span class="text-[11px] text-slate-400">Grup: ${escapeHtml(getCurrentGroup().name)}</span>
              </div>
            </div>
            <span class="text-slate-300 hover:text-brand-600 transition-colors p-1">
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </span>
          </div>

          <div class="flex flex-wrap gap-1 mb-3">
            ${student.adaptations && student.adaptations.length > 0 ? student.adaptations.map(adapt => `
              <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/80">
                ${escapeHtml(adapt)}
              </span>
            `).join('') : `
              <span class="text-[10px] text-slate-400 italic">Sense suports registrats</span>
            `}
          </div>

          ${student.notes ? `
            <p class="text-xs text-slate-600 line-clamp-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-3">
              ${escapeHtml(student.notes)}
            </p>
          ` : `
            <p class="text-xs text-slate-400 italic mb-3">Cap observació pedagògica anotada encara.</p>
          `}
        </div>

        <div class="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
          <div class="bg-emerald-50/70 p-2 rounded-xl text-center">
            <span class="text-[10px] text-emerald-800 font-medium block">Assistència</span>
            <span class="font-extrabold text-emerald-900 text-sm">${stats.attendancePct}%</span>
          </div>
          <div class="bg-sky-50/70 p-2 rounded-xl text-center">
            <span class="text-[10px] text-sky-800 font-medium block">Mitjana global</span>
            <span class="font-extrabold text-sky-900 text-sm">${stats.numericAverage !== null ? stats.numericAverage.toFixed(1) : '--'}</span>
          </div>
        </div>

      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

// Càlcul de mètriques d'un alumne (transversal per matèries i trimestres)
function calculateStudentSummary(studentId) {
  // 1. Assistència
  const groupAtt = (AppState.attendance && AppState.attendance[AppState.currentGroupId]) || {};
  let daysTotal = 0;
  let presentCount = 0;

  Object.values(groupAtt).forEach(day => {
    if (day[studentId]) {
      daysTotal++;
      if (day[studentId] === 'present') presentCount++;
    }
  });

  const attendancePct = daysTotal > 0 ? Math.round((presentCount / daysTotal) * 100) : 100;

  // 2. Qualificacions transversals a través de totes les matèries
  const groupGb = ensureGroupGradebook(AppState.currentGroupId);
  let totalNumericSum = 0;
  let totalNumericCount = 0;
  let qualitativeAS = 0;
  let qualitativeEP = 0;
  let qualitativeNA = 0;

  Object.values(groupGb).forEach(subjectData => {
    ['t1', 't2', 't3'].forEach(trimId => {
      const trimData = subjectData[trimId] || { columns: [], grades: {} };
      const studentGrades = (trimData.grades && trimData.grades[studentId]) || {};
      
      trimData.columns.forEach(col => {
        const val = studentGrades[col.id];
        if (val !== undefined && val !== null && val !== '') {
          if (col.type === 'numeric') {
            const num = parseFloat(val);
            if (!isNaN(num)) {
              totalNumericSum += num;
              totalNumericCount++;
            }
          } else if (col.type === 'qualitative') {
            if (val === 'AS') qualitativeAS++;
            else if (val === 'EP') qualitativeEP++;
            else if (val === 'NA') qualitativeNA++;
          }
        }
      });
    });
  });

  const numericAverage = totalNumericCount > 0 ? (totalNumericSum / totalNumericCount) : null;

  return {
    daysTotal,
    presentCount,
    attendancePct,
    numericAverage,
    totalNumericCount,
    qualitativeAS,
    qualitativeEP,
    qualitativeNA
  };
}

// Càlcul de resum d'un alumne en una matèria i trimestre concrets
function calculateStudentSubjectTrimesterGrade(studentId, subjectId, trimesterId) {
  const groupGb = ensureGroupGradebook(AppState.currentGroupId);
  const trimData = groupGb[subjectId]?.[trimesterId] || { columns: [], grades: {} };
  const studentGrades = trimData.grades?.[studentId] || {};

  let sum = 0;
  let count = 0;
  let asCount = 0, epCount = 0, naCount = 0;

  trimData.columns.forEach(col => {
    const val = studentGrades[col.id];
    if (val !== undefined && val !== null && val !== '') {
      if (col.type === 'numeric') {
        const num = parseFloat(val);
        if (!isNaN(num)) {
          sum += num;
          count++;
        }
      } else if (col.type === 'qualitative') {
        if (val === 'AS') asCount++;
        else if (val === 'EP') epCount++;
        else if (val === 'NA') naCount++;
      }
    }
  });

  return {
    numericAvg: count > 0 ? (sum / count) : null,
    numericCount: count,
    asCount,
    epCount,
    naCount
  };
}

// ==========================================
// MODAL FITXA DE L'ALUMNAT (EDICIÓ I DETALL)
// ==========================================

function openStudentModal(studentId) {
  currentEditingStudentId = studentId;
  const student = AppState.students.find(s => s.id === studentId);
  if (!student) return;

  currentEditingAdaptations = [...(student.adaptations || [])];

  document.getElementById('modal-student-name').textContent = student.code;
  document.getElementById('modal-student-subtitle').textContent = `Grup: ${getCurrentGroup().name}`;
  document.getElementById('modal-student-avatar').textContent = student.code.replace(/[^0-9a-zA-Z]/g, '').slice(-2) || 'AL';

  document.getElementById('edit-student-id').value = student.id;
  document.getElementById('edit-student-code').value = student.code;
  document.getElementById('edit-student-notes').value = student.notes || '';

  const stats = calculateStudentSummary(student.id);
  document.getElementById('modal-student-attendance-stat').textContent = `${stats.attendancePct}%`;
  document.getElementById('modal-student-attendance-sub').textContent = `${stats.presentCount} presents de ${stats.daysTotal} dies`;

  if (stats.numericAverage !== null) {
    document.getElementById('modal-student-grade-stat').textContent = stats.numericAverage.toFixed(1);
    document.getElementById('modal-student-grade-sub').textContent = `${stats.totalNumericCount} notes numèriques (${stats.qualitativeAS} AS / ${stats.qualitativeEP} EP)`;
  } else {
    document.getElementById('modal-student-grade-stat').textContent = '--';
    document.getElementById('modal-student-grade-sub').textContent = `${stats.qualitativeAS} Assolits / ${stats.qualitativeEP} En procés`;
  }

  renderAdaptationTags();

  document.getElementById('btn-delete-student').classList.remove('hidden');
  document.getElementById('modal-student-detail').classList.remove('hidden');

  if (window.lucide) lucide.createIcons();
}

function openNewStudentModal() {
  currentEditingStudentId = null;
  currentEditingAdaptations = [];

  const nextNum = getCurrentGroupStudents().length + 1;
  const defaultCode = `Alumnat ${String(nextNum).padStart(2, '0')}`;

  document.getElementById('modal-student-name').textContent = 'Nova fitxa d\'alumnat';
  document.getElementById('modal-student-subtitle').textContent = `Grup: ${getCurrentGroup().name}`;
  document.getElementById('modal-student-avatar').textContent = '+';

  document.getElementById('edit-student-id').value = '';
  document.getElementById('edit-student-code').value = defaultCode;
  document.getElementById('edit-student-notes').value = '';

  document.getElementById('modal-student-attendance-stat').textContent = '100%';
  document.getElementById('modal-student-attendance-sub').textContent = 'Nou registre';

  document.getElementById('modal-student-grade-stat').textContent = '--';
  document.getElementById('modal-student-grade-sub').textContent = 'Sense qualificacions encara';

  renderAdaptationTags();

  document.getElementById('btn-delete-student').classList.add('hidden');
  document.getElementById('modal-student-detail').classList.remove('hidden');

  if (window.lucide) lucide.createIcons();
}

function closeStudentModal() {
  document.getElementById('modal-student-detail').classList.add('hidden');
  currentEditingStudentId = null;
}

function renderAdaptationTags() {
  const container = document.getElementById('adaptations-tags-container');
  if (!container) return;

  if (currentEditingAdaptations.length === 0) {
    container.innerHTML = '<span class="text-xs text-slate-400 italic">Cap suport o adaptació afegida.</span>';
    return;
  }

  container.innerHTML = currentEditingAdaptations.map((tag, idx) => `
    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300">
      <span>${escapeHtml(tag)}</span>
      <button type="button" onclick="removeAdaptationTag(${idx})" class="w-4 h-4 rounded-full hover:bg-amber-200 inline-flex items-center justify-center text-amber-700">
        &times;
      </button>
    </span>
  `).join('');
}

function addQuickAdaptation(text) {
  if (!currentEditingAdaptations.includes(text)) {
    currentEditingAdaptations.push(text);
    renderAdaptationTags();
  }
}

function removeAdaptationTag(index) {
  currentEditingAdaptations.splice(index, 1);
  renderAdaptationTags();
}

function saveStudentDetail() {
  const code = document.getElementById('edit-student-code').value.trim();
  const notes = document.getElementById('edit-student-notes').value.trim();

  if (!code) {
    showToast('L\'identificador o pseudònim de l\'alumnat és obligatori.', 'error');
    return;
  }

  if (currentEditingStudentId) {
    const student = AppState.students.find(s => s.id === currentEditingStudentId);
    if (student) {
      student.code = code;
      student.notes = notes;
      student.adaptations = [...currentEditingAdaptations];
      showToast('Fitxa actualitzada correctament.', 'success');
    }
  } else {
    const newId = 's-' + Date.now();
    AppState.students.push({
      id: newId,
      groupId: AppState.currentGroupId,
      code: code,
      adaptations: [...currentEditingAdaptations],
      notes: notes,
      createdAt: new Date().toISOString()
    });
    showToast('Nova fitxa d\'alumnat creada amb èxit.', 'success');
  }

  saveState();
  closeStudentModal();
  renderApp();
}

function deleteCurrentStudent() {
  if (!currentEditingStudentId) return;
  if (!confirm('Segur que vols eliminar aquesta fitxa d\'alumnat? També s\'esborraran les seves qualificacions associades.')) {
    return;
  }

  AppState.students = AppState.students.filter(s => s.id !== currentEditingStudentId);

  // Elimina qualificacions
  if (AppState.gradebookBySubject && AppState.gradebookBySubject[AppState.currentGroupId]) {
    const grp = AppState.gradebookBySubject[AppState.currentGroupId];
    Object.values(grp).forEach(subj => {
      ['t1', 't2', 't3'].forEach(trim => {
        if (subj[trim]?.grades) {
          delete subj[trim].grades[currentEditingStudentId];
        }
      });
    });
  }

  // Elimina d'assistència
  if (AppState.attendance && AppState.attendance[AppState.currentGroupId]) {
    Object.keys(AppState.attendance[AppState.currentGroupId]).forEach(dateStr => {
      delete AppState.attendance[AppState.currentGroupId][dateStr][currentEditingStudentId];
    });
  }

  saveState();
  closeStudentModal();
  renderApp();
  showToast('Fitxa d\'alumnat eliminada correctament.', 'info');
}

// =========================================================================
// QUADERN DE QUALIFICACIONS: SUBPÀGINES PER MATÈRIA I 3 TRIMESTRES SEPARATS
// =========================================================================

function renderGradebook() {
  renderSubjectTabs();
  renderTrimesterTabs();
  renderCurriculumInfo();
  renderGradebookTable();
}

// 1. Renderitza les subpàgines (pestanyes de cada matèria)
function renderSubjectTabs() {
  const container = document.getElementById('subject-tabs-container');
  if (!container) return;

  const subjects = Object.values(CURRICULUM_CATALUNYA);
  const groupGb = ensureGroupGradebook(AppState.currentGroupId);

  let html = subjects.map(subj => {
    const isActive = activeSubjectId === subj.id;
    // Compta activitats de la matèria
    let actCount = 0;
    ['t1', 't2', 't3'].forEach(t => {
      actCount += groupGb[subj.id]?.[t]?.columns?.length || 0;
    });

    return `
      <button 
        onclick="switchSubject('${subj.id}')" 
        class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
          isActive 
            ? 'bg-slate-800 text-white shadow-md' 
            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
        }"
      >
        <i data-lucide="${subj.icon}" class="w-3.5 h-3.5 ${isActive ? 'text-brand-300' : 'text-slate-500'}"></i>
        <span>${escapeHtml(subj.shortName)}</span>
        <span class="px-1.5 py-0.2 rounded-full text-[10px] ${
          isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
        }">
          ${actCount}
        </span>
      </button>
    `;
  }).join('');

  // Pestanya especial: Resum transversal de totes les àrees
  const isAllActive = activeSubjectId === 'all';
  html += `
    <button 
      onclick="switchSubject('all')" 
      class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ml-auto ${
        isAllActive 
          ? 'bg-brand-700 text-white shadow-md ring-2 ring-brand-400' 
          : 'bg-brand-50 hover:bg-brand-100 text-brand-800 border border-brand-200'
      }"
    >
      <i data-lucide="layout-grid" class="w-3.5 h-3.5"></i>
      <span>Resum de Totes les Àrees</span>
    </button>
  `;

  container.innerHTML = html;
  if (window.lucide) lucide.createIcons();
}

function switchSubject(subjectId) {
  activeSubjectId = subjectId;
  renderGradebook();
}

// 2. Renderitza els 3 trimestres i el resum anual
function renderTrimesterTabs() {
  const container = document.getElementById('trimester-tabs-container');
  if (!container) return;

  const buttons = container.querySelectorAll('.trimester-btn');
  buttons.forEach(btn => {
    const trim = btn.getAttribute('data-trimester');
    if (trim === activeTrimesterId) {
      btn.className = 'trimester-btn px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-white text-brand-700 shadow-sm';
    } else {
      btn.className = 'trimester-btn px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-brand-700 hover:bg-white/60 transition-all';
    }
  });
}

function switchTrimester(trimesterId) {
  activeTrimesterId = trimesterId;
  renderGradebook();
}

// 3. Informació Curricular i Sabers del Departament de Catalunya
function renderCurriculumInfo() {
  const toggleBtn = document.getElementById('btn-toggle-sabers');
  const panel = document.getElementById('subject-sabers-panel');
  if (!toggleBtn || !panel) return;

  if (activeSubjectId === 'all') {
    toggleBtn.classList.add('hidden');
    panel.classList.add('hidden');
    return;
  }

  toggleBtn.classList.remove('hidden');
  const subj = CURRICULUM_CATALUNYA[activeSubjectId];
  if (!subj) return;

  document.getElementById('curriculum-subject-title').textContent = `${subj.name} • Sabers bàsics curriculars`;
  document.getElementById('curriculum-subject-desc').textContent = subj.description;

  const listContainer = document.getElementById('curriculum-sabers-list');
  listContainer.innerHTML = subj.sabers.map(saber => `
    <div class="flex items-start gap-2 bg-white p-2 rounded-lg border border-slate-200/80 text-[11px] text-slate-700">
      <span class="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></span>
      <span class="leading-tight">${escapeHtml(saber)}</span>
    </div>
  `).join('');
}

// 4. Taula dinàmica del Quadern
function renderGradebookTable() {
  const headerTr = document.getElementById('gradebook-table-header');
  const bodyTbody = document.getElementById('gradebook-table-body');
  if (!headerTr || !bodyTbody) return;

  const students = getCurrentGroupStudents();
  const groupGb = ensureGroupGradebook(AppState.currentGroupId);

  // CAS A: RESUM TRANSVERSAL DE TOTES LES ÀREES (Totes les matèries en una matriu)
  if (activeSubjectId === 'all') {
    renderAllSubjectsMatrix(headerTr, bodyTbody, students, groupGb);
    return;
  }

  // CAS B: RESUM ANUAL D'UNA MATÈRIA (1r + 2n + 3r Trimestre + Nota Final de la matèria)
  if (activeTrimesterId === 'annual') {
    renderSubjectAnnualMatrix(headerTr, bodyTbody, students, groupGb, activeSubjectId);
    return;
  }

  // CAS C: QUADERN CONCRET D'UNA MATÈRIA I UN TRIMESTRE
  renderSubjectTrimesterTable(headerTr, bodyTbody, students, groupGb, activeSubjectId, activeTrimesterId);
}

// Renderitza un trimestre d'una matèria concreta
function renderSubjectTrimesterTable(headerTr, bodyTbody, students, groupGb, subjId, trimId) {
  const trimData = groupGb[subjId]?.[trimId] || { columns: [], grades: {} };
  const columns = trimData.columns || [];
  const subj = CURRICULUM_CATALUNYA[subjId];
  const trimObj = TRIMESTERS.find(t => t.id === trimId);

  // 1. Capçalera
  headerTr.innerHTML = `
    <th class="py-3 px-4 bg-slate-100 text-slate-700 font-bold sticky-col-first w-48 shadow-sm">
      <div class="flex items-center justify-between">
        <span>Alumnat (${students.length})</span>
        <span class="text-[10px] font-semibold text-slate-400 capitalize">${trimObj.name}</span>
      </div>
    </th>
    ${columns.map(col => `
      <th class="py-2.5 px-3 min-w-[170px] max-w-[220px] text-slate-700 font-bold border-l border-slate-200 bg-slate-100">
        <div class="flex flex-col gap-1">
          <div class="flex items-center justify-between gap-1">
            <span class="truncate text-xs font-bold text-slate-800" title="${escapeHtml(col.title)}">
              ${escapeHtml(col.title)}
            </span>
            <button onclick="deleteGradebookColumn('${subjId}', '${trimId}', '${col.id}')" title="Eliminar activitat" class="text-slate-300 hover:text-rose-600 transition-colors p-0.5">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
          <div class="flex flex-wrap items-center gap-1">
            <span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-900 border border-amber-200 truncate max-w-[150px]" title="Saber: ${escapeHtml(col.saber || 'No assignat')}">
              ${escapeHtml(col.saber ? col.saber.split('(')[0] : 'Saber bàsic')}
            </span>
            <span class="text-[9px] px-1 py-0.2 rounded bg-slate-200 text-slate-600 font-semibold">
              ${col.type === 'numeric' ? '1-10' : 'AS/EP/NA'}
            </span>
          </div>
        </div>
      </th>
    `).join('')}
    <th class="py-3 px-4 bg-slate-100 text-slate-700 font-bold border-l border-slate-200 text-center w-28">
      Mitjana T.
    </th>
  `;

  // 2. Cos
  if (students.length === 0) {
    bodyTbody.innerHTML = `
      <tr>
        <td colspan="${columns.length + 2}" class="p-8 text-center text-slate-400">
          No hi ha alumnat registrat en aquest grup classe.
        </td>
      </tr>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  if (columns.length === 0) {
    bodyTbody.innerHTML = `
      <tr>
        <td colspan="2" class="p-8 text-center text-slate-400">
          <div class="max-w-md mx-auto space-y-2">
            <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <i data-lucide="plus-circle" class="w-5 h-5"></i>
            </div>
            <p class="font-bold text-slate-600">Encara no s'ha afegit cap activitat per a ${subj.name} (${trimObj.name}).</p>
            <p class="text-xs">Fes clic al botó superior "Afegir activitat / criteri" per vincular una nova tasca als sabers del currículum.</p>
          </div>
        </td>
      </tr>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  bodyTbody.innerHTML = students.map((student, idx) => {
    const studentGrades = trimData.grades?.[student.id] || {};
    const summary = calculateStudentSubjectTrimesterGrade(student.id, subjId, trimId);
    const avgText = summary.numericAvg !== null ? summary.numericAvg.toFixed(1) : '--';
    const numDisplay = String(idx + 1).padStart(2, '0');

    return `
      <tr class="hover:bg-slate-50 transition-colors">
        
        <!-- Nom / Codi Alumne -->
        <td class="py-2.5 px-4 bg-white sticky-col-first font-semibold text-slate-800 border-b border-slate-100 shadow-sm">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-md bg-slate-100 text-slate-500 text-[11px] font-bold flex items-center justify-center shrink-0">
              ${numDisplay}
            </span>
            <span class="cursor-pointer hover:text-brand-600 truncate max-w-[130px]" onclick="openStudentModal('${student.id}')" title="${escapeHtml(student.code)}">
              ${escapeHtml(student.code)}
            </span>
          </div>
        </td>

        <!-- Columnes d'activitats -->
        ${columns.map(col => {
          const val = studentGrades[col.id];

          if (col.type === 'numeric') {
            return `
              <td class="py-1.5 px-2 border-l border-b border-slate-100 text-center">
                <input 
                  type="number" 
                  step="0.1" 
                  min="1" 
                  max="10" 
                  value="${val !== undefined && val !== null ? val : ''}" 
                  placeholder="-"
                  onchange="updateSubjectGrade('${subjId}', '${trimId}', '${student.id}', '${col.id}', this.value)"
                  class="w-16 text-center font-bold text-xs py-1 px-1.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:outline-none ${
                    val !== undefined && val !== null && val !== '' 
                      ? (parseFloat(val) >= 5 ? 'text-emerald-800 font-extrabold' : 'text-rose-700 font-extrabold')
                      : 'text-slate-400'
                  }"
                />
              </td>
            `;
          } else {
            return `
              <td class="py-1.5 px-2 border-l border-b border-slate-100 text-center">
                <select 
                  onchange="updateSubjectGrade('${subjId}', '${trimId}', '${student.id}', '${col.id}', this.value)"
                  class="text-xs font-bold py-1 px-2 rounded-lg border border-slate-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    val === 'AS' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' :
                    val === 'EP' ? 'bg-amber-100 text-amber-800 border-amber-300' :
                    val === 'NA' ? 'bg-rose-100 text-rose-800 border-rose-300' :
                    'bg-slate-50 text-slate-400'
                  }"
                >
                  <option value="" ${!val ? 'selected' : ''}>- Sense avaluar -</option>
                  <option value="AS" ${val === 'AS' ? 'selected' : ''}>Assolit (AS)</option>
                  <option value="EP" ${val === 'EP' ? 'selected' : ''}>En procés (EP)</option>
                  <option value="NA" ${val === 'NA' ? 'selected' : ''}>No assolit (NA)</option>
                </select>
              </td>
            `;
          }
        }).join('')}

        <!-- Columna Resum / Mitjana del Trimestre -->
        <td class="py-2.5 px-3 border-l border-b border-slate-100 text-center bg-slate-50/50">
          <div class="font-extrabold text-sm ${summary.numericAvg !== null && summary.numericAvg >= 5 ? 'text-emerald-700' : summary.numericAvg !== null ? 'text-rose-700' : 'text-slate-400'}">
            ${avgText}
          </div>
          ${(summary.asCount > 0 || summary.epCount > 0 || summary.naCount > 0) ? `
            <div class="text-[10px] text-slate-500 mt-0.5">
              ${summary.asCount} AS • ${summary.epCount} EP
            </div>
          ` : ''}
        </td>

      </tr>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

// Renderitza el resum anual d'una matèria (T1 + T2 + T3 + Mitjana Anual)
function renderSubjectAnnualMatrix(headerTr, bodyTbody, students, groupGb, subjId) {
  const subj = CURRICULUM_CATALUNYA[subjId];

  headerTr.innerHTML = `
    <th class="py-3 px-4 bg-slate-100 text-slate-700 font-bold sticky-col-first w-48 shadow-sm">
      Alumnat (${students.length})
    </th>
    <th class="py-3 px-3 text-slate-700 font-bold border-l border-slate-200 text-center">1r Trimestre</th>
    <th class="py-3 px-3 text-slate-700 font-bold border-l border-slate-200 text-center">2n Trimestre</th>
    <th class="py-3 px-3 text-slate-700 font-bold border-l border-slate-200 text-center">3r Trimestre</th>
    <th class="py-3 px-4 bg-emerald-50 text-emerald-900 font-extrabold border-l border-emerald-200 text-center w-32">
      Mitjana Anual (${subj.shortName})
    </th>
  `;

  bodyTbody.innerHTML = students.map((student, idx) => {
    const s1 = calculateStudentSubjectTrimesterGrade(student.id, subjId, 't1');
    const s2 = calculateStudentSubjectTrimesterGrade(student.id, subjId, 't2');
    const s3 = calculateStudentSubjectTrimesterGrade(student.id, subjId, 't3');

    // Càlcul mitjana anual de la matèria
    let yearSum = 0;
    let yearCount = 0;
    [s1, s2, s3].forEach(s => {
      if (s.numericAvg !== null) {
        yearSum += s.numericAvg;
        yearCount++;
      }
    });

    const annualAvg = yearCount > 0 ? (yearSum / yearCount).toFixed(1) : '--';
    const numDisplay = String(idx + 1).padStart(2, '0');

    return `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-4 bg-white sticky-col-first font-semibold text-slate-800 border-b border-slate-100 shadow-sm">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-md bg-slate-100 text-slate-500 text-[11px] font-bold flex items-center justify-center shrink-0">
              ${numDisplay}
            </span>
            <span class="cursor-pointer hover:text-brand-600 truncate max-w-[130px]" onclick="openStudentModal('${student.id}')">
              ${escapeHtml(student.code)}
            </span>
          </div>
        </td>
        <td class="py-2 px-3 border-l border-b border-slate-100 text-center font-bold text-xs text-slate-700">
          ${s1.numericAvg !== null ? s1.numericAvg.toFixed(1) : (s1.asCount > 0 ? `${s1.asCount} AS` : '--')}
        </td>
        <td class="py-2 px-3 border-l border-b border-slate-100 text-center font-bold text-xs text-slate-700">
          ${s2.numericAvg !== null ? s2.numericAvg.toFixed(1) : (s2.asCount > 0 ? `${s2.asCount} AS` : '--')}
        </td>
        <td class="py-2 px-3 border-l border-b border-slate-100 text-center font-bold text-xs text-slate-700">
          ${s3.numericAvg !== null ? s3.numericAvg.toFixed(1) : (s3.asCount > 0 ? `${s3.asCount} AS` : '--')}
        </td>
        <td class="py-2 px-4 border-l border-b border-emerald-100 text-center bg-emerald-50/40 font-extrabold text-sm ${
          annualAvg !== '--' && parseFloat(annualAvg) >= 5 ? 'text-emerald-800' : 'text-slate-500'
        }">
          ${annualAvg}
        </td>
      </tr>
    `;
  }).join('');
}

// Renderitza la matriu transversal de totes les àrees curriculars
function renderAllSubjectsMatrix(headerTr, bodyTbody, students, groupGb) {
  const subjects = Object.values(CURRICULUM_CATALUNYA);
  const trimLabel = activeTrimesterId === 'annual' ? 'Curs Complet' : TRIMESTERS.find(t => t.id === activeTrimesterId)?.name || 'Trimestre';

  headerTr.innerHTML = `
    <th class="py-3 px-4 bg-slate-100 text-slate-700 font-bold sticky-col-first w-48 shadow-sm">
      <div>Alumnat (${students.length})</div>
      <div class="text-[10px] font-normal text-slate-500">${trimLabel}</div>
    </th>
    ${subjects.map(subj => `
      <th class="py-3 px-2 text-slate-700 font-bold border-l border-slate-200 text-center text-xs">
        <div class="flex items-center justify-center gap-1">
          <i data-lucide="${subj.icon}" class="w-3.5 h-3.5 text-slate-400"></i>
          <span>${escapeHtml(subj.shortName)}</span>
        </div>
      </th>
    `).join('')}
    <th class="py-3 px-4 bg-brand-50 text-brand-900 font-extrabold border-l border-brand-200 text-center w-28">
      Mitjana Global
    </th>
  `;

  bodyTbody.innerHTML = students.map((student, idx) => {
    let studentSum = 0;
    let studentCount = 0;
    const numDisplay = String(idx + 1).padStart(2, '0');

    const cellsHtml = subjects.map(subj => {
      let subjAvg = null;

      if (activeTrimesterId === 'annual') {
        let sum = 0, cnt = 0;
        ['t1', 't2', 't3'].forEach(t => {
          const res = calculateStudentSubjectTrimesterGrade(student.id, subj.id, t);
          if (res.numericAvg !== null) { sum += res.numericAvg; cnt++; }
        });
        subjAvg = cnt > 0 ? (sum / cnt) : null;
      } else {
        const res = calculateStudentSubjectTrimesterGrade(student.id, subj.id, activeTrimesterId);
        subjAvg = res.numericAvg;
      }

      if (subjAvg !== null) {
        studentSum += subjAvg;
        studentCount++;
      }

      return `
        <td class="py-2 px-2 border-l border-b border-slate-100 text-center font-bold text-xs">
          ${subjAvg !== null ? `
            <span class="${subjAvg >= 5 ? 'text-emerald-700' : 'text-rose-700'}">${subjAvg.toFixed(1)}</span>
          ` : '<span class="text-slate-300">-</span>'}
        </td>
      `;
    }).join('');

    const globalAvg = studentCount > 0 ? (studentSum / studentCount).toFixed(1) : '--';

    return `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-4 bg-white sticky-col-first font-semibold text-slate-800 border-b border-slate-100 shadow-sm">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-md bg-slate-100 text-slate-500 text-[11px] font-bold flex items-center justify-center shrink-0">
              ${numDisplay}
            </span>
            <span class="cursor-pointer hover:text-brand-600 truncate max-w-[130px]" onclick="openStudentModal('${student.id}')">
              ${escapeHtml(student.code)}
            </span>
          </div>
        </td>
        ${cellsHtml}
        <td class="py-2 px-3 border-l border-b border-brand-100 text-center bg-brand-50/40 font-extrabold text-sm ${
          globalAvg !== '--' && parseFloat(globalAvg) >= 5 ? 'text-brand-900' : 'text-slate-500'
        }">
          ${globalAvg}
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

// Actualitza una qualificació concreta a la memòria
function updateSubjectGrade(subjId, trimId, studentId, colId, value) {
  const groupGb = ensureGroupGradebook(AppState.currentGroupId);
  const trimData = groupGb[subjId][trimId];

  if (!trimData.grades[studentId]) {
    trimData.grades[studentId] = {};
  }

  if (value === '') {
    delete trimData.grades[studentId][colId];
  } else {
    trimData.grades[studentId][colId] = value;
  }

  saveState();
  renderGradebookTable();
  renderDashboard();
}

// 5. MODAL PER AFEGIR ACTIVITAT / CRITERI
function openAddEvaluationColumnModal() {
  const subjectSelect = document.getElementById('new-column-subject');
  const trimesterSelect = document.getElementById('new-column-trimester');
  const saberSelect = document.getElementById('new-column-saber');
  const customSaberInput = document.getElementById('new-column-custom-saber');
  
  // Omple les matèries
  subjectSelect.innerHTML = Object.values(CURRICULUM_CATALUNYA).map(subj => `
    <option value="${subj.id}" ${subj.id === (activeSubjectId !== 'all' ? activeSubjectId : 'mates') ? 'selected' : ''}>
      ${escapeHtml(subj.name)}
    </option>
  `).join('');

  // Selecciona el trimestre actiu si no és anual
  if (activeTrimesterId !== 'annual') {
    trimesterSelect.value = activeTrimesterId;
  } else {
    trimesterSelect.value = 't1';
  }

  // Omple els sabers del currículum de la matèria seleccionada
  populateSabersDropdown();

  // Escolta el canvi de matèria
  subjectSelect.onchange = populateSabersDropdown;

  saberSelect.onchange = () => {
    if (saberSelect.value === 'custom') {
      customSaberInput.classList.remove('hidden');
      customSaberInput.focus();
    } else {
      customSaberInput.classList.add('hidden');
    }
  };

  document.getElementById('new-column-title').value = '';
  document.getElementById('new-column-type').value = 'numeric';
  customSaberInput.value = '';
  customSaberInput.classList.add('hidden');

  document.getElementById('modal-add-column').classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function populateSabersDropdown() {
  const subjectSelect = document.getElementById('new-column-subject');
  const saberSelect = document.getElementById('new-column-saber');
  const subjId = subjectSelect.value;
  const subj = CURRICULUM_CATALUNYA[subjId];

  if (!subj) return;

  saberSelect.innerHTML = subj.sabers.map(s => `
    <option value="${escapeHtml(s)}">${escapeHtml(s)}</option>
  `).join('') + `
    <option value="custom">-- Saber personalitzat --</option>
  `;
}

function handleAddColumnSubmit(e) {
  e.preventDefault();
  const subjId = document.getElementById('new-column-subject').value;
  const trimId = document.getElementById('new-column-trimester').value;
  const title = document.getElementById('new-column-title').value.trim();
  const type = document.getElementById('new-column-type').value;
  const saberSelect = document.getElementById('new-column-saber');
  let saber = saberSelect.value;

  if (saber === 'custom') {
    saber = document.getElementById('new-column-custom-saber').value.trim() || 'Saber específic';
  }

  if (!title) {
    showToast('Introdueix el títol de l\'activitat.', 'error');
    return;
  }

  const groupGb = ensureGroupGradebook(AppState.currentGroupId);
  const newColId = 'col-' + Date.now();

  groupGb[subjId][trimId].columns.push({
    id: newColId,
    title: title,
    saber: saber,
    type: type,
    date: new Date().toISOString().split('T')[0]
  });

  saveState();
  closeModal('modal-add-column');
  
  // Canvia la vista cap a la matèria i trimestre de la nova activitat
  activeSubjectId = subjId;
  activeTrimesterId = trimId;
  renderGradebook();
  renderDashboard();

  showToast(`S'ha afegit "${title}" a ${CURRICULUM_CATALUNYA[subjId].name} (${TRIMESTERS.find(t=>t.id===trimId).name}).`, 'success');
}

function deleteGradebookColumn(subjId, trimId, colId) {
  const groupGb = ensureGroupGradebook(AppState.currentGroupId);
  const trimData = groupGb[subjId]?.[trimId];
  if (!trimData) return;

  const col = trimData.columns.find(c => c.id === colId);
  const title = col ? col.title : 'aquesta activitat';

  if (!confirm(`Segur que vols eliminar "${title}" del quadern? Es perdran les notes associades.`)) {
    return;
  }

  trimData.columns = trimData.columns.filter(c => c.id !== colId);
  if (trimData.grades) {
    Object.keys(trimData.grades).forEach(sId => {
      delete trimData.grades[sId][colId];
    });
  }

  saveState();
  renderGradebook();
  renderDashboard();
  showToast(`Activitat "${title}" eliminada.`, 'info');
}

// =========================================================================
// IMPORTACIÓ MASSIVA D'ALUMNAT PER CSV (ESCOLA GIROI)
// =========================================================================

function openImportStudentsCsvModal() {
  parsedCsvStudents = [];
  const fileInput = document.getElementById('input-students-csv-file');
  if (fileInput) fileInput.value = '';

  const group = getCurrentGroup();
  const targetGroupEl = document.getElementById('import-csv-target-group');
  if (targetGroupEl) targetGroupEl.textContent = group ? group.name : 'Grup actual';

  const label = document.getElementById('csv-file-name-label');
  if (label) label.textContent = "Fes clic per triar el fitxer CSV o arrossega'l aquí";

  const preview = document.getElementById('csv-preview-container');
  if (preview) preview.classList.add('hidden');

  const btnConfirm = document.getElementById('btn-confirm-import-csv');
  const btnLabel = document.getElementById('btn-confirm-import-label');
  if (btnConfirm && btnLabel) {
    btnConfirm.disabled = true;
    btnConfirm.className = 'px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-200 text-slate-400 cursor-not-allowed transition-all flex items-center gap-1.5 shadow-sm';
    btnLabel.textContent = 'Carrega un fitxer CSV';
  }

  // Assegura el mode per defecte a "append"
  const radioAppend = document.querySelector('input[name="import-mode"][value="append"]');
  if (radioAppend) radioAppend.checked = true;

  document.getElementById('modal-import-students-csv')?.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function downloadStudentCsvTemplate() {
  const group = getCurrentGroup();
  let csv = '\uFEFF'; // BOM per reconeixement d'accents en Excel
  csv += 'Identificador;Suports Educatius;Observacions\r\n';
  csv += 'Alumnat 01;Altes Capacitats;Molt motivat pel projecte d\'entorn del Montseny\r\n';
  csv += 'Alumnat 02;Pla Individualitzat (PI), Suport Lingüístic;Treball cooperatiu i tasques a l\'hort del Giroi\r\n';
  csv += 'Alumnat 03;;Participació activa en les assemblees de classe\r\n';
  csv += 'Alumnat 04;Reforç de Lectoescriptura;Bona evolució amb lectura acompanyada a la biblioteca d\'aula\r\n';

  downloadCSV(csv, 'plantilla_importacio_alumnat_escola_giroi.csv');
  showToast('Plantilla CSV descarregada satisfactòriament.', 'success');
}

function handleStudentsCsvFileSelect(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  const fileNameLabel = document.getElementById('csv-file-name-label');
  if (fileNameLabel) {
    const sizeKb = (file.size / 1024).toFixed(1);
    fileNameLabel.innerHTML = `<strong>${escapeHtml(file.name)}</strong> (${sizeKb} KB)`;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    const text = event.target.result;
    parseAndPreviewStudentsCsv(text);
  };
  reader.onerror = function() {
    showToast('Error en llegir el fitxer CSV.', 'error');
  };
  reader.readAsText(file, 'UTF-8');
}

function parseAndPreviewStudentsCsv(csvText) {
  parsedCsvStudents = parseCsvText(csvText);

  const previewContainer = document.getElementById('csv-preview-container');
  const countBadge = document.getElementById('csv-preview-count-badge');
  const tbody = document.getElementById('csv-preview-tbody');
  const btnConfirm = document.getElementById('btn-confirm-import-csv');
  const btnLabel = document.getElementById('btn-confirm-import-label');

  if (!previewContainer || !tbody || !btnConfirm) return;

  if (parsedCsvStudents.length === 0) {
    previewContainer.classList.add('hidden');
    btnConfirm.disabled = true;
    btnConfirm.className = 'px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-200 text-slate-400 cursor-not-allowed transition-all flex items-center gap-1.5 shadow-sm';
    if (btnLabel) btnLabel.textContent = 'Sense alumnat vàlid detectat';
    showToast('No s\'ha trobat cap registre d\'alumnat vàlid al fitxer. Revisa la plantilla.', 'error');
    return;
  }

  // Actualitza previsualització
  previewContainer.classList.remove('hidden');
  if (countBadge) countBadge.textContent = `${parsedCsvStudents.length} alumnes detectats`;

  tbody.innerHTML = parsedCsvStudents.map((st, idx) => `
    <tr class="hover:bg-slate-50 transition-colors">
      <td class="py-1.5 px-3 font-mono text-[11px] text-slate-400 text-center font-bold">${String(idx + 1).padStart(2, '0')}</td>
      <td class="py-1.5 px-3 font-bold text-slate-800">${escapeHtml(st.code)}</td>
      <td class="py-1.5 px-3">
        ${st.adaptations.length > 0 ? `
          <div class="flex flex-wrap gap-1">
            ${st.adaptations.map(a => `<span class="px-1.5 py-0.2 rounded bg-amber-50 text-amber-800 text-[10px] font-semibold border border-amber-200">${escapeHtml(a)}</span>`).join('')}
          </div>
        ` : '<span class="text-slate-300 italic text-[11px]">Sense suports</span>'}
      </td>
      <td class="py-1.5 px-3 text-[11px] text-slate-600 truncate max-w-xs" title="${escapeHtml(st.notes || '')}">
        ${escapeHtml(st.notes || '-')}
      </td>
    </tr>
  `).join('');

  // Habilita el botó de confirmació amb estil actiu
  btnConfirm.disabled = false;
  btnConfirm.className = 'px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer shadow-md transition-all flex items-center gap-1.5';
  if (btnLabel) btnLabel.textContent = `Confirmar i importar ${parsedCsvStudents.length} alumnes`;

  if (window.lucide) lucide.createIcons();
}

// Funció de processament de CSV tolerant a delimitadors (; , \t) i cometes
function parseCsvText(text) {
  if (!text) return [];

  // Elimina possible BOM inicial
  if (text.charCodeAt(0) === 0xFEFF) {
    text = text.substring(1);
  }

  const lines = text.split(/\r\n|\n|\r/).filter(line => line.trim().length > 0);
  if (lines.length === 0) return [];

  // Detecció de delimitador a la primera línia
  const firstLine = lines[0];
  const countSemi = (firstLine.match(/;/g) || []).length;
  const countComma = (firstLine.match(/,/g) || []).length;
  const countTab = (firstLine.match(/\t/g) || []).length;

  let delimiter = ';';
  if (countTab > countSemi && countTab > countComma) delimiter = '\t';
  else if (countComma > countSemi) delimiter = ',';

  // Helper per dividir una línia respectant cometes
  function splitLine(line) {
    const pattern = new RegExp(
      '(\\' + delimiter + '|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\' + delimiter + ']*))',
      'gi'
    );
    const result = [];
    let match;
    while ((match = pattern.exec(line))) {
      let val = match[2] !== undefined ? match[2].replace(/""/g, '"') : match[3];
      result.push(val ? val.trim() : '');
    }
    return result;
  }

  const rows = lines.map(line => splitLine(line));
  if (rows.length === 0) return [];

  // Revisa si la primera línia és una capçalera
  const header = rows[0].map(h => h.toLowerCase());
  let idCol = -1;
  let adaptCol = -1;
  let notesCol = -1;

  header.forEach((h, idx) => {
    if (h.includes('identifica') || h.includes('nom') || h.includes('alumne') || h.includes('estudiant') || h.includes('codi')) {
      idCol = idx;
    } else if (h.includes('suport') || h.includes('adaptaci') || h.includes('nee') || h.includes('diversitat')) {
      adaptCol = idx;
    } else if (h.includes('observaci') || h.includes('nota') || h.includes('comentari') || h.includes('seguiment') || h.includes('tutoria')) {
      notesCol = idx;
    }
  });

  let startRow = 0;
  if (idCol !== -1) {
    // Té capçalera identificada
    startRow = 1;
    if (adaptCol === -1) adaptCol = 1;
    if (notesCol === -1) notesCol = 2;
  } else {
    // Si no s'ha trobat capçalera per nom, assumeix ordre estàndard
    // Revisa si la fila 0 té paraules clau
    if (rows[0][0] && (rows[0][0].toLowerCase().includes('nom') || rows[0][0].toLowerCase().includes('id'))) {
      startRow = 1;
    }
    idCol = 0;
    adaptCol = 1;
    notesCol = 2;
  }

  const students = [];
  for (let i = startRow; i < rows.length; i++) {
    const row = rows[i];
    if (!row || row.length === 0) continue;

    const rawCode = (idCol < row.length ? row[idCol] : '').trim();
    if (!rawCode) continue; // Si no té nom/identificador, ignora la fila buida

    const rawAdapt = (adaptCol < row.length ? row[adaptCol] : '').trim();
    let adaptations = [];
    if (rawAdapt) {
      adaptations = rawAdapt.split(/[,/|]/).map(a => a.trim()).filter(a => a.length > 0);
    }

    const rawNotes = (notesCol < row.length ? row[notesCol] : '').trim();

    students.push({
      code: rawCode,
      adaptations: adaptations,
      notes: rawNotes
    });
  }

  return students;
}

function confirmImportStudentsCsv() {
  if (!parsedCsvStudents || parsedCsvStudents.length === 0) {
    showToast('No hi ha dades per importar.', 'error');
    return;
  }

  const mode = document.querySelector('input[name="import-mode"]:checked')?.value || 'append';
  const group = getCurrentGroup();

  if (mode === 'replace') {
    if (!confirm(`Segur que vols SUBSTITUIR tot l'alumnat del grup "${group.name}"? Aquesta acció esborrarà l'alumnat actual i les seves qualificacions.`)) {
      return;
    }
    // Esborra l'alumnat d'aquest grup
    const studentsToRemove = AppState.students.filter(s => s.groupId === AppState.currentGroupId);
    const idsToRemove = new Set(studentsToRemove.map(s => s.id));
    AppState.students = AppState.students.filter(s => s.groupId !== AppState.currentGroupId);

    // Neteja qualificacions i assistències associades
    if (AppState.gradebookBySubject && AppState.gradebookBySubject[AppState.currentGroupId]) {
      const subjMap = AppState.gradebookBySubject[AppState.currentGroupId];
      Object.values(subjMap).forEach(subj => {
        ['t1', 't2', 't3'].forEach(trim => {
          if (subj[trim]?.grades) {
            idsToRemove.forEach(id => delete subj[trim].grades[id]);
          }
        });
      });
    }

    if (AppState.attendance && AppState.attendance[AppState.currentGroupId]) {
      Object.keys(AppState.attendance[AppState.currentGroupId]).forEach(d => {
        idsToRemove.forEach(id => delete AppState.attendance[AppState.currentGroupId][d][id]);
      });
    }
  }

  // Afegeix el nou alumnat
  const now = new Date().toISOString();
  parsedCsvStudents.forEach((st, idx) => {
    const newId = 's-' + Date.now() + '-' + idx;
    AppState.students.push({
      id: newId,
      groupId: AppState.currentGroupId,
      code: st.code,
      adaptations: st.adaptations,
      notes: st.notes,
      createdAt: now
    });
  });

  saveState();
  closeModal('modal-import-students-csv');
  renderApp();
  showToast(`S'han afegit amb èxit ${parsedCsvStudents.length} persones de l'alumnat al grup "${group.name}".`, 'success');
  parsedCsvStudents = [];
}

// ==========================================
// CÒPIES DE SEGURETAT I EXPORTACIÓ
// ==========================================

function exportDatabaseJSON() {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(AppState, null, 2));
  const downloadAnchor = document.createElement('a');
  const dateStr = new Date().toISOString().split('T')[0];
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `Escola_Giroi_copia_seguretat_${dateStr}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('Còpia de seguretat JSON descarregada amb èxit.', 'success');
}

function handleImportJSON(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const importedData = JSON.parse(event.target.result);
      if (importedData && importedData.groups && importedData.students) {
        if (confirm('Aquesta acció substituirà les dades actuals per la còpia seleccionada. Vols continuar?')) {
          AppState = importedData;
          saveState();
          renderApp();
          showToast('Còpia de seguretat restaurada satisfactòriament!', 'success');
        }
      } else {
        showToast('El fitxer no té l\'estructura vàlida d\'AulaViva.', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Error en llegir el fitxer JSON.', 'error');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

// Exportació del Quadern a CSV amb compatibilitat per a matèries i trimestres
function exportGradebookCSV() {
  const group = getCurrentGroup();
  const students = getCurrentGroupStudents();
  const groupGb = ensureGroupGradebook(AppState.currentGroupId);

  if (students.length === 0) {
    showToast('No hi ha alumnat per exportar en aquest grup.', 'error');
    return;
  }

  let csvContent = '\uFEFF'; // BOM per reconeixement d'accents catalans a Excel

  if (activeSubjectId !== 'all' && activeTrimesterId !== 'annual') {
    // Exporta la matèria i trimestre actual
    const subj = CURRICULUM_CATALUNYA[activeSubjectId];
    const trim = TRIMESTERS.find(t => t.id === activeTrimesterId);
    const trimData = groupGb[activeSubjectId][activeTrimesterId];
    const cols = trimData.columns || [];

    const headers = ['Identificador Alumnat', ...cols.map(c => `"${c.title.replace(/"/g, '""')} [Saber: ${c.saber ? c.saber.replace(/"/g, '""') : ''}]"`), 'Mitjana Trimestre'];
    csvContent += headers.join(';') + '\r\n';

    students.forEach(student => {
      const stGrades = trimData.grades?.[student.id] || {};
      const row = [`"${student.code.replace(/"/g, '""')}"`];
      cols.forEach(col => {
        const val = stGrades[col.id] !== undefined ? stGrades[col.id] : '';
        row.push(`"${String(val).replace(/"/g, '""')}"`);
      });
      const summary = calculateStudentSubjectTrimesterGrade(student.id, activeSubjectId, activeTrimesterId);
      row.push(`"${summary.numericAvg !== null ? summary.numericAvg.toFixed(2) : ''}"`);
      csvContent += row.join(';') + '\r\n';
    });

    downloadCSV(csvContent, `Escola_Giroi_qualificacions_${subj.shortName}_${trim.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`);
  } else {
    // Exporta el resum de totes les matèries
    const subjects = Object.values(CURRICULUM_CATALUNYA);
    const headers = ['Identificador Alumnat', ...subjects.map(s => `"${s.name.replace(/"/g, '""')}"`), 'Mitjana Global'];
    csvContent += headers.join(';') + '\r\n';

    students.forEach(student => {
      const row = [`"${student.code.replace(/"/g, '""')}"`];
      let sum = 0, count = 0;
      subjects.forEach(subj => {
        let avg = null;
        if (activeTrimesterId === 'annual') {
          let s = 0, c = 0;
          ['t1', 't2', 't3'].forEach(t => {
            const res = calculateStudentSubjectTrimesterGrade(student.id, subj.id, t);
            if (res.numericAvg !== null) { s += res.numericAvg; c++; }
          });
          avg = c > 0 ? (s / c) : null;
        } else {
          const res = calculateStudentSubjectTrimesterGrade(student.id, subj.id, activeTrimesterId);
          avg = res.numericAvg;
        }

        if (avg !== null) {
          sum += avg;
          count++;
          row.push(`"${avg.toFixed(2)}"`);
        } else {
          row.push('""');
        }
      });

      const globalAvg = count > 0 ? (sum / count).toFixed(2) : '';
      row.push(`"${globalAvg}"`);
      csvContent += row.join(';') + '\r\n';
    });

    downloadCSV(csvContent, `Escola_Giroi_resum_totes_materies_${new Date().toISOString().split('T')[0]}.csv`);
  }

  showToast('Quadern de notes exportat a CSV.', 'success');
}

// Exportació d'Assistència a CSV
function exportAttendanceCSV() {
  const group = getCurrentGroup();
  const students = getCurrentGroupStudents();
  const groupAtt = (AppState.attendance && AppState.attendance[AppState.currentGroupId]) || {};
  const dates = Object.keys(groupAtt).sort();

  if (dates.length === 0) {
    showToast('No hi ha registres d\'assistència per exportar.', 'error');
    return;
  }

  let csvContent = '\uFEFF';
  const headers = ['Identificador Alumnat', ...dates, 'Total Presents', 'Total Retards', 'Total Justificats', 'Total Absències', '% Assistència'];
  csvContent += headers.join(';') + '\r\n';

  students.forEach(student => {
    let p = 0, r = 0, j = 0, a = 0;
    const row = [`"${student.code.replace(/"/g, '""')}"`];

    dates.forEach(d => {
      const status = (groupAtt[d] && groupAtt[d][student.id]) || '-';
      if (status === 'present') p++;
      else if (status === 'retard') r++;
      else if (status === 'justificat') j++;
      else if (status === 'absent') a++;
      row.push(`"${status}"`);
    });

    const totalDays = p + r + j + a;
    const pct = totalDays > 0 ? Math.round((p / totalDays) * 100) : 100;

    row.push(p, r, j, a, `"${pct}%"`);
    csvContent += row.join(';') + '\r\n';
  });

  downloadCSV(csvContent, `Escola_Giroi_assistencia_${group.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`);
  showToast('Resum d\'assistència exportat a CSV.', 'success');
}

function downloadCSV(csvContent, filename) {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function resetToDemo() {
  if (confirm('Vols restaurar les dades inicials d\'exemple? Es carregaran els sabers i qualificacions del grup de 4t de Primària.')) {
    AppState = JSON.parse(JSON.stringify(DEFAULT_STATE));
    saveState();
    renderApp();
    showToast('S\'han restaurat les dades d\'exemple.', 'success');
  }
}

function clearAllData() {
  if (confirm('ATENCIÓ: Es borraran TOTES les dades del navegador (grups, alumnat, notes i assistència). Vols continuar?')) {
    AppState = {
      currentGroupId: 'g-1',
      groups: [{ id: 'g-1', name: 'Nou Grup de Primària', stage: 'Primària', academicYear: '2026-2027' }],
      students: [],
      attendance: {},
      gradebookBySubject: {}
    };
    saveState();
    renderApp();
    showToast('Totes les dades s\'han esborrat del dispositiu local.', 'info');
  }
}

// ==========================================
// GESTIÓ DE GRUPS CLASSE (MODAL)
// ==========================================

function openManageGroupsModal() {
  const container = document.getElementById('groups-list');
  if (!container) return;

  container.innerHTML = AppState.groups.map(g => `
    <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full ${g.id === AppState.currentGroupId ? 'bg-brand-500' : 'bg-slate-300'}"></span>
        <span class="text-xs font-bold text-slate-800">${escapeHtml(g.name)}</span>
        ${g.id === AppState.currentGroupId ? '<span class="text-[10px] text-brand-700 bg-brand-50 px-2 py-0.5 rounded font-semibold">Actiu</span>' : ''}
      </div>
      <div class="flex items-center gap-1">
        ${g.id !== AppState.currentGroupId ? `
          <button onclick="selectGroup('${g.id}')" class="text-xs font-semibold text-brand-700 hover:bg-brand-50 px-2 py-1 rounded transition-colors">
            Activar
          </button>
        ` : ''}
        ${AppState.groups.length > 1 ? `
          <button onclick="deleteGroup('${g.id}')" class="text-slate-400 hover:text-rose-600 p-1 transition-colors" title="Eliminar grup">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        ` : ''}
      </div>
    </div>
  `).join('');

  document.getElementById('modal-manage-groups').classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function selectGroup(groupId) {
  AppState.currentGroupId = groupId;
  saveState();
  closeModal('modal-manage-groups');
  renderApp();
  showToast(`Grup canviat a: ${getCurrentGroup().name}`, 'info');
}

function deleteGroup(groupId) {
  if (AppState.groups.length <= 1) {
    showToast('No pots eliminar l\'únic grup existent.', 'error');
    return;
  }

  const grp = AppState.groups.find(g => g.id === groupId);
  if (!confirm(`Segur que vols eliminar el grup "${grp ? grp.name : ''}" i tot el seu alumnat associat?`)) {
    return;
  }

  AppState.groups = AppState.groups.filter(g => g.id !== groupId);
  AppState.students = AppState.students.filter(s => s.groupId !== groupId);
  if (AppState.attendance) delete AppState.attendance[groupId];
  if (AppState.gradebookBySubject) delete AppState.gradebookBySubject[groupId];

  if (AppState.currentGroupId === groupId) {
    AppState.currentGroupId = AppState.groups[0].id;
  }

  saveState();
  openManageGroupsModal();
  renderApp();
  showToast('Grup eliminat correctament.', 'info');
}

function createGroup() {
  const input = document.getElementById('new-group-name');
  const name = input ? input.value.trim() : '';

  if (!name) {
    showToast('Introdueix un nom per al grup.', 'error');
    return;
  }

  const newId = 'g-' + Date.now();
  AppState.groups.push({
    id: newId,
    name: name,
    stage: 'Primària',
    academicYear: '2026-2027'
  });
  AppState.currentGroupId = newId;

  input.value = '';
  saveState();
  closeModal('modal-manage-groups');
  renderApp();
  showToast(`S'ha creat el grup "${name}".`, 'success');
}

// ==========================================
// NAVEGACIÓ I ESDEVENIMENTS
// ==========================================

function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  const activeSection = document.getElementById(tabId);
  if (activeSection) activeSection.classList.remove('hidden');

  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('bg-brand-50', 'text-brand-700', 'font-semibold');
      btn.classList.remove('text-slate-600', 'hover:bg-slate-100');
    } else {
      btn.classList.remove('bg-brand-50', 'text-brand-700', 'font-semibold');
      btn.classList.add('text-slate-600', 'hover:bg-slate-100');
    }
  });

  if (tabId === 'tab-gradebook') renderGradebook();
  if (tabId === 'tab-attendance') renderAttendance();
  if (tabId === 'tab-dashboard') renderDashboard();
  if (tabId === 'tab-students') renderStudents();

  if (window.lucide) lucide.createIcons();
}

function setupEventListeners() {
  // Canvi de pestanyes principals
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // Selector de trimestres
  document.querySelectorAll('.trimester-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const trim = btn.getAttribute('data-trimester');
      switchTrimester(trim);
    });
  });

  // Botó desplegable de sabers del currículum
  document.getElementById('btn-toggle-sabers')?.addEventListener('click', () => {
    const panel = document.getElementById('subject-sabers-panel');
    const label = document.getElementById('sabers-toggle-text');
    if (panel.classList.contains('hidden')) {
      panel.classList.remove('hidden');
      label.textContent = 'Amagar sabers curriculars';
    } else {
      panel.classList.add('hidden');
      label.textContent = 'Veure sabers del currículum de la matèria';
    }
  });

  // Selector de grup classe
  document.getElementById('group-select')?.addEventListener('change', (e) => {
    selectGroup(e.target.value);
  });

  document.getElementById('btn-manage-groups')?.addEventListener('click', openManageGroupsModal);
  document.getElementById('btn-create-group')?.addEventListener('click', createGroup);

  // Assistència
  const dateInput = document.getElementById('attendance-date-input');
  if (dateInput) {
    dateInput.addEventListener('change', (e) => {
      updateDayLabel(e.target.value);
      renderAttendance();
      renderDashboard();
    });
  }

  document.getElementById('btn-attendance-today')?.addEventListener('click', () => {
    const today = new Date().toISOString().split('T')[0];
    if (dateInput) {
      dateInput.value = today;
      updateDayLabel(today);
      renderAttendance();
      renderDashboard();
    }
  });

  document.getElementById('btn-mark-all-present')?.addEventListener('click', markAllPresent);
  document.getElementById('btn-export-attendance-csv')?.addEventListener('click', exportAttendanceCSV);
  document.getElementById('btn-export-attendance-csv-2')?.addEventListener('click', exportAttendanceCSV);

  // Fitxes d'alumnat: cerca i filtres
  document.getElementById('search-student-input')?.addEventListener('input', renderStudents);
  document.getElementById('filter-adaptation-select')?.addEventListener('change', renderStudents);

  // Formulari fitxa individual
  document.getElementById('btn-save-student-detail')?.addEventListener('click', saveStudentDetail);
  document.getElementById('btn-delete-student')?.addEventListener('click', deleteCurrentStudent);
  document.getElementById('btn-add-adaptation-tag')?.addEventListener('click', () => {
    const input = document.getElementById('new-adaptation-input');
    const val = input.value.trim();
    if (val) {
      addQuickAdaptation(val);
      input.value = '';
    }
  });

  // Importació massiva d'alumnat CSV (Escola Giroi)
  document.getElementById('input-students-csv-file')?.addEventListener('change', handleStudentsCsvFileSelect);
  document.getElementById('btn-confirm-import-csv')?.addEventListener('click', confirmImportStudentsCsv);

  // Formulari afegir columna quadern
  document.getElementById('form-add-column')?.addEventListener('submit', handleAddColumnSubmit);
  document.getElementById('btn-export-grades-csv')?.addEventListener('click', exportGradebookCSV);
  document.getElementById('btn-export-grades-csv-2')?.addEventListener('click', exportGradebookCSV);

  // Còpies de seguretat
  document.getElementById('btn-export-json')?.addEventListener('click', exportDatabaseJSON);
  document.getElementById('input-import-json')?.addEventListener('change', handleImportJSON);
  document.getElementById('btn-reset-demo')?.addEventListener('click', resetToDemo);
  document.getElementById('btn-clear-all')?.addEventListener('click', clearAllData);
}

// ==========================================
// UTILITATS AUXILIARS
// ==========================================

function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.add('hidden');
}

function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;

  if (type === 'success') {
    toastIcon.className = 'text-emerald-400';
    toastIcon.innerHTML = '<i data-lucide="check-circle-2" class="w-5 h-5"></i>';
  } else if (type === 'error') {
    toastIcon.className = 'text-rose-400';
    toastIcon.innerHTML = '<i data-lucide="alert-triangle" class="w-5 h-5"></i>';
  } else {
    toastIcon.className = 'text-sky-400';
    toastIcon.innerHTML = '<i data-lucide="info" class="w-5 h-5"></i>';
  }

  if (window.lucide) lucide.createIcons();

  toast.classList.remove('hidden');
  toast.classList.add('animate-in', 'fade-in', 'slide-in-from-bottom-5');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3500);
}

function formatDateCatalan(dateStr, full = false) {
  try {
    const [year, month, day] = dateStr.split('-');
    const date = new Date(year, month - 1, day);
    
    if (full) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const str = date.toLocaleDateString('ca-ES', options);
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
      const options = { day: 'numeric', month: 'short' };
      return date.toLocaleDateString('ca-ES', options);
    }
  } catch (e) {
    return dateStr;
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
