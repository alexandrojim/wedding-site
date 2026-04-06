/**
 * ============================================================
 *  WEDDING DATA — Edit all your texts and links here.
 *  The HTML never needs to be touched for content changes.
 * ============================================================
 */

const WEDDING = {
  /* ── Couple ─────────────────────────────────────────────── */
  couple: {
    name1: "Jessenia",
    name2: "Gabriel",
    // Short tagline shown below names
    tagline: "¡Nos casamos!",
  },

  /* ── Hero Background Images (crossfade slideshow) ───────── */
  // Add as many images as you want — they'll cycle with a smooth fade
  heroImages: [
    "https://drive.google.com/thumbnail?id=13Sd6yifjhnSYglSinkO7BWiUnh3B_z6H&sz=w1024", // corazon

    "https://drive.google.com/thumbnail?id=1zSBP9Ytjql5g5Lx684BNDLPMbGNVxJNV&sz=w1024", // mirando al sol

    //"https://drive.google.com/thumbnail?id=1s9SLuHB9wahUu_fmZ9iGvTyfm3suJSqr&sz=w1024", // charango
    "https://drive.google.com/thumbnail?id=17LXsw5a11DgHGcvJKMWFlVrkAaim5MSA&sz=w1024",

    //"https://drive.google.com/thumbnail?id=1wlL9o-tRq4FzGoGQZMPWrEayPJFICIAW&sz=w1024", // foto de los dos
    "https://drive.google.com/thumbnail?id=1ig2nhsSG2xzzXLKtIBalfqqzirqeH7zU&sz=w1024", // flor
  ],

  /* ── Date & Time ────────────────────────────────────────── */
  date: {
    full: "Sábado 09 de Mayo, 2026",
    time: "7:00 PM",
    detail: "Hora exacta",
    // ISO date for the countdown timer  (YYYY-MM-DDTHH:mm:ss)
    iso: "2026-05-09T19:00:00",
  },

  /* ── Ceremony (Church) ────────────────────────────────── */
  ceremony: {
    name: "Parroquia San José",
    address: "Av. República Dominicana 458, Jesús María, Lima",
    time: "7:00 PM",
    // Google Maps link for the button
    mapsUrl: "https://maps.app.goo.gl/nzuxzjXmJfN494Yg8",
  },

  /* ── Reception (Venue) ──────────────────────────────────── */
  reception: {
    name: "Chifa Circulo Militar",
    address: "Av. Gral. Felipe Salaverry 1650, Jesús María, Lima",
    time: "8:30 PM",
    // Google Maps link for the button
    mapsUrl: "https://maps.app.goo.gl/g5cCF3EsEUibPCWu7",
  },

  /* ── Gallery ────────────────────────────────────────────── */
  gallery: {
    // Replace these with real image URLs or local paths
    images: [
      "https://drive.google.com/thumbnail?id=1weaSg_zuUEoa3_nHJZS_bgQdM4yfhxpw&sz=w800",
      "https://drive.google.com/thumbnail?id=1sX4KVt2mMpXzkafVNGV9wuPAMrqxjNnt&sz=w800",
      "https://drive.google.com/thumbnail?id=1u-BIzqhBssPwqWdwBfCCfLkAg146k132&sz=w800",
      "https://drive.google.com/thumbnail?id=1SuUoNK7FL7_vYn4ZxVQV5lWUl6ndvTkz&sz=w800",
      "https://drive.google.com/thumbnail?id=180Tz56t1-ZWigP1CfONMmJKOTC0AJAPL&sz=w800",
      "https://drive.google.com/thumbnail?id=11eCs0ZBs9Pfxo-0Hss-YelBdC183htj4&sz=w800",
      "https://drive.google.com/thumbnail?id=1R_-SH_Y_8f1scfy0DMfkTWKzSdXuBMZs&sz=w800",
      "https://drive.google.com/thumbnail?id=1m7tVhiybgyn_q1XV9b98gVz55vRJY1ix&sz=w800",
      "https://drive.google.com/thumbnail?id=1Hv420y6w4c_nwqczD4B_oHvpykN_Qatq&sz=w800",
      "https://drive.google.com/thumbnail?id=119Z41e_WwlMHbLdbG4b5W4qBvi8NO1E4&sz=w800",
      "https://drive.google.com/thumbnail?id=1bvDZoUBAjW7vdhIF5u3hXAD6zaW8FgXS&sz=w800",
      "https://drive.google.com/thumbnail?id=1T_ggnjJM6w8ZiR-d03uXS92oFcQvFrIV&sz=w800",
      "https://drive.google.com/thumbnail?id=1sB1peAw_4WPxRR_ya4l9Z-XWZVdJzU2_&sz=w800",
      "https://drive.google.com/thumbnail?id=1YEIqVTWkz2QX4v1m-VuC7i7G9w64srUW&sz=w800",
      "https://drive.google.com/thumbnail?id=11BqATKurwoHXe--eX9xdBW17nz9lD9Al&sz=w800",

      //"https://drive.google.com/thumbnail?id=1ig2nhsSG2xzzXLKtIBalfqqzirqeH7zU&sz=w800",
      //"https://drive.google.com/thumbnail?id=1dx3fcSfcZ9FKonQejWP9IXMTuJo7HCwD&sz=w800",
      //"https://drive.google.com/thumbnail?id=1JTCKxVbmMlZdBE1DCxBQLDR4VARDUax0&sz=w800",
      //"https://drive.google.com/thumbnail?id=1QdqPAVyYJskNla7bhJ5vU7rOXDIrG4vT&sz=w800", flor
      //"https://drive.google.com/thumbnail?id=1CkUFRTW9KRSD61W8Xf4w-H-SP-fnFped&sz=w800",
      //"https://drive.google.com/thumbnail?id=1Rm9AuD03OnxR5Lvh6Kl0LA4V-HY6y8Ix&sz=w800",
    ],
    // Optional link to a full Google Photos album
    albumUrl: "https://photos.app.goo.gl/8j3B1R3D1D63Lsch9",  // <-- paste your Google Photos album link here
  },

  /* ── Interaction ────────────────────────────────────────── */
  interaction: {
    // "Subir tus fotos" button URL
    uploadPhotosUrl: "https://photos.app.goo.gl/mpbDHYuwNKW5gG7g9",  // <-- paste your shared album or upload link
    // RSVP — Google Form embed URL (extract the "src" link from the iframe embed code)
    rsvpUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeWWh_xt5P0Y36DFU1fJNITQi8308vW0_0PC7oMUvxwOEmaBw/viewform?embedded=true",  // <-- e.g., "https://docs.google.com/forms/d/e/.../viewform?embedded=true"
    // Music suggestion
    musicUrl: "https://open.spotify.com/playlist/5kzUAiqBYppMu6fASokknW?si=376a946c15a64710&pt=3ddd13c6feaba3e328f203ea4199d47c", // <-- paste a form or WhatsApp link for song suggestions
  },

  /* ── Important Info ─────────────────────────────────────── */
  info: {
    dressCode: "Formal / Elegante",
    kidsPolicy: "Los peques son bienvenidos ... siempre que sus pilas duren tanto como las nuestras. ⚡️ ¡Prohibido quedarse dormido en la pista! 👶🕺",
  },

  /* ── Gifts ──────────────────────────────────────────────── */
  gifts: {
    message: "Tu presencia es el mejor regalo, pero si deseas tener un detalle con nosotros, aquí te dejamos algunas opciones.",
    // Add as many accounts / registries as you need
    options: [
      {
        label: "Transferencia Bancaria",
        detail: "Interbank (Cuenta Simple Soles): 0093254942255 \n Interbank CCI: 00300901325494225589 \n Titular: Gabriel Alexandro Jimenez Garay",
        icon: "https://drive.google.com/thumbnail?id=1wjTqtfKnjAg4vVZGgnq0_EBj5Xhu9QlG&sz=w200",
      },
      {
        label: "Paypal",
        detail: "alexandro.jimenezg@gmail.com",
        url: "https://paypal.me/gabrieljimenez92",
        icon: "https://drive.google.com/thumbnail?id=17WlNZrfQk3kG2K6LfgyGJ3OtGuGDkDKN&sz=w200",
      },
    ],
  },

  /* ── Background Music ────────────────────────────────── */
  music: {
    // Song that plays in the background (user clicks the 🎵 button)
    // For Google Drive: use the format below with your file ID
    // https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
    songUrl: 'music/website-sound.mp3',
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    message: "¡Esperamos celebrar este día tan especial junto a ti!",
    hashtag: "#Jessy&Gabo2026",
  },
};
