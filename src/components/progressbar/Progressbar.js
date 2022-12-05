import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Col, Image } from 'react-bootstrap';
import ETHIcon from "../../assets/images/icons/eth.svg";

export const ProgressbarChart = ({data}) => {
    return (
        <div className="ProgressbarChart">
            {data.map((item, idx) => (
                <ProgressbarChartItem key={idx} min={item.min} max={item.max} value={item.value} color={item.color} title={item.title} percent={item.percent}/>
            ))}
        </div>
    )
}

export const ProgressbarChartItem = ({min, max, value, color, title, percent}) => {
    return(
        <div className="ProgressbarChart-item row align-items-center my-1">
            <Col sm={8} xs={8} md={8}>
                <Slider value={value} max={max} style={{color : "red"}}/>
            </Col>
            <Col sm={4} xs={4} md={4} className="d-flex align-items-center justify-content-between">
                <span className="ProgressbarChart-item-title"><span className="me-1" style={{color:color}}>●</span>{title}</span>
                <span className="ProgressbarChart-item-value">{percent}</span>
            </Col>
        </div>
    )
}

export const TableTDProgressbar = ({mValue, value, max}) => {
    return(
        <div className="TableTDProgressbar">
            <div className='d-flex align-items-center'><Image src={ETHIcon} className="me-1"/>{mValue}</div>
            <Slider value={value} max={max}/>
        </div>
    )
}

export const TableTDProgressbar1 = ({mValue, value, max}) => {
    return(
        <div className="TableTDProgressbar">
            <div className='d-flex align-items-center'>{value} ({(value/max*100).toFixed(2)}%)</div>
            <Slider value={value} max={max}/>
        </div>
    )
}

export const TableTDProgressbar2 = ({mValue, value, max}) => {
    return(
        <div className="TableTDProgressbar">
            <div className='d-flex align-items-center'>{value} / {max}</div>
            <Slider value={value} max={max}/>
        </div>
    )
}

export const TableTDProgressbar3 = ({value, max}) => {
    return(
        <div className="TableTDProgressbar">
            <div className='d-flex align-items-center'>{value}</div>
            <Slider value={value} max={max}/>
        </div>
    )
}