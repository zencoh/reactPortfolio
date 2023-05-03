import data from "./projectData.json";

function Project() {
  return (
    <section className="project">
      <h1>My Projects</h1>
      <div>
        {data.map((Proj) => (
          <div key={Proj.name}>
            <h1>{Proj.name}</h1>
            <p>{Proj.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
