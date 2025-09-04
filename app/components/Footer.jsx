export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center w-full p-6">
      <p
        className={
          "font-[Poppins] text-sl sm:text-xl md:text-xl font-xl text-white"
        }
      >
        {" "}
        © {new Date().getFullYear()} Mega
        <span className="text-red-600">Hub</span>. All rights reserved.
      </p>
    </footer>
  );
}
