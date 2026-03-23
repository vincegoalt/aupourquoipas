export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubtitle: string;
  icon: string;
  pricing: { label: string; price: string; note?: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "ateliers-respiration-coherence-cardiaque",
    name: "Ateliers Respiration & Cohérence Cardiaque",
    shortName: "Respiration & Cohérence",
    description:
      "Apprenez à réguler votre système nerveux autonome grâce à la respiration et à la cohérence cardiaque. Évaluez votre souffle et adoptez une routine respiratoire quotidienne.",
    metaTitle: "Ateliers Cohérence Cardiaque à Mortagne-au-Perche | Au Pour Quoi Pas",
    metaDescription:
      "Découvrez nos ateliers de cohérence cardiaque et respiration à Mortagne-au-Perche. Réduisez votre stress en 5 minutes. Groupes de 6-8 personnes. Dès 30€.",
    heroHeading: "Ateliers Respiration & Cohérence Cardiaque",
    heroSubtitle:
      "Apprenez à réguler votre système nerveux autonome pour transformer votre réponse au stress et retrouver un équilibre intérieur durable.",
    icon: "air",
    pricing: [
      { label: "Initiation groupe", price: "30€", note: "1h15" },
      { label: "Initiation individuel", price: "70€", note: "1h15" },
      { label: "Forfait 5 séances", price: "80€" },
      { label: "Forfait 10 séances", price: "140€" },
    ],
    faqs: [
      {
        question: "Faut-il avoir déjà médité pour participer ?",
        answer:
          "Absolument pas. La cohérence cardiaque est une technique purement physiologique qui ne nécessite aucune expérience préalable en méditation ou yoga. Elle repose sur un rythme respiratoire précis qui agit directement sur votre système nerveux autonome. Tout le monde peut la pratiquer dès la première séance.",
      },
      {
        question: "Combien de temps dure une séance de pratique ?",
        answer:
          "La séance d'initiation dure 1h15. Elle comprend une évaluation de votre respiration, un apprentissage des bases de la cohérence cardiaque et une pratique guidée. Les séances de pratique suivantes sont plus courtes. L'objectif est d'atteindre la règle du « 365 » : 3 fois par jour, 6 respirations par minute, pendant 5 minutes.",
      },
      {
        question: "Quels sont les bienfaits concrets de la cohérence cardiaque ?",
        answer:
          "5 minutes de pratique libèrent pendant 5 heures les neurotransmetteurs du bonheur : dopamine, ocytocine, sérotonine et endorphine. La pratique diminue de 25 % le taux de cortisol (hormone du stress), améliore le sommeil, la digestion, la clarté mentale et régule la tension artérielle.",
      },
      {
        question: "Puis-je pratiquer la cohérence cardiaque chez moi ?",
        answer:
          "Oui, c'est tout l'objectif de nos ateliers : vous donner les outils pour être autonome au quotidien. Après la séance d'initiation, vous aurez toutes les bases pour pratiquer chez vous, au bureau ou même dans les transports. Les séances de suivi permettent d'approfondir et de corriger votre technique.",
      },
    ],
  },
  {
    slug: "ateliers-thematiques",
    name: "Ateliers Thématiques",
    shortName: "Ateliers Thématiques",
    description:
      "Des ateliers trimestriels en groupe sur une thématique choisie : gestion du stress, booster son énergie, réguler ses émotions, améliorer sa clarté mentale.",
    metaTitle: "Ateliers Bien-Être Thématiques en Groupe | Au Pour Quoi Pas",
    metaDescription:
      "Ateliers de groupe thématiques à Mortagne-au-Perche : gestion du stress, énergie, émotions, clarté mentale. 2h d'échange et de pratique. 55€ par atelier.",
    heroHeading: "Ateliers Thématiques",
    heroSubtitle:
      "Des moments de partage trimestriels autour du bien-être, de la connaissance de soi et de la mise en pratique d'outils concrets pour votre quotidien.",
    icon: "spa",
    pricing: [{ label: "Atelier thématique (2h)", price: "55€" }],
    faqs: [
      {
        question: "Quels sont les thèmes abordés ?",
        answer:
          "Les thèmes changent chaque trimestre et couvrent les grands sujets du bien-être au quotidien : gestion du stress, comment booster son énergie, mieux réguler ses émotions, et améliorer sa clarté mentale. Chaque atelier combine un peu de théorie et beaucoup de pratique avec des outils concrets à utiliser chez soi.",
      },
      {
        question: "Faut-il participer à tous les ateliers ?",
        answer:
          "Non, chaque atelier est indépendant. Vous pouvez choisir le thème qui vous parle le plus, ou participer à plusieurs. Il n'y a pas d'ordre ni de prérequis entre les différents ateliers thématiques.",
      },
      {
        question: "Combien de personnes participent à un atelier ?",
        answer:
          "Les groupes sont limités à 6 à 8 personnes maximum. Cette taille réduite garantit une attention personnalisée et permet un véritable échange entre les participants dans un cadre bienveillant et intime.",
      },
      {
        question: "Quels outils pratiques sont enseignés ?",
        answer:
          "Chaque atelier vous donne des outils simples à utiliser au quotidien : exercices de détente, techniques de visualisation, utilisation d'huiles essentielles, exercices de respiration ciblés. L'objectif est que vous repartiez avec des mécanismes concrets applicables immédiatement.",
      },
    ],
  },
  {
    slug: "soins-energetiques",
    name: "Soins Énergétiques",
    shortName: "Soins Énergétiques",
    description:
      "Des séances individuelles de soins énergétiques qui travaillent sur la mémoire cellulaire du corps pour libérer les blocages énergétiques et émotionnels.",
    metaTitle: "Soins Énergétiques à Mortagne-au-Perche | Au Pour Quoi Pas",
    metaDescription:
      "Séances individuelles de soins énergétiques à Mortagne-au-Perche. Libérez vos blocages émotionnels et retrouvez votre vitalité. 65€ la séance.",
    heroHeading: "Soins Énergétiques",
    heroSubtitle:
      "Un rééquilibrage profond pour libérer les tensions accumulées et restaurer votre vitalité naturelle en travaillant sur la mémoire cellulaire du corps.",
    icon: "energy_savings_leaf",
    pricing: [{ label: "Séance individuelle", price: "65€" }],
    faqs: [
      {
        question: "Qu'est-ce qu'un soin énergétique exactement ?",
        answer:
          "Un soin énergétique travaille sur la mémoire cellulaire du corps pour l'aider à libérer des blocages énergétiques et émotionnels. C'est une approche qui considère le lien entre le corps, les émotions et la posture. La séance est douce, non invasive, et vise à rétablir la circulation énergétique naturelle du corps.",
      },
      {
        question: "À qui s'adressent les soins énergétiques ?",
        answer:
          "Les soins énergétiques s'adressent à toute personne ressentant des tensions physiques ou émotionnelles, de la fatigue chronique, des blocages récurrents ou simplement le besoin de se reconnecter à son corps. Il n'y a pas de contre-indication particulière.",
      },
      {
        question: "Combien de séances sont nécessaires ?",
        answer:
          "Cela dépend de chaque personne et de ses besoins. Certaines personnes ressentent un soulagement dès la première séance, d'autres préfèrent un suivi sur plusieurs séances pour un travail en profondeur. Nous en discutons ensemble lors de la première rencontre.",
      },
      {
        question: "Comment se déroule une séance ?",
        answer:
          "La séance commence par un échange pour comprendre vos besoins et votre histoire. Ensuite, vous vous allongez confortablement et le soin se fait par contact léger ou à distance du corps. La séance dure environ une heure et se termine par un temps d'échange sur vos ressentis.",
      },
    ],
  },
  {
    slug: "reflexologie-plantaire",
    name: "Réflexologie Plantaire",
    shortName: "Réflexologie Plantaire",
    description:
      "Des séances de réflexologie plantaire pour harmoniser votre système nerveux, améliorer la digestion, le sommeil et retrouver de l'énergie.",
    metaTitle: "Réflexologie Plantaire à Mortagne-au-Perche | Au Pour Quoi Pas",
    metaDescription:
      "Séances de réflexologie plantaire à Mortagne-au-Perche. Harmonisez votre système nerveux et retrouvez équilibre et énergie. 65€ la séance.",
    heroHeading: "Réflexologie Plantaire",
    heroSubtitle:
      "Une approche holistique par les pieds pour apaiser l'esprit et harmoniser les fonctions de l'organisme.",
    icon: "footprint",
    pricing: [{ label: "Séance individuelle", price: "65€" }],
    faqs: [
      {
        question: "Comment fonctionne la réflexologie plantaire ?",
        answer:
          "La réflexologie plantaire est basée sur le principe que chaque zone du pied correspond à un organe ou une partie du corps. En stimulant ces zones réflexes par des pressions précises, on favorise le rétablissement de l'équilibre naturel de l'organisme et on active les capacités d'auto-guérison du corps.",
      },
      {
        question: "Quels sont les bienfaits de la réflexologie plantaire ?",
        answer:
          "La réflexologie plantaire aide à réduire le stress et les tensions, améliore la qualité du sommeil, favorise une meilleure digestion, soulage certaines douleurs et contribue à un regain d'énergie. Elle agit sur l'ensemble de l'organisme en rétablissant la circulation énergétique.",
      },
      {
        question: "Est-ce que la réflexologie plantaire est douloureuse ?",
        answer:
          "Non, la réflexologie plantaire n'est pas douloureuse. Certaines zones peuvent être plus sensibles que d'autres, ce qui est un indicateur intéressant, mais la pression est toujours adaptée à votre confort. Beaucoup de personnes trouvent la séance très relaxante.",
      },
      {
        question: "Combien de séances sont recommandées ?",
        answer:
          "Pour un entretien régulier, une séance par mois est une bonne fréquence. Pour un besoin spécifique (stress intense, troubles du sommeil), un cycle de 3 à 5 séances rapprochées peut être recommandé. Nous définissons ensemble le rythme qui vous convient.",
      },
    ],
  },
  {
    slug: "accompagnement-personnel",
    name: "Accompagnement Personnel",
    shortName: "Accompagnement",
    description:
      "Un parcours sur-mesure combinant différentes approches pour vous aider à dépasser vos peurs, lever vos blocages et trouver vos outils quotidiens.",
    metaTitle: "Accompagnement Bien-Être Personnalisé | Au Pour Quoi Pas",
    metaDescription:
      "Accompagnement personnalisé à Mortagne-au-Perche : dépassez vos peurs, levez vos blocages et trouvez vos outils quotidiens. Sur devis.",
    heroHeading: "Accompagnement Personnel",
    heroSubtitle:
      "Un parcours sur-mesure combinant nos différentes approches pour répondre à vos objectifs de transformation profonde et durable.",
    icon: "verified",
    pricing: [{ label: "Accompagnement personnalisé", price: "Sur devis" }],
    faqs: [
      {
        question: "En quoi consiste l'accompagnement personnel ?",
        answer:
          "L'accompagnement personnel est un parcours sur-mesure qui combine différentes approches selon vos besoins : respiration, cohérence cardiaque, soins énergétiques, outils de gestion du stress. L'objectif est de vous challenger à dépasser des peurs et des blocages, tout en vous aidant à trouver vos propres outils pour le quotidien.",
      },
      {
        question: "Comment se passe la première séance ?",
        answer:
          "La première séance est un temps d'échange approfondi pour comprendre votre situation, vos objectifs et vos besoins. Ensemble, nous définissons un parcours adapté et les outils qui vous correspondent le mieux. C'est un moment d'écoute sans jugement.",
      },
      {
        question: "Combien de temps dure un accompagnement ?",
        answer:
          "La durée varie selon chaque personne et ses objectifs. Certains accompagnements se font sur quelques séances, d'autres s'étalent sur plusieurs mois. Le rythme est défini ensemble et ajusté au fil de votre progression. L'objectif est toujours de vous rendre autonome.",
      },
      {
        question: "Pourquoi le tarif est-il sur devis ?",
        answer:
          "Chaque accompagnement est unique et combine différentes approches selon vos besoins. Le devis est établi après notre premier échange, en fonction du parcours défini ensemble. Cela garantit un accompagnement vraiment personnalisé, adapté à votre situation.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
