import Chart from "react-apexcharts";

export const AreaChart = ({ option, data, height }) => {
  return <Chart options={option} series={data} height={height} type="area"/>;
};

export const PieChart = ({option, data, height}) => {
    return(
        <Chart
              options={option}
              series={data}
              height={height}
              type="donut"
            />
    )
}

export const BarChart = ({option, data, height}) => {
    return(
        <Chart
              options={option}
              series={data}
              height={height}
              type="bar"
            />
    )
}

export const TableBarChart = ({option, data, height }) => {
  return(
    <Chart
        options={option}
        series={data}
        height={height}
        type="bar"
      />
  )
}

export const TableAreaChart = ({ option, data, height }) => {
  return <Chart options={option} series={data} height={height} width="80%" type="area" />;
};

export const TableAreaChartGreen = ({option, data, height}) => {
  return <Chart options={option} series={data} height={height} type="area"/>
}

export const SplineChart = ({option, data, height}) => {
  return (
    <Chart
      options={option}
      series={data}
      height={height}
      type="line"
    />  
  )
}

export const SplineChart1 = ({option, data, width, height}) => {
  return (
    <Chart
      options={option}
      series={data}
      width={width}
      height={height}
      type="line"
    />  
  )
}

export const TradingChart = ({option, data, height}) => {
  return <Chart options={option} series={data} height={height} type="bar" width="100%" />;
}

export const TraderChart = ({option, data, height}) => {
  return <Chart options={option} series={data} height={height} type="bar"/>
}
