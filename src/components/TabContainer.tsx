import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InternshipContainer from "./InternshipContainer";
import { Internship } from "@/app/page";

function TabsContainer({ interships }: { interships: Internship[] }) {
  return (
    <Tabs defaultValue="internship" className="w-full">
      <TabsList className="grid  grid-cols-2 sm:w-[400px] w-full ml-auto">
        <TabsTrigger value="internship">Internships</TabsTrigger>
        <TabsTrigger value="job">Jobs</TabsTrigger>
      </TabsList>
      <TabsContent value="internship">
        <InternshipContainer interships={interships} />
      </TabsContent>
      <TabsContent value="job">
        {/* <InternshipContainer interships={interships} /> */}
      </TabsContent>
    </Tabs>
  );
}

export default TabsContainer;
