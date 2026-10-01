import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const projects=[
["💬","Real-Time Chat Application","Full-stack messaging app with authentication, conversations, real-time messaging and Socket.IO communication.",["React","Node.js","Express","MongoDB","Socket.IO","JWT"]],
["🚗","Online Vehicle Service Booking","Booking platform with service slots, booking history, admin actions and mechanic assignment.",["Angular","Spring Boot","MySQL","REST API"]],
["🍔","Online Food Delivery System","Food delivery platform with restaurant information, menus, orders and order history.",["MERN","MySQL","REST API"]],
["📝","Online Quiz System","Interactive quiz app with answer locking, automatic scoring and result display.",["React","JavaScript","MySQL"]],
["🎓","Student Registration System","Full-stack registration application with validation, APIs and persistent student records.",["React","Node.js","Express","MySQL"]],
["🧮","Calculator with Logs","Calculator that stores calculation history through a Java/JDBC backend and MySQL.",["HTML","CSS","JavaScript","Java","JDBC","MySQL"]]
];
const skills={Frontend:["HTML","CSS","JavaScript","React","Angular"],Backend:["Node.js","Express","Java","Spring Boot","REST APIs"],Database:["MySQL","MongoDB","PostgreSQL"],Tools:["Git","GitHub","Postman","VS Code"]};

function App(){
 const [open,setOpen]=useState(false);
 const nav=["Home","About","Skills","Projects","Education","Contact"];
 return <div className="app">
  <header className="navbar"><a className="logo" href="#home">AM</a><button className="menu" onClick={()=>setOpen(!open)}>☰</button>
   <nav className={open?"nav open":"nav"}>{nav.map(x=><a onClick={()=>setOpen(false)} key={x} href={"#"+x.toLowerCase()}>{x}</a>)}</nav>
  </header>
  <main>
   <section id="home" className="hero section">
    <div><p className="eyebrow">FULL-STACK WEB DEVELOPER</p><h1>Hi, I'm <span>Anmol Mishra.</span></h1><h2>I build modern web applications.</h2>
    <p className="heroText">B.Sc. (Hons.) Computer Science and Data Analytics graduate from IIT Patna, focused on building responsive, scalable and user-friendly full-stack applications.</p>
    <div className="actions"><a className="btn primary" href="#projects">View Projects ↗</a><a className="btn secondary" href="mailto:anmolmishra9589@gmail.com">Email Me</a></div>
    <div className="social"><a href="https://github.com/mshiv95" target="_blank">GitHub ↗</a><a href="https://www.linkedin.com/in/anmol-mishra-b374b7348" target="_blank">LinkedIn ↗</a><a href="mailto:anmolmishra9589@gmail.com">anmolmishra9589@gmail.com</a></div></div>
    <div className="code"><div className="dots"><i/><i/><i/></div><pre>{`const developer = {
  name: "Anmol Mishra",
  role: "Full-Stack Developer",
  education: "IIT Patna",
  graduation: 2026,
  stack: ["React","Node.js","Java",
          "Spring Boot","MySQL","MongoDB"],
  status: "Open to opportunities"
};`}</pre></div>
   </section>

   <section id="about" className="section"><div className="heading"><p className="eyebrow">ABOUT ME</p><h2>Turning ideas into <span>working products.</span></h2></div>
    <div className="about"><div><p className="lead">I enjoy designing clean interfaces and building the backend logic that powers practical web applications.</p><p className="muted">My projects cover authentication, REST APIs, databases, real-time communication, booking systems and interactive applications. I'm also continuously improving my DSA, system design and software engineering skills.</p></div>
    <div className="stats"><div><b>2026</b><small>Graduation</small></div><div><b>6+</b><small>Projects</small></div><div><b>Full</b><small>Stack Focus</small></div><div><b>∞</b><small>Learning</small></div></div></div>
   </section>

   <section id="skills" className="section"><div className="heading"><p className="eyebrow">TECH STACK</p><h2>Tools I use to <span>build.</span></h2></div>
    <div className="skills">{Object.entries(skills).map(([k,v])=><div className="skill" key={k}><h3>{k}</h3><div className="chips">{v.map(s=><span key={s}>{s}</span>)}</div></div>)}</div>
   </section>

   <section id="projects" className="section"><div className="heading"><p className="eyebrow">FEATURED WORK</p><h2>Projects that show what I <span>can build.</span></h2></div>
    <div className="projects">{projects.map((p,i)=><article className="project" key={p[1]}><div className="projectTop"><span className="icon">{p[0]}</span><small>0{i+1}</small></div><h3>{p[1]}</h3><p>{p[2]}</p><div className="chips">{p[3].map(s=><span key={s}>{s}</span>)}</div><div className="projectBottom"><a href="https://github.com/mshiv95" target="_blank">GitHub ↗</a><span>Full-stack project</span></div></article>)}</div>
   </section>

   <section id="education" className="section"><div className="heading"><p className="eyebrow">EDUCATION</p><h2>My academic <span>journey.</span></h2></div>
    <div className="education"><strong>2026</strong><div><label>BACHELOR OF SCIENCE (HONOURS)</label><h3>Computer Science and Data Analytics</h3><p className="muted">Indian Institute of Technology Patna (IIT Patna)</p></div></div>
   </section>

   <section id="contact" className="section"><div className="contact"><p className="eyebrow">GET IN TOUCH</p><h2>Let's build something <span>great.</span></h2><p>Open to software development opportunities, internships, freelance projects and collaborations.</p><div className="actions center"><a className="btn primary" href="mailto:anmolmishra9589@gmail.com">anmolmishra9589@gmail.com ↗</a><a className="btn secondary" href="https://www.linkedin.com/in/anmol-mishra-b374b7348" target="_blank">LinkedIn ↗</a></div></div></section>
  </main>
  <footer><span>© 2026 Anmol Mishra</span><div><a href="https://github.com/mshiv95" target="_blank">GitHub</a> · <a href="mailto:anmolmishra9589@gmail.com">Email</a> · <a href="#home">Back to top ↑</a></div></footer>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);