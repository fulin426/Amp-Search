import React from 'react';
import '../index.css'

const Footer = () => {
	return (
	<div>
			<footer role="contentinfo">
	{/*				<p>© Fu-Lin Liu</p>*/}
					<div className='contacts-wrapper'>
					<div className='contact-logo email'>
					<a className='footer-link' href='mailto:fulin426@gmail.com?subject=Hello%20There' aria-label='email contact info'>
					<i className="far fa-envelope fa-2x"></i>
					</a>
				</div>
				<div className='contact-logo linkedin'>
					<a className='footer-link' href='https://www.linkedin.com/in/fu-lin-liu-46694714/' aria-label='Linkedin Page'>
					<i className="fab fa-linkedin fa-2x"></i>
					</a>
				</div>
				<div className='contact-logo github'>
					<a className='footer-link' href='https://github.com/fulin426/Amp-Search'aria-label='Github Account'>
					<i className="fab fa-github fa-2x"></i>
					</a>
				</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
