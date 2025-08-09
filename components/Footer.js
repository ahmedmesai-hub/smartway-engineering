export default function Footer(){
  return (
    <footer className="bg-slate-900 text-slate-300 mt-8">
      <div className="container mx-auto px-4 py-6 text-center">
        © {new Date().getFullYear()} Smartway Engineering — All rights reserved.
      </div>
    </footer>
  )
}
