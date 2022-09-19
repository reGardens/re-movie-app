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
  const loading = useSelector((state) => state.loading);
  const paramID = useParams("");
  const dispatch = useDispatch();
  const baseUrl = `https://image.tmdb.org/t/p/original`;

  useEffect(() => {
    dispatch(getDetailMovies(paramID.id));
  }, []);

  // const genre = detailMovie.genres;

  return (
    <div className="detail">
      {detailMovie ? (
        <div className="container">
          <div className="image-wrap">
            <img src={`${baseUrl}${detailMovie.poster_path}`}></img>
          </div>

          <div className="desc-wrap">
            <ul>
              <li>
                <span>Title :</span>
                {detailMovie.title}
              </li>
              <li>
                <span>Original Title :</span>
                {detailMovie.original_title}
              </li>
              <li>
                {detailMovie.genres?.map((genre, index) => {
                  return (
                    <>
                      <span key={index}>Jenis Film :</span>
                      {genre.name}, &nbsp;
                    </>
                  );
                })}
              </li>
              <li>
                <span>Tagline :</span>
                {detailMovie.tagline}
              </li>
              <li>
                <span>Release Date :</span>
                {detailMovie.release_date}
              </li>
              <li>
                <span>Popularity :</span>
                {detailMovie.popularity}
              </li>
              <li>
                <span>Sinopsis :</span>
                {detailMovie.overview}
              </li>
            </ul>
          </div>
        </div>
      ) : (
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
