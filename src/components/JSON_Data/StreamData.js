//Data for Stream page
export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
export const StreamData = [ //JSON Data
    {
        id: 1,
        pic: "https://assets-in.bmscdn.com/discovery-catalog/events/et00337077-ashbldsplf-portrait.jpg",
        alt: 'everything-everywhere',
        movie_name: "Everything Everywhere All at Once",
        certification: "A",
        languages: "English",
        duration: "2h 20m",
        genre: "Action, Adventure, Sci-Fi",
        about: "An aging Chinese immigrant gets swept up in an insane adventure, where she alone can save what`s important to her by connecting the lives she could have led in other universes.",
        url: "/movies/everything-everywhere"
    },
    {
        id: 2,
        pic: "https://assets-in.bmscdn.com/discovery-catalog/events/et00117411-zmudrhhzzz-portrait.jpg",
        alt: 'balck-adam',
        movie_name: "Black Adam",
        languages: "English",
        duration: "2h 5m",
        genre: "Action, Fantasy, Sci-Fi",
        about: "A slave-turned-god, Teth-Adam (Dwayne Johnson) breaks free of his prison and fights to save his homeland from an ancient evil.",
        certification: "UA",
        url: "/movies/balck-adam"
    },
    {
        id: 3,
        pic: "https://assets-in.bmscdn.com/discovery-catalog/events/et00338333-xmuuathedf-portrait.jpg",
        alt: 'ticket-to-paradise',
        movie_name: "Ticket to Paradise",
        certification: "UA",
        languages: "English",
        duration: "1h 44m",
        genre: "Comedy, Romantic",
        about: "Bitter exes Georgia (Julia Roberts) and David (George Clooney) team up to stop their daughter, Lily (Kaitlyn Denver), from committing the biggest mistake of her life: getting married.",
        url: "/movies/ticket-to-paradise"
    }
]