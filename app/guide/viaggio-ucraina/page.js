import Image from "next/image";

import styles from "./page.module.css";

export const metadata = {
  title: "Viaggiare in Ucraina",
  description:
    "Guida completa e aggiornata su come viaggiare dall’Italia all’Ucraina nel 2025 durante il conflitto. Informazioni su sicurezza, documenti, treni, autobus e consigli pratici.",
};

export default function Viaggio() {
  return (
    <main className={styles.container}>
      <header>
        <h1 className={styles.title}>
          Guida: Come viaggiare dall’Italia all’Ucraina nel 2025
        </h1>
        <p className={styles.subtitle}>
          <em>
            Una guida aggiornata per chi ha necessità di viaggiare in Ucraina
            durante il conflitto
          </em>
        </p>
      </header>

      <article className={styles.content}>
        <section>
          <h2>Introduzione</h2>
          <p>
            Dal 24.02.2022 viaggiare in Ucraina è diventato molto più
            complicato. I voli diretti per Kyiv e altre città sono stati
            sospesi. Prima del conflitto, era possibile volare da Venezia,
            Milano, Napoli e Roma, con i voli della Ukraine International
            Airlines. Con €50-100, in circa due ore e mezza si arrivava nella
            capitale ucraina.
          </p>
          <p>
            Questa guida è pensata soprattutto per chi non ha la possibilità di
            viaggiare in auto. In rete si trovano poche informazioni aggiornate
            e strutturate, e spesso chi viaggia per la prima volta si affida al
            passaparola.
          </p>
          <p>
            La prima volta che sono partito dall’Ucraina verso l’Italia, ho
            percorso l’intera tratta in treno: da Kyiv a Przemysl, poi da
            Przemysl a Cracovia, da Cracovia a Vienna, e infine il treno
            notturno per Pordenone. Un viaggio durato 37 ore, faticoso e con
            qualche intoppo, perché non avevo idea di quali tappe scegliere o
            come organizzarmi. Con questa guida spero di rendere l’esperienza
            molto più semplice per chi parte oggi.
          </p>
        </section>

        <section>
          <h2>È sicuro viaggiare?</h2>
          <p>
            Viaggiare in Ucraina comporta rischi. Il Ministero degli Affari
            Esteri, attraverso il sito ViaggiareSicuri, afferma che "tutti i
            viaggi verso l’Ucraina, a qualsiasi titolo, sono assolutamente
            sconsigliati." Tuttavia, resta responsabilità dell’individuo
            valutare la necessità di recarsi nel Paese. Se il viaggio è legato a
            motivi professionali, è il datore di lavoro a doverne rispondere e
            ad assumersene la responsabilità. In caso di emergenza, si consiglia
            di chiamare l'Ambasciata italiana a Kyiv.
          </p>
          <p>
            La parte occidentale dell’Ucraina rimane relativamente più sicura,
            sebbene i droni ed i missili arrivino anche in quelle zone. Kyiv e
            l'Ucraina hanno recentemente (primavera ed estate 2025) subito più
            attacchi del solito. Questi attacchi, avvengono quasi ogni notte.
            Durante gli allarmi, è fortemente consigliato recarsi in un rifugio:
          </p>
          <p>
            <b>Stazioni della metropolitana</b>: non sempre sono vicine a dove
            si alloggia, e si trovano solo in tre città, Kyiv, Kharkiv e Dnipro.
            Quindi è importante informarsi prima di prenotare un alloggio;
          </p>
          <p>
            <b>Parcheggi sotterranei</b>;
          </p>
          <p>
            <b>Hotel con aree dedicate ai rifugi</b> (A Kyiv: Hotel Opera,
            Ramada Encore, Radisson Blu, per citarne alcuni);
          </p>

          <p>
            Fonti ufficiali da consultare:{" "}
            <a href="https://www.viaggiaresicuri.it" className={styles.link}>
              Viaggiare Sicuri
            </a>
            ,{" "}
            <a href="https://ambkiev.esteri.it" className={styles.link}>
              Ambasciata italiana a Kyiv
            </a>
          </p>
        </section>

        <section>
          <h2>Documenti necessari</h2>
          <ul>
            <li>Passaporto (valido per almeno 6 mesi);</li>
            <li>
              Se siete residenti in Ucraina, va mostrato anche il permesso di
              soggiorno. Il permesso rimane valido anche se scaduto, fino a 30
              giorni dopo la fine della legge marziale;
            </li>
            <li>
              Assicurazione di viaggio con copertura in zona di conflitto;
            </li>
            <li>
              Prova di fondi sufficienti(raramente richiesti, ma teoricamente
              previsti);
            </li>
          </ul>
        </section>

        <section>
          <h2>Alcuni percorsi possibili</h2>
          <p>
            Dall’Italia, è possibile volare verso la Polonia, ad esempio con
            Ryanair da Treviso (o altre città come Bergamo, Napoli, Roma) a
            Cracovia. Da lì, si può proseguire con:
          </p>

          <h3>1) Treno</h3>
          <p>
            Da Cracovia si prende un treno locale per Przemysl. Il viaggio dura
            circa tre ore, i biglietti sono acquistabili{" "}
            <a href="https://www.intercity.pl/en/" className={styles.link}>
              online
            </a>{" "}
            o direttamente in stazione. I{" "}
            <a href="https://booking.uz.gov.ua/en" className={styles.link}>
              biglietti dei treni ucraini
            </a>{" "}
            sono disponibili a partire da 20 giorni prima della data del
            viaggio, alle otto del mattino (9 in Italia). Consiglio di
            acquistarli con largo anticipo, possibilmente appena diventano
            disponibili, in quanto si esauriscono in fretta. Dall'app della
            "Ukrainian Railways" si possono prenotare biglietti anche dalle
            principali città europee, come Vienna, Budapest e Varsavia. Per
            acquistare questi biglietti è necessario essere registrati con l'app
            Diia, quindi solo i cittadini e residenti ucraini possono
            effettivamente comprarli. Ci sono anche tratte che partono dalla
            Moldavia.
          </p>
          <p>Se sceglierete di partire da Przemysl:</p>
          <ul>
            <li>
              Il binario dei treni diretti in Ucraina è separato rispetto a
              quelli nazioniali, ed accessibile attraverso un sottopasso. In
              ogni caso, ci sono tutte le indicazioni in stazione che vi
              dirigeranno al binario numero 4 (quello per i viaggi in Ucraina);
            </li>
            <li>
              La stazione di Przemysl non è attrezzata per persone con
              disabilità: non ci sono ascensori né rampe. Se avete bagagli
              pesanti, preparatevi a fare due serie di scale sollevandoli a
              mano, o potrete chiedere aiuto a qualche altro passeggero;
            </li>
            <li>
              Si formano code di 2-3 ore, all’aperto, prima del controllo
              passaporti;
            </li>
            <li>Il controllo passaporti lento: meglio arrivare in anticipo</li>
            <li>
              Dopo il confine polacco, il controllo passaporti ucraino avviene a
              bordo treno. Dovrete soltanto mostrare il vostro documento.
            </li>
          </ul>

          <p>
            L'Intercity da Przemysl a Kyiv si ferma nella principali città
            ucraine, come Leopoli (Lviv), Ternopil, Khmelnytskyi e Vinnytsia
          </p>
          <p>
            Da Przemysl, ci sono anche altri due Intercity disponibili, per
            Odesa e Kharkiv.
          </p>
          <p>
            Prezzi: circa €40 in seconda classe, €60 in prima. Prezzi di
            riferimento per l'intera tratta Przemysl-Kyiv.
          </p>
          <figure>
            <Image
              src="/images/przemysl.jpg"
              alt="Stazione dei treni di Przemysl"
              width={400}
              height={200}
              className={styles.figureImage}
            />
            <figcaption className={styles.figureCaption}>
              La stazione dei treni di Przemysl. Al di là della barriera, un
              treno delle ferrovie ucraine.
            </figcaption>
          </figure>

          <h3>2) Autobus</h3>
          <p>
            Da Przemysl, ma anche da Cracovia, si possono prendere dei bus, per
            esempio con Flixbus. Dal loro sito si possono ordinare i biglietti,
            che costano circa €50 a persona. Io, personalmente, evito gli
            autobus, in quanto sono il mezzo statisticamente più pericoloso per
            viaggiare. Basta fare una breve ricerca su Google "Ukraine bus
            accident" per vedere quanto spesso avvengono tali incidenti.
            Inoltre, i controlli del passaporto sono più veloci in treno, e c'è
            più spazio per le gambe, importante per i viaggiatori un po' più
            alti della media. Si possono prendere anche i bus direttamente
            dall'Italia e farsi tutta la tratta Italia-Ucraina in bus.
          </p>
        </section>

        <section>
          <h2>Esempio pratico: Aeroporto di Treviso → Kyiv</h2>

          <p>
            <strong>Giorno 1:</strong> Partenza dall'aeroporto di Treviso →
            Arrivo all'aeroporto di Cracovia. Da qui si può chiamare un taxi con
            app come Bolt, e dirigersi alla stazione dei treni centrale di
            Cracovia. Consiglio di passare la notte in hotel / appartamento /
            ostello, a Cracovia, oppure a Przemysl. È improbabile che riusciate
            a completare il viaggio in un giorno, considerando che l'ultimo
            treno diretto da Przemysl a Kyiv è alle 23 circa.
          </p>
          <p>
            <strong>Giorno 2:</strong> Cracovia → Przemysl (treno). Attesa in
            stazione a Przemysl e poi treno per Kyiv. Bisogna mettersi in coda
            all'esterno una o due ore prima della partenza. Dopo il controllo
            passaporti, potrete raggiungere il binario 4.
          </p>
        </section>

        <section>
          <h2>Prezzi indicativi</h2>
          <table>
            <thead>
              <tr>
                <th>Tratta</th>
                <th>Mezzo</th>
                <th>Prezzo (€)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Treviso → Cracovia</td>
                <td>Aereo (Ryanair)</td>
                <td>
                  €15–€75 (Dipende se si viaggia con o senza bagaglio, se si
                  sceglie il posto a sedere ed altre opzioni a pagamento)
                </td>
              </tr>
              <tr>
                <td>Cracovia → Przemysl</td>
                <td>Treno</td>
                <td>€15-€20</td>
              </tr>
              <tr>
                <td>Przemysl → Kyiv</td>
                <td>Treno Intercity</td>
                <td>€40 (2ª classe / €60 (1ª classe)</td>
              </tr>
            </tbody>
          </table>
          <p>
            Il prezzo per un viaggio in aereo + treno può variare dai €70 ai
            €150 a persona (solo andata), più il prezzo di un eventuale
            alloggio.
          </p>
          <p>
            Un viaggio con Flixbus, da Milano a Kyiv, varia dai €140 ai €190, ci
            sono diversi cambi ed in totale il viaggio dura sulle 40 ore.
          </p>
          <p>
            Con altre compagnie private, come Al-Trans, ci sono viaggi diretti
            senza cambi da varie città italiane. Si possono anche trovare
            informazioni di autobus e minibus nei vari gruppi Facebook.
          </p>
        </section>

        <section>
          <h2>Consigli di viaggio</h2>
          <ul>
            <li>
              Portare snack e acqua: sul treno da Przemysl a Kyiv passano una
              sola volta con il carrello degli snack, o mai se si viaggia nel
              treno con le cuccette. Negli Intercity c'è comunque il vagone
              ristorante, dove potrete recarvi;
            </li>
            <li>
              La moneta locale in Ucraina è la Hryvnia. Le carte (Mastercard e
              Visa) sono accettate quasi ovunque, ma meglio avere un po’ di
              contanti. In tutte le città principali ci sono i cambi valute. Si
              possono cambiare anche in qualsiasi banca ucraina, ma verrà
              applicato un cambio svantaggioso;
            </li>
            <li>
              SIM e roaming: dipende dall’operatore, è necessario informarsi
              prima;
            </li>
            <li>Powerbank essenziale per i lunghi viaggi;</li>
            <li>Tenere con sè copie stampate dei propri documenti;</li>
          </ul>
        </section>

        <section>
          <h2>Contatti utili e app da installare</h2>
          <ul>
            <li>
              <strong>Ferrovie ucraine:</strong> App <em>Ukrzaliznytsia</em>
            </li>
            <li>
              <strong>Allarmi aerei:</strong>{" "}
              <a
                className={styles.link}
                href="https://apps.apple.com/ua/app/%D0%BF%D0%BE%D0%B2%D1%96%D1%82%D1%80%D1%8F%D0%BD%D0%B0-%D1%82%D1%80%D0%B8%D0%B2%D0%BE%D0%B3%D0%B0/id1611955391"
              >
                App <em>Повітряна тривога</em>
              </a>{" "}
              (selezionare regione corretta: Kyiv città ≠ Kyiv oblast)
            </li>
            <li>Gruppi Telegram locali con avvisi in tempo reale</li>
            <li>
              <strong>
                Solo in caso di emergenza, Ambasciata italiana a Kyiv:
              </strong>{" "}
              <a href="https://ambkiev.esteri.it" className={styles.link}>
                ambkiev.esteri.it
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Conclusione</h2>
          <p>
            Viaggiare in Ucraina oggi richiede attenzione, preparazione e
            (molta) pazienza. Nonostante i rischi, è possibile farlo in modo
            relativamente sicuro se ci si informa bene e si seguono i protocolli
            locali.
          </p>
          <p>
            <strong>Disclaimer:</strong> Questa guida ha scopo informativo.
            Verifica sempre con le autorità ufficiali prima del viaggio.
          </p>
        </section>
      </article>
    </main>
  );
}
