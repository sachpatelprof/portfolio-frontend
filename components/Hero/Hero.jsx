export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-32">
        <h1 className="text-5xl font-bold mb-6">
          Hi, I'm Sach Patel
        </h1>
  
        <p className="text-lg max-w-xl text-gray-600">
          Full Stack Developer building scalable web applications using
          MERN stack, cloud infrastructure and AI.
        </p>
  
        <div className="mt-8 space-x-4">
          <button className="px-6 py-3 bg-black text-white rounded-lg">
            View Projects
          </button>
  
          <button className="px-6 py-3 border rounded-lg">
            Contact Me
          </button>
        </div>
      </section>
    )
  }