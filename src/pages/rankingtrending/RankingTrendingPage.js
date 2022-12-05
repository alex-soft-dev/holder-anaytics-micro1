import React, { useState, useEffect } from "react";

import { Card, Col, Row, Tab, Tabs, Image, Button, ButtonGroup, Form } from "react-bootstrap";
import Header from "../../components/layouts/header/Header";
import {
  AddedTable,
  CollectionsTable,
  MarketplaceTable,
  MintsTable,
  SalesTable,
} from "../../components/tables/Tables";
import InfoIcon from "../../assets/images/icons/info.svg";
import SettingIcon from "../../assets/images/icons/setting.svg";
import OpenseaIcon from "../../assets/images/avatars/marketplace/1.png";
import { TraderChart, TradingChart } from "../../components/charts/Charts";
import store from "../../config/Store";
import LogoIcon from "../../assets/images/logo.png";
import Market1 from '../../assets/images/avatars/marketplace/1.png';
import Market2 from '../../assets/images/avatars/marketplace/2.png';
import Market3 from '../../assets/images/avatars/marketplace/3.png';
import Market4 from '../../assets/images/avatars/marketplace/4.png';
import Market5 from '../../assets/images/avatars/marketplace/5.png';
import Market6 from '../../assets/images/avatars/marketplace/6.png';
import Market7 from '../../assets/images/avatars/marketplace/7.png';
import Market8 from '../../assets/images/avatars/marketplace/8.png';
import Market9 from '../../assets/images/avatars/marketplace/9.png';
import Market10 from '../../assets/images/avatars/marketplace/10.png';

export default function RankingTrendingPage() {
  const [active, setActive] = useState("active");

  const [headerTitle, setHeaderTitle, updateHeaderTitle] = store.useState("headerTitle");

  useEffect(() => {
    setHeaderTitle("TOP COLLECTIONS")
  }, []);

  const changeHeaderTitle = (key) => {
    let _headerTitle = '';

    if(key == 1) {
      _headerTitle = "TOP COLLECTIONS";
    }
    if(key == 2) {
      _headerTitle = "TOP MINTS";
    }
    if(key == 3) {
      _headerTitle = "NEWLY ADDED";
    }
    if(key == 4) {
      _headerTitle = "TOP SALES";
    }
    if(key == 5) {
      _headerTitle = "MARKETPLACES";
    }
    setHeaderTitle(_headerTitle);
  }


  const data5 = [
    {
      name: "Tranding Size",
      data: [9600, 5900, 5800, 4100, 3600, 500, 400, 450, 100, 0],
    },
  ];

  const data6 = [
    {
      data: [30000, 8000, 5000, 3000, 1000, 500, 100, 100, 100],
    },
    {
      name: "stress",
      data: [9800, 5900, 5800, 4100, 900, 700, 800, 100, 0],
    },
    {
      name: "stress",
      data: [9800, 5900, 5800, 4100, 900, 700, 800, 100, 0],
    },
  ];
  

  const barOption2 = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 5,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
        columnWidth: '70%',
        barHeight: '50%',
        distributed: false,
      },
    },
    colors: ["#5A66F9"],
    stroke: { width: 0 },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      tickAmount: 5,
      axisBorder: {
        show: false,
      },
      categories: ["OpenSea", "LooksRare", "X2Y2", "Blur", "Blur Aggregator", "CryptoPunks", "Gem", "SudoSwap", "Foundation", "Element"],  
    },
    grid: {
      show: true,
      position: "back",
      borderColor: "#ffffff66",
      strokeDashArray: 0,
      xaxis: {
        lines: {
            show: true
        }
      },   
      yaxis: {
          lines: {
              show: true
          }
      }, 
      padding: {
        top: -20,
        right: -15,
        bottom: -15,
        left: 0
    },  
    },
    yaxis: {
      show: false,
      showAlways: true,
      opposite: false,
      labels: {
        style: { fontFamily: "Work Sans" },
      },
      axisBorder: {
        show: false,
        color: '#000',
        offsetX: 0,
        offsetY: 0
    },
    axisTicks: {
      show: false,
    }
    },
  };

  const barOption3 = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 5,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
        columnWidth: '70%',
        barHeight: '50%',
        distributed: false,
      },
      "pie": {
        "donut": {
            "labels": {
                "name": {},
                "value": {},
                "total": {}
            }
        }
    }
    },
    legend : {
      show : false,
      position: 'top',
      horizontalAlign: 'left', 
    },
    colors: ["#FBAD37", "#5A66F9", "#BB6BD9"],
    stroke: { width: 0 },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["OpenSea", "LooksRare", "X2Y2", "Blur", "Blur Aggregator", "CryptoPunks", "Gem", "SudoSwap", "Foundation", "Element"],
      tickAmount: 4,
    },
    grid: {
      show: true,
      position: "back",
      borderColor: "#ffffff66",
      strokeDashArray: 0,
      xaxis: {
        lines: {
            show: true
        }
      },   
      yaxis: {
          lines: {
              show: true
          }
      }, 
      padding: {
        top: -20,
        right: -15,
        bottom: -15,
        left: 0
    },  
    },
    yaxis: {
      show: false,
      showAlways: true,
      opposite: false,
      labels: {
        style: { fontFamily: "Work Sans" },
      },
      axisBorder: {
        show: false,
        color: '#000',
        offsetX: 0,
        offsetY: 0
    },
    axisTicks: {
      show: false,
    }
    },
  };


  const CollectionTab = () => {
    return (
      <div className="CollectionTab">
        <CollectionsTable />
      </div>
    );
  };

  const MintsTab = () => {
    return (
      <div className="MintsTab">
        <MintsTable />
      </div>
    );
  };

  const AddedTab = () => {
    return (
      <div className="AddedTab">
        <AddedTable />
      </div>
    );
  };

  const SalesTab = () => {
    return (
      <div className="SalesTab">
        <SalesTable />
      </div>
    );
  };
  const marketplaceData = [
    {
      avatar: Market1,
      title: "OpenSea",
      volume: { value: "8560", max: "9000", mvalue: "8560" },
      sales: { value: 44964, max: 50000 },
      traders: { value: 31340, max: 40000 },
      buyers: { value: 15652, max: 30000 },
      sellers: { value: 19988, max: 30000 },
      fRate: 2.5,
    },
    {
      avatar: Market2,
      title: "LooksRare",
      volume: { value: "4750", max: "9000", mvalue: "4750" },
      sales: { value: 453, max: 50000 },
      traders: { value: 394, max: 400 },
      buyers: { value: 177, max: 200 },
      sellers: { value: 247, max: 400 },
      fRate: 2.00,
    },
    {
      avatar: Market3,
      title: "X2Y2",
      volume: { value: "3680", max: "9000", mvalue: "3680" },
      sales: { value: 2756, max: 50000 },
      traders: { value: 2371, max: 2400 },
      buyers: { value: 1030, max: 2000 },
      sellers: { value: 1512, max: 200 },
      fRate: 0.50,
    },
    {
      avatar: Market4,
      title: "Blur",
      volume: { value: "2790", max: "9000", mvalue: "2790" },
      sales: { value: 8797, max: 50000 },
      traders: { value: 5193, max: 5200 },
      buyers: { value: 2275, max: 3000 },
      sellers: { value: 3774, max: 4000 },
      fRate: 0.00,
    },
    {
      avatar: Market5,
      title: "Blur Aggregator",
      volume: { value: "2360", max: "9000", mvalue: "2360" },
      sales: { value: 14055, max: 50000 },
      traders: { value: 8109, max: 8200 },
      buyers: { value: 2194, max: 3000 },
      sellers: { value: 6607, max: 10000 },
      fRate: 0.00,
    },
    {
      avatar: Market6,
      title: "CryptoPunks",
      volume: { value: "8560", max: "9000", mvalue: "8560" },
      sales: { value: 44964, max: 50000 },
      traders: { value: 31340, max: 40000 },
      buyers: { value: 15652, max: 30000 },
      sellers: { value: 19988, max: 30000 },
      fRate: 2.5,
    },
    {
      avatar: Market7,
      title: "Gem",
      volume: { value: "8560", max: "9000", mvalue: "8560" },
      sales: { value: 44964, max: 50000 },
      traders: { value: 31340, max: 40000 },
      buyers: { value: 15652, max: 30000 },
      sellers: { value: 19988, max: 30000 },
      fRate: 2.5,
    },
    {
      avatar: Market8,
      title: "SudoSwap",
      volume: { value: "8560", max: "9000", mvalue: "8560" },
      sales: { value: 44964, max: 50000 },
      traders: { value: 31340, max: 40000 },
      buyers: { value: 15652, max: 30000 },
      sellers: { value: 19988, max: 30000 },
      fRate: 2.5,
    },
    {
      avatar: Market9,
      title: "Uniswap",
      volume: { value: "8560", max: "9000", mvalue: "8560" },
      sales: { value: 44964, max: 50000 },
      traders: { value: 31340, max: 40000 },
      buyers: { value: 15652, max: 30000 },
      sellers: { value: 19988, max: 30000 },
      fRate: 2.5,
    },
    {
      avatar: Market10,
      title: "Foundation",
      volume: { value: "8560", max: "9000", mvalue: "8560" },
      sales: { value: 44964, max: 50000 },
      traders: { value: 31340, max: 40000 },
      buyers: { value: 15652, max: 30000 },
      sellers: { value: 19988, max: 30000 },
      fRate: 2.5,
    },
  ];

  
  const MarketplaceTab = () => {
    return (
      <div className="MarketplaceTab">
        <Row>
          <Col sm={12} xs={12} md={6}>
            <Card className="BackCard text-white border-gradient-gray">
              <Card.Body>
              <div className="chart-card-header mb-3 d-flex align-items-center justify-content-between">
                <div className="chart-card-header-title d-flex align-items-center">
                  Tranding Size
                  <Image
                    src={InfoIcon}
                    className="ms-2"
                    style={{ filter: "invert(0.5)" }}
                  />
                </div>
                <div className="SearchOption">
                  <div className="d-flex align-items-center flex-row">
                    <Image src={SettingIcon} width="10" height="10" className="me-1"/>
                    <ButtonGroup
                        aria-label="Basic example"
                        className="ms-2 timefilter switch-control"
                      >                      
                        <Button variant="secondary" className="active"></Button>
                        <Button variant="secondary"></Button>
                    </ButtonGroup>
                    <ButtonGroup
                      aria-label="Basic example"
                      className="ms-2 timefilter"
                    >                      
                      <Button variant="secondary" className="active">Volume</Button>
                      <Button variant="secondary">Sales</Button>
                    </ButtonGroup>
                    <Form.Select aria-label="select value" className="ms-2">
                      <option value="1">24H</option>
                      <option value="2">7D</option>
                      <option value="3">30D</option>
                    </Form.Select>
                  </div>
                </div>
              </div>              
              <Row>
                <Col md={2} sm={1} className>
                  {
                    marketplaceData.map((item, idx) => (
                      <div className="chart-legend-title d-flex align-items-center my-2">
                        <Image src={item.avatar} width="20" height="20" className="border rounded-circle me-2"/><span className="d-sm-none d-md-block">{item.title}</span>
                      </div>
                    ))
                  }
                </Col>
                <Col md={10} sm={11} className="position-relative"><TradingChart option={barOption2} data={data5} height="300"/><Image src={LogoIcon} width="60" height="60" className="position-absolute chart-opacity-logo"/></Col>
              </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} xs={12} md={6}>
            <Card className="BackCard text-white border-gradient-gray">
              <Card.Body>
              <div className="chart-card-header d-flex align-items-center justify-content-between">
                <div className="chart-card-header-title d-flex align-items-center">
                  Traders
                  <Image
                    src={InfoIcon}
                    className="ms-2"
                    style={{ filter: "invert(0.5)" }}
                  />
                </div>
                
                <div className="SearchOption">
                  <div className="d-flex align-items-center flex-row">
                  <Image src={SettingIcon} width="10" height="10" className="me-1"/>
                    <ButtonGroup
                        aria-label="Basic example"
                        className="ms-2 timefilter switch-control"
                      >                      
                        <Button variant="secondary" className="active"></Button>
                        <Button variant="secondary"></Button>
                    </ButtonGroup>
                    <Form.Select aria-label="select value" className="ms-2">
                      <option value="1">24H</option>
                      <option value="2">7D</option>
                      <option value="3">30D</option>
                    </Form.Select>
                  </div>
                </div>
              </div>
              <Row>
                <div className="d-flex align-items-center chart-card-meta-tag">
                  <div className="d-flex align-items-center me-3"><span className="me-1 list-icon">●</span><span className="me-1">Traders</span> <strong className="ms-1">2371</strong><Image className="ms-2" src={InfoIcon} width="10"/></div>
                  <div className="d-flex align-items-center me-3"><span className="me-1 list-icon">●</span><span className="me-1">Traders</span> <strong className="ms-1">2371</strong><Image src={InfoIcon}  className="ms-2" width="10"/></div>
                  <div className="d-flex align-items-center me-3"><span className="me-1 list-icon">●</span><span className="me-1">Traders</span> <strong className="ms-1">2371</strong><Image src={InfoIcon}  className="ms-2" width="10"/></div>
                </div>
              </Row>
              <Row>
                <Col md={2} sm={1} className>
                  {
                    marketplaceData.map((item, idx) => (
                      <div className="chart-legend-title d-flex align-items-center my-2">
                        <Image src={item.avatar} width="20" height="20" className="border rounded-circle me-2"/><span className="d-sm-none d-md-block">{item.title}</span>
                      </div>
                    ))
                  }
                </Col>
                <Col md={10} sm={11} className="position-relative"><TradingChart option={barOption3} data={data6} height="300"/><Image src={LogoIcon} width="60" height="60" className="position-absolute chart-opacity-logo"/></Col>
              </Row>
              {/* <TraderChart option={barOption3} data={data6} height="300"/> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <MarketplaceTable/>
      </div>
    );
  };

  return (
    <div>
      <Header title={headerTitle} />
      <div className="RankingTrendingPage position-relative">
        <Tabs
          defaultActiveKey="1"
          id="uncontrolled-tab-example"
          className="mb-3"
          onSelect={(selecedKey) => changeHeaderTitle(selecedKey)}
        >
          <Tab eventKey="1" title="Top Collections">
            <CollectionTab />
          </Tab>
          <Tab eventKey="2" title="Top Mints">
            <MintsTab />
          </Tab>
          <Tab eventKey="3" title="Newly Added">
            <AddedTab />
          </Tab>
          <Tab eventKey="4" title="Top Sales">
            <SalesTab />
          </Tab>
          <Tab eventKey="5" title="Marketplaces">
            <MarketplaceTab />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
