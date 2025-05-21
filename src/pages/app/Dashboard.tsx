import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const Dashboard = () => {
  //https://www.npmjs.com/package/react-leaflet-cluster

  return (
    <div>
      {/* <MapContainer className="h-96 w-96" center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
    </div>
  );
};
