"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


import { useDebouncedCallback } from "use-debounce";
function Searchbar() {
  const inputLabel = "Enter city name";

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (formData) => {

    let term = formData.get("input")
    
    const params = new URLSearchParams(searchParams);
    //params.set("page", "1");

    if (term) {
      params.set("value", term);
    } else {
      params.delete("value");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div style={{ maxWidth: "500px" }} className="d-flex mx-auto mt-5  ">
      <form action={handleSearch}>
      <div className="input-group mb-3 shadow">
        <input
          type="search"
          name="input"
          id="input"
          className="form-control"
          placeholder={inputLabel}
          aria-label={inputLabel}
          // value={""}
          aria-describedby="button-addon2"
          // onChange={(e)=>{setInput(e.target.value); console.log(input) }}
        
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Search
        </button>
      </div>
      </form>
    </div>
  );
}

export default Searchbar;
