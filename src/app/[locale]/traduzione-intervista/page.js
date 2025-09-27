import styles from "./page.module.css";

export const metadata = {
  title: "Intervista con Volodymyr Zeenskyy",
  description:
    "Traduzione completa dell'intervista tra Lex Fridman e Volodymyr Zelenskyy.",
};

export default function InterviewPage() {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.index}>
          <h2 className={styles.indexTitle}>Indice</h2>
          <ul className={styles.indexList}>
            <li>
              <a href="#introduzione">Introduzione</a>
            </li>
            <li>
              <a href="#lingua">La questione della lingua</a>
            </li>
            <li>
              <a href="#seconda">Seconda guerra mondiale</a>
            </li>
            <li>
              <a href="#invasione">L'invasione del 24 Febbraio 2022</a>
            </li>
            <li>
              <a href="#negoziare">Negoziare la pace</a>
            </li>
            <li>
              <a href="#nato">NATO e garanzie di sicurezza</a>
            </li>
            <li>
              <a href="#sedersi">Sedersi con Putin e Trump</a>
            </li>
            <li>
              <a href="#compromesso">Compromesso e leva</a>
            </li>
            <li>
              <a href="#putin">Putin e la Russia</a>
            </li>
            <li>
              <a href="#donald">Donald Trump</a>
            </li>
            <li>
              <a href="#legge">Legge marziale ed elezioni</a>
            </li>
            <li>
              <a href="#corruzione">Corruzione</a>
            </li>
            <li>
              <a href="#elon">Elon Musk</a>
            </li>
            <li>
              <a href="#inaugurazione">Inaugurazione di Trump il 20 Gennaio</a>
            </li>
            <li>
              <a href="#dinamiche">Dinamiche di potere in Ucraina</a>
            </li>
          </ul>
        </div>
        <h1 className={styles.title}>Intervista con Volodymyr Zelenskyy</h1>
        <p className={styles.intro}>
          Traduzione integrale dell'intervista tra <strong>Lex Fridman</strong>{" "}
          e <strong>Volodymyr Zelenskyy</strong>.
        </p>

        <div className={styles.content}>
          <h1 id="introduzione" className={styles.header}>
            Introduzione (alcuni estratti in ordine sparso)
          </h1>
          <p>
            <strong>Lex Fridman</strong>: Spero che l’aeroporto di Kyiv riapra
            presto e sarà più facile viaggiare
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Sì. Penso che la guerra finirà
            e che il presidente Trump potrebbe essere il primo leader a
            viaggiare qui in aereo. Penso che sarebbe simbolico in aereo.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Nuovamente, intorno al 25 Gennaio,
            giusto? Volare, incontrare l’Air Force One.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Sarebbe bello.
          </p>
          <p>
            <strong>Lex Fridman</strong>: C’è una percezione di corruzione. A
            persone come Donald Trump ed Elon Musk interessa particolarmente
            combattere la corruzione. Cosa puoi dire loro per guadagnare la loro
            fiducia sul fatto che i soldi stiano andando verso questa lotta per
            la libertà, verso gli sforzi di guerra.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Nella maggior parte dei casi,
            non abbiamo ricevuto soldi, abbiamo ricevuto armi. E dove abbiamo
            notato rischi che qualcosa potesse accadere con le armi, abbiamo
            agito duramente con tutti. E credimi, qui non si tratta solamente
            dell’Ucraina. Dappertutto nella catena di approviggionamento, ci
            sono alcune persone e compagnie che vogliono far soldi, cercano di
            lucrare sulla Guerra. Se abbiamo beccato qualcuno, credimi, lo
            abbiamo punito duramente, e lo abbiamo fatto, e continueremo a
            farlo, perché fino ad oggi, quando qualcuno dice che “L’Ucraina ha
            venduto le armi” - e a proposito, è la Russia a spingere questa
            narrativa - abbiamo sempre risposto: “I nostri soldati ucciderebbero
            tali persone con le proprie mani senza un processo”.
          </p>
          <p>
            Puoi veramente pensare che qualcuno possa rubare una camionata
            d’armi quando non ne abbiamo abbastanza al fronte e dobbiamo
            comunque fornire prove per difenderci? Perché quando c’è abbondanza
            di tali disinformazioni, inizia a crescere la sfiducia. E hai
            ragione, la gente si informa tramite vari mezzi di comunicazione,
            vedono questo e perdone fiducia in te. Alla fine, perdi la fiducia e
            con essa il sostegno. Quindi, credimi, combattiamo più contro la
            disinformazione che contro casi specifici, ma sottolineo nuovamente
            che a livello quotidiano, tali cose sono comunque importanti. Noi
            catturiamo tali persone e le combattiamo.
          </p>
          <p>
            … Come se Putin volesse sedersi e parlare e l’Ucraina non lo
            volesse. Questo non è vero.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Penso che sì, lui sia pronto a
            trattare.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Hai parlato con lui?
          </p>
          <p>
            <strong>Lex Fridman</strong>: Per telefono o come?
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Come parli normalmente con
            lui?
          </p>
          <p>
            <strong>Lex Fridman</strong>: Non lo so. Normalmente al mare, come
            con te. Ti invita al mare con me, solo noi tre.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: No, no. Uno di noi potrebbe
            affogare.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Chi? Sai nuotare bene?
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Sì, sono un buon nuotatore.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Sei un buon nuotatore. Bene, se pensi
            che il presidente di una nazione sia completamente pazzo, è
            difficile arrivare ad un accordo con lui. Devi guardarlo come una
            persona seria che ama la sua nazione e ama le persone che vi
            abitano, e che conduce, sì, azioni militari distruttive...
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Di chi stai parlando ora? Chi
            ama la propria nazione?
          </p>
          <p>
            <strong>Lex Fridman</strong>: Putin. Pensi che non ami la propria
            nazione?
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: No. Qual è la sua nazione?
            Ritiene che l’Ucraina sia la sua nazione. Qual è la sua nazione?
          </p>
          <p>
            <strong>Lex Fridman</strong>: Quando pensi che ci saranno le
            elezioni presidenziali in Ucraina?
          </p>
          <h1 id="parole" className={styles.header}>Parole introduttorie di Lex Fridman</h1>
          <p>
            <strong>Lex Fridman</strong>: La seguente è una conversazione con
            Volodymyr Zelenskyy, il presidente dell’Ucraina. È stata intensa,
            autentica e sentita, il mio obiettivo è di capire e di far tutto il
            possibile per spingere verso la pace. Per favore permettetemi alcune
            parole prima di tutto sulla lingua, poi sul Presidente, ed infine
            sulla storia. Puoi saltare questa parte direttamente alla nostra
            conversazione se lo volessi.
          </p>
          <p>
            Abbiamo parlato in un mix di lingue, passando continuamente
            dall’ucraino al russo all’inglese, con conseguenti difficoltà da
            parte dell’interprete. Si è trattato in molti modi di un dialogo
            turbolento. Come ha detto il Presidente, “Il primo di molti. La
            lingua, come molte altre cose in tempo di guerra, è una questione
            importante.” Abbiamo avuto la scelta di parlare russo, ucraino o
            inglese. Il Presidente parla un po’ di inglese, ma non in modo
            fluente e io tristemente non parlo ancora l’ucraino, quindi il russo
            è l’unica lingua comune tra noi due.
          </p>
          <p>
            Nel caso non lo sapessi, la lingua russa è parlata in modo fluente
            dal Presidente ed era la sua prima lingua per la maggior parte della
            propria vita. È la lingua che parlo anche io con scioltezza, come
            ogni altra lingua che parlo, come una gran parte della popolazione
            ucraina. Quindi la parte più dinamica e suggestiva della nostra
            conversazione è quella in russo senza l’utilizzo dell’interprete,
            che in questo caso ha introdotto un ritardo di due o tre secondi, e
            francamente ha tradotto solo in parte e non sempre correttamente,
            per me almeno, privandomi della capacità di percepire l’umorismo,
            l’arguzia, la brillantezza, il dolore, la rabbia, l’umanità della
            persona seduta davanti a me, che potevo chiaramente percepire quando
            parlava fluentemente nella lingua che capisco, il russo.
          </p>
          <p>
            Detto ciò, la guerra cambia tutto. La lingua ucraina è diventata il
            simbolo della lotta per la libertà ed indipendenza del popolo
            ucraino, quindi abbiamo avuto la difficile scelta tra tre lingue, e
            abbiamo detto di sì a tutte e tre.
          </p>
          <p>
            Con grande costernazione e disappunto dei traduttori. Abbiamo reso
            disponibili sottotitoli e tracce audio in inglese, ucraino e russo,
            in modo che possiate ascoltare ad una versione a lingua unica o alla
            versione originale con più lingue con sottotitoli nella vostra
            lingua preferita.
          </p>
          <p>
            La traccia audio predefinita è l’inglese. Su Youtube potete
            scegliere tra le diverse tracce audio cliccando sull’icona delle
            impostazioni, cliccando poi su traccia audio e selezionando la
            lingua che preferite – inglese, ucraino, russo. Per ascoltare la
            versione originale con tutte e tre le lingue, seleziona la traccia
            audio inglese (UK), con un gran ringraziamento ad ElevenLabs per il
            loro aiuto per il doppiaggio usando un mix di intelligenza
            artificiale e persone. Continueremo ad esplorare come abbattere le
            barriere che le lingue creano attraverso l’IA ed altri modi. Questo
            è un compito difficile ma importante. La lingua, dopotutto, è molto
            più di una fredda sequenza di fatti e affermazioni logiche.
          </p>
          <p>
            Ci sono parole che pronunciate nella giusta sequenza e con un
            determinato tempismo possono scuotere il mondo e cambiare il corso
            della storia. Possono iniziare e concludere guerre. I grandi leader
            possono trovare tali parole e traduttori talentuosi posso aiutare a
            diffondere tali paroli ai confini di una civiltà divisa.
          </p>
          <p>
            Inoltre, lasciatemi dire che il presidente Zelenskyy è una persona
            veramente straordinaria e una figura storica. Lo dico come qualcuno
            che comprende profondamente la complessità geopolitica e la storia
            della regione. Vengo da questa regione. I miei genitori sono nati
            entrambi in Ucraina, a Kyiv e Kharkiv, così come i miei due nonni.
            Io sono nato in Tagikistan e ho vissuto per un periodo lì, poi a
            Kyiv, a Mosca e infine negli Stati Uniti. E mentre ora, da quasi 30
            anni e fino al giorno della mia morte, sono un orgoglioso americano,
            le radici della mia famiglia affondano nel suolo delle nazioni che
            componevano l'Unione Sovietica, inclusi Ucraina, Russia, Bielorussia
            e Tagikistan.
          </p>
          <p>
            Ho avuto modo di conoscere e parlare per ore con i membri del team
            del Presidente e le persone a lui vicine. Ho parlato con centinaia
            di ucraini dal 2022, tra cui soldati, civili, politici, artisti,
            leader religiosi, giornalisti, economisti, storici e tecnologi. Ho
            ascoltato centinaia di ore di programmi che supportano o criticano
            il Presidente in Ucraina, in Russia e negli Stati Uniti. Ho letto
            innumerevoli libri su questa guerra e sul susseguirsi di eventi che
            ha portato ad essa.
          </p>
          <p>
            Se fossi costretto a raccomandare due libri in questo momento, direi
            “The Russo-Ukrainian War” di Serhii Plokhy e “The Showman” di Simon
            Shuster, una biografia dietro le quinte del Presidente, focalizzata
            sul 2022. Ma ce ne sono molti, molti altri.
          </p>
          <p>
            Questo è il motivo per cui posso dire con sicurezza che lui è un
            essere umano veramente unico e straordinario. È stato un onore e un
            piacere parlare con lui, sia davanti al microfono che in privato.
          </p>
          <p>
            Ora, è vero che ho intenzione di viaggiare a Mosca e parlare con il
            Presidente Vladimir Putin, e spero di tornare a Kyiv, come ha detto
            il Presidente Zelenskyy, questo è solo il primo di molti altri
            incontri. In tutti questi casi, cerco di fare la mia piccola parte
            per spingere verso la pace. E nel fare tutto questo, sono
            profondamente grato per la fiducia che mi è stata data da tutte le
            parti. Per le persone che mi attaccano, a volte mentendo su di me,
            per i critici sugli spalti che scandiscono gli ultimi slogan della
            macchina dell'isteria di massa come le pecore in “La fattoria degli
            animali”, vi voglio bene lo stesso.
          </p>
          <p>
            E vi assicuro che tracciare linee tra bene e male su una mappa del
            mondo è molto più facile che vedere quella linea tra bene e male in
            ogni essere umano, compresi voi e me. Questo è ciò che cerco di
            fare. Sono semplicemente un essere umano che cerca di trovare e
            rivelare l'umanità negli altri, e come ho detto, nessuna quantità di
            denaro, fama, potere o accesso può comprare la mia opinione o la mia
            integrità.
          </p>
          <p>
            Ora, infine, permettetemi di fornire un breve contesto storico per
            introdurre alcuni dei temi che il Presidente Zelenskyy menziona in
            questa conversazione. Vi consiglio di ascoltare la mia conversazione
            con Serhii Plokhy sul tema della storia della regione. Ma lasciatemi
            iniziare dal 1991, quando l'Ucraina dichiarò la propria indipendenza
            e l'Unione Sovietica crollò. Da quel momento in poi, le relazioni
            tra Russia e Ucraina furono in gran parte definite dal fatto che
            l'Ucraina si allineasse maggiormente con la Russia o con
            l'Occidente, intendendo Europa, Stati Uniti, NATO e così via.
          </p>
          <p>
            Nel 2004, con la Rivoluzione Arancione, un candidato
            filo-occidentale, Viktor Yushchenko, divenne presidente. Nel 2010,
            le cose andarono nella direzione opposta. Un candidato filo-russo,
            Viktor Yanukovych, divenne presidente. Le tensioni interne crebbero
            e nel 2013 scoppiarono le proteste dell’Euromaidan in seguito alla
            decisione di Yanukovych di sospendere i negoziati con l'Unione
            Europea in favore di legami più stretti con la Russia. Questo
            innescò una catena di eventi importanti nel 2014.
          </p>
          <p>
            Sul fronte politico, Yanukovych fu estromesso e fuggì in Russia,
            portando all'elezione di un presidente filo-occidentale. Inoltre,
            nel 2014, sul fronte della guerra, la Russia annesse la Crimea e
            scoppiò la guerra nella regione del Donbas, nell'Ucraina orientale,
            che eventualmente portò alla morte di 14.000 persone e proseguì fino
            al 2022, quando, il 24 febbraio, le forze russe avviarono
            un'invasione su vasta scala dell'Ucraina. Fu allora che il mondo
            cominciò davvero a prestare attenzione.
          </p>
          <p>
            Ora, un po’ di storia sui negoziati di pace. Volodymyr Zelenskyy
            vinse le elezioni presidenziali nel 2019 e discute, in questa
            conversazione, degli accordi di cessate il fuoco che raggiunse con
            Vladimir Putin nel 2019, che furono uno dei molti tentativi di pace,
            a partire dai due accordi di Minsk del 2014 e del 2015, fino a una
            serie di accordi di cessate il fuoco nel 2018, 2019 e 2020, tutti
            falliti in parte o del tutto. Tutto ciò dimostra quanto siano
            difficili gli accordi di cessate il fuoco e le negoziazioni di pace,
            ma non sono impossibili. Vale sempre la pena tentare, più e più
            volte, di trovare la strada verso la pace.
          </p>
          <p>
            Credo che i Presidenti Zelenskyy, Putin e Trump dovrebbero
            incontrarsi poco dopo il 20 gennaio di quest'anno e fare tutto il
            possibile per negoziare un cessate il fuoco e garanzie di sicurezza
            che aprano la strada a una pace duratura. Abbiamo discusso diverse
            idee in merito durante questa conversazione. Come ho detto, questo
            era uno dei miei principali obiettivi, spingere verso la pace.
          </p>
          <p>
            Questo viaggio a Kyiv e questa conversazione sono stati un momento
            davvero speciale nella mia vita. È un’esperienza che non
            dimenticherò mai, quindi, riflettendo, aggiungo qualche parola in
            più e rispondo a delle domande alla fine, se vi farà piacere
            ascoltare, ma qui permettetemi di ringraziare tutti per il vostro
            supporto nel corso degli anni. Significa il mondo per me. Questo è
            un podcast di Lex Fridman e ora, cari amici, ecco il Presidente
            dell’Ucraina, Volodymyr Zelenskyy.
          </p>
          <h1 id="lingua" className={styles.header}>La lingua</h1>
          <p>
            <strong>Lex Fridman</strong>: Se possiamo spiegare perché la lingua
            ucraina è molto importante, la nostra conversazione sarà più
            efficace e incisiva se parliamo in russo.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Parlo russo perfettamente,
            ovviamente, e capisco tutto ciò di cui stai parlando. Tuttavia, non
            posso rispondere in russo per tutta l'intervista. È così che stanno
            le cose oggi. Non sto inventando nulla. Puoi vederlo da solo. Puoi
            sentirlo e percepirlo. Oggi ci sono stati 73 attacchi missilistici
            contro di noi e persone sono state uccise. Ci sono stati oltre 100
            droni oggi, e questo è un evento quotidiano. Le persone che ci
            attaccano, parlano russo. Attaccano persone a cui, fino a poco tempo
            fa, si diceva che stavano difendendo i russofoni, ed è per questo
            che non rispetto né il leader né il direttore della Russia di oggi,
            né la sua gente. Questo è tutto.
          </p>
          <p>
            E non penso che tu possa semplicemente fingere che non stia
            succedendo nulla e dare di nuovo a Putin una possibilità dicendo:
            "Siamo un solo popolo, parliamo una sola lingua," eccetera. Loro
            parlano la lingua delle armi. Questo è un dato di fatto, e noi siamo
            persone pacifiche. Persone pacifiche che vogliono proteggersi e
            difendere la loro libertà e la loro scelta umana. All'inizio della
            guerra, mi sono rivolto ai russi in russo, ma non è servito a nulla.
            Restano in silenzio. Non ascoltano. Non hanno ascoltato. Alcuni
            hanno paura, altri hanno altri problemi. Hanno ragioni diverse. È
            come quando una persona sta affogando e la gente passa vicino perché
            non riesce a sentirla. Qualcuno passa piangendo e ha paura di
            salvarla. Non cambia nulla per chi sta affogando. Ha bisogno di
            qualcuno che lo aiuti. Questo è il motivo per cui disprezzo
            sinceramente queste persone che sono sorde. Hanno iniziato
            l'occupazione sostenendo di difendere la lingua russa, ed è per
            questo che, con tutto il rispetto, vorrei dare un’intervista in
            ucraino. Questo è molto importante per me. Se ci sono alcuni punti
            che vuoi che spieghi in russo, posso certamente farlo. Posso parlare
            russo occasionalmente, ma in generale, no. Non sono sicuro che tu mi
            capirai completamente, nonostante le tue radici ucraine. Sei un
            cittadino degli Stati Uniti, giusto?
          </p>
          <p>
            <strong>Lex Fridman</strong>: Sì.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Ecco perché sono sorpreso che
            tu non capisca. Beh, è passato molto tempo. Capisco che sia passato
            molto tempo. Inoltre, molte cose sono cambiate. Molte cose sono
            cambiate.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Se posso, permettimi di dire questo in
            russo. Sì, molte cose sono cambiate, ma ho speranza. Spero che oggi
            molti russi ascolteranno questo, che Vladimir Putin lo ascolterà,
            che il Presidente americano Donald Trump e il popolo americano lo
            ascolteranno, che tutti lo ascolteranno. E sì, la lingua ucraina è
            importante simbolicamente, ma ciò che è altrettanto importante è che
            ci capiamo bene.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Per Donald Trump? È importante
            per Donald Trump se io parlo russo o no?
          </p>
          <p>
            <strong>Lex Fridman</strong>: Sì, sì, sì. Perché purtroppo, e mi
            dispiace ammetterlo, non posso parlare né capire ancora l'ucraino,
            quindi la tua arguzia, il tuo dinamismo e la tua umanità non si
            noteranno così bene e rapidamente. Ricorda, devo aspettare due o tre
            secondi per sentire ciò che dici. Hai un grande senso dell'umorismo,
            grandi storie. Con un interprete che traduce, semplicemente non lo
            percepirò, ma capisco che sia doloroso. Un'altra ragione è che
            speravo potessimo dimostrare che, sebbene a volte si dica che il
            russo sia vietato in Ucraina…
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Questo non è vero. Sto
            parlando in russo ora, giusto? Abbiamo persone che parlano russo.
            Non è vero. Davvero, non è vero. Ora disprezziamo la lingua russa a
            causa dei russi. Tutto qui. Quando stavano salvando i russofoni,
            uccidevano i russofoni. Molte persone che effettivamente… Molte di
            loro sono nell'Est, giusto. Vivevano nell'Est. Hanno distrutto le
            loro case e le loro vite. Non è una questione retorica. Non è solo
            parlare e “bla, bla, bla”. Non ho tempo per il “bla, bla, bla”.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Sì, quindi è un momento molto,
            molto, molto importante e delicato. Il messaggio è che non siamo una
            nazione unica. Non siamo lo stesso paese. Siamo paesi diversi. Sì,
            paesi diversi, e penso che ciò che è più importante sia di cosa
            stiamo parlando, non di come ne stiamo parlando. Questo è ciò che
            penso. Sei un ragazzo intelligente, quindi hai molta esperienza in
            dialoghi di questo tipo. Ecco perché penso che mi capirai. Sì.
            Comunque, penso che sia molto meglio per Donald Trump sentire il mio
            inglese, non il mio russo.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Il tuo inglese è molto meglio del mio
            ucraino. Stai migliorando ogni giorno.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: È vero. Sono una persona molto
            onesta. Ecco perché sarò molto onesto con te.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Va bene.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Il tuo ucraino non è molto
            buono, ma ci lavoreremo.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Sì. Ho molti difetti, questo è uno di
            essi.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: A volte posso parlare in
            inglese. A volte, come capisco, possiamo essere molto flessibili,
            giusto?
          </p>
          <p>
            <strong>Lex Fridman</strong>: Molto flessibili. Spagnolo, Swahili.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Sì. Vedi?
          </p>
          <p>
            <strong>Lex Fridman</strong>: Sì.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Sei molto flessibile...
          </p>
          <p>
            <strong>Lex Fridman</strong>: Javier Milei deve capirlo, quindi…
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: A proposito, Javier mi ha
            capito senza bisogno di parole.
          </p>
          <p>
            <strong>Lex Fridman</strong>: La lingua dell’amore, forse.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Del rispetto.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Rispetto.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Lo rispetto. Ho avuto una
            conversazione molto bella con lui. Davvero brillante.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Posso, a volte, parlare in russo e a
            volte in inglese?
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Sì, certo. Puoi usare
            qualsiasi lingua ti piaccia, e penso che sia una regola molto buona
            per questo primo incontro tra noi. Come hai detto, forse ci
            incontreremo in futuro una seconda volta.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Seconda, terza, quarta?
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Sì, va bene. Puoi fare domande
            nella lingua che preferisci e io risponderò nella lingua che posso.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Beh, hai detto che volevi un incontro
            al mare a un certo punto, quindi per il nostro prossimo incontro,
            incontriamoci al mare.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Con piacere, la prossima
            volta. Sarebbe molto meglio incontrarsi sul nostro Mar Nero ucraino
            o sul nostro Mar d'Azov.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Ho viaggiato in molte città
            dell'Ucraina, ma non sono mai stato a Odessa e tutti me lo dicono, e
            non so perché.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Devi andarci.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Puoi spiegarmi perché tutti amano così
            tanto Odessa? Cosa c'è?
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Cosa c'è a Odessa? È così che
            si dice. Cosa c'è? A Odessa c'è tutto.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Ok.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Odessa. Amo Odessa per il suo
            particolare temperamento. Le persone hanno il loro accento, e ci
            sono molte nazionalità. Ci sono molte storie, una cucina autentica
            di Odessa. A proposito, la cucina è molto diversa dalle altre. I
            piatti non sono come quelli di nessun altro posto e tutto è molto
            gustoso. Inoltre, ci sono persone bellissime, e oggi, capisci molto
            bene la gente, soprattutto dopo gli attacchi a Odessa. Capisci com'è
            la gente, come sono gli abitanti di Odessa, molto ucraini, ed è
            molto bello. Amo Odessa. Ci vado più volte all'anno. Ora ci vado più
            spesso a causa del rafforzamento dei sistemi di difesa aerea, per
            questo corridoio del grano, eccetera. Ci vado più spesso. Lì c'è il
            sole. Lì c'è il mare. È l'Ucraina, ed è molto bello lì.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Bene, quando verrai a trovarmi in
            Texas come ospite per la terza volta...
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Con piacere.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Facciamo così. Io, il mio amico Joe
            Rogan e tu, andremo a mangiare del barbecue texano insieme.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Chi pagherà?
          </p>
          <p>
            <strong>Lex Fridman</strong>: È una buona domanda.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Putin. Putin per tutto. Deve
            pagare lui.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Beh, sì. Lo inviteremo anche.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: No, no, no, no.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Ok.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Senza di lui.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Ok, capisco. Inteso.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Ma se lo Statuto di Roma sarà
            accettato dal vostro governo prima di questo momento.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Ok. A proposito, non so se lo sai, ma
            Joe ha un ottimo comedy club ad Austin.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Joe Rogan?
          </p>
          <p>
            <strong>Lex Fridman</strong>: Joe Rogan, sì. E penso che, come
            persona che rispetta la comicità e la stand-up comedy, sarebbe
            interessante per te dargli un'occhiata.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: No, no. Lui è, lo conosco e ho
            visto molti video diversi. È una persona molto talentuosa, quindi
            sarebbe un piacere se mi invitassi e se riuscissi a venire. Sono un
            po' impegnato, ma se sarò negli Stati Uniti, spero di avere una
            conversazione e un incontro con il Presidente Trump e, naturalmente,
            durante la mia visita, se avrò tempo, sarà un piacere se mi
            inviterai. Con piacere.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Sai una cosa? Pagherò io.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Bene.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Sì. Ho dovuto pensarci, ma tu sei il
            Presidente.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Sì, con te, con piacere.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Quando la guerra sarà finita, per
            favore vieni.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Grazie mille.
          </p>
          <p>
            <strong>Lex Fridman</strong>: E quando sarai meno impegnato.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Grazie mille.
          </p>
          <h1 id="seconda" className={styles.header}>Seconda Guerra Mondiale</h1>
          <p>
            <strong>Lex Fridman</strong>: Se possiamo tornare indietro di molti
            anni, alla Seconda Guerra Mondiale, raccontami la storia di tuo
            nonno che ha combattuto in essa.
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Mio nonno si diplomò
            all'accademia militare e, fin dall'inizio della guerra, andò a
            combattere. Era nella fanteria e combatté per tutta la durata della
            guerra. Ebbe molte ferite, come si diceva allora, “Il suo petto è
            ricoperto di medaglie,” ed è vero. Ne aveva più di 30? Sì, più di
            30. Era il tipo di uomo che... Era un uomo così serio. Lo amavo
            molto, e avevamo un rapporto molto stretto. Non gli piaceva
            raccontare i dettagli della guerra. Non si vantava mai, anche se io
            gli chiedevo, come farebbe un ragazzino, “Quanti fascisti hai
            ucciso?” Non ne parlava mai. Credeva che la guerra fosse una grande
            tragedia. Una tragedia per tutti.
          </p>
          <p>
            E l’Ucraina era occupata, ed era una tragedia per l’Ucraina, una
            tragedia per l’Europa, e una tragedia per il popolo ebraico. I suoi
            stessi fratelli, tutta la sua famiglia furono giustiziati. Furono
            torturati dai fascisti che avevano occupato l’Ucraina e il loro
            villaggio. Suo padre era il capo del villaggio e fu ucciso. Furono
            fucilati. Fu una fossa comune, giusto? Sì. Era una sepoltura
            collettiva. Alcuni furono uccisi sul posto e altri furono sepolti
            vivi. I suoi quattro fratelli, tutti andarono in guerra. Non appena
            la guerra iniziò, tutti andarono. Lui era l'unico che aveva
            un'educazione militare, e morirono tutti in guerra. Fu l’unico a
            tornare. Non aveva nessuno. Tornò e trovò mia nonna, la sua futura
            moglie, e lei gestiva... Come si chiamava allora? Non lo so. Non ce
            ne sono più. Era una struttura per l'infanzia, un orfanotrofio, per
            così dire, un posto dove vivevano orfani, bambini senza genitori,
            bambini affetti dalla guerra.
          </p>
          <p>
            E lei gestiva questa struttura per l'infanzia con bambini difficili,
            come li chiamavano ai tempi, bambini difficili che avevano vissuto
            la guerra, che avevano visto i loro genitori uccisi, e così si
            conobbero, perché questi bambini difficili, beh, a volte si
            comportavano in modo diverso. Potevano rubare qualcosa, fare
            qualcosa di sbagliato. C’erano molti, molti bambini
            nell’orfanotrofio. Sì, è così che conobbe mio nonno, e lo amavo
            molto, e penso che mio nonno, sinceramente, non avrebbe mai creduto
            che questa guerra fosse possibile. Non l'avrebbe mai creduto perché
            lavorava nella polizia dopo la guerra. Era un colonnello. Ha
            lavorato in un'unità di investigazione criminale per tutta la sua
            vita, quindi ha combattuto contro i criminali per tutta la vita,
            dopo la Seconda Guerra Mondiale, ma credo anche che abbia lottato
            per la giustizia per tutta la vita. E vivevamo tutti in un solo
            appartamento, e persino dopo la sua morte, ho vissuto con entrambe
            le nonne ed i miei genitori. Due nonne che persero entrambe i loro
            mariti. Entrambi morirono.
          </p>
          <p>
            Beh, era una famiglia normale, una famiglia normale che viveva come
            tutti vivevano all’epoca nell’Unione Sovietica e persino dopo, negli
            anni Novanta. Vivevamo tutti insieme in un appartamento. Cos’altro
            c’è da dire? Penso che la cosa più importante fossero i valori, il
            rispetto. Mi hanno istruito. I miei genitori mi hanno dato
            un’istruzione, nessuno mi ha lasciato soldi o appartamenti, quindi
            non ho ereditato nulla di materiale. Ma credo che la nostra vera
            eredità sia qui, nella nostra mente e nel nostro cuore. Credo in
            questo. Capito.
          </p>
          <p>
            <strong>Lex Fridman</strong>: C’è solo un ritardo di un secondo,
            quindi se… Mi scuso, se tu…
          </p>
          <p>Volodymyr Zelensky: Non c’è problema.</p>
          <p>
            <strong>Lex Fridman</strong>: Se racconti una battuta, io riderò
            uno, due o tre secondi dopo. C’è un ritardo. Quindi una famiglia
            normale, ma non tempi normali. La Seconda Guerra Mondiale. Parlando
            di fosse comuni, ieri ero a Babyn Yar. Gran parte della mia famiglia
            è morta lì. In momenti come questo, un luogo simile serve come un
            severo promemoria della profonda gravità storica della Seconda
            Guerra Mondiale. Ricordo una canzone della mia giovinezza: “Il 22
            giugno, alle quattro del mattino, Kyiv fu bombardata e iniziò la
            guerra.” Mi sono sempre chiesto come sarebbe vivere in un momento in
            cui tutto cambia. Il percorso dell’umanità si sposta completamente
            in un solo istante, proprio così. Cosa ne pensi di quel momento nel
            1941 ora, dopo l’invasione del 2022, come percepisci la Seconda
            Guerra Mondiale dopo che hai avuto un’esperienza diretta di tutto
            questo.
          </p>
          <p>
            Volodymyr Zelensky: Beh, prima di tutto, la guerra in realtà iniziò
            prima. Iniziò qui in Ucraina. Kyiv fu bombardata, come hai citato,
            ma la guerra era già iniziata prima. E penso che la percepii come
            l’inizio dell’invasione su vasta scala. Beh, penso che sia difficile
            capire perché nessuno voglia ascoltare, guardare e analizzare la
            storia.
          </p>
          <p>
            La guerra, l’ascesa del fascismo e del nazismo, l’emergere di
            Hitler, Goebbels e di tutta la loro squadra all’epoca, non si
            trattava solamente di un partito o persino di un solo paese. Era
            essenzialmente un’onda. Un’onda di odio, un’onda di una razza, una
            razza sopra tutte le altre.
          </p>
          <p>
            Stavano infatti costruendo e alla fine hanno implementato una teoria
            attorno a questa idea, conquistando poi l’Europa. Hanno creato una
            teoria di una nazione, una razza, un mondo, il loro mondo. Certo,
            questa idea è assolutamente insensata, ma nel tempo si è
            radicalizzata e ha persino guadagnato sostegno. La visione di un
            mondo unico e, in linea di principio, il cosiddetto "mondo russo,"
            l’ideologia che Putin promuove e impone, non era originariamente
            così. Era una persona diversa all’epoca, o forse è sempre stato
            così, ma la sua retorica era diversa. All’inizio, ricordati, parlava
            dell’UE e persino del futuro della Russia legato alla NATO. Si
            parlava persino di adesione all’Unione Europea, alla NATO. Parlava
            di valori condivisi con l’Occidente. Così sembrava il tutto ai
            tempi.
          </p>
          <p>
            Dobbiamo anche dare un’occhiata a Hitler, che all’inizio... prima
            dell’idea radicale di conquistare il mondo intero, prese alcune
            misure e tutti credevano che stesse aiutando l’economia. E ad essere
            onesti, prese alcune misure in quella direzione, ma era una persona
            terrificante. Nessuna di quelle azioni lo giustifica né scusa le sue
            azioni, ed è per questo che non possiamo dire che la Seconda Guerra
            Mondiale fosse iniziata nel 1939. Non è iniziata neanche nel 1941.
            Dobbiamo trarre delle conclusioni. Quando è iniziata? Con le
            debolezze del mondo? La divisione degli stati europei, il Patto
            Molotov-Ribbentrop. Tutto questo è accaduto prima del 1941.
          </p>
          <p>
            Persone che erano più informate, quelle che scavavano più a fondo,
            che fossero politici o meno, che provenissero da diversi ambiti
            incluso il mondo degli affari, che all’epoca era diverso, stiamo
            parlando di tutto questo. Dicevano: "Hitler non si fermerà. Ci sarà
            una guerra mondiale. Hitler distruggerà le nazioni." E questo è ciò
            che è accaduto. Qualcuno ha guardato da un’altra parte. Ciò che ti
            ho detto. L’Europa stava affondando allora. Ti ho fatto un esempio,
            ma il mondo intero ha distolto lo sguardo, non ha prestato
            attenzione e ha detto "No, possiamo negoziare con lui. Ti sto
            dicendo che è una persona a posto. Possiamo negoziare con lui. È
            solo un po' più di destra, non importa molto ciò che dice, è
            soltanto molto nazionalista." Tutto questo è assurdo e non è la
            prima volta, e Hitler non è il primo caso nella storia. Abbiamo a
            che fare con una persona a cui è permesso perseguire questo
            desiderio di distruzione. Ne era consumato e ne gode. E cosa è
            successo a Hitler?
          </p>
          <p>
            Ora, e riguardo a Putin? Anche questa invasione è avvenuta intorno
            alle quattro del mattino. Ci sono stati attacchi missilistici
            sull’Ucraina. Questa è la stessa cosa. Credo che anche le intenzioni
            siano le stesse, ma ne parlerò più in dettaglio più tardi. A
            proposito, dimmi se il discorso è troppo lungo, puoi fermarmi.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Non è mai troppo lungo. È bellissimo.
          </p>
          <p>
            Volodymyr Zelensky: Ok, quindi è successo qui intorno alle quattro
            del mattino. Prima di questo, devo essere onesto, tutti dicevano
            qualcosa, facevano previsioni, eccetera, ma ho chiesto solo una cosa
            principalmente dagli Stati Uniti: "Se siete sicuri, se avete prove,
            se avete parlato con lui e vi ha detto che ci sarà un’invasione, se
            tutto questo vi spaventa, chiedo solo due cose. Inviateci armi o,
            meglio ancora, rafforzateci con misure preventive affinché non ci
            sia guerra."
          </p>
          <p>
            Non erano le armi che stavo chiedendo. Ho chiesto sanzioni. Per
            intimorirlo. Per favore, non dite che se arriva, se attraversa i
            confini, se uccide, imporremo delle sanzioni. Beh, questa è una
            totale cazzata. Scusate, ma è veramente così.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Oh, questo lo capisco [Lex intende di
            aver capito la parola “cazzata”, in quanto Zelenskyy sta parlando in
            ucraino].
          </p>
          <p>Volodymyr Zelensky: Oh, meraviglioso. Sì.</p>
          <p>
            <strong>Lex Fridman</strong>: Ho capito una parola.
          </p>
          <p>Volodymyr Zelensky: Sì.</p>
          <p>
            <strong>Lex Fridman</strong>: Quindi, non vi hanno aiutato.
          </p>
          <p>
            Volodymyr Zelensky: Credo di no, e questo è un fatto. Non abbiamo
            ricevuto aiuto. Se supponiamo che le parole siano un aiuto, allora
            sì, ne abbiamo ricevute tante, perché ce ne sono state molte.
            Persino più del necessario, sì.
          </p>
          <p>
            Alle quattro del mattino ci sono stati attacchi. Moralmente, è
            possibile prepararsi per la guerra? No. Non succede come si legge
            nei libri, si vede nei film e così via. Cosa succede a te? Io stavo
            semplicemente guardando mia moglie e i miei figli. I miei figli
            dormivano, ma mia moglie era sveglia. C’erano attacchi, attacchi
            missilistici. Li abbiamo sentiti. Per te, come persona viva, come
            può essere? Non riesci proprio a crederci completamente.
            Semplicemente non riesci a capire. Perché ora? Dato tutto ciò che è
            accaduto durante la Seconda Guerra Mondiale, quando milioni di
            persone sono morte? Nulla di tutto questo aveva significato alle
            quattro del mattino, intorno alle 4:00, 3:40, 3:45. Ricordi, intorno
            a quest’ora? Sì, ci sono stati attacchi missilistici, e poi anche
            dopo.
          </p>
          <p>
            A proposito, pochi giorni dopo l’inizio della guerra, ho parlato al
            telefono con Lukashenko e si è scusato dicendomi “Non sono io. I
            missili sono stati lanciati dal mio territorio, ma è stato Putin a
            lanciarli" queste sono state le sue parole. "Ho testimoni e mi
            scuso" ha detto. Ma credetemi, questo è ciò che mi ha detto.
            "Volodymyr, non sono io. Non sono io il responsabile. Non sono io al
            comando. Sono solo missili. È Putin." Gli ho detto: "Non fare
            questo." E lui ha risposto: "Questo è stato fatto senza di me.
            Punto."
          </p>
          <p>
            Al telefono, ricordo questa conversazione. Gli ho detto: "Anche tu
            sei un assassino, te lo sto solo dicendo." Lui mi ha risposto: "Devi
            capire, non puoi combattere i russi." Io gli ho detto che non
            avevamo mai combattuto contro di loro. Gli ho detto: "È guerra. I
            missili sono arrivati dal tuo territorio, dalla Bielorussia. Come
            hai potuto permettere tutto questo?" E lui ha risposto: "Va bene,
            allora reagite." Ricordo ancora che mi disse: "Colpisci la
            raffineria. Sai quanto me ne importa." La Raffineria di Mozyr,
            giusto? Non ricordo bene. La Raffineria di Mozyr. Gli ho detto: "Di
            cosa stai parlando? Quale reazione?"
          </p>
          <p>
            <strong>Lex Fridman</strong>: Perdonami, Volodymyr.
          </p>
          <p>Volodymyr Zelensky: Sì.</p>
          <p>
            <strong>Lex Fridman</strong>: Questo è successo alle cinque del
            mattino?
          </p>
          <p>
            Volodymyr Zelensky: No, no, no. È successo durante il primo o forse
            il secondo giorno. Il secondo o terzo giorno della guerra.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Ah, capisco.
          </p>
          <p>
            Volodymyr Zelensky: Dopo di ciò, sono tornato a casa. Ero a casa con
            i miei figli, con mia moglie. Sono andato da mia moglie molto
            velocemente quella notte, intorno alle quattro del mattino, e le ho
            semplicemente detto: "Prendi i bambini, preparati. Probabilmente
            dovrai andare al mio ufficio molto presto." E sono uscito. Punto. In
            quel momento, non sei più un padre. Questo è ciò che è successo a
            me, purtroppo, perché credo, e non solo credo, ora lo capisco
            chiaramente, che tutto questo sia la cosa più importante, perché il
            tuo paese è la tua famiglia. La forza è nella tua famiglia e questa
            è la cosa più importante. Sono il presidente e quindi ho dovuto
            smettere di essere un padre nella mia stessa famiglia. E mia moglie
            ha dovuto fare tutto... Ha dovuto occuparsi di tutto ciò che
            riguardava i bambini, la loro sicurezza, e io ho dovuto occuparmi
            dello Stato, perché sono il presidente ed è il mio dovere. E, tra
            l’altro, prendo tutto questo molto sul serio. Sono andato in ufficio
            e ora siamo qui. Benvenuto.
          </p>
          <h1 id="invasione" className={styles.header}>L'invasione del 24 Febbraio 2022</h1>
          <p>
            <strong>Lex Fridman</strong>: Bene, in quel momento durante il 24
            febbraio 2022, tutto è cambiato di nuovo. Proprio come nel giugno
            del 1941, tutto è cambiato e la storia ha preso una svolta. La
            storia dell’umanità ha preso una svolta, e anche per te che eri il
            presidente. Parlavi di combattere la corruzione, della libertà del
            paese, di riforme innovative e interessanti, ma quella mattina del
            24 febbraio, tutto cambiò. Potresti raccontarmi di quella mattina, i
            dettagli delle tue azioni quando hai dovuto prendere decisioni
            difficili molto velocemente? Qual è stato il processo per te? Hai
            discusso con persone di fiducia per capire come rispondere a questa
            invasione sotto ogni aspetto tecnico, politico e militare? Quale fu
            il processo per te? Come hai preso la decisione?
          </p>
          <p>
            Volodymyr Zelensky: Secondo la nostra legislazione, in linea di
            principio, sono il comandante supremo delle Forze Armate
            dell'Ucraina, quindi ho dovuto dare gli ordini corrispondenti. Sì,
            ho un ufficio militare e, successivamente, c'è stato un quartier
            generale militare dove si sono riunite tutte le figure chiave. Non
            si trattava solo dell’aspetto militare, ma anche di energia e altre
            questioni fondamentali.
          </p>
          <p>
            In quel momento, ho preso le decisioni rapidamente e senza
            esitazione, ma non posso dire che sia perché io sono quel tipo di
            persona. Sono solo una persona normale che credeva nella necessità
            di un aiuto immediato, per evacuare persone, aiutare i bambini.
            Diverse città erano bloccate e pensavo solo a come portare cibo lì
            entro un giorno. Abbiamo fatto molte cose, anche se sapevamo che [i
            russi] stavano occupando parte del nostro Stato.
          </p>
          <p>
            Abbiamo distribuito armi alla gente, tale era la situazione. Sono
            arrivati camion che distribuivano semplicemente armi alla
            popolazione, così da poter difendere la capitale. Le armi venivano
            date a persone comuni per strada, a cittadini comuni che sapevano
            che, se i russi fossero entrati in città, avremmo visto la stessa
            situazione che stava accadendo in altre città, in base alle
            informazioni che avevamo ricevuto.
          </p>
          <p>
            Grazie alla digitalizzazione, a proposito, eravamo già ben
            preparati. Prima di tutto questo, avevamo una buona infrastruttura
            digitale. Abbiamo mantenuto in funzione molte cose e, anche quando
            stavano circondando alcune città, molte cose continuavano a
            funzionare: il sistema bancario, internet, la televisione. Grazie a
            ciò, ho preso diverse decisioni per garantire che la popolazione
            rimanesse unita e informata. La Russia è molto abile nel diffondere
            disinformazione su larga scala.
          </p>
          <p>
            Fortunatamente, ho due decenni di esperienza nella gestione di uno
            studio di produzione, canali televisivi e grandi risorse mediatiche.
            Ho capito subito che dovevamo costruire rapidamente una rete di
            informazione. Grazie a questo, ho iniziato a rivolgermi alla
            popolazione costantemente, più volte al giorno, dalle tre alle
            cinque volte al giorno. Di fatto, sono diventato una fonte di
            informazione per le persone che vivevano in città isolate da
            qualsiasi altra notizia, e per me era molto importante mantenere in
            vita tutte le cose digitali, internet, rimanere in contatto con
            tutti.
          </p>
          <p>
            Inizialmente, mantenevamo il contatto così, e poi abbiamo anche
            costruito una piattaforma mediatica che riuniva tutte le agenzie di
            stampa ucraine, una rete chiamata "Marathon." Era molto importante
            che la popolazione si fidasse di noi e avesse accesso alle
            informazioni. Perché? Perché il primo giorno ci sono state ondate di
            disinformazione da parte dei russi che dicevano che ero scappato.
          </p>
          <p>
            Dovevo uscire per strada. Ho lasciato l’ufficio e sono uscito.
            Dovevo farlo per mostrare che non era un green-screen, per mostrare
            che era la strada reale e non una manipolazione digitale. Ho fatto
            queste cose. Poi ho toccato vari oggetti. Ora, qualcuno potrebbe
            pensare che siano piccolezze, ma stavo dimostrando che ero davvero
            in un luogo reale.
          </p>
          <p>
            Tutto questo ha avuto un impatto. Ero assolutamente sicuro delle mie
            azioni. E poi mi sono rivolto ai russi. L’ho fatto davvero. Dopo di
            ciò, ho radunato… È stato il primo giorno quando ho invitato tutti i
            giornalisti qui, giusto? Era il primo giorno, credo. Beh, non qui,
            ma al centro stampa in questo edificio. Ho parlato con i
            giornalisti. Ho chiesto loro di non andarsene perché avevamo bisogno
            di armi. In quel momento, stavamo distribuendo fucili alla
            popolazione, e per me, i giornalisti e le piattaforme mediatiche
            erano voci essenziali.
          </p>
          <p>
            Qui c'erano diversi giornalisti provenienti da vari paesi ed erano
            praticamente bloccati. Ho chiesto loro dei contatti, di chi avesse
            accesso a russi, bielorussi, kazaki che capivano tutto, la stessa
            situazione, le stesse informazioni. Ho parlato con loro e parlai in
            russo. Ho detto loro: “Dovete fermare Putin. Questo è terribile.
            Questo è un orrore. Questa è guerra. Dovete fermarlo. E se vi alzate
            ora, se parlate apertamente e andate per strada…” Questo era molto
            importante.
          </p>
          <p>
            Ho parlato con loro in russo per mostrare che non c’era nessun
            problema e che tutti questi pretesti erano inventati. Ecco perché è
            così doloroso parlare anche della lingua russa, perché, guardate, se
            una persona non vuole ascoltare, non ascolterà, indipendentemente
            dalla lingua che parliamo.
          </p>
          <h1 id="negoziare" className={styles.header}>Negoziare la Pace</h1>
          <p>
            <strong>Lex Fridman</strong>: Su questo punto non sono d'accordo con
            te. Penso e spero che molte persone in Russia ci ascolteranno oggi.
          </p>
          <p>
            Volodymyr Zelensky: Hanno bloccato YouTube di recente. Ne sei al
            corrente? Nel loro paese.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Lo so. Posso garantire che questa
            conversazione si diffonderà rapidamente su internet. Tutti ti
            ascolteranno. Ti ascolteranno, incluso il presidente della Russia. È
            per questo che ho speranza.
          </p>
          <p>
            Volodymyr Zelensky: Lui, in realtà, è sordo. Anche se ti parla, è
            sordo per natura. Capisci la differenza? Per esempio, quando parli
            con Musk di razzi, stai parlando con un innovatore, uno scienziato.
            Parli di come risparmiare sui costi e di come atterrano. Dall’altra
            parte, Putin non lancia razzi per risparmiare denaro, ma per
            uccidere persone. Pensi di poter parlare con Putin di tecnologia? I
            tuoi colleghi lo hanno intervistato, e lui ha parlato loro di storia
            antica. Capisci? Immagina un uomo russo nel suo paese che lo
            ascolta. Sai di cosa parla Musk: tecnologia, Marte, intelligenza
            artificiale. E poi c’è quest’uomo, Putin, che sta lì, a pontificare
            a “culo nudo” sulle tribù. Devi capire, tu pensi che facendo
            interviste, come quella del signor Tucker, che ha intervistato
            Putin, possiate diventare amici. Ma che c’entra con l’essere amici?
            Lui è diverso. È semplicemente diverso.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Ma è comunque necessario.
          </p>
          <p>Volodymyr Zelensky: Un mammut si trova davanti a te.</p>
          <p>
            <strong>Lex Fridman</strong>: A proposito, devo dire che quando hai
            detto "culo nudo," non è stato tradotto. L’interprete potrebbe
            tradurre, per favore?
          </p>
          <p>Volodymyr Zelensky: Era solo per farti capire meglio.</p>
          <p>
            <strong>Lex Fridman</strong>: Ora mi ha spiegato tutto, capisco.
          </p>
          <p>Volodymyr Zelensky: Sì, fantastico.</p>
          <p>
            <strong>Lex Fridman</strong>: Ora capisco pienamente.
          </p>
          <p>Volodymyr Zelensky: Fantastico.</p>
          <p>
            <strong>Lex Fridman</strong>: In ogni caso, dobbiamo comunque
            parlare.
          </p>
          <p>
            Volodymyr Zelensky: Bisogna sempre parlare con qualcuno che ascolta,
            e devi parlare quando sai che questo porterà benefici, porterà pace
            e calma nel mondo, non il contrario. Amo il messaggio del Presidente
            Trump. Quando parla, penso che condividiamo la stessa posizione
            sulla pace attraverso la forza. Questo è molto importante. Significa
            che se sei forte, puoi parlare. E dobbiamo essere forti, e l’Ucraina
            deve essere abbastanza forte, altrimenti a cosa serve? Come
            Voldemort, colui che non deve essere nominato. Sì, lui è come
            Voldemort. Vive, si nutre e prospera quando lo si rende un soggetto
            invece di isolarlo. Gli è stata offerta l’opportunità di uscire alla
            luce. Lui è l’oscurità personificata e tu gli offri, per così dire,
            di essere personificato.
          </p>
          <p>
            Perché? C'è solo un motivo, la paura. E tu dici che dobbiamo
            parlare. Ascolta, dobbiamo essere in una posizione di forza, non
            parlare, ma porre fine alla guerra. Sì, è possibile attraverso il
            dialogo. Non ne siamo contrari. Devi solo essere in una posizione di
            forza per fare in modo che l’altro lo desideri. Pensi che lui voglia
            porre fine alla guerra? Questo è ciò che hai suggerito. Penso che
            ciò sia ingenuo. Mi dispiace. Con tutto il rispetto, è ingenuo
            pensare che lui voglia davvero concludere la guerra.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Ti dirò una cosa...
          </p>
          <p>
            Volodymyr Zelensky: Le circostanze… Scusa se ti interrompo. C'è
            qualcosa di cui abbiamo bisogno. Penso che il Presidente Trump non
            solo abbia la volontà, ma anche tutte le possibilità, e non si
            tratta solo di parole. Mi affido davvero a lui, e penso che anche il
            nostro popolo conti su di lui. Ha abbastanza potere per fare
            pressione su Putin, non per convincerlo a volerla fermare [la
            guerra]. No, lui non lo vorrà. Ma per costringerlo a farlo, questa è
            la differenza. Non contare sulla volontà di Putin di fermarsi. Non
            la vedrai mai. Questo è ciò che penso. Scusa.
          </p>
          <p>
            <strong>Lex Fridman</strong>: No, scusa. Ti ho interrotto prima. Ho
            quello che alcuni potrebbero definire un sogno ingenuo con te, Putin
            e Trump seduti insieme a negoziare un accordo per un cessate il
            fuoco e, insieme, trovare un percorso verso una pace a lungo
            termine. Penso che questo richieda forza e negoziati. Ci sono molte
            leve e incentivi che possono essere usati per creare un accordo
            reale. Trump è molto determinato a fare un accordo ed è pronto a
            negoziare.
          </p>
          <p>Volodymyr Zelensky: Posso farti una domanda?</p>
          <p>
            <strong>Lex Fridman</strong>: Sì.
          </p>
          <p>
            Volodymyr Zelensky: Voglio davvero che io e te siamo sulla stessa
            lunghezza d’onda. È molto importante essere nello stesso spazio
            informativo. Estremamente importante. Parliamo un po’ del cessate il
            fuoco. Lascia che ti descriva la situazione.
          </p>
          <p>
            Nel dicembre 2019, a Normandia, a Parigi, all’Eliseo, Macron,
            Merkel, Putin ed io abbiamo concordato un cessate il fuoco. Gli
            Stati Uniti non erano presenti, e questo, tra l’altro, è stato un
            punto debole dell’incontro. Se vuoi, possiamo discutere più tardi
            perché non c’erano. È una questione di garanzie di sicurezza, in
            generale. È la posizione della Germania, eccetera. Abbiamo
            concordato uno scambio di ostaggi, uno scambio totale, tutti per
            tutti. Abbiamo fatto un accordo per scambiare tutti per tutti, credo
            tu lo sappia.
          </p>
          <p>
            C’è stato anche un incontro che è durato molte ore, un incontro in
            cui abbiamo fatto un accordo con lui. Tutti erano stanchi. Alla fine
            eravamo solo io e lui, e ho proposto un cessate il fuoco. Tra
            l’altro, nessuno in Ucraina ci credeva. Pochi credevano nel cessate
            il fuoco, e lui voleva il ritiro delle truppe.
          </p>
          <p>
            Ho calcolato che, se ci fosse stato un ritiro delle truppe dalla
            linea di contatto nel modo in cui i russi proponevano, ci sarebbero
            voluti 20 anni. Gliel’ho dimostrato in termini di tempo, di
            chilometri quadrati, in particolare della lunghezza della linea di
            contatto o linea di delimitazione, e abbiamo concordato con ciò che
            gli ho detto, cioé che non funzionerà. Ma avevo molti punti, perché
            ero molto coinvolto nella questione. Ero coinvolto profondamente. È
            una mia cosa, in generale. Se inizio a fare qualcosa, non posso
            stare lì come quel tizio di cui parlavo, a "culo nudo." Devo essere
            vestito. Devo essere preparato. Devo essere più preparato di
            chiunque sia davanti a me. Fai sport, vero?
          </p>
          <p>
            <strong>Lex Fridman</strong>: Mm-hmm.
          </p>
          <p>
            Volodymyr Zelensky: Ho praticato per molti anni e sappiamo cosa sono
            i combattimenti, cosa sono il pugilato, cosa è il Thai boxing.
            Questo è ciò che facevo e che amavo molto. Quando entri nel ring,
            capisci praticamente tutto, ed è quello che ho fatto. Ero
            sicuramente ben preparato, ma lui no. No, non era profondamente
            coinvolto nel processo. Lui chiedeva “Quale confine? Dove si trova?
            Quanto tempo ci vorrà per disimpegnare le truppe?”
          </p>
          <p>
            Perché non era coinvolto, lo vuoi sapere? Perché non aveva
            intenzione di fare nulla di tutto questo. Questo è ciò che mi ha
            confuso. Se non sei profondamente coinvolto nella questione, è come
            se non avessi davvero bisogno del risultato. Questo è ciò che penso.
            Quindi, cosa è successo? Abbiamo concordato che ci sarebbe stata una
            continuazione del transito del gas nel 2019. Abbiamo raggiunto un
            accordo con lui. Questa era una garanzia di sicurezza per l’Europa.
            Merkel me l’ha chiesto, ed era estremamente importante per la
            Germania. Abbiamo concordato con lui. Per lui era solo una questione
            di soldi.
          </p>
          <p>
            In secondo luogo, abbiamo concordato uno scambio. Per me, questo era
            l’aspetto più importante. Per loro era il gas. Per me, erano le
            persone, e questo è un dato di fatto perché volevo avere un
            vantaggio umanitario per poter avere ulteriori incontri che
            avrebbero portato a una pace duratura.
          </p>
          <p>
            E terzo, il cessate il fuoco. Il cessate il fuoco di cui parli. Cosa
            è successo? Il contratto sul gas è stato firmato perché lui ne aveva
            bisogno. E, tra l’altro, conosceva tutto al riguardo. Per quanto
            riguarda lo scambio, abbiamo fatto il primo passo e abbiamo
            scambiato le persone. Per quanto riguarda il cessate il fuoco, beh,
            hanno iniziato a ucciderci dopo circa un mese, quindi l’ho chiamato
            e gli ho detto: “Abbiamo concordato un cessate il fuoco, giusto?”
            Non era un pezzo di carta igienica, vero? Questa è una questione
            seria, o almeno così sembrava. Lo era davvero. “Merkel, Macron, tu
            ed io, abbiamo tutti fatto un accordo insieme. Un cessate il fuoco è
            importante, giusto?”
          </p>
          <p>
            Non per il Capodanno, perché tutti stavano festeggiando il
            Capodanno. E ora ci offrono un cessate il fuoco per Natale. È la
            stessa cosa. Un cessate il fuoco di due, tre giorni solo per
            ricevere qualche elogio, ma questo non è uno spettacolo. Non è una
            sorta di teatro. No, si tratta della vita delle persone, ed è ciò
            che è successo. Dopo di ciò, l’ho chiamato un paio di altre volte.
            Penso di aver avuto solo due, tre chiamate in totale con lui. Gli ho
            chiesto un cessate il fuoco. Mi ha detto che non poteva essere
            fatto. Ce ne occuperemo ora.
          </p>
          <p>
            Le persone nei territori occupati, i russi e i separatisti, erano
            tutti lì insieme. Continuavano a sparare e uccidere la nostra gente.
            Sì, le linee del fronte erano tranquille, ma uccidevano persone.
            Stavano uccidendo persone e continuavo a chiamarlo.
          </p>
          <p>
            L’ho chiamato più e più volte, ma non c’era niente fino a quando,
            dopo alcuni mesi, i russi hanno smesso di rispondere al telefono.
            Non abbiamo più avuto alcun contatto da allora. Volevo un altro
            incontro come quello che abbiamo avuto in Normandia. Volevo il
            prossimo incontro. Volevo trovare una soluzione, ma i russi si sono
            rifiutati. Abbiamo cercato di farlo accadere attraverso vari paesi
            europei, e non solo europei, ma i russi si sono rifiutati. Hanno
            inventato delle cazzate, delle scuse, fornito giustificazioni
            assurde. Non volevano.
          </p>
          <p>
            Nel frattempo, stavano inviando i loro cecchini. Avevamo prove,
            prove viventi, persino video, perché alcuni di loro furono catturati
            all’epoca. Quelli erano i cecchini in addestramento. Li stavano
            addestrando. Li stavano addestrando. E più tardi, quei cecchini
            operarono in Siria e in Africa. Questi cecchini si addestravano nel
            nostro paese, a est. Gli ucraini erano bersagli viventi.
          </p>
          <p>
            Sparavano dall’altra parte, uccidendo persone, donne, bambini.
            Sparavano. Era una caccia. Tra l’altro, era nella regione di lingua
            russa a est, dove, secondo lui, tutti parlano russo. È lì che
            stavano sparando. Dove la situazione è attualmente più tesa.
            Uccidevano persone. Abbiamo inviato queste informazioni, inviato
            immagini, le abbiamo inviate all’ONU, le abbiamo inviate ovunque.
            Abbiamo lavorato molto duramente, con molta determinazione. Ho
            incontrato tutti, ma a chi importava dell’Ucraina allora?
          </p>
          <p>
            Non ci facevano caso molto. Non prestavano molta attenzione nemmeno
            alla Crimea, occupata illegalmente. Ad essere onesti, anche gli
            Stati Uniti d’America, tutti erano in qualche modo silenziosi su
            questa questione. È così che è andata. Era così prima della guerra
            su vasta scala.
          </p>
          <p>
            Volodymyr Zelensky: Voglio farti una domanda sul cessate il fuoco.
            Per esempio, oggi a Mariupol ci sono giornalisti americani e
            ucraini, e cosa ti diranno coloro che hanno ancora contatti con
            Mariupol, che sono fuggiti da lì negli ultimi minuti, poco prima
            dell’occupazione o che sono riusciti a scappare dopo l’occupazione?
            Chernov, che ha vinto un Oscar, era tra loro, e i giornalisti che
            hanno lasciato Mariupol sono qui, tra l’altro. Abbiamo avuto una
            conversazione. Ti diranno che 20.000, 30.000 civili sono stati
            torturati e sepolti lì. Non conosciamo il numero delle vittime.
            Persone che non volevano lavorare con loro, che si sono rifiutate di
            collaborare, persone che hanno scioperato per protestare, persone
            che non volevano lavorare con i russi che hanno occupato Mariupol. E
            questo è solo un esempio legato a questa città. E ho una domanda per
            te: che dire dei milioni di bambini? Te lo chiederò in russo così lo
            sentirai senza alcun ritardo: che dire dei milioni di bambini lì?
            Che cosa succederebbe se concordassimo semplicemente un cessate il
            fuoco senza capire cosa accadrebbe dopo, senza sapere cosa
            succederebbe alle garanzie di sicurezza per l’Ucraina? Che dire dei
            milioni di bambini nei territori occupati? Cosa dovrei dire loro?
            Cosa dovrei dirgli? Cosa? Qualsiasi cosa? “Ehi, tutti voi laggiù,
            addio.” E quelle decine di migliaia di persone sepolte lì, loro
            erano… È questo ciò che vogliamo? Siamo pronti a perdonarli per
            questo? Dobbiamo almeno fare il primo passo. Se questo è un cessate
            il fuoco, dobbiamo sapere che c’è una garanzia di sicurezza per la
            parte dell’Ucraina sotto il nostro controllo. Ne abbiamo bisogno
            affinché lui non possa tornare. Questo è molto importante.
          </p>
          <p>
            Cosa diciamo alle persone che vivono in quei territori? Queste sono
            milioni di persone. Sapevi che dal 2014, a Donetsk, nella Crimea,
            questo sta succedendo anche a Melitopol così come a Berdiansk ora,
            stanno prendendo tutti questi ragazzi in età da leva e li stanno
            costringendo a combattere? E se non lo fanno, verranno uccisi.
            Capisci cosa sta succedendo?
          </p>
          <p>
            È per questo che un cessate il fuoco, tutto ciò che ho detto, tutto
            ciò che desidero, e credo nel potere del Presidente Trump di usare
            tutte queste informazioni per trovare un modo per rendere l’Ucraina
            forte. Perché lo dico? Ti faccio un esempio. Il Presidente Trump
            sarà nella stessa situazione in cui mi trovavo io nel 2019.
            Esattamente nella stessa situazione. Voglio porre fine alla guerra.
            Vogliamo una pace duratura per l’Ucraina. Dobbiamo farlo: il cessate
            il fuoco, lo scambio di persone e poi diplomaticamente restituire
            tutti i territori. E lo faremo attraverso la diplomazia.
          </p>
          <p>
            Cosa accadrà dopo con la diplomazia? Cosa accadrà dopo con il
            Presidente Trump? Se il cessate il fuoco avviene senza garanzie di
            sicurezza, almeno per il territorio che controlliamo, cosa otterà?
            Se riesce a negoziare un accordo per il cessate il fuoco e tre mesi
            dopo Putin lancia una nuova ondata di attacchi, come apparirà Trump?
            Come apparirà l’Ucraina? Come apparirà tutto il resto?
          </p>
          <p>
            Putin lo farà, e perché lo farà? Perché oggi ha paura di Trump. Ma
            una volta che Trump riesce, per esempio, a negoziare un accordo per
            il cessate il fuoco senza garanzie di sicurezza serie per l’Ucraina,
            darà un via libera a Putin. Non perché lo voglia, no, non vuole
            questo. Credo in quello che dice. Ma darà a Putin un’opportunità,
            perché nella mente di Putin lui vuole che io combatta contro Trump.
          </p>
          <p>
            Il piano di Putin è quello di porre fine all’occupazione del nostro
            territorio. Questo è ciò che si trova nella sua testa malata, e ne
            sono assolutamente sicuro. È per questo che ti ho detto di non
            aspettare che Putin voglia fermare la guerra. Fai pressione su di
            lui affinché sia costretto a fermarla, questo è importante.
          </p>
          <p>
            <strong>Lex Fridman</strong>: È importante dire che ciò che hai
            detto sui bambini è una tragedia. La guerra è un inferno, ma lascia
            che te lo dica ancora una volta, dobbiamo trovare un percorso verso
            la pace.
          </p>
          <p>Volodymyr Zelensky: Ce n’è uno.</p>
          <p>
            <strong>Lex Fridman</strong>: Qual è?
          </p>
          <p>
            Volodymyr Zelensky: Ce n’è uno. Prima del cessate il fuoco:
            un’Ucraina forte. Una posizione forte per l’Ucraina, sì. Possiamo
            parlarne con Trump. Per me, possiamo parlare di garanzie di
            sicurezza, ma un passo rapido è la NATO. Una adesione parziale,
            NATO. Sì, capisco. Capisco i sentimenti di Trump sulla NATO. L’ho
            sentito, sta riflettendo su tutto questo, ovviamente. Ma comunque,
            sì, la NATO è una forte garanzia di sicurezza per tutte le persone,
            per noi, parte della garanzia di sicurezza. La seconda parte è il
            pacchetto di aiuti militari, che non useremo. Se il cessate il fuoco
            funziona, nessuno userà le armi. Per cosa? Ma devono restare. Con
            tutto il rispetto per gli Stati Uniti e per l’amministrazione, non
            come prima. Non voglio che la situazione sia come quella che abbiamo
            avuto con Biden. Chiedo sanzioni ora, per favore, e armi ora, e poi
            vedremo.
          </p>
          <p>
            Se ricominceranno, ovviamente saremo felici se ci fornirete di più e
            starete con noi spalla a spalla. Ovviamente, è giusto, ma è diverso
            quando hai le armi. Putin non sarebbe stato in grado di occupare
            così tanto territorio.
          </p>
          <p>
            È stato molto difficile per noi respingerlo, ma non avevamo armi
            prima, ed è la stessa situazione. Potrebbe ripetersi la stessa
            situazione. Te lo sto solo raccontando, come ho detto dall’inizio,
            voglio essere molto onesto con te e con il tuo pubblico. Sì, è vero.
            Se non abbiamo garanzie di sicurezza, Putin tornerà.
          </p>
          <h1 id="nato" className={styles.header}>NATO e garanzie di sicurezza</h1>
          <p>
            <strong>Lex Fridman</strong>: Per essere chiari, descriviamo l’idea
            di cui stai parlando. Vorrei offrirti altre idee. Ma al momento, la
            tua idea è che la NATO accetti l’Ucraina, tranne le cinque regioni
            di Luhansk, Donetsk, Zaporizhzhia, Kherson e la Crimea.
          </p>
          <p>
            Volodymyr Zelensky: Solo per farti capire la situazione, l’invito
            alla NATO deve essere legislativamente emesso per l’Ucraina. Quindi
            per noi, tutti quei territori sono ancora Ucraina, ma la NATO finora
            può agire solo nella parte sotto il controllo ucraino. Questo può
            essere negoziato, ne sono sicuro. Sì, non sarebbe un grande successo
            per noi, ma se vediamo un modo diplomatico per porre fine alla
            guerra, questa è una delle vie. È un inizio. In secondo luogo, le
            armi, il pacchetto di aiuti militari, non sono pronto a discuterne
            pubblicamente. È tutto scritto e il Presidente Trump potrebbe averlo
            visto o meno, ma non gli nascondiamo nulla.
          </p>
          <p>
            Tuttavia, dipende principalmente dalla volontà degli Stati Uniti,
            perché parte di questo arriverà dall’UE, parte dagli Stati Uniti,
            ovviamente insieme. Quindi non solo dagli Stati Uniti, no, no, no,
            abbiamo bisogno di unità con questo pacchetto.
          </p>
          <p>
            Quindi il pacchetto e le sanzioni. Sì, le sanzioni, ma penso che sia
            nell’interesse di tutte le persone intelligenti non avere energia
            russa sul mercato in generale. Deve fermarla. Tutto qui, va bene.
            Petrolio americano, gas americano vanno bene. Perché no? E sono più
            economici, quindi sarà più economico per tutto il mondo.
          </p>
          <p>
            I soldi andranno agli Stati Uniti, e penso che saranno felici, il
            presidente e il tuo popolo saranno felici, ma è una vostra
            decisione. Sto solo condividendo. Sì, e petrolio più economico. Così
            Putin non avrà così tanti soldi per la guerra, e basta.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Ma questo è difficile perché è molto.
            Stai dicendo di continuare le sanzioni contro la Russia, di
            accettare l’Ucraina nella NATO. Devo farti alcune domande complicate
            su questa cosa.
          </p>
          <p>Volodymyr Zelensky: Sì, vai avanti.</p>
          <p>
            <strong>Lex Fridman</strong>: Mi fido e rispetto le tue parole oggi.
            Molte persone ti rispettano e ti amano in America. Trump ti
            rispetta.
          </p>
          <p>Volodymyr Zelensky: Mi ama!</p>
          <p>
            <strong>Lex Fridman</strong>: Oh, andiamo ora. Ricorda, l’ultima
            volta mi hai corretto quando ho detto che ami Javier Milei, e hai
            detto: “No, no, no, lo rispetto.”
          </p>
          <p>
            Quindi oggi non parliamo d’amore, ma potremmo parlare seriamente di
            garantire la sicurezza della Russia?
          </p>
          <p>
            Volodymyr Zelensky: Va bene. Posso farti una domanda? La domanda è:
            su quale terra si sta combattendo la guerra e dove è iniziata? Sul
            nostro suolo, sul nostro territorio, è stato violato il diritto
            internazionale. La sovranità del nostro paese è stata violata, la
            popolazione civile ha subito perdite. Decine di migliaia di nostri
            cittadini sono stati presi in ostaggio, e chiunque ti dirà che è
            successo questo. Questo è ciò che è successo quando parlo con il
            “Sud Globale”, che cerca di bilanciare le due parti a causa della
            storia, delle sue radici e dei suoi interessi economici condivisi
            con la Russia in passato. E ora, ovviamente, quando parli con loro,
            parlano un po’ come te. Stanno cercando un equilibrio, sì, un po’
            nel mezzo, ma ci lavoreremo.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Sì.
          </p>
          <p>
            Volodymyr Zelensky: Questo è il nostro primo incontro. Durante il
            secondo, sarai più dalla nostra parte, ma è solo-
          </p>
          <p>
            <strong>Lex Fridman</strong>: Sei molto convincente, molto
            carismatico.
          </p>
          <p>
            Volodymyr Zelensky: Sì, grazie. Ma quando parlo con loro, quando
            parlo, è molto importante. Anche con il loro atteggiamento
            equilibrato verso la guerra, tutti riconoscono che questa è una
            guerra. Non è solo un conflitto interno, è una guerra su vasta scala
            che è iniziata, che Putin ha iniziato. E tutti loro, tutti, se parli
            con loro, dicono... Riconoscono che è stato un grande errore di
            Putin, e che lui ha torto. È per questo che ho detto: “No, no. Lui
            ha torto, e devi partire da questo.” Se inizi dal mezzo, tra Ucraina
            e Russia, ovviamente, possiamo parlarne in questo modo. Sei nel
            mezzo e dici: “Va bene, cosa sta succedendo? C’è una lotta. Dove si
            sta combattendo?”
          </p>
          <p>
            Non è una lotta come in Europa, quando Napoleone combatteva contro
            qualcuno nel mezzo dell’Europa. No, non è nel mezzo di qualche posto
            del pianeta. Non il pianeta, è concretamente sulla nostra terra.
            Quindi, un paese con un esercito, una persona è venuta in un altro
            paese. Tutto qui, è molto chiaro.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Ancora una volta, vorrei che
            trovassimo un percorso verso la pace, quindi proviamo comunque a
            partire dal mezzo. Quali altre idee pensi che possano esserci? Sei
            una persona molto intelligente e...
          </p>
          <p>
            Volodymyr Zelensky: Anche il tuo russo non è così buono, e ti ho
            detto che questo è solo il nostro primo incontro.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Neanche il mio inglese non è molto
            buono.
          </p>
          <p>Volodymyr Zelensky: Il tuo inglese è molto buono.</p>
          <p>
            <strong>Lex Fridman</strong>: Grazie. Ad essere onesto, sono
            terribile con ogni lingua. Beh, ci sono altre idee. Per esempio,
            scusa per dirlo, sembra folle.
          </p>
          <p>Volodymyr Zelensky: Prego.</p>
          <p>
            <strong>Lex Fridman</strong>: Ma che succede se sia l’Ucraina che la
            Russia vengono accettate nella NATO?
          </p>
          <p>
            Volodymyr Zelensky: Putin stesso ha parlato della Russia, forse
            della NATO. Quello che hai appena detto è molto corretto. Quali sono
            le garanzie per la Russia? Non che io sia davvero interessato a cosa
            accadrà loro. Ad essere onesto, non mi interessa cosa accadrà loro
            in futuro dopo la fine della guerra, ma questi sono i nostri confini
            e dobbiamo capire cosa sta succedendo lì. Beh, le garanzie della
            NATO per l’Ucraina... In realtà, questa è anche una garanzia di
            sicurezza per i russi. Francamente, ne ho parlato molte volte in
            passato. Scusa, sto parlando in modo figurato, ma immagina come
            esempio: se fossi un padre che ha perso i suoi figli, un uomo
            adulto. Un uomo adulto, un uomo, un adulto, e la guerra è finita e
            non ha mai avuto giustizia per davvero. Per esempio, qualcuno decide
            di fermare il supporto. "Non ti daremo più nulla. Non puoi
            combattere. Non puoi continuare, quindi ci fermiamo senza alcuna
            garanzia, senza alcun supporto, senza finanziamenti, senza ok." E
            nessuno è ritenuto responsabile, ma l’uomo ha perso i suoi figli.
            Non otterrà nulla. Nessuno degli assassini sarà in prigione. Tutte
            le sanzioni saranno rimosse, e lui ha perso i suoi figli, e noi
            abbiamo migliaia di persone così. Perché pensi che non andranno in
            Russia? Troveranno un modo, e non uccideranno i soldati russi lì o
            qualcuno lì? Perché non dovrebbero farlo? È nella natura umana. Non
            riguarda noi, riguarda tutti. Leggi gli scrittori americani. Sempre,
            dopo qualsiasi guerra, se non c’è giustizia per le persone, ci deve
            essere una punizione per il crimine, è solo giustizia. Come può
            essere che il mio bambino sia stato portato via? La guerra me l’ha
            portato via.
          </p>
          <p>
            Questo spaventa parecchio. E anche se fosse stato mio figlio, che
            stava adempiendo al suo dovere costituzionale, o semplicemente un
            missile che ha colpito un bambino civile, se non c’è giustizia e gli
            assassini non vengono puniti, perché queste persone non dovrebbero
            ritornare con odio? Torneranno sicuramente. Quindi, quando parliamo
            di NATO, la NATO non ferma solo la Russia.
          </p>
          <p>
            Non dimenticare, la NATO ferma anche noi, perché non ci sarà
            giustizia per tutti. Sappiamo che la NATO non ha il diritto di
            risolvere determinate questioni con la guerra. La NATO è un’alleanza
            di sicurezza, è protezione, non un lavaggio del cervello. Quello che
            Putin afferma, che la NATO è offensiva, non è vero. La NATO è
            un’alleanza difensiva, un’alleanza di sicurezza, ed è sicurezza
            anche per la Russia.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Ma purtroppo ci sono molte opzioni per
            la pace che non coinvolgono un invito alla NATO per l’Ucraina.
            Riesci a immaginare delle garanzie di sicurezza senza l’appartenenza
            alla NATO? Per esempio, se l’America decidesse semplicemente di
            uscire dalla NATO, credo che ci sia un’alta probabilità che Donald
            Trump possa fare una cosa del genere.
          </p>
          <p>
            Volodymyr Zelensky: Penso che sarebbe molto negativo per la NATO.
            Sarebbe la fine, cioè, sarebbe la morte della NATO. È un peccato,
            perché penso che sia un’alleanza molto valida. Forse non tutto è
            perfetto, ci sono burocrazia, soldi e così via, ma in generale, i
            paesi che fanno parte della NATO non combattono tra loro. Non c’è
            guerra sul territorio di nessuno di questi paesi della NATO. Penso
            che questa sia la risposta: funziona o no? Funziona politicamente o
            militarmente? Non lo so, ma funziona. Quindi, senza Trump, senza gli
            Stati Uniti d’America, non ci sarebbe NATO. Questo è il punto di
            partenza. Quindi tu chiedi: “Possiamo immaginare questo?” Cosa
            esattamente?
          </p>
          <p>
            <strong>Lex Fridman</strong>: Che possano esserci garanzie di
            sicurezza senza...
          </p>
          <p>
            Volodymyr Zelensky: No, non abbiamo bisogno di garanzie senza gli
            Stati Uniti. Questo è tutto, perché gli Stati Uniti sono un paese
            molto forte e potente. Gli Stati Uniti mettono il punto.
          </p>
          <p>
            Ovviamente, Putin dice che si tratta solo dell’Unione Sovietica
            dove, tra l’altro, l’Ucraina era la seconda repubblica più forte
            militarmente, sì, tra l’altro. Ma lui, ovviamente, lo dimentica
            sempre. Durante la Seconda Guerra Mondiale, senza l’aiuto degli
            Stati Uniti, senza il supporto delle vostre truppe, senza il
            supporto della vostra industria, industrialmente, militarmente,
            senza i vostri soldi, senza la vostra gente, Hitler avrebbe potuto
            vincere. Quindi, gli Stati Uniti hanno aiutato moltissimo. Certo,
            l’Europa, l’URSS, e tutti hanno combattuto. Tutti hanno fatto molto.
            Ma senza gli Stati Uniti, non sarebbe stato possibile. Non uso la
            parola successo, perché penso che non esista una guerra che finisca
            con successo, perché è una guerra. Perdite enormi nella Seconda
            Guerra Mondiale, milioni di persone, e per questo motivo senza gli
            Stati Uniti le garanzie di sicurezza non sono possibili.
          </p>
          <p>
            Intendo queste garanzie di sicurezza, che possono prevenire
            l'aggressione russa. Certo, abbiamo garanzie di sicurezza bilaterali
            con alcuni paesi, che includono il finanziamento del supporto per le
            nostre forze militari interne, la difesa, le questioni umanitarie e
            lo sminamento, che è molto importante. E anche l’aiuto ai nostri
            bambini nelle reti scolastiche. A proposito, questo è un punto molto
            delicato. Quanti rifugi antiaerei? Quanti rifugi antiaerei abbiamo
            costruito con i partner per i bambini? Ed è un peccato che siano
            sottoterra, ma puoi immaginare i loro occhi quando sono tornati dopo
            il COVID? Sai cosa significa il COVID, ma loro hanno vissuto il
            COVID e la guerra, insieme, e non si vedevano da tanti anni.
          </p>
          <p>
            E quando si sono visti, anche sottoterra, erano molto felici e
            sorridenti. Quindi abbiamo queste garanzie di sicurezza, ma non
            bastano a prevenire. Sì, le misure preventive funzionano anche per
            prevenire l'aggressione di Putin.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Il tuo inglese è migliore rispetto al
            mio russo. Questo è meraviglioso.
          </p>
          <p>Volodymyr Zelensky: Non ne sono sicuro.</p>
          <p>
            <strong>Lex Fridman</strong>: Ti sto solo facendo un complimento.
          </p>
          <p>Volodymyr Zelensky: Grazie. No, no.</p>
          <p>
            <strong>Lex Fridman</strong>: Dovresti fare questo tipo di cose con
            un presidente.
          </p>
          <p>Volodymyr Zelensky: Grazie mille.</p>
          <h1 id="sedersi" className={styles.header}>Sedersi con Putin e Trump</h1>
          <p>
            <strong>Lex Fridman</strong>: Va bene. Ancora una volta, senza le
            garanzie della NATO, ho un sogno che, diciamo, il 25 gennaio o alla
            fine di gennaio di quest'anno, ti siederai con Donald Trump, con
            Vladimir Putin. E insieme negozierete un cessate il fuoco con
            garanzie di sicurezza rigorose, e verrà firmato un accordo. Come
            sarebbe questo scenario senza la NATO?
          </p>
          <p>
            Volodymyr Zelensky: Lo chiarirò. Per prima cosa, penso che il 25
            gennaio o un altro giorno, beh, puoi anche chiamarlo 25 gennaio, non
            mi importa, è il mio compleanno. E ci sediamo, prima di tutto, con
            Trump. Con lui concordiamo su come possiamo fermare la guerra,
            fermare Putin. È importante per noi sederci con lui. In secondo
            luogo, è molto importante per noi che l’Europa, che è molto
            significativa per noi perché siamo parte dell’Europa, abbia voce in
            capitolo. Non solo geograficamente, ma anche geopoliticamente, e
            anche nell'Unione Europea, dove saremo. Per noi è molto importante
            che anche l’Europa abbia voce. Questo è il secondo punto. Non ci
            vorrà molto, perché l’Europa ci guarderà e noi guarderemo Trump.
          </p>
          <p>
            A proposito, ora noto che, quando parlo di qualcosa con Donald
            Trump, sia che ci incontriamo di persona o che facciamo una
            telefonata, tutti i leader europei chiedono sempre: “Com’è andata?”
            Questo dimostra l’influenza di Donald Trump, e non era mai successo
            prima con un presidente americano. Te lo dico per esperienza, questo
            ti dà anche la fiducia che lui possa fermare questa guerra.
          </p>
          <p>
            Ecco perché noi e Trump veniamo per primi, e l’Europa sosterrà la
            posizione dell’Ucraina, perché capiscono che l’Ucraina ha tutto il
            diritto di far sentire la propria voce in questa situazione, perché
            siamo in guerra. Trump ed io arriveremo a un accordo. E poi, sono
            sicuro che lui possa offrire forti garanzie di sicurezza insieme
            all’Europa, e poi possiamo parlare con i russi. Esatto. Non
            semplicemente i tre di noi seduti contemporaneamente, e tu continui
            a parlarmi così? Come se Putin volesse sedersi per delle trattative
            ma l’Ucraina no. Questo non è vero.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Penso che sì, in realtà, sia pronto a
            parlare.
          </p>
          <p>Volodymyr Zelensky: Hai parlato con lui?</p>
          <p>
            <strong>Lex Fridman</strong>: Al telefono o cosa?
          </p>
          <p>Volodymyr Zelensky: Come parli normalmente con lui?</p>
          <p>
            <strong>Lex Fridman</strong>: Non lo so. Normalmente, al mare, come
            con te. Ti invita al mare con me, solo noi tre.
          </p>
          <p>Volodymyr Zelensky: No, no. Uno di noi potrebbe annegare.</p>
          <p>
            <strong>Lex Fridman</strong>: Chi? Sai nuotare bene?
          </p>
          <p>Volodymyr Zelensky: Sì, sono un buon nuotatore.</p>
          <p>
            <strong>Lex Fridman</strong>: Sei un buon nuotatore. Beh…
          </p>
          <p>
            Volodymyr Zelensky: E vorrei aggiungere che, se avrai qualche
            contatto con lui, voglio solo sapere cosa succede allora.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Non ho mai parlato con Vladimir Putin,
            ma ho la sensazione che sia pronto, perché Donald Trump è pronto.
            Spero che anche tu sia pronto, e questo non è solo un sentimento, ma
            un sogno. Ho un sogno qui, che voi tre vi incontriate in una stanza
            e facciate pace, e voglio capire come sarebbe. Come sarebbero le
            garanzie di sicurezza che soddisfano l’Ucraina e che soddisfano la
            Russia.
          </p>
          <p>
            Volodymyr Zelensky: L’Ucraina ha bisogno di garanzie di sicurezza.
            Prima di tutto, siamo in pericolo, ed è per questo che si chiamano
            così. Per me non è uno scherzo. Facciamo un passo indietro. È
            interessante capire perché le garanzie di sicurezza, una posizione
            forte dell’Ucraina, armi potenti, e così via, siano così importanti.
            Farò una piccola lezione di storia, anche se penso che tu ti sia
            preparato e sappia già tutto perfettamente.
          </p>
          <p>
            Puoi correggermi su questo. Sì, l’Ucraina aveva garanzie di
            sicurezza. Il Memorandum di Budapest, le armi nucleari erano le
            garanzie di sicurezza che l’Ucraina aveva. L’Ucraina aveva armi
            nucleari. Non voglio definirlo un bene o un male. Oggi, il fatto che
            non le abbiamo è negativo. Perché? Perché siamo in guerra.
          </p>
          <p>
            Oggi siamo in guerra perché avete dato via libera ad una potenza
            nucleare. Una potenza nucleare sta combattendo contro di noi, contro
            l’Ucraina, e fa quello che vuole. A proposito, anche tu stai
            parlando di cessate il fuoco, solo di cessate il fuoco. Magari
            portare dei fiori a Putin, magari dirgli: “Grazie mille per questi
            anni. È stata una grande parte della mia vita.” No, non siamo
            semplicemente pronti a questo.
          </p>
          <p>
            Perché? Il Memorandum di Budapest, le armi nucleari, questo è ciò
            che avevamo. L’Ucraina le usava per protezione. Questo non significa
            che qualcuno ci abbia attaccato. Non significa che le avremmo usate.
            Avevamo quella possibilità. Queste erano le nostre garanzie di
            sicurezza.
          </p>
          <p>
            Perché ne parlo in dettaglio? Perché se prendi il Memorandum di
            Budapest, a proposito, ne ho discusso con il Presidente Trump. Non
            abbiamo ancora finito questa conversazione. La continueremo.
          </p>
          <p>
            Per quanto riguarda il Memorandum di Budapest, includeva garanzie di
            sicurezza per l’Ucraina inizialmente, tre, tre. I garanti di
            sicurezza più importanti per l’Ucraina, tre amici e partner
            strategici dell’Ucraina. Questo era nell’accordo: Stati Uniti
            d’America, Russia, Gran Bretagna. Poi si sono aggiunti Francia e
            Cina.
          </p>
          <p>
            C’erano cinque stati, ma queste non erano nemmeno vere garanzie di
            sicurezza. Ora capiamo che non è una garanzia di sicurezza, perché
            da un lato erano garanzie di sicurezza, ma c’era una parola inglese,
            per quanto ho capito, "assurance." Si traduce come "assicurazione,
            fiducia" giusto? E in russo sarà, che tipo di assicurazione?
          </p>
          <p>
            Significa rinunciare alle armi nucleari perché l’Ucraina era sotto
            pressione degli Stati Uniti e della Russia per abbandonarle. Queste
            due potenze stavano esercitando pressione. Questi due Stati
            negoziarono per assicurarsi che l’Ucraina non avesse armi nucleari.
            L’Ucraina accettò. Questi sono i più grandi stati. Questo è il
            gruppo dei cinque Stati nucleari che non fornisce nemmeno vere
            garanzie di sicurezza.
          </p>
          <p>
            Ora dobbiamo solo trovare queste persone, e dobbiamo mettere in
            prigione tutti coloro che, francamente, hanno creato tutto questo.
            Quindi fiducia, assicurazione, assicurazione che l’Ucraina sarebbe
            stata territorialmente integra con la sua sovranità. Era solo un
            pezzo di carta.
          </p>
          <p>
            A proposito, se ti interessa, dopo l’occupazione di una parte del
            nostro Donbas e della Crimea, l’Ucraina ha inviato tre volte dei
            diplomatici. Non credo di ricordare esattamente, ma tre volte in
            pochi anni abbiamo inviato lettere a tutti i garanti di sicurezza, a
            tutti i membri del Memorandum di Budapest.
          </p>
          <p>
            Cosa hanno risposto? Che quello che era scritto sul pezzo di carta,
            consultazioni, l’Ucraina deve tenere delle consultazioni. Se la sua
            integrità territoriale è violata, tutti dovrebbero partecipare alle
            consultazioni. Tutti devono venire.
          </p>
          <p>
            Tutti devono incontrarsi con urgenza: USA, Gran Bretagna, Russia,
            Francia, Cina. Qualcuno è venuto, ti chiederai? No. Qualcuno ha
            risposto a queste lettere, lettere ufficiali? Sono tutte redatte da
            diplomatici. Qualcuno ha condotto consultazioni? No, e perché no?
            Non gliene fregava niente. Questo è comprensibile in russo: come
            alla Russia non importava nulla, neanche a tutti gli altri garanti
            di sicurezza del Memorandum di Budapest importava.
          </p>
          <p>
            A nessuno importava di questo paese, di queste persone, di queste
            garanzie di sicurezza, e così via. Prendiamo una pausa, questo sarà
            il Memorandum di Budapest. L’ultima volta con me. Immagina quanti
            anni è stato con me, fino a Febbraio 2022? A Febbraio 2022, la
            guerra è iniziata, una guerra su vasta scala. Le lettere per le
            consultazioni sono state inviate. Nessuno ha risposto. Poi, ci siamo
            presi una pausa dal Memorandum di Budapest.
          </p>
          <p>
            La domanda è semplice riguardo [alle garanzie di sicurezza di]
            Budapest. Possiamo fidarci di questo? No. Per qualsiasi paese di
            questi cinque che si era seduto al tavolo delle trattative, si
            tratto solo di un pezzo di carta. Credimi, ti salveremo. No. Un
            altro, questo è un treno. Questo è un treno con carta straccia, con
            garanzie di sicurezza, su cui l’Ucraina ha viaggiato per molti anni.
            Il secondo vagone di questo treno sono gli Accordi di Minsk.
          </p>
          <p>
            Il Formato Normandia e gli Accordi di Minsk, dove c’era scritto,
            dove i firmatari erano... Gli Stati Uniti d’America non c’erano più.
            Capisco che Obama fosse al potere all’epoca, e per quanto ne so,
            penso che semplicemente non fossero interessati a cosa accadesse
            all’Ucraina e a dove si trovasse in generale. Beh, da qualche parte
            lì, parte di qualcosa.
          </p>
          <p>
            Persone, beh, persone, e va bene, lasciamo fare queste persone. Gli
            Stati Uniti semplicemente non parteciparono. Negli Accordi di Minsk,
            non ci sono pretese verso gli Stati Uniti perché non erano garanti.
            Dov’è la pretesa? Un passo indietro. 2008, Bucarest. Tutti avevano
            già imparato dal Memorandum di Budapest. Bucarest, 2008.
          </p>
          <p>
            A Bucarest, il signor Bush, Presidente degli Stati Uniti, un
            Repubblicano, dice che l’Ucraina dovrebbe entrare nella NATO. Questa
            è la voce dei Repubblicani. Proprio così, l’Ucraina dovrebbe entrare
            nella NATO. Tutti fanno riferimento agli Stati Uniti, tutti
            favorevoli. Chi è contrario? Merkel, dunque lei si oppone e ha
            costretto tutti a non mandare all’Ucraina un invito a entrare nella
            NATO perché sarebbe stato un “passo”.
          </p>
          <p>
            Seriamente, i repubblicani erano favorevoli, gli Stati Uniti erano
            favorevoli, perché i repubblicani e Bush non avevano paura di
            nessuno. Non avevano paura di nessuno, e sapevano che l’Ucraina
            giustamente voleva entrare nella NATO. Ha scelto così. E qual è la
            domanda? Beh, le persone hanno fatto la loro scelta. Bene, e i russi
            non ci avrebbero fatto caso. Non era il caso allora. Perché? Perché
            i russi erano diversi.
          </p>
          <p>
            Poi, Minsk, non abbiamo avuto successo. Dopo gli Accordi di Minsk,
            come ti ho detto, si sono tenuti centinaia di incontri. Ho avuto
            centinaia di incontri dal 2019. Non potevamo pensare a un cessate il
            fuoco. Un cessate il fuoco è stata una nostra proposta, non un
            suggerimento di qualcun altro. È stata mia. Lo volevo. L’ho
            desiderato. In Ucraina, la società era divisa. Non tutti lo
            volevano. Metà non lo voleva.
          </p>
          <p>
            Una metà era contraria, l'altra metà era favorevole. Alcuni
            gridavano: “Non crederci.” Altri gridavano: “Credici.” Io sono il
            presidente dell'Ucraina. Ho ricevuto la fiducia dal 70% della
            popolazione per prendere decisioni appropriate e le ho prese. Questo
            non è uno scherzo, non ci sederemo semplicemente in tre. Sto
            semplicemente dicendo le cose come stanno. Come posso dirtelo?
          </p>
          <p>
            Questi incontri devono essere seri e preparati, e preparati con
            coloro che vogliono la pace. L’Ucraina vuole la pace, gli Stati
            Uniti vogliono la pace. Dobbiamo sederci con Trump, e questo è
            sicuro al 100%, prima di tutto, come prima priorità. Inoltre, mi ha
            detto al telefono che sta aspettando che ci incontriamo e che ci
            sarà una visita ufficiale. E la mia visita sarebbe la prima o una
            delle prime per lui.
          </p>
          <p>
            E per lui, questo argomento è molto importante. So che ha le sue
            questioni interne, i problemi dell’America, lo capisco. Ho ascoltato
            il suo programma elettorale, ma riguardo agli affari internazionali,
            penso che il nostro problema sia uno dei più urgenti per il
            Presidente Trump. Pertanto, credo molto, mi fido delle sue parole, e
            spero che ci incontreremo di nuovo. Dobbiamo prepararci.
          </p>
          <p>
            Abbiamo molti piani su cui lavorare, e questi esistono e sono
            supportati da molti paesi, ma abbiamo bisogno della sua visione.
            Deve controllare tutti questi dettagli, ma la sua visione, per
            favore, perché può fermare Putin, perché Putin ha paura di lui.
            Questo è un dato di fatto. Ma Trump è il presidente di un paese
            democratico e non governa a vita. Non è Putin. Non resterà per 25
            anni.
          </p>
          <p>
            Rimarrà per il suo mandato. Per favore, dimmi. Beh, per esempio,
            viene eletto per quattro anni e al quinto anno Putin inizia una
            guerra. Sapere che non c’è stata guerra durante il suo mandato e che
            l’Ucraina è stata distrutta dopo di lui, questo farà sentire meglio
            Trump? Perché distrutta? Putin è tutto, un assassino, tutto tranne
            che uno stupido. Sarà preparato. Conosce i nostri errori.
          </p>
          <p>
            Capisce come abbiamo sconfitto il suo esercito dopo l’inizio
            dell’invasione. Ha capito che questa non era una guerra sovietica e
            che questo non funzionerà con noi. Si preparerà. Destinerà tutto
            alla produzione di armi. Avrà un sacco di armi e un esercito molto
            grande. E pensi che, dopo una tale umiliazione, quattro anni senza
            una guerra, non ci distruggerà.
          </p>
          <p>
            Tornerà e combatterà solo contro l’Ucraina. Distruggerà tutto ciò
            che trova. E se dici che c’è il rischio che il Presidente Trump esca
            dalla NATO, per esempio, questa è una decisione degli Stati Uniti.
            Sto semplicemente dicendo che, se lo fa, Putin distruggerà l’Europa.
          </p>
          <p>
            Calcola la dimensione degli eserciti in Europa. Calcola la
            dimensione degli eserciti in Europa. Non lo dico senza motivo. Fai
            il calcolo. Perché Hitler conquistò tutta l’Europa allora? Quasi
            tutta. Basta fare il conto, ricordare il suo esercito composto da
            milioni di soldati. Calcola cosa ha l’Europa oggi. Quali sono i più
            grandi eserciti? Noi abbiamo il più grande esercito. L’esercito
            ucraino è il più grande d’Europa. Il secondo, dopo di noi, è quattro
            volte più piccolo del nostro.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Quello francese?
          </p>
          <p>
            Volodymyr Zelensky: Sì. 200.000. Penso che i francesi abbiano circa
            200.000 soldati. Noi ne abbiamo 980.000.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Quindi questa potente coalizione di
            nazioni europee…
          </p>
          <p>Volodymyr Zelensky: Non sarà sufficiente.</p>
          <p>
            <strong>Lex Fridman</strong>: Sì, non sarà sufficiente. Ma sei un
            uomo intelligente. Ci sono un sacco di idee. partnership con il Sud
            Globale, l’India, il Medio Oriente, l’Arabia Saudita, partnership
            politiche. Tutto questo ti protegge.
          </p>
          <p>
            Volodymyr Zelensky: Prima di tutto, guarda un esempio. La Corea del
            Nord. Guarda solo questo esempio. Ne sono arrivati 12.000. Oggi,
            3.800 uccisi o feriti. Possono portarne di più. 30-40.000 o forse
            500.000. Possono portare molte persone. Perché? Perché hanno ordine,
            autocrazia e tutto il resto. L’Europa può riunire le persone? No.
            L’Europa sarà in grado di costruire un esercito composto da due o
            tre milioni di persone? No, l’Europa non vorrà farlo. E per cosa?
            Noi certamente non vogliamo una guerra mondiale con te. Non esiste
            tale scopo. Non c’è uno scopo come quello di radunare tutti.
          </p>
          <p>
            Non vogliamo alcuna guerra. Vogliamo fermare i russi, e loro
            invitano soldati nordcoreani. Invitati. I loro volti sono bruciati.
            Si bruciano i volti da soli. Quelli che non possono scappare, feriti
            o uccisi. C’è un video. Tutto quello che ti sto dicendo, ci sono
            prove di questo, lo fanno affinché non siano riconoscibili. Giusto?
            Che cosa significa? Questi non sono gli stessi valori che condivide
            l’Europa. L’Europa dà un certo valore alla vita. Questo significa
            che quei ragazzi [nordcoreani] non hanno valore. Sì, non contano il
            numero di persone. Questa è la risposta. Possono spostarne di più?
            Sì. Possono spostare decine di migliaia di persone? Sì, perché
            possiamo vedere ciò che hanno.
          </p>
          <p>
            L’anno scorso, per esempio, l’Europa ci ha dato 1 milione di
            proiettili di artiglieria. Ne abbiamo prodotti molti da soli, ma ce
            li hanno dati come iniziativa. È stata un’iniziativa. 1 milione di
            proiettili di artiglieria, da 155 mm, e così via. Noi ne produciamo
            di più, ma la Corea del Nord ne ha dati a Putin 3,7 milioni. Glieli
            ha semplicemente dati. Quindi anche lui ha un deficit per oggi. Di
            cosa ha bisogno lui? Ha bisogno di tempo.
          </p>
          <h1 id="compromesso" className={styles.header}>Compromesso e leva</h1>
          <p>
            <strong>Lex Fridman</strong>: Ma il numero di soldati…
          </p>
          <p>Volodymyr Zelensky: Sì.</p>
          <p>
            <strong>Lex Fridman</strong>: E il numero di proiettili di
            artiglieria non è tutto. Come hai detto. Immaginiamo che Donald
            Trump garantisca la sicurezza per quattro anni. Puoi formare
            partnership con l’India, con l’Arabia Saudita, che facciano
            rispettare sanzioni o limiti sui prezzi del petrolio, ad esempio, in
            caso di azioni aggressive. Puoi persino costruire… Ho incontrato
            molte persone incredibili nell’ambito IT ucraino. Potreste costruire
            grandi aziende che formano partnership con gli Stati Uniti, che
            formano partnership con la Cina, e questo è un’enorme leva contro
            l’aggressione, indipendentemente da quanti milioni di proiettili di
            artiglieria ci siano. E questo, un pezzo di carta, non ti serve un
            pezzo di carta per la protezione.
          </p>
          <p>
            Volodymyr Zelensky: Ah, sei tu. Beh, quando parli in inglese, non
            hai nemmeno bisogno di risposte perché, mentre parli, hai già
            risposto a tutte le domande. La prima è che, durante questo tempo,
            hai bisogno solo di cooperazione. Servono molti soldi per questa
            industria militare. In Ucraina o in Europa, con l’India, l’Arabia
            Saudita e gli Stati Uniti, hai bisogno di molti soldi. Quindi la
            domanda è, dove li prenderai? La mia risposta a Trump è stata, gli
            ho detto che questa è una delle garanzie di sicurezza. Prendi i 300
            miliardi dei fondi russi congelati. Li prenderemo. Prendi i soldi,
            quelli di cui abbiamo bisogno per la nostra produzione interna, e
            compreremo tutte le armi dagli Stati Uniti.
          </p>
          <p>
            Non abbiamo bisogno di regali dagli Stati Uniti. Sarebbe molto
            positivo per la vostra industria, per gli Stati Uniti. Metteremo lì
            i soldi. Soldi russi, non ucraini, non europei. Soldi russi, beni
            russi. Devono pagare per questo. Li useremo e lo faremo. Questa è
            una delle garanzie di sicurezza, sì, ovviamente, perché questa è una
            garanzia militare. Sì.
          </p>
          <p>
            Ma poi, il secondo punto che hai menzionato riguarda il prezzo
            dell’energia e molte sanzioni sui prodotti, la “shadow fleet” russa,
            eccetera. Questa è la seconda risposta di cui abbiamo parlato prima.
            Sì, metti più sanzioni su di loro. Più sanzioni. Va bene, ma non
            togliere le sanzioni.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Va bene per te, ma non sarà lo stesso
            per il presidente della Russia.
          </p>
          <p>
            Volodymyr Zelensky: Sì, ma non sto pensando al suo bene. È pur
            sempre un assassino.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Capisco, ma purtroppo la realtà è che
            serve un compromesso per raggiungere un accordo.
          </p>
          <p>
            Volodymyr Zelensky: Quindi, secondo te, il fatto che lui non sia in
            prigione dopo tutti questi omicidi, non è in prigione, nonostante
            tutti gli omicidi, e che nessuno al mondo sia in grado di metterlo
            al suo posto e mandarlo in prigione... Pensi che questo sia un
            piccolo compromesso?
          </p>
          <p>
            <strong>Lex Fridman</strong>: Questo non è un piccolo compromesso. E
            perdonarlo non sarà un piccolo compromesso.
          </p>
          <p>
            Volodymyr Zelensky: Perdonarlo. Nessuno perdonerà. È assolutamente
            impossibile perdonarlo. Non possiamo entrare nella testa e
            nell’anima di una persona che ha perso la propria famiglia. Nessuno
            accetterà mai questo. Assolutamente impossibile. Non lo so. Hai
            figli?
          </p>
          <p>
            <strong>Lex Fridman</strong>: No, non ancora. Ma vorrei averne.
          </p>
          <p>
            Volodymyr Zelensky: Sì. Dio ti benedica. E questa è la cosa più
            importante nella vita, e loro ti hanno semplicemente tolto la cosa
            più preziosa. Chiederai chi ti ha rovinato la vita prima di
            strappargli la testa? Semplice curiosità. Ti hanno portato via tuo
            figlio. Chiederai chi lo ha fatto? E loro ti risponderanno: “Quel
            tizio lo ha fatto.” Dirai: “Oh, bene, allora non ci sono domande.”
            No, no, no. Andrai fino all’inferno e gli strapperai la testa, e
            sarà giusto. Gli assassini possono essere perdonati? Ecco perché si
            fanno garanzie di sicurezza. Ciò che ti ho detto, per coloro che
            sono qui, ciò che controlliamo e ciò che non accadrà.
          </p>
          <p>
            E coloro che hanno perso qualcuno, non dimenticheranno mai con il
            passare del tempo. Ma quando ci hai dato la NATO, ho solo detto che
            questo significa che, dopo un po', tutto quello che ho detto sulla
            NATO. Dopo un po', l'Ucraina non andrà contro la Russia e la Russia
            non andrà contro l'Ucraina, perché sei nella NATO. Sto solo dicendo:
            non è questo un compromesso? La NATO è un compromesso. Non è solo
            una garanzia di sicurezza, a mio avviso. Guarda, quando i razzi
            attaccavano Israele, e Israele non è nella NATO, i paesi della NATO
            hanno schierato aerei. La difesa aerea ha funzionato, gestita da
            diversi paesi del Medio Oriente.
          </p>
          <p>
            Anche queste sono garanzie di sicurezza. A proposito, Israele ha
            armi nucleari. Quindi, perché hanno bisogno della NATO, quando in
            realtà hanno più di quanto la NATO abbia? L'aviazione americana,
            britannica e francese è intervenuta. C’era l’ADA. Non ricordo dalla
            Giordania. Ascolta, migliaia di missili sono stati abbattuti in quel
            modo. Cos’è questo? È una garanzia di sicurezza. Solo che non si
            chiama NATO. Lo "Zio Vova" è irritato dalla parola NATO? C’è un
            problema con la parola e penso che sia semplicemente irritato dalle
            persone che sono vive e che vivono qui.
          </p>
          <h1 id="putin" className={styles.header}>Putin e la Russia</h1>
          <p>
            <strong>Lex Fridman</strong>: Se credi in questo, sarà molto
            difficile negoziare. Se pensi che il presidente di un paese sia
            completamente folle, è davvero difficile raggiungere un accordo con
            lui. Devi considerarlo come una persona seria che ama il suo paese e
            ama le persone nel suo paese. E conduce, sì, azioni militari
            distruttive.
          </p>
          <p>
            Volodymyr Zelensky: Di chi stai parlando adesso? Chi ama il suo
            paese?
          </p>
          <p>
            <strong>Lex Fridman</strong>: Putin. Pensi che non ami il suo paese?
          </p>
          <p>
            Volodymyr Zelensky: No. Qual è il suo paese? Considera l'Ucraina
            come il suo paese. Qual è il suo paese? Spiegalo. Domani dirà che è
            l'America. Nessuna pietà per i ceceni. Ti sembrano russi? Parlano
            russo? Certo, imparano a scuola, come ovunque ci sia stata la
            Russificazione. Chi sono i ceceni? Un popolo diverso, un’altra fede,
            un’altra lingua. Un milione di eliminati. E come sono stati
            eliminati? Come li ha uccisi? Con amore? Lo so bene, "strangolandoli
            con abbracci." In ucraino diciamo: "Strangolare con abbracci." Ti
            amo così tanto, così tanto che voglio ucciderti. Questo è il suo
            amore. E non è amore. Ti sbagli. Non ama il suo popolo. Ama il suo
            cerchio ristretto. È solo una piccola parte del popolo. Non li ama.
            Perché? Ti spiego. Non puoi mandare la tua gente in un’altra terra
            sapendo che moriranno. I giovani, mia figlia ha 20 anni. Per me è
            ancora una bambina. È già adulta, ovviamente, ma è una bambina. I
            ragazzi che manda [in guerra] hanno 18 anni. Sono bambini. Lui li
            manda. Non è che i fascisti siano venuti nella sua terra e lui debba
            difenderla. È venuto nella nostra terra. Li ha mandati in Cecenia.
            Li ha mandati in Siria, li ha mandati in Africa. Li ha mandati in
            Giorgia. Li ha mandati in Moldova. La Transnistria, quello accadde
            prima che diventasse Presidente. Bene, possiamo lasciarla da parte.
            Ha già abbastanza peccati suoi. E poi c’è l’Ucraina, la parte più
            grande. 788.000 russi uccisi o feriti. Li chiama tutti russi, anche
            quelli che non sanno nemmeno parlare russo nel suo territorio, in
            quella che chiama Russia, tutto ciò che hanno schiavizzato. Sì.
            Orgogliosi. Mi chiedo quindi, è amore questo? Che tipo di amore è? E
            per cosa? Ama il suo popolo? No. Ama la sua terra? Il suo paese è
            più grande dell’America. Quanto territorio ti serve? L’America è
            enorme. L’America è semplicemente un paese straordinario. Un paese
            straordinario. La Russia è più grande. Beh, solo più grande. Quindi
            chiediti, li ama davvero? Cosa sta facendo e cosa ama? Pensi che sia
            stato dappertutto nella sua Russia? È impossibile girarla tutta. Non
            c’è stato dappertutto. Semplicemente non c’è stato.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Beh, credo che Donald Trump ami
            l’America, e non penso che sia stato in ogni singola città
            americana.
          </p>
          <p>
            Volodymyr Zelensky: No, no, no. Ho visto i suoi comizi. Così tanti
            comizi. No, no. Diciamoci la verità. Diciamoci la verità. Lo ha
            fatto, e l’ho visto, ed è molto difficile. Voglio dire, non ha 18
            anni. Sì, ma è forte e questa è la sua forza di volontà. Ovunque ci
            sia una guerra, sono sicuro, prego Dio che non ci sarà mai sul
            vostro territorio. Sì. E sono sicuro che non ci sarà, ma sono anche
            sicuro che se in qualche regione ci fossero problemi, come un
            terremoto, un uragano, ne avete molti. Beh, sono sicuro che il
            Presidente Trump sarebbe lì dopo uno, due o tre giorni. Non so quali
            siano i dettagli di sicurezza, ma ci sarebbe. Altrimenti, come
            penserebbero di lui?
          </p>
          <p>
            Sì, certo che ci sarebbe. Certo, lo stesso vale per me. Non mi sto
            confrontando con lui. È solo che, dove le persone stanno soffrendo,
            devo esserci. La prossima domanda è molto semplice: la regione di
            Kursk, l’operazione lì. Putin è stato a Kursk durante questi quattro
            mesi? No.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Ascolta, ho un enorme rispetto per te,
            ammirazione, per molti motivi. Uno di questi è che sei rimasto a
            Kyiv e un altro è che visiti il fronte e parli con i soldati al
            fronte e con le persone in tutta l’Ucraina. Un rispetto assoluto per
            questo. E non abbastanza persone lo riconoscono. Ho avuto una
            conversazione con Tucker Carlson, ad esempio, e gli ho detto: “Sei
            un eroe per essere rimasto a Kyiv.” E lui ha detto: “Beh, ha fatto
            solo ciò che ogni leader dovrebbe fare.” Ma penso che non abbastanza
            leader facciano ciò che ogni leader dovrebbe fare. Quindi, rispetto
            assoluto. Sono totalmente d’accordo con te.
          </p>
          <p>
            Sì, un leader dovrebbe andare al fronte in una guerra. Detto questo,
            l’America ha condotto guerre in tutto il mondo. Le guerre in
            Afghanistan e Iraq sono costate 9 trilioni di dollari e hanno ucciso
            oltre un milione di persone. La guerra è un inferno. E solo perché
            la guerra è condotta in modi terribili non significa che il leader
            non ami il proprio paese. Ma capisco il tuo punto. Ancora una volta,
            ho un sogno, che anche se è presente dell’odio, tu ti sieda con
            Donald Trump e Vladimir Putin e troviate un modo per la pace. Lascia
            che ti faccia una domanda. Cosa pensi? Ci sarà mai un giorno in cui
            il popolo ucraino perdonerà il popolo russo e i due popoli
            torneranno a viaggiare avanti e indietro, a sposarsi, a ricostruire
            amicizie e legami? Ci sarà un tempo così in futuro?
          </p>
          <p>
            Volodymyr Zelensky: Penso che la storia abbia già risposto a questa
            domanda da molto tempo. Non so come sarà per noi. Sarà in futuro,
            senza dubbio. La storia lo ha mostrato più volte. E di nuovo, dopo
            ogni guerra devastante, una generazione, un paese, riconosce di
            essere stato un aggressore. E arriva a capire che è impossibile
            perdonare. Questo è esattamente il tipo di insegnamento che hanno
            avuto in Germania per molti anni. Anche se questi bambini non
            avevano nulla a che fare con esso. Erano i loro nonni a partecipare,
            e non tutti loro hanno partecipato alla guerra della Germania
            nazista essenzialmente contro il mondo. Sì. E contro la vita. E
            quindi si stanno ancora scusando. Chiedere scusa non è facile. Sanno
            di essere stati gli aggressori, di essere stati colpevoli. Non
            cercano compromessi con la storia. Il compromesso fa perdere tempo.
            E loro lo capiscono. Ci sono assassini condannati, condannati sia
            storicamente che dal loro stesso popolo. Le riparazioni sono state
            pagate e sono state stabilite garanzie di sicurezza a proposito. E
            tutto questo è stato fatto. E quando tutto questo è fatto e
            riconosciuto, in ogni caso, le persone sviluppano relazioni tra di
            loro. È chiaro. Ma può accadere solo come è sempre accaduto nella
            storia. La Russia dovrà chiedere scusa. Lo farà. Questo accadrà
            perché sono colpevoli. Sono colpevoli. E, come ti ho detto, i
            colpevoli sono diversi. Sia quelli che hanno partecipato sia quelli
            che sono rimasti in silenzio, perché anche con il silenzio si
            partecipa, secondo la mia opinione.
          </p>
          <h1 id="donald" className={styles.header}>Donald Trump</h1>
          <p>
            <strong>Lex Fridman</strong>: Posso chiederti di Donald Trump? Ne
            abbiamo già nominato molte volte, ma concentriamoci su questo. Cosa
            ammiri in lui? Cosa rispetti di Donald Trump? E forse, perché pensi
            che abbia vinto così nettamente le elezioni nel 2024 e che il popolo
            americano lo abbia scelto?
          </p>
          <p>
            Volodymyr Zelensky: Era più forte. Era molto più forte di Kamala
            Harris. Prima Biden, poi Kamala Harris. Sì. Ha dimostrato che può
            esserlo sia intellettualmente che fisicamente. È stato importante
            dimostrare che, se vuoi avere un paese forte, devi essere forte. E
            lui era forte. E questo numero di comizi, come ho detto, non è una
            cosa semplice. Ha dimostrato che può farcela. È forte. Quindi non ha
            alcun problema con la sua, voglio dire, età. Nulla. È giovane. È
            giovane qui, e il suo cervello funziona. Penso che sia importante,
            molto importante. E ovviamente ci sono molte questioni interne.
            Capisco i prezzi e così via. Questioni economiche e ci sono altre
            questioni.
          </p>
          <p>
            <strong>Lex Fridman</strong>: L’immigrazione.
          </p>
          <p>
            Volodymyr Zelensky: Tante cose. Capisco. Quindi forse ha risposto a
            quelle domande che le persone avevano.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Una delle questioni…
          </p>
          <p>Volodymyr Zelensky: È che finirà la guerra.</p>
          <p>
            <strong>Lex Fridman</strong>: Che porrà fine alla guerra.
          </p>
          <p>
            Volodymyr Zelensky: Per me, questa è la questione principale, ma ho
            detto che per lui, lui è il Presidente degli Stati Uniti. Per lui,
            la priorità sono le sue questioni negli Stati Uniti. E lo capisco e
            lo rispetto, ma poi ha parlato del mondo, sì, ha detto che finirà la
            guerra. E spero davvero che lo faccia, perché penso che il nostro
            popolo supporti davvero la sua idea. Ecco perché ho detto che per me
            è molto, molto importante avere abbastanza persone intorno a lui che
            abbiano connessioni con lui, con le idee giuste.
          </p>
          <p>
            Per me, la verità sono le cose giuste. Quello che sta realmente
            accadendo sul campo di battaglia, quello che sta realmente accadendo
            con Putin e la Russia, cosa vuole davvero ottenere. Prima di
            qualsiasi decisione, devi trovarti nello stesso piano di
            informazione. Abbiamo davvero bisogno che lui sappia tutto da noi,
            da voi, dalle persone in Ucraina, dalle persone intorno che hanno
            davvero paura. Paura che Putin non voglia fermare la guerra, paura
            che ritornerà con la sua aggressione.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Prima di tutto, devo menzionare che la
            nostra conversazione di oggi sarà tradotta e doppiata in ucraino,
            inglese, russo, altre lingue, spagnolo. Quindi sarai nella tua voce
            [anche nelle altre lingue]. Ci sono ragazzi brillanti, originari
            della Polonia. È una compagnia chiamata ElevenLabs. Hanno addestrato
            un’IA. L’intelligenza artificiale è davvero abile con la tua voce.
            Hai la libertà di parlare in qualsiasi lingua tu scelga, ma
            qualunque cosa accada, ti troverai sempre a tornare a parlare in
            ucraino.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Cioè, quando parli di Donald Trump,
            puoi farlo in ucraino o in russo.
          </p>
          <p>Volodymyr Zelensky: Tutti capiscono.</p>
          <p>
            <strong>Lex Fridman</strong>: Tutti capiscono. Ma hai detto che ci
            sono alcune cose sulla guerra che forse gli americani non capiscono.
            Quindi abbiamo parlato di Putin, abbiamo parlato delle garanzie di
            sicurezza, della realtà della guerra, di cosa sta succedendo sul
            campo. Cosa ritieni che le persone dovrebbero capire?
          </p>
          <p>
            Volodymyr Zelensky: Prima di tutto, devono capire l’idea della
            guerra di Putin. È molto importante per lui. Io considero questo
            processo. Penso che sia molto importante per lui non concedere
            l’indipendenza all’Ucraina. Impedire che l’Ucraina si sviluppi come
            un paese indipendente. Per lui, l’influenza. L’influenza
            sull’Ucraina non può essere persa.
          </p>
          <p>
            Volodymyr Zelensky: E per lui, è come… Penso che per lui questo sia
            un obiettivo nella parte finale della sua vita, e certamente per lui
            è l’ultimo tratto della sua vita politica. E penso che questo sia il
            suo obiettivo. La seconda questione, non voglio parlare di queste
            banalità sul fatto che voglia riprendersi tutti i territori
            dell’influenza dell’Unione Sovietica. Lo fa poco a poco.
          </p>
          <p>
            Non voglio… Le persone devono conoscere i dettagli. Ad esempio, la
            Georgia, che stava dirigendosi verso l’UE e la NATO, si sta
            completamente piegando alla Russia, nonostante il fatto che abbiano
            dei conflitti congelati. Hanno in Abkhazia ciò che noi abbiamo in
            Donbas, che è controllato da ribelli militanti. L’Abkhazia non si
            sta sviluppando. È solo una parte molto bella della Georgia che è
            morta. E se hai l’opportunità, vacci un giorno. Capirai. È
            semplicemente morta perché Putin lo voleva. Voleva impedire loro di
            svilupparsi perché un conflitto congelato significa che non sarai
            accettato nell’UE e sicuramente non sarai accettato nella NATO.
          </p>
          <p>
            Perché in questo momento, sì, non ti accettano a causa di un
            conflitto congelato. Ed è quello che Putin ha fatto. È molto
            importante per lui non perdere questa influenza. Cioè, ha fatto
            regredire la Georgia... I giovani, gli studenti, tutti se ne vanno.
            E questo è un dato di fatto. La Georgia è piuttosto piccola e se ne
            andranno. Vogliono vivere in Europa. Vogliono svilupparsi. Qualcuno
            negli Stati Uniti, qualcuno in Europa, qualcuno nell’UE, qualcuno in
            Gran Bretagna. Ora Putin combatterà per il parlamento moldavo.
            Questo è il suo secondo passo. Vedrai in Aprile cosa succederà.
            Vedrai che inizierà a far inimicare la Moldova con l’Europa.
          </p>
          <p>
            Anche se vogliono unirsi [all’UE], a lui non importa. Ci sarà un
            partito filo-russo e faranno qualcosa con l’attuale presidente,
            perché ha vinto le elezioni. Lei è filo-europea, ma lui farà
            regredire il tutto. I prossimi passi sono completamente chiari. Farà
            tutto il possibile ovunque abbia perso influenza, dove c’era
            l’influenza dell’Unione Sovietica. Cercherà di riprenderla il più
            possibile. E capiamo a quale prezzo. Hai visto la Siria, hai visto
            le torture. Quello che abbiamo visto a Bucha, quello che abbiamo
            visto ovunque siamo andati e dove i nostri territori erano occupati.
          </p>
          <p>
            In Siria è successa la stessa cosa. C’erano mille persone lì. E
            l’hai visto. Sono stati trovati scienziati. Sono stati trovati
            medici. È chiaro che qualsiasi popolo è in grado di avere una
            propria opinione. Con le loro abilità hanno sviluppato la società.
            Tutti quelli che possono esprimere un’opinione, tutti quelli che
            possono plasmare l’indipendenza e la maturità di una società. Tali
            persone non sono necessarie. E lui vuole questo in Ucraina.
          </p>
          <p>
            E quindi tutti devono capire che l’Ucraina è come un grande muro.
            Dall’altra parte c’è l’Europa, e se Dio vuole, il Presidente Trump
            non si ritirerà dalla NATO. Perché ancora una volta, credo che
            questo sia il rischio più grande.
          </p>
          <p>
            Penso che due cose. Due cose che Putin vorrebbe vedere sono una NATO
            debole e quest’ultima senza Trump. E un’Ucraina debole, che non può
            sopravvivere sul campo di battaglia, semplicemente non può
            sopravvivere e impedirmi di costruire una relazione forte con Trump.
            Penso che questi due passi, lasciare la NATO e l’indebolimento
            dell’Ucraina, porteranno a una guerra su larga scala, che Putin
            condurrà su tutti i territori di quell’Europa post-sovietica.
            Intendo l’Europa sovietica, non post-sovietica, ma del periodo
            post-Seconda Guerra Mondiale. Cioè l’Europa dell’era sovietica, per
            poter controllare completamente tutto ciò che sta lì. Questo è
            quello che farà. E oltre a questo, ciò accadrà in ogni caso.
          </p>
          <p>
            Anche se gli Stati Uniti stanno pensando di uscire dalla NATO,
            questa guerra influenzerà gli Stati Uniti perché la Corea del Nord è
            il primo segnale. Le competenze nordcoreane, le conoscenze
            nordcoreane, che stanno acquisendo da questa guerra. Questo include
            il padroneggiare nuove tecnologie, droni su larga scala, missili,
            come funzionano, il tipo di guerra tecnologica che abbiamo oggi, la
            guerra informatica, ecc. Tutte queste competenze, la Corea le
            porterà a casa e le espanderà in quella regione. E questo sarà un
            rischio per la regione del Pacifico. La sicurezza, prima di tutto.
            Per il Giappone e per la Corea del Sud, affronteranno questi rischi
            al cento per cento, e sarà chiaro che anche Taiwan dovrà
            affrontarli.
          </p>
          <p>
            Senza questo, è impossibile. Questo sta già accadendo. Sta già
            accadendo. Pertanto, penso che il Presidente Trump abbia tutto il
            potere per fermare Putin e dare all’Ucraina forti garanzie di
            sicurezza.
          </p>
          <h1 id="legge" className={styles.header}>Legge Marziale ed Elezioni</h1>
          <p>
            <strong>Lex Fridman</strong>: Abbiamo parlato per due ore. Dobbiamo
            fare una pausa. Vuoi fare una pausa?
          </p>
          <p>
            Volodymyr Zelensky: Faremo una pausa. Possiamo prendere un caffè,
            giusto? Caffè.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Facciamolo. E danne un po’
            all’interprete, sta facendo fatica.
          </p>
          <p>Volodymyr Zelensky: Dell’acqua.</p>
          <p>
            <strong>Lex Fridman</strong>: Continuiamo a cambiare lingua.
          </p>
          <p>Volodymyr Zelensky: Come un drago. Tre teste, tre traduttori.</p>
          <p>
            <strong>Lex Fridman</strong>: Una delle decisioni difficili che hai
            dovuto prendere quando la guerra è iniziata è stata promulgare la
            legge marziale. Quando hai vinto la presidenza, eri il guerriero per
            la libertà. In effetti, questa guerra è per la libertà. La libertà
            dell’individuo, la libertà di parola, la libertà di religione, la
            libertà. Ma molte libertà hanno dovuto essere limitate, sacrificate
            in questa lotta perché c’è così tanta attenzione sulla guerra. Vedi
            questa tensione? Senti la tensione di quel sacrificio che è stato
            fatto nella democrazia, nella libertà, nel combattere questa guerra?
          </p>
          <p>
            Volodymyr Zelensky: In ogni caso, questa guerra è per la nostra
            libertà. Parlando in generale. Ad essere onesti, quando lo capisci,
            col passare del tempo, quando la guerra se ne va, capisci che i tuoi
            valori principali sono a casa. Questa è la tua casa, i tuoi figli,
            il tuo amore, e se Dio lo permette, i tuoi genitori sono vivi e, se
            non sono vivi, allora la loro memoria, visitare la loro tomba,
            scegliere come lavorare, quanto, preferibilmente scegliere dove
            lavorare. Tutto questo è libertà. Le libertà non sono solo un
            desiderio, sono un’opportunità. In ogni caso, hai ragione perché la
            guerra è una limitazione delle opportunità. In ogni caso, combatti
            per queste opportunità. I tuoi genitori e Dio ti hanno dato la vita,
            giusto? Combatti per la tua vita. La tua vita. Ma dobbiamo capire
            che prima viene la guerra. E poi…
          </p>
          <p>
            Dobbiamo capire che prima c’è la guerra e poi viene introdotta la
            legge marziale. La legge marziale non è introdotta perché qualcuno
            lo voleva. Tu dici, questo non è Pinochet, questo non è Pinochet, e
            così via. Questa è una storia completamente diversa. Un aggressore è
            arrivato e, secondo la tua legislazione, se il confine è violato, se
            c’è un’aggressione armata, tutto questo è scritto da tempo, scritto
            nella legislazione, introduci la legge marziale e l’introduzione
            della legge marziale ovunque e in qualsiasi momento significa, in
            ogni caso, una restrizione delle opportunità. Se le opportunità sono
            limitate, diritti e libertà sono limitati. Pertanto, la guerra
            stessa limita diritti e libertà. Sì, e non puoi farci nulla.
            Cerchiamo, onestamente, di bilanciare il più possibile. Credo che il
            settore imprenditoriale funzioni nonostante le difficoltà della
            guerra, e facciamo tutto il possibile, da qualche parte, per ridurre
            il carico. Sfortunatamente, non possiamo ridurre le tasse.
          </p>
          <p>
            Al contrario, la tassa militare viene utilizzata per la guerra. Devi
            trovare i soldi da qualche parte. Questo, a proposito, riguarda il
            fatto che gli Stati Uniti ci hanno dato molto, così come l’Europa,
            ma rispetto a quanto ci serviva per la guerra, questo non è tutto.
            Per quanto riguarda gli stipendi militari, sai che non potevamo
            pagare gli stipendi di un esercito di un milione di soldati. Non
            potevamo pagarli usando i soldi dei nostri partner. Sono tutte
            spese. Sono tutti i soldi che il paese e la popolazione hanno
            accumulato. Non puoi farci nulla. Voglio davvero ridurre le tasse.
            Te lo dico francamente, lo voglio davvero.
          </p>
          <p>
            Beh, penso che tutto il nuovo sistema fiscale, la nuova
            deregolamentazione, i nuovi passi, le nuove riforme, tutto questo
            sarà dopo la guerra. Anche se c’è qualcosa di cui vantarsi, questo è
            evidente. Ed è documentato... In quanto se vuoi ottenere la
            candidatura per l’Unione Europea, devi implementare il numero
            appropriato di riforme. Noi facciamo tutto. Durante la guerra,
            abbiamo votato per molte riforme, comprese quelle anticorruzione,
            riforme bancarie, riforme agrarie, grandi riforme. Abbiamo avviato
            una grande privatizzazione e la guerra non ci ha fermati. Sì, ci ha
            rallentati, ma abbiamo superato molte cose.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Quando pensi che si terranno le
            elezioni? Perché, per chi non lo sapesse, come parte della legge
            marziale, le elezioni sono state sospese e rinviate più volte. Penso
            che il prossimo piano sia per febbraio 2025, ma quando pensi che ci
            saranno le elezioni presidenziali in Ucraina?
          </p>
          <p>
            Volodymyr Zelensky: Le elezioni sono state posticipate una volta
            sola. Non sono state rimandate più volte, per essere chiari. Le
            elezioni non si sono svolte nel 2024, quell’anno. Prima di tutto,
            dobbiamo capire la costituzione. Erano programmate per la primavera
            del 2024. A causa della legge marziale, secondo la costituzione, non
            puoi farlo. Queste sono le elezioni presidenziali. Le elezioni
            parlamentari non si sono svolte nell’autunno del 2024, sempre
            secondo la costituzione. Sì, ci sono questioni di sicurezza, c’è la
            costituzione, ma ci sono anche questioni di sicurezza. Cioè, tutti
            in Ucraina capiscono che non è possibile farlo fino a quando la
            guerra non sarà finita o fino a quando la legislazione non sarà
            modificata.
          </p>
          <p>
            Credo che le elezioni si svolgeranno immediatamente dopo la fine
            della legge marziale. Questo è conforme alla legge, oppure i membri
            del parlamento dovranno riunirsi e modificare la legislazione, il
            che sarà molto difficile da fare perché la società è contraria.
            Perché la società è contraria? È comprensibile. Perché vogliamo
            elezioni di cui ci fidiamo. 8,5 milioni di persone sono andate
            all’estero. Deve essere creata un’infrastruttura per permettere a
            questi milioni di persone di votare. Milioni di persone si trovano
            nei territori occupati. Non sto nemmeno parlando dell’occupazione
            del 2014. Sto parlando dell’occupazione attuale. Cosa fare con
            queste persone? Questa è una questione difficile.
          </p>
          <p>
            E una delle questioni più ingiuste è come votare senza un milione di
            soldati [impegnati al fronte]. È impossibile.
          </p>
          <p>
            Dobbiamo pensare a come cambiare il sistema se le elezioni si
            tengono durante la guerra, cambiare la legislazione, il che dovrebbe
            includere modifiche al sistema di voto, pensare al voto online.
            Tutti hanno paura a causa di certi attacchi, come attacchi
            informatici e simili, ma dobbiamo pensarci. Credo davvero che sia
            possibile che possiamo finire la guerra nel 2025.
          </p>
          <p>
            <strong>Lex Fridman</strong>: A gennaio?
          </p>
          <p>
            Volodymyr Zelensky: Lo abbiamo già concordato. Mi piacerebbe
            moltissimo. Mi piacerebbe moltissimo…
          </p>
          <p>
            <strong>Lex Fridman</strong>: Dopo la guerra?
          </p>
          <p>
            Volodymyr Zelensky: E immediatamente. Sì, immediatamente. Nell’anno
            in cui finisce la guerra. È un dato di fatto. Perché? Perché quando
            la legge marziale finisce, si può immediatamente votare in
            parlamento per tenere le elezioni e poi tutti voteranno perché non
            ci sono misure restrittive. E dopo che avranno votato, penso che le
            elezioni possano tenersi entro 90 giorni, qualcosa del genere. Sì. E
            questo significa che immediatamente dopo la fine della guerra, le
            elezioni possono tenersi entro 90 giorni.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Ti ricandiderai?
          </p>
          <p>
            Volodymyr Zelensky: Nemmeno io lo so, davvero. Non lo so. Non lo so.
            È una questione molto difficile. Dipende da come finirà questa
            guerra. Dipende da ciò che la gente vorrà. Principalmente, dipende
            dalle persone, prima di tutto, e ovviamente dalla mia famiglia. Non
            abbiamo avuto tempo di parlarne con la mia famiglia e ovviamente non
            abbiamo avuto l’occasione, perché non ci pensiamo ora. Voglio dire,
            è qualcosa… Ci sono molte, alcune, non molte, ma abbastanza voci in
            Ucraina da parte di politici, l’opposizione e così via, su questo,
            immagino. Ma non ci pensiamo seriamente. Non ne abbiamo parlato
            seriamente con la mia famiglia. Quindi, questa è la guerra. Voglio
            dire, come si può pensare a cosa succederà dopo? È molto difficile,
            davvero molto difficile.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Se osserviamo i possibili candidati,
            forse puoi dare la tua opinione sulle idee che vedi là fuori,
            inclusa la tua, sul futuro dell’Ucraina. Da ciò che ho capito, i
            candidati includono Poroshenko, Zaluzhnyi, Arestovych, Budanov,
            Klitschko, e molti altri. Questo è ciò che l’internet mi dice. Quali
            pensi che siano le idee che rappresentano tali candidati?
          </p>
          <p>
            Volodymyr Zelensky: Penso che il numero di candidati potrebbe essere
            ancora maggiore. Sì, davvero non so cosa accadrà. Hanno il diritto
            di partecipare, se lo desiderano. Sì, se lo vogliono davvero, e
            possono, possono farlo e fare ciò che vogliono, onestamente. La cosa
            più importante è ciò che stanno facendo ora. Penso che tutte queste
            persone siano famose in Ucraina ed è importante per loro fare tutto
            il possibile oggi, non iniziare alcuna campagna elettorale. Penso
            che ciò possa dividere il nostro popolo, avere elezioni durante la
            guerra. Voglio dire, fare passi in questa direzione, parlare molto
            delle elezioni, creare un gran caos su questo. Penso che non sia
            giusto. Ecco perché non sono d’accordo con alcune di queste persone.
            Ma possono farlo, e penso che possano e forse alcuni di loro lo
            faranno. Ed è normale. È molto normale. Il nostro sistema è diverso
            da quello degli Stati Uniti. Voi avete due partiti e i partiti
            decidono chi sarà il leader. E in Ucraina, chiunque può partecipare.
            Lasciate che lo facciano.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Pensi che vinceresti il dibattito? Tu
            contro Zaluzhnyi, Poroshenko o Arestovych, e se decidi di
            candidarti, pensi di poter vincere il dibattito, o sei ancora
            concentrato sulla guerra e tutti dovrebbero concentrarsi…
          </p>
          <p>
            Volodymyr Zelensky: Oh, sono davvero concentrato sulla guerra e…
          </p>
          <p>
            <strong>Lex Fridman</strong>: Capisco.
          </p>
          <p>
            Volodymyr Zelensky: … penso che il dibattito più difficile sia su
            ciò che verrà portato sul tavolo, e ne abbiamo parlato. Sarà durante
            la guerra, su come finirla. Penso che sia il mio obiettivo, perché
            sarà uno dei dibattiti più complicati, e per qualsiasi presidente
            che si trova in guerra, ovviamente. Ma penso che sia il mio
            obiettivo vincere quei dibattiti, e le altre cose non sono per oggi.
          </p>
          <h1 id="corruzione" className={styles.header}>Corruzione</h1>
          <p>
            <strong>Lex Fridman</strong>: Come ho detto, il sogno che ho è che
            questa sia un’opportunità storica per fare pace, per creare una pace
            duratura presto. Quindi sono contento che tu sia concentrato su
            questo. Lasciami fare una domanda che molte persone negli Stati
            Uniti si pongono, e a me importa molto del futuro dell’Ucraina, la
            corruzione.
          </p>
          <p>
            Questo è qualcosa a cui tieni molto da tempo. Hai vinto la
            presidenza nel 2019, in gran parte grazie al tuo messaggio di lotta
            alla corruzione. Ma ci sono molte accuse che, durante la guerra, ho
            menzionato i 9 trilioni di dollari negli Stati Uniti, la guerra
            genera corruzione. Puoi parlarne, di come hai combattuto la
            corruzione, e puoi rispondere alle accuse che ci sia stata
            corruzione in Ucraina?
          </p>
          <p>
            Volodymyr Zelensky: È molto semplice. Prima di tutto, abbiamo
            davvero un sistema anticorruzione molto sofisticato. Sofisticato non
            nel senso che sia difficile da capire, ma nel senso che consiste
            davvero di molti elementi. È il sistema più sofisticato in tutta
            Europa. Questo è un altro requisito dell’Unione Europea. Era un
            requisito per l’Ucraina, e per molti anni l’Ucraina non è stata
            considerata affidabile. Voglio dirti che sotto la mia presidenza,
            abbiamo votato per tutte le leggi, tutte le riforme anticorruzione,
            beh, quasi tutte le riforme, e tutti gli organismi anticorruzione
            oggi sono indipendenti. Funzianano nel modo richiesto. Credo ancora
            che non siano perfetti. Ci sono molti problemi. C’è un sistema
            giudiziario, ma anche una riforma giudiziaria che i nostri partner,
            gli Stati Uniti e l’UE, ci hanno richiesto. Tutto questo è scritto
            in leggi specifiche, in decreti specifici, in decisioni specifiche.
            L’abbiamo fatto, abbiamo completato il 99% di questo.
          </p>
          <p>
            Se qualcosa non è stato fatto, significa che è in corso. Ma in linea
            di principio, tutto questo esiste e non c’è un sistema come il
            nostro in Europa. Dire che non abbiamo corruzione sarebbe mentire.
            Ne parliamo semplicemente apertamente. Stiamo combattendo
            genuinamente contro di essa. Guarda, abbiamo in prigione Ihor
            Kolomoyskyi, che è l’oligarca ucraino più influente dai tempi
            dell’indipendenza, e nessuno poteva fare nulla contro di lui.
          </p>
          <p>
            Gli Stati Uniti d’America volevano Kolomoyskyi e hanno fatto grandi
            sforzi per questioni di riciclaggio di denaro, ecc. Ci sono casi
            penali negli Stati Uniti, penso nel Delaware o qualcosa del genere.
            Nemmeno l’Europa ha potuto fare qualcosa contro di lui. Cioè,
            abbiamo fatto molto con gli oligarchi. Gli oligarchi russi sono
            stati sanzionati, sono stati cacciati. Alcuni di loro sono fuggiti
            dallo Stato, ma sono tutti sotto sanzioni. Ne abbiamo scambiati
            alcuni per i nostri soldati, come Medvedchuk, di cui Putin è padrino
            della figlia.
          </p>
          <p>
            Cioè, abbiamo combattuto contro gli oligarchi più influenti, che
            sono e sono stati in Ucraina, e abbiamo eliminato molta corruzione.
            Naturalmente, la corruzione esiste nella vita quotidiana. Esiste. Ma
            a livello istituzionale, sono sicuro che l’Ucraina supererà tutto
            questo. Ci vuole un po’ di tempo.
          </p>
          <p>
            Direi onestamente, ascolta, quello che chiamiamo corruzione in
            alcuni stati del mondo si chiama lobbismo, ma questo non significa
            che lì non ci sia corruzione.
          </p>
          <p>
            Parliamo degli aiuti che hai menzionato durante la guerra. Prima di
            tutto, non abbiamo soldi. Non abbiamo soldi eccetto per la guerra.
            Abbiamo ricevuto armi dagli Stati Uniti d’America, dall’Europa. Se
            prendiamo ad esempio i fondi degli Stati Uniti d’America durante
            tutto questo periodo di guerra, sono stati decisi o approvati circa
            177 miliardi. Diciamolo onestamente, non abbiamo ricevuto nemmeno la
            metà di questi fondi.
          </p>
          <p>
            Il secondo punto, che è molto importante, solo come esempio, è
            corruzione? La prima domanda, di chi è la corruzione? Questo è il
            secondo. Ecco un piccolo esempio per te. Quando gli Stati Uniti
            hanno iniziato a trasferire armi americane, era denaro americano, ma
            armi americane, soldi per queste armi. Come presidente, avevo aerei
            cargo, non in Ucraina. A causa della guerra, li abbiamo spostati
            molto rapidamente in Europa. Abbiamo aerei cargo. Abbiamo una buona
            flotta cargo, molto buona, grazie ad Antonov. Quindi ho chiesto alla
            parte americana di concedermi l’opportunità, perché i nostri aerei
            si trovavano in un altro aeroporto, e ho chiesto all’America di
            darmi l’opportunità di usare i nostri aerei per il trasferimento,
            per non pagare molto. A chi? Alle vostre aziende, alle aziende
            americane. No, non ho ottenuto questa opportunità. I miei aerei sono
            rimasti fermi e gli aerei cargo degli Stati Uniti hanno trasferito
            queste armi. Ma ovunque devi spendere soldi, così potremmo ottenere
            più armi, ma dobbiamo pagare per questa flotta molto costosa.
          </p>
          <p>
            La mia domanda è, questa è corruzione o no? O è lobbismo? Cos’è?
          </p>
          <p>
            <strong>Lex Fridman</strong>: Intendi corruzione da parte delle
            aziende statunitensi?
          </p>
          <p>Volodymyr Zelensky: Sì. Prendere tali decisioni.</p>
          <p>
            <strong>Lex Fridman</strong>: Sì, ho capito.
          </p>
          <p>
            Volodymyr Zelensky: Il lobbismo per tali decisioni coinvolge alcune
            aziende che prendono queste decisioni, ma non posso essere troppo
            aperto al riguardo e non potevo parlarne pubblicamente. Non volevo
            né intendevo causare scandali, perché altrimenti si rischia di
            congelare il supporto, e basta.
          </p>
          <p>
            Ed è per questo che, quando parliamo di corruzione, dobbiamo
            chiederci chi è coinvolto. Se avevamo 177 [miliardi di aiuti
            promessi] e ne abbiamo ricevuti la metà, dov’è l’altra metà? Se
            trovi la seconda metà, trovi la corruzione.
          </p>
          <p>
            <strong>Lex Fridman</strong>: C’è una percezione di corruzione.
            Persone come Donald Trump ed Elon Musk tengono molto alla lotta
            contro la corruzione. Cosa puoi dire loro per ottenere la loro
            fiducia e dimostrare che i fondi sono utilizzati per questa lotta
            per la libertà, per lo sforzo bellico?
          </p>
          <p>
            <strong>Volodymyr Zelenskyy</strong>: Nella maggior parte dei casi,
            non abbiamo ricevuto soldi, abbiamo ricevuto armi. E dove abbiamo
            notato rischi che qualcosa potesse accadere con le armi, abbiamo
            agito duramente con tutti. E credimi, qui non si tratta solamente
            dell’Ucraina. Dappertutto nella catena di approviggionamento, ci
            sono alcune persone e compagnie che vogliono far soldi, cercano di
            lucrare sulla Guerra. Se abbiamo beccato qualcuno, credimi, lo
            abbiamo punito duramente, e lo abbiamo fatto, e continueremo a
            farlo, perché fino ad oggi, quando qualcuno dice che “L’Ucraina ha
            venduto le armi” - e a proposito, è la Russia a spingere questa
            narrativa - abbiamo sempre risposto: “I nostri soldati ucciderebbero
            tali persone con le proprie mani senza un processo”.
          </p>
          <p>
            Puoi veramente pensare che qualcuno possa rubare una camionata
            d’armi quando non ne abbiamo abbastanza al fronte e dobbiamo
            comunque fornire prove per difenderci? Perché quando c’è abbondanza
            di tali disinformazioni, inizia a crescere la sfiducia. E hai
            ragione, la gente si informa tramite vari mezzi di comunicazione,
            vedono questo e perdone fiducia in te. Alla fine, perdi la fiducia e
            con essa il sostegno. Quindi, credimi, combattiamo più contro la
            disinformazione che contro casi specifici, ma sottolineo nuovamente
            che a livello quotidiano, tali cose sono comunque importanti. Noi
            catturiamo tali persone e le combattiamo.
          </p>
          <h1 id="elon" className={styles.header}>Elon Musk</h1>
          <p>
            <strong>Lex Fridman</strong>: Ho menzionato Elon Musk. Mi piacerebbe
            sapere cosa pensi di lui, perché lo rispetti come persona, come
            ingegnere, come innovatore, come imprenditore. Vorrei semplicemente
            sapere da te, cosa pensi di Elon Musk?
          </p>
          <p>
            Volodymyr Zelensky: Prima di tutto, ho avuto una conversazione con
            lui all’inizio della guerra. Ho parlato con lui. Lo rispetto, prima
            di tutto. Rispetto l’uomo che si è fatto da solo, giusto?
          </p>
          <p>
            <strong>Lex Fridman</strong>: Sì.
          </p>
          <p>
            Volodymyr Zelensky: In inglese, amo persone come lui. Nessuno e
            niente è caduto loro in grembo. Ma quest’uomo ha fatto qualcosa, ha
            fatto tutto da solo. Io ho lavorato da solo, ho creato una grande
            società di produzione e so cosa significa fare soldi, selezionare
            persone talentuose, trasmettere loro conoscenze, investire denaro e
            creare qualcosa, qualcosa di importante per alcune persone. E non mi
            sto paragonando a Musk, lui semplicemente... beh, quest’uomo è un
            grande leader dell’innovazione nel mondo.
          </p>
          <p>
            E credo che persone come lui facciano avanzare il mondo. Perciò
            rispetto il risultato del suo lavoro. E vediamo questo risultato. E
            per me, è sempre stato importante che il tuo risultato possa essere
            utilizzato. Che non siano solo parole, ma fatti.
          </p>
          <p>
            Prendiamo la guerra. Siamo molto grati per Starlink. Ci ha aiutato.
            Lo abbiamo usato dopo gli attacchi missilistici russi contro le
            infrastrutture energetiche. C’erano problemi con internet, eccetera,
            con le connessioni. Abbiamo usato Starlink sia al fronte che negli
            asili. È stato usato nelle scuole, ha aiutato i bambini. Lo abbiamo
            usato in varie infrastrutture ed è stato di grande aiuto. E mi
            piacerebbe molto che Elon fosse dalla nostra parte il più possibile,
            per supportarci. E sì, gli sono grato per Starlink. Davvero, lo
            sono. Prima di tutto, per il fatto che i nostri ragazzi abbiano una
            connessione, e anche i bambini. E gliene sono davvero grato. Penso
            che mi piacerebbe che venisse in Ucraina, per parlare con le persone
            qui, per guardarsi intorno e così via.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Elon ha mai visitato Kyiv o l’Ucraina?
          </p>
          <p>Volodymyr Zelensky: No.</p>
          <p>
            <strong>Lex Fridman</strong>: Spero che l’aeroporto di Kyiv riapra
            presto, così sarà più facile volare qui.
          </p>
          <p>
            Volodymyr Zelensky: Sì, non vedo l’ora. Forse lo apriremo, ma solo,
            e devi capire, se la guerra sarà finita, ci deve essere una pace
            sostenibile e sistemi di difesa aerea, ad essere onesti. E dobbiamo
            garantire che siano duraturi ed efficaci.
          </p>
          <p>
            Prendiamo l’aeroporto, per esempio, e concentriamoci sull’aeroporto
            di Dresden, che sta gestendo molto bene il carico importante per
            l’Ucraina in Polonia. E ci sono sistemi Patriot lì perché tutti
            capiscono qual è il rischio. Bene, la Russia è un rischio e quindi
            abbiamo bisogno di sistemi di difesa aerea.
          </p>
          <p>
            Volodymyr Zelensky: E oggi, prendiamo per esempio il sistema di
            difesa aerea di una città o di un’altra che è sotto attacco e lo
            spostiamo, lo spostiamo all’aeroporto. Bene, sarebbe disonesto. Le
            persone sono più importanti degli aerei. Ma arriverà il momento, e
            Trump, tra l’altro, penso che la guerra finirà, e il Presidente
            Trump potrebbe essere il primo leader a viaggiare qui in aereo.
            Penso che sarebbe simbolico, in aereo.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Ancora, il 25 gennaio, più o meno in
            quella data. Giusto? Volare, incontrare l’Air Force One.
          </p>
          <p>Volodymyr Zelensky: Sarebbe fantastico.</p>
          <p>
            <strong>Lex Fridman</strong>: Elon Musk. Ti incontrerò anch’io lì
            per la seconda volta sull’aereo.
          </p>
          <p>Volodymyr Zelensky: Con piacere.</p>
          <h1 id="inaugurazione" className={styles.header}>
            Inaugurazione di Trump il 20 gennaio
          </h1>
          <p>
            <strong>Lex Fridman</strong>: E tu, a proposito, prima che mi
            dimentichi, lascia che ti chieda: verrai il 20 gennaio per
            l’inaugurazione del Presidente Trump?
          </p>
          <p>
            Volodymyr Zelensky: Mi piacerebbe, ovviamente. Valuterò cosa sta
            succedendo in quel momento con la guerra, perché ci sono momenti di
            difficoltà, escalation, molti missili, ecc. Ma onestamente, beh, non
            posso. Non posso venire, specialmente durante la guerra, a meno che
            il Presidente Trump non mi inviti personalmente. Non sono sicuro che
            sia appropriato venire perché so che, in generale, i leader per
            qualche ragione di solito non vengono invitati all’inaugurazione dei
            presidenti degli Stati Uniti d’America. Beh, e so che ci sono leader
            che possono semplicemente venire, vogliono venire e verranno. Sì, lo
            so. E conosco il temperamento di alcune di queste persone. Possono
            venire a loro discrezione. Questo è molto, molto difficile per me.
            Io sono una persona che non può venire senza un invito. Questo è
            Putin. Noi non l’abbiamo invitato. È venuto da noi, per così dire. E
            io, non posso farlo.
          </p>
          <p>
            <strong>Lex Fridman</strong>: No, ma ha detto pubblicamente che
            sarebbe fantastico se tu venissi all’inaugurazione, o intendi che ti
            ha invitato ufficialmente?
          </p>
          <p>
            Volodymyr Zelensky: No, aspetta. Guarda, guarda, guarda. Ascolta,
            sono contro qualsiasi burocrazia. Me ne libero il più possibile. Ma
            beh, ci sono alcune complessità legate alla sicurezza. Decido e
            volo, e gli Stati Uniti d’America forniscono ufficialmente la
            sicurezza. Non che io ne abbia bisogno, intendiamoci. Non chiedo
            elicotteri che volino intorno per proteggermi, ma semplicemente lo
            faranno da soli. Il servizio di sicurezza stesso. Devono farlo. Io
            non lo voglio, e a volte non ne ho bisogno. E chiedo loro di non
            farlo.
          </p>
          <p>
            Era, ad esempio, prima della guerra, penso, sì, era prima della
            guerra. Ho avuto un incontro, sì, con il Presidente Trump. Era nel
            2019. Volevo solo fare una corsa al mattino presto perché volevo
            davvero fare esercizio. E loro, quei bodyguard alti, tanti di loro,
            hanno deciso di unirsi a me, ma non potevo davvero farlo perché
            erano in giacca e cravatta e io in abbigliamento sportivo. Ho detto,
            no, non posso. È sempre divertente. Non voglio disturbare nessuno e
            causare problemi a qualcuno per colpa mia. Ecco perché, se mi
            inviterà, verrò.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Pensavo ti avesse invitato.
          </p>
          <p>Volodymyr Zelensky: Sì?</p>
          <p>
            <strong>Lex Fridman</strong>: Sì. Pensavo ti avesse invitato
            pubblicamente. Ma va bene, spero di vederti lì.
          </p>
          <p>
            Volodymyr Zelensky: Penso che dovessero prendere alcuni dei loro
            provvedimenti. Non lo so, ma…
          </p>
          <p>
            <strong>Lex Fridman</strong>: Procedure, sì. Mancava il timbro.
          </p>
          <p>
            Volodymyr Zelensky: Ma con piacere, con mia moglie, ovviamente. E
            penso che sia importante. È importante.
          </p>
          <h1 id="dinamiche" className={styles.header}>Dinamiche di potere in Ucraina</h1>
          <p>
            <strong>Lex Fridman</strong>: Va bene, torniamo a una domanda seria.
            A volte si dice in America, questa domanda su chi è veramente al
            potere? Quindi lascia che ti chieda, c’è qualcuno che ti controlla?
            Ad esempio, oligarchi, politici americani, Yermak? Volevo parlarne
            perché sono stato qui in Ucraina due volte dall’invasione del 2022.
            E una delle cose che ho imparato bene è che in realtà nessuno ti
            controlla. E questo è una dei tuoi punti di forza come presidente,
            come persona che oligarchi e altre persone ricche e potenti non
            possono controllare. Puoi spiegare perché è così? Cosa ne pensi?
          </p>
          <p>
            Volodymyr Zelensky: Penso, ed è davvero così, che io sia
            generalmente difficile avere a che far con me. Sono una persona
            ambiziosa. Non posso sottomettermi a nessuno. Posso vivere seguendo
            le regole e le leggi. Credo che questa sia l’unica cosa che oggi può
            controllare una persona. Queste sono le regole e le leggi della
            società o dello stato in cui vivi.
          </p>
          <p>
            E credo che questa sia la cosa più importante. Non c’è nessuno che
            possa controllarmi, come ho detto una volta al Presidente Trump
            durante un incontro. Tra l’altro, i giornalisti hanno chiesto se
            Trump avesse avuto un’influenza su di me durante la telefonata.
            Dissi allora la verità al giornalista, chi può influenzarmi? Solo il
            mio bambino, mio figlio. Questo è un fatto. Quando mi chiama
            chiedendo qualcosa, beh, allora alzo le mani, sì, e non posso farci
            niente perché i bambini sono bambini. Ho così poco tempo con loro. E
            quindi quando ci sono questi momenti, sono preziosi e importanti per
            me. Sono pronto a fare qualsiasi cosa. Inoltre, probabilmente i miei
            genitori, sono un’autorità per me. Al di là di questo, lo vedo più
            come un sistema. Nessuno può controllare il presidente. Perciò
            abbiamo oligarchi che sono fuggiti o sono in prigione perché gli
            oligarchi di solito controllano i flussi di denaro, le persone e
            influenzano la politica.
          </p>
          <p>
            E abbiamo esempi concreti con sentenze. Non sono solo agli arresti
            domiciliari. Non solo ci sono state delle sentenze in base alle
            quali i loro beni sono stati congelati o sono state imposte
            sanzioni. Ci sono persone specifiche che sono dietro le sbarre.
            Penso che questa sia la risposta riguardo l’influenza. Vorrebbero
            influenzarmi nello stesso modo in cui influenzano qualsiasi
            presidente dell’Ucraina perché finanza e flussi di denaro
            influenzano sempre la politica? Beh, almeno vorrebbero provarci.
            Questo è riguardo l’influenza e altre persone nella struttura
            verticale, svolgono compiti come miei gestori. Andrii, che hai
            menzionato, è uno di questi gestori. Bene, sono felice di avere
            persone così. Probabilmente non c’è altro da aggiungere qui.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Dirò solo che il tuo team, con cui ho
            parlato, è una squadra eccellente. Persone eccellenti.
          </p>
          <p>Volodymyr Zelensky: Grazie.</p>
          <h1 className={styles.header}>Il futuro dell’Ucraina</h1>
          <p>
            <strong>Lex Fridman</strong>: Bene, un’ultima domanda. Il futuro
            dell’Ucraina. Guardando avanti di 5, 10, 20 anni, cosa può aiutare
            l’Ucraina a prosperare economicamente, culturalmente e politicamente
            in futuro?
          </p>
          <p>
            Volodymyr Zelensky: La digitalizzazione, è molto importante. La
            digitalizzazione di tutti i processi. Abbiamo iniziato questo
            lavoro. Abbiamo un ministero speciale per la trasformazione
            digitale.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Davvero?
          </p>
          <p>
            Volodymyr Zelensky: Sì. Questa è una cosa molto positiva. E abbiamo
            anche il nostro Diia. Questo è il nome per tutti questi servizi.
            Penso che sia la cosa più importante. Questo non è solo un vantaggio
            pratico, ma eliminerà qualsiasi possibilità di corruzione futura
            perché non ci sono connessioni personali con persone nel governo o
            altrove. Sei semplicemente sul tuo telefono o su un altro
            dispositivo. E basta.
          </p>
          <p>
            E penso che stiamo andando molto bene. Siamo i migliori in Europa.
            Tutta l’Europa lo riconosce. Alcuni paesi dell’Unione Africana ci
            hanno chiesto di fornire lo stesso servizio, e lo faremo subito dopo
            la guerra. Penso che potremo portare denaro in Ucraina anche da
            questo.
          </p>
          <p>
            Inoltre, penso che abbiamo bisogno anche, necessitiamo di una
            riforma fiscale. Penso che sarà molto importante che le imprese
            ritornino qui.
          </p>
          <p>
            Credo che arriverà molto supporto, dagli investimenti delle imprese
            statunitensi, non come aiuti diretti a noi, ma al settore privato e
            per le risorse. L’ho detto al Presidente Trump e ad alcuni leader
            europei che sono nostri partner strategici chiave, e saremo felici,
            specialmente con gli americani, di firmare questi contratti e
            impegnarci in investimenti congiunti in molte aree.
          </p>
          <p>
            Penso che potremo sviluppare il settore energetico del petrolio,
            gas, dell’energia verde, dell’energia solare. Abbiamo già le
            risorse. Possiamo investire soldi su queste cose. Abbiamo riserve
            petrolifere nel Mar Nero che possiamo sfruttare, e abbiamo bisogno
            delle vostre competenze e investimenti delle vostre aziende.
          </p>
          <p>
            Abbiamo riserve di oro e uranio, le più grandi in Europa tra
            l’altro, e anche questo è molto importante. Ad esempio, la Russia ha
            spinto la Francia fuori dall’Africa, e loro hanno urgentemente
            bisogno di uranio, che noi possediamo.
          </p>
          <p>
            Siamo pronti ad aprirci agli investimenti e questo ci darà
            ovviamente opportunità, posti di lavoro per le persone, introiti.
            Non voglio manodopera a basso costo, onestamente. Quello che
            desidero veramente, specialmente dopo la guerra, è aprire le porte a
            quelle persone…
          </p>
          <p>
            Quello che desidero veramente, specialmente dopo la guerra, è aprire
            le porte a quelle persone che possono davvero contribuire e
            guadagnare.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Sì, e dare una ragione alle otto
            milioni di persone [che hanno lasciato l’Ucraina da Febbraio 2022]
            per tornare.
          </p>
          <p>
            Volodymyr Zelensky: Sì, è molto importante. E torneranno, ci
            riprenderemo, ricostruiremo e faremo rinascere l’Ucraina. Saremo
            molto disponibili verso le aziende e, ovviamente, accoglieremo il
            ritorno del nostro popolo. È importante dal punto di vista
            culturale.
          </p>
          <p>
            Penso che la cosa più importante sia rimanere aperti e non cambiare
            la nostra direzione perché allinearsi culturalmente con la Russia, è
            un'idea, mentre allinearsi con l'Europa è un'altra. La nostra gente
            ha scelto l'Europa. È la loro scelta, è la nostra scelta, la scelta
            della nostra nazione, e penso che sia molto importante.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Ma prima devi porre fine alla guerra.
          </p>
          <p>
            Volodymyr Zelensky: Sì, hai ragione. E lo faremo. Vogliamo la pace.
            Solo per essere chiari, vogliamo la pace. Come dico sempre, devi
            venire in Ucraina e vedere di persona. E la gente ti dirà: “No, non
            possiamo perdonare quegli assassini che ci hanno tolto la vita, ma
            vogliamo comunque fare pace.”
          </p>
          <p>
            E onestamente, penso che il più alto livello di approvazione del
            presidente degli Stati Uniti, di Trump ora, arriverà dal modo in cui
            gestisce la situazione in Ucraina. La gente crede davvero che lui
            possa aiutare a portare la pace. Ora hanno fiducia, fiducia che
            possa farcela, che possa sostenere l'Ucraina, fermare Putin e
            assicurarsi che quest’ultimo non ottenga tutto ciò che vuole. Questo
            è molto importante, ed è per questo che crediamo di non dover
            perdere questa opportunità.
          </p>
          <p>
            <strong>Lex Fridman</strong>: Spero che troviate il percorso verso
            la pace. Grazie.
          </p>
          <p>Volodymyr Zelensky: Grazie mille.</p>
          <p>
            <strong>Lex Fridman</strong>: Grazie per aver parlato oggi.
          </p>
          <p>Volodymyr Zelensky: Grazie per essere venuto.</p>
        </div>
      </div>
    </div>
  );
}
