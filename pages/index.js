import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'

import styles from './index.module.css'
import { tmdbGenreIdToName, getData } from '../utils'
import MovieCard from '../components/Card/Movie'

export default function Index({ movies }) {
  return (
    movies && (
      <>
        <div className={styles.slider}>
          <Swiper
            breakpoints={{
              1400: {
                slidesPerView: 2
              }
            }}
            spaceBetween={25}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
            }}
            modules={[Autoplay]}
          >
            {movies.results.slice(0, 5).map((movie, i) => (
              <SwiperSlide key={i}>
                <MovieCard
                  key={i}
                  href={`/movie/${movie.id}`}
                  poster={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                  category={tmdbGenreIdToName(movie.genre_ids[0])}
                  rate={Math.round(movie.vote_average / 2)}
                  title={movie.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="title">Filmler</div>
        <div className="card-list">
          {movies.results.slice(5).map((movie, i) => (
            <MovieCard
              key={i}
              href={`/movie/${movie.id}`}
              poster={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              category={tmdbGenreIdToName(movie.genre_ids[0])}
              rate={Math.round(movie.vote_average / 2)}
              title={movie.title}
            />
          ))}
        </div>
      </>
    )
  )
}

export async function getStaticProps() {
  return {
    props: {
      movies: await getData('/discover/movie')
    },
    revalidate: 86400
  }
}
