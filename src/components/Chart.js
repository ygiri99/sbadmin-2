import React, { useEffect } from 'react';

export default function Chart() {
    useEffect(() => {
        const scriptArea = document.createElement("script");

        scriptArea.src = "js/demo/chart-area-demo.js";

        document.body.appendChild(scriptArea);

        const scriptPie = document.createElement("script");

        scriptPie.src = "js/demo/chart-Pie-demo.js";

        document.body.appendChild(scriptPie);

        const scriptBar = document.createElement("script");

        scriptBar.src = "js/demo/chart-Bar-demo.js";

        document.body.appendChild(scriptBar);

        return () => {
          // clean up the script when the component in unmounted
          document.body.removeChild(scriptArea);
          document.body.removeChild(scriptPie);
          document.body.removeChild(scriptBar);
        }
      }, []);
   
    return (
        <>   {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <h1 className="h3 mb-2 text-gray-800">Charts</h1>
                <p className="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
                    The charts below have been customized - for further customization options, please visit the <a
                        target="_blank" href="https://www.chartjs.org/docs/latest/">official Chart.js
                        documentation</a>.</p>

                {/* <!-- Content Row --> */}
                <div className="row">

                    <div className="col-xl-8 col-lg-7">

                        {/* { <!-- Area Chart -->} */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
                            </div>
                            <div className="card-body">
                                {/* <Chartarea /> */}
                                <div className="chart-area">
                                    <canvas id='myAreaChart'></canvas>
                                </div>
                                <hr />
                                Styling for the area chart can be found in the
                                <code>/js/demo/chart-area-demo.js</code> file.
                            </div>
                        </div>

                        {/* <!-- Bar Chart --> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
                            </div>
                            <div className="card-body">
                                <div className="chart-bar">
                                    <canvas id="myBarChart"></canvas>
                                </div>
                                <hr />
                                Styling for the bar chart can be found in the
                                <code>/js/demo/chart-bar-demo.js</code> file.
                            </div>
                        </div>
                    </div>

                    {/* <!-- Donut Chart --> */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <div className="chart-pie pt-4">
                                    <canvas id="myPieChart"></canvas>
                                </div>
                                <hr />
                                Styling for the donut chart can be found in the
                                <code>/js/demo/chart-pie-demo.js</code> file.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /.container-fluid --> */}
        </>
    )
}
