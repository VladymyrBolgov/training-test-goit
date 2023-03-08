import React, { useState, useEffect } from "react";
import {Container } from "./commonStyles/Common.styled"
import {CardBlanc} from "./App.styled";
import { TextInfo } from "./TextInfo/TextInfo";
import { LineAvatar } from "./LineAvatar/LineAvatar";
import { Button }from "./Button/Button";

export const App = () => {
  const storedSettings = JSON.parse(localStorage.getItem('settings'));

  const [followersCount, setFollowersCount] = useState(() =>
    storedSettings ? storedSettings.followersCount : 100500
  );
  const [followingStatus, setFollowingStatus] = useState(() =>
    storedSettings ? storedSettings.followingStatus : 'FOLLOW'
  );
  const [isFollowing, setIsFollow] = useState(() =>
    storedSettings ? storedSettings.isFollowing : false
  );

  useEffect(() => {
    const settings = {
      followersCount,
      followingStatus,
      isFollowing,
    };

    localStorage.setItem('settings', JSON.stringify(settings));
  }, [isFollowing, followersCount, followingStatus]);

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