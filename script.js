/* ============================================================
   ALESSANDRO BORSATO, site script
   i18n · theme · email reveal · reveal-on-scroll · filters
   ============================================================ */

(function () {
  'use strict';

  /* ---------- i18n dictionary ---------- */
  const I18N = {
    it: {
      'nav.home': 'Home',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Contatti',

      'hero.eyebrow': 'Chi sono',
      'hero.l1': 'Marketing strategico.',
      'hero.l2': 'Intelligenza artificiale applicata.',
      'hero.l3': '',
      'hero.l4': '',
      'hero.lede': "Sono <strong>Alessandro Borsato</strong>. Veronese, classe 1999. Vengo dal marketing e dalla comunicazione. Il mio mestiere è capire le esigenze delle aziende e tradurle in progetti concreti, scegliendo di volta in volta lo strumento più adatto al problema da risolvere.",
      'hero.lede2': "Ho studiato pubblicità e marketing, poi ho lavorato sul campo. Parto sempre dall'ascolto: chi fa il lavoro, dove perde tempo, cosa serve davvero. Da lì costruisco la soluzione, insieme a chi poi la deve utilizzare.",
      'hero.lede3': "Mi muovo tra strategia e operatività: a volte è un piano marketing, a volte un sito, a volte un'app AI fatta su misura, a volte un'automazione. <em>Lo strumento serve al problema, mai il contrario.</em>",
      'hero.cta1': 'Scrivimi',
      'hero.cta2': 'Vedi i progetti',
      'hero.s1t': 'Marketing prima di tutto',
      'hero.s1d': "Ogni progetto parte dall'ascolto dei bisogni e dall'analisi del problema. Non dal codice.",
      'hero.s2t': 'AI come acceleratore',
      'hero.s2d': 'Strumento, non fine. Velocizza i processi, elimina lavoro manuale, produce risultati misurabili.',
      'hero.s3t': 'Impatto misurabile',
      'hero.s3d': 'Ore risparmiate, errori eliminati, processi semplificati. Ogni intervento ha un numero.',
      'hero.metaStatus': 'Stato',
      'hero.metaStatusV': 'Disponibile per progetti',
      'hero.metaBased': 'Sede',
      'hero.metaSince': 'Dal',

      'profilo.title': 'Profilo',
      'profilo.aside': 'Marketing · AI · Project mgmt',
      'profilo.lede': "Vengo dal marketing e dalla comunicazione, e da diversi anni costruisco strategia e direzione di progetti di brand, web e comunicazione dentro aziende e gruppi industriali. Negli ultimi tre anni ho fatto dell'<em>AI uno strumento di lavoro quotidiano</em>: non un oggetto da raccontare, ma una leva concreta per liberare tempo, ridurre il lavoro manuale, dare al team più spazio per pensare e decidere.",
      'profilo.t1': "Il punto di partenza per me è sempre l'ascolto. Capire cosa fa un'azienda davvero ogni giorno, dove perde tempo, dove ci sono colli di bottiglia. Da lì la soluzione: che sia un piano marketing, un sito, un'automazione o un percorso di formazione interno. Senza ascolto, lo strumento è solo rumore.",
      'profilo.t2': "Lavoro dentro <a href='https://voler.ai/' target='_blank' rel='noopener' class='link-inline'><strong>Voler.ai</strong></a>, la startup di cui sono <em>Project AI Manager</em>. Seguo passo dopo passo aziende e gruppi industriali nell'integrazione di soluzioni AI nei processi: imposto la direzione del progetto e coordino l'esecuzione, ma quando serve sono operativo, scrivo, costruisco, metto le mani nei processi insieme al team. Porto una mentalità agile che viene anche dagli sport estremi che pratico: agire, testare, iterare, senza paura di sbagliare per imparare prima.",
      'profilo.t3': "Il mio mestiere non è scrivere codice, è capire il problema. Parlo con le persone che il lavoro lo fanno davvero, mi siedo accanto a chi decide, individuo dove il processo si rompe e dove un'idea ben costruita può cambiare il quadro. Da lì la soluzione: a volte è un piano marketing, a volte un sito, a volte un'app fatta su misura, a volte un'automazione. Lo strumento serve al problema, non viceversa.",

      'lavoro.title': 'Cosa faccio',
      'lavoro.aside': '4 aree principali',
      'lavoro.c1t': 'Strategia di marketing e comunicazione',
      'lavoro.c1d': 'Ascolto, analisi, posizionamento, brief. Coordino brand, web e contenuti come una sola regia. Lascio al cliente un modo di lavorare che resta dopo di me.',
      'lavoro.c2t': 'Social, contenuti & influencer',
      'lavoro.c2d': 'Piani editoriali e campagne con obiettivi commerciali chiari. Scelta dei partner e degli influencer giusti per il pubblico reale, presidio dei canali, misurazione sui KPI che contano.',
      'lavoro.c3t': 'AI nei processi aziendali',
      'lavoro.c3d': "Trovo dove l'AI fa la differenza nel lavoro di un'azienda, supervisiono lo sviluppo di app, automazioni e tool dedicati. Obiettivo: ridurre il lavoro manuale, recuperare ore, dare al team tempo per pensare e decidere.",
      'lavoro.c4t': 'Formazione AI per team',
      'lavoro.c4d': "Percorsi calibrati sui processi reali del team, non corsi generici. Casi d'uso concreti, strumenti scelti sulle esigenze del reparto, materiali che restano per uso autonomo dopo la fine del percorso.",

      'metodo.title': 'Come lavoro',
      'metodo.aside': '5 fasi',
      'metodo.s1t': 'Ascolto',
      'metodo.s1d': "Capisco il lavoro reale dell'azienda. Parlo con chi fa, osservo i processi, individuo dove si perde tempo e dove ci sono colli di bottiglia.",
      'metodo.s2t': 'Analisi',
      'metodo.s2d': "Traduco l'ascolto in problemi specifici e priorità. Cosa conviene affrontare prima, cosa può aspettare, cosa non vale la pena toccare.",
      'metodo.s3t': 'Strategia',
      'metodo.s3d': "Definisco direzione, posizionamento e brief operativo. La strategia tiene insieme obiettivi di business, marketing e scelta degli strumenti, AI inclusa.",
      'metodo.s4t': 'Costruzione',
      'metodo.s4d': "Realizzo o coordino le soluzioni: piani marketing, siti, contenuti, automazioni, tool AI dedicati. Tengo la regia, intervengo dove serve.",
      'metodo.s5t': 'Affiancamento',
      'metodo.s5d': "Lascio al cliente metodo, strumenti e materiali che restano. L'obiettivo è che il team continui a usare quello che abbiamo costruito anche senza di me.",

      'featured.title': 'Progetti',
      'featured.titleEm': 'in evidenza',
      'featured.cta': 'Vedi tutto il portfolio',

      'featured.p1.client': '',
      'featured.p1.titleEm': '',
      'featured.p1.desc': 'Costruttore italiano di camper monoscocca. Mi occupo di tutta la parte digital dell\'azienda. Da lì la collaborazione si è estesa alle campagne di prodotto (la più nota: Capo Nord) e alla formazione del team sull\'integrazione dell\'AI nei processi.',
      'featured.p1.role': 'Marketing · Digital · AI',

      'featured.p2.tag': 'App AI · Itinerari',
      'featured.p2.titleEm': 'di Palladio',
      'featured.p2.desc': "Gestione del sito ufficiale e supervisione dell'app AI per itinerari di visita personalizzati. Direzione digitale per il sito UNESCO.",
      'featured.p2.role': 'Supervisione sviluppo · UX',

      'featured.p3.tag': 'Brand & web',
      'featured.p3.titleEm': 'gruppo vinicolo',
      'featured.p3.desc': 'Quattro siti coordinati per il gruppo vinicolo emiliano: chiarli.it, chiarlimodena.it, quintopasso.it, cletochiarli.it. Architettura dei contenuti riprogettata da zero.',
      'featured.p3.role': 'Coordinamento · Content architecture',

      'contatti.title': 'Contatti',
      'contatti.eyebrow': 'Parliamoci',
      'contatti.aside': 'Risposta entro 24h',
      'footer.selfmade': 'Sito realizzato da me con Claude Code',
      'contatti.lede': 'Hai in mente un progetto?',
      'contatti.ledeEm': 'Scrivimi.',
      'contatti.h1': 'Se in azienda senti che si lavora',
      'contatti.h2': 'più del necessario per ottenere meno del dovuto.',
      'contatti.sub': "Riunioni che non decidono niente, dati sparsi ovunque, processi che dipendono dalla memoria di una sola persona, report costruiti a mano ogni settimana. Cose che tutti vedono e nessuno trova il tempo di sistemare. Potrei essere la persona giusta da avere in squadra.",
      'contatti.m1t': 'Inefficienze',
      'contatti.m1d': 'Capisco dove si perde tempo e cosa si può automatizzare senza forzature.',
      'contatti.m2t': 'Persone',
      'contatti.m2d': 'Lavoro con il team, non sopra il team. Costruisco con chi farà il lavoro tutti i giorni.',
      'contatti.m3t': 'Numeri',
      'contatti.m3d': 'Ogni intervento ha un risultato misurabile. Ore, errori, oppure tempo restituito.',
      'contatti.cta1': 'Scrivimi',

      'footer.portfolio': 'Portfolio',
      'footer.contact': 'Contatti',
      'footer.home': 'Home',

      'pf.eyebrow': 'Portfolio',
      'pf.titleA': 'Progetti',
      'pf.titleB': 'selezionati',
      'pf.lede': "Una selezione di lavori di marketing, comunicazione e integrazione AI. Tutti seguiti da me dentro <a href='https://voler.ai/' target='_blank' rel='noopener' class='link-inline'><strong>Voler.ai</strong></a>, la startup in cui lavoro come Project AI Manager. Filtra per settore per vedere i progetti del tuo ambito.",

      'pf.filterAll': 'Tutti',
      'pf.filterIndustriale': 'Industriale & manifatturiero',
      'pf.filterWine': 'Wine & food',
      'pf.filterHeritage': 'Cultura & heritage',
      'pf.filterSanitario': 'Sanitario',
      'pf.filterAutomotive': 'Automotive & servizi',
      'pf.filterRealEstate': 'Real estate',

      'pf.07.desc': "Sistema online che centralizza tutti i dati della rete impianti in un'unica piattaforma. Ricerca veloce, schede impianto con Google Maps, mappa interattiva con analisi della concorrenza e dei potenziali partner cross-sell, multi-utente con backup automatico. La rete commerciale trova qualsiasi informazione in 30 secondi invece che in 20 minuti.",

      'pf.sec.industriale.eyebrow': 'Settore',
      'pf.sec.industriale.a': 'Industriale',
      'pf.sec.industriale.b': '& manifatturiero',
      'pf.sec.wine.eyebrow': 'Settore',
      'pf.sec.wine.a': 'Wine',
      'pf.sec.wine.b': '& food',
      'pf.sec.heritage.eyebrow': 'Settore',
      'pf.sec.heritage.a': 'Cultura',
      'pf.sec.heritage.b': '& heritage',
      'pf.sec.realestate.eyebrow': 'Settore',
      'pf.sec.realestate.a': 'Real estate',
      'pf.sec.realestate.b': '& servizi professionali',

      'pf.01.client': '',
      'pf.01.desc': 'Costruttore italiano di camper monoscocca. Mi occupo di tutta la parte digital dell\'azienda. Nel tempo la collaborazione si è estesa alle campagne di prodotto (la più nota: Capo Nord) e alla digitalizzazione del know-how aziendale con l\'AI.',
      'pf.01.role': 'Marketing · Digital · AI',

      'pf.02.tag': 'App AI · UNESCO · Itinerari',
      'pf.02.titleEm': 'di Andrea Palladio',
      'pf.02.stat': 'itinerari personalizzati',
      'pf.02.desc': "Gestione del sito ufficiale e supervisione dell'app AI per itinerari di visita personalizzati. Direzione digitale per il sito UNESCO.",
      'pf.02.role': 'Supervisione sviluppo · UX · AI design',

      'pf.03.tag': 'Brand · Web · Content architecture',
      'pf.03.titleEm': 'gruppo vinicolo',
      'pf.03.stat': 'siti del gruppo',
      'pf.03.desc': 'Coordinamento e sviluppo dei quattro siti del gruppo: chiarli.it, chiarlimodena.it, quintopasso.it, cletochiarli.it. Architettura dei contenuti riprogettata da zero, identità digitale coordinata.',
      'pf.03.role': 'PM · Content architecture · Brand',

      'pf.04.tag': 'Consulenza AI · Automazione',
      'pf.04.titleEm': 'industriale',
      'pf.04.stat': 'collaborazione attiva',
      'pf.04.desc': "Consulenza AI continuativa per un agente immobiliare, attiva da due anni. Insieme abbiamo costruito un setup su misura sul suo lavoro reale: automazioni, materiali, gestione dei file di trattativa. Obiettivo iniziale, snellire l'operatività quotidiana per liberare ore di vendita. Raggiunto.",
      'pf.04.role': 'Consulenza AI · Automazione · Tool dev',

      'pf.05.tag': 'Social aziendali · Employer brand',
      'pf.05.titleEm': 'gruppo industriale',
      'pf.05.stat': 'LinkedIn · Facebook',
      'pf.05.desc': 'Ho seguito la strategia social su LinkedIn e Facebook per Manni Group e le quattro subholding (Isopan, Manni Sipre, Manni Green Tech, Manni Energy). Sono stato Project Manager della Fondazione Giuseppe Manni: organizzazione eventi e gestione del sito.',
      'pf.05.role': 'Social mgmt · Editorial · Copy',

      'pf.06.tag': 'Healthcare · Calcolatore',
      'pf.06.titleEm': 'S.P.R.I.Z. Calculator',
      'pf.06.stat': 'sanità · web',
      'pf.06.desc': "Strumento online che aiuta direttori sanitari e provveditori a quantificare in pochi minuti, sul proprio reparto, il risparmio economico, la riduzione di CO₂ e le ore di lavoro recuperate passando ai sistemi di aspirazione a circuito chiuso. Online su aspiratoriliquidibiologici.it.",
      'pf.06.role': 'Sviluppo · UX · Web',

      'pf.cta.a': 'Hai un progetto',
      'pf.cta.b': 'in mente?',
      'pf.cta.lede': 'Marketing, comunicazione, integrazione AI o formazione. Scrivimi: rispondo entro 24 ore.',
      'pf.cta.btn': 'Mettiamoci in contatto',
    },
    en: {
      'nav.home': 'Home',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Project manager · Marketing & AI',
      'hero.l1': 'Strategic marketing.',
      'hero.l2': 'AI as a lever in the work.',
      'hero.l3': '',
      'hero.l4': '',
      'hero.lede': "I'm <strong>Alessandro Borsato</strong>. I come from <em>marketing</em>: that's my mind, the strategy, the thinking. <em>AI</em> is the tool I use to ground ideas with speed and execution. I help companies and professionals hold these two levers inside one project, from strategy to delivery.",
      'hero.metaStatus': 'Status',
      'hero.metaStatusV': 'Available for projects',
      'hero.metaBased': 'Based',
      'hero.metaSince': 'Since',

      'profilo.title': 'Profile',
      'profilo.aside': 'Marketing · AI · Project mgmt',
      'profilo.lede': "I come from marketing and communications, and for years I've been building the strategy and direction of brand, web and communications projects inside companies and industrial groups. In the last three years I've made <em>AI an everyday working tool</em>: not something to talk about, but a concrete lever to free up time, cut manual work, and give the team more room to think and decide.",
      'profilo.t1': "My starting point is always listening. Understanding what a company actually does day to day, where it loses time, where the bottlenecks are. The solution comes from there: a marketing plan, a site, an automation, an internal training. Without listening, the tool is just noise.",
      'profilo.t2': "I work inside <a href='https://voler.ai/' target='_blank' rel='noopener' class='link-inline'><strong>Voler.ai</strong></a>, the startup where I'm <em>Project AI Manager</em>. I follow companies and industrial groups step by step in integrating AI solutions into their processes: I set the project direction and coordinate execution, but when it's needed I'm hands-on too, I write, I build, I get into the processes with the team. I bring an agile mindset that also comes from the extreme sports I practice: act, test, iterate, no fear of being wrong if it means learning faster.",
      'profilo.t3': "My job isn't writing code, it's understanding the problem. I talk with the people who actually do the work, I sit next to those who decide, I spot where a process breaks down and where a well-built idea can change the picture. From there comes the solution: sometimes a marketing plan, sometimes a website, sometimes a custom app, sometimes an automation. The tool serves the problem, not the other way around.",

      'lavoro.title': 'What I do',
      'lavoro.aside': '4 core areas',
      'lavoro.c1t': 'Marketing and communications strategy',
      'lavoro.c1d': "Listening, analysis, positioning, brief. I coordinate brand, web and content as one direction. I leave the client with a way of working that stays.",
      'lavoro.c2t': 'Social, content & influencer',
      'lavoro.c2d': 'Editorial plans and campaigns with clear commercial goals. The right partners and influencers for the real audience, channel oversight, measurement on KPIs that matter.',
      'lavoro.c3t': 'AI in business processes',
      'lavoro.c3d': "I find where AI makes a real difference in a company's work, oversee development of apps, automations and dedicated tools. Goal: cut manual work, recover hours, give the team time to think and decide.",
      'lavoro.c4t': 'AI training for teams',
      'lavoro.c4d': "Programs calibrated on the team's real processes, not generic courses. Concrete use cases, tools chosen on the unit's actual needs, materials that stay for self-serve use after the program ends.",

      'metodo.title': 'How I work',
      'metodo.aside': '5 phases',
      'metodo.s1t': 'Listening',
      'metodo.s1d': "I understand how the company actually works. I talk with the people who do, observe the processes, spot where time is lost and where the bottlenecks are.",
      'metodo.s2t': 'Analysis',
      'metodo.s2d': "I translate listening into specific problems and priorities. What to tackle first, what can wait, what isn't worth touching.",
      'metodo.s3t': 'Strategy',
      'metodo.s3d': "I define direction, positioning and a working brief. The strategy holds business goals, marketing and tool choices together, AI included.",
      'metodo.s4t': 'Build',
      'metodo.s4d': "I deliver or coordinate the solutions: marketing plans, sites, content, automations, dedicated AI tools. I keep the direction and step in where needed.",
      'metodo.s5t': 'Handover',
      'metodo.s5d': "I leave the client with method, tools and materials that stay. The goal is for the team to keep using what we built even without me.",

      'featured.title': 'Featured',
      'featured.titleEm': 'projects',
      'featured.cta': 'See full portfolio',

      'featured.p1.client': '',
      'featured.p1.titleEm': '',
      'featured.p1.desc': "Italian monocoque camper manufacturer. I run the company's entire digital presence. The collaboration has since extended to product campaigns (the most notable: North Cape) and AI training for the internal team.",
      'featured.p1.role': 'Marketing · Digital · AI',

      'featured.p2.tag': 'AI app · Itineraries',
      'featured.p2.titleEm': "by Palladio",
      'featured.p2.desc': "Ongoing management of the official site and oversight of the AI app for personalized visit itineraries. Digital direction for the UNESCO site.",
      'featured.p2.role': 'Dev oversight · UX',

      'featured.p3.tag': 'Brand & web',
      'featured.p3.titleEm': 'winery group',
      'featured.p3.desc': 'Four coordinated sites for the Emilian winery group: chiarli.it, chiarlimodena.it, quintopasso.it, cletochiarli.it. Content architecture rebuilt from scratch.',
      'featured.p3.role': 'Coordination · Content architecture',

      'contatti.title': 'Contact',
      'contatti.eyebrow': "Let's talk",
      'contatti.aside': 'Reply within 24h',
      'footer.selfmade': 'Site built by me with Claude Code',
      'contatti.lede': 'Got a project in mind?',
      'contatti.ledeEm': 'Get in touch.',
      'contatti.h1': 'If your company is working',
      'contatti.h2': 'harder than needed to get less than it should.',
      'contatti.sub': "Meetings that decide nothing, data scattered everywhere, processes that depend on one person's memory, reports built by hand every week. Things everyone sees and no one finds the time to fix. I might be the right person to have on the team.",
      'contatti.m1t': 'Inefficiencies',
      'contatti.m1d': 'I see where time is lost and what can be automated without forcing it.',
      'contatti.m2t': 'People',
      'contatti.m2d': 'I work with the team, not above the team. I build with the people who do the work every day.',
      'contatti.m3t': 'Numbers',
      'contatti.m3d': 'Every intervention has a measurable result. Hours, errors, or time given back.',
      'contatti.cta1': 'Write to me',

      'footer.portfolio': 'Portfolio',
      'footer.contact': 'Contact',
      'footer.home': 'Home',

      'pf.eyebrow': 'Portfolio',
      'pf.titleA': 'Selected',
      'pf.titleB': 'projects',
      'pf.lede': "A selection of marketing, communications and AI integration work. All led by me inside <a href='https://voler.ai/' target='_blank' rel='noopener' class='link-inline'><strong>Voler.ai</strong></a>, the startup where I work as Project AI Manager. Filter by sector to see projects in your industry.",

      'pf.filterAll': 'All',
      'pf.filterIndustriale': 'Industrial & manufacturing',
      'pf.filterWine': 'Wine & food',
      'pf.filterHeritage': 'Culture & heritage',
      'pf.filterSanitario': 'Healthcare',
      'pf.filterAutomotive': 'Automotive & services',
      'pf.filterRealEstate': 'Real estate',

      'pf.07.desc': "Online platform that centralizes the entire plant network data in one place. Fast search, plant detail pages with Google Maps, interactive territory map with competitor analysis and cross-sell partner identification, multi-user access with automatic backup. The sales team finds any information in 30 seconds instead of 20 minutes.",

      'pf.sec.industriale.eyebrow': 'Sector',
      'pf.sec.industriale.a': 'Industrial',
      'pf.sec.industriale.b': '& manufacturing',
      'pf.sec.wine.eyebrow': 'Sector',
      'pf.sec.wine.a': 'Wine',
      'pf.sec.wine.b': '& food',
      'pf.sec.heritage.eyebrow': 'Sector',
      'pf.sec.heritage.a': 'Culture',
      'pf.sec.heritage.b': '& heritage',
      'pf.sec.realestate.eyebrow': 'Sector',
      'pf.sec.realestate.a': 'Real estate',
      'pf.sec.realestate.b': '& professional services',

      'pf.01.client': '',
      'pf.01.desc': "Italian monocoque camper manufacturer. I run the company's entire digital presence. The collaboration has since extended to product campaigns (the most notable: North Cape) and digitizing the company know-how with AI.",
      'pf.01.role': 'Marketing · Digital · AI',

      'pf.02.tag': 'AI app · UNESCO · Itineraries',
      'pf.02.titleEm': "by Andrea Palladio",
      'pf.02.stat': 'personalized itineraries',
      'pf.02.desc': "Ongoing management of the official site and oversight of the AI app for personalized visit itineraries. Digital direction for the UNESCO site.",
      'pf.02.role': 'Dev oversight · UX · AI design',

      'pf.03.tag': 'Brand · Web · Content architecture',
      'pf.03.titleEm': 'winery group',
      'pf.03.stat': 'group sites',
      'pf.03.desc': 'Coordination and rollout of the four group sites: chiarli.it, chiarlimodena.it, quintopasso.it, cletochiarli.it. Content architecture redesigned from scratch, coordinated digital identity.',
      'pf.03.role': 'PM · Content architecture · Brand',

      'pf.04.tag': 'AI consulting · Automation',
      'pf.04.titleEm': 'industrial',
      'pf.04.stat': 'active engagement',
      'pf.04.desc': "Two-year ongoing AI consulting for a real estate agent. Together we built a custom setup on his real work: automations, materials, deal-file handling. Stated goal at the start, streamline daily operations to free up selling hours. Done.",
      'pf.04.role': 'AI consulting · Automation · Tool dev',

      'pf.05.tag': 'Corporate social · Employer brand',
      'pf.05.titleEm': 'industrial group',
      'pf.05.stat': 'LinkedIn · Facebook',
      'pf.05.desc': 'Social strategy on LinkedIn and Facebook for Manni Group and its four subholdings (Isopan, Manni Sipre, Manni Green Tech, Manni Energy). Project Manager of Fondazione Giuseppe Manni: event organisation and website management.',
      'pf.05.role': 'Social mgmt · Editorial · Copy',

      'pf.06.tag': 'Healthcare · Calculator',
      'pf.06.titleEm': 'S.P.R.I.Z. Calculator',
      'pf.06.stat': 'healthcare · web',
      'pf.06.desc': "Online tool that helps healthcare directors and procurement managers quantify, in minutes and on their own ward, the economic savings, CO₂ reduction and staff hours recovered by switching to closed-circuit aspiration. Live on aspiratoriliquidibiologici.it.",
      'pf.06.role': 'Development · UX · Web',

      'pf.cta.a': 'Got a project',
      'pf.cta.b': 'in mind?',
      'pf.cta.lede': 'Marketing, communications, AI integration or training. Send a message: I reply within 24 hours.',
      'pf.cta.btn': 'Get in touch',
    }
  };

  /* ---------- helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- i18n ---------- */
  function applyLang(lang) {
    const dict = I18N[lang];
    if (!dict) return;
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    $$('.lang-opt').forEach((opt) => {
      opt.classList.toggle('is-active', opt.dataset.lang === lang);
    });
    localStorage.setItem('lang', lang);
  }

  function initLang() {
    const stored = localStorage.getItem('lang');
    const browser = (navigator.language || 'it').toLowerCase().startsWith('en') ? 'en' : 'it';
    applyLang(stored || browser);
    const btn = $('#langToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const current = localStorage.getItem('lang') || 'it';
      applyLang(current === 'it' ? 'en' : 'it');
    });
  }

  /* ---------- theme ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  function initTheme() {
    const stored = localStorage.getItem('theme');
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(stored || (preferDark ? 'dark' : 'light'));
    const btn = $('#themeToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(current === 'light' ? 'dark' : 'light');
    });
  }

  /* ---------- email reveal (anti-bot) ---------- */
  function initEmail() {
    const user = 'mail';
    const domain = 'alessandroborsato.com';
    const email = user + '@' + domain;
    $$('[data-email-link]').forEach((a) => { a.href = 'mailto:' + email; });
    $$('[data-email-text]').forEach((a) => { a.textContent = email; });
  }

  /* ---------- reveal on scroll ---------- */
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      $$('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    $$('[data-reveal]').forEach((el) => io.observe(el));
  }

  /* ---------- scrollspy (home nav) ---------- */
  function initScrollSpy() {
    if (document.body.dataset.page !== 'home') return;
    if (!('IntersectionObserver' in window)) return;
    const links = $$('.nav-link[href^="#"]');
    if (!links.length) return;
    const map = new Map();
    links.forEach((a) => {
      const id = a.getAttribute('href').slice(1);
      const sec = document.getElementById(id);
      if (sec) map.set(sec, a);
    });
    if (!map.size) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const link = map.get(e.target);
        if (!link) return;
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove('is-active'));
          link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    map.forEach((_, sec) => io.observe(sec));
  }

  /* ---------- portfolio filters ---------- */
  function initFilters() {
    const filters = $$('.filter');
    const items = $$('.portfolio-grid .pcard');
    if (!filters.length || !items.length) return;
    const featured = document.querySelector('.casestudy-feat[data-cat]');
    const wingammPcard = document.getElementById('wingamm');

    function apply(cat) {
      items.forEach((el) => {
        const match = cat === 'all' || el.dataset.cat === cat;
        el.style.display = match ? '' : 'none';
      });
      // Featured Wingamm: visible only on "all"
      if (featured) featured.style.display = (cat === 'all') ? '' : 'none';
      // Wingamm small pcard: hidden on "all" (featured shows), visible only when industriale active
      if (wingammPcard) {
        wingammPcard.style.display = (cat === 'all') ? 'none' : (wingammPcard.dataset.cat === cat ? '' : 'none');
      }
    }

    filters.forEach((btn) => {
      btn.addEventListener('click', () => {
        filters.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        apply(btn.dataset.filter);
      });
    });
    apply('all');
  }

  /* ---------- slider (loop + auto-advance) ---------- */
  function initSliders() {
    $$('[data-slider]').forEach((slider) => {
      const track = slider.querySelector('[data-slider-track]');
      const prev = slider.querySelector('[data-slider-prev]');
      const next = slider.querySelector('[data-slider-next]');
      const slides = Array.from(track.children);
      if (!track || !slides.length) return;

      // Clear any stale disabled state
      if (prev) prev.disabled = false;
      if (next) next.disabled = false;

      const slideW = () => slides[0].getBoundingClientRect().width + 16;
      const atEnd = () => track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      const atStart = () => track.scrollLeft <= 4;

      const goNext = () => {
        if (atEnd()) track.scrollTo({ left: 0, behavior: 'smooth' });
        else track.scrollBy({ left: slideW(), behavior: 'smooth' });
      };

      const goPrev = () => {
        if (atStart()) track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
        else track.scrollBy({ left: -slideW(), behavior: 'smooth' });
      };

      if (prev) prev.addEventListener('click', () => { goPrev(); resetAuto(); });
      if (next) next.addEventListener('click', () => { goNext(); resetAuto(); });

      // Auto-advance, pause on hover
      let timer;
      const INTERVAL = 4000;
      const startAuto = () => { timer = setInterval(goNext, INTERVAL); };
      const stopAuto = () => { clearInterval(timer); };
      const resetAuto = () => { stopAuto(); startAuto(); };

      slider.addEventListener('mouseenter', stopAuto);
      slider.addEventListener('mouseleave', startAuto);
      track.addEventListener('touchstart', stopAuto, { passive: true });
      track.addEventListener('touchend', startAuto, { passive: true });

      // Only start auto when slider is visible
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => { e.isIntersecting ? startAuto() : stopAuto(); });
        }, { threshold: 0.25 });
        io.observe(slider);
      } else {
        startAuto();
      }
    });
  }

  /* ---------- year ---------- */
  function initYear() {
    const y = $('#year');
    if (y) y.textContent = String(new Date().getFullYear());
  }

  /* ---------- boot ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLang();
    initEmail();
    initReveal();
    initScrollSpy();
    initFilters();
    initSliders();
    initYear();
  });
})();
