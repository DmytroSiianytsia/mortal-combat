import { useCallback, useState, useEffect } from "react";

function useRoveFocus() {
  const [currentFocus, setCurrentFocus] = useState(0);   

  const handleKeyDown = useCallback(
    e => {       
      switch (e.key) {
        case 'ArrowUp':
          if (currentFocus < 5) {
            setCurrentFocus(currentFocus + 20)
          } else {
            setCurrentFocus(currentFocus - 5)
          }
          return
        case 'ArrowDown':
          if (currentFocus > 19) {
            setCurrentFocus(currentFocus - 20)
          } else {
            setCurrentFocus(currentFocus + 5)
          }
          return
        case 'ArrowLeft':
          if (currentFocus < 1) {
            setCurrentFocus(currentFocus + 24)
          } else {
            setCurrentFocus(currentFocus - 1)
          }
          return
        case 'ArrowRight':
          if (currentFocus > 23) {
            setCurrentFocus(currentFocus - 24)
          } else {
            setCurrentFocus(currentFocus + 1)
          }
          return
        default: return
      }
    },
    [currentFocus, setCurrentFocus]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus];
}

export default useRoveFocus;
