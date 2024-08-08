import Link from "next/link";

function SaveInfoBtn() {
  return (
    <Link href="/profile">
      <button type="button" className="btn btn-outline-primary mx-2">
        Add
      </button>
    </Link>
  );
}

export default SaveInfoBtn;
