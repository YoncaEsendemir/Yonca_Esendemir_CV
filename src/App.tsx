import Header from './components/Header'
import AboutMyself from './components/AboutMyself'
import data from './data/data.json'

function App() {

  console.log("contact details:", data.contactDetails )

  return (
    <div className="min-h-screen">
    <div className="min-w-full bg-gradient-to-br from-slate-50 to-blue-50 p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header contactDetails={data.contactDetails} />
        <AboutMyself abutMySelf={data.abutMySelf} />
      </div>
      </div>
    </div>
  )
}

export default App
