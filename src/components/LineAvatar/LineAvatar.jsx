import { Line, RoundImg, Avatar } from './LineAvatar.styled';
import avatar from '../../images/avatar_user.png'

export const LineAvatar = () => {
    return (
        <Line>
        <RoundImg>
          <Avatar src={avatar} alt={'avatar_user'} />
        </RoundImg>
      </Line>
    );
  };