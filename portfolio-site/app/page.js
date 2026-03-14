"use strict";
"use client";
import Image from 'next/image';
import { useRouter } from "next/navigation";



export default function HomePage() {
    const router = useRouter();
    const handleClick= () => {
        router.push('/Projects');
    }
    return (
        <main className = "home-page">
      <header className="navbar">
        <div className="logo">
            <Image
            src="/assets/logo-white.svg"
            alt="Logo"
            width={120}
            height={54}
            className="logo-image"/>
        </div>

        <nav className="nav">
          <a href="#about" className="nav-link">Cool Things About Us</a>
          <a href="#companies" className="nav-link">Companies We Were Cool At</a>
          <a href="/projects" className="nav-link">Cool Projects</a>
          <a href="#contact" className="nav-link">Let’s Talk</a>
        </nav>
      </header>

   <section className="hero">
        <div className="hero-overlay">
          <div className="hero-left">
            <h1 className="hero-title">
              WE BRING THE COOL
              <br />
              TO EVERYTHING WE
              <br />
              TOUCH.
            </h1>
          </div>

          <div className="hero-right">
            <p className="hero-text1">
            Some time ago, two creative souls named Ani & Ani (both Aquariuses, because of course) met and realized they were meant to work together. Not just because they share the same name, but because they balance each other like Mchadi and Kveli. *
            </p>

            <p className="hero-text">
            We’re the brains (and charm) behind <span>COOL THINGS</span>, a creative duo full of bold ideas, a love for aesthetics, and the occasional over-caffeinated brainstorm. Crafting stories that stick in your mind longer than your favorite song.
            </p>

            <p className="hero-text">
              * Mchadi - cornbread, Kveli - cheese.
              <br/>
             (Best duo in Georgian cuisine)
            </p>

            <button onClick={handleClick} className="hero-button">EXPLORE PROJECTS</button>
          </div>
        </div>
      </section>

  <section className="companies">
  <div className="companies-header">
    <h2 className="companies-title">COMPANIES WE <br/>WERE COOL AT</h2>
    <h2 className="awards-title">AWARDS</h2>
  </div>

  <div className="companies-content">

    <div className="column">
      <div className="job">
        <h4>Ani J</h4>
        <p className="role">Art Director / Designer</p>
      </div>

      <div className="job">
        <h4>2023-Now Bohema Magazine</h4>
        <p className="role1">Creative Designer</p>
      </div>

      <div className="job">
        <h4>2022-Now Tbilisi Hills Golf & Residences</h4>
        <p className="role1">Creative Designer, Art Director</p>
      </div>

      <div className="job">
        <h4>2021-2022 YUMMY BAZAAR</h4>
        <p className="role1">Digital Design Advisor</p>
      </div>

      <div className="job">
        <h4>2019-2021 Solani Creative</h4>
        <p className="role1">Ui/UX Designer</p>
      </div>

      <div className="job">
        <h4>2019-2021 Unicard / Payunicard</h4>
        <p className="role1">Graphic Designer, UI/UX Designer</p>
      </div>

      <div className="job">
        <h4>2017-2018 BAUM</h4>
        <p className="role1">Graphic Designer</p>
      </div>

    </div>


    <div className="column">
      <div className="job">
        <h4>Ani K</h4>
        <p className="role">Art Director / Creative Copywriter</p>
      </div>

      <div className="job">
        <h4>2023-Now Tbilisi Hills Golf & Residences</h4>
        <p className="role1">Creative Copywriter, Content Manager</p>
      </div>

      <div className="job">
        <h4>2023-Now Es Aris Kino</h4>
        <p className="role1">Co-founder, Editor, Film Critic</p>
      </div>

      <div className="job">
        <h4>2021-Now Kutaisi International Short Film Festival</h4>
        <p className="role1">Social Media Manager</p>
      </div>

      <div className="job">
        <h4>2022-2023 Saatchi & Saatchi</h4>
        <p className="role1">Account Manager</p>
      </div>

      <div className="job">
        <h4>2020-2021 Holmes & Watson</h4>
        <p className="role1">Copywriter, Script Writer</p>
      </div>
    </div>

    <div className="awards">
      <div className="job">
        <h4>2025 Cannes Lions <br/>Georgia</h4>
        <p className="role2">Shortlist</p>
      </div>

      <div className="job">
        <h4>2025 Young Ones <br/>Show</h4>
        <p className="role2">Shortlist</p>
      </div>
    </div>

  </div>
    </section>

      </main>
    )
}