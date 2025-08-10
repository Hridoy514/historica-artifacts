// Testimonials.jsx
const testimonials = [
  {
    name: "Dr. Layla Amin",
    role: "Historian",
    comment:
      "Historica is an excellent platform for accessing and preserving our global heritage.",
    image: "https://i.ibb.co/7xx9N966/istockphoto-1437816897-612x612.jpg",
  },
  {
    name: "Md Hridoy",
    role: "Artifact Contributor",
    comment:
      "Uploading and sharing artifacts was seamless. This app brings history to life!",
    image: "https://i.ibb.co/wN2KvKpr/Hridoy-Profile-Picture-enhanced.png",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white dark:bg-[#111] px-4">
      <h2 className="text-3xl font-bold text-center text-amber-700 dark:text-amber-400 mb-10">
        What Users Say
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-amber-600">{t.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t.role}
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              “{t.comment}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
