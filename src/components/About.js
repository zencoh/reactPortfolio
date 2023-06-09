import logo from "../img/Profile1mg.jpg"

function About() {
  return (
    <section className="about">
      <aside>
        <img src={logo} alt="Cole Hartkopp"/>
      </aside>
      <p className="about-p">Cole Hartkopp is an enthusiastic and detail-oriented recent bootcamp gradutate with a strong desire to learn and grow in the technology industry. Possessing excellent communication, problem-solving, and time management skills, as well as proficiency in multiple full-stack languages. Cole has a desire to work as a full stack developer, but has very strong back end development skills with SQL, NoSQL, and Cloud databases. He is a dedicated team player who is adaptable, dependable, and committed to delivering high-quality work. Please navigate to the projects to view recent works, download my resume and email me if you have any questions.</p>
      <div className="about-c">
        <h4>Contact Me</h4>
        <ul>
          <li>chartkopp@outlook.com</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
