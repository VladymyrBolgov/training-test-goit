import { useState } from "react";
import {Container}  from "./commonStyles/Common.styled"
import { CardBlanc, ButtonFollow, Content, DescriptionText  } from "./App.styled";


export const App = () => {
  const [followersCount, setFollowersCount] = useState(100500);
  const [followingStatus, setFollowingStatus] = useState('FOLLOW');
  const [isFollowing, setIsFollow] = useState(false);

  const toggleFollowingStatus = () => {
    if (isFollowing === false) {
      setIsFollow(true);
      setFollowingStatus('FOLLOWING');
      setFollowersCount(prev => prev + 1);
    } else if (isFollowing === true) {
      setIsFollow(false);
      setFollowingStatus('FOLLOW');
      setFollowersCount(prev => prev - 1);
    }
  };

  const formatCount = number => {
    const numberFormat = new Intl.NumberFormat('en-US');
    return numberFormat.format(number);
  };

  return (
    <main>
      <Container>
        <CardBlanc>
          <Content>
            <div>
            line avatar
            </div>
            <div>
              <DescriptionText> 777 TWEETS</DescriptionText>
              <DescriptionText> {formatCount(followersCount)} FOLLOWERS</DescriptionText>
            </div>
            <ButtonFollow
              type="button"
              style={isFollowing ? { backgroundColor: "#5CD3A8" } : {}}
              onClick={toggleFollowingStatus}
            >
              {followingStatus}
            </ButtonFollow>
          </Content>
        </CardBlanc>  
      </Container>
    </main>
  );
};


