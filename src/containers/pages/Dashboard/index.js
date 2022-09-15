import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

// style
import "./style.scss";

// images
import tmdbLogo from "../../../assets/logo/tmdb-logo.png";

// icons
import { IconContext } from "react-icons/lib";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getDataMovie } from "../../../app/features/reducer";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.reducer.data);
  const loading = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getDataMovie());
  }, []);

  // console.log('list', movies);
  // const newData = movies
  // setTimeout(() => {
  //   console.log(movies);
  // }, 3000);

  const handleApi = () => {
    // console.log(getData);
    console.log(movies);
  };

  return (
    <>
      <button onClick={handleApi}>click</button>
      <div className="img-besar">
        <img src={tmdbLogo} />
        <div className="input-wrap">
          <div className="wrap">
            <div className="src">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                value={search}
              />

              <IconContext.Provider value={{ className: "search-icon" }}>
                <BsSearch />
              </IconContext.Provider>
            </div>
            <div className="hasil">
              {movies.length > 0 ? (
                <Fragment>
                  {movies
                    .filter((val) => {
                      if (search == "") {
                      } else if (
                        val.title
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        loading == true
                      ) {
                        return val;
                      }
                    })
                    .map((movies, index) => {
                      return (
                        <div className="search-wrap" key={index}>
                          <Link
                            to={{
                              pathname: `detail/${movies.id}`,
                              // query: { id: movies.id },
                            }}
                          >
                            {movies.title}
                          </Link>
                        </div>
                      );
                    })}
                </Fragment>
              ) : null}
            </div>
          </div>
        </div>
        <div className="dumy" />
      </div>

      <div className="subLink">
        <p>Ter Populer</p>
      </div>
      <div className="card-wrap">
        <div className="image-wrap">
          <img src={`${baseImgUrl}${movies[0]?.poster_path}`}></img>
          <p>{movies[0]?.title}</p>

          <img src={`${baseImgUrl}${movies[1]?.poster_path}`}></img>
          <p>{movies[1]?.title}</p>

          <img src={`${baseImgUrl}${movies[2]?.poster_path}`}></img>
          <p>{movies[2]?.title}</p>

          <img src={`${baseImgUrl}${movies[3]?.poster_path}`}></img>
          <p>{movies[3]?.title}</p>

          <img src={`${baseImgUrl}${movies[4]?.poster_path}`}></img>
          <p>{movies[4]?.title}</p>
        </div>
      </div>
      {/* uji coba slide */}

      {/* <div className="card-overflow">
        <div className="image-wrap">
          {movies.length > 0 ? (
            <Fragment>
              {movies.map((movies, index) => {
                return (
                  <Link
                    to={{
                      pathname: `detail/${movies.id}`,
                      // query: { id: movies.id },
                    }}
                    key={index}
                  >
                    <div className="image-wrap">
                      <img src={`${baseImgUrl}${movies.poster_path}`}></img>
                      <p>{movies.title}</p>
                    </div>
                  </Link>
                );
              })}
            </Fragment>
          ) : (
            <ClipLoader
              className="loading"
              color={"#ffffff"}
              loading={loading}
              // size={}
            />
          )}
        </div>
      </div> */}
      <div className="showMore">
        <p>More...</p>
      </div>
    </>
  );
};

export default Dashboard;
