export default function SmBtn({ handler, text, color }) {
  return (
    <button
      onClick={handler}
      className={`rounded-md py-1.5 px-3 ${color} border-none font-medium text-white`}
    >
      {text}
    </button>
  );
}
