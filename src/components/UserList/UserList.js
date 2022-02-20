import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const UserList = ({
                    users,
                    isLoading,
                    isFavoritesList,
                    removeFavorite,
                    toggleFavorite,
                    isOnFavorites,
                    updatePageNumber
                  }) => {
  const [ hoveredUserId, setHoveredUserId ] = useState();
  const [ filteredUsers, setFilteredUsers ] = useState([]);
  const [ filteredCountries, setFilteredCountries ] = useState([]);

  useEffect(() => {
    if (!filteredCountries.length) setFilteredUsers([ ...users ]);
    else setFilteredUsers(users.filter(user => filteredCountries.indexOf(user.location.country) !== -1));
  }, [ filteredCountries, users ]);

  const handleMouseEnter = index => setHoveredUserId(index);

  const handleMouseLeave = () => setHoveredUserId();

  const onCheckboxClicked = (selectedCountry, isChecked) => {
    if (isChecked) setFilteredCountries([ ...filteredCountries, selectedCountry ]);
    else setFilteredCountries(filteredCountries => filteredCountries.filter(country => country !== selectedCountry));
  };

  const handleScroll = event => {
    let isBottomPage = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    if (!isFavoritesList && isBottomPage && !filteredCountries.length) updatePageNumber();
  };

  return (
    <S.UserList>
      <S.Filters>
        <CheckBox onChange={onCheckboxClicked} value="Brazil" label="Brazil" />
        <CheckBox onChange={onCheckboxClicked} value="Australia" label="Australia" />
        <CheckBox onChange={onCheckboxClicked} value="Canada" label="Canada" />
        <CheckBox onChange={onCheckboxClicked} value="Germany" label="Germany" />
        <CheckBox onChange={onCheckboxClicked} value="France" label="France" />
      </S.Filters>
      <S.List onScroll={handleScroll}>
        {filteredUsers.map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <S.UserPicture src={user?.picture.large} alt="user-picture" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper
                isVisible={!isFavoritesList ? index === hoveredUserId || isOnFavorites(user.login.uuid) : isFavoritesList}>
                <IconButton onClick={() => !isFavoritesList ? toggleFavorite(user) : removeFavorite(user.login.uuid)}>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
