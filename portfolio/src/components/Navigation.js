function Navigation(props) {
  const { pages = [], setCurrentPage } = props;
  return (
    <nav className="nav">
      <ul className="ul">
        {pages.map((Page) => (
          <li className="li" key={Page.name}>
            <span onClick={() => setCurrentPage(Page)}>{Page.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
