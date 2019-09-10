import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container as BootstrapContainer
} from "reactstrap";
import styled from "styled-components";
import * as Palette from "./Palette";

const StyledCarousel = styled(Carousel)`
  margin: auto;
  max-width: 350px;
  max-height: 70vh;
  display: grid;
  justify-content: center;
`;

const StyledImg = styled.img`
  margin: auto;
  border-radius: 8px;
  height: 400px;
  width: 270px;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
`;

const Container = styled(BootstrapContainer)`
  display: grid;
  justify-content: center;
  margin-top: 8px;
  background-image: linear-gradient(
    to right bottom,
    ${Palette.Secondary},
    ${Palette.Primary}
  );
  padding: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 8px;
  width: 90vw;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
`;

const InfoContainer = styled(BootstrapContainer)`
  display: grid;
  justify-content: center;
  margin-top: 8px;
  padding: 8px;
  max-width: 300px;
  height: 20vh;
  background-image: linear-gradient(
    to right bottom,
    ${Palette.Light},
    ${Palette.Primary}
  );
  border-radius: 8px;
  color: ${Palette.DarkText};
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
`;

const Example = () => {
  const [search, setSearch] = useState({ query: "batman" });
  const [animating, setAnimating] = useState(false);
  const initialIndex = 0;
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [movieInfo, setMovieInfo] = useState({});
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const resp = await fetch(
      `https://www.omdbapi.com/?s=batman&apikey=26332775`
    );
    const data = await resp.json();
    const movies = data.Search;
    const response = await fetch(
      `https://www.omdbapi.com/?i=${movies[0].imdbID}&apikey=26332775`
    );
    const res = await response.json();
    const movieInfoObj = res;
    setMovies(movies);
    setMovieInfo(movieInfoObj);
  };

  const getMovieInfo = async index => {
    const res = await fetch(
      `https://www.omdbapi.com/?i=${movies[index].imdbID}&apikey=26332775`
    );
    const data = await res.json();
    setMovieInfo(data);
  };

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = async () => {
    if (animating) return;
    const nextIndex = activeIndex === movies.length - 1 ? 0 : activeIndex + 1;
    await setActiveIndex(nextIndex);
    getMovieInfo(nextIndex);
  };

  const previous = async () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? movies.length - 1 : activeIndex - 1;
    await setActiveIndex(nextIndex);
    getMovieInfo(nextIndex);
  };

  const DisplayInfo = () => {
    return (
      <div>
        <div className="text-center">
          <h5>{movieInfo.Title}</h5>
          <h6>{movieInfo.Director}</h6>
        </div>
        <p>{movieInfo.Plot}</p>
      </div>
    );
  };
  const goToIndex = async newIndex => {
    if (animating) return;
    await setActiveIndex(newIndex);
    getMovieInfo(newIndex);
  };
  const slides = movies.map(item => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.imdbID}>
        <StyledImg src={item.Poster} alt={item.altText} />
      </CarouselItem>
    );
  });
  return (
    <Container>
      <StyledCarousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={movies}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </StyledCarousel>
      <InfoContainer className="overflow-auto">
        {animating ? <div></div> : <DisplayInfo />}
      </InfoContainer>
    </Container>
  );
};

export default Example;
