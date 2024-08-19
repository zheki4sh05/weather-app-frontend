"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function MoreInfoBtn({ param }) {
  const searchParams = useSearchParams();

  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = () => {
   // router.push("/more");

    const params = new URLSearchParams(searchParams);

    //params.set("page", "1");

    if (params.has("value")) {
      params.delete("value");
    }

    params.set("value", param);

    replace(`${pathname}/more?${params.toString()}`);
  };

  return (
    <button
      type="button"
      className="btn btn-outline-info"
      onClick={handleSearch}
    >
      More
    </button>
  );
}

export default MoreInfoBtn;
