import { Helmet } from "react-helmet-async";

export default function Helmet({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
