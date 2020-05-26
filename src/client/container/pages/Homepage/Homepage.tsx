import React from "react";
//import image from "../../../static/img/tour-1-cover.jpg";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import Cards from "../../../component/cards/Cards";

//import Anchor from '../../../component/UI/Anchor/Anchor';

interface HomepageProps {}

const Homepage = ({}: HomepageProps) => {
  //const fetch: MutableRefObject<Fetch | undefined> = useRef(undefined);

  console.log("[RENDER] HOMEPAGE ");

  return (
    <>
      <h5>Welcome to homepage...</h5>
      <Button component={RouterLink} to="/tour">
        To tour page
      </Button>
      <Button component={RouterLink} to="/test">
        To test page
      </Button>
      <Cards items={[]} />
    </>
  );
};
export default React.memo(Homepage);
