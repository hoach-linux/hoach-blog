import { useRouteError } from "react-router-dom";
import { motion } from "framer-motion";

interface IError {
  statusText: string;
  message: string;
}

export default function ErrorPage() {
  return (
    <motion.div
      id="error-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Path not defined</i>
      </p>
    </motion.div>
  );
}
