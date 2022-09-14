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
import { getData, getDataMovie } from "../../../app/features/reducer";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.reducer.data);

  useEffect(() => {
    dispatch(getDataMovie());
  }, []);

  const handleApi = () => {
    // console.log(getData);
    console.log(movies);
  };

  return (
    <>
      {/* <button onClick={handleApi}>click</button> */}
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

      <div className="card-overflow">
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
              size={120}
            />
          )}
        </div>
      </div>
      <div className="showMore">
        <p>More...</p>
      </div>
    </>
  );
};

export default Dashboard;