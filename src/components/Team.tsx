// import team data
import { team } from "../data";

function Team() {
  return (
    <section
      id="team"
      className="section"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">Our Attourneys</h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quisquam nobis eligendi earum libero dolorem
          totam est aliquid beatae assumenda! Nostrum asperiores similique officia dolor in architecto! Laboriosam,
          quasi delectus?
        </p>
        {/* team members grid */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-[30px]">
          {team.map((item, index) => {
            const { image, name, position, description } = item;
            return (
              <div
                className="text-center lg:text-left mb-12"
                key={index}
              >
                <img
                  className="mx-auto lg:mx-0 mb-6"
                  src={image}
                  alt=""
                />
                <h4 className="text-2xl mb-2 font-primary font-bold">{name}</h4>
                <p className="text-sm uppercase tracking-[0.3px] mb-4 opacity-[0.8]">{position}</p>
                <p className="max-w-[332px] lg:max-w-[350px] mx-auto lg:mx-0">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Team;
