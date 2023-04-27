export const NavBarItem = (props) => {
  return (
      <a className="nav-link" aria-current="page" href={props.url}>{props.text}</a>
  )
}