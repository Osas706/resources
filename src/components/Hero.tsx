import { Input } from "@chakra-ui/react";
import { Search } from "lucide-react";

function Hero() {
  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center text-center py-3 md:py-10">
      <h1 className="!text-[40px] !md:text-[52px] !font-bold  text-gray-900">
        Resources
      </h1>
      <p className="text-[16px] md:text-[16px] font-medium max-w-xl">
        Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
        commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue
      </p>

      <div className="mt-3 w-full flex justify-center">
        <div className="flex items-center  !border !border-gray-400 !shadow-sm px-3 rounded-md bg-white max-w-3xl w-full">
          <Search size={18} className="text-gray-400" />
          <Input
            type="text"
            placeholder="Search by title or keyword"
            size="lg"
            className="!border-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
