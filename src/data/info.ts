export type InfoPage = {
  slug: string;
  title: string;
  lede: string;
  sections: { h: string; p: string[] }[];
  draft?: boolean;   // text juridic, se redactează la lansare
};

export const INFO: InfoPage[] = [
  {
    slug: "livrare",
    title: "Livrare și montaj",
    lede: "Cum ajung piesele la tine și ce facem când sunt grele.",
    sections: [
      { h: "Piese sub 10 kg", p: [
        "Pleacă prin curier, în cutie cu spumă turnată după forma obiectului. Livrare în 2-4 zile lucrătoare în toată țara.",
        "Transport 35 lei, gratuit peste 900 lei. Curier rapid, a doua zi lucrătoare, 65 lei pentru comenzile plasate până la ora 13:00.",
      ]},
      { h: "Mobilier și piese peste 10 kg", p: [
        "Le livrăm cu mașina noastră în București și Ilfov, iar în restul țării cu transport specializat, cu asigurare inclusă pe valoarea declarată.",
        "Te sunăm să stabilim ziua și intervalul. La destinație urcăm piesa și o montăm, dacă are de asamblat. Nu percepem taxă de etaj.",
      ]},
      { h: "Ridicare din showroom", p: [
        "Str. Pietrei 14, Otopeni. Luni-Vineri 09:00-18:00, Sâmbătă 10:00-14:00. Te sunăm când piesa e împachetată și gata de ridicat.",
      ]},
      { h: "Ce facem dacă ajunge ciobită", p: [
        "Fotografiază coletul înainte să îl desfaci și piesa imediat după. Trimite pozele pe WhatsApp la 0722 319 593 în 48 de ore și îți trimitem alta sau îți returnăm banii, la alegerea ta. Transportul îl plătim noi.",
      ]},
    ],
  },
  {
    slug: "retur",
    title: "Retur în 14 zile",
    lede: "Te răzgândești, o trimiți înapoi. Fără să ne spui de ce.",
    sections: [
      { h: "Termenul", p: [
        "Ai 14 zile calendaristice de la primire ca să anunți returul, conform OUG 34/2014. Ne scrii pe e-mail sau pe WhatsApp, nu e nevoie de formular tipizat.",
        "După ce anunți, mai ai 14 zile să trimiți piesa înapoi.",
      ]},
      { h: "În ce stare trebuie să se întoarcă", p: [
        "În ambalajul original, cu spuma și cutia. Piatra suportă transportul doar în ambalajul ei, de aceea îți cerem să îl păstrezi cât timp te hotărăști.",
        "Piesa trebuie să fie nefolosită. Un vas în care a stat apă câteva zile sau un platou pe care s-a tăiat nu mai poate fi vândut mai departe.",
      ]},
      { h: "Cine plătește transportul", p: [
        "Tu, dacă te-ai răzgândit. Noi, dacă piesa a ajuns ciobită, a venit alta decât ai comandat sau nu corespunde descrierii.",
      ]},
      { h: "Banii", p: [
        "Îi returnăm în maximum 14 zile de la primirea piesei, pe aceeași metodă cu care ai plătit.",
      ]},
      { h: "Ce nu se poate returna", p: [
        "Piesele gravate cu nume sau logo și piesele executate la o dimensiune cerută de tine. Sunt făcute pentru o singură persoană și nu le putem revinde.",
      ]},
    ],
  },
  {
    slug: "intretinere",
    title: "Întreținerea onixului",
    lede: "Patru reguli, și piesa arată la fel peste zece ani.",
    sections: [
      { h: "Curățare", p: [
        "Cârpă moale umezită cu apă călduță. Atât. Fără oțet, fără soluții de geamuri, fără detergent de vase și fără produse anticalcar: toate sunt acide și mătuiesc luciul în câteva aplicări.",
        "Dacă vrei ceva mai mult, folosește un detergent neutru pentru marmură, din cele vândute la magazinele de piatră naturală.",
      ]},
      { h: "Pete", p: [
        "Onixul e poros. Cafeaua, vinul roșu și uleiul lasă inel dacă stau peste noapte. Șterge-le imediat, nu freca, doar tamponează.",
        "Pentru o pată deja intrată, o pastă de bicarbonat cu apă lăsată peste noapte sub folie scoate de obicei jumătate din ea. Restul îl scoatem noi, în atelier.",
      ]},
      { h: "Căldură și zgârieturi", p: [
        "Nu pune vase fierbinți direct pe blat. Nu crapă, dar luciul se duce în timp.",
        "Duritatea onixului e 3 pe scara Mohs, sub cea a oțelului. Un cuțit lasă urmă. Nu tăia direct pe platou.",
      ]},
      { h: "Relustruire", p: [
        "O dată la câțiva ani, dacă suprafața s-a mătuit, o refacem în atelier. Durează două zile și costă mult sub prețul unei piese noi. Adu piesa la showroom sau trimite-o prin curier.",
      ]},
    ],
  },
  {
    slug: "contact",
    title: "Contact",
    lede: "Răspundem în aceeași zi lucrătoare. Cel mai repede pe WhatsApp.",
    sections: [
      { h: "Showroom și atelier", p: [
        "Str. Pietrei 14, Otopeni, județul Ilfov.",
        "Luni-Vineri 09:00-18:00 · Sâmbătă 10:00-14:00 · Duminică închis.",
        "Poți veni să vezi blocurile din care tăiem, nu doar piesele finite. Sună înainte dacă vrei să prinzi pe cineva din atelier.",
      ]},
      { h: "Telefon și WhatsApp", p: [
        "0722 319 593, în programul de mai sus. Pe WhatsApp poți trimite și poze, dacă vrei să știi dacă o piesă se potrivește undeva anume.",
      ]},
      { h: "E-mail", p: [
        "comenzi@atelieronix.ro pentru comenzi și facturi. Pentru cereri de ofertă pe cantitate, scrie direct din pagina de cadouri corporate.",
      ]},
      { h: "Date de firmă", p: [
        "Atelier Onix SRL · CUI 00000000 · J00/000/2008 · Str. Pietrei 14, Otopeni, Ilfov.",
      ]},
    ],
  },
  {
    slug: "termeni",
    title: "Termeni și condiții",
    lede: "Regulile după care vindem și cumperi.",
    draft: true,
    sections: [
      { h: "Ce va conține", p: [
        "Părțile contractante și datele firmei, obiectul contractului, modul de plasare a comenzii, prețurile și modalitățile de plată, termenele de livrare, dreptul de retragere în 14 zile, garanția legală de conformitate, răspunderea, forța majoră, protecția datelor și soluționarea litigiilor prin ANPC și SOL.",
      ]},
    ],
  },
  {
    slug: "confidentialitate",
    title: "Politica de confidențialitate",
    lede: "Ce date colectăm și ce facem cu ele.",
    draft: true,
    sections: [
      { h: "Ce va conține", p: [
        "Operatorul de date, categoriile de date colectate, temeiul legal al prelucrării, scopurile, destinatarii, perioada de stocare, drepturile persoanei vizate conform GDPR și datele de contact ale responsabilului cu protecția datelor.",
      ]},
    ],
  },
  {
    slug: "cookies",
    title: "Politica de cookies",
    lede: "Ce fișiere punem în browserul tău.",
    draft: true,
    sections: [
      { h: "Ce va conține", p: [
        "Categoriile de cookies folosite, strict necesare, de analiză și de marketing, durata fiecăruia, furnizorii terți și modul în care îți poți retrage consimțământul.",
      ]},
    ],
  },
];
