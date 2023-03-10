import {Link} from 'react-router-dom'
import Footer from "../components/Footer"
import Assets from "../components/Assets"
import Button from "../components/Button"
import Header from "../components/Header"

const HomeGuest = () => {
  return (

<div>
<Header/>
<div id = 'main'>
<article className = 'post featured'>
<section className = 'major'>

	<h1 className = 'flex justifyContent'>
		<Link to = '/'>Welcome to the Illya Site!</Link>
	</h1>

	<p>A wholesome site dedicated to the cutest student and sister servant Illyasviel Von Einzbern; with her cute design, voice, and outfits, this site introduces it all.  Register/Login to see exclusive content made from our various users!</p>
</section>

<Link to="/register" className="image main">
	<img 
		src= {Assets.Melusine} 
		alt="Melusine fan art with moon in the background" 
		loading="lazy"
	/>
</Link>

<ul className = 'special'>
	<li>
		<Button 
			domain = '/register' 
			size = 'large' 
			cname = 'button' 
			text = 'Register Here'
		/>
	</li>
</ul>

</article>



<section className = 'posts'>
<article>
	<section>

		<h2>
			<Link 
				to = '/dashboard'>
				Users Content
			</Link>
		</h2>

			<Link 
				to="/dashboard" 
				className="image main"
			>
			<img 
				src= {Assets.Drawing} 
				alt="Illya Prisma Movie Art Artoria Skin" 
				loading="lazy"
			/>
			</Link>

			<p>See what content users have posted using accounts they have registered through this website.</p>
					
	</section>

	<ul className="special">
		<li>
			<Button 
				domain = '/dashboard' 
				size = 'large' 
				cname = 'button' 
				text = 'See Dashboard'
			/>
		</li>
	</ul>

</article>


				
<article>
	<section>

		<h2>
			<Link 
				to = '/about'>
				Who is Illya?
			</Link>
		</h2>
		
		<Link 
			to = '/about' 
			className="image main">
				<img 
					src= {Assets.HeavenArt} 
					alt="Illya fanart in the forest with a blue bird in all varying blue color pallettes" 
					loading="lazy"
		/>
		</Link>

		<p>Find out more about the character Illya, as well as her many different variations that have been created over the years.</p>

	</section>

	<ul className="special">
		<li>
			<Button 
				domain = '/about' 
				size = 'large' 
				cname = 'button' 
				text = 'Here for More!'
			/>
		</li>
	</ul>

</article>

</section>
</div>

<Footer/>

<div id="copyright">
&copy; choir Design: HTML5 UP
</div>
</div>
  )
}

export default HomeGuest