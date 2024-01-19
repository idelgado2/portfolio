import React from "react";
import Layout from "../components/Layout";

export default function contact() {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              I'm baby tofu butcher ramps offal fashion axe bushwick disrupt
              ethical gochujang swag. Freegan cronut seitan snackwave, offal
              direct trade DIY kogi narwhal post-ironic tacos lyft. Iceland fam
              pabst letterpress. Organic venmo sriracha, bruh humblebrag tacos
              fanny pack butcher etsy pug austin
            </p>
            <p>godard asymmetrical. Mustache gentrify twee actually cornhole</p>
            <p>
              vaporware tofu semiotics synth shabby chic hexagon narwhal. Mlkshk
              health goth viral pour-over lo-fi, deep v unicorn praxis listicle
              jawn pug ramps. Dummy text? More like dummy thicc text, amirite?
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
}
