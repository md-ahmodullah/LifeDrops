import useUpazila from "../Hooks/useUpazila";
export default function Blogs() {
  const [upazilas] = useUpazila();
  console.log(upazilas);
  console.log(upazilas?.name);

  return (
    <>
      <h1>Blogs</h1>
    </>
  );
}
