import { Link } from "react-router-dom";
import landingImg from "../img/landing.svg";

function Home() {
  return (
    <main className="g-light-pink p-100px mobile:px-20px mobile:py-60px">
      <div className="m-auto container flex flex-row tablet:flex-col relative">
        <section className="flex-1 text-right self-center tablet:text-center">
          <div className="max-w-[573.9px] mobile:max-w-[321px] midiDesktop:text-white">
            <h1 className="text-64px mobile:text-36px font-bold mb-16px mobile:leading-36px leading-64px text-blue mb-16px">
              Imagine if
              <span className="block highlight-text">Snapchat </span>
              had events.
            </h1>
            <p className="mobile:text-16px text-24px leading-28px mobile:leading-18px ml-auto mb-52px mobile:mb-36px text-gray font-light max-w-[520px]">
              Easily host and share events with your friends across any social
              media.
            </p>
            <Link to="/create">
                <button className="tablet:hidden hightligted-btn px-69hpx py-16px text-white text-16px font-bold tablet:absolute">
                🎉 Create my event
                </button>
            </Link>
          </div>
        </section>
        <section className="order-first tablet:order-none flex-1">
          <img
            alt=""
            src={landingImg}
            className="m-auto tablet:max-w-[311px] mobile:max-w-[165.63px]"
          />
          <div></div>
          <Link to="/create">
            <button className="tablet:block mt-34px mx-auto hidden hightligted-btn px-21px py-16px text-16px text-white font-bold">
              🎉 Create my event
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Home;
