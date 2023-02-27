import { Icon } from "@iconify/react";

const Search = () => {
  return (
    <>
      <section>
        <div className="searchbox w-full py-3 px-5 rounded-full border">
          <Icon icon={"uil:search"} className="text-3xl" />
          <input type="search" name="search" id="search" />
        </div>
      </section>
    </>
  );
};

export default Search;
