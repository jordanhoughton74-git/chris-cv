import React from "react";
import Link from "next/link";
import { push as Menu } from 'react-burger-menu'

export default class HeaderMobile extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        menuOpen: false
      }
    }
  
    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
      this.setState({menuOpen: state.isOpen})  
    }
    
    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
      this.setState({menuOpen: false})
    }
  
    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu () {
      this.setState(state => ({menuOpen: !state.menuOpen}))
    }

render (){
   
    return (


  <div className="nav-mobile">
        <Menu 
          pageWrapId={ "page-wrap" } 
          outerContainerId={ "outer-container" }
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >    
        
    <Link passHref href="/"><a onClick={() => this.closeMenu()} id="home" className="menu-item">Home</a></Link>
    <Link href="/my-experiences"><a onClick={() => this.closeMenu()} id="about" className="menu-item" >My Experiences</a></Link>
    <Link href="/korea-herald-joshua"><a onClick={() => this.closeMenu()} id="about" className="menu-item" >Korea Herald Joshua</a></Link>
    <Link href="/avalon-english-academy"><a onClick={() => this.closeMenu()} id="about" className="menu-item" >Avalon English Academy</a></Link>
    <Link href="/howard's-school"><a onClick={() => this.closeMenu()} id="about" className="menu-item" >Howard's School</a></Link>
    <Link href="/world-language-school"><a onClick={() => this.closeMenu()} id="about" className="menu-item" >World Language School</a></Link>
    <Link href="/sahmyook-elementary-school"><a onClick={() => this.closeMenu()} id="about" className="menu-item" >Sahmyook Elementary</a></Link>
    <Link href="/classroom"><a onClick={() => this.closeMenu()} id="about" className="menu-item" >Classroom</a></Link>
    <Link href="/spare-time"><a onClick={() => this.closeMenu()} id="about" className="menu-item" >Spare Time</a></Link>
    <Link href="/contact-me"><a onClick={() => this.closeMenu()} id="about" className="menu-item" >Contact Me</a></Link>


</Menu>
</div>

)
}
}
