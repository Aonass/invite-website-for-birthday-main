import { motion } from "framer-motion";
import Countdown from "@/components/Countdown";
import RsvpForm from "@/components/RsvpForm";
import babyAngel from "@/assets/baby-angel.jpg";
import babyBunny from "@/assets/baby-bunny.jpg";
import family from "@/assets/family.png";
import cake from "@/assets/cake.png";
import bow from "@/assets/bow.png";
import bowRibbon from "@/assets/bow-ribbon.png";
import bunny from "@/assets/bunny.png";
import giraffe from "@/assets/giraffe.png";
import balloon from "@/assets/balloon.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("광주광역시 광산구 왕버들로 207");

const Index = () => {
  return (
    <main className="min-h-screen bg-blush overflow-hidden">
      <div className="mx-auto w-full max-w-[480px] bg-blush relative">
        {/* HERO */}
        <section
          className="relative min-h-[92vw] max-h-[600px] overflow-hidden"
          style={{ minHeight: "min(92vw, 600px)" }}
        >
          <img
            src={babyAngel}
            alt="София"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* general dark overlay for readability */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          {/* dark gradient at top for text readability */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
          {/* gradient fade into blush at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-blush via-blush/70 to-transparent pointer-events-none" />

          {/* HAPPY BIRTHDAY — тонкий капс, как на макете */}
          <p className="absolute top-6 inset-x-0 text-center font-serif-display text-[10px] font-light tracking-[0.35em] uppercase text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
            Happy Birthday
          </p>

          {/* Имя + возраст (возраст снизу справа, частично под скриптом) + дата */}
          <motion.div
            {...fadeUp}
            className="absolute bottom-8 inset-x-0 z-10 flex flex-col items-center px-4"
          >
            <div className="relative mx-auto w-max max-w-[90vw]">
              <p
                className="font-playfair font-extrabold text-[#F9C5B8] absolute right-1 bottom-[-0.52em] z-0 leading-none whitespace-nowrap [text-shadow:1px_2px_10px_rgba(0,0,0,0.35)]"
                aria-label="1 год"
              >
                <span className="text-[2.85rem] sm:text-[3.25rem]">1</span>
                <span className="text-[1.35rem] sm:text-2xl ml-0.5">год</span>
              </p>
              <h1 className="relative z-10 font-vibes text-[4.5rem] sm:text-[5.5rem] md:text-8xl text-white leading-[0.95] text-center [text-shadow:2px_2px_14px_rgba(0,0,0,0.4),0_0_24px_rgba(0,0,0,0.15)]">
                София
              </h1>
            </div>
            <p className="mt-6 font-serif-display font-normal text-sm sm:text-base tracking-[0.22em] text-white [text-shadow:1px_2px_10px_rgba(0,0,0,0.4)]">
              05 / 07 / 26
            </p>
          </motion.div>

          {/* Bow decoration */}
          <img
            src={bow}
            alt=""
            aria-hidden
            className="absolute -left-4 bottom-16 w-28 opacity-90 animate-float-slow z-20"
          />
        </section>

        {/* INVITATION */}
        <motion.section
          {...fadeUp}
          className="px-8 pt-6 pb-10 text-center relative"
        >
          <h2 className="font-serif-display text-2xl tracking-wider-2 text-ink leading-snug">
            ДОРОГИЕ ДРУЗЬЯ
            <br />И БЛИЗКИЕ
          </h2>
          <p className="mt-6 text-[13px] leading-relaxed text-ink/80 font-light max-w-[300px] mx-auto">
            С огромной радостью и большой любовью приглашаем вас разделить с
            нами трогательный и важный момент нашей семьи — первый день рождения
            нашей Софии.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 font-serif-display text-ink">
            <span className="text-2xl">05</span>
            <span className="w-px h-6 bg-ink/40" />
            <span className="text-lg italic">июля</span>
            <span className="w-px h-6 bg-ink/40" />
            <span className="text-2xl">2026</span>
          </div>
          <p className="mt-3 text-[11px] tracking-wider-2 text-ink/70">
            НАЧАЛО В 17:00
          </p>
          <img
            src={giraffe}
            alt=""
            aria-hidden
            className="absolute right-2 top-12 w-20 animate-float-slow"
          />
        </motion.section>

        {/* DIVIDER */}
        <div className="px-12 flex items-center text-ink/50 divider-line gap-4">
          <span className="text-xs">✦</span>
        </div>

        {/* LOCATION */}
        <motion.section {...fadeUp} className="px-8 py-10 text-center relative">
          <img
            src={bunny}
            alt=""
            aria-hidden
            className="absolute left-2 top-2 w-20 animate-float"
          />
          <h2 className="font-serif-display text-2xl tracking-wider-2 text-ink leading-snug">
            МЕСТО
            <br />
            ПРОВЕДЕНИЯ
          </h2>
          <p className="font-vibes text-3xl text-rose/70 -mt-6 ml-20">
            Location
          </p>
          <p className="mt-4 text-sm text-ink/80">ресторан</p>
          <p className="font-serif-display text-xl tracking-wider-2 mt-1 text-ink">
            «KKARERE STAR»
          </p>
          <p className="mt-3 text-[12px] text-ink/70">
            광주광역시 광산구 왕버들로 207
          </p>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-blush-soft hover:bg-white transition-all duration-300 text-ink text-[11px] tracking-wider-2 uppercase px-10 py-3 rounded-full shadow-sm hover:shadow-md hover:scale-[1.02]"
          >
            Место на карте
          </a>
        </motion.section>

        {/* BUNNY PHOTO */}
        <motion.section {...fadeUp} className="px-6 py-6 relative">
          <img
            src={babyBunny}
            alt="София"
            className="w-full rounded-sm shadow-md"
          />
          <img
            src={cake}
            alt=""
            aria-hidden
            className="absolute -left-3 bottom-6 w-24 animate-float"
          />
        </motion.section>

        {/* RSVP – arched panel */}
        <motion.section {...fadeUp} className="mt-6 px-6">
          <div className="bg-transparent border border-black arch-top rounded-b-3xl px-8 pt-12 pb-12 text-black">
            <h2 className="text-center font-serif-display text-2xl tracking-wider-2 text-black">
              АНКЕТА ГОСТЯ
            </h2>
            <p className="text-center text-[12px] text-black/80 mt-2 mb-8">
              Пожалуйста, подтвердите
              <br />
              свое присутствие
            </p>
            <RsvpForm />
          </div>
        </motion.section>

        {/* MESSAGE */}
        <motion.section
          {...fadeUp}
          className="px-10 pt-12 pb-8 text-center relative"
        >
          <img
            src={bowRibbon}
            alt=""
            aria-hidden
            className="mx-auto w-28 mb-4 animate-float-slow"
          />
          <p className="text-[13px] leading-relaxed text-ink/80">
            Софии исполнится 1 год, и нам очень хочется провести его рядом с
            самыми близкими людьми. Этот праздник будет наполнен теплом,
            улыбками, нежностью и добрыми воспоминаниями.
          </p>
          <p className="mt-6 text-[13px] leading-relaxed text-ink/80">
            А с вас — хорошее настроение, искренние улыбки и готовность
            радоваться вместе с нами в этот важный для нашей семьи день.
          </p>
          <p className="font-vibes text-4xl text-ink mt-8">Александр и Кара</p>
        </motion.section>

        {/* FAMILY */}
        <motion.section {...fadeUp} className="px-6 pb-10 relative">
          <img
            src={balloon}
            alt=""
            aria-hidden
            className="absolute left-0 top-4 w-16 animate-float"
          />
          <img
            src={balloon}
            alt=""
            aria-hidden
            className="absolute right-2 top-10 w-12 opacity-80 animate-float-slow"
          />
          <img src={family} alt="Александр и Кара" className="w-full" />
        </motion.section>

        {/* COUNTDOWN */}
        <motion.section {...fadeUp} className="px-6 py-10">
          <Countdown />
        </motion.section>

        {/* FOOTER */}
        <section className="text-center pt-4 pb-12">
          <h3 className="font-vibes text-6xl text-ink leading-none">София</h3>
          <p className="font-serif-display text-xl tracking-wider-2 mt-1 text-ink/90">
            1 год
          </p>
          <p className="mt-3 text-[11px] tracking-wider-2 text-ink/70">
            05 / 07 / 26
          </p>
        </section>
      </div>
    </main>
  );
};

export default Index;
