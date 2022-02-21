import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Button from "components/Button";
import * as S from "./style";
import { favoriteService } from "../../services/favoriteService";
import UserList from "../../components/UserList";

const Favorites = () => {
  const [ favorites, setFavorites ] = useState([]);

  useEffect(() => {
    setFavorites(favoriteService.getFavorites());
  }, []);

  const removeFavorite = userId => setFavorites(favoriteService.removeFavorite(userId));

  const clearFavorites = () => setFavorites(favoriteService.clearFavorites());

  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <div>
          <Button onClick={clearFavorites} label={"Clear Favorites"} color={"primary"}
                  size={"large"}>Click</Button>
        </div>
        <UserList users={favorites} isLoading={false} isFavoritesList={true} removeFavorite={removeFavorite} />
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;
