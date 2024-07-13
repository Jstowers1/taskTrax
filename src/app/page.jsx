import { useSession } from "next-auth/react"
import Link from "next/link";
import { getSession } from "./libs/lib"

export default async function Home() {
  const session = await getSession();

  return (
    <>
    <div className="d-flex justify-content-end">
      <Link href="/login">
        <button type="button" className="btn btn-primary">Login</button>
      </Link>
    </div>

    <div className="container text-center">
      <div className="row">
        <div className="col"></div>
        <div className="col-6">
          <h1>Users: </h1>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
        <div className="col"></div>
      </div>
      
    </div>
    </>
  );
}
