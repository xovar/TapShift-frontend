import CoverageMap from "./CoverageMap";

const Coverage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        We are available in 64 districts
      </h1>

      {/* Map Container */}
      <CoverageMap/>
    </div>
  );
};

export default Coverage;