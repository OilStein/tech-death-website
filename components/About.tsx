import Skill from "./Skill";

const AboutMe: React.FC = () => {
  const skills = [
    {
      name: "React",
      logo: "react.svg",
      level: 4,
      link: "https://reactjs.org/",
      description:
        "JS library for building user interfaces. This webpage uses Next.js that is a framework on top of React",
    },
    {
      name: "JavaScript",
      logo: "javascript.svg",
      level: 4,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      description:
        "I prefer arrow syntax => JavaScript is the most familiar language to me.",
    },
    {
      name: "Tailwindcss",
      logo: "tailwindcss.svg",
      level: 3,
      link: "https://tailwindcss.com/",
      description:
        "CSS framework. Looks awful but is very powerful tool for composing designs.",
    },
    {
      name: "Java",
      logo: "java.svg",
      level: 3,
      link: "https://www.java.com/",
      description:
        "OOP Language. I have also a JavaFX -project to do for course. Project will be some kind of TTRPG charater bank. Maybe Mörk Borg?",
    },
    {
      name: "Spring",
      logo: "spring.svg",
      level: 3,
      link: "https://spring.io/",
      description:
        "Java framework for web developing. I have done a twitter copy in a great hurry for course.",
    },
    {
      name: "MongoDB",
      logo: "mongodb.svg",
      level: 2,
      link: "https://www.mongodb.com/",
      description: "Cloud database. Used in Fullstack mooc.",
    },
    {
      name: "Redis",
      logo: "redis.svg",
      level: 2,
      link: "https://redis.com/",
      description: "Real-time data platform.",
    },
    {
      name: "Haskell",
      logo: "haskell.svg",
      level: 1,
      link: "https://www.haskell.org/",
      description:
        "Functional language. Done 5 credits in University of Jyväskylä. Great language, but steep learning curve.",
    },
    {
      name: "Python",
      logo: "python.svg",
      level: 3,
      link: "https://python.org/",
      description:
        "Great language for data science. Doing Data Analysis MOOC -course.",
    },
    {
      name: "C#",
      logo: "csharp.svg",
      level: 3,
      link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      description:
        "I have done few games with C# and Unity. C# with Godot is also familiar",
    },
  ];

  return (
    <section className="flex flex-col bg-zinc-700 py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight text-center">
          <strong>{"Death will consume us all. It's evitable! "}</strong>
          <br />
          So you should hire me as soon as possible
        </p>
      </div>
      <div className="container mx-auto text-center px-11 mt-28">
        <h2>My skillset</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-20">
          {skills.map((skill) => {
            return (
              <Skill
                key={skill.name}
                name={skill.name}
                logo={skill.logo}
                level={skill.level}
                link={skill.link}
                description={skill.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
