import SearchInput from "../../Inputs/SearchInput";
import CategoriesAutocomplete from "../../AutoCompletes/CategoriesAutocomplete";
import * as React from "react";
import { useRef, useState } from "react";
import SearchButton from "../../Buttons/SearchButton";
import { ProjectCategoriesEnum, QueryProjectsArgs } from "../../../types/resolvers";
import { OperationVariables } from "@apollo/client";
import MoneyInput from "../../Inputs/MoneyInput";
import SkillsAutocomplete from "../../AutoCompletes/SkillsAutocomplete";
import { Stack } from "@mui/joy";
import Collapse from "@mui/material/Collapse"; 

export function SearchForm(props: { onRefetch: (variables?: (Partial<OperationVariables> | undefined)) => void }) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const categoriesAutocompleteRef = useRef<HTMLInputElement>(null);
  const moneyInputMinRef = useRef<HTMLInputElement>(null);
  const moneyInputMaxRef = useRef<HTMLInputElement>(null);
  const [skills, setSkills] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false); 

  function searchOnClickHandler() {
    let variables: QueryProjectsArgs = {};
    let isEmpty = true;
    variables.filter = {};
    variables.query = "";
    if (searchInputRef.current && searchInputRef.current.value !== "") {
      variables.query = searchInputRef.current.value;
      searchInputRef.current.value = "";
      isEmpty = false;
    }
    if (categoriesAutocompleteRef.current && categoriesAutocompleteRef.current.value !== "") {
      variables.filter.category = categoriesAutocompleteRef.current.value.split(" ").join("_").toUpperCase() as ProjectCategoriesEnum;
      isEmpty = false;
    }
    if (moneyInputMinRef.current && moneyInputMinRef.current.value !== "") {
      variables.filter.priceMin = parseFloat(moneyInputMinRef.current.value);
      moneyInputMinRef.current.value = "";
      isEmpty = false;
    }
    if (moneyInputMaxRef.current && moneyInputMaxRef.current.value !== "") {
      variables.filter.priceMax = parseFloat(moneyInputMaxRef.current.value);
      moneyInputMaxRef.current.value = "";
      isEmpty = false;
    }
    if (skills.length >= 1) {
      variables.filter.skills = skills;
      setSkills(() => []);
      isEmpty = false;
    }
    !isEmpty && props.onRefetch(variables); 
  }

  const searchBestMatchOnClickHandler = () =>
    props.onRefetch({
      query: "",
      filter: {},
    });

  return (
    <Stack spacing={2} sx={{}}>
      <SearchInput onClickHandler={searchOnClickHandler} parentRef={searchInputRef} />

      <Collapse in={isOpen}> {/* Collapse component */}
        <CategoriesAutocomplete parentRef={categoriesAutocompleteRef} />
        <SkillsAutocomplete skills={skills} setSkills={setSkills} />
        <Stack spacing={2} direction="row">
          <MoneyInput placeholder="price Min" parentRef={moneyInputMinRef} />
          <MoneyInput placeholder="price Max" parentRef={moneyInputMaxRef} />
        </Stack>
      </Collapse>

      {/* Toggle button */}
      <SearchButton
        label={isOpen ? "Hide Filters" : "Show Filters"}
        onClickHandler={() => setIsOpen(!isOpen)}
      />

      <Stack direction="row" spacing={1}>
        <SearchButton label={"search"} onClickHandler={searchOnClickHandler} />
        <SearchButton label={"Best match"} onClickHandler={searchBestMatchOnClickHandler} />
      </Stack>
    </Stack>
  );
}
