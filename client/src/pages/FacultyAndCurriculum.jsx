import React, { useEffect } from "react";
import Academics from "../assets/academics.jpg";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/Faculty.css";
import Marquee from "react-fast-marquee";
import icon1 from "../assets/smart-icon1.png";
import icon2 from "../assets/smart-icon2.png";
import icon3 from "../assets/smart-icon3.png";
import icon4 from "../assets/smart-icon4.png";
import icon5 from "../assets/smart-icon5.png";

import Basketball from "../assets/BasketBall.jpg";
import Football from "../assets/Football.jpg";
import Cricket from "../assets/Cricket.jpg";
import Swimming from "../assets/Swimming.jpg";
import Volleyball from "../assets/Volleyball.jpg";
import TrackField from "../assets/Track.jpg";
import Gym from "../assets/Gym.jpg";
import TableTennis from "../assets/TableTennis.jpg";
import Aerobics from "../assets/Aerobics.jpg";
import Yoga from "../assets/Yoga.jpg";
import Gymnastics from "../assets/Gymnastics.jpg";

const FacultyAndCurriculum = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const url = [
    { icon: icon1 },
    { icon: icon2 },
    { icon: icon3 },
    { icon: icon4 },
    { icon: icon5 },
  ];

  const sportsData = [
    {
      id: 1,
      title: "Basketball Court",
      description:
        "Ensconced in the backyard of the school premises, covered from three sides giving it perfect location as good as being indoor, the court has international dimensions.",
      image: Basketball,
    },
    {
      id: 2,
      title: "Football Field",
      description:
        "We have a verdant football field lush with grass and well maintained since besides football it is extended to accommodate other activities also, like Cricket, in the vastness of its arena.",
      image: Football,
    },
    {
      id: 3,
      title: "Cricket Ground",
      description:
        "Cricket Ground forms a part of larger complex of football & Athletics arena, where the activity is smoothly conducted. The ground is effectively utilized for matches as well as net practice, after the school hours.",
      image: Cricket,
    },
    {
      id: 4,
      title: "Swimming ",
      description:
        "For the conduct of swimming activity as well as the practices for preparation of teams, to participate in various competitions, we have swimming pool, the sanitary & hygienic conditions of which are especially taken care.",
      image: Swimming,
    },
    {
      id: 5,
      title: "Volleyball",
      description:
        "The school boasts a standard size volleyball court. The court is regularly marked, and activities are conducted evenly for both practice and matches.",
      image: Volleyball,
    },
    {
      id: 6,
      title: "Track and Field",
      description:
        "For the effective conduct of Track & Field activity we have Athletics arena with a 200 mts. Track marked besides pit for long jump and equipments for high jump.",
      image: TrackField,
    },
    {
      id: 7,
      title: "Gymnasium",
      description:
        "The state-of-the-art Gym aims at providing infrastructure in order to enable students to maintain overall fitness, strength and endurance. Apart from that, it facilitates in improving performance in other games as well.",
      image: Gym,
    },
    {
      id: 8,
      title: "Table Tennis",
      description:
        "Children who are enthusiastically inclined towards this sport, are imparted training for participation in tournaments at Zonal, State and National level.",
      image: TableTennis,
    },
    {
      id: 9,
      title: "Aerobics",
      description:
        "he students follow a fitness regime in school which incorporates physical exercises in combination with rhythmic aerobics, exercises like stretching and strength-training. The aim is to improve general health of the students by incorporating all elements of fitness.",
      image: Aerobics,
    },
    {
      id: 10,
      title: "Yoga",
      description:
        "Yoga classes form an important part of the curriculum in order to train the students to coordinate their mental, physical and spiritual abilities. It not only provides de-stressing and relaxation to the body but aims at combating a variety of illness through breathing techniques and postures taught in the yoga class.",
      image: Yoga,
    },
    {
      id: 11,
      title: "Gymnastics",
      description:
        "Gymnastics as an activity aims at improving coordination, flexibility, speed and agility. Under strict supervision and guidance of our gymnastics instructors, the students learn to enhance their motor skills.",
      image: Gymnastics,
    },
  ];

  return (
    <Layout>
      {/* Banner Section */}
      <div className="relative bgImage">
        <h1 className="text-3xl md:text-5xl font-bold absolute bottom-4 md:bottom-6 left-4 md:left-8 text-[#e1b671]">
          ACADEMICS
        </h1>
        <img
          src={Academics}
          alt="Academics"
          className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[65vh] w-full object-fill"
        />
      </div>

      {/* Navigation Section */}
      <NavigationPages />

      <h1 className="text-xl lg:text-3xl mx-auto max-w-7xl lg:w-[60%] w-full  font-bold text-center mb-6 uppercase">
        G.D. Goenka Public School, Vasant Kunj, prides itself on a happy
        workforce of over 150 faculty members and a large support staff of lab
        assistants, attendants etc.
      </h1>
      <section className="container mx-auto max-w-7xl py-12 flex flex-col lg:flex-row items-center justify-center">
        {/* Left Content */}
        <div className="w-[90%] md:w-[80%] lg:w-[45%] bg-gray-200 text-gray-500 rounded-l shadow-lg p-8 h-[26rem] flex items-center">
          <div className="w-full h-[20rem] overflow-y-scroll pr-4 scrollable-content">
            <p className="text-lg leading-relaxed mb-4">
              The school aims at a distinct difference of a glorious vision and
              a new ambience of a proven concept of harmonized instructions,
              differentiated learning, a dynamic faculty and a host of values
              that kindle change and excellence. The best global practices
              inculcating new curriculum design has revamped itself with
              executive functions facilitating the process of empowering
              individuals.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              With an updated professional development of teachers, the school’s
              progressive pedagogy has reached new frontiers. An updated think
              tank plans each activity and event with a reciprocal, blended and
              interdisciplinary teaching strategy.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Differentiated instruction is a popular and effective mode that
              involves reacting to the diverse learning styles in every
              classroom with adjusted content and processes.
            </p>
            <p className="text-lg leading-relaxed ">
              With the goal of teaching mindful learners who actively pursue
              knowledge, teachers become more actively engaged in how they teach
              the curriculum and how they develop each student’s learning
              potential. They mix and match a variety of tactics in accordance
              with CBSE and NEP 2020, to ensure that students not only learn
              more, better, and faster. They also learn smarter!!
            </p>
          </div>
        </div>

        {/* Right Slider */}
        <div className="w-[90%] lg:w-[45%] md:w-[80%]  overflow-hidden shadow-lg">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            showDots={false}
            arrows={false}
          >
            <img
              src={Academics}
              alt="Academic Excellence"
              className="w-full h-[27rem] object-cover"
            />
          </Carousel>
        </div>
      </section>

      {/* CARDS */}
      <section className="container mx-auto bg-slate-200 py-12 flex justify-center">
        <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="bg-white shadow-2xl overflow-hidden">
            <img
              src={Academics} // Replace with your image URL
              alt="Pre Primary School"
              className="w-full h-[25rem] p-6 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Pre Primary and Early Primary School <br />
                (Nursery to Grade II)
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                At the Pre-Primary and early Primary years, the objective is to
                facilitate learning by creating a nurturing and stimulating
                environment for them to learn joyfully.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                Teaching Pedagogy is child centric and activity oriented using
                numerous teaching aids: PowerPoint, flashcards, pictures,
                puppets, actual objects, storytelling, dramatization and role
                play, etc. The endeavour is to involve the children in the
                discussions, gently guiding them, eliciting the right answers.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white shadow-2xl overflow-hidden">
            <img
              src={Academics} // Replace with your image URL
              alt="Primary School"
              className="w-full h-[25rem] p-6 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Primary School (Grade III to V)
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                he Primary School aims to inculcate foundational knowledge in
                various subjects in our young students. The focus is on reading
                and writing, language comprehension, math, critical thinking and
                inter-personal skills. The key subjects are English, Hindi,
                mathematics, EVS, art & craft, computer science and physical
                education. A third language (German, French, Spanish, Sanskrit)
                is added in Grade 5.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                Learning reinforcement is provided through worksheets in every
                subject, and activity based teaching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Middle and Senior Section */}
      <section className="container mx-auto bg-blue-900 py-12 flex justify-center">
        <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="bg-white shadow-2xl overflow-hidden">
            <img
              src={Academics} // Replace with your image URL
              alt="Pre Primary School"
              className="w-full h-[25rem] p-6 object-cover"
            />

            <div className="p-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                The Middle Section (Grade VI to VIII)
              </h2>

              {/* Section Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                The middle section aims to give a quantum jump to the knowledge
                assimilated in the foundation years and to further strengthen
                the basics of the student.
              </p>

              {/* Bold Heading */}
              <p className="font-bold text-gray-800 text-[17px] leading-relaxed  mb-2">
                The subjects included in the curriculum in the middle section
                are:
              </p>

              {/* Custom Bullet List */}
              <ul className="text-gray-600 text-lg leading-relaxed mb-4">
                <li className="custom-bullet mb-2">
                  Three languages, English and Hindi being compulsory and an
                  additional language from out of Spanish, French, German, and
                  Sanskrit.
                </li>
                <li className="custom-bullet">
                  Apart from the languages, the other subjects are Social
                  Science, Mathematics, Science, and Computer.
                </li>
              </ul>

              {/* Additional Paragraph */}
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                We take resource to various strategies to make their stay in the
                school fruitful and educative.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                A lot of emphasis is given to spoken English. Activities to
                polish their oratory skills are held, and children are
                encouraged to think out of the box and enhance their creative
                abilities.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white shadow-2xl overflow-hidden">
            <img
              src={Academics} // Replace with your image URL
              alt="Primary School"
              className="w-full h-[25rem] p-6 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                The Senior Section (Grade IX to XII)
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The Senior Section comprising of classes 9 to 12 is where our
                young learners transform into indIviduals who are ready to carve
                a niche for themselves. Growth and development is not just about
                managing the curriculum but understanding our strengths,
                fortifying them further and honing our talents. The aim is to
                imbibe knowledge and also emerge as an individual with a
                personality that exudes confidence along with mannerism that
                highlights a positive social bearing.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                At the Senior secondary level students are not only provided
                with multifarious subjects to opt from but are encouraged to
                explore and experience the various fields before they decide the
                foundation to build their career upon. As many as eighteen
                subjects are available for students in classes 11 and 12, with
                provision to study cross stream subjects. Counsellors help
                students understand the pre-requisites for various advanced
                fields as well as guide the students about options that would be
                open to them once they take up a particular subject combination.
                Faculty is carefully selected to ensure students gain from their
                expertise and vast experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slider */}
      <div className="animated-border flex flex-col h-80 w-full justify-center max-w-6xl mx-auto p-4">
        <div className=" w-full flex justify-center">
          <Marquee>
            {url.map((url, index) => (
              <img
                key={index}
                src={url.icon}
                alt={`img ${index}`}
                className="lg:h-52 md:h-40 h-36 rounded- mx-10 "
              />
            ))}
          </Marquee>
        </div>
      </div>

      {/* PHYSICAL EDUCATION */}
      <div className=" py-16 w-full bg-yellow-50 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center text-blue-900  mb-8">
          Physical Education
        </h2>
        <p className="text-center max-w-6xl w-[90%] text-lg text-gray-400  mb-8 ">
          Physical Education is an indispensable element on the continuum where
          listings of essential pre-requisites for personality development are
          drawn. The sports activities of Goenkan institution are formulated
          with a perspective of mass participation with an aim of health and
          fitness to each and every participant. Besides the aim of instilling
          sportsman spirit and enhancement of overall personality development,
          it eyes a larger goal of competitive participation beyond school – at
          Zonal, State, National and International levels. This purpose is
          served through regular coaching from grass root level, organization
          and participation in various inter-house and inter-school sports &
          games. Gamut of activities conducted, are briefly described below:
        </p>
        <div className="flex flex-wrap max-w-7xl w-full items-center  justify-center gap-8">
          {sportsData.map((item) => (
            <div
              key={item.id}
              className="relative group w-[340px] h-60 overflow-hidden rounded-lg shadow-lg"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay Text */}
              <div
                className="absolute bottom-0 left-0 w-full bg-green-300 text-white text-center p-3 
                transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 scrollable-content"
                style={{ height: "100%", overflow: "auto" }} // Set fixed height and hidden overflow
              >
                <div className="overflow-y h-full ">{item.description}</div>
              </div>
              {/* Title Below Image */}
              <div className="absolute bottom-0 left-0 w-full bg-white text-gray-800 text-center p-1 font-bold">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FacultyAndCurriculum;
