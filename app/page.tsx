export default function HomePage() {
  return (
    <>
      <div>
        <div>
          <h1 className="text-6xl font-bold text-center pt-36">Become a better <br /> business with us.</h1>
          <p className="text-lg font-semibold text-center pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nullam turpis tortor, ultricies ut justo eu.</p>
          <button className="text-xl font-bold text-white bg-custom-purple ml-[600px] px-20 py-4 mt-4 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300">Our Business</button>
        </div>
        <div className="mt-36">
          <img className="w-[1520px]" src="/banner1.png" alt="" />
        </div>
        <div>
          <p className="text-custom-purple font-bold pl-24 pt-24">WHAT WE OFFER</p>
          <h2 className="text-5xl font-bold pl-24 pt-2">Agile focused business <br /> services and more.</h2>
          <ul className="flex  justify-center gap-24 mt-20 -ml-28">
            <li>
              <img src="/banner2.png" alt="" />
              <p className="text-lg font-bold">Lorem ipsum dolor</p>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur.</p>
              <button className="text-sm font-bold border-b-2 border-custom-purple">Browse</button>
            </li>
            <li>
              <img src="/banner2.png" alt="" />
              <p className="text-lg font-bold">Lorem ipsum dolor</p>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur.</p>
              <button className="text-sm font-bold border-b-2 border-custom-purple">Browse</button>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-custom-purple font-bold pl-24 pt-24">OUT CUSTOMERS</p>
          <h2 className="text-5xl font-bold pl-24 pt-2">Agile focused business <br /> services and more.</h2>
          <ul className="flex  justify-center gap-36 ml-24 mt-20 ">
            <li>
              <img src="/banner3.png" alt="" />
              <img className="absolute -mt-[165px] -ml-6" src="/banner4.png" alt="" />
              <p className="text-lg pt-6">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Turpis <br /> donec eu mattis tincidunt viverra <br /> eu. Lacus turpis felis</p>
              </li>
            <li>
              <img src="/banner3.png" alt="" />
              <img className="absolute -mt-[165px] -ml-6" src="/banner5.png" alt="" />
              <p className="text-lg pt-6">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Turpis <br /> donec eu mattis tincidunt viverra <br /> eu. Lacus turpis felis</p>
            </li>
            <li>
              <img src="/banner3.png" alt="" />
              <img className="absolute -mt-[165px] -ml-6" src="/banner6.png" alt="" />
              <p className="text-lg pt-6">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Turpis <br /> donec eu mattis tincidunt viverra <br /> eu. Lacus turpis felis</p>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-custom-purple font-bold pt-36 text-center">services</p>
          <h1 className="text-5xl font-bold text-center pt-2">We provide or a huge <br /> list of services.</h1>
          <ul className="flex  justify-center gap-36  mt-20 ">
            <li>
              <img className="ml-20" src="/banner7.png" alt="" />
              <img className="absolute -mt-[105px] ml-32" src="/banner10.png" alt="" />
              <p className="text-lg pt-4 pl-16 font-bold">Lorem ipsum dolor</p>
              <p className="text-lg pt-6 -pl-12 text-center">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Turpis <br /> donec eu mattis tincidunt viverra <br /> eu. Lacus turpis felis</p>
              </li>
            <li>
              <img className="ml-20" src="/banner8.png" alt="" />
              <img className="absolute -mt-[105px] ml-32" src="/banner11.png" alt="" />
              <p className="text-lg pt-4 pl-16 font-bold">Lorem ipsum dolor</p>
              <p className="text-lg pt-6 -pl-12 text-center">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Turpis <br /> donec eu mattis tincidunt viverra <br /> eu. Lacus turpis felis</p>
            </li>
            <li>
              <img className="ml-20" src="/banner9.png" alt="" />
              <img className="absolute -mt-[105px] ml-32" src="/banner12.png" alt="" />
              <p className="text-lg pt-4 pl-16 font-bold">Lorem ipsum dolor</p>
              <p className="text-lg pt-6 -pl-12 text-center">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Turpis <br /> donec eu mattis tincidunt viverra <br /> eu. Lacus turpis felis</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
