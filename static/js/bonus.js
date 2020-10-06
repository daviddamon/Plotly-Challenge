// Plotly Challenge

// get data from json to build plots
function buildPlots(id) {

  // load json file into json object
  d3.json("samples.json").then((data) => {
    console.log(data)

    // ***** Bar Chart *****
    // Use sample_values as the values for the bar chart.
    // Use otu_ids as the labels for the bar chart.
    // Use otu_labels as the hovertext for the chart.

    // filter metadata by id
    var samples = data.samples.filter(s => s.id === id)[0];
    //console.log(samples)
    
    // get top 10 sample values
    var top10SampleValues = samples.sample_values.slice(0, 10).reverse();
    //console.log(top10SampleValues);
   
    // get top 10 otu ids
    var top10OtuIDs = samples.otu_ids.slice(0, 10).reverse();
    //console.log(top10OtuIDs);

    // change the top 10 otu id's to the required format
    var idOtu = top10OtuIDs.map(d => "OTU " + d);
    console.log(`OTU IDS: ${idOtu}`);

    // get the top 10 labels
    var top10Labels = samples.otu_labels.slice(0, 10).reverse();
    console.log(`Top 10 Sample Values: ${top10SampleValues}`);
    console.log(`Top 10 Id Values: ${top10OtuIDs}`);

    // create a trace for bar chart - from activity 1.02
    var trace1 = {
      type:"bar",
      orientation: "h",
      x: top10SampleValues,
      y: idOtu,
      text: top10Labels
    };

    // create the data array for the plot
    var data1 = [trace1];

    // define the plot layout
    var layout1 = {
      title: "Top 10 OTU",
      font:{
        family: "Arial"
      },
      xaxis:{ title: "Sample Count" },
      yaxis:{
        title: "OTU ID's",
        tickmode: "linear"
      },
      bargap: 0.1
      // margin: {
      //   t:
      //   l:
      //   r:
      //   b:
      // }
    };
      
    // Plot the chart to a div tag with id "bar"
    Plotly.newPlot("bar", data1, layout1);

    // ***** Bubble Chart *****
    // Use otu_ids for the x values.
    // Use sample_values for the y values.
    // Use sample_values for the marker size.
    // Use otu_ids for the marker colors.
    // Use otu_labels for the text values.

    // create trace2 for bubble chart
    var trace2 = {
      type: "bubble",
      mode: "markers",
      text: samples.otu_labels,
      x: samples.otu_ids,
      y: samples.sample_values,
      marker: {
        size: samples.sample_values,
        color: samples.otu_ids,
        colorscale: "Jet"
      }
    };
      
    var data2 = [trace2];

    var layout2 = {
      title: "OTU ID vs. Count",
      showlegend: true,
      height: 500,
      width: 1000
    };

    Plotly.newPlot("bubble", data2, layout2);
    
    // ***** Gauge Chart *****
    // Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.
    // You will need to modify the example gauge code to account for values ranging from 0 through 9.
    // Update the chart whenever a new sample is selected.

    // get wash frequency
    var washFrequency = data.samples.wfreq;
    console.log(washFrequency);

    var trace3 = [
      {
        domain: {x:[0,1], y:[0,1]},
        type: "indicator",
        mode: "gauge",
        value: washFrequency,
        title: { text: "Belly Button Washes Per Week", color: "#444444", font: { size: 24 } },
        gauge: {
          shape: "angular",//pointer
          axis: { range: [null, 9]},
          bar: { color: "#850000" },//pointer color
          bgcolor: "#ffffff",//gauge background color
          //borderwidth: 2,
          //bordercolor: "gray",
          steps: [
            { range: [0, 1], color: "#f8f3ec" },
            { range: [1, 2], color: "#f4f1e4" },
            { range: [2, 3], color: "#e9e6c9" },
            { range: [3, 4], color: "#e5e8b0" },
            { range: [4, 5], color: "#d5e599" },
            { range: [5, 6], color: "#b7cd8f" },
            { range: [6, 7], color: "#8ac086" },
            { range: [7, 8], color: "#89bc8d" },
            { range: [8, 9], color: "#84b589" }
          ],
          threshold: {
            line: { color: "#850000", width: 4 },
            thickness: 0.75,
            value: 9
          }
        }
      }
    ];
    
    var data3 = [trace3];

    var layout3 = {
      title: "Belly Button Washing Frequency",
      width: 500,
      height: 400,
      margin: { t: 25, r: 25, l: 25, b: 25 },
      //paper_bgcolor: "#ffffff"",
      //font: { color: "black", family: "Arial" }
    };
    
    Plotly.newPlot("gauge", data3, layout3);
        
  });
}

// ***** Metadata Table *****
// Display the sample metadata, i.e., an individual's demographic information.
// Display each key-value pair from the metadata JSON object somewhere on the page.
// Update all of the plots any time that a new sample is selected.

function getData(id) {
  // read the json data 
  d3.json("samples.json").then((data) => {  
    
    var metaData = data.metadata;
    
    console.log(metaData);
  
    // filter meta data info by id
    var result = metaData.filter(meta => meta.id == id)[0];
    console.log(result)

    // select demographic panel to put data
    var panelInfo = d3.select("#sample-metadata");
    
    // empty the demographic info panel each time before getting new id info
    panelInfo.html("");

    // grab the necessary demographic data data for the id and append the info to the panel
    Object.entries(result).forEach(([key, value]) => {   
            panelInfo.append("h5").text(key.toUpperCase() + ": " + value);    
    });
  });
}

// create the function for the change event
function optionChanged(id) {
  buildPlots(id);
  getData(id);
}

// ***** Dropdown Menu ******

// create the function for the initial data rendering
function init() {

  // select dropdown menu 
  var dropdown = d3.select("#selDataset"); 

  // read the data 
  d3.json("samples.json").then((data) => {
      console.log(data)

      // get the id data to the dropdwown menu
      data.names.forEach((name) => {
          dropdown.append("option").text(name).property("value");
      });

      // call the functions to display the data and plots
      buildPlots(data.names[0]);
      getData(data.names[0]);
  });
}

init();
