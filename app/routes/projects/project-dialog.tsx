// import { MagicCard } from "~/components/magicui/magic-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "~/components/ui/dialog";
import { website } from "./website";

interface ProjectDialogProps {
  open: boolean;
  setOpen: (e: boolean) => void;
  data: (typeof website)[0] | null;
}

export const ProjectDialog = ({ open, setOpen, data }: ProjectDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl">
        <div className="max-h-[80dvh] space-y-2 overflow-auto scrollbar-thin">
          {data && (
            <>
              <img
                src={data.image}
                alt={data.title}
                className="aspect-[8/3] w-full rounded object-cover object-top"
              />
              <DialogTitle className="font-serif">{data.title}</DialogTitle>
              <DialogDescription>
                <p>{data.description}</p>
                <p className="mt-2 font-serif text-base font-bold text-black">
                  Fitur utama mencakup:
                </p>
                {data.detail.map((e, key) => (
                  <ul key={key} className="list-disc">
                    <li>
                      <span className="font-medium">{e.highlight}: </span>
                      {e.description}
                    </li>
                  </ul>
                ))}

                <p className="mt-2 font-serif text-base font-bold text-black">
                  Tools:
                </p>
                <p>{data.tech}</p>
              </DialogDescription>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
