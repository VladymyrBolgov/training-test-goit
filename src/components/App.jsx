import React, { useState } from "react";
import {Container } from "./commonStyles/Common.styled"
import {CardBlanc} from "./App.styled";
import { TextInfo } from "./TextInfo/TextInfo";
import { LineAvatar } from "./LineAvatar/LineAvatar";
import { Button }from "./Button/Button";

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

  return (
    <main>
      <Container>
        <CardBlanc> 
          <LineAvatar/>
          <TextInfo followersCount={followersCount } />
          <Button
            isFollowing={isFollowing}
            followingStatus={followingStatus}
            onClick={toggleFollowingStatus}
          />
        </CardBlanc>  
      </Container>
    </main>
  );
};