document.addEventListener('DOMContentLoaded', function() {
    const data1 = [
      { month: 'Jan', desktop: 40 },
      { month: 'Feb', desktop: 30 },
      { month: 'Mar', desktop: 20 },
      { month: 'Apr', desktop: 27 },
      { month: 'May', desktop: 18 },
      { month: 'Jun', desktop: 23 },
      { month: 'Jul', desktop: 34 },
      { month: 'Aug', desktop: 45 },
      { month: 'Sep', desktop: 32 },
      { month: 'Oct', desktop: 21 },
      { month: 'Nov', desktop: 25 },
      { month: 'Dec', desktop: 29 }
    ];
  
    const config1 = {
      width: 500,
      height: 250,
      margin: { top: 5, right: 20, bottom: 5, left: 0 }
    };
  
    const renderAreaChart = (id, data) => {
      const { AreaChart, Area, XAxis, CartesianGrid, Tooltip } = Recharts;
      ReactDOM.render(
        React.createElement(
          AreaChart,
          { ...config1, data },
          React.createElement(XAxis, { dataKey: "month" }),
          React.createElement(CartesianGrid, { strokeDasharray: "3 3" }),
          React.createElement(Tooltip, {}),
          React.createElement(Area, { type: "monotone", dataKey: "desktop", stroke: "#8884d8", fill: "#8884d8" })
        ),
        document.getElementById(id)
      );
    };
  
    renderAreaChart("areachart1", data1);
    renderAreaChart("areachart2", data1);
    renderAreaChart("areachart3", data1);
    renderAreaChart("areachart4", data1);
  
    const renderLineChart = (id, data) => {
      const { LineChart, Line, XAxis, CartesianGrid, Tooltip } = Recharts;
      ReactDOM.render(
        React.createElement(
          LineChart,
          { ...config1, data },
          React.createElement(XAxis, { dataKey: "month" }),
          React.createElement(CartesianGrid, { strokeDasharray: "3 3" }),
          React.createElement(Tooltip, {}),
          React.createElement(Line, { type: "monotone", dataKey: "desktop", stroke: "#8884d8" })
        ),
        document.getElementById(id)
      );
    };
  
    renderLineChart("linechart", data1);
  });
  