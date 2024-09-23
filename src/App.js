import React from "react"
import './index.css';
import LeftSideNavbar from "./components/VerticalNavbar.js"
import MainContent from "./components/Info";
import Card from "./components/Card.js"
import cardData from "./cardData.js"
import TreeTimeline from "./components/Timeline"
import Footer from "./components/Footer.js"

import '@fortawesome/fontawesome-free/css/all.min.css';

/*

npm run build
npm install -g serve
serve -s build

git add . 
git commit -m "Message"
git push -u origin main
OR
npm run deploy -- -m "Message"

git config --global http.postBuffer 524288000          
git fetch prune
 rm -rf node_modules/.cache/gh-pages        
*/
export default function App() {
    const cards = cardData.map(item => <Card key={item.id} item={item} />);
  
    return (
      <div className="background">
        <div className="content-wrapper">
          <LeftSideNavbar />
          <div className="main-content">
            <MainContent />
            <TreeTimeline />
            {cards}
            <Footer />
          </div>
        </div>
      </div>
    );
  }