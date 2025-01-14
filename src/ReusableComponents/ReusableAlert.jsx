import Swal from "sweetalert2";
export default function ReusableAlert() {
  return Swal.fire({
    title: "The Internet?",
    text: "That thing is still around?",
    icon: "question",
  });
}
