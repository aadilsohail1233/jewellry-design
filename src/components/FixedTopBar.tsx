import { useEffect, useState } from "react";

const FixedTopBar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50
        bg-[#0f172b] text-white text-center text-[15px]
        transition-transform duration-300 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <p className="py-2 leading-[1.6] tracking-wide">
        Free Delivery on orders over £120.
      </p>
    </div>
  );
};

export default FixedTopBar;
