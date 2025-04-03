import studentsIcon from "../assets/students.png";
import industryIcon from "../assets/industry.png";
import schoolIcon from "../assets/school.png";
import earningIcon from "../assets/earnings.png";

export const Edu = () => {
  const eduItems = [
    { img: studentsIcon, text: "Connecting you to fellow students" },
    { img: industryIcon, text: "Connecting you to the industry" },
    { img: schoolIcon, text: "Intergrating with the courseworks" },
    { img: earningIcon, text: "Learning while earning" },
  ];
  return (
    <div className="edu-section">
      {eduItems.map((item, i) => {
        return (
          <div key={i}>
            <img src={item.img} />
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};
