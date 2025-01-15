'use client'

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col gap-5 min-h-screen">
      <div className="fixed top-5 flex items-center">
        <img className="w-10" src="./icon-improve.png" alt="" />
        <h1>Improving Code</h1>
      </div>
      <p className="fixed bottom-5">Turning your code into your future</p>
      <div className="flex items-center gap-5">
        <button className="px-10">Login</button>
        <button className="px-10">Docs</button>
        <button className="px-10">Contribute</button>
      </div>
      <div>
          <p>An open source application that helps developers be more productive.</p>
        </div>
    </div>
  );
}

// Coments of the last day (13/01)

// Consegui fazer algumas coisas, como definir o backgroundcolor, font e também a hierarquia de pastas, agora só preciso saber como criar o sidenav que vai me levar a essas pastas, gostei de como está ficando por agora, mas a caminhada vai ser longa pela frente.

