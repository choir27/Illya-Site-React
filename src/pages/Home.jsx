import {Link} from 'react-router-dom'
import Sitonai from "../assets/home/sitonai.jpg"
import Gameplay from "../assets/home/Gameplay.PNG"
import IllyaUBW from "../assets/home/Heaven Fanart.jpg"
import IllyaPrismaMovie from "../assets/home/Drawing.jpg"
import Button from "../components/Button"

const Home = () => {

   const regular = 'regularFont'
   const medium = 'mediumFont'

  return (
<div className = 'home'>
   <section id = 'one' className = 'flex column alignItems'>

      <h2 className = {medium}>Who is Illya?</h2>
      <p className = {regular}>A wholesome site dedicated to the cutest student and sister servant; with her cute design, cute voice, and cute outfits, this site introduces it all.</p>
      <Link to = "/about" className = 'flex column alignItems'>
<img src = {Sitonai} alt = 'sitonai fan art'/>
<Button text = 'Click here to find out more!' cName = {"button " + regular} />
</Link>
   </section>


   <section id = 'two' className = 'flex column alignItems'>
   <div className = 'flex row'>
<section className = "flex column alignItems justifyContent">
<h5 className = {medium}>Contact</h5>
<Link href = "/contact" className = 'flex alignItems column'>
     <img src={IllyaUBW} alt='Drawing'/>
     <Button cName = {"button flex " + regular} text = {'Contact'}/>
</Link>
<p className ={regular}>Contact</p>
</section>


<section className = "flex column alignItems justifyContent">
<h5 className = {medium}>Gameplay</h5>
<Link to = "/gameplay" className = 'flex alignItems column'>
<img src = {Gameplay} alt = "Summon" className = 'summon' />
<Button cName = {"button flex " + regular} text = {'Play as Illya!'}/>
</Link>
<p className ={regular}>Videos and explanations of Illya's gameplay in the mobile game FGO.</p>
</section>


<section className = "flex column alignItems justifyContent">
<h5 className = {medium}>Dashboard</h5>
<Link href = "/dashboard" className = 'flex alignItems column'>
<img src = {IllyaPrismaMovie} alt = "Prisma Movie" />
<Button cName = {"button flex " + regular} text = {'Dashboard of User Posts'}/>
</Link>
<p className ={regular}>Artwork posted by other users</p>
</section>

</div>
   </section>


   </div>

     )
}

export default Home