import { useEffect } from "react";

function useDocumentHeight() {
  useEffect(() => {
    const setDocHeightVariable = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
    };

    // Initial calculation when the component mounts
    setDocHeightVariable();

    // Attach event listener for window resize
    window.addEventListener("resize", setDocHeightVariable);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", setDocHeightVariable);
    };
  }, []);
}

export default useDocumentHeight;
