import data from "./projectData.json";

function Project() {
  return (
    <section className="project">
      <div>
        {data.map((Proj) => (
          <div key={Proj.name}>
            <h1>{Proj.name}</h1>
            <aside className="Project-aside" >
              <img className="Proj-img" src={Proj.icon} alt={Proj.caption} />
              <a href={Proj.link}>{Proj.name}</a>
            </aside>
            <p className="Proj-bio" >{Proj.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
