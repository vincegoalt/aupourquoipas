export const site = {
  name: "Au Pour Quoi Pas",
  tagline: "Sérénité & Cohérence",
  description: "Espace d'ateliers pour réguler le stress et retrouver un équilibre grâce au souffle et à la respiration. Cohérence cardiaque, réflexologie plantaire et soins énergétiques à Mortagne-au-Perche.",
  url: "https://aupourquoipas.fr",
  email: "aupourquoipas61@gmail.com",
  address: {
    street: "44 rue Montcacune",
    city: "Mortagne-au-Perche",
    postalCode: "61400",
    region: "Normandie",
    country: "France",
  },
  geo: {
    lat: 48.5206,
    lng: 0.5478,
  },
  schedule: [
    { day: "Jeudi", time: "18h00" },
    { day: "Vendredi", time: "14h30", note: "1 sur 2" },
  ],
  owner: {
    name: "Stéphanie",
    title: "Podologue Posturologue & Énergéticienne",
    experience: "20+",
    shortBio:
      "Podologue posturologue depuis plus de 20 ans, j'ai découvert au fil de mon expérience un lien profond entre le corps, les émotions et la respiration. Aujourd'hui, j'accompagne les personnes à retrouver un équilibre grâce à des outils simples, accessibles et efficaces au quotidien.",
    fullBio:
      "Originaire du Perche, j'ai toujours vécu proche de la nature. Toute mon enfance jusqu'à l'âge de 22 ans, j'ai grandi dans l'univers du sport (course à pied) de manière intense, avec une première découverte du corps et ses blessures. Mes études m'ont amenée vers le soin — d'abord Pédicure-Podologue, puis Posturologue, où j'ai découvert une approche plus holistique pour traiter les douleurs chroniques. De ces douleurs chroniques s'est posée la réflexion de la posture et des émotions : qu'est-ce que le corps veut nous dire à travers ces douleurs et maladies ? Aujourd'hui, en plus de mon métier de Podologue Posturologue, je propose des soins énergétiques qui travaillent sur la mémoire cellulaire du corps pour l'aider à libérer des blocages énergétiques et émotionnels. Avec ces 20 années d'expérience et une écoute attentive, j'ai pu observer chez les patients un besoin de conseils, d'outils faciles à mettre en place pour améliorer leur quotidien. C'est de là qu'est venue l'idée de créer Au Pour Quoi Pas.",
  },
  siret: "À compléter", // Placeholder — legally required
  social: {
    instagram: "", // To set up
  },
} as const;
