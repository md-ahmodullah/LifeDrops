import { Helmet } from "react-helmet-async";
export default function CustomHelmet({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
