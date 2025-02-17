"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [loaded, setLoaded] = useState(false);
  return (
    <section className="bg-white flex flex-col px-[15px] py-[50px]">
      <h1 className="mx-auto my-[40px]">Online Presence</h1>
      <div className="flex md:flex-row flex-col items-center gap-[35px] py-[50px]">
        <p>
          I work with businesses across the globe to craft websites that not
          only look great but also deliver real results. From start to finish, I
          handle everything myself—understanding your unique needs, defining
          your goals, and positioning your brand effectively in the market. I
          take a holistic approach, ensuring every element—copywriting, design,
          development, and marketing—works together seamlessly. By overseeing
          each step personally, I create websites that aren’t just visually
          appealing but also strategically built to attract and convert
          customers.
          {/* Still not convinced? Let me prove it. Click the &quot;Start
          Your Project&quot; button, and let’s bring your vision to life. */}
        </p>
        <div className="relative w-full h-full aspect-square">
          <Image
            src="/laptop-low.jpg"
            alt="half closed laptop in a dark room"
            className={`object-cover object-center ${
              loaded ? "opacity-0 " : "opacity-100 "
            }`}
            // loading="lazy"
            priority
            fill
          />
          <Image
            src="/laptop.jpg"
            alt="half closed laptop in a dark room"
            className={`object-cover object-center ${
              loaded ? "opacity-100 " : "opacity-0 "
            }`}
            loading="lazy"
            fill
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
      <div>
        <h2 className="mt-[45px] mb-[20px] text-center">The Process</h2>
        <div className="flex flex-col gap-[25px] py-[35px] border-b-[0.5px] border-border">
          <div className="inline-flex gap-[15px]">
            <span className="text-accent font-semibold ">01</span>
            <h3>Understanding Your Business & Goals</h3>
          </div>
          <p>
            Every great project starts with a clear understanding. I take the
            time to learn about your business, your industry, and your specific
            goals. Whether you're launching a new brand or improving an existing
            website, this step ensures that everything aligns with your vision
            and long-term success.
          </p>
        </div>
        <div className="flex flex-col gap-[25px] py-[35px] border-b-[0.5px] border-border">
          <div className="inline-flex gap-[15px]">
            <span className="text-accent font-semibold ">02</span>
            <h3>Market Research & Strategy</h3>
          </div>
          <p>
            A website should do more than just look good—it should perform well
            in your industry. I analyze your competitors, target audience, and
            market trends to create a strategic approach that positions your
            business effectively online. This research shapes the structure,
            content, and design of your site.
          </p>
        </div>
        <div className="flex flex-col gap-[25px] py-[35px] border-b-[0.5px] border-border">
          <div className="inline-flex gap-[15px]">
            <span className="text-accent font-semibold ">03</span>
            <h3>Content & Messaging</h3>
          </div>
          <p>
            Great design starts with great content. I craft compelling copy that
            speaks directly to your audience, communicates your value, and
            improves search engine rankings. Whether it's landing pages, blog
            posts, or product descriptions, I ensure your message is clear,
            engaging, and optimized for conversions.
          </p>
        </div>
        <div className="flex flex-col gap-[25px] py-[35px] border-b-[0.5px] border-border">
          <div className="inline-flex gap-[15px]">
            <span className="text-accent font-semibold ">04</span>
            <h3>Visual Design & User Experience</h3>
          </div>
          <p>
            A strong website is visually appealing, intuitive, and easy to
            navigate. I focus on modern, high-converting design, incorporating
            your brand’s identity while ensuring a seamless user experience
            across all devices. This step brings your vision to life with
            attention to aesthetics, usability, and engagement.
          </p>
        </div>
        <div className="flex flex-col gap-[25px] py-[35px] border-b-[0.5px] border-border">
          <div className="inline-flex gap-[15px]">
            <span className="text-accent font-semibold ">05</span>
            <h3>Development & Optimization</h3>
          </div>
          <p>
            Once the design is finalized, I build your website with clean,
            efficient code that ensures speed, security, and SEO-friendliness. I
            integrate all necessary features, from contact forms to payment
            gateways, making sure your site is functional, responsive, and built
            to scale.
          </p>
        </div>
        <div className="flex flex-col gap-[25px] py-[35px]">
          <div className="inline-flex gap-[15px]">
            <span className="text-accent font-semibold ">06</span>
            <h3>Ongoing Maintenance & Support</h3>
          </div>
          <p>
            A website is never truly “finished.” To keep it running smoothly, I
            offer ongoing updates, security monitoring, and performance
            optimizations. This ensures your site remains fast, secure, and
            aligned with the latest industry standards—so you can focus on
            growing your business.
          </p>
        </div>
      </div>
    </section>
  );
}
