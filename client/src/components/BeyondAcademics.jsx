import React from "react";

const BeyondAcademics = () => {
  const data = [
    {
      title: "School Clubs",
      description:
        "All Goenkans are given lessons from the textbook of life. The motivation for courage takes unique.",
      imgSrc: "/path/to/club-image.jpg", // replace with the actual image path
    },
    {
      title: "Sport",
      description:
        "At GD Goenka Public School, Sports training is imparted to the students in order to inculcate in them a feeling.",
      imgSrc: "/path/to/sport-image.jpg", // replace with the actual image path
    },
    {
      title: "Music & Dance",
      description:
        "Schooling at GD Goenka Public School goes beyond the classrooms into the wider creative world outside.",
      imgSrc: "/path/to/music-dance-image.jpg", // replace with the actual image path
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            Beyond Academics
          </h2>
          <p className="italic text-gray-600 mt-2">
            “Talent wins games, but teamwork and intelligence win championships.”
            <br />
            <span className="font-medium">- Michael Jordan</span>
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm mt-4 inline-block"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeyondAcademics;
