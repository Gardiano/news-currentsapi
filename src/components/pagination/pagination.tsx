import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";

interface PaginationProps { 
  nextPage: () => void;
  previousPage: () => void;
  pages: number;
}

export const Paginations = ({ nextPage, previousPage, pages }: PaginationProps) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            className="w-fit h-fit flex bg-transparent hover:bg-transparent shadow-none text-slate-400"
            onClick={previousPage}
          >
            prev
          </Button>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{pages}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <Button
            className="w-fit h-fit flex bg-transparent hover:bg-transparent shadow-none text-slate-400"
            onClick={nextPage}
          >
            next
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
