import { LangData } from "./LangData";
import { GenreData } from "./GenreData";
import { FormatData } from "./FormatData";
import "../tabs/tabs.css";

export const SidebarData = [
    {
        id: 1,
        head: 'Languages',
        url: '/movies',
        subNav: [{LangData}]
    },
    {
        id: 2,
        head: "Genres",
        url: "/movies/genre",
        subNav: [{GenreData}]
    },
    {
        id: 3,
        head: "Format",
        url: "movies/format",
        subNav: [{FormatData}]
    }
]