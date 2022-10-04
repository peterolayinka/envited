import { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import UserContext from '../context';

const Create = () => {
  const {form, setForm} = useContext(UserContext);
  const eventNameRef = useRef();
  const hostNameRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();

  const handleFormData = () => {
    setForm({
      eventName: eventNameRef
    })
  }

  const saveImg = (event) => {

    if (event.target && event.target.files && event.target.files[0]) {
      const imgUrl = URL.createObjectURL(event.target.files[0])
      setForm({
        ...form,
        imgUrl
      })
    }
  }

  return (
    <main className="g-light-pink p-100px mobile:px-20px mobile:py-60px">
      <div className="m-auto container flex flex-row tablet:flex-col relative">
        <section className="flex-1 text-right self-center tablet:text-center">
          <div className="max-w-[573.9px] mobile:max-w-[321px] midiDesktop:text-white">
            <h1 className="text-64px mobile:text-36px font-bold mb-16px mobile:leading-36px leading-64px text-blue mb-16px">
              Your Event is
              <span className="block highlight-text">Ready! </span>
            </h1>
            <p className="mobile:text-16px text-24px leading-28px mobile:leading-18px ml-auto mb-52px mobile:mb-36px text-gray font-light max-w-[520px]">
              Thank you for using envited.
            </p>
            <Link to="/create">
              <button className="tablet:hidden hightligted-btn px-69hpx py-16px text-white text-16px font-bold tablet:absolute">
                <FaArrowRight className="inline-block" /> Create New
              </button>
            </Link>
          </div>
        </section>
        <section className="order-first tablet:order-none flex-1">
          <form className="p-20px bg-[#F6F2FF] m-auto max-w-[311px]">
            <div className="relative flex h-200px mb-20px bg-[#FBFAFF] p-10px" style={{backgroundImage: `url(${form && form.imgUrl})`}}>
              <button className="rounded opacity-60 w-full bg-[#E87BF8] self-center text-white px-20px py-10px font-semibold">
                Upload Img
              </button>
              <input
                type="file"
                onChange={saveImg}
                className="top-[0px] left-[0px] opacity-0 absolute w-full h-full"
              />
            </div>
            <label className="block mb-10px">
              Event Name:
              <input disabled={true} className="rounded block w-full p-10px mt-5px" ref={eventNameRef} />
            </label>
            <label className="block mb-10px">
              Host Name:
              <input disabled={true} className="rounded block w-full p-10px mt-5px" ref={hostNameRef} />
            </label>
            <label className="block mb-10px">
              Start Date:
              <input disabled={true} type="datetime-local" className="rounded block w-full p-10px mt-5px" ref={startDateRef} />
            </label>
            <label className="block mb-10px">
              End Date:
              <input disabled={true} type="datetime-local" className="rounded block w-full p-10px mt-5px" ref={endDateRef} />
            </label>
          </form>
          <Link to="/create">
            <button onClick={handleFormData} className="tablet:block mt-34px mx-auto hidden hightligted-btn px-21px py-16px text-16px text-white font-bold">
              <FaArrowRight className="inline-block" /> Create New
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Create;
