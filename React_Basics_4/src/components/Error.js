import { useRouteError } from "react-router-dom";

const Error = () => {
  const { data, status, statusText } = useRouteError();
  return (
    <>
      <div>
        <h1>OOPS!!!!</h1>
        <p>page not found</p>
        <p>{status}</p>
        <p>{data}</p>
        <p>{statusText}</p>
      </div>
    </>
  );
};

export default Error;
