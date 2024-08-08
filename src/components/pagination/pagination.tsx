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
    <Pagination className="mb-4">
      <PaginationContent>
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
          <Button className="w-fit h-fit flex bg-transparent 
            hover:bg-transparent shadow-none text-slate-900">
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
    </Pagination>
  );
};
