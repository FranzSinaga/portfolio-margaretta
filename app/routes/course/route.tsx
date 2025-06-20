import { CourseComponents } from "./course";
import { EksplorasiComponents } from "./eksplorasi";

export default function Projects() {
  return (
    <div className="mx-5 mb-8 mt-4">
      <div className="mx-auto max-w-[1200px] space-y-3">
        <EksplorasiComponents />
        <CourseComponents />
      </div>
    </div>
  );
}
