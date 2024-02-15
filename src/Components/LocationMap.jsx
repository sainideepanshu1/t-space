import React from "react";

function LocationMap() {
  return (
    <div className="Location_map">
      <div>
        <iframe
          title="map"
          width="100%"
          height="280"
          loading="lazy"
          src="https://maps.google.com/maps?width=100%25&amp;height=280&amp;hl=en&amp;q=%20Triangle%20space%20private%20limited%203215,%20Sector%2014,%20Hisar,%20Haryana%20125001+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">
            Calculate population in area
          </a>
        </iframe>
      </div>
    </div>
  );
}

export default LocationMap;
