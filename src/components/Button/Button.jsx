import { ButtonFollow } from "./Button.styled";

export const Button = ({isFollowing, followingStatus, onClick}) => {
    return (
        <ButtonFollow
            type="button"
            style={isFollowing ? { backgroundColor: "#5CD3A8" } : {}}
            onClick={onClick}
        >
            {followingStatus}
        </ButtonFollow>
        
    );
  };