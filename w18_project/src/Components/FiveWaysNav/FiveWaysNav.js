import {useState} from 'react'
import { fiveWaysArray } from "../FiveWaysDisplay/fiveWaysText"
import connect from "../../images/connect.jpg"
import active from "../../images/active.jpg"
import notice from "../../images/notice.jpg"
import learn from "../../images/learn.jpg"
import give from "../../images/give.jpg"

function FiveWaysNav () {
    const [way, setWay] = useState(0);

    return (
    <>
    <div className="nav-buttons">
        <submit onClick={() => setWay(1)}><img src={connect} alt="connect"/></submit>
        <submit onClick={() => setWay(2)}><img src={active} alt="active"/></submit>
        <submit onClick={() => setWay(3)}><img src={notice} alt="notice"/></submit>
        <submit onClick={() => setWay(4)}><img src={learn} alt="learn"/></submit>
        <submit onClick={() => setWay(5)}><img src={give} alt="give"/></submit>
    </div>
    <div  >
        <p className="text-display" >{fiveWaysArray[way].text.map((item) => <p >{item}</p>)}</p>

  </div>
  </>
    )
}

export default FiveWaysNav
