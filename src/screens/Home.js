import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      HOME!!
      <div>
        <Link to="/eventlist">Event list</Link>
      </div>
    </div>
  );
}
