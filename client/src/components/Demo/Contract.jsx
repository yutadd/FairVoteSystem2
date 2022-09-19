import { useRef, useEffect } from "react";

function Contract({ values }) {
  const spanEle = useRef(null);

  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [values.closed]);

  return (
    <code>
      {`closed : `}
      <span className="secondary-color" ref={spanEle}>
        <strong>{values.closed}</strong>
      </span>
      <br />
      {`Voters:{`}
      {(values.voters = [{}] ? "[]" : values.voters)}
      {`}`}
      <br />
      {`Voter[0]:{`}
      {values.voter}
      {`}`}
    </code>
  );
}

export default Contract;
