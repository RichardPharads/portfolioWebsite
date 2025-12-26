import exis from '../assets/exis.png'
const NavMenuBar = ({ active, onClose, links }) => {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-90 flex flex-col items-center justify-center gap-8 text-white text-xl">
      {links.map(link => (
        <button
          key={link.name}
          onClick={() => {
            link.action?.();
            onClose();
          }}
          className="hover:text-red-300"
        >
          {link.name}
        </button>
      ))}

      
    </div>
  );
};

export default NavMenuBar;
