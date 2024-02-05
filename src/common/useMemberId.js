import { useSelector, useDispatch } from "react-redux";
import { changeMemberId } from "../redux/modules/members";

export const useMemberId = (name) => {
  const { memberId } = useSelector(({ members }) => members);
  const dispatch = useDispatch();
  const setMemberId = () => dispatch(changeMemberId(name));

  return [memberId, setMemberId];
};
