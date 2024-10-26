import './index.css'
import {useEffect, useState} from 'react'
import EachCard from '../EachCard'
const Home = () => {
  const [list, setList] = useState([])

  const fetchData = async () => {
    const api = '4799bac2a5f158c5445ebbe39c1f5ea8'
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${api}`,
    )
    const data = await response.json()
    console.log(data.list)
    setList(data.list)
  }
  useEffect(() => {
    fetchData()
  }, [])
  const newArr = []
  list.map(each =>{
    if((newArr.includes(each.dt_txt.split(" ")[0]))){
      console.log(each)
    }else{
      newArr[each.dt_txt.split(" ")[0]] = [each]
    }
  })
  console.log(newArr)
  return (
    <div className="app-container">
      <ul className="home-unordered-list-container">
        {list.map(eachweather => (
          <EachCard key={eachweather.dt} eachweather={eachweather} />
        ))}
      </ul>
    </div>
  )
}
export default Home
