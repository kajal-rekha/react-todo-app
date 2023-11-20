import { HiDocumentText } from "react-icons/hi";

const Header = () => {
  return (
    <header className="header bg-gray-900 p-10 container mx-auto rounded-t-xl flex gap-5 justify-center items-center border-b border-teal-900 border-dashed md:flex-row md:justify-between lg:max-w-6xl">
      <h2 className="uppercase font-semibold text-teal-500 flex items-center tracking-wider gap-1">
        <span className="text-2xl">
          <HiDocumentText />
        </span>
        <span>Todo App</span>
      </h2>
    </header>
  );
};

export default Header;
