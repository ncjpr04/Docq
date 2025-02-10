import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <Link href="/signup" passHref>
          <Button aria-label="Go to Signup Page">Login</Button>
        </Link>
      </div>
    </div>
  );
}
