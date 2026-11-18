# Escola Giroi 🎒🌳 • Gestió d'Aula Inclusiva (La Garriga)
### Adaptada a la realitat pedagògica de l'Escola Giroi i al Currículum d'Educació Primària (Decret 175/2022) • Generalitat de Catalunya

Aquesta aplicació web ha estat personalitzada específicament per a l'**Escola Giroi de la Garriga (Vallès Oriental)**. Proporciona una eina intuïtiva, respectuosa amb la intimitat de l'alumnat i alineada amb el projecte educatiu de centre: escola activa, coeducadora, atenta a la diversitat i connectada amb l'entorn natural i comunitari de la Garriga.

---

## 🏫 Identitat i Novetats de l'Escola Giroi

1. **Logotip Oficial de l'Escola Giroi**:
   * S'ha integrat el logotip oficial de l'Escola Giroi a la capçalera principal, a la targeta de benvinguda de l'aula i com a *favicon* del navegador.
   * Imatge local autònoma (`logo-giroi.png`) per garantir el funcionament fins i tot sense connexió a Internet.

2. **📥 Nova Funcionalitat: Importació Massiva d'Alumnat (CSV)**:
   * **Botó "Importar alumnat (CSV)"** accessible tant a la secció de *Fitxes de l'alumnat*, al *Tauler d'inici* com a la pestanya de *Còpies i dades*.
   * **Descarrega de plantilla CSV oficial d'exemple** (`plantilla_importacio_alumnat_escola_giroi.csv`) amb caràcters UTF-8 i BOM compatible directament amb Microsoft Excel, Google Sheets o LibreOffice Calc.
   * **Detecció automàtica de formats i delimitadors**: suporta separació per punt i coma (`;`), coma (`,`) o tabulació (`\t`).
   * **Lectura intel·ligent de columnes**:
     * `Identificador` o `Nom` (obligatori): codis d'aula o noms.
     * `Suports Educatius` o `Adaptacions` (opcional): PI, Suport Lingüístic, Altes Capacitats, etc. (separats per comes o barres).
     * `Observacions` o `Seguiment pedagògic` (opcional): notes d'evolució, tutories i interessos.
   * **Previsualització en temps real abans d'aplicar**: mostra una taula interactiva amb tot l'alumnat detectat abans de confirmar l'operació.
   * **Modes d'importació**:
     * *Afegir a l'alumnat existent*: suma el nou llistat mantenint l'alumnat ja registrat.
     * *Substituir tot el grup*: neteja el grup seleccionat i carrega exclusivament el nou llistat de fitxes.

3. **Connexió amb l'Entorn Pedagògic de la Garriga**:
   Les activitats i situacions d'aprenentatge d'exemple estan arrelades a l'entorn i projectes habituals de l'Escola Giroi:
   * **Coneixement del Medi**: *Projecte: La biodiversitat del riu Congost i el Montseny*, *Investigació científica a l'hort escolar del Giroi*, i *Patrimoni modernista i rural de la Garriga*.
   * **Llengua Catalana**: *Crònica col·laborativa de la sortida a la riera del Congost*, *Comprensió lectora: Llegenda del Montseny*, i *Assemblea d'aula: propostes de convivència per al pati del Giroi*.
   * **Matemàtiques**: *Mesura i plànol a escala del pati del Giroi*, *Geometria aplicada a l'arquitectura de la Garriga*, i *Estadística d'hàbits sostenibles al centre*.
   * **Educació Artística**: *Land Art: composicions amb elements naturals dels jardins del Giroi*.
   * **Educació Física**: *Cursa d'orientació cooperativa al bosc de Malhivern*.
   * **Valors Cívics i Ètics**: *Cercle de convivència i resolució dialogada de conflictes*.

---

## 🌟 Funcionalitats de Gestió Diària

### 1. 📋 Passar Llista (Control d'Assistència Àgil)
* Selector de data en català (amb botó d'accés ràpid "Avui").
* Botons tàctils ràpids: 🟢 **Present**, 🟠 **Retard**, 🔵 **Justificat** i 🔴 **Absent**.
* Botó **"Marcar tothom present"** per registrar el grup amb un sol clic.
* Gràfic de proporció i estadístiques diàries.

### 2. 🗂️ Fitxes Individuals i Atenció a la Diversitat
* Codi o pseudònim genèric (*Alumnat 01*, *Alumnat 02*...) per complir amb el principi de minimització de dades de menors.
* **Mesures i suports a la inclusió**: Pla Individualitzat (PI), Suport Lingüístic (Aula d'Acollida), Altes Capacitats, Reforç de Lectoescriptura o etiquetes personalitzades.
* **Seguiment psicopedagògic**: tutories amb famílies, evolució emocional, interessos personals i acords d'equip docent.
* Resum automàtic del % d'assistència i mitjana de notes.

### 3. 📊 Quadern d'Avaluació per Matèries i Trimestres (Currículum Generalitat)
* Subpàgina per a cada àrea curricular (Matemàtiques, Català, Medi, Anglès, Artística, Educació Física, Valors Cívics i Ètics).
* **3 Trimestres separats + Resum Anual**.
* **Resum de Totes les Àrees**: matriu transversal completa per visualitzar totes les matèries juntes de cada alumne/a d'un sol cop d'ull.
* Vinculació directa amb els **sabers bàsics oficials del Departament d'Educació de la Generalitat de Catalunya (Decret 175/2022)**.
* Avaluació **numèrica (1-10)** o **qualitativa (AS/EP/NA)** amb etiquetes de colors.

### 4. 💾 Dades 100% Locals i Sobirania
* Totes les dades es guarden a `localStorage` del navegador web (sense servidors externs, màxima privadesa).
* Exportació a CSV (amb codificació UTF-8 BOM per a Excel amb accents catalans).
* Descàrrega i restauració de còpies completes en fitxer JSON.

---

## 🚀 Com Començar a Utilitzar-la

1. Obre el fitxer [index.html](file:///C:/Users/pberrozp/.gemini/antigravity/scratch/gestio-aula-primaria/index.html) directament amb el navegador (Chrome, Firefox, Edge o Safari).
2. Podràs afegir alumnat de forma individual o fer clic a **"Importar alumnat (CSV)"** per carregar un llistat complet de manera instantània!
