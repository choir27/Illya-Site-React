import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2022 choir</p>
        <Link to = '/about'>About</Link>
    </footer>
  )
}

export default Footer