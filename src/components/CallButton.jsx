import { FiPhoneCall } from "react-icons/fi";

export default function CallButton() {
  return (
    <a
      href="tel:+918368604905" // 👉 yahan apna number daalna
      className="fixed bottom-23 right-5 bg-yellow-400 text-white p-4 rounded-full shadow-lg z-50 hover:bg-yellow-500 transition-all flex items-center justify-center"
    >
      <FiPhoneCall size={24} />
    </a>
  );
}
