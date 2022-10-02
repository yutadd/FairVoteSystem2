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
    <div
      className="p-2 bd-highlight"
      style={{ backgroundColor: "#eee", minWidth: "52rem" }}
    >
      {`Station : `}
      <span className="secondary-color" ref={spanEle}>
        <strong>{values.closed}</strong>
      </span>
      <br />
      {`Voters:{`}
      <ul className="list-group">
        {Object.entries(values.voters).map(([key, value]) => (
          <li className="list-group-item">{key + ` : ` + value}</li>
        ))}
      </ul>
      {`}`}
      <br />
      {`Targets:{`}
      <ul>
        {Object.entries(values.targets).map(([key, value]) => (
          <li>{key + ` : ` + value}</li>
        ))}
      </ul>
      {`}`}
    </div>
  );
}

export default Contract;
