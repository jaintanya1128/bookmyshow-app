import React from "react";
import { FaHeart } from "react-icons/fa";
import history from "../history";

function ShowsList(props) {
  return (
    <div className="container movie-shows-list">
      {props.eventsList.length > 0 &&
        props.eventsList.map((event, index) => {
          return (
            <div className="row" key={index}>
              <FaHeart className="text-danger mt-1" />
              <div className="col-md-4">
                <h4>{event.theater}</h4>
                <h6>{event.theater_address}</h6>
              </div>
              <div className="col-md-7">
                <button
                  type="button"
                  className="btn btn-info btn-pill mb-3"
                  onClick={() => {
                    props.selectedEventUpdater(event);
                    history.push(`/booking/${props.movieId}`);
                  }}
                >
                  {event.show_date} - {event.show_time}
                </button>
              </div>
              <hr className="w-100" />
            </div>
          );
        })}
    </div>
  );
}

export default ShowsList;
