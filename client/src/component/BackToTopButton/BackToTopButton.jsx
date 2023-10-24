import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button
          onClick={scrollUp}
          className=" fixed bottom-[50px] right-[50px] h-[50px] w-[50px] text-2xl rounded-full bg-slate-600 text-white"
        >
          ^
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
