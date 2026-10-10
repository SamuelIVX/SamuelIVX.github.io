
export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-heading" data-reveal><p className="eyebrow">Beyond the Resume</p><h2>A little about me.</h2></div>
      <div className="about-body" data-reveal>
        <p className="lead">I enjoy building useful software and understanding what makes it work.</p>
        <p>I&apos;m a <strong>computer science senior</strong> at the College of Staten Island, with a minor in mathematics. Away from the keyboard, I&apos;m usually at the gym, tinkering with PCs, reading manga, or adding to my figurine and comic collection.</p>
        <div className="skills">{[['Languages', 'Java, TypeScript, Python, C++'], ['Applications', 'React, Next.js, Node.js, Tailwind'], ['Data & infrastructure', 'AWS, PostgreSQL, Supabase, Vercel'], ['Tools', 'Git, Maven']].map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
      </div>
    </section>
  );
}
