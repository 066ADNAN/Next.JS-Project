import Link from "next/link"

export default function Home () {
  return (
    <div>
      <a className="bg-red-400">
      <h1 className="text-center" ><u> "WELCOME TO ADNAN MALIK WEBSITE"</u></h1>
      <br />

      <u> <Link className="mr-5 hover:text-red-900"href={"http://localhost:3000/"}>Home</Link>
      <Link className="mr-5 hover:text-red-900"href={"http://localhost:3000/aboutus"}>About</Link>
      <Link className="mr-5 hover:text-red-900"href={"http://localhost:3000/contactus"}>Contact</Link>
      <Link className="mr-5 hover:text-red-900"href={"http://localhost:3000/privacypolicy"}>Terms&Conditions</Link>
      </u>
      <br />
      <br />
      <a href="https://www.linkedin.com/in/adnan-younus-737096234/">
      <button className="flex mx-auto mt-16 text-white bg-red-500 border-3 py-2 px-8 focus:outline-square text-large">LINKEDIN</button>
      </a>
      <a href="https://github.com/066ADNAN">
      <button className="flex mx-auto mt-16 text-white bg-red-500 border-3 py-2 px-8 focus:outline-square text-large">GITHUB</button>
      </a>
      </a>
    </div>
  )
}