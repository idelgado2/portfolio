module.exports = {
  email: "isaacdelgado1994@gmail.com",

  socialMedia: [
    {
      name: "Medium",
      url: "https://medium.com/@isaacdelgado1994",
    },
    {
      name: "GitHub",
      url: "https://github.com/idelgado2",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/isaac-delgado-881a8691/",
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Experience",
      url: "/#jobs",
    },
    {
      name: "Projects",
      url: "/#software-projects",
    },
    {
      name: "Blog",
      url: "https://medium.com/@isaacdelgado1994",
    },
    {
      name: "Education",
      url: "/#education",
    },
  ],

  colors: {
    green: "#64ffda",
    navy: "#0a192f",
    darkNavy: "#020c1b",
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
