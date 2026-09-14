// TODO(real): sursa devine Medusa / PocketBase. Structura rămâne aceeași,
// se schimbă doar de unde vin datele (import static -> fetch în SSR).

export type Product = {
  slug: string;
  name: string;          // nume descriptiv-tehnic: obiect + material + dimensiuni
  category: Category;
  room: string[];
  occasion: string[];
  price: number;
  oldPrice?: number;
  stock: "stoc" | "comanda";
  leadTime?: string;
  dims: string;
  weight: string;
  finish: string;
  image: string;
  short: string;
  description: string[]; // clientul a cerut explicit explicații detaliate
  specs: [string, string][];
  featured?: boolean;
  new?: boolean;
};

export const CATEGORIES = [
  { slug: "decor",     label: "Vaze și obiecte de masă", blurb: "Vaze, boluri, tăvi și cutii, scobite dintr-o singură bucată." },
  { slug: "sculpturi", label: "Sculpturi și figurine",   blurb: "Animale și forme tăiate manual, fiecare cu altă vinișoară." },
  { slug: "birou",     label: "Birou și protocol",       blurb: "Piese mici pentru birou, care se pot grava cu nume sau logo." },
  { slug: "iluminat",  label: "Sfeșnice și lumină",      blurb: "Onixul e translucid. Cu o flacără în spate, se aprinde tot." },
  { slug: "servire",   label: "Servirea mesei",          blurb: "Cupe, platouri și suporturi. Piatra ține rece fără gheață." },
  { slug: "jocuri",    label: "Jocuri și șah",           blurb: "Table și piese șlefuite pe ambele fețe, din două culori de piatră." },
  { slug: "mobilier",  label: "Mobilier din onix",       blurb: "Măsuțe cu blat tăiat dintr-un bloc, la comandă." },
] as const;

export type Category = (typeof CATEGORIES)[number]["slug"];

export const ROOMS = ["Living", "Birou", "Dining", "Hol", "Dormitor", "Baie"];
export const OCCASIONS = ["Nuntă", "Aniversare", "Mutare în casă", "Protocol", "Crăciun"];

const UNIC = "Fiecare piesă se taie din alt bloc, așa că desenul vinișoarei nu se repetă. Fotografia arată o bucată reprezentativă, nu exemplarul pe care îl primiți.";
const LUMINA = "Onixul e translucid. Pus lângă o fereastră sau o lampă, lasă lumina să treacă prin el și își schimbă culoarea în funcție de oră.";
const GRIJA = "Se șterge cu o cârpă moale umezită. Fără oțet, fără detergent acid, fără soluții de geamuri, pentru că mătuiesc luciul.";

export const PRODUCTS: Product[] = [

  /* ---------------------------------------------------------- DECOR */
  {
    slug: "vaza-sferica-onix-verde", name: "Vază sferică din onix verde natural, Ø 24 × H 22 cm",
    category: "decor", room: ["Living", "Dining", "Hol"], occasion: ["Nuntă", "Mutare în casă"],
    price: 890, stock: "stoc", dims: "Ø 24 × H 22 cm · gură Ø 9 cm", weight: "5,4 kg",
    finish: "Lustruit lucios exterior, mat în interior", image: "/img/produse/vaza-onix.jpg",
    short: "Scobită dintr-o singură bucată, cu pereți de 12 mm care lasă lumina să treacă.",
    description: [
      "Vaza se scobește dintr-un bloc plin, nu se asamblează din două jumătăți lipite. Peretele rămâne la aproximativ 12 mm: suficient de subțire cât să se vadă lumina prin el la contralumină, suficient de gros cât să nu crape la apă rece.",
      "Interiorul rămâne mat, ca să nu alunece tulpinile. Pentru flori tăiate recomandăm un tub de sticlă în interior, altfel apa lasă în timp un inel pe piatră.",
      LUMINA, UNIC,
    ],
    specs: [["Material", "Onix verde natural"], ["Grosime perete", "circa 12 mm"], ["Gura vazei", "Ø 9 cm"], ["Greutate", "5,4 kg"], ["Întreținere", "Cârpă umedă, fără detergent acid"]],
    featured: true,
  },
  {
    slug: "vaza-cilindrica-onix", name: "Vază cilindrică din onix verde, Ø 12 × H 32 cm",
    category: "decor", room: ["Living", "Hol", "Dormitor"], occasion: ["Nuntă", "Mutare în casă"],
    price: 740, stock: "stoc", dims: "Ø 12 × H 32 cm", weight: "4,1 kg",
    finish: "Lustruit lucios, muchie superioară dreaptă", image: "/img/produse/vaza-cilindrica.jpg",
    short: "Formă dreaptă, fără gât. Merge pentru trei tulpini, nu pentru buchet.",
    description: [
      "Cilindrul se strunjește dintr-un bloc, apoi se găurește pe toată înălțimea cu o carotă de 9 cm. Cele două operații se fac pe aceeași mașină, fără să se scoată piesa din mandrină, ca gaura să iasă perfect centrată.",
      "E gândită pentru două-trei tulpini înalte, nu pentru buchet. Fiind îngustă și grea la bază, nu se răstoarnă nici cu flori mari.",
      LUMINA, UNIC,
    ],
    specs: [["Material", "Onix verde natural"], ["Diametru interior", "9 cm"], ["Înălțime", "32 cm"], ["Greutate", "4,1 kg"], ["Bază", "Șlefuită mat, antiderapantă"]],
    new: true,
  },
  {
    slug: "bol-onix-fructe-decorative", name: "Bol din onix cu 7 fructe decorative, Ø 26 cm",
    category: "decor", room: ["Living", "Dining"], occasion: ["Mutare în casă", "Nuntă"],
    price: 1150, stock: "stoc", dims: "Bol Ø 26 × H 8 cm · fructe H 5-9 cm", weight: "6,1 kg",
    finish: "Lustruit lucios", image: "/img/produse/bol-fructe-onix.jpg",
    short: "Un bol scobit dintr-o bucată și șapte fructe sculptate: pere, struguri și o gutuie.",
    description: [
      "Bolul se scobește dintr-un bloc plin și se lustruiește până la luciu. Baza rămâne șlefuită mat, ca să nu alunece pe blat.",
      "Cele șapte fructe sunt sculptate separat, fiecare din alt fragment de piatră: două pere, un ciorchine, o gutuie și trei prune. Se pot aranja în bol sau împrăștiate pe masă.",
      UNIC,
    ],
    specs: [["Material", "Onix verde și fildeș"], ["Bol", "Ø 26 × H 8 cm"], ["Fructe", "7 bucăți, H 5-9 cm"], ["Greutate", "6,1 kg"], ["Bază", "Șlefuită mat"]],
    featured: true,
  },
  {
    slug: "struguri-decorativi-onix", name: "Ciorchine decorativ din onix cu codiță din alamă, L 18 cm",
    category: "decor", room: ["Living", "Dining"], occasion: ["Aniversare", "Crăciun"],
    price: 380, stock: "stoc", dims: "L 18 × l 10 cm · 24 boabe", weight: "1,4 kg",
    finish: "Boabe lustruite, codiță din alamă brunată", image: "/img/produse/struguri-onix.jpg",
    short: "Douăzeci și patru de boabe strunjite separat, înșirate pe sârmă de alamă.",
    description: [
      "Fiecare boabă se strunjește separat și se găurește pe centru, apoi se înșiră pe sârmă de alamă îmbrăcată. Boabele au mărimi ușor diferite, intenționat, altfel ciorchinele arată ca o jucărie de plastic.",
      "Se așază pe o farfurie plată sau într-un bol. Se poate așeza și direct pe față de masă, dar atunci trebuie pusă o bucată de fetru sub sârmă.",
      UNIC,
    ],
    specs: [["Material", "Onix verde + alamă"], ["Boabe", "24 bucăți"], ["Lungime", "18 cm"], ["Greutate", "1,4 kg"], ["Ambalare", "Cutie cu burete decupat"]],
  },
  {
    slug: "vas-bijuterii-onix", name: "Vas pentru bijuterii din onix verde, Ø 12 × H 3 cm",
    category: "decor", room: ["Dormitor", "Baie", "Hol"], occasion: ["Aniversare", "Crăciun"],
    price: 190, stock: "stoc", dims: "Ø 12 × H 3 cm", weight: "0,6 kg",
    finish: "Lustruit lucios, fund plan", image: "/img/produse/vas-bijuterii.jpg",
    short: "Adâncime mică, fund plat. Verighetele nu se rostogolesc și nu se zgârie.",
    description: [
      "Scobitura are doar 18 mm adâncime și fundul perfect plan, ca inelele să stea nemișcate în loc să alunece spre margine. E detaliul care face diferența față de un vas generic.",
      "Marginea se rotunjește la 2 mm, altfel taie degetul când scoți ceva din vas.",
      GRIJA,
    ],
    specs: [["Material", "Onix verde natural"], ["Diametru", "12 cm"], ["Adâncime", "18 mm"], ["Greutate", "0,6 kg"], ["Personalizare", "Gravură pe fund, la cerere"]],
  },
  {
    slug: "tava-dreptunghiulara-onix", name: "Tavă dreptunghiulară din onix verde, 30 × 18 cm",
    category: "decor", room: ["Dormitor", "Baie", "Living"], occasion: ["Nuntă", "Mutare în casă"],
    price: 420, stock: "stoc", dims: "30 × 18 × H 2 cm", weight: "2,2 kg",
    finish: "Lustruit lucios, muchie teșită", image: "/img/produse/tava-onix.jpg",
    short: "Placă de 20 mm cu muchii teșite. Pentru parfumuri, chei sau o sticlă de whisky.",
    description: [
      "Se taie dintr-o placă de 20 mm și se teșește pe toate cele patru muchii, la 45 de grade. Teșitura prinde lumina și face ca piesa să nu arate ca o bucată de gresie.",
      "Are patru tampoane de fetru pe spate. Suportă greutate: o folosim și pentru sticle, nu doar pentru flacoane.",
      UNIC,
    ],
    specs: [["Material", "Onix verde natural"], ["Dimensiuni", "30 × 18 cm"], ["Grosime", "20 mm"], ["Greutate", "2,2 kg"], ["Spate", "Tampoane de fetru"]],
  },
  {
    slug: "cutie-bijuterii-onix", name: "Cutie de bijuterii din onix cu capac, 14 × 10 × 7 cm",
    category: "decor", room: ["Dormitor"], occasion: ["Nuntă", "Aniversare"],
    price: 560, stock: "comanda", leadTime: "2-3 săptămâni", dims: "14 × 10 × H 7 cm", weight: "2,8 kg",
    finish: "Lustruit lucios, interior căptușit cu catifea", image: "/img/produse/cutie-bijuterii.jpg",
    short: "Corp și capac tăiate din același bloc, ca desenul să continue când o închizi.",
    description: [
      "Corpul și capacul se taie unul după altul din aceeași bucată. Când cutia e închisă, vinișoara continuă fără rupere de pe corp pe capac. Din cauza asta se lucrează la comandă și nu putem ține stoc.",
      "Interiorul se căptușește cu catifea verde închis, lipită pe un cadru de lemn care intră presat, nu direct pe piatră.",
      GRIJA,
    ],
    specs: [["Material", "Onix verde natural"], ["Dimensiuni", "14 × 10 × 7 cm"], ["Interior", "Catifea pe cadru de lemn"], ["Greutate", "2,8 kg"], ["Termen", "2-3 săptămâni"]],
    featured: true,
  },
  {
    slug: "ou-decorativ-onix", name: "Ou decorativ din onix pe suport de alamă, H 9 cm",
    category: "decor", room: ["Birou", "Living"], occasion: ["Crăciun", "Aniversare"],
    price: 240, stock: "stoc", dims: "Ou Ø 6 × H 8 cm · cu suport H 9 cm", weight: "0,7 kg",
    finish: "Lustruit lucios, suport din alamă brunată", image: "/img/produse/ou-onix.jpg",
    short: "Strunjit pe strung, nu șlefuit manual. Forma e exactă, fără turtiri.",
    description: [
      "Oul se strunjește pe strung după un șablon, nu se rotunjește manual. E singura metodă prin care forma iese simetrică pe toate axele; un ou șlefuit de mână are întotdeauna o parte turtită.",
      "Suportul din alamă are trei brațe și un inel de fetru pe interior, ca oul să nu se zgârie când se ridică și se pune la loc.",
      LUMINA,
    ],
    specs: [["Material", "Onix verde + alamă"], ["Ou", "Ø 6 × H 8 cm"], ["Greutate", "0,7 kg"], ["Suport", "Alamă brunată, cu fetru"], ["Ambalare", "Cutie cadou"]],
  },
  {
    slug: "set-baie-onix", name: "Set de baie din onix: săpunieră și dozator, 2 piese",
    category: "decor", room: ["Baie"], occasion: ["Mutare în casă", "Nuntă"],
    price: 490, stock: "stoc", dims: "Săpunieră 14 × 10 cm · dozator H 17 cm, 250 ml", weight: "2,4 kg / set",
    finish: "Lustruit lucios, săpunieră cu scurgere", image: "/img/produse/set-baie.jpg",
    short: "Săpunieră cu pantă spre un orificiu de scurgere, ca săpunul să nu stea în apă.",
    description: [
      "Scobitura săpunierei are pantă de două grade spre un orificiu lateral. Fără panta asta, apa stă și săpunul se topește în câteva zile, iar piatra prinde un inel alb.",
      "Dozatorul are corpul din onix și pompa din inox, nu din plastic cromat. Se desface pentru reumplere, nu e lipită.",
      "Onixul e o piatră poroasă. În baie recomandăm o impregnare cu soluție pentru marmură o dată pe an, o aplicați singuri în zece minute.",
    ],
    specs: [["Material", "Onix verde + inox"], ["Săpunieră", "14 × 10 cm, cu scurgere"], ["Dozator", "250 ml"], ["Greutate", "2,4 kg / set"], ["Recomandat", "Impregnare anuală"]],
    new: true,
  },

  /* ----------------------------------------------------- SCULPTURI */
  {
    slug: "elefant-sculptat-onix-verde", name: "Elefant sculptat din onix verde, 18 × 12 cm",
    category: "sculpturi", room: ["Birou", "Living", "Hol"], occasion: ["Aniversare", "Mutare în casă"],
    price: 540, stock: "stoc", dims: "L 18 × H 12 × l 7 cm", weight: "2,3 kg",
    finish: "Lustruit lucios, detalii șlefuite mat", image: "/img/produse/elefant-onix.jpg",
    short: "Sculptat dintr-o bucată, cu pătura de pe spate lăsată în zona cu vinișoară de caramel.",
    description: [
      "Sculptorul alege fragmentul astfel încât banda de caramel din piatră să cadă exact pe pătura de pe spatele elefantului. Din acest motiv niciun exemplar nu are pătura la fel.",
      "Trompa ridicată e partea cea mai fragilă și se sculptează la final, cu unealtă fină. Verificați-o la recepție, deși piesele se ambalează în spumă turnată.",
      UNIC,
    ],
    specs: [["Material", "Onix verde natural"], ["Dimensiuni", "L 18 × H 12 × l 7 cm"], ["Greutate", "2,3 kg"], ["Finisaj", "Lustruit, detalii mate"], ["Ambalare", "Spumă turnată + cutie"]],
    featured: true,
  },
  {
    slug: "leu-sculptat-onix-verde", name: "Leu sculptat din onix verde, 22 × 14 cm",
    category: "sculpturi", room: ["Birou", "Hol"], occasion: ["Protocol", "Aniversare"],
    price: 680, stock: "comanda", leadTime: "2-3 săptămâni", dims: "L 22 × H 14 × l 8 cm", weight: "3,6 kg",
    finish: "Lustruit lucios, coamă șlefuită mat", image: "/img/produse/leu-onix.jpg",
    short: "Coama rămâne mată, corpul lustruit. Contrastul dintre finisaje desenează silueta.",
    description: [
      "Piesa folosește un singur truc, dar esențial: coama se lasă șlefuită mat, iar corpul se lustruiește lucios. Diferența de reflexie dintre cele două zone dă volumul, fără să fie nevoie de detalii săpate adânc.",
      "Se sculptează dintr-un fragment gros, ales pentru benzile de caramel care traversează corpul pe diagonală.",
      UNIC,
    ],
    specs: [["Material", "Onix verde natural"], ["Dimensiuni", "L 22 × H 14 × l 8 cm"], ["Greutate", "3,6 kg"], ["Finisaj", "Lustruit + mat pe coamă"], ["Termen", "2-3 săptămâni"]],
  },
  {
    slug: "bufnita-sculptata-onix", name: "Bufniță sculptată din onix verde, H 13 cm",
    category: "sculpturi", room: ["Birou", "Living"], occasion: ["Aniversare", "Crăciun"],
    price: 390, stock: "stoc", dims: "H 13 × Ø bază 7 cm", weight: "1,5 kg",
    finish: "Corp lustruit, pene sugerate prin șlefuire mată", image: "/img/produse/bufnita-onix.jpg",
    short: "Ochii se taie în zona cea mai închisă a pietrei, nu se pictează și nu se incrustează.",
    description: [
      "Sculptorul caută în bloc o pată închisă și o poziționează pe ochi. Nu incrustăm și nu pictăm nimic, așa că fiecare bufniță se uită puțin altfel.",
      "Penele nu sunt săpate, sunt doar sugerate prin zone mate pe corpul lustruit. La o piesă de 13 cm, detaliul săpat adânc ar ciobi la prima lovitură.",
      UNIC,
    ],
    specs: [["Material", "Onix verde natural"], ["Înălțime", "13 cm"], ["Greutate", "1,5 kg"], ["Finisaj", "Lustruit + zone mate"], ["Ambalare", "Cutie cadou"]],
  },
  {
    slug: "piramida-onix-verde", name: "Piramidă din onix verde, bază 12 × 12 cm",
    category: "sculpturi", room: ["Birou"], occasion: ["Protocol", "Crăciun"],
    price: 290, stock: "stoc", dims: "Bază 12 × 12 × H 11 cm", weight: "1,7 kg",
    finish: "Lustruit lucios pe toate cele patru fețe", image: "/img/produse/piramida-onix.jpg",
    short: "Patru fețe lustruite și muchii vii. Cea mai bună piesă pentru a vedea lumina prin onix.",
    description: [
      "Piramida se taie din bloc cu unghiuri fixe și se lustruiește pe toate cele patru fețe. Muchiile rămân vii, nu rotunjite, pentru că aici linia dreaptă e tot desenul.",
      "Pusă pe un birou cu lumină dinspre spate, banda de caramel se aprinde și se vede prin toată piesa. E cel mai simplu obiect din catalog pentru a înțelege ce înseamnă piatră translucidă.",
      LUMINA,
    ],
    specs: [["Material", "Onix verde natural"], ["Bază", "12 × 12 cm"], ["Înălțime", "11 cm"], ["Greutate", "1,7 kg"], ["Personalizare", "Gravură pe bază, la cerere"]],
    featured: true,
  },
  {
    slug: "inima-onix", name: "Inimă din onix verde, 10 × 9 cm",
    category: "sculpturi", room: ["Living", "Dormitor", "Birou"], occasion: ["Nuntă", "Aniversare"],
    price: 230, stock: "stoc", dims: "10 × 9 × gros. 4 cm", weight: "0,8 kg",
    finish: "Lustruit lucios pe ambele fețe", image: "/img/produse/inima-onix.jpg",
    short: "Grosime de 4 cm, ca să stea în picioare pe o margine plană tăiată la bază.",
    description: [
      "Baza se taie plan pe o lungime de 3 cm, ca inima să stea singură pe masă fără suport. E o modificare mică, dar fără ea piesa se culcă și nu se mai vede forma.",
      "Ambele fețe se lustruiesc, pentru că se folosește des ca greutate de hârtie și se vede și pe dos.",
      LUMINA, UNIC,
    ],
    specs: [["Material", "Onix verde natural"], ["Dimensiuni", "10 × 9 cm"], ["Grosime", "4 cm"], ["Greutate", "0,8 kg"], ["Personalizare", "Gravură pe spate, la cerere"]],
  },

  /* --------------------------------------------------------- BIROU */
  {
    slug: "suport-pixuri-onix", name: "Suport de pixuri din onix verde, Ø 9 × H 11 cm",
    category: "birou", room: ["Birou"], occasion: ["Protocol", "Crăciun"],
    price: 310, stock: "stoc", dims: "Ø 9 × H 11 cm", weight: "1,6 kg",
    finish: "Lustruit lucios, interior șlefuit mat", image: "/img/produse/suport-pixuri.jpg",
    short: "Perete gros de 15 mm. E greu intenționat, ca să nu se răstoarne când scoți un pix.",
    description: [
      "Peretele rămâne la 15 mm și baza la 20 mm. Piesa cântărește 1,6 kg goală, ceea ce pare mult pentru un suport de pixuri, dar e exact motivul pentru care nu se răstoarnă niciodată.",
      "Interiorul se lasă mat și se căptușește la bază cu un disc de fetru, ca vârfurile de pix să nu zgârie piatra și să nu facă zgomot.",
      GRIJA,
    ],
    specs: [["Material", "Onix verde natural"], ["Dimensiuni", "Ø 9 × H 11 cm"], ["Grosime perete", "15 mm"], ["Greutate", "1,6 kg"], ["Personalizare", "Gravură laterală, la cerere"]],
  },
  {
    slug: "mar-decorativ-onix-codita-alama", name: "Măr decorativ din onix cu codiță și frunză din alamă, H 11 cm",
    category: "birou", room: ["Birou", "Living"], occasion: ["Aniversare", "Crăciun", "Protocol"],
    price: 320, stock: "stoc", dims: "Ø 9 × H 11 cm", weight: "0,9 kg",
    finish: "Lustruit lucios, codiță din alamă brunată", image: "/img/produse/mar-onix.jpg",
    short: "Cadoul care se dă cel mai des. Codița și frunza sunt montate în piatră, nu lipite.",
    description: [
      "Corpul se strunjește dintr-un singur fragment de onix, iar inelul de vinișoară care înconjoară mărul e desenul natural al blocului, nu un efect adăugat.",
      "Codița din alamă se filetează într-un locaș găurit în piatră, nu se lipește. Frunza se bate manual la ciocan, deci nervurile diferă de la o bucată la alta.",
      "Se livrează în cutie cu burete decupat, gata de dat cadou.",
    ],
    specs: [["Material", "Onix natural + alamă"], ["Dimensiuni", "Ø 9 × H 11 cm"], ["Greutate", "0,9 kg"], ["Ambalare", "Cutie cadou cu burete decupat"], ["Personalizare", "Gravură pe bază, la cerere"]],
    featured: true,
  },
  {
    slug: "opritoare-carte-onix", name: "Set 2 opritoare de carte din onix verde, 14 × 12 cm",
    category: "birou", room: ["Birou", "Living"], occasion: ["Protocol", "Aniversare"],
    price: 640, stock: "stoc", dims: "14 × 12 × gros. 4 cm fiecare", weight: "6,4 kg / set",
    finish: "Lustruit lucios, spate șlefuit mat", image: "/img/produse/opritoare-carte.jpg",
    short: "Trei kilograme bucata. Țin un raft întreg fără să alunece, fără cadru metalic.",
    description: [
      "Sunt două blocuri pline de 4 cm grosime, fără cadru metalic ascuns dedesubt. Fiecare cântărește peste trei kilograme, ceea ce înseamnă că țin un raft de cărți groase fără să se împingă.",
      "Fața dinspre cărți rămâne șlefuită mată, ca să aibă aderență. Fața spre exterior se lustruiește, pentru că aia se vede.",
      UNIC,
    ],
    specs: [["Material", "Onix verde natural"], ["Dimensiuni", "14 × 12 cm fiecare"], ["Grosime", "4 cm"], ["Greutate", "3,2 kg bucata"], ["Spate", "Fetru pe toată suprafața"]],
  },
  {
    slug: "ceas-birou-onix", name: "Ceas de birou din onix verde cu mecanism quartz, 14 × 9 cm",
    category: "birou", room: ["Birou"], occasion: ["Protocol", "Aniversare"],
    price: 470, stock: "comanda", leadTime: "2 săptămâni", dims: "14 × 9 × gros. 4 cm", weight: "1,9 kg",
    finish: "Lustruit lucios, cadran fără cifre", image: "/img/produse/ceas-birou.jpg",
    short: "Cadran fără cifre, doar limbi de alamă. Piatra rămâne singurul lucru de privit.",
    description: [
      "Cadranul nu are cifre și nici index. Pe un cadran de onix, orice marcaj tipărit intră în conflict cu vinișoara și arată dezordonat, așa că am lăsat doar două limbi de alamă.",
      "Mecanismul quartz se montează într-un locaș frezat pe spate și se închide cu un capac de fetru. Bateria se schimbă fără unelte.",
      "Se poate grava pe marginea de jos, cu nume sau dată. E piesa cea mai cerută pentru pensionări și aniversări de firmă.",
    ],
    specs: [["Material", "Onix verde + alamă"], ["Dimensiuni", "14 × 9 cm"], ["Mecanism", "Quartz, baterie AA"], ["Greutate", "1,9 kg"], ["Personalizare", "Gravură pe muchia inferioară"]],
  },
  {
    slug: "vas-chei-onix", name: "Vas pătrat pentru chei din onix verde, 16 × 16 cm",
    category: "birou", room: ["Hol", "Birou"], occasion: ["Mutare în casă"],
    price: 280, stock: "stoc", dims: "16 × 16 × H 4 cm", weight: "1,8 kg",
    finish: "Lustruit lucios, interior mat", image: "/img/produse/vas-chei.jpg",
    short: "Pătrat, cu colțuri vii. Se pune la intrare și adună tot ce ai în buzunare.",
    description: [
      "Colțurile rămân vii, nu rotunjite. Un vas pătrat cu colțuri rotunjite arată ca o scrumieră, iar noi nu facem scrumiere.",
      "Scobitura are 25 mm și fundul mat, ca să nu zăngăne cheile. Pe spate are fetru pe toată suprafața, nu doar în colțuri, ca să nu marcheze consola de la intrare.",
      GRIJA,
    ],
    specs: [["Material", "Onix verde natural"], ["Dimensiuni", "16 × 16 cm"], ["Adâncime", "25 mm"], ["Greutate", "1,8 kg"], ["Spate", "Fetru pe toată suprafața"]],
  },

  /* ------------------------------------------------------ ILUMINAT */
  {
    slug: "sfesnice-pereche-onix", name: "Pereche de sfeșnice din onix verde, H 22 cm",
    category: "iluminat", room: ["Dining", "Living"], occasion: ["Nuntă", "Crăciun"],
    price: 620, stock: "stoc", dims: "H 22 × Ø bază 9 cm · locaș Ø 22 mm", weight: "3,2 kg / pereche",
    finish: "Lustruit lucios, locaș căptușit cu alamă", image: "/img/produse/sfesnice-pereche.jpg",
    short: "Locașul e căptușit cu un inel de alamă, ca ceara să nu intre în porii pietrei.",
    description: [
      "Locașul de 22 mm are un inel de alamă presat în el. Fără inel, ceara topită intră în porii onixului și lasă o pată gălbuie care nu mai iese niciodată.",
      "Cele două sfeșnice se strunjesc unul după altul din același bloc, ca să iasă pereche la desen. Dacă se sparge unul, nu putem reface exact aceeași piatră.",
      LUMINA,
    ],
    specs: [["Material", "Onix verde + alamă"], ["Înălțime", "22 cm"], ["Locaș lumânare", "Ø 22 mm, cu inel de alamă"], ["Greutate", "3,2 kg / pereche"], ["Bucăți", "2, pereche din același bloc"]],
    featured: true,
  },
  {
    slug: "suport-lumanare-onix", name: "Suport pentru lumânare pastilă din onix, Ø 8 cm",
    category: "iluminat", room: ["Living", "Dining", "Baie"], occasion: ["Crăciun", "Aniversare"],
    price: 130, stock: "stoc", dims: "Ø 8 × H 4 cm", weight: "0,4 kg",
    finish: "Lustruit lucios, perete subțire", image: "/img/produse/suport-lumanare.jpg",
    short: "Perete de 7 mm. Cu lumânarea aprinsă, se aprinde toată piatra din interior.",
    description: [
      "Peretele se subțiază la 7 mm, cât se poate fără să crape la căldură. La grosimea asta, o singură pastilă aprinsă luminează toată piesa din interior și se văd straturile pietrei ca într-o radiografie.",
      "E cel mai ieftin obiect din catalog și, sincer, cel mai spectaculos seara. Multă lume ia patru deodată pentru masă.",
      "Nu se lasă aprinsă nesupravegheat și nu se pune direct pe față de masă, pentru că baza se încălzește.",
    ],
    specs: [["Material", "Onix verde natural"], ["Dimensiuni", "Ø 8 × H 4 cm"], ["Grosime perete", "7 mm"], ["Greutate", "0,4 kg"], ["Pentru", "Lumânare pastilă standard"]],
  },
  {
    slug: "lampa-masa-onix", name: "Lampă de masă cu abajur din onix translucid, H 38 cm",
    category: "iluminat", room: ["Living", "Dormitor", "Birou"], occasion: ["Mutare în casă", "Nuntă"],
    price: 1680, stock: "comanda", leadTime: "3-4 săptămâni", dims: "H 38 × Ø abajur 16 cm", weight: "5,8 kg",
    finish: "Abajur șlefuit la 6 mm, bază din alamă", image: "/img/produse/lampa-onix.jpg",
    short: "Abajurul se subțiază la 6 mm. Aprinsă, piatra devine sursa de lumină.",
    description: [
      "Abajurul se carotează dintr-un bloc și se subțiază la 6 mm de jur împrejur, controlat cu ceasul comparator. Sub 5 mm piatra crapă la căldură, peste 8 mm nu mai trece destulă lumină. E piesa cea mai grea de făcut din tot catalogul.",
      "Bec recomandat: LED de maximum 6 W, alb cald. Un bec cu incandescență încălzește piatra prea tare și, în timp, lărgește fisurile naturale.",
      "Baza e din alamă masivă strunjită, cu întrerupător pe fir și cablu textil de 1,8 m.",
    ],
    specs: [["Material", "Onix verde + alamă"], ["Înălțime", "38 cm"], ["Grosime abajur", "6 mm"], ["Bec", "E27, LED max. 6 W"], ["Cablu", "Textil, 1,8 m, cu întrerupător"]],
    new: true,
  },

  /* ------------------------------------------------------- SERVIRE */
  {
    slug: "set-6-cupe-onix-verde", name: "Set 6 cupe din onix verde, H 14 cm, 180 ml",
    category: "servire", room: ["Dining", "Living"], occasion: ["Nuntă", "Protocol", "Crăciun"],
    price: 1280, oldPrice: 1490, stock: "stoc", dims: "H 14 cm · Ø gură 6,5 cm · 180 ml", weight: "3,8 kg / set",
    finish: "Lustruit lucios, interior șlefuit fin", image: "/img/produse/cupe-onix.jpg",
    short: "Șase cupe strunjite individual, fiecare cu alt desen. Piatra ține rece aproape o oră.",
    description: [
      "Fiecare cupă se strunjește separat dintr-un cilindru de onix, apoi se scobește și se lustruiește. Din acest motiv nu există două cupe identice în set, iar asta e intenționat.",
      "Onixul are inerție termică mare. Ținute 20 de minute în frigider înainte de servire, cupele păstrează băutura rece aproximativ o oră fără gheață.",
      "Nu se spală în mașina de vase. Detergenții cu pH scăzut mătuiesc luciul în câteva cicluri.",
    ],
    specs: [["Material", "Onix verde natural"], ["Capacitate", "180 ml"], ["Bucăți", "6"], ["Greutate", "3,8 kg / set"], ["Întreținere", "Spălare manuală, apă călduță"]],
    featured: true,
  },
  {
    slug: "coastere-onix", name: "Set 6 suporturi de pahar din onix verde, Ø 10 cm",
    category: "servire", room: ["Living", "Dining"], occasion: ["Mutare în casă", "Crăciun"],
    price: 340, stock: "stoc", dims: "Ø 10 × gros. 1 cm", weight: "1,9 kg / set",
    finish: "Lustruit lucios, spate cu fetru", image: "/img/produse/coastere-onix.jpg",
    short: "Șase discuri tăiate din aceeași placă. Puse unul lângă altul, desenul se continuă.",
    description: [
      "Cele șase discuri se taie din aceeași placă, unul lângă altul. Dacă le așezați în ordinea din cutie, vinișoara trece de pe unul pe celălalt. E un detaliu pe care nu îl observă nimeni din prima, dar care se vede imediat ce îl afli.",
      "Spatele are fetru lipit pe toată suprafața, nu doar patru puncte. Fără asta, un suport de piatră zgârie blatul mai rău decât paharul pe care îl protejează.",
      UNIC,
    ],
    specs: [["Material", "Onix verde natural"], ["Diametru", "10 cm"], ["Grosime", "10 mm"], ["Bucăți", "6, din aceeași placă"], ["Spate", "Fetru pe toată suprafața"]],
  },
  {
    slug: "platou-oval-onix", name: "Platou oval de servire din onix verde, 36 × 24 cm",
    category: "servire", room: ["Dining", "Living"], occasion: ["Nuntă", "Crăciun"],
    price: 690, stock: "stoc", dims: "36 × 24 × gros. 1,8 cm", weight: "4,3 kg",
    finish: "Lustruit lucios, muchie rotunjită", image: "/img/produse/platou-onix.jpg",
    short: "Se ține la frigider o oră înainte și brânza rămâne rece pe toată masa.",
    description: [
      "Se taie dintr-o placă de 18 mm, cu muchia rotunjită la 4 mm ca să nu ciobească și să nu taie mâna la spălat.",
      "Ținut o oră la frigider înainte de servire, platoul rămâne rece câteva ore. Merge pentru brânzeturi, mezeluri și deserturi, nu pentru mâncare fierbinte.",
      "Nu se taie direct pe el. Onixul are duritate 3 pe scara Mohs, iar un cuțit lasă urme vizibile.",
    ],
    specs: [["Material", "Onix verde natural"], ["Dimensiuni", "36 × 24 cm"], ["Grosime", "18 mm"], ["Greutate", "4,3 kg"], ["Atenție", "Nu se taie direct pe suprafață"]],
  },
  {
    slug: "mojar-pistil-onix", name: "Mojar cu pistil din onix verde, Ø 13 cm",
    category: "servire", room: ["Dining"], occasion: ["Mutare în casă", "Aniversare"],
    price: 450, stock: "stoc", dims: "Mojar Ø 13 × H 8 cm · pistil L 15 cm", weight: "3,1 kg",
    finish: "Exterior lustruit, interior șlefuit mat", image: "/img/produse/mojar-onix.jpg",
    short: "Interiorul rămâne mat intenționat. Pe piatră lustruită, boabele alunecă în loc să se sfărâme.",
    description: [
      "Interiorul se oprește la granulația 400 și nu se lustruiește. E singura piesă din catalog la care oprim finisajul devreme, pentru că pe o suprafață lucioasă condimentele alunecă în loc să se macine.",
      "Pistilul se strunjește din același bloc și se termină cu un cap bombat, tot mat. Greutatea lui, aproape 400 de grame, face jumătate din treabă singură.",
      "Se spală doar cu apă caldă, fără detergent. Piatra poroasă reține mirosul de detergent și îl dă mai departe condimentelor.",
    ],
    specs: [["Material", "Onix verde natural"], ["Mojar", "Ø 13 × H 8 cm"], ["Pistil", "L 15 cm, 390 g"], ["Greutate totală", "3,1 kg"], ["Întreținere", "Doar apă caldă, fără detergent"]],
  },

  /* -------------------------------------------------------- JOCURI */
  {
    slug: "set-sah-onix-marmura-40cm", name: "Set de șah din onix verde și marmură albă, tablă 40 × 40 cm",
    category: "jocuri", room: ["Living", "Birou"], occasion: ["Aniversare", "Crăciun", "Protocol"],
    price: 1450, stock: "stoc", dims: "Tablă 40 × 40 × 1,5 cm · rege H 8 cm", weight: "9,2 kg",
    finish: "Lustruit pe ambele fețe", image: "/img/produse/set-sah-onix.jpg",
    short: "32 de piese strunjite manual, tablă lustruită pe ambele fețe, cu sac de catifea inclus.",
    description: [
      "Piesele se strunjesc una câte una, nu se toarnă. Diferențele de desen între piese vin din blocul din care au fost tăiate și sunt cel mai simplu test că setul e din piatră, nu din rășină.",
      "Tabla se lustruiește pe ambele fețe, ca să poată fi folosită și ca platou de servire când nu se joacă. Marginea are 15 mm și nu are fâșie de lipire vizibilă.",
      "Se livrează cu sac de catifea căptușit, în care piesele stau separat și nu se ciocnesc la transport.",
    ],
    specs: [["Material tablă", "Onix verde și marmură albă"], ["Pătrat", "45 × 45 mm"], ["Rege", "H 8 cm, bază Ø 3 cm"], ["Greutate totală", "9,2 kg"], ["Inclus", "32 piese + sac de catifea"]],
    featured: true,
  },
  {
    slug: "masa-sah-onix-picior-sculptat", name: "Masă de șah din onix verde cu picior sculptat, Ø 60 × H 72 cm",
    category: "jocuri", room: ["Living", "Birou"], occasion: ["Aniversare", "Protocol"],
    price: 4200, stock: "comanda", leadTime: "4-6 săptămâni", dims: "Ø 60 × H 72 cm", weight: "38 kg",
    finish: "Lustruit lucios, tabla incrustată în blat", image: "/img/produse/masa-sah-onix.jpg",
    short: "Tabla de șah este incrustată în blat, din pătrate alternante de onix verde și fildeș.",
    description: [
      "Cele 64 de pătrate se taie separat și se incrustează în blat, nu se pictează. Suprafața se lustruiește după incrustare, așa că trecerea dintre pătrate se simte perfect plană la mână.",
      "Piciorul central se strunjește manual dintr-un bloc cilindric și se termină într-o bază circulară grea, care ține masa fixă chiar dacă te sprijini în marginea blatului.",
      UNIC,
    ],
    specs: [["Material", "Onix verde și onix fildeș"], ["Tabla", "Incrustată, pătrat 55 × 55 mm"], ["Greutate", "38 kg"], ["Piese incluse", "Nu, se comandă separat"], ["Livrare", "Cu asigurare, cu mașina noastră"]],
  },

  /* ------------------------------------------------------ MOBILIER */
  {
    slug: "masuta-rotunda-onix-verde-baza-alama", name: "Măsuță rotundă din onix verde cu bază tripod din alamă, Ø 45 × H 55 cm",
    category: "mobilier", room: ["Living", "Dormitor"], occasion: ["Mutare în casă", "Nuntă"],
    price: 2850, stock: "comanda", leadTime: "3-4 săptămâni", dims: "Ø 45 × H 55 cm", weight: "14,5 kg",
    finish: "Lustruit lucios, muchie teșită 3 mm", image: "/img/produse/masuta-onix-alama.jpg",
    short: "Blat tăiat dintr-un singur bloc, montat pe un tripod din alamă masivă lustruită.",
    description: [
      "Blatul se taie dintr-un singur bloc de onix verde, se șlefuiește în șapte trepte de granulație și se lustruiește până la luciu de oglindă. Muchia se teșește la 3 mm ca să nu ciobească la lovituri ușoare.",
      "Baza tripod e din alamă masivă, nu din tablă îndoită. Picioarele se înșurubează în flanșa centrală, iar la capete are tampoane de fetru care nu zgârie parchetul.",
      UNIC, LUMINA,
    ],
    specs: [["Material blat", "Onix verde natural"], ["Material bază", "Alamă masivă lustruită"], ["Grosime blat", "20 mm"], ["Greutate", "14,5 kg"], ["Montaj", "Se livrează demontat, 5 minute"]],
    featured: true,
  },
  {
    slug: "masuta-coloana-onix-verde", name: "Măsuță coloană din onix verde, Ø 48 × H 58 cm",
    category: "mobilier", room: ["Living", "Hol"], occasion: ["Mutare în casă"],
    price: 3100, oldPrice: 3450, stock: "comanda", leadTime: "3-4 săptămâni", dims: "Ø 48 × H 58 cm", weight: "26 kg",
    finish: "Lustruit lucios, coloană cu inele strunjite", image: "/img/produse/masuta-coloana-onix.jpg",
    short: "Coloană strunjită cu inele, din același bloc ca blatul, ca desenul să continue de sus în jos.",
    description: [
      "Blatul și coloana se taie din același bloc, ca vinișoara să continue fără rupere de la suprafață spre picior. E singurul mod de a obține continuitate de desen, și motivul pentru care piesa se face la comandă.",
      "Inelele de pe coloană se strunjesc manual, unul câte unul. Diferențele de câțiva milimetri între ele sunt normale și sunt semnul că piesa nu e turnată.",
      UNIC,
    ],
    specs: [["Material", "Onix verde natural, bloc unic"], ["Grosime blat", "25 mm"], ["Greutate", "26 kg"], ["Bază", "Disc din onix, Ø 32 cm"], ["Livrare", "Cu asigurare"]],
  },
];

export const lei = (n: number) =>
  n.toLocaleString("ro-RO", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " Lei";

export const byCategory = (slug: string) => PRODUCTS.filter((p) => p.category === slug);
export const featured = () => PRODUCTS.filter((p) => p.featured);
export const fresh = () => PRODUCTS.filter((p) => p.new);
