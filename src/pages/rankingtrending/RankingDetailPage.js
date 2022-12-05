import {
  Card,
  Col,
  Image,
  Row,
  Badge,
  Tabs,
  Tab,
  Table,
  Form,
  Button,
  ButtonGroup,
  Accordion, 
  Container
} from "react-bootstrap";
import "../../assets/styles/global.css";
import Avatar from "../../assets/images/avatars/1.png";
import ETHIcon from "../../assets/images/icons/eth.svg";
import CircleIcon from "../../assets/images/icons/circle.svg";
import PCIcon from "../../assets/images/icons/pc.svg";
import TwitterIcon from "../../assets/images/icons/twitter.svg";
import DiscordIcon from "../../assets/images/icons/discord.svg";
import CopyIcon from "../../assets/images/icons/copy.svg";
import OutIcon from "../../assets/images/icons/out.svg";
import HodlerIcon from "../../assets/images/icons/Hodlericon.svg";
import KingIcon from "../../assets/images/icons/king.svg";
import InfoIcon from "../../assets/images/icons/info.svg";
import SortIcon from "../../assets/images/icons/sort.svg";
import GoldHodler from "../../assets/images/icons/goldhodler.svg";
import GasIcon from "../../assets/images/icons/gasbox.svg";
import LogoIcon from "../../assets/images/logo.png";
import TagImg from '../../assets/images/icons/tag.svg';
import FloorImg from '../../assets/images/icons/floor.svg';
import NFT1 from "../../assets/images/avatars/nft/1.png";
import NFT2 from "../../assets/images/avatars/nft/2.png";
import NFT3 from "../../assets/images/avatars/nft/3.png";
import NFT4 from "../../assets/images/avatars/nft/4.png";
import NFT5 from "../../assets/images/avatars/nft/5.png";
import NFT6 from "../../assets/images/avatars/nft/6.png";
import NFT7 from "../../assets/images/avatars/nft/7.png";
import Mint1 from '../../assets/images/avatars/mints/1.png';
import Mint2 from '../../assets/images/avatars/mints/2.png';
import Mint3 from '../../assets/images/avatars/mints/3.png';
import Mint4 from '../../assets/images/avatars/mints/4.png';
import Mint5 from '../../assets/images/avatars/mints/5.png';
import Mint6 from '../../assets/images/avatars/mints/6.png';
import Mint7 from '../../assets/images/avatars/mints/7.png';
import Mint8 from '../../assets/images/avatars/mints/8.png';

import CardImage1 from '../../assets/images/avatars/card/1.png';
import CardImage2 from '../../assets/images/avatars/card/2.png';
import CardImage3 from '../../assets/images/avatars/card/3.png';
import CardImage4 from '../../assets/images/avatars/card/4.png';
import CardImage5 from '../../assets/images/avatars/card/5.png';
import CardImage6 from '../../assets/images/avatars/card/6.png';
import CardImage7 from '../../assets/images/avatars/card/7.png';

import HodlerPinkIcon from "../../assets/images/icons/hodler-icon-pink.svg";
import { DetailGradientCard, InterestCard } from "../../components/cards/Cards";
import { BiShareAlt, BiStar } from "react-icons/bi";
import { TableTDProgressbar3 } from "../../components/progressbar/Progressbar";
import {
  PieChart,
  SplineChart,
  TableAreaChartGreen,
} from "../../components/charts/Charts";
import Header from "../../components/layouts/header/Header";
import store from "../../config/Store";
import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Pagination from "rc-pagination";


const pieOption1 = {
  chart: {
    type: "donut",
    width: "100%",
    // offsetY: 30,
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        size: "70%",
        labels: {
          show: true,
          value: {
            fontSize: "24px",
            fontWeight: 900,
            color: "#fff",
            offsetY: -5,
          },
          total: {
            show: true,
            offsetY: 10,
            showAlways: true,
            fontSize: "0px",
            label: "Total",
          },
        },
      },
      offsetY: 0,
    },
    stroke: {
      colors: undefined,
    },
  },
  states: {
    normal: { filter: { type: "darken", value: 0.2 } },
    hover: { filter: { type: "darken", value: 1 } },
    active: { filter: { type: "darken", value: 1 } },
  },
  colors: ["#CC65EC", "#FFD573", "#D790F0", "#BB6BD9", "#2FCCF2"],
  stroke: { width: 0 },
  legend: {
    show: false,
    showForSingleSeries: true,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: "left",
    horizontalAlign: "center",
    floating: false,
    fontSize: "14px",
    fontFamily: "Helvetica, Arial",
    fontWeight: 400,
    inverseOrder: false,
    width: undefined,
    height: undefined,
    tooltipHoverFormatter: undefined,
    customLegendItems: [],
    offsetX: 0,
    offsetY: 0,
    labels: {
      colors: undefined,
      useSeriesColors: true,
    },
    markers: {
      width: 12,
      height: 12,
      strokeWidth: 0,
      strokeColor: "#fff",
      fillColors: undefined,
      radius: 12,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0,
    },
    itemMargin: {
      horizontal: 5,
      vertical: 0,
    },
    onItemClick: {
      toggleDataSeries: true,
    },
    onItemHover: {
      highlightDataSeries: true,
    },
  },
  series: [21, 23, 19],
  tooltip: {
    enabled: true,
  },
  labels: ["Nerver Sold", "Sold at Last Once"],
};

const pieOption = {
  chart: {
    type: "donut",
    width: "100%",
    // offsetY: 30,
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        size: "70%",
        labels: {
          show: true,
          value: {
            fontSize: "24px",
            fontWeight: 900,
            color: "#fff",
            offsetY: -5,
          },
          total: {
            show: true,
            offsetY: 10,
            showAlways: true,
            fontSize: "0px",
            label: "Total",
          },
        },
      },
      offsetY: 0,
    },
    stroke: {
      colors: undefined,
    },
  },
  states: {
    normal: { filter: { type: "darken", value: 0.2 } },
    hover: { filter: { type: "darken", value: 1 } },
    active: { filter: { type: "darken", value: 1 } },
  },
  colors: ["#CC65EC", "#2FCCF2", "#22C77A"],
  stroke: { width: 0 },
  legend: {
    show: false,
    showForSingleSeries: true,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: "left",
    horizontalAlign: "center",
    floating: false,
    fontSize: "14px",
    fontFamily: "Helvetica, Arial",
    fontWeight: 400,
    formatter: undefined,
    inverseOrder: false,
    width: undefined,
    height: undefined,
    tooltipHoverFormatter: undefined,
    customLegendItems: [],
    offsetX: 0,
    offsetY: 0,
    labels: {
      colors: ["#fff"],
      useSeriesColors: ["red"],
    },
    markers: {
      width: 12,
      height: 12,
      strokeWidth: 0,
      strokeColor: "#fff",
      radius: 12,
    },
    itemMargin: {
      horizontal: 5,
      vertical: 0,
    },
    onItemClick: {
      toggleDataSeries: true,
    },
    onItemHover: {
      highlightDataSeries: true,
    },
  },
  series: [21, 23, 19],
  tooltip: {
    enabled: true,
  },
  labels: ["Nerver Sold", "Sold at Last Once"],
};

const SplineChartOption = {
  chart: {
    background: "none",
    id : "mintsMainChart",
    toolbar: {
      autoSelected: "pan",
      show: false
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  legend: {
    show: false,
  },
  grid: {
    show: true,
    position: "back",
    borderColor: "#ffffff10",
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  colors: ["#CC65EC", "#2FCCF2"],
  xaxis: {
    categories: [
      "Aug 29",
      "Oct 06",
      "Nov 13",
      "Dec 21",
      "Jan 28",
      "Mar 07",
      "Apr 14",
      "May 22",
      "Jun 29",
      "Aug 06",
      "Sep 13",
      "Oct 19",
    ],
    axisBorder: {
      show: false,
    },
  },
};

const SplineSubChartOption = {
  chart: {
    background: "none",
    id : "mintsMainChart1",   
    brush: {
      target: "mintsMainChart",
      enabled: true
    },
    selection: {
      enabled: true,
      type: 'x',
      fill: {
        color: '#fff',
        opacity: 0.1
      },
      stroke: {
        width: 1,
        dashArray: 0,
        color: '#fff',
        opacity: 0.4
      },
    }  
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 1,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    borderColor: "red",
    strokeDashArray: 1,
    position : "front",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    padding : {
      bottom : -30,
      left : 40,
      top : -30      
    },
    row: {
      colors: "#ffffff",
      opacity: 0.2
    },  
    column: {
        colors: "#ffffff",
        opacity: 0.2
    },  
  },
  colors: ["#ffffff", "#ffffff00"],
  xaxis: {
    show : false,
    labels: {
      show: true,
    },
    // tickAmount: 2,
    // tickPlacement: 'between',
  },
  yaxis: {
    show : true,
    labels: {
      show: false,
    },  
    // tickAmount: 2,  
    // tickPlacement: 'between',
  },
};

const OverSplineChartOption = {
  chart: {
    background: "none",
    id : "detailMintLine",
    toolbar: {
      autoSelected: "pan",
      show: false
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  legend: {
    show: false,
  },
  grid: {
    show: true,
    position: "back",
    borderColor: "#ffffff10",
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  colors: ["#CC65EC", "#2FCCF2"],
  xaxis: {
    categories: [
      "Aug 29",
      "Oct 06",
      "Nov 13",
      "Dec 21",
      "Jan 28",
      "Mar 07",
      "Apr 14",
      "May 22",
      "Jun 29",
      "Aug 06",
      "Sep 13",
      "Oct 19",
    ],
    axisBorder: {
      show: false,
    },
  },
};

const OverXSplineSubChartOption = {
  chart: {
    background: "none",
    id : "detailMintLine1",   
    brush: {
      target: "detailMintLine",
      enabled: true
    },
    selection: {
      enabled: true,
      type: 'x',
      fill: {
        color: '#fff',
        opacity: 0.1
      },
      stroke: {
        width: 1,
        dashArray: 0,
        color: '#fff',
        opacity: 0.4
      },
    }  
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 1,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    borderColor: "red",
    strokeDashArray: 1,
    position : "front",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    padding : {
      bottom : -30,
      left : 40,
      top : -30      
    },
    row: {
      colors: "#ffffff",
      opacity: 0.2
    },  
    column: {
        colors: "#ffffff",
        opacity: 0.2
    },  
  },
  colors: ["#ffffff00", "#ffffff00"],
  xaxis: {
    show : false,
    labels: {
      show: true,
    },
    // tickAmount: 2,
    // tickPlacement: 'between',
  },
  yaxis: {
    show : true,
    labels: {
      show: false,
    },  
    // tickAmount: 2,  
    // tickPlacement: 'between',
  },
};

const OverXSplineSubChartOption1 = {
  chart: {
    background: "none",
    id : "detailMintLine1",   
    width: "30px",
    type: "bar",
    brush: {
      target: "detailMintLine",
      enabled: true
    },
    selection: {
      enabled: true,
      type: 'xy',
      fill: {
        color: '#fff',
        opacity: 0.1
      },
      stroke: {
        width: 1,
        dashArray: 0,
        color: '#fff',
        opacity: 0.4
      },
      yaxis: {
        min: -100,
        max: 100
      }
    }  
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 1,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    borderColor: "red",
    strokeDashArray: 1,
    position : "front",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    padding : {
      bottom :0,
      left : 0,
      top : 0      
    },
    row: {
      colors: "#ffffff",
      opacity: 0.2
    },  
    column: {
        colors: "#ffffff",
        opacity: 0.2
    },  
  },
  colors: ["#ffffff", "#ffffff"],
  xaxis: {
    show : false,
    labels: {
      show: true,
    },
    // tickAmount: 2,
    // tickPlacement: 'between',
  },
  yaxis: {
    show : true,
    labels: {
      show: false,
    },  
    // tickAmount: 2,  
    // tickPlacement: 'between',
  },
};

const OverYSplineSubChartOption = {
  chart: {
    background: "none",
    id : "detailMintLine1",   
    brush: {
      target: "detailMintLine",
      enabled: true
    },
    selection: {
      enabled: true,
      type: 'y',
      fill: {
        color: '#fff',
        opacity: 0.1
      },
      stroke: {
        width: 1,
        dashArray: 0,
        color: '#fff',
        opacity: 0.4
      },
    }  
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 1,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    borderColor: "red",
    strokeDashArray: 1,
    position : "front",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    padding : {
      bottom : -30,
      left : 40,
      top : -30      
    },
    row: {
      colors: "#ffffff",
      opacity: 0.2
    },  
    column: {
        colors: "#ffffff",
        opacity: 0.2
    },  
  },
  colors: ["#ffffff00", "#2FCCF2"],
  xaxis: {
    show : false,
    labels: {
      show: true,
    },
    // tickAmount: 2,
    // tickPlacement: 'between',
  },
  yaxis: {
    show : true,
    labels: {
      show: false,
    },  
    // tickAmount: 2,  
    // tickPlacement: 'between',
  },
};

const MintTrendChartOption = {
  chart: {
    background: "none",
    toolbar : false
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  legend: {
    show: false,
  },
  grid: {
    show: true,
    position: "back",
    borderColor: "#ffffff10",
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  colors: ["#CC65EC", "#F19100"],
  xaxis: {
    categories: [
      "Aug 29",
      "Oct 06",
      "Nov 13",
      "Dec 21",
      "Jan 28",
      "Mar 07",
      "Apr 14",
      "May 22",
      "Jun 29",
      "Aug 06",
      "Sep 13",
      "Oct 19",
    ],
    axisBorder: {
      show: true,
      color : '#725DEF',
    },
  },
  yaxis: {
    show: true,
    tickAmount: 5,
    min : 0,
    max : 10000
  }
};

const HodlerTrendChartOption = {
  chart: {
    background: "none",
    toolbar : false
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  legend: {
    show: false,
  },
  grid: {
    show: true,
    position: "back",
    borderColor: "#ffffff10",
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  colors: ["#CC65EC", "#2FCCF2"],
  xaxis: {
    categories: [
      "Aug 29",
      "Oct 06",
      "Nov 13",
      "Dec 21",
      "Jan 28",
      "Mar 07",
      "Apr 14",
      "May 22",
      "Jun 29",
      "Aug 06",
      "Sep 13",
      "Oct 19",
    ],
    axisBorder: {
      show: true,
      color : '#725DEF',
    },
  },
  yaxis: {
    show: true,
    tickAmount: 5,
    min : 0,
    max : 10000
  }
};

export default function RankingDetailPage() {
  const data4 = [37.56, 62.44];
  const data5 = [40.74, 11.7, 4.12, 2.61, 40.83, 0];

  const [headerTitle, setHeaderTitle] = store.useState("headerTitle");

  useEffect(() => {
    setHeaderTitle("RANKING TRENDING");
  })

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6.5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3.5,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };  

  const DetailCardData = [
    {
      color: "#EB6494",
      title: "Market Cap",
      mValue: "313.68",
      percent: "-0.56",
      top: "9",
    },
    {
      color: "#79DA95",
      title: "Hodlers",
      mValue: "12,913",
      percent: "0.02",
      top: "91",
    },
    {
      color: "#755EEC",
      title: "Volume (24H)",
      mValue: "1.23",
      percent: "7.84",
      top: "11",
    },
  ];

  const table1ThData = [
    { th: "NFT", sort : false, info : false },
    { th: "Minter", sort : false, info : false },
    { th: "Mint Price", sort : false, info : false },
    { th: "Market Cap", sort : true, info : false },
  ];

  const table1Data = [
    {
      avatar: Mint1,
      title: "9998",
      minter: "0x7b557a",
      mPrice: { eth: "0", gas: "0.0091" },
      mCap: "Apr 19, 2022",
    },
    {
      avatar: Mint2,
      title: "9998",
      minter: "0x7b557a",
      mPrice: { eth: "0", gas: "0.0091" },
      mCap: "Apr 19, 2022",
    },
    {
      avatar: Mint3,
      title: "9998",
      minter: "0x7b557a",
      mPrice: { eth: "0", gas: "0.0091" },
      mCap: "Apr 19, 2022",
    },
    {
      avatar: Mint4,
      title: "9998",
      minter: "0x7b557a",
      mPrice: { eth: "0", gas: "0.0091" },
      mCap: "Apr 19, 2022",
    },
    {
      avatar: Mint5,
      title: "9998",
      minter: "0x7b557a",
      mPrice: { eth: "0", gas: "0.0091" },
      mCap: "Apr 19, 2022",
    },
    {
      avatar: Mint6,
      title: "9998",
      minter: "0x7b557a",
      mPrice: { eth: "0", gas: "0.0091" },
      mCap: "Apr 19, 2022",
    },
    {
      avatar: Mint7,
      title: "9998",
      minter: "0x7b557a",
      mPrice: { eth: "0", gas: "0.0091" },
      mCap: "Apr 19, 2022",
    },
    {
      avatar: Mint8,
      title: "9998",
      minter: "0x7b557a",
      mPrice: { eth: "0", gas: "0.0091" },
      mCap: "Apr 19, 2022",
    },
  ];

  const table2ThData = [
    { th: "#", sort : false, info : false },
    { th: "Address", sort : false, info : false },
    { th: "Mints", sort : true, info : true },
    { th: "Avg Mint Price", sort : true, info : true },
    { th: "Last Mint", sort : false, info : false },
  ];

  const table2Data = [
    {
      address: "0x7b557a",
      mints: { max: 140, value: 139 },
      amPrice: 0,
      lMint: "Apr 19, 2022",
    },
    {
      address: "0x7b557a",
      mints: { max: 140, value: 139 },
      amPrice: 0,
      lMint: "Apr 19, 2022",
    },
    {
      address: "0x7b557a",
      mints: { max: 140, value: 139 },
      amPrice: 0,
      lMint: "Apr 19, 2022",
    },
    {
      address: "0x7b557a",
      mints: { max: 140, value: 139 },
      amPrice: 0,
      lMint: "Apr 19, 2022",
    },
    {
      address: "0x7b557a",
      mints: { max: 140, value: 139 },
      amPrice: 0,
      lMint: "Apr 19, 2022",
    },
    {
      address: "0x7b557a",
      mints: { max: 140, value: 139 },
      amPrice: 0,
      lMint: "Apr 19, 2022",
    },
    {
      address: "0x7b557a",
      mints: { max: 140, value: 139 },
      amPrice: 0,
      lMint: "Apr 19, 2022",
    },
    {
      address: "0x7b557a",
      mints: { max: 140, value: 139 },
      amPrice: 0,
      lMint: "Apr 19, 2022",
    },
   
  ];

  const SplineChartData = [
    {
      name: "Total Mints",
      data: [
        18.0, 15.5, 16.0, 18.0, 18.3, 17.8, 16.8, 17.2, 18.0, 18.9, 19.2, 18.0,
      ],
    },
    {
      name: "Unique Minters",
      data: [
        9.2, 12.0, 11.5, 9.0, 8.4, 9.0, 10.5, 12.0, 12.8, 12.0, 11.6, 13.5,
      ],
    },
  ];

  const MintTrendsChartData = [
    {
      name: "Total Mints",
      data: [
        0, 0, 9500, 9900, 9900, 9900, 9900, 9900, 9900, 9900, 9900, 9900
      ],
    },
    {
      name: "Unique Minters",
      data: [
        0, 0, 8100, 8500, 8500, 8500, 8500, 8500, 8500, 8500, 8500, 8500
      ],
    },
  ];

  const SplineChartData1 = [
    {
      name: "Total Mints",
      data: [7.4, 7.4, 8.6, 8.6, 9.0, 9.0, 8.7, 9.0, 8.9, 8.6, 8.7, 9.3],
    },
    {
      name: "Unique Minters",
      data: [
        8.5, 7.4, 7.45, 8.65, 8.1, 7.9, 8.5, 8.5, 8.02, 8.5, 8.2, 8.3, 8.7, 8.7,
        7.5, 9.1, 9.35, 8.45, 9.0, 8.6, 9.0, 9.0, 8.2, 7.9, 9.25, 8.55,
      ],
    },
  ];

  const TableAreaChartGreenOption = {
    dark: {
      chart: {
        id: "area-datetime",
        zoom: { enabled: false },
        toolbar: { show: false },
        foreColor: "#ffffff40",
        background: "none",
      },
      colors: ["#11BE78"],
      dataLabels: { enabled: false },
      markers: {
        strokeColor: "#11BE78",
        strokeWidth: 2,
        fillColor: "#fff",
        hover: { size: 5 },
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        colors: ["#11BE78"],
        width: 1,
      },
      grid: {
        show: true,
        position: "back",
        borderColor: "#111",
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding : {
          top: -35,
          bottom : -30,

        }
      },
      xaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
      },
      yaxis: {
        show: false,
        showAlways: false,
        opposite: false,
        showForNullSeries: false,
      },
      fill: {
        enabled: false,
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 1,
          gradientToColors: ["#11BE78"],
          inverseColors: true,
          opacityFrom: 0.8,
          opacityTo: 0.3,
          stops: [0, 100],
          colorStops: [],
        },
      },
    },

    light: {
      chart: {
        zoom: { enabled: false },
        toolbar: { show: false },
        foreColor: "#707070",
        background: "#fff",
      },
      colors: ["#EDAE50", "#188E54"],
      dataLabels: { enabled: false },
      markers: {
        strokeColor: "#EDAE50",
        strokeWidth: 2,
        fillColor: "#fff",
        hover: { size: 8 },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
      stroke: {
        curve: "straight",
        colors: ["#EDAE50", "#188E54"],
        width: 2,
      },
      grid: {
        borderColor: "#E9E9E9",
        strokeDashArray: 7,
      },
      xaxis: {
        type: "datetime",
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          style: { fontFamily: "Work Sans" },
          format: "MMM dd",
        },
      },
      yaxis: {
        opposite: true,
        labels: {},
      },
    },
  };

  const data1 = [
    [1353884400000, 33.3],
    [1353970800000, 33.18],
    [1354057200000, 33.88],
    [1354143600000, 34.09],
    [1354230000000, 34.61],
    [1354489200000, 34.7],
    [1354575600000, 35.3],
    [1354662000000, 35.4],
    [1354748400000, 35.14],
    [1354834800000, 35.48],
    [1355094000000, 35.75],
    [1355180400000, 35.54],
    [1355266800000, 35.96],
    [1355353200000, 35.53],
    [1355439600000, 37.56],
    [1355698800000, 37.42],
    [1355785200000, 37.49],
    [1355871600000, 38.09],
    [1355958000000, 37.87],
    [1356044400000, 37.71],
    [1356303600000, 37.53],
    [1356476400000, 37.55],
    [1356562800000, 37.3],
    [1356649200000, 36.9],
    [1356908400000, 37.68],
    [1357081200000, 38.34],
    [1357167600000, 37.75],
    [1357254000000, 38.13],
    [1357513200000, 37.94],
    [1357599600000, 38.14],
    [1357686000000, 38.66],
    [1357772400000, 38.62],
    [1357858800000, 38.09],
    [1358118000000, 38.16],
    [1358204400000, 38.15],
    [1358290800000, 37.88],
    [1358377200000, 37.73],
    [1358463600000, 37.98],
    [1358809200000, 37.95],
    [1358895600000, 38.25],
    [1358982000000, 38.1],
    [1359068400000, 38.32],
    [1359327600000, 38.24],
    [1359414000000, 38.52],
    [1359500400000, 37.94],
    [1359586800000, 37.83],
    [1359673200000, 38.34],
    [1359932400000, 38.1],
    [1360018800000, 38.51],
    [1360105200000, 38.4],
    [1360191600000, 38.07],
    [1360278000000, 39.12],
    [1360537200000, 38.64],
    [1360623600000, 38.89],
    [1360710000000, 38.81],
    [1360796400000, 38.61],
    [1360882800000, 38.63],
    [1361228400000, 38.99],
    [1361314800000, 38.77],
    [1361401200000, 38.34],
    [1361487600000, 38.55],
    [1361746800000, 38.11],
    [1361833200000, 38.59],
    [1361919600000, 39.6],
  ];

  const TableAreaChartGreenData = [
    {
      name: "TVL m$",
      data: data1,
    },
  ];

  const cardData = [
    {avatar : CardImage1, title : "Light Year by Dmitri... ", network : "ETH "},
    {avatar : CardImage2, title : "Rektguy", network : "ETH "},
    {avatar : CardImage3, title : "The Memes by 6529", network : "ETH "},
    {avatar : CardImage4, title : "Art Blocks", network : "ETH "},
    {avatar : CardImage5, title : "RTFKT X NIKE MON...", network : "ETH "},
    {avatar : CardImage6, title : "Otherdeed for Oth...", network : "ETH "},
    {avatar : CardImage7, title : "Ri", network : "ETH "},
    {avatar : CardImage7, title : "Ri", network : "ETH "},
    {avatar : CardImage7, title : "Ri", network : "ETH "},
    {avatar : CardImage7, title : "Ri", network : "ETH "},
    {avatar : CardImage7, title : "Ri", network : "ETH "},
    {avatar : CardImage7, title : "Ri", network : "ETH "},
  ];

  const OverviewTabContent = () => {
    return (
      <div>
        <div className="OverviewTabContent">
          <Row>
            <Col sm={12} xs={12} md={12}>
              <Card className="BackCard border-gradient-gray my-2">
                <Card.Body>
                  <Row>
                    <Col sm={12} xs={12} md={3}>
                      <div className="Overview-info-item">
                        <div
                          className="Overview-info-item-title text-white"
                          style={{ filter: "invert(0.5)" }}
                        >
                          Floor Price
                          <Image src={InfoIcon} className="ms-2" />
                        </div>
                        <div className="Overview-info-item-value">
                          <Image src={ETHIcon} className="me-2" />
                          11.14<span className="ms-2" style={{color : "#11BE78"}}>+4.61%</span>
                        </div>
                        <div className="Overview-info-item-chart">
                          <TableAreaChartGreen
                            option={TableAreaChartGreenOption.dark}
                            data={TableAreaChartGreenData}
                            height="20"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col sm={12} xs={12} md={3}>
                      <div className="Overview-info-item">
                        <div
                          className="Overview-info-item-title text-white"
                          style={{ filter: "invert(0.5)" }}
                        >
                          Volume(24H)
                          <Image src={InfoIcon} className="ms-2" />
                        </div>
                        <div className="Overview-info-item-value">
                          <Image src={ETHIcon} className="me-2" />
                          980.82<span className="ms-2"  style={{color : "#11BE78"}}>+202.11%</span>
                        </div>
                        <div className="Overview-info-item-chart">
                          <TableAreaChartGreen
                            option={TableAreaChartGreenOption.dark}
                            data={TableAreaChartGreenData}
                            height="20"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col sm={12} xs={12} md={3}>
                      <div className="Overview-info-item">
                        <div
                          className="Overview-info-item-title text-white"
                          style={{ filter: "invert(0.5)" }}
                        >
                          Sales(24H)
                          <Image src={InfoIcon} className="ms-2" />
                        </div>
                        <div className="Overview-info-item-value">
                          13.5<span className="ms-2"  style={{color : "#11BE78"}}>+200.00%</span>
                        </div>
                        <div className="Overview-info-item-chart">
                          <TableAreaChartGreen
                            option={TableAreaChartGreenOption.dark}
                            data={TableAreaChartGreenData}
                            height="20"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col sm={12} xs={12} md={3}>
                      <div className="Overview-info-item">
                        <div
                          className="Overview-info-item-title text-white"
                          style={{ filter: "invert(0.5)" }}
                        >
                          Avg Price(24H)
                          <Image src={InfoIcon} className="ms-2" />
                        </div>
                        <div className="Overview-info-item-value">
                          <Image src={ETHIcon} className="me-2" />
                          1.1<span className="ms-2"  style={{color : "#11BE78"}}>+0.70%</span>
                        </div>
                        <div className="Overview-info-item-chart">
                          <TableAreaChartGreen
                            option={TableAreaChartGreenOption.dark}
                            data={TableAreaChartGreenData}
                            height="20"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={12} xs={12} md={12}>
              <Card className="BackCard border-gradient-gray my-2">
                <Card.Body>
                  <div className="chart-card-header d-flex align-items-center justify-content-between">
                    <div className="chart-card-header-title d-flex align-items-center">
                      Mint Trends
                      <Image
                        src={InfoIcon}
                        className="ms-2"
                        style={{ filter: "invert(0.5)" }}
                      />
                    </div>
                    <div className="SearchOption">
                      <div className="d-flex align-items-center flex-row">
                        <ButtonGroup
                          aria-label="Basic example"
                          className="ms-2 timefilter"
                        >
                          <Button variant="secondary">24H</Button>
                          <Button variant="secondary" className="active">
                            7D
                          </Button>
                          <Button variant="secondary">30D</Button>
                          <Button variant="secondary">3M</Button>
                          <Button variant="secondary">1Y</Button>
                          <Button variant="secondary">ALL</Button>
                        </ButtonGroup>
                      </div>
                    </div>
                  </div>
                  <div className="chart-info-option d-flex position-relative mt-2">
                    <div className="chart-info-option-item me-5">
                      <div className="chart-info-option-item-title d-flex align-items-center">
                        <div>Floor Price</div>
                        <Image
                          src={InfoIcon}
                          className="ms-2"
                          style={{ filter: "invert(0.5)" }}
                        />
                      </div>
                      <div className="chart-info-option-item-value text-white text-center">
                        <Image src={ETHIcon} className="me-2" />
                        <strong>11.14</strong>
                        <span className="ms-2"  style={{color : "#11BE78"}}>+17.57%</span>
                      </div>
                    </div>
                    <div className="chart-info-option-item me-5">
                      <div className="chart-info-option-item-title d-flex align-items-center">
                        <div>Avg Price</div>
                        <Image
                          src={InfoIcon}
                          className="ms-2"
                          style={{ filter: "invert(0.5)" }}
                        />
                      </div>
                      <div className="chart-info-option-item-value text-white text-center">
                        <Image src={ETHIcon} className="me-2" />
                        <strong>8.25</strong>
                        <span className="ms-2"  style={{color : "#11BE78"}}>+9.49%</span>
                      </div>
                    </div>
                    <div className="chart-info-option-item me-5">
                      <div className="chart-info-option-item-title d-flex align-items-center">
                        <div>Normal Sales</div>
                      </div>
                      <div className="chart-info-option-item-value text-white text-left">
                        <strong>73</strong>
                      </div>
                    </div>
                    <div className="chart-info-option-item me-5">
                      <div className="chart-info-option-item-title d-flex align-items-center">
                        <div>Whale sales</div>
                      </div>
                      <div className="chart-info-option-item-value text-white text-left">
                        <strong>0</strong>
                      </div>
                    </div>
                    <Image src={LogoIcon} width="47" height="47" className="position-absolute chart-info-option-logo"/>
                  </div>
                  
                  <SplineChart
                    option={OverSplineChartOption}
                    data={SplineChartData}
                    height="300"
                  />
                  <SplineChart
                    option={OverXSplineSubChartOption}
                    data={SplineChartData}
                    height="30"
                  />                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={12} xs={12} md={6}>
              <Card className="BackCard border-gradient-gray my-2">
                <Card.Body>
                  <div className="chart-card-header d-flex align-items-center justify-content-between">
                    <div className="chart-card-header-title d-flex align-items-center">
                      Featured NFTs
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-2 mb-4">
                    <Image src={NFT1} width="80" height="80" />
                    <Image src={NFT2} width="80" height="80" />
                    <Image src={NFT3} width="80" height="80" />
                    <Image src={NFT4} width="80" height="80" />
                    <Image src={NFT5} width="80" height="80" />
                    <Image src={NFT6} width="80" height="80" />
                    <Image src={NFT7} width="80" height="80" />
                  </div>
                  <Button className="w-100 overview-card-button">
                    <Image
                      src={ETHIcon}
                      className="me-2"
                      style={{ filter: "invert(1)" }}
                    />
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} xs={12} md={6}>
              <Card className="BackCard border-gradient-gray my-2">
                <Card.Body>
                  <div className="chart-card-header d-flex align-items-center justify-content-between">
                    <div className="chart-card-header-title d-flex align-items-center">
                    Listing Data
                    </div>
                  </div>
                  <div className="row mt-2 mb-4">
                    <div className="d-flex align-items-center col-6">
                      <Image
                        src={TagImg}
                        width="80"
                        height="80"
                        className="me-2"
                      />
                      <div className="">
                        <div className="">Listed</div>
                        <div className="">
                          <strong className="text-white me-1">1.11%</strong>
                          <span>11/10000</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center col-6">
                      <Image
                        src={FloorImg}
                        width="80"
                        height="80"
                        className="me-2"
                      />
                      <div className="">
                        <div className="">Listed at Floor(-15%)</div>
                        <div className="">
                          <strong className="text-white me-1">0.21%</strong>
                          <span>21/10000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-100 overview-card-button">
                    Trade with Pro Chart & Feeds
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={12} xs={12} md={6}>
              <Card className="BackCard border-gradient-gray my-2">
                <Card.Body>
                  <div className="chart-card-header d-flex align-items-center justify-content-between">
                    <div className="chart-card-header-title d-flex align-items-center">
                      Mint Trends
                    </div>
                  </div>
                  <div className="chart-info-option d-flex">                   
                    <div className="chart-info-option-item me-5">
                      <div className="chart-info-option-item-title d-flex align-items-center">
                        <div>Totla Min ts</div>
                      </div>
                      <div className="chart-info-option-item-value text-white text-left">
                        <strong>10K</strong>
                      </div>
                    </div>
                    <div className="chart-info-option-item me-5">
                      <div className="chart-info-option-item-title d-flex align-items-center">
                        <div>Unique Minters</div>
                      </div>
                      <div className="chart-info-option-item-value text-white text-left">
                        <strong>8.7K</strong>
                      </div>
                    </div>
                  </div>
                  <SplineChart
                    option={MintTrendChartOption}
                    data={MintTrendsChartData}
                    height="300"
                  />
                  <div className="text-center in-depth-analytics">More in-depth analytics about Mints</div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} xs={12} md={6}>
              <Card className="BackCard border-gradient-gray my-2">
                <Card.Body>
                  <div className="chart-card-header d-flex align-items-center justify-content-between">
                    <div className="chart-card-header-title d-flex align-items-center">
                      Hodler Trends
                    </div>
                  </div>
                  <div className="chart-info-option d-flex">                   
                    <div className="chart-info-option-item me-5">
                      <div className="chart-info-option-item-title d-flex align-items-center">
                        <div>Hodlers</div>
                      </div>
                      <div className="chart-info-option-item-value text-white text-left">
                        <strong>6.58K</strong>
                      </div>
                    </div>
                    <div className="chart-info-option-item me-5">
                      <div className="chart-info-option-item-title d-flex align-items-center">
                        <div>Whales</div>
                      </div>
                      <div className="chart-info-option-item-value text-white text-left">
                        <strong>38</strong>
                      </div>
                    </div>
                  </div>
                  <SplineChart
                    option={HodlerTrendChartOption}
                    data={SplineChartData}
                    height="300"
                  />
                  <div className="text-center in-depth-analytics">More in-depth analytics about Mints</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={12} xs={12} md={12}>
              <Card className="BackCard border-gradient-gray my-2">
                <Card.Body>
                  <Row>
                    <Col sm={12} xs={12} md={6}>
                      <div className="chart-card-header d-flex align-items-center justify-content-between">
                        <div className="chart-card-header-title d-flex align-items-center">
                          Frequently Asked Questions
                        </div>
                      </div>
                      <Accordion >
                        <Accordion.Item eventKey="0">
                        <Accordion.Header>What's the basic info this collection?</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                        <Accordion.Header>What's the basic info this collection?</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                        <Accordion.Header>What's the basic info this collection?</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                    </Col>
                    <Col sm={12} xs={12} md={6}>
                      <div className="chart-card-header d-flex align-items-center justify-content-between">
                        <div className="chart-card-header-title d-flex align-items-center">
                          Frequently Asked Questions
                        </div>
                      </div>
                      <Accordion >
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>What's the basic info this collection?</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                        <Accordion.Header>What's the basic info this collection?</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                        <Accordion.Header>What's the basic info this collection?</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="table-title my-2">You Might Be Interested in</div>
          <div className="interested-card-section">
            <Row className="mb-3">
              <Carousel responsive={responsive}>
                {
                  cardData.map((item, idx) => (
                  <InterestCard avatar={item.avatar} title={ item.title} network={item.network}/>
                  ))
                }              
              </Carousel>
            </Row>
          </div>
            
        </div>
      </div>
    );
  };


  const TradesTabContent = () => {
    return <></>;
  };

  const TraitsTabContent = () => {
    return <></>;
  };

  const MintsTabContent = () => {
    
    return (
      <div>
        <div className="MintsTabContent">
          <Card className="BackCard border-gradient-gray my-2">
            <Card.Body>
              <div className="d-flex info-content align-items-center flex-row">
                <div className="me-5">
                  <div className="info-content-title">
                    Total Mints
                    <Image src={InfoIcon} className="ms-2 InfoIcon" />
                  </div>
                  <div className="info-content-value">
                    <strong className="text-white">10000</strong>
                  </div>
                </div>
                <div className="vr"></div>
                <div className="mx-5">
                  <div className="info-content-title">
                    Unique Minters
                    <Image src={InfoIcon} className="ms-2 InfoIcon" />
                  </div>
                  <div className="info-content-value d-flex align-items-center">
                    <strong className="text-white">10000</strong>
                    <span className="ms-2">(86.99%)</span>
                  </div>
                </div>
                <div className="vr"></div>
                <div className="mx-5">
                  <div className="info-content-title">
                    <Image src={HodlerIcon} className="me-2" />
                    Blue Chip Hodlers <strong>1845</strong>
                    <Image src={InfoIcon} className="ms-2 InfoIcon" />
                  </div>
                  <div className="info-content-value d-flex align-items-center">
                    <Badge className="d-flex align-items-center">
                      <Image src={KingIcon} className="me-2" />
                      Whales
                    </Badge>
                    <strong className="text-white ms-2">53</strong>
                  </div>
                </div>
                <div className="vr"></div>
                <div className="mx-5">
                  <div className="info-content-title">
                    Average Mint Price
                    <Image src={InfoIcon} className="ms-2 InfoIcon" />
                  </div>
                  <div className="text-white info-content-value">
                    <Image src={ETHIcon} />
                    <strong>1.97</strong>
                  </div>
                </div>
                <div className="vr"></div>
                <div className="mx-5">
                  <div className="info-content-title">
                    Mint Dration
                    <Image src={InfoIcon} className="ms-2 InfoIcon" />
                  </div>
                  <div className="text-white info-content-value">
                    <strong>3 Days</strong>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="BackCard border-gradient-gray my-2">
            <Card.Body>
              <div className="chart-card-header d-flex align-items-center justify-content-between">
                <div className="chart-card-header-title d-flex align-items-center">
                  Mint Trends
                  <Image
                    src={InfoIcon}
                    className="ms-2"
                    style={{ filter: "invert(0.5)" }}
                  />
                </div>
                <div className="SearchOption">
                  <div className="d-flex align-items-center flex-row">
                    <ButtonGroup
                      aria-label="Basic example"
                      className="ms-2 timefilter"
                    >
                      <Button variant="secondary">24H</Button>
                      <Button variant="secondary" className="active">
                        7D
                      </Button>
                      <Button variant="secondary">30D</Button>
                      <Button variant="secondary">3M</Button>
                      <Button variant="secondary">1Y</Button>
                      <Button variant="secondary">ALL</Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
              <div className="chart-info-option d-flex">
                <div className="chart-info-option-item me-5">
                  <div className="chart-info-option-item-title d-flex align-items-center">
                    <span className="me-1">●</span>
                    <div>Total Mints</div>
                    <Image
                      src={InfoIcon}
                      className="ms-2"
                      style={{ filter: "invert(0.5)" }}
                    />
                  </div>
                  <div className="chart-info-option-item-value text-white text-center">
                    <strong>19.43K</strong>
                  </div>
                </div>
                <div className="chart-info-option-item">
                  <div className="chart-info-option-item-title d-flex align-items-center">
                    <span className="me-1">●</span>
                    <div>Unique Minters</div>
                    <Image
                      src={InfoIcon}
                      className="ms-2"
                      style={{ filter: "invert(0.5)" }}
                    />
                  </div>
                  <div className="chart-info-option-item-value text-white text-center">
                    <strong>7.84 K</strong>
                  </div>
                </div>
              </div>
              <SplineChart
                option={SplineChartOption}
                data={SplineChartData}
                height="250"
              />
              <SplineChart
                option={SplineSubChartOption}
                data={SplineChartData}
                height="25"
              />
            </Card.Body>
          </Card>
          <Row>
            <Col sm={12} xs={12} md={6}>
              <Card className="BackCard border-gradient-gray my-1">
                <Card.Body>
                  <div className="chart-card-header d-flex align-items-center justify-content-between">
                    <div className="chart-card-header-title d-flex align-items-center">
                      NFT Circulation Distribution
                      <Image
                        src={InfoIcon}
                        className="ms-2"
                        style={{ filter: "invert(0.5)" }}
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3 justify-content-around">
                    <div className="Chart-value-info d-flex flex-column">
                      <div className="Chart-value-info-item my-1 py-1 px-2 d-flex align-items-center justify-content-between">
                        <div className="Chart-value-info-item-title">
                          <Image src={HodlerPinkIcon} className="me-2" />
                          Never Sold
                        </div>
                        <div className="Chart-value-info-item-value ms-5">
                          37.56%
                        </div>
                      </div>
                      <div className="Chart-value-info-item my-1 py-1 px-2 d-flex align-items-center justify-content-between">
                        <div className="Chart-value-info-item-title">
                          <Image src={HodlerIcon} className="me-2" />
                          Sold at Least Once
                        </div>
                        <div className="Chart-value-info-item-value ms-5">
                          37.56%
                        </div>
                      </div>
                    </div>
                    <div className="position-relative">
                      <PieChart option={pieOption} data={data4} height="240" />
                      <Image
                        src={LogoIcon}
                        width="65"
                        height="65"
                        className="position-absolute chart-logo"
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} xs={12} md={6}>
              <Card className="BackCard border-gradient-gray my-1">
                <Card.Body>
                  <div className="chart-card-header d-flex align-items-center justify-content-between">
                    <div className="chart-card-header-title d-flex align-items-center">
                      Holding Period Before First Sale
                      <Image
                        src={InfoIcon}
                        className="ms-2"
                        style={{ filter: "invert(0.5)" }}
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3 justify-content-around">
                    <div className="Chart-value-info d-flex flex-column">
                      <div className="Chart-value-info-item  py-1 px-2 d-flex align-items-center justify-content-between">
                        <div className="Chart-value-info-item-title">
                          <Image src={HodlerPinkIcon} className="me-2" />
                          24H
                        </div>
                        <div className="Chart-value-info-item-value ms-5">
                          40.74%
                        </div>
                      </div>
                      <div className="Chart-value-info-item py-1 px-2 d-flex align-items-center justify-content-between">
                        <div className="Chart-value-info-item-title">
                          <Image src={HodlerIcon} className="me-2" />
                          1-7D
                        </div>
                        <div className="Chart-value-info-item-value ms-5">
                          11.70%
                        </div>
                      </div>
                      <div className="Chart-value-info-item py-1 px-2 d-flex align-items-center justify-content-between">
                        <div className="Chart-value-info-item-title">
                          <Image src={HodlerIcon} className="me-2" />
                          7-30D
                        </div>
                        <div className="Chart-value-info-item-value ms-5">
                          4.12%
                        </div>
                      </div>
                      <div className="Chart-value-info-item py-1 px-2 d-flex align-items-center justify-content-between">
                        <div className="Chart-value-info-item-title">
                          <Image src={HodlerIcon} className="me-2" />
                          30D-3M
                        </div>
                        <div className="Chart-value-info-item-value ms-5">
                          2.61%
                        </div>
                      </div>
                      <div className="Chart-value-info-item py-1 px-2 d-flex align-items-center justify-content-between">
                        <div className="Chart-value-info-item-title">
                          <Image src={HodlerIcon} className="me-2" />
                          3M-1Y
                        </div>
                        <div className="Chart-value-info-item-value ms-5">
                          40.83%
                        </div>
                      </div>
                      <div className="Chart-value-info-item py-1 px-2 d-flex align-items-center justify-content-between">
                        <div className="Chart-value-info-item-title">
                          <Image src={HodlerIcon} className="me-2" />
                          1Y
                        </div>
                        <div className="Chart-value-info-item-value ms-5">
                          0.00%
                        </div>
                      </div>
                    </div>
                    <div className="position-relative">
                      <PieChart option={pieOption1} data={data5} height="240" />
                      <Image
                        src={LogoIcon}
                        width="65"
                        height="65"
                        className="chart-logo position-absolute"
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={12} xs={12} md={6}>
              <div className="table-title my-2">All Mint Activites</div>
              <Table
                striped
                bordered
                hover
                size="sm"
                className="mint-activities-table"
              >
                <thead>
                  <tr>
                    {table1ThData.map((th, idx) => (
                      <th className="px-3" key={idx}>
                        <div className="d-flex align-items-center justify-content-center">
                          {th.sort == true ? <Image src={SortIcon} /> : ""}
                          <span>{th.th}</span>
                          {th.info == true ? <Image src={InfoIcon} /> : ""}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table1Data.map((item, idx) => (
                    <tr>
                      <td className="px-3">
                        <Image
                          src={item.avatar}
                          width="45"
                          height="45"
                          className="me-2"
                        />
                        #{item.title}
                      </td>
                      <td className="px-3 text-center">
                        <Image src={GoldHodler} className="ms-4 me-2" />
                        {item.minter}
                      </td>
                      <td className="d-flex px-5 flex-column justify-content-center align-items-center">
                        <div className="w-50">
                          <Image src={ETHIcon} className="me-2" />
                          {item.mPrice.eth}
                        </div>
                        <div  className="w-50">
                          <Image src={GasIcon} className="me-2" />
                          {item.mPrice.gas}
                        </div>
                      </td>
                      <td className="px-3 text-center">{item.mCap}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Row className="mb-3">
                <Pagination className="table-pagination-section justify-content-center" showTotal={(total, range) => `Showing ${range[0]} - ${range[1]} out of ${total}`} total={455}/>
              </Row>
            </Col>
            <Col sm={12} xs={12} md={6}>
              <div className="d-flex align-items-center justify-content-between">
              <div className="table-title my-2 d-flex aling-items-center">
                Top Minters
                <Image
                  className="ms-2"
                  src={InfoIcon}
                  style={{ filter: "invert(0.5)" }}
                />
              </div>
              <ButtonGroup aria-label="Basic example" className="ms-2 minter-filter">
              <Button variant="secondary" className="active">
                Top Minters
              </Button>
              <Button variant="secondary">Whales</Button>
              <Button variant="secondary">Blue Chip Hodlers</Button>
            </ButtonGroup>
              </div>
              <Table
                striped
                bordered
                hover
                size="sm"
                className="top-minters-table"
              >
                <thead>
                  <tr>
                    {table2ThData.map((th, idx) => (
                      <th className="px-3" key={idx}>
                         <div className="d-flex align-items-center justify-content-start">
                          {th.sort == true ? <Image src={SortIcon} /> : ""}
                          <span>{th.th}</span>
                          {th.info == true ? <Image src={InfoIcon} /> : ""}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table2Data.map((item, idx) => (
                    <tr key={idx}>
                      <td className="px-3">{idx + 1}</td>
                      <td className="px-3">
                        <Image src={GoldHodler} className="ms-3 me-2" />
                        {item.address}
                      </td>
                      <td className="px-3">
                        <TableTDProgressbar3
                          value={item.mints.value}
                          max={item.mints.max}
                        />
                      </td>
                      <td className="ps-4 text-left">
                        <Image src={ETHIcon} className="ms-3 me-2" />
                        {item.amPrice}
                      </td>
                      <td className="ps-4 text-left"><span className="ms-2">{item.lMint}</span></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
                <Pagination className="table-pagination-section justify-content-center" showTotal={(total, range) => `Showing ${range[0]} - ${range[1]} out of ${total}`} total={455}/>
            </Col>
          </Row>
        </div>
      </div>
    );
  };

  const HodlersTabContent = () => {
    return <></>;
  };

  const ActivityTabContent = () => {
    return <></>;
  };



  return (
    <div>
      <Header title={headerTitle} />
      <div className="RankingDetailPage mt-3">
        <Card className="BackCard text-white border-gradient-gray">
          <Card.Body>
            <Row className="justify-content-around">
              <Col className="row" sm={12} xs={12} md={8}>
                <Col sm={12} xs={12} md={4} className="my-1">
                  <Image src={Avatar} className="w-100" width="287" height="287" />
                </Col>
                <Col sm={12} xs={12} md={8} className="my-1">
                  <div className="social-links float-end">
                    <a href="#" className="ms-2">
                      <Image src={PCIcon} />
                    </a>
                    <a href="#" className="ms-2">
                      <Image src={TwitterIcon} />
                    </a>
                    <a href="#" className="ms-2">
                      <Image src={DiscordIcon} />
                    </a>
                  </div>
                  <div className="mt-5 detail-item-title">
                    Mutant Ape Yacht Club
                  </div>
                  <div className="info-badge-group my-2">
                    <Badge className="me-2">
                      <Image className="me-1" src={ETHIcon} />
                      ETH
                    </Badge>
                    <Badge className="mx-2">
                      0x60E4d7
                      <Image src={CopyIcon} className="mx-2" />
                      <Image src={OutIcon} />
                    </Badge>
                    <Badge className="mx-2">ERC721</Badge>
                    <Badge className="mx-2">10000 NFTs</Badge>
                  </div>
                  <div className="badge-group my-2">
                    <Badge>PFP</Badge>
                  </div>
                  <div className="detail-item-description">
                    MUTANT APE YACHT CLUB NFTs are all collection of up to 20000
                    Mutant Ape NFTs that can be created by exposing a Bored Ape
                    to a vial of special MUTANT SERUM or by minting a Mutant Ape
                    in the public sale.
                  </div>
                  <div className="view-all">...View All</div>
                  <div className="functional-section mt-4 gap-3 d-flex align-items-center">
                    <BiShareAlt />
                    <div className="vr"></div>
                    <BiStar />
                    <span>195</span>
                  </div>
                </Col>
              </Col>
              <Col sm={12} xs={12} md={4} className="row">
                {DetailCardData.map((item, idx) => (
                  <Col sm={12} xs={12} md={6}>
                    <DetailGradientCard
                      key={idx}
                      color={item.color}
                      title={item.title}
                      mValue={item.mValue}
                      percent={item.percent}
                      top={item.top}
                    />
                  </Col>
                ))}
                <Col sm={12} xs={12} md={6}>
                  <Card
                    className="DetailGradientCard"
                    style={{ backgroundColor: "#5193F3" }}
                  >
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <div className="card-name mt-3">Floor Price</div>
                          <div className="d-flex align-items-center my-1">
                            <Image
                              src={ETHIcon}
                              width="20"
                              height="20"
                              className="me-2"
                            />
                            <span className="main-value">11.11</span>
                          </div>
                          <div className="d-flex align-items-center mt-2">
                            <Badge className="bottom-badge d-flex align-items-center justify-content-center me-2">
                              24h
                            </Badge>{" "}
                            <span className="percent" style={{color : "#EE4E7A"}}>-2.74%</span>
                          </div>
                        </div>
                        <div className="">
                          <Image src={CircleIcon} />
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Tabs
          defaultActiveKey="1"
          id="uncontrolled-tab-example"
          className="mt-3"
        >
          <Tab eventKey="1" title="Overview">
            <OverviewTabContent />
          </Tab>
          <Tab eventKey="2" title="Trades"></Tab>
          <Tab eventKey="3" title="Traits"></Tab>
          <Tab eventKey="4" title="Mints">
            <MintsTabContent />
          </Tab>
          <Tab eventKey="5" title="Hodlers"></Tab>
          <Tab eventKey="6" title="Activity"></Tab>
        </Tabs>
      </div>
    </div>
  );
}
