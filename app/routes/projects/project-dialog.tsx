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
        <div className="mt-4 max-h-[80dvh] space-y-2 overflow-auto scrollbar-thin">
          {data && (
            <>
              <img
                src={data.image}
                alt={data.title}
                className="aspect-[8/3] w-full rounded object-cover object-top"
              />
              <DialogTitle className="text-2xl font-bold">
                {data.title}
              </DialogTitle>
              <DialogDescription className="space-y-4 text-gray-800">
                <p>{data.description}</p>
                <div>
                  <p className="mt-2 text-base font-bold text-black">
                    Fitur utama mencakup:
                  </p>
                  <div className="space-y-2">
                    {data.detail.map((e, key) => (
                      <ul key={key} className="list-disc">
                        <li>
                          <span className="font-medium">{e.highlight}: </span>
                          <br />
                          {e.description}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mt-2 text-base font-bold text-black">Tools:</p>
                  <p>{data.tech}</p>
                </div>
              </DialogDescription>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
