import { FC } from "react";

const SquigglyLines: FC = () => {
  return (
    <div className="relative inline-block">
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 560"
      >
        <path
          d="M0,48L60,74.7C120,101,240,155,360,165.3C480,176,600,144,720,149.3C840,155,960,197,1080,213.3C1200,229,1320,219,1380,213.3L1440,208L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          fill="#fff"
        ></path>
      </svg>
      <div className="relative text-blue-600 font-bold">using AI</div>
    </div>
  );
};

export default SquigglyLines;

