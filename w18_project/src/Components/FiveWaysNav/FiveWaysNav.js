import {useState} from 'react'
import { fiveWaysArray } from "./fiveWaysText"
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
        <submit onClick={() => setWay(2)}><img src={active} alt="connect"/></submit>
        <submit onClick={() => setWay(3)}><img src={notice} alt="connect"/></submit>
        <submit onClick={() => setWay(4)}><img src={learn} alt="connect"/></submit>
        <submit onClick={() => setWay(5)}><img src={give} alt="connect"/></submit>
    </div>
    <div>
        <p className="info-text">{fiveWaysArray[way].text}</p>
  </div>
  </>
    )
}

export default FiveWaysNav