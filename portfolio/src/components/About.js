import logo from "../img/coleDress.png"

function About() {
  return (
    <section className="about">
      <aside>
        <img src={logo} alt="Cole Hartkopp"/>
      </aside>
      <p className="about-p">Hi, I am Cole Hartkopp. I'm 21 years old and a Kansas City native. I was diagnosed with Acute Myloid Leukemia fall of 2020 and I still went to my first two years of college while going through chemotherapies. Spring 2022 I was forced to put my health first and I spent 3 months in the ICU at the Kansas University Medical Center. I decided I wanted to do something different because after such a long time not working on school, I decided to start coding and it has been so much more interesting and engaging than my mechanical engineering courses. I am intending to go into the work force as soon as I can. I am very passionate about my work and want to make other peoples time spent on the internet more enjoyable. Despite fighting cancer I believe that I would be a great future employee because I have faced such diversity and learned to overcome all challenges thrown at me.</p>
    </section>
  );
}

export default About;
