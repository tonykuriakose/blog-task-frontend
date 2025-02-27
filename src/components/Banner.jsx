import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative text-white text-center min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1420003/pexels-photo-1420003.jpeg')"
      }}
    >
      <div className="absolute inset-0  backdrop-blur-sm"></div>

      <div className="relative p-10 rounded-lg">
        <h1 className="text-3xl md:text-6xl font-bold">Cheenta Acadamy Blog </h1>
        <p className="text-lg md:text-xl my-7">
        "Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers." – Shakuntala Devi
        </p>
        <button
          onClick={() => navigate("/create")}
          className="bg-yellow-500 text-black cursor-pointer px-6 py-2 rounded-md text-lg font-semibold hover:bg-yellow-600 transition"
        >
          Start Writing
        </button>
      </div>
    </section>
  );
};

export default Banner;
