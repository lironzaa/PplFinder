import React, { useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";
import { favoriteService } from "../../services/favoriteService";

const Home = () => {
  const { users, isLoading } = usePeopleFetch();
  const [ favorites, setFavorites ] = useState([]);

  const toggleFavorite = selectedUser => setFavorites(favoriteService.toggleFavorite(selectedUser));

  const isOnFavorites = selectedUserId => favorites.some(favoriteUser => favoriteUser.login.uuid === selectedUserId);

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={users} isLoading={isLoading} isFavoritesList={false}
                  toggleFavorite={toggleFavorite} isOnFavorites={isOnFavorites} />
      </S.Content>
    </S.Home>
  );
};

export default Home;
