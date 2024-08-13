import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface PaginationProps {
  nextPage: () => void;
  previousPage: () => void;
  currentPage: number
  totalPages: number
}

export const Paginations = (props: PaginationProps) => {

  return (
    <Pagination>
      <PaginationContent className="hidden sm:flex">
        <PaginationItem>
          <Button
            className="w-fit h-fit flex bg-transparent 
            hover:bg-transparent shadow-none text-sky-900"
            onClick={props.previousPage}
            disabled={props?.currentPage === 1}>
            <ChevronLeft />
          </Button>
        </PaginationItem>
        <PaginationItem className="w-fit h-fit flex flex-row justify-center items-center">
          <Button className="w-fit h-fit flex bg-transparent shadow-none text-slate-900 
          hover:bg-transparent">
            {props?.currentPage}
          </Button>
          /
          <Button className="w-fit h-fit flex bg-transparent 
            hover:bg-transparent shadow-none text-slate-900">
            {props.totalPages}
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            className="w-fit h-fit flex bg-transparent 
              hover:bg-transparent shadow-none text-sky-900"
            onClick={props.nextPage}
            disabled={props?.currentPage === props.totalPages}>
            <ChevronRight />
          </Button>
        </PaginationItem>
      </PaginationContent>

      <PaginationContent className="w-[calc(100%-34px)] flex justify-center items-center sm:hidden">
        <PaginationItem className="w-full flex justify-center">
          <Button
            className="w-full h-[48px] my-4 flex bg-white rounded-sm
            text-sky-900 border border-sky-900 hover:bg-transparent"
            onClick={props.nextPage}
            disabled={props?.currentPage === props.totalPages}>
            LOAD MORE
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
