import { Badge, Card, Image } from "react-bootstrap";
import "../../assets/styles/global.css";
import ETHIcon from '../../assets/images/icons/eth.svg'
import CardImage1 from '../../assets/images/avatars/card/1.png';
import CardImage2 from '../../assets/images/avatars/card/2.png';
import CardImage3 from '../../assets/images/avatars/card/3.png';
import CardImage4 from '../../assets/images/avatars/card/4.png';
import CardImage5 from '../../assets/images/avatars/card/5.png';
import CardImage6 from '../../assets/images/avatars/card/6.png';
import CardImage7 from '../../assets/images/avatars/card/7.png';

export const WaveAnimationCard = ({color, value1, value2, title, size}) => {
    return (
        <Card className="WaveAnimationCard" style={{borderColor : color, color: 'white' }}>
            <Card.Body className="w-100">
                <div className="WaveAnimationCard-top-title">Priority</div>
                <Card.Title>{value1}</Card.Title>
                <Card.Subtitle>{title}</Card.Subtitle>
                <div className="WaveAnimationCard-bottom-text mt-2">{value2}% Probability</div>
            </Card.Body>
            <div className="waveAnimation">
                <svg viewBox={size} preserveAspectRatio="none">
                    {/* <path className="w1 waveTop" fill={} d="M-8.74,71.55 C289.78,255.11 349.60,4.47 505.36,34.05 L1000.00,500.00 L0.00,500.00 Z" /> */}
                    {/* <path   d="M31.0199 11.405C16.4252 -2.5884 -6.6533 -0.820072 -16.3682 1.81326L-31.1581 55.1351L78.91 87.8563C97.6217 64.7913 130.374 20.4757 111.688 27.7329C88.3314 36.8044 49.2633 28.8967 500.00 500.00Z" /> */}
                    {/* <path  d="M353.101 8.51879C325.515 -8.55895 288.822 5.36396 274.343 12.4797C274.343 12.4797 260.094 23.3196 242.669 18.4733C225.243 13.627 219.735 18.5495 210.995 24.4669C160.505 58.6513 141.757 45.5983 109.98 26.8273C78.203 8.05627 0.172107 36.8965 0.172107 36.8965L18.4223 121.641H453.5C490.04 89.3376 516.061 11.4019 488.924 28.4796C455.004 49.8267 387.582 29.866 500.00 500.00Z"/> */}
                    <path className="w1 waveTop" fill={color} d="M706.004 33.999C650.861 -36.4059 577.449 20.9929 548.478 50.3282C548.478 50.3282 519.961 95.017 485.118 75.0375C450.275 55.058 439.248 75.3516 421.758 99.7468C320.718 240.676 283.244 186.863 219.72 109.478C156.196 32.0922 0.0813497 150.989 0.0813497 150.989L36.4395 500.359H906.617C979.753 367.183 1031.93 45.8849 977.625 116.29C909.746 204.295 774.933 122.005 706.004 33.999Z" />
                    {/* <path className="w2 waveMiddle" fill={color} d="M-23.42,125.83 C187.63,45.89 299.38,57.73 526.80,123.86 L1000.00,500.00 L0.00,500.00 Z" /> */}
                    {/* <path className="w3 waveBottom" fill={color} d="M-23.42,125.83 C172.96,-152.44 217.55,183.06 504.22,55.77 L1000.00,500.00 L0.00,500.00 Z" /> */}
                    <path className="w3 waveBottom" fill={color} d="M431.463 118.463C546.5 74.5 665.74 159.32 700.445 199.722C700.445 199.722 807.046 259.945 907.5 199.722C1007.95 139.5 1331.78 308.701 1344.93 276C1400.98 136.641 1268.61 122.182 1345 15.6015C1421.38 -90.9793 1344.93 407.412 1344.93 407.412L1256.43 500.656H212.221C124.731 317.237 -50.5197 21.4967 14.5 118.463C95.7745 239.671 294.31 170.879 431.463 118.463Z"/>
                </svg>
            </div>
        </Card>
    )
}

export const ValueCard = ({title, value, color}) => {
    return (
        <div className="ValueCard d-flex justify-content-between align-items-center">
            <div className="ValueCard-title">{title}</div>
            <div className="ValueCard-value" style={{color : color}}>{value}</div>
        </div>
    )
}

export const GradientCard = ({title, mValue, value, color, icon, percent}) => {
    return (
        <div className="GradientCard d-flex align-items-center mt-3" style={{background: `linear-gradient(320deg, #0A0A0A 1%, ${color}20 400%) padding-box, linear-gradient(to right, ${color} 0%, transparent 90%)border-box`}}>
            <Image src={icon}/>
            <div className="d-flex flex-column justify-content-between ms-3">
                <div className="GradientCard-title">{title}</div>
                {percent > 0? (
                    <div className="GradientCard-value d-flex justify-content-between align-items-center">
                        <div className="GradientCard-main-value me-1">{mValue}<span className="fs-6" style={{color : "#10BE77"}}>↑</span></div>
                        <span style={{color : "#10BE77"}}>+{percent}% (+{value})</span>
                    </div>
                    ) : (
                        <div className="GradientCard-value d-flex justify-content-between align-items-center">
                        <div className="GradientCard-main-value me-1">{mValue}<span className="fs-6" style={{color : "#EE4E7A"}}>↓</span></div>
                        <span style={{color : "#EE4E7A"}}>{percent}% ({value})</span>
                        </div>                   
                    )}                    
                
            </div>
        </div>
    )
}

export const DetailGradientCard = ({color, title, mValue, percent, top}) => {
    return(
        <Card className="DetailGradientCard" style={{backgroundColor: color}}>
            <Card.Body>
                <Badge className="top-badge d-flex align-items-center justify-content-center">#{top}</Badge>
                <div className="card-name mt-3">{title}</div>
                <div className="d-flex align-items-center my-1">
                    <Image src={ETHIcon} width="20" height="20" className="me-2"/><span className="main-value">{mValue}K</span>
                </div>
                <div className="d-flex align-items-center mt-2">
                    <Badge className="bottom-badge d-flex align-items-center justify-content-center me-2">24h</Badge>
                    {percent >0 ? (<span className="percent" style={{color : "#11BE78"}}>+{percent}%</span>) : (<span className="percent" style={{color : "#EE4E7A"}}>{percent}%</span>)} 
                </div>
            </Card.Body>
        </Card>
    )
}

export const InterestCard = ({avatar, title, network}) => {
    return(
        <Card className="interestCard" style={{ width: '14rem' }}>
            <Card.Body>
                <div className="d-flex align-items-center ">
                    <Image src={avatar} width="50" height="50" className="me-3"/> 
                    <div className="d-flex flex-column">
                        <div className="interestcard-title">{title}</div>
                        <div className="d-flex align-items-center interestcard-network"><Image src={ETHIcon} width="12" height="12" className="me-1"/>{network}</div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}