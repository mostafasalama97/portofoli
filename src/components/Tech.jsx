import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          className='w-28 h-28 rounded-2xl bg-tertiary/60 border border-white/10 flex items-center justify-center p-5 hover:border-[#915EFF] transition-colors duration-200'
          key={technology.name}
          title={technology.name}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            loading='lazy'
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/logo2.svg";
            }}
            className='w-full h-full object-contain'
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");