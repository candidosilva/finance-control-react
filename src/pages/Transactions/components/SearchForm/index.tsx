import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search for transactions" />

      <button>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  );
}
