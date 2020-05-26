import React from "react";
//import image from "../../../static/img/tour-1-cover.jpg";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@material-ui/core";

//import Anchor from '../../../component/UI/Anchor/Anchor';

interface TourPageProps {}

const TourPage = ({}: TourPageProps) => {
  //const fetch: MutableRefObject<Fetch | undefined> = useRef(undefined);

  console.log("[RENDER] TOURPAGE ");

  return (
    <>
      <h5>Welcome to tour page...</h5>
      <Button component={RouterLink} to="/">
        To home page.
      </Button>
      <Button component={RouterLink} to="/test">
        To test page
      </Button>
    </>
  );
};
export default React.memo(TourPage);
