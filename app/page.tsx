import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return ( 
    <div>
      <Button variant={"destructive"}>
        Click Me
      </Button>
      <UserButton/>
    </div>
   );
}
 
export default HomePage;