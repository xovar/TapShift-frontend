import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./fixLeafletIcon";
import coverageData from "../../data/coverageData";
import FlyToDistrict from "./FlyToDistrict";

export default function CoverageMap() {
  const [search, setSearch] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleSearch = () => {
    const query = search.trim().toLowerCase();

    const result = coverageData.find(
      (item) =>
        item.district.toLowerCase().includes(query) ||
        item.city.toLowerCase().includes(query) ||
        item.covered_area.some((area) =>
          area.toLowerCase().includes(query)
        )
    );

    if (result) {
      setSelectedPosition([result.latitude, result.longitude]);
    } else {
      alert("Service not available in this district yet");
    }
  };

  return (
    <>
      {/* 🔍 Search Section */}
      <div className="px-4 md:px-0 pb-8 md:pb-12 border-b mb-8 md:mb-12 border-black">
        <div className="flex w-full max-w-md mx-auto md:ml-40">
          <input
            type="text"
            placeholder="Search district (e.g. Dhaka)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border rounded-l-lg focus:outline-none bg-[#CBD5E14D] placeholder:text-[#00000080]"
          />
          <button
            onClick={handleSearch}
            className="px-6 bg-[#CAEB66] text-black font-semibold rounded-r-lg whitespace-nowrap"
          >
            Search
          </button>
        </div>
      </div>

      <div className="md:ml-40 mb-12.5">
        <h1 className="text-black font-extrabold text-[30px]">We deliver almost all over Bangladesh</h1>
      </div>

      {/* 🗺️ Map Section */}
      <div
        className="
          w-full
          max-w-255
          mx-auto
          h-70
          sm:h-95
          md:h-125
          rounded-xl
          overflow-hidden
          shadow-lg
          border
        "
      >
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          className="w-full h-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Fly to searched district */}
          <FlyToDistrict position={selectedPosition} />

          {/* Markers */}
          {coverageData.map((district, index) => (
            <Marker
              key={index}
              position={[district.latitude, district.longitude]}
            >
              <Popup>
                <div className="space-y-1">
                  <h2 className="font-bold text-lg">
                    {district.district}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Region: {district.region}
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    {district.covered_area.map((area, i) => (
                      <li key={i}>{area}</li>
                    ))}
                  </ul>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
}