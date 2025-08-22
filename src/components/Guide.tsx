import GuideCard from "./GuideCard";
import { Link, FileText, TvMinimalPlay } from "lucide-react";

const guides = [
  {
    id: 1,
    title: "The ultimate guide to Workplace Chat",
    topic: "Sample Topic",
    tag: "Secure Base",
    icon: <Link size={28} className="!z-10" />,
    style: {
      backgroundColor: "#EF4444", // red
      borderRadius: "0 0 70% 150%",
      top: "-20px",
      right: "-10px",
      width: "230px",
      height: "120px",
    },
  },
  {
    id: 2,
    title: "The ultimate guide to Workplace Chat",
    topic: "Sample Topic",
    tag: "Secure Base",
    icon: <TvMinimalPlay size={28} />,
    style: {
      backgroundColor: "#10B981", // green
      borderRadius: "50% 80% 150% 50%",
      top: "-20px",
      left: "-10px",
      width: "90%",
      height: "150px",
    },
  },
  {
    id: 3,
    title: "The ultimate guide to Workplace Chat",
    topic: "Sample Topic",
    tag: "Secure Base",
    icon: <Link size={28} />,
    style: {
      backgroundColor: "#F87171", // light red
      borderRadius: "0 0 70% 150%",
      top: "-20px",
      right: "-10px",
      width: "230px",
      height: "120px",
    },
  },
  {
    id: 4,
    title: "The ultimate guide to Workplace Chat",
    topic: "Sample Topic",
    tag: "Wellbeing",
    icon: <TvMinimalPlay size={28} />,
    style: {
      backgroundColor: "#F97316", // orange
      borderRadius: "50% 80% 150% 50%",
      top: "-20px",
      left: "-10px",
      width: "90%",
      height: "150px",
    },
  },
  {
    id: 5,
    title: "The ultimate guide to Workplace Chat",
    topic: "Sample Topic",
    tag: "Secure Base",
    icon: <FileText size={28} />,
    style: {
      backgroundColor: "#FACC15", // yellow
      borderRadius: "50% 80% 150% 250%",
      top: "-20px",
      left: "-10px",
      width: "90%",
      height: "150px",
    },
  },
  {
    id: 6,
    title: "Taking stock of mental health in your workplace",
    topic: "Sample Topic",
    tag: "Secure Base",
    icon: <FileText size={28} />,
    style: {
      backgroundColor: "#38BDF8", // blue
      borderRadius: "0 0 70% 150%",
      top: "-20px",
      right: "-10px",
      width: "230px",
      height: "150px",
    },
  },
];

function Guide() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:py-10 px-3">
      {guides.map((guide) => (
        <GuideCard key={guide.id} {...guide} />
      ))}
    </div>
  );
}

export default Guide;
