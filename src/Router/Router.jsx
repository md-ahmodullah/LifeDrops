import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="text-3xl font-bold text-[#E63946]">
        <button className="btn btn-primary">Alert</button>
      </div>
    ),
  },
]);
