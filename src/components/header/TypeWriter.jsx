import React from "react";
import Typed from "typed.js";

function TypeWriter() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hello how are you?",
        "My name is Corey Bright",
        "I am a senior CS Student",
        "I am a Full-Stack Developer",
        "I am",
        "Corey Bright",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

export default TypeWriter;
