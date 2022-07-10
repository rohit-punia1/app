import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2  ">
      <h6 className="text-center text-2xl mb-2 text-slate-600 font-semibold">
        PC Builder
      </h6>
      <div className="rounded-lg shadow-lg bg-white max-w-2xl sm:max-w-sm  ">
        <img
          className="rounded-t-lg aspect-video"
          src="https://c0.wallpaperflare.com/preview/784/281/241/computer-build-case-wire.jpg"
          alt=""
        />
        <div className="p-5">
          <h5 className="text-gray-900 text-xl font-medium mb-2">Computer</h5>
          <p className="text-gray-700 text-base mb-4">
            A computer is a digital electronic machine that can be programmed to
            carry out sequences of arithmetic or logical operations
            (computation) automatically
          </p>
          <button
            onClick={() => navigate("select-parts")}
            className=" px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
