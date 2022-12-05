import {
  Button,
  ButtonGroup,
  Form,
  Image,
  Table,
  Dropdown,
  Badge,
  Row
} from "react-bootstrap";
import "../../assets/styles/global.css";
import {
  TableTDProgressbar,
  TableTDProgressbar1,
  TableTDProgressbar2,
  TableTDProgressbar3,
} from "../progressbar/Progressbar";
import ETHIcon from "../../assets/images/icons/eth.svg";
import SortIcon from "../../assets/images/icons/sort.svg";
import InfoIcon from "../../assets/images/icons/info.svg";
import DiplomaIcon from "../../assets/images/icons/account/diploma.svg";
import HodlerIcon from "../../assets/images/icons/account/hodler.svg";
import TwitterIcon from "../../assets/images/icons/account/twitter.svg";
import WhaleIcon from "../../assets/images/icons/account/whale.svg";
import SettingIcon from "../../assets/images/icons/setting.svg";
import MintsProgressIcon from "../../assets/images/icons/mints-progress.svg";
import Avatar from "../../assets/images/avatars/NFT.png";
import Avatar1 from "../../assets/images/avatars/ranking_collections/1.png";
import Avatar2 from "../../assets/images/avatars/ranking_collections/2.png";
import Avatar3 from "../../assets/images/avatars/ranking_collections/3.png";
import Avatar4 from "../../assets/images/avatars/ranking_collections/4.png";
import Avatar5 from "../../assets/images/avatars/ranking_collections/5.png";
import Avatar6 from "../../assets/images/avatars/ranking_collections/6.png";
import Avatar7 from "../../assets/images/avatars/ranking_collections/7.png";
import Avatar8 from "../../assets/images/avatars/ranking_collections/8.png";
import Avatar9 from "../../assets/images/avatars/ranking_collections/9.png";
import Avatar10 from "../../assets/images/avatars/ranking_collections/10.png";
import Avatar11 from "../../assets/images/avatars/ranking_collections/11.png";
import Avatar12 from "../../assets/images/avatars/ranking_collections/12.png";

import { TableAreaChart, TableBarChart } from "../charts/Charts";
import Pagination from "rc-pagination";
import { Link } from "react-router-dom";
import { FaThLarge, FaRegEdit } from "react-icons/fa";
import {
  addedTableThData,
  collectionsTableThData,
  marketplaceTablethData,
  mintsTableThData,
  salesTableThData,
} from "../../config/TableConfig";
import Market1 from "../../assets/images/avatars/marketplace/1.png";
import Market2 from "../../assets/images/avatars/marketplace/2.png";
import Market3 from "../../assets/images/avatars/marketplace/3.png";
import Market4 from "../../assets/images/avatars/marketplace/4.png";
import Market5 from "../../assets/images/avatars/marketplace/5.png";
import Market6 from "../../assets/images/avatars/marketplace/6.png";
import Market7 from "../../assets/images/avatars/marketplace/7.png";
import Market8 from "../../assets/images/avatars/marketplace/8.png";
import Market9 from "../../assets/images/avatars/marketplace/9.png";
import Market10 from "../../assets/images/avatars/marketplace/10.png";

// import SwitchSelector from "react-switch-selector";

const barOption2 = {
  chart: {
    type: "bar",
    width: "100%",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 1,
      horizontal: false,
      columnWidth: "95%",
      endingShape: "flat",
      dataLabels: {
        position: "top",
      },
    },
  },
  grid: {
    show: false,
    padding: {
      top: -35,
      right: 0,
      bottom: -15,
      left: 0,
    },
  },
  colors: ["#30CEF3"],
  stroke: { width: 0 },
  dataLabels: {
    enabled: false,
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
    categories: [],
    axisBorder: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    crosshairs: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    showAlways: false,
    opposite: false,
    showForNullSeries: false,
  },
  tooltip: {
    enabled: false,
  },
};

const data1 = [
  [1327359600000, 30.95],
  [1327446000000, 31.34],
  [1327532400000, 31.18],
  [1327618800000, 31.05],
  [1327878000000, 31.0],
  [1327964400000, 30.95],
  [1328050800000, 31.24],
  [1328137200000, 31.29],
  [1328223600000, 31.85],
  [1328482800000, 31.86],
  [1328569200000, 32.28],
  [1328655600000, 32.1],
  [1328742000000, 32.65],
  [1328828400000, 32.21],
  [1329087600000, 32.35],
  [1329174000000, 32.44],
  [1329260400000, 32.46],
  [1329346800000, 32.86],
  [1329433200000, 32.75],
  [1329778800000, 32.54],
  [1329865200000, 32.33],
  [1329951600000, 32.97],
  [1330038000000, 33.41],
  [1330297200000, 33.27],
  [1330383600000, 33.27],
  [1330470000000, 32.89],
  [1330556400000, 33.1],
  [1330642800000, 33.73],
  [1330902000000, 33.22],
  [1330988400000, 31.99],
  [1331074800000, 32.41],
  [1331161200000, 33.05],
  [1331247600000, 33.64],
  [1331506800000, 33.56],
  [1331593200000, 34.22],
  [1331679600000, 33.77],
  [1331766000000, 34.17],
  [1331852400000, 33.82],
  [1332111600000, 34.51],
  [1332198000000, 33.16],
  [1332284400000, 33.56],
  [1332370800000, 33.71],
  [1332457200000, 33.81],
  [1332712800000, 34.4],
  [1332799200000, 34.63],
  [1332885600000, 34.46],
  [1332972000000, 34.48],
  [1333058400000, 34.31],
  [1333317600000, 34.7],
  [1333404000000, 34.31],
  [1333490400000, 33.46],
  [1333576800000, 33.59],
  [1333922400000, 33.22],
  [1334008800000, 32.61],
  [1334095200000, 33.01],
  [1334181600000, 33.55],
  [1334268000000, 33.18],
  [1334527200000, 32.84],
  [1334613600000, 33.84],
  [1334700000000, 33.39],
  [1334786400000, 32.91],
  [1334872800000, 33.06],
  [1335132000000, 32.62],
  [1335218400000, 32.4],
  [1335304800000, 33.13],
  [1335391200000, 33.26],
  [1335477600000, 33.58],
  [1335736800000, 33.55],
  [1335823200000, 33.77],
  [1335909600000, 33.76],
  [1335996000000, 33.32],
  [1336082400000, 32.61],
  [1336341600000, 32.52],
  [1336428000000, 32.67],
  [1336514400000, 32.52],
  [1336600800000, 31.92],
  [1336687200000, 32.2],
  [1336946400000, 32.23],
  [1337032800000, 32.33],
  [1337119200000, 32.36],
  [1337205600000, 32.01],
  [1337292000000, 31.31],
  [1337551200000, 32.01],
  [1337637600000, 32.01],
  [1337724000000, 32.18],
  [1337810400000, 31.54],
  [1337896800000, 31.6],
  [1338242400000, 32.05],
  [1338328800000, 31.29],
  [1338415200000, 31.05],
  [1338501600000, 29.82],
  [1338760800000, 30.31],
  [1338847200000, 30.7],
  [1338933600000, 31.69],
  [1339020000000, 31.32],
  [1339106400000, 31.65],
  [1339365600000, 31.13],
  [1339452000000, 31.77],
  [1339538400000, 31.79],
  [1339624800000, 31.67],
  [1339711200000, 32.39],
  [1339970400000, 32.63],
  [1340056800000, 32.89],
  [1340143200000, 31.99],
  [1340229600000, 31.23],
  [1340316000000, 31.57],
  [1340575200000, 30.84],
  [1340661600000, 31.07],
  [1340748000000, 31.41],
  [1340834400000, 31.17],
  [1340920800000, 32.37],
  [1341180000000, 32.19],
  [1341266400000, 32.51],
  [1341439200000, 32.53],
  [1341525600000, 31.37],
  [1341784800000, 30.43],
  [1341871200000, 30.44],
  [1341957600000, 30.2],
  [1342044000000, 30.14],
  [1342130400000, 30.65],
  [1342389600000, 30.4],
  [1342476000000, 30.65],
  [1342562400000, 31.43],
  [1342648800000, 31.89],
  [1342735200000, 31.38],
  [1342994400000, 30.64],
  [1343080800000, 30.02],
  [1343167200000, 30.33],
  [1343253600000, 30.95],
  [1343340000000, 31.89],
  [1343599200000, 31.01],
  [1343685600000, 30.88],
  [1343772000000, 30.69],
  [1343858400000, 30.58],
  [1343944800000, 32.02],
  [1344204000000, 32.14],
  [1344290400000, 32.37],
  [1344376800000, 32.51],
  [1344463200000, 32.65],
  [1344549600000, 32.64],
  [1344808800000, 32.27],
  [1344895200000, 32.1],
  [1344981600000, 32.91],
  [1345068000000, 33.65],
  [1345154400000, 33.8],
  [1345413600000, 33.92],
  [1345500000000, 33.75],
  [1345586400000, 33.84],
  [1345672800000, 33.5],
  [1345759200000, 32.26],
  [1346018400000, 32.32],
  [1346104800000, 32.06],
  [1346191200000, 31.96],
  [1346277600000, 31.46],
  [1346364000000, 31.27],
  [1346709600000, 31.43],
  [1346796000000, 32.26],
  [1346882400000, 32.79],
  [1346968800000, 32.46],
  [1347228000000, 32.13],
  [1347314400000, 32.43],
  [1347400800000, 32.42],
  [1347487200000, 32.81],
  [1347573600000, 33.34],
  [1347832800000, 33.41],
  [1347919200000, 32.57],
  [1348005600000, 33.12],
  [1348092000000, 34.53],
  [1348178400000, 33.83],
  [1348437600000, 33.41],
  [1348524000000, 32.9],
  [1348610400000, 32.53],
  [1348696800000, 32.8],
  [1348783200000, 32.44],
  [1349042400000, 32.62],
  [1349128800000, 32.57],
  [1349215200000, 32.6],
  [1349301600000, 32.68],
  [1349388000000, 32.47],
  [1349647200000, 32.23],
  [1349733600000, 31.68],
  [1349820000000, 31.51],
  [1349906400000, 31.78],
  [1349992800000, 31.94],
  [1350252000000, 32.33],
  [1350338400000, 33.24],
  [1350424800000, 33.44],
  [1350511200000, 33.48],
  [1350597600000, 33.24],
  [1350856800000, 33.49],
  [1350943200000, 33.31],
  [1351029600000, 33.36],
  [1351116000000, 33.4],
  [1351202400000, 34.01],
  [1351638000000, 34.02],
  [1351724400000, 34.36],
  [1351810800000, 34.39],
  [1352070000000, 34.24],
  [1352156400000, 34.39],
  [1352242800000, 33.47],
  [1352329200000, 32.98],
  [1352415600000, 32.9],
  [1352674800000, 32.7],
  [1352761200000, 32.54],
  [1352847600000, 32.23],
  [1352934000000, 32.64],
  [1353020400000, 32.65],
  [1353279600000, 32.92],
  [1353366000000, 32.64],
  [1353452400000, 32.84],
  [1353625200000, 33.4],
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

const data2 = [
  [1327359600000, 100],
  [1327446000000, 70],
  [1327532400000, 90],
  [1327618800000, 30],
  [1327878000000, 45],
  [1327964400000, 15],
  [1328050800000, 80],
  [1328137200000, 30],
  [1328223600000, 50],
  [1328482800000, 3],
  [1328569200000, 3],
  [1328655600000, 3],
  [1328742000000, 3],
];

const data3 = [
  [1327359600000, 3],
  [1327446000000, 3],
  [1327532400000, 3],
  [1327618800000, 3],
  [1327878000000, 50],
  [1327964400000, 30],
  [1328050800000, 80],
  [1328137200000, 15],
  [1328223600000, 45],
  [1328482800000, 30],
  [1328569200000, 90],
  [1328655600000, 70],
  [1328742000000, 100],
];

const options1 = {
  dark: {
    chart: {
      id: "area-datetime",
      zoom: { enabled: false },
      toolbar: { show: false },
      foreColor: "#ffffff40",
      background: "none",
      width: "20",
    },
    colors: ["#FD2B65"],
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
      colors: ["#FD2B65"],
      width: 1,
    },
    grid: {
      show: false,
      position: "back",
      borderColor: "#111",
      strokeDashArray: 7,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: -25,
        right: 0,
        bottom: -20,
        left: 20,
      },
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
        gradientToColors: ["#FD2B65"],
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

const options2 = {
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
      show: false,
      position: "back",
      borderColor: "#111",
      strokeDashArray: 7,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: -25,
        right: 0,
        bottom: -20,
        left: 20,
      },
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
const data5 = [
  {
    name: "Distribution",
    data: [400, 430, 448, 470, 1100, 1200, 1380],
  },
];

const series_1 = [
  {
    name: "red",
    data: data1,
  },
];

export const CollectionsTable = () => {
  return (
    <div className="CollectionsTable">
      <div className="SearchOption position-absolute end-0">
        <div className="d-flex align-items-center flex-row">
          <Form.Select aria-label="select value" className="ms-2">
            <option value="1">All</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Button className="ms-2 customize-button  d-flex align-items-center">
            <FaRegEdit className="me-2" />
            Customize
          </Button>
          <ButtonGroup aria-label="Basic example" className="ms-2 network">
            <Button variant="secondary" className="active">
              ETH
            </Button>
            <Button variant="secondary">USD</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example" className="ms-2 timefilter">
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
      <Table responsive striped>
        <thead>
          <tr>
            {collectionsTableThData.map((th, idx) => (
              <th key={idx} div className="">
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
          {collectionsData.map((item, idx) => (
            <tr key={idx}>
              <td className="text-center">{idx + 1}</td>
              <td className="Avatar-Name">
                <Link className="nav-link" to="/ranking/detail">
                  <Image
                    src={item.avatar}
                    width="46"
                    height="46"
                    className="me-2"
                  />{" "}
                  {item.title}
                </Link>
              </td>
              <td>
                <TableTDProgressbar
                  mValue={item.hVolume.mValue}
                  value={item.hVolume.value}
                  max={item.hVolume.max}
                />
              </td>
              <td>
                <TableTDProgressbar
                  mValue={item.fPrice.mValue}
                  value={item.fPrice.value}
                  max={item.fPrice.max}
                />
              </td>
              <td>
                <TableTDProgressbar
                  mValue={item.hSales.mValue}
                  value={item.hSales.value}
                  max={item.hSales.max}
                />
              </td>
              <td>
                <TableTDProgressbar
                  mValue={item.market.mValue}
                  value={item.market.value}
                  max={item.market.max}
                />
              </td>
              <td width="130" className="py-0">
                <TableBarChart
                  option={barOption2}
                  data={item.dVolume}
                  height="50"
                />
              </td>

              <td width="150">
                {item.dPrice[0].name == "red" ? (
                  <TableAreaChart
                    option={options1.dark}
                    data={item.dPrice}
                    height="50"
                  />
                ) : (
                  <TableAreaChart
                    option={options2.dark}
                    data={item.dPrice}
                    height="50"
                  />
                )}
              </td>
              <td>
                <TableTDProgressbar
                  mValue={item.whales.mValue}
                  value={item.whales.value}
                  max={item.whales.max}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export const MintsTable = () => {
  return (
    <div className="MintsTable">
      <div className="SearchOption position-absolute end-0">
        <div className="d-flex align-items-center flex-row">
          <Form.Select aria-label="select value" className="ms-2">
            <option value="1">All</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Button className="ms-2 customize-button  d-flex align-items-center">
            <FaRegEdit className="me-2" />
            Customize
          </Button>
          <ButtonGroup aria-label="Basic example" className="ms-2 network">
            <Button variant="secondary" className="active">
              ETH
            </Button>
            <Button variant="secondary">USD</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example" className="ms-2 timefilter">
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
      <Table responsive striped>
        <thead>
          <tr>
            {mintsTableThData.map((th, idx) => (
              <th key={idx} div className="">
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
          {mintsData.map((item, idx) => (
            <tr key={idx}>
              <td className="text-center">{idx + 1}</td>
              <td className="Avatar-Name">
                <Link className="nav-link" to="/ranking/detail">
                  <Image src={item.avatar} className="me-2" /> {item.title}
                </Link>
              </td>
              <td>
                <div className="d-flex flex-column">
                  <div className="top-cell w-70  d-flex align-items-baseline">
                    {item.mints.mValue}
                    {item.mints.mints != 0 ? (
                      <div className="ms-1 mints-process d-flex align-items-center">
                        <Image
                          src={MintsProgressIcon}
                          className="me-1"
                          width="8"
                        />
                        {item.mints.mints}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {item.mints.percent == 0 ? (
                    <div className="bottom-cell d-none w-100">
                      {item.mints.percent} %
                    </div>
                  ) : (
                    <div className="w-70">
                      {item.mints.percent > 0 ? (
                        <div
                          className="bottom-cell w-100"
                          style={{ color: "#11BE78" }}
                        >
                          {item.mints.percent} %
                        </div>
                      ) : (
                        <div className="bottom-cell w-100">
                          {item.mints.percent} %
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </td>
              <td className="text-left"><span>{item.nMinters}</span></td>
              <td>
                <TableTDProgressbar1
                  mValue={item.uMinters.mValue}
                  value={item.uMinters.value}
                  max={item.uMinters.max}
                />
              </td>
              <td>
                {item.mPrice.mValue != 0 ? (
                  <div className="d-flex align-items-center flex-column mx-auto">
                    <div className="top-cell w-50">
                      <Image src={ETHIcon} className="me-2" />
                      {item.mPrice.mValue}
                    </div>
                    {item.mPrice.value > 0 ? (
                      <div
                        className="bottom-cell w-50 d-flex align-items-center"
                        style={{ color: "#11BE78" }}
                      >
                        <Image src={ETHIcon} className="me-2" />
                        {item.mPrice.value}
                        <Badge className="ms-2">Floor</Badge>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <div className="d-flex align-items-center flex-column mx-auto">
                    <div className="top-cell w-50">
                      <Image src={ETHIcon} className="me-2" />
                      {item.mPrice.mValue}
                    </div>
                  </div>
                )}
              </td>
              <td className="text-center">
                {item.tMints.max != 0 ? (
                  <TableTDProgressbar2
                    mValue={item.tMints.mValue}
                    value={item.tMints.value}
                    max={item.tMints.max}
                  />
                ) : (
                  item.tMints.mValue
                )}
              </td>
              <td width="180">
                {item.dPrice[0].name == "red" ? (
                  <TableAreaChart
                    option={options1.dark}
                    data={item.dPrice}
                    height="50"
                  />
                ) : (
                  <TableAreaChart
                    option={options2.dark}
                    data={item.dPrice}
                    height="50"
                  />
                )}
              </td>
              <td>
                <div className="d-flex flex-column">
                  <div className="top-cell w-70">{item.sales.mValue}</div>
                  {item.sales.percent != 0 ? (
                    <div className="w-70">
                      {item.sales.percent > 0 ? (
                        <div
                          className="bottom-cell w-70"
                          style={{ color: "#11BE78" }}
                        >
                          {item.sales.percent} %
                        </div>
                      ) : (
                        <div className="bottom-cell w-70">
                          {item.sales.percent} %
                        </div>
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </td>
              <td>
                {item.fomo == "Medium" ? (
                  <div className="ms-4" style={{ fontSize: "12px", color: "#725DEF" }}>
                    {item.fomo}
                  </div>
                ) : (
                  <div className="ms-4" style={{ fontSize: "12px", color: "#11BE78" }}>
                    {item.fomo}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row>
        <Pagination className="table-pagination-section justify-content-center" showTotal={(total, range) => `Showing ${range[0]} - ${range[1]} out of ${total}`} total={455}/>
      </Row>
    </div>
  );
};

export const AddedTable = () => {
  return (
    <div className="AddedTable">
      <div className="SearchOption position-absolute end-0">
        <div className="d-flex align-items-center flex-row">
          <Form.Select aria-label="select value" className="ms-2">
            <option value="1">All</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Button className="ms-2 customize-button  d-flex align-items-center">
            <FaRegEdit className="me-2" />
            Customize
          </Button>
          <ButtonGroup aria-label="Basic example" className="ms-2 network">
            <Button variant="secondary" className="active">
              ETH
            </Button>
            <Button variant="secondary">USD</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example" className="ms-2 timefilter">
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
      <Table responsive striped>
        <thead>
          <tr>
            {addedTableThData.map((th, idx) => (
              <th key={idx} div className="">
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
          {addedData.map((item, idx) => (
            <tr key={idx}>
              <td className="text-center">{idx + 1}</td>
              <td className="Avatar-Name">
                <Link className="nav-link" to="/ranking/detail">
                  <Image src={item.avatar} className="me-2" /> {item.title}
                </Link>
              </td>
              <td>
                <TableTDProgressbar
                  mValue={item.mCap.mValue}
                  value={item.mCap.value}
                  max={item.mCap.max}
                />
              </td>
              <td className="">
                {item.hPercent != "" ? (
                  <div>
                    {item.hPercent >= 0 ? (
                      <span style={{ color: "#11BE78" }}>{item.hPercent}%</span>
                    ) : (
                      <span style={{ color: "#EE4E7A" }}>{item.hPercent}%</span>
                    )}
                  </div>
                ) : (
                  <div><span>--</span></div>
                )}
              </td>
              <td>
                <TableTDProgressbar
                  mValue={item.hVolume.mValue}
                  value={item.hVolume.value}
                  max={item.hVolume.max}
                />
              </td>
              <td>
                <TableTDProgressbar
                  mValue={item.fPrice.mValue}
                  value={item.fPrice.value}
                  max={item.fPrice.max}
                />
              </td>
              <td>
                <TableTDProgressbar
                  mValue={item.minters.mValue}
                  value={item.minters.value}
                  max={item.minters.max}
                />
              </td>
              <td>
                <TableTDProgressbar
                  mValue={item.wMinters.mValue}
                  value={item.wMinters.value}
                  max={item.wMinters.max}
                />
              </td>
              <td>
                <TableTDProgressbar
                  mValue={item.tMintsGas.mValue}
                  value={item.tMintsGas.value}
                  max={item.tMintsGas.max}
                />
              </td>
              <td className="added-text"><span>{item.added}</span></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row>
        <Pagination className="table-pagination-section justify-content-center" showTotal={(total, range) => `Showing ${range[0]} - ${range[1]} out of ${total}`} total={455}/>
      </Row>
    </div>
  );
};

export const SalesTable = () => {
  return (
    <div className="SalesTable">
      <div className="SearchOption position-absolute end-0">
        <div className="d-flex align-items-center flex-row">
          <Form.Select aria-label="select value" className="ms-2">
            <option value="1">All</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Button className="ms-2 customize-button  d-flex align-items-center">
            <FaRegEdit className="me-2" />
            Customize
          </Button>
          <ButtonGroup aria-label="Basic example" className="ms-2 network">
            <Button variant="secondary" className="active">
              ETH
            </Button>
            <Button variant="secondary">USD</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example" className="ms-2 timefilter">
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
      <Table responsive striped>
        <thead>
          <tr>
            {salesTableThData.map((th, idx) => (
              <th key={idx} div className="">
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
          {salesData.map((item, idx) => (
            <tr key={idx}>
              <td className="text-center">{idx + 1}</td>
              <td className="Avatar-Name">
                <Link className="nav-link" to="/ranking/detail">
                  <Image
                    src={item.avatar}
                    className="me-2"
                    width="45"
                    height="45"
                  />{" "}
                  {item.title}
                </Link>
              </td>
              <td className="">
                <Image
                  src={item.avatar}
                  width="45"
                  height="45"
                  className="border rounded-circle border-2"
                />
              </td>
              <td className="">
                <div className="">
                  {item.owner.whale != false ? (
                    <Image
                      src={WhaleIcon}
                      className="me-1"
                      width="10"
                      height="10"
                    />
                  ) : (
                    ""
                  )}
                  {item.owner.diploma != false ? (
                    <Image
                      src={DiplomaIcon}
                      className="me-1"
                      width="10"
                      height="10"
                    />
                  ) : (
                    ""
                  )}
                  {item.owner.twitter != false ? (
                    <Image
                      src={TwitterIcon}
                      className="me-1"
                      width="10"
                      height="10"
                    />
                  ) : (
                    ""
                  )}
                  {item.owner.hodler != false ? (
                    <Image
                      src={HodlerIcon}
                      className="me-1"
                      width="10"
                      height="10"
                    />
                  ) : (
                    ""
                  )}
                  {item.owner.address}
                </div>
              </td>
              <td>
                <TableTDProgressbar
                  mValue={item.lPrice.mValue}
                  value={item.lPrice.value}
                  max={item.lPrice.max}
                />
              </td>
              <td className="">
                <div>
                <Image src={ETHIcon} className="me-2" />{" "}
                {item.change > 0 ? (
                  <span style={{ color: "#11BE78" }}>+{item.change}</span>
                ) : (
                  <span style={{ color: "#EE4E7A" }}>{item.change}</span>
                )}
                </div>
              </td>
              <td>
                <TableTDProgressbar
                  mValue={item.hPrice.mValue}
                  value={item.hPrice.value}
                  max={item.hPrice.max}
                />
              </td>
              <td>
                <TableTDProgressbar
                  mValue={item.sales.mValue}
                  value={item.sales.value}
                  max={item.sales.max}
                />
              </td>
              <td className="last-deal-text text-center">{item.lDeal}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row>
        <Pagination className="table-pagination-section justify-content-center" showTotal={(total, range) => `Showing ${range[0]} - ${range[1]} out of ${total}`} total={455}/>
      </Row>
    </div>
  );
};

export const MarketplaceTable = () => {
  return (
    <div className="MarketplaceTable">
      <div className="table-title-section my-3 d-flex align-items-center justify-content-between">
        <div className="table-title text-white">Top Market</div>
        <div className="SearchOption">
          <div className="d-flex align-items-center flex-row">
            <Image src={SettingIcon} width="10" height="10" className="me-1" />
            <ButtonGroup
              aria-label="Basic example"
              className="ms-2 timefilter switch-control"
            >
              <Button variant="secondary" className="active"></Button>
              <Button variant="secondary"></Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Basic example" className="ms-2 network">
              <Button variant="secondary" className="active">
                ETH
              </Button>
              <Button variant="secondary">USD</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Basic example" className="ms-2 timefilter">
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
      <Table responsive striped>
        <thead>
          <tr>
            {marketplaceTablethData.map((th, idx) => (
              <th key={idx} div className="">
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
          {marketplaceData.map((item, idx) => (
            <tr key={idx}>
              <td className="Avatar-Name">
                <Link className="nav-link" to="/ranking/detail">
                  <Image src={item.avatar} className="me-2" /> {item.title}
                </Link>
              </td>
              <td>
                <TableTDProgressbar
                  mValue={item.volume.mvalue}
                  value={item.volume.value}
                  max={item.volume.max}
                />
              </td>
              <td>
                <TableTDProgressbar3
                  value={item.sales.value}
                  max={item.sales.max}
                />
              </td>
              <td>
                <TableTDProgressbar3
                  value={item.traders.value}
                  max={item.traders.max}
                />
              </td>
              <td>
                <TableTDProgressbar3
                  value={item.buyers.value}
                  max={item.buyers.max}
                />
              </td>
              <td>
                <TableTDProgressbar
                  value={item.sellers.value}
                  max={item.sellers.max}
                />
              </td>
              <td><span className="">{item.fRate}%</span></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row>
        <Pagination className="table-pagination-section justify-content-center px-3" showTotal={(total, range) => `Showing ${range[0]} - ${range[1]} out of ${total}`} total={455}/>
      </Row>
    </div>
  );
};

const collectionsData = [
  {
    no: "01",
    avatar: Avatar1,
    title: "Bored Ape Yacht Club",
    hVolume: { mValue: "1150", value: "1150", max: "1200" },
    fPrice: { mValue: "54.55", value: "54.55", max: "1000" },
    hSales: { mValue: "19", value: "19", max: "2000" },
    market: { mValue: "723440", value: "723440", max: "724000" },
    dVolume: [
      {
        name: "Distribution",
        data: [50, 60, 65, 100, 65, 30, 10],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "122", value: "122", max: "150" },
  },
  {
    no: "02",
    avatar: Avatar2,
    title: "Otherdeed for Otherside",
    hVolume: { mValue: "516.740", value: "516.74", max: "2000" },
    fPrice: { mValue: "0.8388", value: "10", max: "100" },
    hSales: { mValue: "366", value: "366", max: "1000" },
    market: { mValue: "321520", value: "321520", max: "1000000" },
    dVolume: [
      {
        name: "Distribution",
        data: [60, 65, 70, 75, 100, 60, 35],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "115", value: "115", max: "150" },
  },
  {
    no: "03",
    avatar: Avatar3,
    title: "Mutant Ape Yacht Club",
    hVolume: { mValue: "497.96", value: "497.96", max: "2000" },
    fPrice: { mValue: "10", value: "10", max: "200" },
    hSales: { mValue: "47", value: "47", max: "500" },
    market: { mValue: "301650", value: "301650", max: "100" },
    dVolume: [
      {
        name: "Distribution",
        data: [70, 100, 90, 70, 50, 60, 40],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "103", value: "103", max: "150" },
  },
  {
    no: "04",
    avatar: Avatar4,
    title: "Azuki",
    hVolume: { mValue: "350.02", value: "350.02", max: "1000" },
    fPrice: { mValue: "8.69", value: "8.69", max: "100" },
    hSales: { mValue: "34", value: "34", max: "1000" },
    market: { mValue: "148730", value: "148730", max: "6000000" },
    dVolume: [
      {
        name: "Distribution",
        data: [70, 75, 80, 100, 50, 50, 30],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "41", value: "41", max: "100" },
  },
  {
    no: "05",
    avatar: Avatar5,
    title: "Bored Ape Yacht Club",
    hVolume: { mValue: "206.1", value: "206.1", max: "1000" },
    fPrice: { mValue: "0.26", value: "0.26", max: "10" },
    hSales: { mValue: "624", value: "624", max: "10000" },
    market: { mValue: "5550", value: "5550", max: "20000" },
    dVolume: [
      {
        name: "Distribution",
        data: [20, 25, 100, 70, 30, 10, 20],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "9", value: "9", max: "100" },
  },
  {
    no: "06",
    avatar: Avatar6,
    title: "Otherdeed for Otherside",
    hVolume: { mValue: "171.43", value: "171.43", max: "1000" },
    fPrice: { mValue: "0", value: "0", max: "100" },
    hSales: { mValue: "512", value: "512", max: "600" },
    market: { mValue: "53910", value: "53910", max: "200000" },
    dVolume: [
      {
        name: "Distribution",
        data: [20, 25, 100, 70, 30, 10, 20],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "163", value: "163", max: "200" },
  },
  {
    no: "07",
    avatar: Avatar7,
    title: "Mutant Ape Yacht Club",
    hVolume: { mValue: "146.42", value: "146.62", max: "1000" },
    fPrice: { mValue: "7.03", value: "7.03", max: "10" },
    hSales: { mValue: "19", value: "19", max: "200" },
    market: { mValue: "211780", value: "211780", max: "1000000" },
    dVolume: [
      {
        name: "Distribution",
        data: [40, 45, 50, 100, 40, 80, 30],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "62", value: "62", max: "500" },
  },
  {
    no: "08",
    avatar: Avatar8,
    title: "Azuki",
    hVolume: { mValue: "135.23", value: "135.23", max: "1000" },
    fPrice: { mValue: "5.82", value: "5.82", max: "100" },
    hSales: { mValue: "22", value: "22", max: "100" },
    market: { mValue: "102130", value: "102130", max: "100000" },
    dVolume: [
      {
        name: "Distribution",
        data: [30, 100, 70, 60, 80, 50, 70],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "28", value: "28", max: "200" },
  },
  {
    no: "09",
    avatar: Avatar9,
    title: "Mutant Ape Yacht Club",
    hVolume: { mValue: "125.49", value: "125.49", max: "1000" },
    fPrice: { mValue: "7.16", value: "7.16", max: "1000" },
    hSales: { mValue: "15", value: "15", max: "18" },
    market: { mValue: "148520", value: "148520", max: "1000000" },
    dVolume: [
      {
        name: "Distribution",
        data: [15, 20, 100, 70, 20, 10, 15],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "9", value: "9", max: "100" },
  },
  {
    no: "10",
    avatar: Avatar10,
    title: "Azuki",
    hVolume: { mValue: "107.52", value: "107.52", max: "1000" },
    fPrice: { mValue: "0.045", value: "0.045", max: "10" },
    hSales: { mValue: "143", value: "143", max: "200" },
    market: { mValue: "296490", value: "296490", max: "1000000" },
    dVolume: [
      {
        name: "Distribution",
        data: [30, 40, 100, 80, 25, 10, 20],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "163", value: "163", max: "200" },
  },
  {
    no: "11",
    avatar: Avatar11,
    title: "Bored Ape Yacht Club",
    hVolume: { mValue: "101.09", value: "109.09", max: "1000" },
    fPrice: { mValue: "1.5", value: "1.5", max: "20" },
    hSales: { mValue: "62", value: "62", max: "1000" },
    market: { mValue: "15830", value: "15830", max: "100000" },
    dVolume: [
      {
        name: "Distribution",
        data: [40, 50, 60, 100, 40, 80, 30],
      },
    ],
    dPrice: [{ name: "green", data: data3 }],
    whales: { mValue: "122", value: "80", max: "100" },
  },
  {
    no: "12",
    avatar: Avatar12,
    title: "Otherdeed for Otherside",
    hVolume: { mValue: "516.740", value: "516.74", max: "2000" },
    fPrice: { mValue: "0.8388", value: "10", max: "100" },
    hSales: { mValue: "366", value: "366", max: "1000" },
    market: { mValue: "321520", value: "321520", max: "1000000" },
    dVolume: [
      {
        name: "Distribution",
        data: [60, 65, 70, 75, 100, 60, 35],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "115", value: "115", max: "150" },
  },
  {
    no: "13",
    avatar: Avatar1,
    title: "Mutant Ape Yacht Club",
    hVolume: { mValue: "497.96", value: "497.96", max: "2000" },
    fPrice: { mValue: "10", value: "10", max: "200" },
    hSales: { mValue: "47", value: "47", max: "500" },
    market: { mValue: "301650", value: "301650", max: "100" },
    dVolume: [
      {
        name: "Distribution",
        data: [70, 100, 90, 70, 50, 60, 40],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "103", value: "103", max: "150" },
  },
  {
    no: "14",
    avatar: Avatar2,
    title: "Azuki",
    hVolume: { mValue: "350.02", value: "350.02", max: "1000" },
    fPrice: { mValue: "8.69", value: "8.69", max: "100" },
    hSales: { mValue: "34", value: "34", max: "1000" },
    market: { mValue: "148730", value: "148730", max: "6000000" },
    dVolume: [
      {
        name: "Distribution",
        data: [70, 75, 80, 100, 50, 50, 30],
      },
    ],
    dPrice: [{ name: "green", data: data3 }],
    whales: { mValue: "41", value: "41", max: "100" },
  },
  {
    no: "15",
    avatar: Avatar3,
    title: "Bored Ape Yacht Club",
    hVolume: { mValue: "206.1", value: "206.1", max: "1000" },
    fPrice: { mValue: "0.26", value: "0.26", max: "10" },
    hSales: { mValue: "624", value: "624", max: "10000" },
    market: { mValue: "5550", value: "5550", max: "20000" },
    dVolume: [
      {
        name: "Distribution",
        data: [20, 25, 100, 70, 30, 10, 20],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "9", value: "9", max: "100" },
  },
  {
    no: "16",
    avatar: Avatar4,
    title: "Otherdeed for Otherside",
    hVolume: { mValue: "171.43", value: "171.43", max: "1000" },
    fPrice: { mValue: "0", value: "0", max: "100" },
    hSales: { mValue: "512", value: "512", max: "600" },
    market: { mValue: "53910", value: "53910", max: "200000" },
    dVolume: [
      {
        name: "Distribution",
        data: [20, 25, 100, 70, 30, 10, 20],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "163", value: "163", max: "200" },
  },
  {
    no: "17",
    avatar: Avatar5,
    title: "Mutant Ape Yacht Club",
    hVolume: { mValue: "146.42", value: "146.62", max: "1000" },
    fPrice: { mValue: "7.03", value: "7.03", max: "10" },
    hSales: { mValue: "19", value: "19", max: "200" },
    market: { mValue: "211780", value: "211780", max: "1000000" },
    dVolume: [
      {
        name: "Distribution",
        data: [40, 45, 50, 100, 40, 80, 30],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "62", value: "62", max: "500" },
  },
  {
    no: "18",
    avatar: Avatar6,
    title: "Azuki",
    hVolume: { mValue: "135.23", value: "135.23", max: "1000" },
    fPrice: { mValue: "5.82", value: "5.82", max: "100" },
    hSales: { mValue: "22", value: "22", max: "100" },
    market: { mValue: "102130", value: "102130", max: "100000" },
    dVolume: [
      {
        name: "Distribution",
        data: [30, 100, 70, 60, 80, 50, 70],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "28", value: "28", max: "200" },
  },
  {
    no: "19",
    avatar: Avatar7,
    title: "Mutant Ape Yacht Club",
    hVolume: { mValue: "125.49", value: "125.49", max: "1000" },
    fPrice: { mValue: "7.16", value: "7.16", max: "1000" },
    hSales: { mValue: "15", value: "15", max: "18" },
    market: { mValue: "148520", value: "148520", max: "1000000" },
    dVolume: [
      {
        name: "Distribution",
        data: [15, 20, 100, 70, 20, 10, 15],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "9", value: "9", max: "100" },
  },
  {
    no: "20",
    avatar: Avatar8,
    title: "Azuki",
    hVolume: { mValue: "107.52", value: "107.52", max: "1000" },
    fPrice: { mValue: "0.045", value: "0.045", max: "10" },
    hSales: { mValue: "143", value: "143", max: "200" },
    market: { mValue: "296490", value: "296490", max: "1000000" },
    dVolume: [
      {
        name: "Distribution",
        data: [30, 40, 100, 80, 25, 10, 20],
      },
    ],
    dPrice: [{ name: "red", data: data2 }],
    whales: { mValue: "163", value: "163", max: "200" },
  },
];

const mintsData = [
  {
    avatar: Avatar,
    title: "Supercute World",
    mints: { mValue: 60, percent: "-60.26", mints: 0 },
    nMinters: 31,
    uMinters: { mValue: "881", value: "881", max: "2422" },
    mPrice: { mValue: "0.09", value: "0.099" },
    tMints: { mValue: "2422", value: "2422", max: "8888" },
    dPrice: [{ name: "red", data: data2 }],
    sales: { mValue: "0", percent: "-100" },
    fomo: "Medium",
  },
  {
    avatar: Avatar,
    title: "The Greedy Machine...",
    mints: { mValue: 19, percent: "-375.00", mints: 1 },
    nMinters: 0,
    uMinters: { mValue: "1", value: "1", max: "333" },
    mPrice: { mValue: "0", value: "0" },
    tMints: { mValue: "333", value: "0", max: "0" },
    dPrice: [{ name: "red", data: data2 }],
    sales: { mValue: "0", percent: "0" },
    fomo: "Low",
  },
  {
    avatar: Avatar,
    title: "OKXFootballCup",
    mints: { mValue: 9, percent: "200.00", mints: 31 },
    nMinters: 9,
    uMinters: { mValue: "8956", value: "8956", max: "32077" },
    mPrice: { mValue: "0", value: "0.1" },
    tMints: { mValue: "32077", value: "0", max: "0" },
    dPrice: [{ name: "red", data: data2 }],
    sales: { mValue: "0", percent: "0" },
    fomo: "Low",
  },
  {
    avatar: Avatar,
    title: "Area54Cards",
    mints: { mValue: 4, percent: "0", mints: 0 },
    nMinters: 7,
    uMinters: { mValue: "244", value: "244", max: "2752" },
    mPrice: { mValue: "0", value: "0.011" },
    tMints: { mValue: "2752", value: "0", max: "0" },
    dPrice: [{ name: "green", data: data3 }],
    sales: { mValue: "0", percent: "0" },
    fomo: "Low",
  },
  {
    avatar: Avatar,
    title: "Supercute World",
    mints: { mValue: 60, percent: "-60.26", mints: 0 },
    nMinters: 31,
    uMinters: { mValue: "881", value: "881", max: "2422" },
    mPrice: { mValue: "0.09", value: "0.099" },
    tMints: { mValue: "2422", value: "2422", max: "8888" },
    dPrice: [{ name: "red", data: data2 }],
    sales: { mValue: "0", percent: "-100" },
    fomo: "Medium",
  },
  {
    avatar: Avatar,
    title: "The Greedy Machine...",
    mints: { mValue: 19, percent: "-375.00", mints: 1 },
    nMinters: 0,
    uMinters: { mValue: "1", value: "1", max: "333" },
    mPrice: { mValue: "0", value: "0" },
    tMints: { mValue: "333", value: "0", max: "0" },
    dPrice: [{ name: "red", data: data2 }],
    sales: { mValue: "0", percent: "0" },
    fomo: "Low",
  },
  {
    avatar: Avatar,
    title: "OKXFootballCup",
    mints: { mValue: 9, percent: "200.00", mints: 31 },
    nMinters: 9,
    uMinters: { mValue: "8956", value: "8956", max: "32077" },
    mPrice: { mValue: "0", value: "0.1" },
    tMints: { mValue: "32077", value: "0", max: "0" },
    dPrice: [{ name: "red", data: data2 }],
    sales: { mValue: "0", percent: "0" },
    fomo: "Low",
  },
  {
    avatar: Avatar,
    title: "Area54Cards",
    mints: { mValue: 4, percent: "0", mints: 0 },
    nMinters: 7,
    uMinters: { mValue: "244", value: "244", max: "2752" },
    mPrice: { mValue: "0", value: "0.011" },
    tMints: { mValue: "2752", value: "0", max: "0" },
    dPrice: [{ name: "green", data: data3 }],
    sales: { mValue: "0", percent: "0" },
    fomo: "Low",
  },
  {
    avatar: Avatar,
    title: "Supercute World",
    mints: { mValue: 60, percent: "-60.26", mints: 0 },
    nMinters: 31,
    uMinters: { mValue: "881", value: "881", max: "2422" },
    mPrice: { mValue: "0.09", value: "0.099" },
    tMints: { mValue: "2422", value: "2422", max: "8888" },
    dPrice: [{ name: "red", data: data2 }],
    sales: { mValue: "0", percent: "-100" },
    fomo: "Medium",
  },
  {
    avatar: Avatar,
    title: "The Greedy Machine...",
    mints: { mValue: 19, percent: "-375.00", mints: 1 },
    nMinters: 0,
    uMinters: { mValue: "1", value: "1", max: "333" },
    mPrice: { mValue: "0", value: "0" },
    tMints: { mValue: "333", value: "0", max: "0" },
    dPrice: [{ name: "red", data: data2 }],
    sales: { mValue: "0", percent: "0" },
    fomo: "Low",
  },
  {
    avatar: Avatar,
    title: "OKXFootballCup",
    mints: { mValue: 9, percent: "200.00", mints: 31 },
    nMinters: 9,
    uMinters: { mValue: "8956", value: "8956", max: "32077" },
    mPrice: { mValue: "0", value: "0.1" },
    tMints: { mValue: "32077", value: "0", max: "0" },
    dPrice: [{ name: "red", data: data2 }],
    sales: { mValue: "0", percent: "0" },
    fomo: "Low",
  },
  {
    avatar: Avatar,
    title: "Area54Cards",
    mints: { mValue: 4, percent: "0", mints: 0 },
    nMinters: 7,
    uMinters: { mValue: "244", value: "244", max: "2752" },
    mPrice: { mValue: "0", value: "0.011" },
    tMints: { mValue: "2752", value: "0", max: "0" },
    dPrice: [{ name: "green", data: data3 }],
    sales: { mValue: "0", percent: "0" },
    fomo: "Low",
  },
  {
    avatar: Avatar,
    title: "Supercute World",
    mints: { mValue: 60, percent: "-60.26", mints: 0 },
    nMinters: 31,
    uMinters: { mValue: "881", value: "881", max: "2422" },
    mPrice: { mValue: "0.09", value: "0.099" },
    tMints: { mValue: "2422", value: "2422", max: "8888" },
    dPrice: [{ name: "red", data: data2 }],
    sales: { mValue: "0", percent: "-100" },
    fomo: "Medium",
  },
  {
    avatar: Avatar,
    title: "The Greedy Machine...",
    mints: { mValue: 19, percent: "-375.00", mints: 1 },
    nMinters: 0,
    uMinters: { mValue: "1", value: "1", max: "333" },
    mPrice: { mValue: "0", value: "0" },
    tMints: { mValue: "333", value: "0", max: "0" },
    dPrice: [{ name: "red", data: data2 }],
    sales: { mValue: "0", percent: "0" },
    fomo: "Low",
  },
  {
    avatar: Avatar,
    title: "OKXFootballCup",
    mints: { mValue: 9, percent: "200.00", mints: 31 },
    nMinters: 9,
    uMinters: { mValue: "8956", value: "8956", max: "32077" },
    mPrice: { mValue: "0", value: "0.1" },
    tMints: { mValue: "32077", value: "0", max: "0" },
    dPrice: [{ name: "red", data: data2 }],
    sales: { mValue: "0", percent: "0" },
    fomo: "Low",
  },
  {
    avatar: Avatar,
    title: "Area54Cards",
    mints: { mValue: 4, percent: "0", mints: 0 },
    nMinters: 7,
    uMinters: { mValue: "244", value: "244", max: "2752" },
    mPrice: { mValue: "0", value: "0.011" },
    tMints: { mValue: "2752", value: "0", max: "0" },
    dPrice: [{ name: "green", data: data3 }],
    sales: { mValue: "0", percent: "0" },
    fomo: "Low",
  },
  {
    avatar: Avatar,
    title: "Supercute World",
    mints: { mValue: 60, percent: "-60.26", mints: 0 },
    nMinters: 31,
    uMinters: { mValue: "881", value: "881", max: "2422" },
    mPrice: { mValue: "0.09", value: "0.099" },
    tMints: { mValue: "2422", value: "2422", max: "8888" },
    dPrice: [{ name: "red", data: data2 }],
    sales: { mValue: "0", percent: "-100" },
    fomo: "Medium",
  },
  {
    avatar: Avatar,
    title: "The Greedy Machine...",
    mints: { mValue: 19, percent: "-375.00", mints: 1 },
    nMinters: 0,
    uMinters: { mValue: "1", value: "1", max: "333" },
    mPrice: { mValue: "0", value: "0" },
    tMints: { mValue: "333", value: "0", max: "0" },
    dPrice: [{ name: "red", data: data2 }],
    sales: { mValue: "0", percent: "0" },
    fomo: "Low",
  },
  {
    avatar: Avatar,
    title: "OKXFootballCup",
    mints: { mValue: 9, percent: "200.00", mints: 31 },
    nMinters: 9,
    uMinters: { mValue: "8956", value: "8956", max: "32077" },
    mPrice: { mValue: "0", value: "0.1" },
    tMints: { mValue: "32077", value: "0", max: "0" },
    dPrice: [{ name: "red", data: data2 }],
    sales: { mValue: "0", percent: "0" },
    fomo: "Low",
  },
  {
    avatar: Avatar,
    title: "Area54Cards",
    mints: { mValue: 4, percent: "0", mints: 0 },
    nMinters: 7,
    uMinters: { mValue: "244", value: "244", max: "2752" },
    mPrice: { mValue: "0", value: "0.011" },
    tMints: { mValue: "2752", value: "0", max: "0" },
    dPrice: [{ name: "green", data: data3 }],
    sales: { mValue: "0", percent: "0" },
    fomo: "Low",
  },
];

const addedData = [
  {
    avatar: Avatar1,
    title: "Cel Mates Crime Reports",
    mCap: { mValue: 2110, value: 2110, max: 10000 },
    hPercent: "",
    hVolume: { mValue: 1220, value: 1220, max: 1250 },
    fPrice: { mValue: 0.474, value: 0.474, max: 0.5 },
    minters: { mValue: 2147, value: 2147, max: 10000 },
    wMinters: { mValue: 2, value: 2, max: 10 },
    tMintsGas: { mValue: 60.22, value: 60.22, max: 1000 },
    added: "9 hours ago",
  },
  {
    avatar: Avatar2,
    title: "Regular Jobs",
    mCap: { mValue: 90300, value: 90300, max: 100000 },
    hPercent: "0.09",
    hVolume: { mValue: 0.1137, value: 0.1137, max: 0.12 },
    fPrice: { mValue: 0.008, value: 0.008, max: 0.025 },
    minters: { mValue: 1189, value: 1189, max: 100000 },
    wMinters: { mValue: 1, value: 1, max: 100 },
    tMintsGas: { mValue: 99.35, value: 99.35, max: 1000 },
    added: "10 hours ago",
  },
  {
    avatar: Avatar3,
    title: "0xGakuen",
    mCap: { mValue: 60540, value: 60540, max: 100000 },
    hPercent: "0.00",
    hVolume: { mValue: 0.03, value: 0.03, max: 0.03 },
    fPrice: { mValue: 0.03, value: 0.03, max: 0.03 },
    minters: { mValue: 532, value: 532, max: 10000 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 5.57, value: 5.57, max: 100 },
    added: "15 hours ago",
  },
  {
    avatar: Avatar4,
    title: "Misphits from...",
    mCap: { mValue: 79120, value: 79120, max: 1000000 },
    hPercent: "-0.24",
    hVolume: { mValue: 0.0097, value: 0.0097, max: 0.01 },
    fPrice: { mValue: 0.0097, value: 0.0097, max: 0.01 },
    minters: { mValue: 1130, value: 1130, max: 10000 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 18.3, value: 18.3, max: 100 },
    added: "17 hours ago",
  },
  {
    avatar: Avatar5,
    title: "Meta Sports O...",
    mCap: { mValue: 24000, value: 24000, max: 1000000 },
    hPercent: "0.00",
    hVolume: { mValue: 0, value: 0, max: 0 },
    fPrice: { mValue: 0, value: 0, max: 0 },
    minters: { mValue: 0, value: 0, max: 0 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 0, value: 0, max: 0 },
    added: "21 hours ago",
  },
  {
    avatar: Avatar6,
    title: "Super BBs",
    mCap: { mValue: 24000, value: 24000, max: 1000000 },
    hPercent: "12.52",
    hVolume: { mValue: 0.0689, value: 0.0689, max: 0.0689 },
    fPrice: { mValue: 0.0689, value: 0.0689, max: 0.1 },
    minters: { mValue: 1529, value: 1529, max: 10000 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 51.41, value: 51.41, max: 1000 },
    added: "22 hours ago",
  },
  {
    avatar: Avatar1,
    title: "Cel Mates Crime Reports",
    mCap: { mValue: 2110, value: 2110, max: 10000 },
    hPercent: "",
    hVolume: { mValue: 1220, value: 1220, max: 1250 },
    fPrice: { mValue: 0.474, value: 0.474, max: 0.5 },
    minters: { mValue: 2147, value: 2147, max: 10000 },
    wMinters: { mValue: 2, value: 2, max: 10 },
    tMintsGas: { mValue: 60.22, value: 60.22, max: 1000 },
    added: "9 hours ago",
  },
  {
    avatar: Avatar2,
    title: "Regular Jobs",
    mCap: { mValue: 90300, value: 90300, max: 100000 },
    hPercent: "0.09",
    hVolume: { mValue: 0.1137, value: 0.1137, max: 0.12 },
    fPrice: { mValue: 0.008, value: 0.008, max: 0.025 },
    minters: { mValue: 1189, value: 1189, max: 100000 },
    wMinters: { mValue: 1, value: 1, max: 100 },
    tMintsGas: { mValue: 99.35, value: 99.35, max: 1000 },
    added: "10 hours ago",
  },
  {
    avatar: Avatar3,
    title: "0xGakuen",
    mCap: { mValue: 60540, value: 60540, max: 100000 },
    hPercent: "0.00",
    hVolume: { mValue: 0.03, value: 0.03, max: 0.03 },
    fPrice: { mValue: 0.03, value: 0.03, max: 0.03 },
    minters: { mValue: 532, value: 532, max: 10000 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 5.57, value: 5.57, max: 100 },
    added: "15 hours ago",
  },
  {
    avatar: Avatar4,
    title: "Misphits from...",
    mCap: { mValue: 79120, value: 79120, max: 1000000 },
    hPercent: "-0.24",
    hVolume: { mValue: 0.0097, value: 0.0097, max: 0.01 },
    fPrice: { mValue: 0.0097, value: 0.0097, max: 0.01 },
    minters: { mValue: 1130, value: 1130, max: 10000 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 18.3, value: 18.3, max: 100 },
    added: "17 hours ago",
  },
  {
    avatar: Avatar5,
    title: "Meta Sports O...",
    mCap: { mValue: 24000, value: 24000, max: 1000000 },
    hPercent: "0.00",
    hVolume: { mValue: 0, value: 0, max: 0 },
    fPrice: { mValue: 0, value: 0, max: 0 },
    minters: { mValue: 0, value: 0, max: 0 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 0, value: 0, max: 0 },
    added: "21 hours ago",
  },
  {
    avatar: Avatar6,
    title: "Super BBs",
    mCap: { mValue: 24000, value: 24000, max: 1000000 },
    hPercent: "12.52",
    hVolume: { mValue: 0.0689, value: 0.0689, max: 0.0689 },
    fPrice: { mValue: 0.0689, value: 0.0689, max: 0.1 },
    minters: { mValue: 1529, value: 1529, max: 10000 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 51.41, value: 51.41, max: 1000 },
    added: "22 hours ago",
  },
  {
    avatar: Avatar1,
    title: "Cel Mates Crime Reports",
    mCap: { mValue: 2110, value: 2110, max: 10000 },
    hPercent: "",
    hVolume: { mValue: 1220, value: 1220, max: 1250 },
    fPrice: { mValue: 0.474, value: 0.474, max: 0.5 },
    minters: { mValue: 2147, value: 2147, max: 10000 },
    wMinters: { mValue: 2, value: 2, max: 10 },
    tMintsGas: { mValue: 60.22, value: 60.22, max: 1000 },
    added: "9 hours ago",
  },
  {
    avatar: Avatar2,
    title: "Regular Jobs",
    mCap: { mValue: 90300, value: 90300, max: 100000 },
    hPercent: "0.09",
    hVolume: { mValue: 0.1137, value: 0.1137, max: 0.12 },
    fPrice: { mValue: 0.008, value: 0.008, max: 0.025 },
    minters: { mValue: 1189, value: 1189, max: 100000 },
    wMinters: { mValue: 1, value: 1, max: 100 },
    tMintsGas: { mValue: 99.35, value: 99.35, max: 1000 },
    added: "10 hours ago",
  },
  {
    avatar: Avatar3,
    title: "0xGakuen",
    mCap: { mValue: 60540, value: 60540, max: 100000 },
    hPercent: "0.00",
    hVolume: { mValue: 0.03, value: 0.03, max: 0.03 },
    fPrice: { mValue: 0.03, value: 0.03, max: 0.03 },
    minters: { mValue: 532, value: 532, max: 10000 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 5.57, value: 5.57, max: 100 },
    added: "15 hours ago",
  },
  {
    avatar: Avatar4,
    title: "Misphits from...",
    mCap: { mValue: 79120, value: 79120, max: 1000000 },
    hPercent: "-0.24",
    hVolume: { mValue: 0.0097, value: 0.0097, max: 0.01 },
    fPrice: { mValue: 0.0097, value: 0.0097, max: 0.01 },
    minters: { mValue: 1130, value: 1130, max: 10000 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 18.3, value: 18.3, max: 100 },
    added: "17 hours ago",
  },
  {
    avatar: Avatar5,
    title: "Meta Sports O...",
    mCap: { mValue: 24000, value: 24000, max: 1000000 },
    hPercent: "0.00",
    hVolume: { mValue: 0, value: 0, max: 0 },
    fPrice: { mValue: 0, value: 0, max: 0 },
    minters: { mValue: 0, value: 0, max: 0 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 0, value: 0, max: 0 },
    added: "21 hours ago",
  },
  {
    avatar: Avatar6,
    title: "Super BBs",
    mCap: { mValue: 24000, value: 24000, max: 1000000 },
    hPercent: "12.52",
    hVolume: { mValue: 0.0689, value: 0.0689, max: 0.0689 },
    fPrice: { mValue: 0.0689, value: 0.0689, max: 0.1 },
    minters: { mValue: 1529, value: 1529, max: 10000 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 51.41, value: 51.41, max: 1000 },
    added: "22 hours ago",
  },
  {
    avatar: Avatar1,
    title: "Cel Mates Crime Reports",
    mCap: { mValue: 2110, value: 2110, max: 10000 },
    hPercent: "",
    hVolume: { mValue: 1220, value: 1220, max: 1250 },
    fPrice: { mValue: 0.474, value: 0.474, max: 0.5 },
    minters: { mValue: 2147, value: 2147, max: 10000 },
    wMinters: { mValue: 2, value: 2, max: 10 },
    tMintsGas: { mValue: 60.22, value: 60.22, max: 1000 },
    added: "9 hours ago",
  },
  {
    avatar: Avatar2,
    title: "Regular Jobs",
    mCap: { mValue: 90300, value: 90300, max: 100000 },
    hPercent: "0.09",
    hVolume: { mValue: 0.1137, value: 0.1137, max: 0.12 },
    fPrice: { mValue: 0.008, value: 0.008, max: 0.025 },
    minters: { mValue: 1189, value: 1189, max: 100000 },
    wMinters: { mValue: 1, value: 1, max: 100 },
    tMintsGas: { mValue: 99.35, value: 99.35, max: 1000 },
    added: "10 hours ago",
  },
  {
    avatar: Avatar3,
    title: "0xGakuen",
    mCap: { mValue: 60540, value: 60540, max: 100000 },
    hPercent: "0.00",
    hVolume: { mValue: 0.03, value: 0.03, max: 0.03 },
    fPrice: { mValue: 0.03, value: 0.03, max: 0.03 },
    minters: { mValue: 532, value: 532, max: 10000 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 5.57, value: 5.57, max: 100 },
    added: "15 hours ago",
  },
  {
    avatar: Avatar4,
    title: "Misphits from...",
    mCap: { mValue: 79120, value: 79120, max: 1000000 },
    hPercent: "-0.24",
    hVolume: { mValue: 0.0097, value: 0.0097, max: 0.01 },
    fPrice: { mValue: 0.0097, value: 0.0097, max: 0.01 },
    minters: { mValue: 1130, value: 1130, max: 10000 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 18.3, value: 18.3, max: 100 },
    added: "17 hours ago",
  },
  {
    avatar: Avatar5,
    title: "Meta Sports O...",
    mCap: { mValue: 24000, value: 24000, max: 1000000 },
    hPercent: "0.00",
    hVolume: { mValue: 0, value: 0, max: 0 },
    fPrice: { mValue: 0, value: 0, max: 0 },
    minters: { mValue: 0, value: 0, max: 0 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 0, value: 0, max: 0 },
    added: "21 hours ago",
  },
  {
    avatar: Avatar6,
    title: "Super BBs",
    mCap: { mValue: 24000, value: 24000, max: 1000000 },
    hPercent: "12.52",
    hVolume: { mValue: 0.0689, value: 0.0689, max: 0.0689 },
    fPrice: { mValue: 0.0689, value: 0.0689, max: 0.1 },
    minters: { mValue: 1529, value: 1529, max: 10000 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 51.41, value: 51.41, max: 1000 },
    added: "22 hours ago",
  },
  {
    avatar: Avatar1,
    title: "Cel Mates Crime Reports",
    mCap: { mValue: 2110, value: 2110, max: 10000 },
    hPercent: "",
    hVolume: { mValue: 1220, value: 1220, max: 1250 },
    fPrice: { mValue: 0.474, value: 0.474, max: 0.5 },
    minters: { mValue: 2147, value: 2147, max: 10000 },
    wMinters: { mValue: 2, value: 2, max: 10 },
    tMintsGas: { mValue: 60.22, value: 60.22, max: 1000 },
    added: "9 hours ago",
  },
  {
    avatar: Avatar2,
    title: "Regular Jobs",
    mCap: { mValue: 90300, value: 90300, max: 100000 },
    hPercent: "0.09",
    hVolume: { mValue: 0.1137, value: 0.1137, max: 0.12 },
    fPrice: { mValue: 0.008, value: 0.008, max: 0.025 },
    minters: { mValue: 1189, value: 1189, max: 100000 },
    wMinters: { mValue: 1, value: 1, max: 100 },
    tMintsGas: { mValue: 99.35, value: 99.35, max: 1000 },
    added: "10 hours ago",
  },
  {
    avatar: Avatar3,
    title: "0xGakuen",
    mCap: { mValue: 60540, value: 60540, max: 100000 },
    hPercent: "0.00",
    hVolume: { mValue: 0.03, value: 0.03, max: 0.03 },
    fPrice: { mValue: 0.03, value: 0.03, max: 0.03 },
    minters: { mValue: 532, value: 532, max: 10000 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 5.57, value: 5.57, max: 100 },
    added: "15 hours ago",
  },
  {
    avatar: Avatar4,
    title: "Misphits from...",
    mCap: { mValue: 79120, value: 79120, max: 1000000 },
    hPercent: "-0.24",
    hVolume: { mValue: 0.0097, value: 0.0097, max: 0.01 },
    fPrice: { mValue: 0.0097, value: 0.0097, max: 0.01 },
    minters: { mValue: 1130, value: 1130, max: 10000 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 18.3, value: 18.3, max: 100 },
    added: "17 hours ago",
  },
  {
    avatar: Avatar5,
    title: "Meta Sports O...",
    mCap: { mValue: 24000, value: 24000, max: 1000000 },
    hPercent: "0.00",
    hVolume: { mValue: 0, value: 0, max: 0 },
    fPrice: { mValue: 0, value: 0, max: 0 },
    minters: { mValue: 0, value: 0, max: 0 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 0, value: 0, max: 0 },
    added: "21 hours ago",
  },
  {
    avatar: Avatar6,
    title: "Super BBs",
    mCap: { mValue: 24000, value: 24000, max: 1000000 },
    hPercent: "12.52",
    hVolume: { mValue: 0.0689, value: 0.0689, max: 0.0689 },
    fPrice: { mValue: 0.0689, value: 0.0689, max: 0.1 },
    minters: { mValue: 1529, value: 1529, max: 10000 },
    wMinters: { mValue: 0, value: 0, max: 10 },
    tMintsGas: { mValue: 51.41, value: 51.41, max: 1000 },
    added: "22 hours ago",
  },
];

const salesData = [
  {
    avatar: Avatar1,
    title: "mpunk #11467",
    collection: Avatar1,
    owner: {
      whale: false,
      diploma: false,
      twitter: false,
      hodler: false,
      address: "0xA85477",
    },
    lPrice: { mValue: "795.88", value: 795.88, max: 800 },
    change: "-12.12",
    hPrice: { mValue: 808, value: 808, max: 1000 },
    sales: { mValue: 2, value: 2, max: 3 },
    lDeal: "7 hours ago",
  },
  {
    avatar: Avatar2,
    title: "mpunk #11755",
    collection: Avatar2,
    owner: {
      whale: false,
      diploma: false,
      twitter: false,
      hodler: false,
      address: "0x9852a0",
    },
    lPrice: { mValue: "295", value: 295, max: 300 },
    change: "200",
    hPrice: { mValue: 295, value: 295, max: 300 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "10 hours ago",
  },
  {
    avatar: Avatar3,
    title: "V1 PUNK #4464",
    collection: Avatar3,
    owner: {
      whale: true,
      diploma: false,
      twitter: false,
      hodler: false,
      address: "0x8Df03B",
    },
    lPrice: { mValue: "188.85", value: 188.85, max: 200 },
    change: "63.86",
    hPrice: { mValue: 188.85, value: 188.85, max: 200 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "23 hours ago",
  },
  {
    avatar: Avatar4,
    title: "CryptoPunk #2670",
    collection: Avatar4,
    owner: {
      whale: false,
      diploma: false,
      twitter: false,
      hodler: false,
      address: "shrektingwei...",
    },
    lPrice: { mValue: "295", value: 295, max: 300 },
    change: "200",
    hPrice: { mValue: 295, value: 295, max: 300 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "10 hours ago",
  },
  {
    avatar: Avatar5,
    title: "Bored Ape Yacht Club #9607",
    collection: Avatar5,
    owner: {
      whale: false,
      diploma: true,
      twitter: false,
      hodler: false,
      address: "BendDAO...",
    },
    lPrice: { mValue: "101.3", value: 101.3, max: 100 },
    change: "38.24",
    hPrice: { mValue: 101.3, value: 101.3, max: 100 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "21 hours ago",
  },
  {
    avatar: Avatar6,
    title: "Bored Ape Yacht Club #9607",
    collection: Avatar6,
    owner: {
      whale: false,
      diploma: true,
      twitter: true,
      hodler: true,
      address: "BendDAO...",
    },
    lPrice: { mValue: "101.3", value: 101.3, max: 100 },
    change: "38.24",
    hPrice: { mValue: 101.3, value: 101.3, max: 100 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "21 hours ago",
  },
  {
    avatar: Avatar1,
    title: "mpunk #11467",
    collection: Avatar1,
    owner: {
      whale: false,
      diploma: false,
      twitter: false,
      hodler: false,
      address: "0xA85477",
    },
    lPrice: { mValue: "795.88", value: 795.88, max: 800 },
    change: "-12.12",
    hPrice: { mValue: 808, value: 808, max: 1000 },
    sales: { mValue: 2, value: 2, max: 3 },
    lDeal: "7 hours ago",
  },
  {
    avatar: Avatar2,
    title: "mpunk #11755",
    collection: Avatar2,
    owner: {
      whale: false,
      diploma: false,
      twitter: false,
      hodler: false,
      address: "0x9852a0",
    },
    lPrice: { mValue: "295", value: 295, max: 300 },
    change: "200",
    hPrice: { mValue: 295, value: 295, max: 300 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "10 hours ago",
  },
  {
    avatar: Avatar3,
    title: "V1 PUNK #4464",
    collection: Avatar3,
    owner: {
      whale: true,
      diploma: false,
      twitter: false,
      hodler: false,
      address: "0x8Df03B",
    },
    lPrice: { mValue: "188.85", value: 188.85, max: 200 },
    change: "63.86",
    hPrice: { mValue: 188.85, value: 188.85, max: 200 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "23 hours ago",
  },
  {
    avatar: Avatar4,
    title: "CryptoPunk #2670",
    collection: Avatar4,
    owner: {
      whale: false,
      diploma: false,
      twitter: false,
      hodler: false,
      address: "shrektingwei...",
    },
    lPrice: { mValue: "295", value: 295, max: 300 },
    change: "200",
    hPrice: { mValue: 295, value: 295, max: 300 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "10 hours ago",
  },
  {
    avatar: Avatar5,
    title: "Bored Ape Yacht Club #9607",
    collection: Avatar5,
    owner: {
      whale: false,
      diploma: true,
      twitter: false,
      hodler: false,
      address: "BendDAO...",
    },
    lPrice: { mValue: "101.3", value: 101.3, max: 100 },
    change: "38.24",
    hPrice: { mValue: 101.3, value: 101.3, max: 100 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "21 hours ago",
  },
  {
    avatar: Avatar6,
    title: "Bored Ape Yacht Club #9607",
    collection: Avatar6,
    owner: {
      whale: false,
      diploma: true,
      twitter: true,
      hodler: true,
      address: "BendDAO...",
    },
    lPrice: { mValue: "101.3", value: 101.3, max: 100 },
    change: "38.24",
    hPrice: { mValue: 101.3, value: 101.3, max: 100 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "21 hours ago",
  },
  {
    avatar: Avatar1,
    title: "mpunk #11467",
    collection: Avatar1,
    owner: {
      whale: false,
      diploma: false,
      twitter: false,
      hodler: false,
      address: "0xA85477",
    },
    lPrice: { mValue: "795.88", value: 795.88, max: 800 },
    change: "-12.12",
    hPrice: { mValue: 808, value: 808, max: 1000 },
    sales: { mValue: 2, value: 2, max: 3 },
    lDeal: "7 hours ago",
  },
  {
    avatar: Avatar2,
    title: "mpunk #11755",
    collection: Avatar2,
    owner: {
      whale: false,
      diploma: false,
      twitter: false,
      hodler: false,
      address: "0x9852a0",
    },
    lPrice: { mValue: "295", value: 295, max: 300 },
    change: "200",
    hPrice: { mValue: 295, value: 295, max: 300 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "10 hours ago",
  },
  {
    avatar: Avatar3,
    title: "V1 PUNK #4464",
    collection: Avatar3,
    owner: {
      whale: true,
      diploma: false,
      twitter: false,
      hodler: false,
      address: "0x8Df03B",
    },
    lPrice: { mValue: "188.85", value: 188.85, max: 200 },
    change: "63.86",
    hPrice: { mValue: 188.85, value: 188.85, max: 200 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "23 hours ago",
  },
  {
    avatar: Avatar4,
    title: "CryptoPunk #2670",
    collection: Avatar4,
    owner: {
      whale: false,
      diploma: false,
      twitter: false,
      hodler: false,
      address: "shrektingwei...",
    },
    lPrice: { mValue: "295", value: 295, max: 300 },
    change: "200",
    hPrice: { mValue: 295, value: 295, max: 300 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "10 hours ago",
  },
  {
    avatar: Avatar5,
    title: "Bored Ape Yacht Club #9607",
    collection: Avatar5,
    owner: {
      whale: false,
      diploma: true,
      twitter: false,
      hodler: false,
      address: "BendDAO...",
    },
    lPrice: { mValue: "101.3", value: 101.3, max: 100 },
    change: "38.24",
    hPrice: { mValue: 101.3, value: 101.3, max: 100 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "21 hours ago",
  },
  {
    avatar: Avatar6,
    title: "Bored Ape Yacht Club #9607",
    collection: Avatar6,
    owner: {
      whale: false,
      diploma: true,
      twitter: true,
      hodler: true,
      address: "BendDAO...",
    },
    lPrice: { mValue: "101.3", value: 101.3, max: 100 },
    change: "38.24",
    hPrice: { mValue: 101.3, value: 101.3, max: 100 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "21 hours ago",
  },
  {
    avatar: Avatar5,
    title: "Bored Ape Yacht Club #9607",
    collection: Avatar5,
    owner: {
      whale: false,
      diploma: true,
      twitter: false,
      hodler: false,
      address: "BendDAO...",
    },
    lPrice: { mValue: "101.3", value: 101.3, max: 100 },
    change: "38.24",
    hPrice: { mValue: 101.3, value: 101.3, max: 100 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "21 hours ago",
  },
  {
    avatar: Avatar6,
    title: "Bored Ape Yacht Club #9607",
    collection: Avatar6,
    owner: {
      whale: false,
      diploma: true,
      twitter: true,
      hodler: true,
      address: "BendDAO...",
    },
    lPrice: { mValue: "101.3", value: 101.3, max: 100 },
    change: "38.24",
    hPrice: { mValue: 101.3, value: 101.3, max: 100 },
    sales: { mValue: 1, value: 1, max: 1.5 },
    lDeal: "21 hours ago",
  },
];

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
    fRate: 2.0,
  },
  {
    avatar: Market3,
    title: "X2Y2",
    volume: { value: "3680", max: "9000", mvalue: "3680" },
    sales: { value: 2756, max: 50000 },
    traders: { value: 2371, max: 2400 },
    buyers: { value: 1030, max: 2000 },
    sellers: { value: 1512, max: 200 },
    fRate: 0.5,
  },
  {
    avatar: Market4,
    title: "Blur",
    volume: { value: "2790", max: "9000", mvalue: "2790" },
    sales: { value: 8797, max: 50000 },
    traders: { value: 5193, max: 5200 },
    buyers: { value: 2275, max: 3000 },
    sellers: { value: 3774, max: 4000 },
    fRate: 0.0,
  },
  {
    avatar: Market5,
    title: "Blur Aggregator",
    volume: { value: "2360", max: "9000", mvalue: "2360" },
    sales: { value: 14055, max: 50000 },
    traders: { value: 8109, max: 8200 },
    buyers: { value: 2194, max: 3000 },
    sellers: { value: 6607, max: 10000 },
    fRate: 0.0,
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
