export const Navbar = () => {
  return (
    <div className="bg-light p-2">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active text-dark" href="#">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};
