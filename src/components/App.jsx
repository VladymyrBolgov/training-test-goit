import { useState } from "react";
import {Container}  from "./commonStyles/Common.styled"
import {
  CardBlanc,
  ButtonFollow,
  DescriptionText,
  Line,
  RoundImg,
  Avatar,
} from "./App.styled";
import avatar from '../images/avatar_user.png'


export const App = () => {
  const [followersCount, setFollowersCount] = useState(100500);
  const [followingStatus, setFollowingStatus] = useState('follow');
  const [isFollowing, setIsFollow] = useState(false);

  const toggleFollowingStatus = () => {
    if (isFollowing === false) {
      setIsFollow(true);
      setFollowingStatus('following');
      setFollowersCount(prev => prev + 1);
    } else if (isFollowing === true) {
      setIsFollow(false);
      setFollowingStatus('follow');
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
       {/* logo */}
        <CardBlanc>
            {/* avatar */}
            <Line>
              <RoundImg>
                <Avatar src={avatar} alt={'avatar_user'} />
              </RoundImg>
            </Line>
        {/* text */}
            <div>
              <DescriptionText> 777 TWEETS</DescriptionText>
              <DescriptionText> {formatCount(followersCount)} FOLLOWERS</DescriptionText>
            </div>
        {/* button */}
            <ButtonFollow
              type="button"
              style={isFollowing ? { backgroundColor: "#5CD3A8" } : {}}
              onClick={toggleFollowingStatus}
            >
              {followingStatus}
            </ButtonFollow>

        </CardBlanc>  
      </Container>
    </main>
  );
};


