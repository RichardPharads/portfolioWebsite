function SkillsCapsul(props) {
  return (
    <div
      className="
        cursor-pointer
        w-32 sm:w-40 h-14
        bg-neutral-900
        border border-gray-800
        rounded-xl
        flex items-center justify-between
        transition-all duration-500 ease-in-out

        group-hover:blur-sm
        hover:!blur-none
        hover:scale-105
        hover:bg-white/10
        hover:border-white
        
        
      "
    >
      <div className="flex justify-center items-center h-full bg-capsul w-20 rounded-xl p-2">
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full text-center">
        <h3 className="font-inter text-md">{props.name}</h3>
      </div>
    </div>
  );
}

export default SkillsCapsul;
