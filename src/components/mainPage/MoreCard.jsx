function MoreCard({item}) {
  return (
    <div className="container  w-75">
      <div className="container p-2 border shadow-sm rounded my-2">
        <div className="row">
          <div className="col">{parseDate(weather.dt).getHours()}</div>
          <div className="col ">Time</div>
          <div className="col ">Temperature</div>
          <div className="col ">Weather</div>
          <div className="col ">Pressure</div>
          <div className="col ">Wind Speed</div>
          <div className="col ">Wind direction</div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">9.00</div>
          <div className="col">+9..+12</div>
          <div className="col">Cloudy</div>
          <div className="col">750</div>
          <div className="col">10</div>
          <div className="col">-</div>
        </div>
      </div>
    </div>
  );
}

export default MoreCard;
