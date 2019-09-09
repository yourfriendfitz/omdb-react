// import React, { useState, useEffect } from "react";
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
//   Container
// } from "reactstrap";
// import styled from "styled-components";

// const StyledCarousel = styled(Carousel)`
//   margin: auto;
//   margin-top: 48px;
//   max-width: 350px;
//   max-height: 70vh;
// `;

// const StyledImg = styled.img`
//   margin: auto;
//   border-radius: 8px;
//   height: 400px;
// `;

// const Example = () => {
//   const [animating, setAnimating] = useState(false);
//   const initialIndex = 0;
//   const [activeIndex, setActiveIndex] = useState(initialIndex);
//   const [search, setSearch] = useState({ query: "batman" });
//   const [movieInfo, setMovieInfo] = useState([]);
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     fetch(`http://www.omdbapi.com/?s=${search.query}&apikey=26332775`)
//       .then(res => res.json())
//       .then(data => setMovies(data.Search));
//   });

//   useEffect(() => {
//     let movieInfoArray = [];
//     movies.forEach(movie => {
//       fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=26332775`)
//         .then(res => res.json())
//         .then(data => movieInfoArray.push(data));
//     });
//     setMovieInfo(movieInfoArray);
//   });
//   console.log(movies)
//   console.log(movieInfo);
//   const onExiting = () => {
//     setAnimating(true);
//   };

//   const onExited = () => {
//     setAnimating(false);
//   };

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === movies.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? movies.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };

//   const goToIndex = newIndex => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };

//   const slides = movies.map(item => {
//     return (
//       <CarouselItem onExiting={onExiting} onExited={onExited} key={item.imdbID}>
//         <StyledImg src={item.Poster} alt={item.altText} />
//         <CarouselCaption captionText={item.Plot} captionHeader={item.Title} />
//       </CarouselItem>
//     );
//   });
//   return (
//     <Container>
//       <StyledCarousel activeIndex={activeIndex} next={next} previous={previous}>
//         <CarouselIndicators
//           items={movies}
//           activeIndex={activeIndex}
//           onClickHandler={goToIndex}
//         />
//         {slides}
//         <CarouselControl
//           direction="prev"
//           directionText="Previous"
//           onClickHandler={previous}
//         />
//         <CarouselControl
//           direction="next"
//           directionText="Next"
//           onClickHandler={next}
//         />
//       </StyledCarousel>
      
//     </Container>
//   );
// };

// export default Example;
