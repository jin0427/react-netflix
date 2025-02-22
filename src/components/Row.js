import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import './Row.css'
import MovieModal from './MovieModal';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Row({ isLargeRow, title, id, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    // 영화 정보를 가져오기
    useEffect(() => {
        fetchMovieData();
    }, []);

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
    };

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    }

    return (
        <section className='row'>
            <h2>{title}</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                breakpoints={{
                    1378: {
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                    },
                    998: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                    },
                    625: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    0: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    }
                }}
            >
                <div id={id} className='row__posters'>
                    {movies.map((movie) => (
                        <SwiperSlide>
                            <img
                                key={movie.id}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                                // 영화 정보 가져오기
                                onClick={() => handleClick(movie)}
                            />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
            {
                modalOpen && (<MovieModal {...movieSelected} setModalOpen={setModalOpen} />)
            }
        </section>
    )
}
