// Drawer.tsx
import { X } from "@phosphor-icons/react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  footer: React.ReactNode;
}

const DrawerHeader = ({
  onClose,
  title,
}: {
  title: string;
  onClose: () => void;
}) => {
  return (
    <header className="space-y-1 py-6 px-4 bg-gray-50 relative flex justify-center border-b-[1px] border-zinc-200">
      <div className="flex items-start justify-between ">
        <h2 className="text-lg text-center font-bold text-gray-900">{title}</h2>
        <div className="ml-3 h-7 flex items-center absolute right-0 mr-4">
          <button
            onClick={onClose}
            className="bg-gray-50 rounded-md text-gray-400 hover:text-gray-500 "
          >
            <span className="sr-only">Close panel</span>
            <X size={25} color="#000" />
          </button>
        </div>
      </div>
    </header>
  );
};

export const Drawer = ({
  isOpen,
  onClose,
  title,
  content,
  footer,
}: DrawerProps) => {
  return (
    <section
      className={`fixed inset-0 z-50 overflow-hidden ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>
        <section className="animeLeft absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <div
            className={`w-screen max-w-[600px] transform transition-transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-hidden">
              <DrawerHeader onClose={onClose} title={title} />
              <div className="relative flex-1 py-6 px-4 sm:px-6 overflow-auto">
                {content}
              </div>
              <footer className="py-6 px-4">{footer}</footer>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
