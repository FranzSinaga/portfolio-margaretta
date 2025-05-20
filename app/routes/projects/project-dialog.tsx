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
      <DialogContent className="max-w-4xl">
        <DialogTitle className="mb-2 text-2xl font-bold underline">
          {data && data.project}
        </DialogTitle>
        <div className="max-h-[80dvh] space-y-2 overflow-auto scrollbar-thin">
          {data && (
            <div className="mb-8">
              <img
                src={data.image}
                alt={data.project}
                className="aspect-[8/3] w-full rounded object-cover object-top drop-shadow-lg"
              />
              <DialogDescription className="space-y-4 text-gray-800">
                <div>
                  <p className="my-3 w-max rounded-full bg-red-300 px-4 py-1 text-base font-bold text-black">
                    Kontribusi Utama:
                  </p>
                  <div className="space-y-2">
                    {data.kontribusi_utama.map((e, key) => (
                      <ul key={key} className="ml-4 list-disc">
                        <li>{e}</li>
                      </ul>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="my-3 w-max rounded-full bg-red-300 px-4 py-1 text-base font-bold text-black">
                    Nilai tambah:
                  </p>
                  <div className="space-y-2">
                    {data.nilai_tambah.map((e, key) => (
                      <ul key={key} className="ml-4 list-disc">
                        <li>{e}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              </DialogDescription>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
