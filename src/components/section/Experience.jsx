import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import { FaSchool, FaStar } from "react-icons/fa";
  import { IoMdSchool } from "react-icons/io";
  import { RiOrganizationChart, RiAdminFill } from "react-icons/ri";
  
  export default function Experience() {
    const timelineData = [
      {
        date: "Aug 2017 - Apr 2020",
        title: "Public Senior High School 1 Parakan",
        location: "Parakan, Temanggung",
        description: "Here I studied at high school level majoring in Mathematics & Social Sciences. I studied here for 3 years and graduated in 2020",
        background: "#2196F3",
        icon: <FaSchool />,
      },
      {
        date: "Sep 2020 - Nov 2024",
        title: "University Dian Nuswantoro",
        location: "Semarang City, Jawa Tengah",
        description: "At this university I gained my knowledge by majoring in informatics engineering. where I completed this education in 4 years with a GPA of 3.53",
        background: "#03A9F4",
        icon: <IoMdSchool />,
      },
      {
        date: "Aug 2021 - Jul 2023",
        title: "Dinus Open-source Community (DOSCOM)",
        location: "Semarang City, Jawa Tengah",
        description: "DOSCOM is an open source community where I joined in 2021 and finished my term of service in 2023. In the 2022/2023 term of service I served as President of DOSCOM",
        background: "#03A9F4",
        icon: <RiOrganizationChart />,
      },
      {
        date: "Sep 2021 - Oct 2024",
        title: "Laboran Intern",
        location: "Semarang City, Jawa Tengah",
        description: "Here I did an internship for approximately 2 years, during which I was trained to carry out lab maintenance in the form of hardware and software",
        background: "#E91E63",
        icon: <RiAdminFill />,
      },
      {
        date: "Oct 2023 - Oct 2024",
        title: "Alterra Academy",
        location: "Malang, Jawa Timur",
        description: "Apart from studying at university, I also took part in a government program where I studied knowledge related to Frontend Web Developer using React Js.",
        background: "#E91E63",
        icon: <IoMdSchool />,
      },
      {
        date: "Oct 2023 - Oct 2024",
        title: "Member of Google Developer Student Club",
        location: "Semarang City, Jawa Tengah",
        description: "At GDSC, I am only a member of the community, where I only actively participate in several events and also share time with fellow developers",
        background: "#E91E63",
        icon: <RiOrganizationChart />,
      },
    ];
  
    return (
      <>
        <div id="experience" className="w-full flex flex-col justify-center items-center text-center bg-[#151817] p-10">
          <p className="text-[#5BA97D] text-center text-6xl">MyExperience</p>
          <p className="leads text-[#FDFDFD] text-6xl mt-2.5 mb-10">Linear Timeline</p>
          <p className="text-[#7B8480] text-2xl mb-14 max-w-xl">
            This is a timeline of my educational, organizational and work journey
          </p>
          <div className="wrapper w-full">
            <VerticalTimeline>
              {timelineData.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: item.background,
                    color: "#fff",
                    padding: "20px",
                  }}
                  contentArrowStyle={{
                    borderRight: `7px solid ${item.background}`,
                  }}
                  date={item.date}
                  dateClassName={index % 2 === 0 ? "custom-date" : "date-left"}
                  iconStyle={{ background: item.background, color: "#fff" }}
                  icon={item.icon}
                  position={index % 2 === 0 ? "right" : "left"} 
                >
                  <h3 className="vertical-timeline-element-title uppercase font-bold text-2xl">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.location}
                  </h4>
                  <p className="font-thin">{item.description}</p>
                </VerticalTimelineElement>
              ))}
              <VerticalTimelineElement
                iconStyle={{ background: "#10CC52", color: "#fff" }}
                icon={<FaStar />}
              />
            </VerticalTimeline>
          </div>
        </div>
  
        <style jsx>{`
          .custom-date {
            font-weight: bold;
            color: #828a88;
            text-align: center;
          }
          .date-left {
            font-weight: bold;
            color: #828a88;
            text-align: left;
          }
        `}</style>
      </>
    );
  }
  