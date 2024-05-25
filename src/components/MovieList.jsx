import MovieCard from "./MovieCard.jsx";


let favouriteMovies = [
    "Aliens",
    "Dune",
    "Shrek",
    "Pokemon",
    "Robocop",
    "Lord of The Rings"
];

export default function MovieList(){

    return (
        <section>
            {favouriteMovies.map((movie, index) => {
                return <MovieCard key={movie + "-" + index} movieName={movie}/>
            })}
        </section>

    );
}