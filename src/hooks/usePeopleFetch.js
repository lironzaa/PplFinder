import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [ users, setUsers ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ pageNumber, setPageNumber ] = useState(1);

  const updatePageNumber = () => setPageNumber(pageNumber + 1);

  useEffect(() => {
    fetchUsers();
  }, [ pageNumber ]);

  async function fetchUsers() {
    if (isLoading) return;
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=${pageNumber}`);
    setIsLoading(false);
    setUsers([ ...users, ...response.data.results ]);
  }

  return { users, isLoading, fetchUsers, updatePageNumber };
};
