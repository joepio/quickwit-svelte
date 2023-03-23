<script lang="ts">
  let IS_ORI = false;
  let TITLE = "OpenBesluitvorming.nl";

  import paths from "./paths";

  interface OrgType {
    /** Relative to /public/orglogos/ */
    picture: string;
    url: string;
    name: string;
    toelichting?: string;
  }

  /** List of the organizations that made this project possible */
  export const poweredBy: OrgType[] = [
    {
      name: "Argu",
      url: paths.argu,
      toelichting: "initiatiefnemer OpenBesluitvorming.nl",
      picture: "argu.svg",
    },
    {
      name: "Open State Foundation",
      url: paths.openstate,
      toelichting:
        "initiatiefnemer Open Raadsinformatie & Open Stateninformatie",
      picture: "openstate.svg",
    },
    {
      name: "VNG Realisatie",
      url: "https://www.vngrealisatie.nl/",
      toelichting: "financiering & beheer Open Raadsinformatie",
      picture: "vng.svg",
    },
    {
      name: "Ontola",
      url: paths.ontola,
      toelichting: "softwareontwikkeling & technisch beheer zoekmachine en API",
      picture: "ontola.svg",
    },
    {
      name: "Qollab",
      url: "https://qollab.io",
      toelichting: "softwareontwikkeling WaarOverheid & HierOverheid",
      picture: "qollab.svg",
    },
    {
      name: "Universiteit van Amsterdam",
      url: "https://e.humanities.uva.nl/access/",
      toelichting: "conceptueel ontwerp WaarOverheid & HierOverheid",
      picture: "uva.svg",
    },
    {
      name: "SIDN Fonds",
      url: "https://www.sidnfonds.nl/projecten/argu-open-data/",
      toelichting: "financiering Argu Open Data",
      picture: "sidnfonds.png",
    },
    {
      name: "Stimuleringsfonds voor de Journalistiek",
      url: "https://www.svdj.nl/projects/argu-open-data/",
      toelichting: "financiering Argu Open Data",
      picture: "svdj.svg",
    },
    {
      name: "Open Overheid",
      url: paths.actieplan,
      toelichting: "Actieplan Open Overheid, actiepunt Open Besluitvorming",
      picture: "openoverheid.jpg",
    },
    {
      name: "Ministerie van Binnenlandse Zaken",
      url: paths.actieplan,
      toelichting: "initiatiefnemer Open Overheid",
      picture: "bzk.jpg",
    },
    {
      name: "Provincie Utrecht",
      url: "https://www.provincie-utrecht.nl/",
      toelichting: "financiering Open Stateninformatie",
      picture: "utrecht.png",
    },
    {
      name: "Provincie Noord-Holland",
      url: "https://www.noord-holland.nl/",
      toelichting: "financiering Open Stateninformatie",
      picture: "noordholland.png",
    },
    {
      name: "Provincie Zuid-Holland",
      url: "https://www.zuid-holland.nl/",
      toelichting: "financiering Open Stateninformatie",
      picture: "zuidholland.jpg",
    },
    {
      name: "Provincie Flevoland",
      url: "https://www.flevoland.nl/",
      toelichting: "financiering Open Stateninformatie",
      picture: "flevoland.png",
    },
    {
      name: "Provincie Limburg",
      url: "https://www.limburg.nl/",
      toelichting: "financiering Open Stateninformatie",
      picture: "limburg.jpg",
    },
    {
      name: "Provincie Overijssel",
      url: "http://www.overijssel.nl/",
      toelichting: "financiering Open Stateninformatie",
      picture: "overijssel.png",
    },
  ];
</script>

<div class="About">
  <h2>Doorzoek vergaderstukken van gemeenten en provincies</h2>
  <p>
    Met deze app zoek je door de openbare vergaderingen, agendapunten, moties en
    documenten van meer dan 140 deelnemende gemeenten en zes provincies.
  </p>
  {#if IS_ORI}
    <div>
      <p>
        Open Raadsinformatie is een initiatief om de besluitvorming van
        Nederlandse gemeenten transparanter te maken. Dit wordt gedaan door
        automatisch uit de bestaande vergadersoftware (raadsinformatiesystemen)
        de vergaderingen en documenten te halen en deze vervolgens middels een
        API te ontsluiten op een gestandaardiseerde manier.
      </p>
      <h2>Door wie</h2>
      <p>
        Vanuit het <a href={paths.actieplan}>actieplan open overheid</a>{" "}
        werkt <a href={paths.vngRealisatie}>VNG Realisatie</a> in samenwerking
        met de <a href={paths.openstate}>Open State Foundation</a> aan het
        openstellen van besluitvorming van gemeenten en provincies als open
        data. Lees <a href={paths.vngProject}>hier</a> meer over het project.
      </p>
      <p>
        De techniek is gemaakt door <a href={paths.ontola}>Ontola</a>; het
        ontwikkelteam achter <a href={paths.argu}>Argu</a>. De broncode van
        zowel deze <a href={paths.oriSearchGithub}>zoekmachine</a> als de
        <a href={paths.oriBackEndGithub}>server</a>
        van {TITLE} zijn open source beschikbaar op Github.
      </p>
    </div>
  {:else}
    <div>
      <h2>Door wie?</h2>
      <p>
        OpenBesluitvorming.nl is een initiatief van <a href={paths.argu}>Argu</a
        >
        om data van gemeenten, provincies en andere overheden samen te brengen in
        één zoekomgeving. Zowel deze
        <a href={paths.oriSearchGithub}>zoekmachine</a>
        als de <a href={paths.oriBackEndGithub}>server</a> zijn open source.
      </p>
      <p>
        Vanuit het <a href={paths.actieplan}>actieplan open overheid</a> werkt
        het Ministerie van Binnenlandse Zaken aan het transparanter maken van
        overheden. Actiepunt 1 uit dit plan is het openen van
        besluitvormingsdata. De
        <a href={paths.openstate}>Open State Foundation</a>
        is samen met <a href={paths.vngRealisatie}>VNG Realisatie</a> het
        project <a href={paths.vngProject}>Open Raadsinformatie</a> gestart om data
        uit gemeenteraden te verzamelen. Voor de provincies is Open Stateninformatie
        gestart.
      </p>
      <p>
        Argu heeft als missie om besluitvorming zo open en toegankelijk mogelijk
        te maken. Als technisch ontwikkelaar en beheerder raakte Argu betrokken
        bij deze projecten.
      </p>
    </div>
  {/if}
  <h2>Voor wie is deze app?</h2>
  <ul>
    <li>
      <b>Ambtenaren</b> zoeken naar hoe andere overheden bepaalde problemen oplossen.
    </li>
    <li>
      <b>Ontwikkelaars</b> gaan aan de slag met deze data om eigen apps te maken.
    </li>
    <li>
      <b>Betrokken burgers</b> zoeken wat overheden hebben gezegd over een bepaald
      onderwerp.
    </li>
    <li>
      <b>Belangenbehartigers</b> kunnen volgen waar beslissingen over (gaan) worden
      gemaakt.
    </li>
    <li>
      <b>Journalisten</b> zien hoe besluitvorming zich heeft ontwikkeld over tijd.
    </li>
  </ul>
  <h2>Jouw gemeente of provincie toevoegen</h2>
  <p>
    Als je wil dat ook jouw gemeente aangesloten wordt op Open Raadsinformatie,
    vraag dan de griffie van je gemeenteraad <a href={paths.vngNewForm}
      >dit formulier</a
    >
    in te vullen.
    {#if !IS_ORI}
      <span>
        Provincies, waterschappen of andere overheden kunnen mailen naar <a
          href={paths.arguMail}>joep@argu.co</a
        >.</span
      >
    {/if}
  </p>
  <h2>Andere apps gemaakt met deze data</h2>
  <p>
    Alle data (moties, vergaderingen, documenten, agendapunten, stukken...) is
    gratis te gebruiken.
  </p>
  <h2>Contact</h2>
  <p>
    Technische vragen of suggesties over de API kunnen op de <a
      href={paths.oriBackEndGithub}>issue tracker van de server</a
    > geplaatst worden.
  </p>
  <p>
    Voor suggesties, problemen of vragen over deze zoekmachine, plaats een issue
    op <a href={paths.oriSearchGithub}>de ori-search issue tracker</a>.
  </p>
  <p>
    Voor algemene vragen kunt u mailen naar <a
      href={IS_ORI ? paths.projectMail : paths.arguMail}
      >{IS_ORI ? "Sander Bakker" : "Joep Meindertsma"}</a
    >
  </p>
  <h2>Privacy</h2>
  <p>
    We gebruiken Matomo (een privacy-vriendelijk alternatief voor Google
    analytics) om bezoekersstatistieken te verzamelen. We gebruiken deze
    gegevens alleen om anonieme rapportages te maken van bezoekers, en verkopen
    deze data aan niemand door. We slaan de laatste zes getallen van IP adressen
    niet op om jouw privacy te beschermen.
  </p>
  <h2>Disclaimer</h2>
  <p>
    De data in deze zoekmachine komt uit Open Raadsinformatie en Open
    Stateninformatie. Deze data is met toestemming van de deelnemende gemeenten
    en provincies geïmporteerd uit diverse vergadersystemen. De data kan door
    het importeren incompleet, onjuist of niet up to date zijn. Het
    eigenaarschap van de data ligt bij de organisaties die de data hebben
    aangemaakt, of de respectievelijke auteurs van de documenten.
  </p>
  <p>
    OpenBesluitvorming.nl is tot stand gekomen door de tijd en moeite van de
    onderstaande organisaties. Hover met je muis over de logo&apos;s om te zien
    wat hoe de organisaties hebben bijgedragen, en klik er op om er meer over te
    lezen.
  </p>
</div>
<div class="orgsList">
  {#each poweredBy as org}
    <a
      class="org"
      href={org.url}
      title={org.toelichting ? `${org.name}: ${org.toelichting}` : org.name}
    >
      <img class="orgLogo" src={`/orglogos/${org.picture}`} alt={org.name} />
    </a>
  {/each}
</div>

<style>
  .About {
    margin-top: 2rem;
  }

  .org {
    display: flex;
    margin: 1rem;
  }

  .orgLogo {
    min-width: 2rem;
    max-width: 5rem;
    max-height: 5rem;
    width: 100%;
    height: 100%;
  }

  .orgsList {
    background-color: white;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    flex-wrap: wrap;
    border-top: solid 1px;
    border-top-color: var(--bg2);
  }
</style>
