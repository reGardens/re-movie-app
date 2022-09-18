import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

// style
import "./style.scss";

// pages
import { getDetailMovies } from "../../../app/features/detailMovie";

const Details = () => {
  const detailMovie = useSelector((state) => state.detailMovie.data);
  const detailgenres = useSelector((state) => state.detailMovie.data.genres);
  const loading = useSelector((state) => state.loading);
  const paramID = useParams("");
  const dispatch = useDispatch();
  const baseUrl = `https://image.tmdb.org/t/p/original`;
  // const [genres, setGenres] = useState([])

  useEffect(() => {
    // setTimeout(() => {
    //   dispatch(getDetailMovies(paramID.id));
    // }, 6000);
    dispatch(getDetailMovies(paramID.id));
    // setGenres(detailMovie.genres)
    // console.log('detail new', detailMovie.poster_path);
  }, []);
  console.log(detailgenres);

  // const genre = detailMovie.genres;

  return (
    <div className="detail">
      {detailMovie ? (
        // <div className="detail-wrap">
        <div className="container">
          <div className="image-wrap">
            <img src={`${baseUrl}${detailMovie.poster_path}`}></img>
            {/* <div className="dumy"> </div> */}
          </div>

          <div className="desc-wrap">
            <div className="left">
              <p>Title</p>
              <p>Original Title</p>
              <p>Tagline</p>
              <p>Release Date</p>
              <p>Genre</p>
              <p>Popularity</p>
              <p>Overview</p>
            </div>
            <div className="right">
              <p>: {detailMovie.title}</p>
              <p>: {detailMovie.original_title}</p>
              <p>: {detailMovie.tagline}</p>
              <p>: {detailMovie.release_date}</p>
              {/* {detailgenres.length > 0 ? (
                <>
                  {detailgenres.map((genre, index) => {
                    return <p key={index}>{genre.name}</p>;
                  })}
                </>
              ) : null} */}
              <p>: {detailMovie.popularity}</p>
              <p>: {detailMovie.overview}</p>
            </div>
          </div>
        </div>
      ) : (
        // </div>
        <ClipLoader
          className="loading"
          color={"#ffffff"}
          loading={loading}
          // size={}
        />
      )}
    </div>
  );
};

export default Details;
