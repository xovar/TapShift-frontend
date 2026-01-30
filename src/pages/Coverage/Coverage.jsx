import CoverageMap from "./CoverageMap";

const Coverage = () => {
  return (
    <div className="max-w-7xl px-4 py-12 bg-white rounded-2xl">
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-12.5 ms-43.5">
        We are available in 64 districts
      </h1>

      {/* Map Container */}
      <CoverageMap/>
    </div>
  );
};

export default Coverage;