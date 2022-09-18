import { useRef, useEffect } from "react";

function Contract({ value }) {
  const spanEle = useRef(null);

  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [value]);

  return (
    <code>
      {`closed : `}

      <span className="secondary-color" ref={spanEle}>
        <strong>{value}</strong>
      </span><br />
      {`Voters:{

      }

  `}
    </code>
  );
}

export default Contract;
