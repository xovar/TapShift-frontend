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

    const result = coverageData.find(item =>
        item.district.toLowerCase().includes(query) ||
        item.city.toLowerCase().includes(query) ||
        item.covered_area.some(area =>
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
      <div className="flex justify-center mb-6">
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Search district (e.g. Dhaka)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border rounded-l-lg focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="px-6 bg-[#CAEB66] text-black font-semibold rounded-r-lg"
          >
            Search
          </button>
        </div>
      </div>

      <div className="w-full h-125 rounded-xl overflow-hidden shadow-lg border">
      <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          className="w-full h-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* 🔥 THIS IS THE FIX */}
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
