import Link from "next/link";
import { getSession } from "./libs/lib"
import { cookies } from "next/headers";

export default async function Home() {
  const session = await getSession();

  return (
    <>
    <div className="navbar pt-0">
      <div>
        <h2>TaskTrax </h2>
        {session && <p>Logged in as: {JSON.stringify(session.user.username, null, 2)}</p>}
      </div>
      
      <div className="d-flex justify-content-end">
        {!session && <>
          <div className="pe-4">
              <Link href="/login">
                <button type="button" className="btn btn-primary">Login</button>
              </Link>
            </div>
            <div>
              <Link href="/register">
                <button type="button" className="btn btn-primary">Register</button>
              </Link>
            </div>
        </>}
        {session &&<>
          <div className="pe-4">
              <Link href="/dashboard">
                <button type="button" className="btn btn-primary">Dashboard</button>
              </Link>
            </div>
            <div>
              <Link href="/register">
                <button type="button" className="btn btn-primary">Logout</button>
              </Link>
            </div>
        </>}
      </div>
    </div>

    <div className="container text-center">
      <div className="row">
        <div className="col"></div>
        <div className="col-6">
          <h1>Blah blah blah whatever </h1>
        </div>
        <div className="col"></div>
      </div>
      
    </div>
    </>
  );
}
