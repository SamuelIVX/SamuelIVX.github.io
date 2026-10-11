
import { Icon } from './ui/Icon';

export default function Footer() {
  return (
    <footer className="footer"><span>© {new Date().getFullYear()} Samuel Hernandez Balderas • All rights reserved.</span><a href="#main">Back to top<Icon name="down" /></a></footer>
  );
}
