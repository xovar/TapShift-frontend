import { services } from "../../../data/service.data";

const ServiceSection = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-base-content/70 mt-2 mx-auto w-179.5">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="card bg-base-200 shadow-md hover:shadow-xl transition">
                <div className="card-body">
                  <Icon className="text-4xl text-primary mb-4" />
                  <h3 className="card-title">{service.title}</h3>
                  <p className="text-sm text-base-content/80">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;