import { useLocation } from "react-router-dom";


function SearchResults() {
  const location = useLocation()
  const userInput = location.state?.userInput || "Veri yok"
  const results = location.state?.results
  
  return (
    <div>
      <h1>Aranılan meslek:{userInput}</h1>
      <ul>
        {results.map((result, index)=>(
          <li key={index} style={{ marginBottom: "100px" }}>
            <h3>{result.title}</h3>
            <h3>{result.subtitle}</h3>
            <h3>{result.jod}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchResults;