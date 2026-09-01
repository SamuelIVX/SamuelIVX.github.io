/**
 * Contact section — EmailJS form plus EarthCanvas. Wrapped with SectionWrapper
 * as the `#contact` anchor.
 *
 * SECURITY: EmailJS service ID, template ID, and public key are hardcoded and
 * ship to the browser by design (EmailJS public-key model). They are not
 * private secrets; rotate them in the EmailJS dashboard if abused. Form fields
 * carry visitor PII (name/email/message) — do not log payloads.
 */
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import FormField from "./FormField";

/**
 * Contact form + globe canvas for inbound messages via EmailJS.
 * @returns {JSX.Element} Form panel and EarthCanvas.
 * @example
 * // Mounted via SectionWrapper(Contact, "contact") from App
 * <Contact />
 */
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  /**
   * Syncs a named input into local form state.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - Change event.
   * @returns {void}
   * @example
   * handleChange({ target: { name: "email", value: "sam@example.com" } });
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  /**
   * Submits the form through EmailJS and resets on success.
   * SECURITY: Sends visitor name/email/message to EmailJS with the public
   * client key (`vINIqsQL1x32FMzO3`); avoid logging `form` or the response.
   * EmailJS rejections are caught and alerted — this handler does not rethrow.
   * @param {React.FormEvent<HTMLFormElement>} e - Submit event.
   * @returns {void}
   * @example
   * // Wired as <form onSubmit={handleSubmit}>; success clears name/email/message.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_qf094dm",
        "template_ovsiswg",
        {
          form_name: form.name,
          to_name: "Samuel",
          from_email: form.email,
          to_email: "samuel0.hb@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong");
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col flex gap-10">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl w-full"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <FormField
            label="Your Name"
            name="name"
            type="text"
            placeholder="What's your name?"
            value={form.name}
            onChange={handleChange}
          />
          <FormField
            label="Your Email"
            name="email"
            type="email"
            placeholder="What's your email?"
            value={form.email}
            onChange={handleChange}
          />
          <FormField
            label="Your Message"
            name="message"
            type="textarea"
            placeholder="What's your message?"
            value={form.message}
            onChange={handleChange}
            rows={7}
          />
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] w-full"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const ContactComponent = SectionWrapper(Contact, "contact");
export default ContactComponent;
