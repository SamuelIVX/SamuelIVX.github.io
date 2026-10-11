
import { Icon } from './ui/Icon';

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-layout" data-reveal>
        <div><p className="eyebrow">Get in touch</p><h2>Let&apos;s talk.</h2></div>
        <div className="contact-action">
          <p>Have a role, a project, or a good question in mind?<br />I&apos;d be glad to hear from you.</p>
          <a className="email" href="mailto:samuel05.hb@gmail.com">samuel05.hb@gmail.com<Icon name="arrow" /></a>
        </div>
      </div>
    </section>
  );
}
