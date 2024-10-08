import { parseDate } from "@/lib/parseDate";
import Link from "next/link";
import MoreInfoBtn from "./CardButtons/MoreInfoBtn";
import SaveInfoBtn from "./CardButtons/SaveInfoBtn";
import DeleteButton from "./CardButtons/DeleteButton";
import { fetchProfileData } from "@/data/actions/action-fetch";
import { hasCookie } from "@/data/actions/getCookie";
import { resolve } from "styled-jsx/css";
import { cookies } from "next/headers";
import { COOKIE_NAME } from "../util/apiPath";

export function getImgUrlByName(name) {
  return `http://openweathermap.org/img/w/${name}.png`;
}

async function Card({ weather, hasDeleteButton }) {
  return (
    <div className="row d-flex justify-content-center py-5">
      <div className="col-md-8 col-lg-6 col-xl-5">
        <div className="card text-body" style={{ borderRadius: 35 }}>
          <div className="card-body p-4">
            <div className="d-flex">
              <h6 className="flex-grow-1">
                <strong>{weather.city}</strong>
              </h6>
              <h6 className="flex-grow-1">{weather.name}</h6>

              <h6>
                {parseDate(weather.dt).getHours()}:
                {parseDate(weather.dt).getMinutes()}
              </h6>
            </div>

            <div className="d-flex d-flex justify-content-evenly">
              <div className="d-flex flex-column text-center mt-5 mb-4 ">
                <h6 className="display-4 mb-0 font-weight-bold">
                  {Math.round(weather.main.temp)}°C
                </h6>
                <span className="small" style={{ color: "#868B94" }}>
                  {weather.weather[0].main}
                </span>
                <span className="small" style={{ color: "#868B94" }}>
                  {weather.weather[0].description}
                </span>
              </div>
              <div className="d-flex justify-content-end align-items-center ">
                <div>
                  <img
                    src={getImgUrlByName(weather.weather[0].icon)}
                    width="100px"
                  />
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                <div>
                  <i
                    className="fas fa-wind fa-fw"
                    style={{ color: "#868B94" }}
                  />
                  <span className="ms-1">{weather.wind.speed} km/h</span>
                </div>
                <div>
                  <i
                    className="fas fa-tint fa-fw"
                    style={{ color: "#868B94" }}
                  />
                  <span className="ms-1">{weather.main.humidity}%</span>
                </div>
                <div>
                  <i
                    className="fas fa-sun fa-fw"
                    style={{ color: "#868B94" }}
                  />
                  <span className="ms-1"> 0.2h</span>
                </div>
              </div>
              <div className="d-flex justify-content-end flex-grow-1">
                {hasDeleteButton ? (
                  <DeleteButton id={weather.locId} />
                ) : cookies().has(COOKIE_NAME) ? (
                  <SaveInfoBtn
                    weather={{
                      city: weather.name,
                      lon: weather.coord.lon,
                      lat: weather.coord.lat,
                    }}
                    data={await fetchProfileData()}
                  />
                ) : null}

                <MoreInfoBtn param={weather.name} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
