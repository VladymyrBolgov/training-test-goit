import { DescriptionText } from "./TextInfo.styled";
import { formatCount } from "hook/formatCount";

export const TextInfo = ({ followersCount }) => {
  return (
    <div>
    <DescriptionText> 777 TWEETS</DescriptionText>
    <DescriptionText> {formatCount(followersCount)} FOLLOWERS</DescriptionText>
  </div>
  );
};