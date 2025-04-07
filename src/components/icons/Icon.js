import React from "react";
import PropTypes from "prop-types";
import IconExternal from "./External";
import IconFolder from "./Folder";
import IconFork from "./Fork";
import IconGitHub from "./Github";
import IconInstagram from "./Instagram";
import IconLinkedin from "./Linkedin";
import IconLoader from "./Loader";
import IconMedium from "./Medium";
import IconStar from "./Star";
import IconEmail from "./Email";

const Icon = ({ name }) => {
  switch (name) {
    case "External":
      return <IconExternal />;
    case "Folder":
      return <IconFolder />;
    case "Fork":
      return <IconFork />;
    case "GitHub":
      return <IconGitHub />;
    case "Instagram":
      return <IconInstagram />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Loader":
      return <IconLoader />;
    case "Medium":
      return <IconMedium />;
    case "Star":
      return <IconStar />;
    case "Email":
      return <IconEmail />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
