// // Extra small devices (portrait phones, less than 576px)
// @media(max - width: 575.98px) { ... }

// // Small devices (landscape phones, less than 768px)
// @media(max - width: 767.98px) { ... }

// // Medium devices (tablets, less than 992px)
// @media(max - width: 991.98px) { ... }

// // Large devices (desktops, less than 1200px)
// @media(max - width: 1199.98px) { ... }

export default {
  up: size => {
    const sizes = {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px"
    };
    return `@media(min-width: ${sizes[size]})`;
  },
  down: size => {
    const sizes = {
      xs: "575.98px",
      sm: "767.98px",
      md: "991.98px",
      lg: "1199.98px"
    };
    return `@media(max-width: ${sizes[size]})`;
  }
};
