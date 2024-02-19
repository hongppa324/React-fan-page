import Member from "components/Member";
import Letter from "components/Letter";
import { MemberProvider } from "context/MemberContext";
import AddLetter from "components/AddLetter";

function MemberTemplate() {
  return (
    <>
      <MemberProvider>
        <Member />
        <Letter />
        <AddLetter />
      </MemberProvider>
    </>
  );
}

export default MemberTemplate;
