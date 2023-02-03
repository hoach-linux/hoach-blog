import { useRouteError } from "react-router-dom";

interface IError {
  statusText: string;
  message: string;
}

export default function ErrorPage() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Path not defined</i>
      </p>
    </div>
  );
}
