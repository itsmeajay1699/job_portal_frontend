import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InternshipContainer from "./InternshipContainer";
import { Internship } from "@/app/page";
import { InternshipApiData, JobApiData } from "@/interface";

function TabsContainer({
  interships,
  job,
}: {
  interships: InternshipApiData[];
  job: JobApiData[];
}) {
  return (
    <Tabs defaultValue="internship" className="w-full">
      <TabsList className="grid grid-cols-2 sm:w-[400px] w-full ml-auto border border-muted-secodary">
        <TabsTrigger value="internship">Internships</TabsTrigger>
        <TabsTrigger value="job">Jobs</TabsTrigger>
      </TabsList>
      <TabsContent value="internship">
        <InternshipContainer data={interships} Internship={true} Job={false} />
      </TabsContent>
      <TabsContent value="job">
        <InternshipContainer Job={true} Internship={false} data={job} />
      </TabsContent>
    </Tabs>
  );
}

export default TabsContainer;
