
import { QueryProvider } from "@/components/QueryProvider";
import UserComponent from "@/components/User";



export default function UserPage() {
  return (
<QueryProvider>
<UserComponent/>
</QueryProvider>

  );
};
