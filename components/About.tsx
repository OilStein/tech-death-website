const AboutMe: React.FC = () => {
  return (
    <section className="flex flex-col bg-zinc-700 py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight text-center">
          <strong>{"Death will consume us all. It's evitable! "}</strong><br/>
          So you should hire me as soon as possible
        </p>
      </div>
      <div className="container mx-auto text-center px-11 mt-28">
        <h2>My skillset</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-20">
          <div>Skill</div>
          <div>Skill</div>
          <div>Skill</div>
          <div>Skill</div>
          <div>Skill</div>
          <div>Skill</div>
          <div>Skill</div>
          <div>Skill</div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
