export const tmdbGenreIdToName = (id) => {
  const genres = [
    { id: 28, name: "Aksiyon" },
    { id: 12, name: "Macera" },
    { id: 16, name: "Animasyon" },
    { id: 35, name: "Komedi" },
    { id: 80, name: "Suç" },
    { id: 99, name: "Belgesel" },
    { id: 18, name: "Dram" },
    { id: 10751, name: "Aile" },
    { id: 14, name: "Fantestik" },
    { id: 36, name: "Tarih" },
    { id: 27, name: "Korku" },
    { id: 10402, name: "Muzik" },
    { id: 9648, name: "Gizem" },
    { id: 10749, name: "Romantik" },
    { id: 878, name: "Bilim Kurgu" },
    { id: 10770, name: "TV Filmi" },
    { id: 53, name: "Gerilim" },
    { id: 10752, name: "Savaş" },
    { id: 37, name: "Batılı" },
  ];
  return genres.find((genre) => genre.id === id)?.name;
};

export const getData = async (endpoint) => {
  const data = await fetch(
    `${process.env.TMDB_API_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=tr`
  );

  return { props: { data: await data.json() } };
};
